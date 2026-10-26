const fs=require('fs'),path=require('path'); const file=path.join(__dirname,'db.json');
function load(){return JSON.parse(fs.readFileSync(file,'utf8'))} function save(db){fs.writeFileSync(file,JSON.stringify(db,null,2))}
function all(k){return load()[k]||[]} function insert(k,item){const db=load(); item.id=item.id||Date.now().toString(36)+Math.random().toString(36).slice(2,7); db[k]=db[k]||[]; db[k].push(item); save(db); return item}
function update(k,id,patch){const db=load(); const i=(db[k]||[]).findIndex(x=>x.id===id); if(i<0)return null; db[k][i]={...db[k][i],...patch}; save(db); return db[k][i]}
function remove(k,id){const db=load(); db[k]=(db[k]||[]).filter(x=>x.id!==id); save(db)}
module.exports={load,save,all,insert,update,remove};
