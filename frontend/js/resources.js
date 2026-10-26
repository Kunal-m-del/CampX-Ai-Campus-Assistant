/* Preparation resources. Format: `Topic::Popular channels (comma separated)::YouTube search query`
   Links are YouTube playlist searches (always valid) + live top playlists via the backend YouTube API. */
const CAREER_PREP_ALL=[
 `Aptitude and reasoning for placements::CareerRide, Apna College, FreshersWorld::placement aptitude preparation full course`,
 `Communication and interview skills::Apna College, Learn English with Papa Teach Me::interview preparation for freshers`,
 `Resume, LinkedIn and GitHub profile::Apna College, Jeff Su::resume building for engineering students`
];
const CAREER_PREP={
cse:[
 `Data Structures and Algorithms (placements)::take U forward (Striver), Apna College, Abdul Bari::Striver A2Z DSA course`,
 `C++, Java or Python programming::Apna College, CodeWithHarry, freeCodeCamp.org::C++ full course for beginners`,
 `DBMS and SQL::Gate Smashers, Knowledge Gate, Jenny's Lectures::DBMS full course`,
 `Operating Systems::Gate Smashers, Knowledge Gate, Neso Academy::operating system full course`,
 `Computer Networks::Gate Smashers, Neso Academy, NPTEL::computer networks full course`,
 `Full-stack web development (MERN)::CodeWithHarry, Chai aur Code, Traversy Media::MERN stack full course`,
 `System design basics::Gaurav Sen, ByteByteGo::system design for beginners`,
 `Cloud and DevOps (Docker, Kubernetes, AWS)::TechWorld with Nana, KodeKloud, freeCodeCamp.org::DevOps full course Docker Kubernetes`,
 `Ethical hacking and cybersecurity::NetworkChuck, The Cyber Mentor, John Hammond::ethical hacking for beginners`,
 `GATE Computer Science::Gate Smashers, Knowledge Gate, GATE Academy::GATE computer science preparation`],
it:[
 `Data Structures and Algorithms::take U forward (Striver), Apna College::Striver A2Z DSA course`,
 `Java or Python programming::Apna College, CodeWithHarry, Corey Schafer::Java full course for beginners`,
 `DBMS and SQL::Gate Smashers, Knowledge Gate, Alex The Analyst::DBMS and SQL full course`,
 `Web development::CodeWithHarry, Chai aur Code, freeCodeCamp.org::full stack web development course`,
 `Data analytics (Excel, SQL, Power BI)::Alex The Analyst, Luke Barousse, Leila Gharani::data analyst full course Power BI SQL Excel`,
 `Networking and CCNA::Jeremy's IT Lab, NetworkChuck::CCNA full course`,
 `Cloud computing (AWS or Azure)::freeCodeCamp.org, TechWorld with Nana::AWS cloud practitioner full course`,
 `Salesforce or SAP basics::Salesforce, SAP Learning::Salesforce administrator course for beginners`,
 `GATE (IT or CS)::Gate Smashers, Knowledge Gate::GATE computer science preparation`],
aiml:[
 `Python programming::Corey Schafer, freeCodeCamp.org, CodeWithHarry::Python full course for beginners`,
 `Maths for machine learning::3Blue1Brown, StatQuest with Josh Starmer, Khan Academy::maths for machine learning linear algebra probability`,
 `Machine Learning course::Andrew Ng (Stanford Online), Krish Naik, CampusX::machine learning full course`,
 `Deep Learning and neural networks::DeepLearning.AI, Andrej Karpathy, CampusX::deep learning full course`,
 `NLP, Transformers and Generative AI::Hugging Face, Andrej Karpathy, Krish Naik::generative AI LLM course for beginners`,
 `SQL and data analysis::Alex The Analyst, freeCodeCamp.org::SQL and data analysis full course`,
 `MLOps and model deployment::Krish Naik, freeCodeCamp.org::MLOps full course`,
 `Data Structures and Algorithms::take U forward (Striver), Apna College::Striver A2Z DSA course`],
ece:[
 `Analog and digital electronics::Neso Academy, NPTEL::digital electronics full course`,
 `Signals and systems::Neso Academy, NPTEL::signals and systems full course`,
 `Analog and digital communication::Neso Academy, NPTEL::analog and digital communication full course`,
 `Embedded C and microcontrollers (STM32, Arduino)::Fastbit Embedded Brain Academy, Paul McWhorter::embedded systems programming STM32 course`,
 `Verilog and VLSI design::NPTEL, Neso Academy::Verilog VLSI design full course`,
 `IoT with ESP32 and Raspberry Pi::DroneBot Workshop, Andreas Spiess::ESP32 IoT projects course`,
 `MATLAB and DSP::MATLAB, NPTEL::digital signal processing MATLAB course`,
 `GATE ECE::GATE Academy, NPTEL, Ravindrababu Ravula::GATE ECE preparation`,
 `C++ and DSA (software route)::take U forward (Striver), Apna College::Striver A2Z DSA course`],
ee:[
 `Circuit theory and network analysis::Neso Academy, NPTEL::network analysis full course`,
 `Electrical machines::NPTEL, Electrical4U::electrical machines full course`,
 `Power systems::NPTEL, Electrical4U::power systems full course`,
 `Power electronics::NPTEL, Neso Academy::power electronics full course`,
 `Control systems::Neso Academy, Brian Douglas, NPTEL::control systems full course`,
 `PLC and SCADA::RealPars, Solis PLC::PLC programming for beginners`,
 `Solar energy and EV technology::NPTEL, The Engineering Mindset::solar PV system design course`,
 `MATLAB and Simulink::MATLAB, Brian Douglas::MATLAB Simulink tutorial for beginners`,
 `GATE Electrical::GATE Academy, NPTEL::GATE electrical engineering preparation`],
me:[
 `Thermodynamics::NPTEL, Learn Engineering::thermodynamics full course`,
 `Heat transfer::NPTEL, The Efficient Engineer::heat transfer full course`,
 `Strength of materials and machine design::NPTEL, The Efficient Engineer::strength of materials full course`,
 `Fluid mechanics::NPTEL, Learn Engineering::fluid mechanics full course`,
 `SolidWorks or CATIA (CAD)::GoEngineer, Lars Christensen::SolidWorks full course for beginners`,
 `ANSYS (FEA and CFD)::ANSYS, NPTEL::ANSYS tutorial for beginners`,
 `Manufacturing, CNC and CAM::NPTEL, Learn Engineering::manufacturing processes CNC full course`,
 `Automotive and EV basics::Engineering Explained, Learn Engineering::automotive engineering basics electric vehicle`,
 `GATE Mechanical::GATE Academy, NPTEL::GATE mechanical engineering preparation`],
ce:[
 `Structural analysis::NPTEL, Learn Engineering::structural analysis full course`,
 `RCC and steel design (IS codes)::NPTEL::RCC design full course IS 456`,
 `Surveying::NPTEL::surveying full course`,
 `STAAD.Pro and ETABS::Bentley, CSI::STAAD Pro tutorial for beginners`,
 `AutoCAD and Revit (BIM)::Autodesk, Learn Engineering::AutoCAD civil engineering course`,
 `Estimation, costing and Primavera::NPTEL::estimation and costing civil Primavera P6 course`,
 `Geotechnical engineering::NPTEL::soil mechanics geotechnical engineering full course`,
 `Hydrology and environmental engineering::NPTEL::environmental engineering water treatment full course`,
 `GATE Civil and SSC JE Civil::Sandeep Jyani, NPTEL::GATE civil engineering preparation`],
che:[
 `Material and energy balance::NPTEL, The Chemical Engineering Guy::material and energy balance full course`,
 `Chemical engineering thermodynamics::NPTEL, The Chemical Engineering Guy::chemical engineering thermodynamics full course`,
 `Fluid mechanics and heat transfer::NPTEL::fluid mechanics heat transfer chemical engineering`,
 `Mass transfer and separation processes::NPTEL::mass transfer full course`,
 `Chemical reaction engineering::NPTEL::chemical reaction engineering full course`,
 `Process control::NPTEL, Brian Douglas::process control chemical engineering`,
 `Aspen HYSYS and Aspen Plus::Aspen Technology::Aspen HYSYS tutorial for beginners`,
 `Process safety and HAZOP::NPTEL::HAZOP process safety course`,
 `GATE Chemical::GATE Academy, NPTEL::GATE chemical engineering preparation`],
bt:[
 `Biology and biochemistry basics::Khan Academy, Ninja Nerd, Amoeba Sisters::biochemistry full course`,
 `Molecular biology and genetic engineering::NPTEL, Khan Academy::molecular biology genetic engineering course`,
 `Microbiology and lab techniques::JoVE, NPTEL::microbiology lab techniques PCR electrophoresis`,
 `Bioprocess engineering::NPTEL::bioprocess engineering full course`,
 `Bioinformatics::freeCodeCamp.org, NPTEL::bioinformatics full course for beginners`,
 `Python for biology::Corey Schafer, freeCodeCamp.org::Python for biologists beginners`,
 `GMP, GLP and clinical research::NPTEL::ICH GCP clinical research basics course`,
 `GATE Biotechnology::GATE Academy, NPTEL::GATE biotechnology preparation`]
};

/* Playlists whose links were found in public sources (creator descriptions, course pages). Matched to topics by regex. */
const GS='Gate Smashers';
const CAREER_VERIFIED=[
 [/DBMS/i,[{t:'DBMS complete playlist',c:GS,id:'PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y'}]],
 [/DBMS|\bSQL\b/i,[{t:'SQL (Structured Query Language)',c:GS,id:'PLxCzCOWd7aiHqU4HKL7-SITyuSIcD93id'}]],
 [/Operating System/i,[{t:'Operating System complete playlist',c:GS,id:'PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p'}]],
 [/Computer Networks|Networking/i,[{t:'Computer Networks complete playlist',c:GS,id:'PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_'}]],
 [/DSA|Data Structures/i,[{t:'Striver A2Z DSA sheet and course (official page, follow this order)',c:'take U forward (Striver)',url:'https://takeuforward.org/prep-hub/strivers-a2z-dsa-sheet'},{t:'Complete C++ DSA course',c:'Apna College',id:'PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt'},{t:'Recursion series',c:'take U forward (Striver)',id:'PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9'},{t:'Binary Trees series',c:'take U forward (Striver)',id:'PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk'},{t:'Graph series',c:'take U forward (Striver)',id:'PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn'},{t:'Dynamic Programming series',c:'take U forward (Striver)',id:'PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY'},{t:'Backtracking series',c:'take U forward (Striver)',id:'PLgUwDviBIf0pE1lE8hvgs4afd4Yv0VYyR'},{t:'Trie series',c:'take U forward (Striver)',id:'PLgUwDviBIf0pcIDCZnxhv0LkHf5KzG9zp'}]],
 [/\bJava\b/i,[{t:'Java tutorial playlist',c:'CodeWithHarry',id:'PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd'}]],
 [/Python/i,[{t:'Python 100 Days of Code',c:'CodeWithHarry',id:'PLu0W_9lII9agwh1XjRt242xIpHhPT2llg'}]],
 [/Data Structures/i,[{t:'Data Structure complete playlist',c:GS,id:'PLxCzCOWd7aiEwaANNt3OqJPVIxwp2ebiT'}]],
 [/GATE (Computer|\(IT)/i,[{t:'Discrete Mathematics',c:GS,id:'PLxCzCOWd7aiH2wwES9vPWsEL6ipTaUSl3'},{t:'Compiler Design',c:GS,id:'PLxCzCOWd7aiEKtKSIHYusizkESC42diyc'},{t:'Software Engineering',c:GS,id:'PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2'},{t:'Graph Theory',c:GS,id:'PLxCzCOWd7aiG0M5FqjyoqB20Edk0tyzVt'}]],
 [/Cloud computing/i,[{t:'Cloud Computing and Big Data',c:GS,id:'PLxCzCOWd7aiHRHVUtR-O52MsrdUSrzuy4'}]],
 [/Maths for machine learning/i,[{t:'Essence of Linear Algebra',c:'3Blue1Brown',id:'PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab'},{t:'Essence of Calculus',c:'3Blue1Brown',id:'PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr'}]],
 [/microcontroller/i,[{t:'Microprocessors and Microcontrollers',c:'Neso Academy',id:'PLBlnK6fEyqRgyFCCgqdcBowmSp_BTKs4F'}]]
];
function careerVerified(topic){const out=[],seen=new Set();for(const [re,list] of CAREER_VERIFIED)if(re.test(topic))for(const p of list){const k=p.id||p.url;if(!seen.has(k)){seen.add(k);out.push({...p,url:p.url||'https://www.youtube.com/playlist?list='+p.id})}}return out}
