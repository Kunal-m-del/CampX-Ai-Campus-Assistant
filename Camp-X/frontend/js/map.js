/* College Map: Leaflet + OpenStreetMap tiles, OSM place import (Overpass) and in-app routing (OSM routing servers). No API key needed. */
const MAP_CATS={academic:['🏫','Academic block','#5b5ce2'],study:['📚','Library / Study','#0ea5e9'],food:['🍱','Food / Canteen','#f59e0b'],career:['💼','Placement / Career','#7c3aed'],admin:['🏢','Admin office','#64748b'],hostel:['🛏️','Hostel','#14b8a6'],sports:['⚽','Sports','#22c55e'],parking:['🅿️','Parking','#475569'],emergency:['🚨','Emergency / Medical','#ef4444'],other:['📍','Other','#8b5cf6']};
const OVERPASS=['https://overpass-api.de/api/interpreter','https://overpass.kumi.systems/api/interpreter'];
let MAPST=null;
const mapCat=t=>MAP_CATS[t]||MAP_CATS.other;
const mapCan=p=>!p.userId||p.userId===user?.id||user?.role==='admin';
const mapEl=id=>document.getElementById(id);
const mapFmtDist=m=>m<1000?Math.round(m)+' m':(m/1000).toFixed(1)+' km';
const mapFmtTime=s=>s<60?'under 1 min':s<3600?Math.round(s/60)+' min':Math.floor(s/3600)+' h '+Math.round(s%3600/60)+' min';
function mapHaversine(a,b){const R=6371000,r=x=>x*Math.PI/180,dLa=r(b.lat-a.lat),dLo=r(b.lng-a.lng),h=Math.sin(dLa/2)**2+Math.cos(r(a.lat))*Math.cos(r(b.lat))*Math.sin(dLo/2)**2;return 2*R*Math.asin(Math.sqrt(h))}

/* classify an OpenStreetMap feature into one of our categories */
function mapClassify(t){
  const a=t.amenity,b=t.building,l=t.leisure,n=t.name||'';
  if(a==='library'||/library/i.test(n))return'study';
  if(['canteen','restaurant','cafe','fast_food','food_court','ice_cream'].includes(a)||/canteen|cafeteria|\bmess\b|food court/i.test(n))return'food';
  if(['hospital','clinic','doctors','pharmacy','fire_station','police'].includes(a)||/medical|dispensary|health centre|first aid/i.test(n))return'emergency';
  if(a==='parking'||/parking/i.test(n))return'parking';
  if(['dormitory','dorm'].includes(b)||t.tourism==='hostel'||/hostel|dormitory/i.test(n))return'hostel';
  if(['pitch','sports_centre','stadium','track','fitness_centre','swimming_pool'].includes(l)||/ground|stadium|gym|sports|court/i.test(n))return'sports';
  if(/placement|training (and|&) placement/i.test(n))return'career';
  if(t.office||['bank','atm','post_office','townhall','community_centre'].includes(a)||/admin|registrar|principal|office/i.test(n))return'admin';
  if(['college','university','school','research_institute'].includes(a)||['university','college','school'].includes(b)||/block|lab|department|hall|auditorium|seminar|workshop|institute|building/i.test(n))return'academic';
  return'other';
}

async function map(c){
  if(typeof L==='undefined'){c.innerHTML='<div class="card"><div class="empty">⚠️ The map library could not load. Check your internet connection and refresh the page.</div></div>';return}
  const d=await api('/map');
  if(!d||!Array.isArray(d.places)){c.innerHTML='<div class="card"><h3>⚠️ Server needs a restart</h3><p class="muted">The backend is still running the old version. Stop it (Ctrl+C in the terminal), run <b>npm start</b> again, then refresh this page.</p></div>';return}
  if(MAPST&&MAPST.lm)MAPST.lm.remove();
  MAPST={center:d.center,places:d.places,boundary:d.boundary||[],bLayer:null,layer:null,markers:{},pick:false,pickRoute:false,routeStart:null,tmp:null,me:null,meLL:null,route:null,startMarker:null,lm:null};
  const opts=Object.entries(MAP_CATS).map(([k,v])=>`<option value="${k}">${v[0]} ${v[1]}</option>`).join('');
  c.innerHTML=`<div class="card">
    <div class="actions" style="flex-wrap:wrap">
      <input class="field search" id="mapSearch" oninput="mapRefresh()" placeholder="Search building, lab, office…">
      <select class="field" id="mapCat" onchange="mapRefresh()" style="max-width:210px"><option value="">All categories</option>${opts}</select>
      <button class="btn secondary" onclick="mapOpenDir()">🧭 Directions</button>
      <button class="btn secondary" onclick="mapLocate()">📍 My location</button>
      <button class="btn secondary" onclick="mapToggleSetup()">🏫 Set up campus</button>
      <button class="btn" onclick="mapStartAdd()">＋ Add location</button>
    </div>
    <div id="mapSetup" class="map-panel" style="display:none">
      <b>Step 1 · Find your college</b>
      <div class="actions" style="margin-top:8px;flex-wrap:wrap"><input class="field search" id="collegeQ" value="Ajay Kumar Garg Engineering College, Ghaziabad" placeholder="College name and city" onkeydown="if(event.key==='Enter')mapFindCollege()"><button class="btn" onclick="mapFindCollege()">Find</button><button class="btn ghost" onclick="mapUseView()">Use current map view</button></div>
      <div id="collegeRes" class="list" style="margin-top:8px"></div>
      <hr style="border:0;border-top:1px solid var(--line);margin:14px 0">
      <b>Step 2 · Auto-add buildings from OpenStreetMap</b>
      <p class="muted" style="margin:6px 0">Finds named buildings, libraries, canteens, hostels, grounds etc. around the campus centre and adds them as pins. You can edit or delete any pin afterwards.</p>
      <div class="actions" style="flex-wrap:wrap"><select class="field" id="osmRadius" style="max-width:190px"><option value="300">Within 300 m</option><option value="600" selected>Within 600 m</option><option value="1000">Within 1 km</option><option value="1500">Within 1.5 km</option></select><button class="btn" onclick="mapImportOSM()">⬇️ Import from OpenStreetMap</button></div>
      <div id="osmStatus" class="muted" style="margin-top:8px"></div>
    </div>
    <div id="mapDir" class="map-panel" style="display:none">
      <b>🧭 Directions</b>
      <div class="form-grid" style="margin-top:8px">
        <select class="field" id="dir_from"></select><select class="field" id="dir_to"></select>
        <select class="field" id="dir_mode"><option value="foot">🚶 Walking</option><option value="bike">🚴 Cycling</option><option value="car">🚗 Driving</option></select>
        <button class="btn" onclick="mapRoute()">Get route</button>
      </div>
      <div id="dirOut" style="margin-top:10px"></div>
    </div>
    <div id="mapForm" class="map-panel" style="display:none">
      <b id="mfTitle">Add location</b><input type="hidden" id="mf_id">
      <div class="form-grid" style="margin-top:8px">
        <input class="field" id="mf_name" placeholder="Name (e.g. Library, CSE Lab)" maxlength="80">
        <select class="field" id="mf_type">${opts}</select>
        <input class="field full" id="mf_desc" placeholder="Description / timings (optional)" maxlength="300">
        <input class="field" id="mf_lat" placeholder="Latitude (click the map)">
        <input class="field" id="mf_lng" placeholder="Longitude (click the map)">
      </div>
      <div class="actions" style="margin-top:10px"><button class="btn" onclick="mapSave()">Save location</button><button class="btn ghost" onclick="mapCloseForm()">Cancel</button></div>
    </div>
    <div id="mapHint" class="muted" style="margin:10px 2px"></div>
    <div class="map-layout"><div id="leafletMap"></div><div id="mapList" class="list"></div></div>
    <p class="muted" style="font-size:12px">Map © OpenStreetMap contributors · Satellite © Esri · Routing by routing.openstreetmap.de</p></div>`;

  const s=d.center||{lat:22.5,lng:79,zoom:5};
  const lm=L.map('leafletMap').setView([s.lat,s.lng],s.zoom);
  const street=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap contributors'}).addTo(lm);
  const sat=L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{maxZoom:19,attribution:'Tiles &copy; Esri'});
  L.control.layers({'Street':street,'Satellite':sat}).addTo(lm);
  lm.on('click',e=>{if(MAPST.pickRoute)mapRouteStartPicked(e.latlng);else if(MAPST.pick)mapPicked(e.latlng)});
  MAPST.lm=lm;MAPST.layer=L.layerGroup().addTo(lm);
  if(!d.places.length)mapEl('mapSetup').style.display='block';
  mapDrawBoundary();
  mapRefresh(!MAPST.boundary.length&&!!d.places.length);
  if(MAPST.boundary.length)mapFitCampus();
  if(d.center?.isDefault)mapEl('osmStatus').textContent='Map is centred on AKGEC (approximate position).';
  setTimeout(()=>lm.invalidateSize(),150);
  if(!d.imported&&!d.places.length)setTimeout(mapImportOSM,400);
}

function mapRefresh(fit){
  const q=(mapEl('mapSearch')?.value||'').toLowerCase().trim(),cat=mapEl('mapCat')?.value||'';
  const list=MAPST.places.filter(p=>(!cat||p.type===cat)&&(!q||`${p.name} ${p.description||''} ${mapCat(p.type)[1]}`.toLowerCase().includes(q)));
  MAPST.layer.clearLayers();MAPST.markers={};
  list.forEach(p=>{
    const [emoji,label,color]=mapCat(p.type);
    const icon=L.divIcon({className:'map-pin-wrap',html:`<div class="map-pin" style="background:${color}"><span>${emoji}</span></div>`,iconSize:[34,34],iconAnchor:[17,34],popupAnchor:[0,-32]});
    const popup=`<b>${esc(p.name)}</b><br><small>${emoji} ${esc(label)}</small>${p.description?`<p style="margin:6px 0">${esc(p.description)}</p>`:''}<a href="#" onclick="mapOpenDir('${p.id}');return false">🧭 Directions to here</a>${mapCan(p)?` · <a href="#" onclick="mapEdit('${p.id}');return false">Edit</a> · <a href="#" onclick="mapDelete('${p.id}');return false">Delete</a>`:''}`;
    MAPST.markers[p.id]=L.marker([p.lat,p.lng],{icon,title:p.name}).bindPopup(popup).addTo(MAPST.layer);
  });
  mapEl('mapList').innerHTML=list.map(p=>{const [emoji,label]=mapCat(p.type);return `<div class="list-item map-item" onclick="mapFocus('${p.id}')"><b>${emoji} ${esc(p.name)}</b><br><small class="muted">${esc(label)}${p.description?' · '+esc(p.description):''}</small></div>`}).join('')||`<div class="empty">${MAPST.places.length?'No matching locations.':'No locations yet.'}</div>`;
  mapEl('mapHint').textContent=MAPST.places.length?`${list.length} of ${MAPST.places.length} locations shown. Tap a pin or list item, then use “Directions to here”.`:'No locations yet. Use Step 1 and Step 2 above to set up your campus automatically, or press “＋ Add location”.';
  if(fit&&list.length)MAPST.lm.fitBounds(L.latLngBounds(list.map(p=>[p.lat,p.lng])).pad(0.2),{maxZoom:18});
}
function mapFocus(id){const p=MAPST.places.find(x=>x.id===id),m=MAPST.markers[id];if(!p||!m)return;MAPST.lm.flyTo([p.lat,p.lng],Math.max(MAPST.lm.getZoom(),18),{duration:.8});setTimeout(()=>m.openPopup(),850);mapEl('leafletMap').scrollIntoView({behavior:'smooth',block:'center'})}

/* ---- campus setup ---- */
function mapToggleSetup(){const e=mapEl('mapSetup');e.style.display=e.style.display==='none'?'block':'none'}
async function mapFindCollege(){
  const q=mapEl('collegeQ').value.trim(),box=mapEl('collegeRes');if(!q)return;
  box.innerHTML='<div class="loading">Searching…</div>';
  try{
    const r=await fetch('https://nominatim.openstreetmap.org/search?format=jsonv2&limit=5&q='+encodeURIComponent(q));
    if(!r.ok)throw Error('Search service returned '+r.status);
    MAPST.results=await r.json();
    box.innerHTML=MAPST.results.map((x,i)=>`<div class="list-item map-item" onclick="mapPickResult(${i})"><b>${esc(x.display_name)}</b></div>`).join('')||'<div class="empty">No results. Try adding the city, or zoom the map to your campus and press “Use current map view”.</div>';
  }catch(e){box.innerHTML=`<div class="empty">⚠️ ${esc(e.message)}. You can also zoom the map to your campus and press “Use current map view”.</div>`}
}
function mapPickResult(i){const x=MAPST.results?.[i];if(x)mapSetCenter(Number(x.lat),Number(x.lon),17,x.display_name||'')}
function mapUseView(){const c=MAPST.lm.getCenter();mapSetCenter(c.lat,c.lng,MAPST.lm.getZoom(),'')}
async function mapSetCenter(lat,lng,zoom,name){
  try{
    MAPST.center=await api('/map/center',{method:'PUT',body:{lat,lng,zoom,name}});
    MAPST.lm.flyTo([lat,lng],zoom,{duration:1});
    mapEl('collegeRes').innerHTML='';mapEl('osmStatus').textContent='✅ Campus location saved. Now press “Import from OpenStreetMap” to add buildings automatically.';
  }catch(e){toast(e.message)}
}

/* ---- import places + campus boundary from OpenStreetMap (Overpass API) ---- */
async function mapOverpass(q){
  let err='';
  for(const url of OVERPASS){
    try{const r=await fetch(url,{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:'data='+encodeURIComponent(q)});if(!r.ok)throw Error('HTTP '+r.status);return await r.json()}catch(e){err=e.message}
  }
  throw Error(err||'lookup failed');
}
const mapInRing=(pt,ring)=>{let ins=false;for(let i=0,j=ring.length-1;i<ring.length;j=i++){const [yi,xi]=ring[i],[yj,xj]=ring[j];if((yi>pt[0])!==(yj>pt[0])&&pt[1]<(xj-xi)*(pt[0]-yi)/(yj-yi)+xi)ins=!ins}return ins};
const mapRingArea=r=>{let a=0;for(let i=0,j=r.length-1;i<r.length;j=i++)a+=(r[j][1]+r[i][1])*(r[j][0]-r[i][0]);return Math.abs(a/2)};
function mapRings(el){
  const mk=g=>g.map(p=>[p.lat,p.lon]),closed=g=>g&&g.length>=4&&g[0].lat===g[g.length-1].lat&&g[0].lon===g[g.length-1].lon,out=[];
  if(el.type==='way'&&closed(el.geometry))out.push(mk(el.geometry));
  if(el.type==='relation')for(const m of el.members||[])if(m.role==='outer'&&closed(m.geometry))out.push(mk(m.geometry));
  return out;
}
/* the campus outline = biggest education polygon that contains the campus centre (ignoring single buildings and huge areas) */
async function mapFindBoundary(lat,lng,r){
  const ar=`(around:${r},${lat},${lng})`;
  const d=await mapOverpass(`[out:json][timeout:25];(way["amenity"~"^(college|university)$"]${ar};rel["amenity"~"^(college|university)$"]${ar};way["landuse"="education"]${ar};rel["landuse"="education"]${ar};);out geom;`);
  const pt=[lat,lng],inside=(d.elements||[]).flatMap(mapRings).filter(g=>mapInRing(pt,g)).sort((a,b)=>mapRingArea(b)-mapRingArea(a));
  const good=inside.filter(g=>{const a=mapRingArea(g);return a>=2e-6&&a<=2e-4});
  const pick=good[0]||inside.find(g=>mapRingArea(g)>=2e-6);
  return pick?[pick]:[];
}
function mapDrawBoundary(){
  if(MAPST.bLayer){MAPST.bLayer.remove();MAPST.bLayer=null}
  if(!MAPST.boundary?.length)return;
  MAPST.bLayer=L.layerGroup(MAPST.boundary.map(g=>L.polygon(g,{color:'#4f46e5',weight:3,dashArray:'8 6',fillColor:'#6366f1',fillOpacity:.07,interactive:false}))).addTo(MAPST.lm);
  MAPST.bLayer.eachLayer(l=>l.bringToBack&&l.bringToBack());
}
function mapFitCampus(){
  if(MAPST.boundary?.length)MAPST.lm.fitBounds(L.polygon(MAPST.boundary[0]).getBounds().pad(0.08),{maxZoom:18});
  else mapRefresh(true);
}
async function mapImportOSM(){
  const st=mapEl('osmStatus'),c=MAPST.center||MAPST.lm.getCenter(),r=Number(mapEl('osmRadius').value)||600,lat=c.lat,lng=c.lng;
  st.textContent='⏳ Finding your campus boundary and buildings on OpenStreetMap…';
  let boundary=[];
  try{boundary=await mapFindBoundary(lat,lng,r)}catch(e){boundary=[]}
  const ar=`(around:${r},${lat},${lng})`;
  let data;
  try{data=await mapOverpass(`[out:json][timeout:25];(nwr["name"]["amenity"]${ar};nwr["name"]["building"]${ar};nwr["name"]["leisure"]${ar};nwr["name"]["office"]${ar};);out center tags 300;`)}
  catch(e){st.textContent='⚠️ OpenStreetMap lookup failed ('+e.message+'). Wait a minute and press Import again, or add locations manually.';return}
  const seen=new Set();let found=[];
  for(const el of data.elements||[]){
    const t=el.tags||{},name=(t.name||'').trim(),la=el.lat??el.center?.lat,lo=el.lon??el.center?.lon;
    if(!name||la==null||lo==null||seen.has(name.toLowerCase()))continue;
    seen.add(name.toLowerCase());
    found.push({name,type:mapClassify(t),lat:la,lng:lo,description:(t.opening_hours?'Hours: '+t.opening_hours:t.description||t.operator||'').slice(0,200)});
  }
  let note='';
  if(boundary.length){const ins=found.filter(f=>mapInRing([f.lat,f.lng],boundary[0]));if(ins.length>=3){note=` Kept ${ins.length} inside the campus boundary, ignored ${found.length-ins.length} outside.`;found=ins}}
  else note=' (Campus outline not found on OpenStreetMap, so everything within the radius was used. Delete pins that are not yours.)';
  if(!found.length){st.textContent='No named places found here. Try a bigger radius, or press “Use current map view” after zooming onto your campus.';return}
  try{
    const out=await api('/map/bulk',{method:'POST',body:{places:found}});
    if(boundary.length){await api('/map/boundary',{method:'PUT',body:{polygons:boundary}});MAPST.boundary=boundary;mapDrawBoundary()}
    MAPST.places=(await api('/map')).places;mapRefresh(false);mapFitCampus();
    st.textContent=`✅ Added ${out.added} new places${out.skipped?` (skipped ${out.skipped} duplicates)`:''}.${note} Click any pin to edit or delete it.`;
  }catch(e){st.textContent='⚠️ '+e.message}
}

/* ---- directions (in-app routing on OpenStreetMap data) ---- */
function mapStepText(s){
  const m=s.maneuver||{},nm=s.name?s.name:'',onto=nm?` onto ${nm}`:'',mod=m.modifier||'';
  switch(m.type){
    case'depart':return `Start${nm?' on '+nm:''}`;
    case'arrive':return 'Arrive at your destination';
    case'turn':return mod==='straight'?`Continue straight${onto}`:`Turn ${mod}${onto}`;
    case'end of road':return `At the end of the road turn ${mod}${onto}`;
    case'fork':return `Keep ${mod} at the fork${onto}`;
    case'merge':return `Merge${onto}`;
    case'roundabout':case'rotary':return `Take the roundabout${m.exit?', exit '+m.exit:''}${onto}`;
    default:return `Continue${nm?' on '+nm:''}`;
  }
}
function mapOpenDir(toId){
  const places=MAPST.places;if(!places.length){toast('Add or import some locations first');return}
  const po=places.map(p=>`<option value="${p.id}">${esc(mapCat(p.type)[0]+' '+p.name)}</option>`).join('');
  mapEl('dir_from').innerHTML=`<option value="me">📍 My current location</option><option value="pick">🖱️ Click a point on the map</option>${po}`;
  mapEl('dir_to').innerHTML=po;
  if(toId)mapEl('dir_to').value=toId;
  mapEl('mapDir').style.display='block';MAPST.lm.closePopup();
  if(toId){mapEl('dir_from').value='me';mapEl('mapDir').scrollIntoView({behavior:'smooth',block:'center'})}
}
function mapClearRoute(){if(MAPST.route){MAPST.route.remove();MAPST.route=null}if(MAPST.startMarker){MAPST.startMarker.remove();MAPST.startMarker=null}mapEl('dirOut').innerHTML=''}
function mapGetPosition(){return new Promise((ok,no)=>{if(!navigator.geolocation)return no(Error('Your browser does not support location'));navigator.geolocation.getCurrentPosition(p=>ok({lat:p.coords.latitude,lng:p.coords.longitude}),()=>no(Error('Could not get your location. Allow location permission, or choose a starting place from the list.')),{enableHighAccuracy:true,timeout:10000})})}
function mapRouteStartPicked(ll){
  MAPST.pickRoute=false;mapEl('leafletMap').classList.remove('picking');
  MAPST.routeStart={lat:ll.lat,lng:ll.lng};
  if(MAPST.startMarker)MAPST.startMarker.remove();
  MAPST.startMarker=L.circleMarker(ll,{radius:8,color:'#fff',weight:2,fillColor:'#16a34a',fillOpacity:1}).bindPopup('Start').addTo(MAPST.lm);
  mapRoute();
}
async function mapRoute(){
  const out=mapEl('dirOut'),fromV=mapEl('dir_from').value,toV=mapEl('dir_to').value,mode=mapEl('dir_mode').value;
  const dest=MAPST.places.find(p=>p.id===toV);if(!dest){out.textContent='Choose a destination.';return}
  let a;
  try{
    if(fromV==='me'){out.innerHTML='<div class="loading">Getting your location…</div>';a=await mapGetPosition()}
    else if(fromV==='pick'){
      if(!MAPST.routeStart){MAPST.pickRoute=true;mapEl('leafletMap').classList.add('picking');out.innerHTML='👆 Click your starting point on the map.';return}
      a=MAPST.routeStart;
    }else{const f=MAPST.places.find(p=>p.id===fromV);if(!f){out.textContent='Choose a starting point.';return}a={lat:f.lat,lng:f.lng}}
  }catch(e){out.innerHTML=`⚠️ ${esc(e.message)}`;return}
  if(fromV!=='pick')MAPST.routeStart=null;
  mapClearRoute();out.innerHTML='<div class="loading">Finding the best route…</div>';
  const gm=`https://www.google.com/maps/dir/?api=1&origin=${a.lat},${a.lng}&destination=${dest.lat},${dest.lng}&travelmode=${mode==='car'?'driving':mode==='bike'?'bicycling':'walking'}`;
  try{
    const ctrl=new AbortController(),t=setTimeout(()=>ctrl.abort(),12000);
    const res=await fetch(`https://routing.openstreetmap.de/routed-${mode}/route/v1/driving/${a.lng},${a.lat};${dest.lng},${dest.lat}?overview=full&geometries=geojson&steps=true`,{signal:ctrl.signal}).finally(()=>clearTimeout(t));
    if(!res.ok)throw Error('Routing service returned '+res.status);
    const d=await res.json(),r=d.routes?.[0];
    if(d.code!=='Ok'||!r)throw Error('No route found between these two points');
    MAPST.route=L.geoJSON(r.geometry,{style:{color:'#2563eb',weight:6,opacity:.85}}).addTo(MAPST.lm);
    MAPST.lm.fitBounds(MAPST.route.getBounds().pad(0.2));
    const steps=(r.legs?.[0]?.steps||[]).filter(s=>s.maneuver);
    out.innerHTML=`<div class="route-sum"><b>${mapFmtDist(r.distance)}</b> · about <b>${mapFmtTime(r.duration)}</b> to <b>${esc(dest.name)}</b></div><ol class="route-steps">${steps.map(s=>`<li>${esc(mapStepText(s))}${s.distance>0?` <small class="muted">· ${mapFmtDist(s.distance)}</small>`:''}</li>`).join('')}</ol><div class="actions" style="margin-top:8px"><button class="btn ghost" onclick="mapClearRoute()">Clear route</button><a class="btn ghost" href="${gm}" target="_blank" rel="noopener">Open in Google Maps</a></div>`;
  }catch(e){
    MAPST.route=L.polyline([[a.lat,a.lng],[dest.lat,dest.lng]],{color:'#2563eb',weight:4,dashArray:'8 8'}).addTo(MAPST.lm);
    MAPST.lm.fitBounds(MAPST.route.getBounds().pad(0.3));
    out.innerHTML=`⚠️ ${esc(e.name==='AbortError'?'Routing service timed out':e.message)}. Showing a straight line (${mapFmtDist(mapHaversine(a,dest))}).<div class="actions" style="margin-top:8px"><button class="btn ghost" onclick="mapClearRoute()">Clear</button><a class="btn ghost" href="${gm}" target="_blank" rel="noopener">Open in Google Maps</a></div>`;
  }
}

/* ---- add / edit / delete ---- */
function mapClearTmp(){if(MAPST.tmp){MAPST.tmp.remove();MAPST.tmp=null}}
function mapShowTmp(lat,lng){mapClearTmp();MAPST.tmp=L.circleMarker([lat,lng],{radius:9,color:'#ef4444',fillColor:'#ef4444',fillOpacity:.5}).addTo(MAPST.lm)}
function mapStartAdd(){
  ['mf_id','mf_name','mf_desc','mf_lat','mf_lng'].forEach(i=>mapEl(i).value='');mapEl('mf_type').value='academic';
  mapEl('mfTitle').textContent='Add location';mapEl('mapForm').style.display='block';mapEl('mapSetup').style.display='none';
  MAPST.pick=true;mapEl('leafletMap').classList.add('picking');mapEl('mapHint').textContent='👆 Click the exact spot on the map, then fill in the name and press Save.';
  mapEl('mf_name').focus();
}
function mapPicked(ll){mapEl('mf_lat').value=ll.lat.toFixed(6);mapEl('mf_lng').value=ll.lng.toFixed(6);mapShowTmp(ll.lat,ll.lng)}
function mapEdit(id){
  const p=MAPST.places.find(x=>x.id===id);if(!p)return;MAPST.lm.closePopup();
  mapEl('mf_id').value=p.id;mapEl('mf_name').value=p.name;mapEl('mf_type').value=p.type;mapEl('mf_desc').value=p.description||'';mapEl('mf_lat').value=p.lat;mapEl('mf_lng').value=p.lng;
  mapEl('mfTitle').textContent='Edit location (click the map to move it)';mapEl('mapForm').style.display='block';
  MAPST.pick=true;mapEl('leafletMap').classList.add('picking');mapShowTmp(p.lat,p.lng);mapEl('mapForm').scrollIntoView({behavior:'smooth',block:'center'});
}
function mapCloseForm(){mapEl('mapForm').style.display='none';MAPST.pick=false;mapEl('leafletMap').classList.remove('picking');mapClearTmp();mapRefresh()}
async function mapSave(){
  const id=mapEl('mf_id').value,body={name:mapEl('mf_name').value,type:mapEl('mf_type').value,description:mapEl('mf_desc').value,lat:mapEl('mf_lat').value,lng:mapEl('mf_lng').value};
  try{await api('/map'+(id?'/'+id:''),{method:id?'PUT':'POST',body});MAPST.places=(await api('/map')).places;mapCloseForm();toast('Location saved')}catch(e){toast(e.message)}
}
async function mapDelete(id){
  if(!confirm('Delete this location?'))return;
  try{await api('/map/'+id,{method:'DELETE'});MAPST.places=MAPST.places.filter(x=>x.id!==id);mapRefresh();toast('Location deleted')}catch(e){toast(e.message)}
}

/* ---- my location ---- */
async function mapLocate(){
  try{
    const p=await mapGetPosition(),ll=[p.lat,p.lng];MAPST.meLL=p;
    if(MAPST.me)MAPST.me.remove();
    MAPST.me=L.layerGroup([L.circleMarker(ll,{radius:8,color:'#fff',weight:2,fillColor:'#2563eb',fillOpacity:1}).bindPopup('You are here')]).addTo(MAPST.lm);
    MAPST.lm.flyTo(ll,18);
  }catch(e){toast(e.message)}
}
