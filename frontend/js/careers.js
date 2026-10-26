/* Skill Gap & Career: full roadmaps for major B.Tech branches.
   Data format (compact):  years: 'focus::goal;goal'   tracks: 'name::skill;skill::step;step::tool, tool'   lists use | */
const CAREER_COMMON=[
  ['Keep a healthy CGPA and attendance (many recruiters ask for 60-65% or more with no backlogs)','Join one technical club or society and one non-technical activity','Create a LinkedIn profile and start an achievements list'],
  ['Complete one short course or certification in your chosen area','Improve spoken English and presentation skills (seminars, clubs)','Attend a hackathon, workshop or technical event'],
  ['Complete a summer internship or industrial training','Prepare a one-page resume and check it in the Resume Analysis module','Start aptitude and reasoning practice (quant, logical, verbal)'],
  ['Practice mock interviews using the Mock Interview module','Prepare a 2-minute self-introduction and explain each project clearly','Apply to campus drives and off-campus openings in parallel']
];
const CAREER=[
{id:'cse',i:'💻',n:'Computer Science & Engineering',tag:'Build strong fundamentals first, then specialise in software, cloud, security or AI.',
 roles:'Software Engineer|Full-Stack Developer|Backend Engineer|DevOps / Cloud Engineer|Cybersecurity Analyst|QA / SDET Engineer',
 years:['Programming and logical thinking::Learn C/C++ or Python properly (loops, arrays, functions, OOP basics);Solve 100+ easy practice problems;Learn Git and create a GitHub account;Build a simple personal web page with HTML and CSS',
 'Core CS subjects and DSA::Learn Data Structures and Algorithms in one language;Study DBMS, Operating Systems, Computer Networks and OOP;Solve 200+ easy and medium problems;Build one CRUD web project with a database',
 'Specialise and gain experience::Pick a track (web, cloud, AI or security);Do an internship or contribute to open source;Learn SQL deeply and system design basics;Start mock interviews and company-wise practice',
 'Placement and launch::Polish your resume and 3 strong projects;Revise CS fundamentals (OS, DBMS, CN, OOP);Finish a final-year project with real-world scope;Decide your path: job, GATE or M.Tech, MBA or MS abroad'],
 tracks:['Software Development (SDE)::DSA and problem solving;OOP and design patterns;DBMS and SQL;OS and Networks basics;REST APIs;System design basics::Pick one language (Java, C++ or Python);Finish DSA topic by topic;Build 2 full projects with APIs and a database;Apply for internships;Do mock interviews::LeetCode, GitHub, Postman, IntelliJ or VS Code',
 'Full-Stack Web Development::HTML, CSS, JavaScript;React or similar framework;Node.js and Express;SQL and MongoDB;Authentication and security basics;Deployment::Master JavaScript fundamentals;Learn React and build UI projects;Learn Node, Express and a database;Build and deploy a full-stack app;Add testing and CI::React, Node.js, MongoDB or PostgreSQL, Git, Render or Vercel',
 'Cloud and DevOps::Linux and shell scripting;Networking basics;Docker and containers;CI/CD pipelines;One cloud platform (AWS, Azure or GCP);Kubernetes basics::Get comfortable with Linux;Learn Docker and Git workflows;Set up a CI/CD pipeline for a project;Learn one cloud and take a fundamentals certification;Learn Kubernetes and Terraform basics::Linux, Docker, GitHub Actions or Jenkins, AWS, Terraform',
 'Cybersecurity::Networking and Linux;Web security (OWASP Top 10);Cryptography basics;Scripting in Python or Bash;Security tools::Learn networks and Linux;Practice on legal labs (TryHackMe, Hack The Box);Learn common web vulnerabilities and fixes;Take part in CTF competitions;Earn an entry-level certification::Wireshark, Burp Suite, Nmap, Kali Linux'],
 certs:'AWS Cloud Practitioner or Azure Fundamentals|NPTEL courses in DSA, DBMS and OS with proctored exam|Google or Meta professional certificates on Coursera|CompTIA Security+ (for the security track)',
 projects:'Beginner: Student management or to-do app with login|Intermediate: Full-stack e-commerce or chat app with deployment|Advanced: Scalable system with caching, queues and load testing, or an open-source contribution',
 exams:'GATE (Computer Science) for M.Tech and PSU jobs|GRE and TOEFL or IELTS for MS abroad|CAT or GMAT for MBA|Company online coding tests and campus drives|Government tech roles (NIC, ISRO, DRDO) through their own recruitment exams'},

{id:'it',i:'🌐',n:'Information Technology',tag:'Combine software skills with data, networks and business systems for broad IT career options.',
 roles:'Software Developer|Business or Data Analyst|Cloud / Network Engineer|IT Support and Systems Engineer|ERP or Salesforce Consultant|Test Automation Engineer',
 years:['Programming and computer basics::Learn Python or C/C++ with strong logic building;Understand how computers and the internet work;Learn Git and basic HTML/CSS;Practice 100 easy coding problems',
 'DSA, databases and web::Learn DSA and OOP in Java or Python;Study DBMS and write complex SQL queries;Learn Computer Networks fundamentals;Build one database-backed web application',
 'Pick a direction and intern::Choose software, data analytics, cloud or consulting;Complete an internship or live project;Learn one cloud platform basics;Practise aptitude and technical interviews',
 'Placement and certification::Complete one industry certification;Build a final-year project solving a real problem;Prepare resume and mock interviews;Apply to product, service and consulting companies'],
 tracks:['Software and Web Development::DSA basics;Java or Python;HTML, CSS, JavaScript;Backend framework (Spring, Django or Node);SQL;Git::Learn one language deeply;Practise DSA regularly;Build 2 web projects with a database;Deploy projects online;Prepare for interviews::GitHub, VS Code, Postman, Spring Boot or Django',
 'Data and Business Analytics::Advanced Excel;SQL;Python with Pandas;Statistics basics;Power BI or Tableau;Business communication::Master Excel and SQL;Learn Python for data;Learn statistics and visualisation;Build 3 dashboards from real datasets;Create a portfolio on GitHub::Excel, SQL, Python, Power BI, Tableau',
 'Cloud and Networking::Networking (TCP/IP, routing);Linux;Virtualisation;One cloud platform;Scripting;Security basics::Learn networking and Linux;Prepare for CCNA level concepts;Learn AWS or Azure fundamentals;Build a small cloud-hosted project;Take a fundamentals certification::Cisco Packet Tracer, Linux, AWS or Azure',
 'IT Consulting and Enterprise Systems::Business processes;SQL;Salesforce or SAP basics;ITIL concepts;Documentation and communication;Project management basics::Understand business and IT service basics;Learn Salesforce Admin or SAP modules;Earn an entry-level certification;Build a demo project;Practise client-style communication::Salesforce Trailhead, SAP learning hub, Jira'],
 certs:'Cisco CCNA|AWS or Azure fundamentals|Salesforce Administrator (Trailhead)|Microsoft Power BI Data Analyst|ITIL 4 Foundation',
 projects:'Beginner: Library or inventory management system|Intermediate: Analytics dashboard on a public dataset or a deployed web portal|Advanced: Cloud-hosted multi-user application with monitoring',
 exams:'GATE (CS or IT) for M.Tech and PSUs|CAT or GMAT for MBA (IT management)|GRE for MS abroad|Service and product company campus tests|Government IT roles through recruitment exams'},

{id:'aiml',i:'🤖',n:'CSE - AI, ML & Data Science',tag:'Strong maths, Python and real projects matter more than certificates in this field.',
 roles:'Machine Learning Engineer|Data Scientist|Data Analyst|NLP or Computer Vision Engineer|Data Engineer|MLOps Engineer',
 years:['Programming and maths base::Learn Python well;Revise linear algebra, probability and calculus basics;Learn Git and basic SQL;Solve 100 easy programming problems',
 'DSA, statistics and first ML::Learn DSA and OOP;Learn NumPy, Pandas and Matplotlib;Study statistics and build models with scikit-learn;Complete 2 data analysis notebooks on Kaggle',
 'Deep learning and specialisation::Learn deep learning with PyTorch or TensorFlow;Choose NLP, computer vision or data engineering;Join Kaggle competitions;Do an internship or research project',
 'Portfolio and placement::Build and deploy an end-to-end ML project;Learn model deployment (API, Docker);Write a project report or research paper if possible;Prepare ML and SQL interview questions'],
 tracks:['Data Analyst::Excel and SQL;Python (Pandas);Statistics;Data visualisation;Business understanding;Storytelling::Learn SQL and Excel first;Learn Pandas and visualisation;Learn statistics and A/B testing basics;Build 3 dashboards or case studies;Apply for analyst internships::SQL, Python, Power BI or Tableau, Jupyter',
 'Machine Learning Engineer::Python and DSA;Linear algebra and probability;Supervised and unsupervised ML;Feature engineering;Model evaluation;Deployment basics::Learn ML theory with a good course;Implement algorithms using scikit-learn;Do Kaggle datasets end to end;Deploy a model using Flask or FastAPI;Learn Docker and cloud basics::scikit-learn, XGBoost, FastAPI, Docker, MLflow',
 'Deep Learning (Vision, NLP, GenAI)::Neural network basics;PyTorch or TensorFlow;CNNs and Transformers;Hugging Face tools;Prompting and RAG basics;GPU and experiment tracking::Learn neural networks from scratch;Build image and text models;Fine-tune a pretrained model;Build a RAG or chatbot application;Publish results on GitHub or a blog::PyTorch, Hugging Face, LangChain, Weights and Biases',
 'Data Engineering and MLOps::SQL and Python;Data modelling;ETL pipelines;Spark basics;Cloud storage and warehouses;Docker and CI/CD::Learn SQL and data modelling;Build ETL pipelines in Python;Learn Spark or a cloud data tool;Orchestrate pipelines with Airflow;Add monitoring and CI/CD::Airflow, Spark, Docker, AWS or GCP, dbt'],
 certs:'Machine Learning Specialization (Coursera)|Deep Learning Specialization (Coursera)|Azure AI Fundamentals or AWS Cloud Practitioner|Databricks fundamentals|NPTEL courses in ML, data science and Python',
 projects:'Beginner: House price or sales prediction with analysis report|Intermediate: Sentiment analysis or image classifier deployed as a web app|Advanced: RAG chatbot, recommendation system or an end-to-end MLOps pipeline',
 exams:'GATE (CS or Data Science and AI) for M.Tech and PSU roles|GRE and TOEFL or IELTS for MS in AI or Data Science abroad|CAT or GMAT for MBA in analytics|Research internships at institutes and labs|Company coding and aptitude tests'},

{id:'ece',i:'📡',n:'Electronics & Communication',tag:'Choose between embedded, VLSI, communication or the software route early, and build hardware plus coding skills.',
 roles:'Embedded Systems Engineer|VLSI Design or Verification Engineer|Telecom / 5G Engineer|IoT Engineer|Signal Processing Engineer|Software or Test Engineer',
 years:['Basics of circuits and programming::Learn basic electronics, circuits and Ohm and Kirchhoff laws;Learn C programming;Build simple circuits on a breadboard;Learn basic Arduino projects',
 'Core electronics::Study analog and digital electronics, signals and systems;Learn C/C++ and Python;Simulate circuits (LTspice, Proteus or Multisim);Build 2 microcontroller projects (Arduino or ESP32)',
 'Specialise and intern::Choose embedded, VLSI or communication;Learn Verilog or embedded C in depth;Do an internship or industrial training;Learn MATLAB for signal processing',
 'Project and career decision::Build a final-year hardware or FPGA project;Prepare for GATE or placement;Create a project portfolio with documentation;Practise core and aptitude interviews'],
 tracks:['Embedded Systems and IoT::Embedded C/C++;Microcontrollers (ARM, STM32, ESP32);UART, SPI, I2C protocols;RTOS basics;Sensors and PCB basics;IoT cloud connectivity::Master C and microcontroller basics;Learn communication protocols;Learn RTOS (FreeRTOS);Build 2 IoT or embedded projects;Learn PCB design (KiCad)::Keil or STM32CubeIDE, Arduino, KiCad, MQTT',
 'VLSI and Semiconductors::Digital design;CMOS basics;Verilog and SystemVerilog;FPGA flow;Static timing basics;Scripting (Python, TCL)::Revise digital electronics strongly;Learn Verilog and simulate designs;Implement designs on FPGA;Learn SystemVerilog and verification basics;Learn scripting and EDA flow::Vivado or Quartus, ModelSim, Icarus Verilog, Cadence or Synopsys academic tools',
 'Communication and Telecom::Signals and systems;Digital communication;DSP;Wireless and 5G basics;MATLAB;Networking basics::Learn signals and communication theory;Simulate systems in MATLAB;Learn wireless standards basics;Try SDR or GNU Radio;Work on a communication project::MATLAB, GNU Radio, Wireshark',
 'Software Route (IT roles)::C++ or Python;DSA;DBMS and OS basics;Problem solving;Git::Learn DSA in C++ or Python;Practise 200+ problems;Learn SQL and OS basics;Build 2 software projects;Prepare for coding interviews::LeetCode, GitHub'],
 certs:'NPTEL (Digital Design, VLSI, Embedded Systems)|MATLAB Onramp and signal processing courses|Cisco CCNA (for network roles)|Embedded or IoT certifications from ARM, NXP or ST training|Verilog or FPGA online courses',
 projects:'Beginner: Home automation or obstacle avoiding robot using Arduino|Intermediate: IoT weather station with a cloud dashboard or FPGA based design|Advanced: Custom PCB with RTOS firmware, RISC-V core design or SDR communication system',
 exams:'GATE (ECE) for M.Tech and PSU jobs (very relevant)|ESE (IES) for government engineering services|ISRO, DRDO and BARC recruitment exams|SSC JE and railway JE exams|GRE for MS abroad'},

{id:'ee',i:'⚡',n:'Electrical / Electrical & Electronics',tag:'Power, automation and EV or renewables are the strongest growth areas, and GATE or PSU is a major route.',
 roles:'Power Systems Engineer|Electrical Design Engineer|Automation (PLC / SCADA) Engineer|Renewable Energy Engineer|EV or Power Electronics Engineer|PSU / Government Engineer',
 years:['Basics of electrical engineering::Learn circuit theory and basic electronics;Learn C or Python basics;Practise in electrical workshop and lab;Understand safety rules and basic wiring',
 'Core subjects and tools::Study electrical machines, network analysis and control basics;Learn MATLAB and Simulink;Learn AutoCAD Electrical basics;Build a small project (inverter, motor control)',
 'Specialise and intern::Choose power, automation or EV and renewables;Learn power systems and power electronics deeply;Do an internship at a substation, plant or industry;Learn PLC or solar design basics',
 'Project and career path::Build a final-year project (microgrid, EV charger, smart metering);Prepare for GATE or PSU exams;Prepare for core company interviews;Create a project portfolio'],
 tracks:['Power Systems and Utilities::Power system analysis;Protection and switchgear;Transmission and distribution;Load flow and fault studies;Standards and safety;Substation basics::Master power systems theory;Learn ETAP or MATLAB studies;Visit or intern at a substation;Prepare for GATE or utility exams;Learn standards and documentation::ETAP, MATLAB, AutoCAD Electrical',
 'Automation (PLC, SCADA, Drives)::PLC programming;SCADA and HMI;Industrial drives;Sensors and instrumentation;Industrial communication (Modbus);Control systems::Learn PLC logic and ladder programming;Practise on a simulator;Learn SCADA and HMI basics;Build a small automation project;Take industry training::Siemens TIA Portal, Allen-Bradley, Modbus, SCADA tools',
 'Renewable Energy and EV::Solar PV design;Battery systems and BMS;Power electronics;Inverters and chargers;Energy storage;Grid integration basics::Learn power electronics fundamentals;Learn solar system design;Learn battery and BMS basics;Build an EV charger or solar project;Follow industry standards::PVsyst, PSIM, MATLAB, LTspice',
 'Power Electronics and Embedded Control::Analog and power electronics;Microcontrollers;PCB design;Control algorithms;Simulation;Testing and measurement::Learn converters and inverters;Learn embedded C for control;Simulate and build a converter;Learn PCB design;Test your hardware properly::LTspice, KiCad, MATLAB, STM32'],
 certs:'NPTEL (Power Systems, Power Electronics, Control Systems)|PLC and SCADA training from Siemens or industrial partners|MATLAB and Simulink training|Solar PV design and EV technology courses|AutoCAD Electrical certification',
 projects:'Beginner: Automatic street light or motor speed control|Intermediate: Solar charge controller or PLC based process automation|Advanced: Smart grid or microgrid simulation, EV charger design or inverter prototype',
 exams:'GATE (EE) for M.Tech and PSU jobs such as power utilities (very relevant)|ESE (IES) for central engineering services|State electricity board and PWD engineer exams|SSC JE and railway JE exams|GRE for MS in power or energy abroad'},

{id:'me',i:'⚙️',n:'Mechanical Engineering',tag:'Choose design, manufacturing, automotive or thermal early and learn the software industry uses.',
 roles:'Design Engineer (CAD / CAE)|Manufacturing or Production Engineer|Automotive / EV Engineer|Thermal or HVAC Engineer|Quality Engineer|Maintenance Engineer',
 years:['Fundamentals and drawing::Learn engineering drawing and mechanics basics;Learn basic programming (C or Python);Do workshop practice well;Learn basic CAD',
 'Core subjects and CAD::Study thermodynamics, strength of materials and fluid mechanics;Learn SolidWorks or CATIA;Learn AutoCAD and basic GD&T;Join a student team (SAE, Baja or robotics)',
 'Specialise and intern::Pick design, manufacturing, automotive or thermal;Learn ANSYS (FEA or CFD) basics;Do an industrial internship;Learn CNC and manufacturing processes',
 'Project and career decision::Build a design and fabrication final-year project;Prepare for GATE, PSU or campus placements;Document your projects with drawings and analysis;Practise core technical interviews'],
 tracks:['Design and CAE::Engineering mechanics and machine design;CAD modelling;GD&T;FEA basics;Material selection;Design documentation::Master a CAD tool (SolidWorks or CATIA);Learn GD&T and drawing standards;Learn FEA using ANSYS;Redesign a real part and analyse it;Prepare a design portfolio::SolidWorks, CATIA, ANSYS, AutoCAD',
 'Manufacturing and Quality::Manufacturing processes;CNC and CAM;Lean and Six Sigma;Quality tools (SPC);Metrology;Production planning::Learn manufacturing processes in depth;Learn CNC programming basics;Learn Lean and quality tools;Intern in a plant;Take a Six Sigma Green Belt course::Fusion 360, Mastercam basics, Minitab, Excel',
 'Automotive and EV::Vehicle dynamics;IC engines and EV powertrain;Battery pack basics;CAD and simulation;CAN protocol basics;Manufacturing for automotive::Learn vehicle basics and powertrains;Join SAE Baja or Formula student team;Learn battery and motor basics;Learn simulation tools;Build a vehicle subsystem::SolidWorks, MATLAB, Simulink, ANSYS',
 'Thermal and Energy::Thermodynamics and heat transfer;HVAC design;CFD basics;Power plant systems;Energy audits;Refrigeration::Revise thermodynamics and heat transfer deeply;Learn HVAC load calculations;Learn CFD using ANSYS Fluent;Do an energy audit or thermal project;Prepare for PSU and core roles::ANSYS Fluent, HAP or Excel tools, EES'],
 certs:'CSWA (SolidWorks) or CATIA training|ANSYS or other CAE training|Six Sigma Green Belt|NPTEL (Thermodynamics, Machine Design, Manufacturing)|AutoCAD certification',
 projects:'Beginner: Design a simple mechanism or gearbox in CAD|Intermediate: FEA study of a component or a working prototype fabrication|Advanced: SAE Baja or Formula student vehicle subsystem, or a CFD optimised thermal system',
 exams:'GATE (ME) for M.Tech and PSU jobs (very relevant)|ESE (IES) for government engineering services|SSC JE and railway JE exams|CAT for MBA (operations)|GRE for MS abroad'},

{id:'ce',i:'🏗️',n:'Civil Engineering',tag:'Learn design software and get site exposure early; both are what employers look for.',
 roles:'Site / Construction Engineer|Structural Design Engineer|Quantity Surveyor or Estimator|Transportation or Highway Engineer|Environmental or Water Resources Engineer|Government Engineer (PWD, Railways)',
 years:['Basics of civil engineering::Learn engineering mechanics and drawing;Learn basic AutoCAD;Visit a construction site if possible;Learn basic surveying',
 'Core subjects and software::Study structural analysis, concrete and fluid mechanics;Learn AutoCAD properly;Learn surveying with a total station;Join a site visit or short training',
 'Design software and site experience::Learn STAAD.Pro or ETABS;Learn estimation and costing;Do a site internship (at least 4 to 6 weeks);Learn IS codes for RCC and steel design',
 'Project and career path::Complete a design and analysis final-year project;Prepare for GATE, government exams or campus drives;Build a portfolio with drawings and design reports;Practise technical interviews'],
 tracks:['Structural Design::Structural analysis;RCC and steel design;IS codes;STAAD.Pro or ETABS;Foundation basics;Drawing and detailing::Master structural analysis theory;Learn RCC and steel design using IS codes;Learn STAAD.Pro or ETABS;Design a small building end to end;Learn Revit or BIM basics::STAAD.Pro, ETABS, AutoCAD, Revit',
 'Construction and Project Management::Site execution;Estimation and costing;Planning and scheduling;Quality and safety;Contracts basics;Material testing::Learn construction methods and materials;Learn estimation and BOQ;Learn Primavera or MS Project;Intern on a live site;Learn safety and quality basics::Primavera P6, MS Project, Excel, AutoCAD',
 'Transportation and Geotechnical::Highway design;Traffic engineering;Soil mechanics;Foundation engineering;GIS basics;Surveying::Learn soil and highway theory;Practise lab tests;Learn GIS and surveying software;Work on a road or foundation design project;Prepare for government and PSU roles::QGIS, AutoCAD Civil 3D, total station',
 'Environmental and Water Resources::Hydrology;Water and wastewater treatment;Environmental impact assessment;GIS and remote sensing;Water supply design;Sustainability::Learn hydrology and environmental basics;Learn treatment plant design;Learn GIS tools;Do a water or waste project;Learn EIA and regulations::QGIS, EPANET, HEC-RAS'],
 certs:'STAAD.Pro or ETABS training|AutoCAD and Revit (BIM) certification|Primavera P6 or MS Project course|Surveying and total station training|NPTEL (Structural Analysis, Concrete Design, Geotechnics)',
 projects:'Beginner: Draw a residential building plan in AutoCAD|Intermediate: Analyse and design a G+3 building in STAAD or ETABS|Advanced: Project with estimation, scheduling and BIM model, or a highway or water supply design',
 exams:'GATE (CE) for M.Tech and PSU jobs (very relevant)|ESE (IES) for central engineering services|State PWD and irrigation AE or JE exams|SSC JE and railway JE exams|UPSC Civil Services (engineering background is common)'},

{id:'che',i:'🧪',n:'Chemical Engineering',tag:'Process design, plant operations and safety are the core areas; learn simulation tools and visit plants.',
 roles:'Process Engineer|Production or Plant Engineer|Process Safety (HSE) Engineer|Petroleum and Petrochemical Engineer|Quality or R&D Engineer|Environmental Engineer',
 years:['Basics and programming::Learn engineering chemistry, maths and physics fundamentals;Learn basic Python or C;Practise lab safety;Understand what chemical industries do',
 'Core unit operations::Study fluid mechanics, heat transfer and thermodynamics;Learn mass transfer basics;Use Python or MATLAB for calculations;Visit a chemical plant if possible',
 'Process design and internship::Study reaction engineering and process control;Learn Aspen Plus or HYSYS basics;Do an internship in a plant or refinery;Learn P&ID and PFD reading',
 'Project and career path::Complete a process design final-year project;Prepare for GATE, PSU or campus drives;Learn safety standards and HAZOP basics;Practise core technical interviews'],
 tracks:['Process Design and Simulation::Material and energy balance;Thermodynamics;Unit operations;Aspen Plus or HYSYS;P&ID and PFD;Process economics::Strengthen balances and thermodynamics;Learn simulation using Aspen;Design a complete process flow;Learn costing basics;Prepare a design report::Aspen Plus, HYSYS, MATLAB, Excel',
 'Production and Plant Operations::Unit operations;Process control and DCS;Troubleshooting;Maintenance basics;Plant safety;Quality control::Learn unit operations deeply;Learn instrumentation and control basics;Intern in a plant;Learn troubleshooting approaches;Prepare for PSU and core roles::DCS basics, P&ID, Excel',
 'Process Safety and Environment::HAZOP and risk assessment;Safety standards;Environmental regulations;Waste treatment;Fire and explosion basics;ISO standards::Learn process safety basics;Learn HAZOP methodology;Learn environmental regulations;Do a safety audit exercise;Take an EHS certification::HAZOP worksheets, ISO standards, EHS software',
 'Process Data and Automation::Python or MATLAB;Process control;Statistics;Data analysis;Basic machine learning;Digital plant concepts::Learn Python or MATLAB;Learn statistics and data analysis;Model a process in code;Learn control tuning basics;Build a data driven process project::Python, MATLAB, Simulink'],
 certs:'Aspen HYSYS or Aspen Plus training|HAZOP and process safety training|NEBOSH or IOSH style safety certificates|NPTEL (Heat Transfer, Mass Transfer, Reaction Engineering)|Python or MATLAB for engineers',
 projects:'Beginner: Heat exchanger or distillation column calculation in Python|Intermediate: Process simulation of a plant section in Aspen|Advanced: Complete process design with costing and HAZOP study',
 exams:'GATE (Chemical) for M.Tech and PSU jobs such as oil and gas (very relevant)|GRE for MS abroad|CAT for MBA|Refinery, fertiliser and petrochemical company recruitment|State pollution control board and government roles'},

{id:'bt',i:'🧬',n:'Biotechnology',tag:'Combine lab skills with data and computing skills; many roles need higher studies, so plan early.',
 roles:'Research Associate (R&D)|Bioprocess or Production Engineer|QC / QA Analyst|Clinical Research Associate|Bioinformatics Analyst|Regulatory Affairs Executive',
 years:['Basics of biology and chemistry::Learn biology, chemistry and maths fundamentals;Learn basic Python programming;Practise good lab habits and safety;Read about biotech industries and careers',
 'Core lab and theory::Study microbiology, biochemistry and molecular biology;Learn lab techniques (PCR, electrophoresis, culture);Learn Python or R for data;Join a research or college lab project',
 'Specialise and intern::Choose bioprocess, bioinformatics, clinical or research;Learn bioinformatics tools (BLAST, Biopython);Do an internship in a lab or pharma or biotech company;Learn GMP and GLP basics',
 'Project and next step::Complete a research or process final-year project;Prepare for GATE or GRE if you want MS or PhD;Prepare for company interviews;Try to write or present a research paper or poster'],
 tracks:['Pharma and Biopharma (QC, QA, Production)::GMP and GLP;Analytical techniques (HPLC, spectroscopy);Quality documentation;Validation basics;Bioprocess basics;Regulatory awareness::Learn GMP and GLP concepts;Learn analytical instruments;Learn quality documentation and SOPs;Do an industry internship;Learn basics of validation::HPLC, UV-Vis, SOPs, quality tools',
 'Bioinformatics and Computational Biology::Python or R;Biology databases;Sequence analysis;NGS basics;Statistics;Data visualisation::Learn Python or R;Learn BLAST and sequence tools;Learn NGS data analysis basics;Analyse a public dataset;Publish a project on GitHub::Biopython, BLAST, Galaxy, R, Python',
 'Clinical Research and Regulatory::ICH-GCP;Clinical trial phases;Pharmacovigilance;Regulatory documentation;Medical terminology;Ethics::Learn clinical trial basics;Complete an ICH-GCP course;Learn pharmacovigilance basics;Learn regulatory documents;Apply for entry-level CRA or PV roles::ICH-GCP, safety databases, regulatory guidelines',
 'Research and Higher Studies::Strong lab techniques;Reading research papers;Statistics;Scientific writing;Research project experience;Presentation skills::Join a lab project early;Read and summarise papers weekly;Learn statistics and writing;Present a poster or publish;Prepare for GATE or GRE and apply::GATE or GRE preparation, reference managers, GraphPad or R'],
 certs:'ICH-GCP certification|Bioinformatics courses on Coursera or NPTEL|GMP or GLP training|Pharmacovigilance courses|NPTEL (Genetic Engineering, Bioprocess Engineering)',
 projects:'Beginner: Microbial culture and growth study report|Intermediate: Bioinformatics analysis of a gene or protein using public data|Advanced: Bioprocess optimisation study or an NGS data analysis pipeline',
 exams:'GATE (Biotechnology) for M.Tech and PhD at institutes|GRE and TOEFL or IELTS for MS or PhD abroad|CAT for MBA (pharma or healthcare management)|Pharma and biotech company recruitment|Government research lab and institute recruitments'}
];
const CAREER_PATHS=['M.Tech or MS: take GATE for India, or GRE with TOEFL or IELTS for abroad (start in 3rd year)','MBA: CAT, XAT or GMAT (best after 1 to 2 years of work experience)','Government jobs: PSU through GATE, ESE and state engineering services, SSC JE, Railways, UPSC','Startup or freelancing: build products, join incubators and start with small client projects','Skill-based jobs first: work 1 to 2 years, then decide on higher studies with clarity'];

const careerPrep=b=>[...(CAREER_PREP[b.id]||[]),...CAREER_PREP_ALL].map(x=>{const [t,ch,q]=x.split('::');return{t,ch:ch.split(',').map(y=>y.trim()),q}});
const careerYtLink=q=>`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}&sp=EgIQAw%3D%3D`;
let CAR=null;
const careerB=()=>CAREER.find(b=>b.id===CAR.branch);
const careerPlan=b=>b.years.map(y=>{const [f,g]=y.split('::');return{focus:f,goals:g.split(';')}});
const careerTracks=b=>b.tracks.map(t=>{const [n,s,p,tl]=t.split('::');return{name:n,skills:s.split(';'),path:p.split(';'),tools:tl.split(',').map(x=>x.trim())}});
const careerIds=b=>{const ids=[];careerPlan(b).forEach((y,yi)=>{y.goals.forEach((_,gi)=>ids.push(`${b.id}:y${yi}.${gi}`));CAREER_COMMON[yi].forEach((_,ci)=>ids.push(`${b.id}:y${yi}.c${ci}`))});careerTracks(b).forEach((t,ti)=>t.skills.forEach((_,si)=>ids.push(`${b.id}:t${ti}.${si}`)));careerPrep(b).forEach((_,i)=>ids.push(`${b.id}:p${i}`));return ids};
const careerPct=(ids)=>ids.length?Math.round(ids.filter(i=>CAR.done.has(i)).length*100/ids.length):0;
function careerGuess(v){v=(v||'').toLowerCase();if(/\b(ai|aiml|ml|ds)\b|machine|data sci/.test(v))return'aiml';if(/\bit\b|information tech/.test(v))return'it';if(/cse|computer/.test(v))return'cse';if(/\bece\b|electronics|communication|\betc\b/.test(v))return'ece';if(/\b(ee|eee|en)\b|electrical/.test(v))return'ee';if(/\bme\b|mech/.test(v))return'me';if(/\bce\b|civil/.test(v))return'ce';if(/chem/.test(v))return'che';if(/bio/.test(v))return'bt';return''}
const careerCheck=(id,text)=>`<label class="cr-check ${CAR.done.has(id)?'done':''}"><input type="checkbox" ${CAR.done.has(id)?'checked':''} onchange="careerToggle('${id}',this.checked);this.parentElement.classList.toggle('done',this.checked)"><span>${esc(text)}</span></label>`;

async function skills(c){
  let saved={branch:'',done:[]};
  try{saved=await api('/roadmap/progress')}catch(e){}
  const saveOk=CAREER.some(b=>b.id===saved.branch),branch=saveOk?saved.branch:(careerGuess(user?.branch)||'cse');
  CAR={branch,tab:'plan',top:'roadmap',track:0,done:new Set(saved.done||[]),timer:null,pl:[],chat:[],aiOn:null,skills:null,rm:null,rmLoaded:false,roleText:''};
  c.innerHTML=`<div class="card" style="padding-bottom:10px"><div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap"><div class="icon-box">🎯</div><div style="flex:1;min-width:220px"><h2 style="margin:0">Skill Gap &amp; Career</h2><div class="muted">Branch roadmaps, personalised AI role roadmap and an AI doubt solver in one place.</div></div></div><div id="crTopTabs" style="margin-top:12px"></div></div><div id="crMain" style="margin-top:16px"></div>`;
  careerMain();
  api('/health').then(h=>{CAR.aiOn=!!h?.services?.ai;if(CAR.top!=='roadmap')careerMain()}).catch(()=>{});
}
function careerTop(t){CAR.top=t;careerMain()}
function careerMain(){
  const tabs=[['roadmap','🗺️ Branch Roadmaps'],['role','✨ Custom Role Roadmap (AI)'],['doubt','🧠 AI Doubt Solver']];
  document.getElementById('crTopTabs').innerHTML=tabs.map(t=>`<button class="cr-tab ${CAR.top===t[0]?'active':''}" onclick="careerTop('${t[0]}')">${t[1]}</button>`).join('');
  const m=document.getElementById('crMain'),b=careerB();
  const banner=CAR.aiOn===false?`<div class="cr-note">⚠️ The AI service is not connected yet, so you will only see basic answers. Admin: add <b>AI_API_URL</b> and <b>AI_API_KEY</b> in <b>backend/.env</b> and restart the server.</div>`:'';
  if(CAR.top==='roadmap'){m.innerHTML=`<div class="card"><p class="muted" style="margin-top:0">Choose your branch to see a complete roadmap: year-wise plan, career tracks with skill gap check, exams, YouTube playlists and projects. Your ticks are saved.</p><div class="cr-grid" id="crPicker"></div></div><div id="careerBody" style="margin-top:16px"></div>`;careerRender()}
  else if(CAR.top==='role'){
    m.innerHTML=`<div class="card"><h3 style="margin-top:0">✨ Custom Role Roadmap</h3><p class="muted">Enter the role you want and the skills you already have. You get your <b>skill gap</b> and a week-by-week plan with <b>playlists, videos and daily practice</b> for every topic. Your progress is saved so you can continue any day.</p>${banner}<div class="actions" style="flex-wrap:wrap"><input class="field search" id="role" oninput="CAR.roleText=this.value" placeholder="Target role e.g. Data Analyst, Embedded Engineer" onkeydown="if(event.key==='Enter')careerGenRole()"><select class="field" id="roleMonths" style="max-width:130px"><option value="3">3 months</option><option value="6" selected>6 months</option><option value="12">12 months</option></select><select class="field" id="roleHours" style="max-width:150px"><option value="5">5 hours/week</option><option value="10" selected>10 hours/week</option><option value="15">15 hours/week</option><option value="20">20 hours/week</option></select></div><div style="margin-top:8px"><span class="muted" style="font-size:12px">Quick pick:</span> ${b.roles.split('|').map(r=>`<button class="cr-chip" style="border:0;cursor:pointer" onclick="document.getElementById('role').value='${esc(r).replace(/'/g,'')}';CAR.roleText=this.textContent">${esc(r)}</button>`).join('')}</div><div class="cr-plbox" style="margin-top:12px"><b>Your skills</b> <span class="muted" style="font-size:13px">Add what you already know. The roadmap will skip these and focus on your gap.</span><div id="skillChips" style="margin:8px 0"></div><div class="actions" style="flex-wrap:wrap"><input class="field search" id="skillIn" placeholder="Type a skill and press Enter (e.g. Python, SQL)" onkeydown="if(event.key==='Enter')careerAddSkill()"><button class="btn ghost" onclick="careerAddSkill()">Add</button><button class="btn ghost" onclick="careerSkillsFromTicks()">Use my ticked skills</button><label class="btn ghost" style="cursor:pointer">📎 Upload resume or skills (.txt)<input type="file" id="skillFile" accept=".txt,.md,.csv,text/plain" style="display:none" onchange="careerSkillFile(this)"></label></div><div id="skillMsg" class="muted" style="font-size:12px;margin-top:6px">For PDF or Word resumes, copy your skills section and paste or type the skills above.</div></div><button class="btn" id="roleBtn" onclick="careerGenRole()" style="margin-top:12px">Generate my roadmap</button><div id="road" style="margin-top:16px"></div></div>`;
    careerRoleInit();
  }
  else{
    const chips=(CAR_DOUBTS[b.id]||CAR_DOUBTS.cse).map(q=>`<button class="cr-chip" style="border:0;cursor:pointer" onclick="document.getElementById('question').value=this.textContent;careerAsk()">${esc(q)}</button>`).join('');
    m.innerHTML=`<div class="card"><h3 style="margin-top:0">🧠 AI Doubt Solver</h3><p class="muted">Ask any subject doubt. It remembers your last few questions, so you can ask follow-ups like "explain with another example".</p>${banner}<div id="doubt" class="cr-chat">${careerChatHtml()}</div><textarea class="field" id="question" placeholder="Type your doubt here (Ctrl+Enter to send)" onkeydown="if(event.key==='Enter'&&(event.ctrlKey||event.metaKey))careerAsk()" style="margin-top:12px"></textarea><div class="actions" style="margin-top:8px;flex-wrap:wrap"><button class="btn" id="askBtn" onclick="careerAsk()">Ask AI</button><button class="btn ghost" onclick="careerClearChat()">New conversation</button></div><div style="margin-top:10px"><span class="muted" style="font-size:12px">Try:</span> ${chips}</div></div>`;
    const d=document.getElementById('doubt');if(d)d.scrollTop=d.scrollHeight;
  }
}
const CAR_DOUBTS={cse:['Explain deadlock with an example','Difference between process and thread','Time complexity of merge sort'],it:['What is normalization in DBMS?','Difference between TCP and UDP','Explain REST API simply'],aiml:['Explain overfitting and how to fix it','What is gradient descent?','Difference between bagging and boosting'],ece:['Explain how a flip-flop works','What is sampling theorem?','Difference between UART, SPI and I2C'],ee:['Explain how a transformer works','What is per-unit system?','Difference between AC and DC motors'],me:['Explain the first law of thermodynamics','What is Reynolds number?','Difference between stress and strain'],ce:['Explain bending moment and shear force','What is the water-cement ratio?','Difference between RCC and steel design'],che:['Explain mass balance with a simple example','What is the Reynolds number in pipes?','Difference between CSTR and PFR'],bt:['Explain how PCR works','Difference between DNA and RNA','What is bioprocess scale-up?']};
function careerFmt(t){
  return String(t||'').split('```').map((part,i)=>i%2?`<pre class="cr-code">${esc(part.replace(/^\w*\n/,''))}</pre>`:esc(part).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/\n/g,'<br>')).join('');
}
function careerChatHtml(){
  if(!CAR.chat.length)return '<div class="muted" style="padding:6px">Ask your first question below. 👇</div>';
  return CAR.chat.map(m=>m.role==='user'?`<div class="cr-msg me">${esc(m.content)}</div>`:`<div class="cr-msg ai">${careerFmt(m.content)}${m.note?`<div class="cr-note" style="margin-top:8px">${esc(m.note)}</div>`:''}</div>`).join('');
}
function careerClearChat(){CAR.chat=[];careerMain()}
async function careerAsk(){
  const box=document.getElementById('question'),q=box.value.trim();if(!q)return;
  const btn=document.getElementById('askBtn');btn.disabled=true;btn.textContent='Thinking…';
  const history=CAR.chat.filter(m=>!m.note&&!m.fallback).map(m=>({role:m.role,content:m.content}));
  CAR.chat.push({role:'user',content:q});box.value='';
  const d=document.getElementById('doubt');d.innerHTML=careerChatHtml()+'<div class="cr-msg ai"><span class="loading">Thinking…</span></div>';d.scrollTop=d.scrollHeight;
  try{
    const r=await api('/ai/doubt-solver',{method:'POST',body:{question:q,branch:careerB().n,history}});
    CAR.chat.push({role:'assistant',content:r.explanation,fallback:!r.aiUsed,note:r.aiUsed?'':(r.aiError?`AI problem: ${r.aiError}`:'AI is not connected, so this is a basic answer.')});
  }catch(e){CAR.chat.push({role:'assistant',content:'Sorry, something went wrong.',fallback:true,note:e.message})}
  CAR.chat=CAR.chat.slice(-14);
  if(CAR.top==='doubt'){careerMain();document.getElementById('question')?.focus()}
}
function careerKnown(){
  const b=careerB(),out=[];
  careerTracks(b).forEach((t,ti)=>t.skills.forEach((sk,si)=>{if(CAR.done.has(`${b.id}:t${ti}.${si}`)&&!out.includes(sk))out.push(sk)}));
  return out.slice(0,30);
}
const CAR_KEYWORDS=['Python','Java','C++','JavaScript','TypeScript','HTML','CSS','React','Node.js','Express','MongoDB','SQL','MySQL','PostgreSQL','Git','GitHub','Linux','Docker','Kubernetes','AWS','Azure','GCP','REST API','DSA','Data Structures','Algorithms','OOP','DBMS','Operating Systems','Computer Networks','Machine Learning','Deep Learning','NLP','Computer Vision','TensorFlow','PyTorch','scikit-learn','Pandas','NumPy','Power BI','Tableau','Excel','Statistics','MATLAB','Simulink','Verilog','VHDL','Embedded C','Arduino','Raspberry Pi','STM32','ESP32','IoT','RTOS','PCB design','AutoCAD','SolidWorks','CATIA','ANSYS','Fusion 360','STAAD.Pro','ETABS','Revit','Primavera','MS Project','Aspen Plus','HYSYS','PLC','SCADA','ETAP','PVsyst','LTspice','Six Sigma','GD&T','CNC','HAZOP','PCR','Bioinformatics','Biopython','Spark','Airflow','Selenium','Spring Boot','Django','Flask','FastAPI','Figma','Communication'];
function careerExtractSkills(text){
  const out=[],add=x=>{x=String(x).trim();if(x&&x.length<=40&&!out.some(o=>o.toLowerCase()===x.toLowerCase()))out.push(x)};
  CAR_KEYWORDS.forEach(k=>{const re=new RegExp('(?<![A-Za-z0-9+#.])'+k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'(?![A-Za-z0-9+#])','i');if(re.test(text))add(k)});
  text.split(/\r?\n/).forEach(line=>{const m=/^\s*(?:technical\s+)?(?:skills?|technologies|tools|languages)\b[^:\n]*:\s*(.+)$/i.exec(line);if(m)m[1].split(/[,;|•·]/).forEach(x=>{x=x.replace(/\(.*?\)/g,'').trim();if(x.length>1&&x.length<=30&&/[A-Za-z]/.test(x))add(x)})});
  return out.slice(0,40);
}
function careerPushSkill(x){x=String(x||'').trim().slice(0,40);if(!x||CAR.skills.length>=40||CAR.skills.some(y=>y.toLowerCase()===x.toLowerCase()))return false;CAR.skills.push(x);return true}
function careerRenderSkills(){const e=document.getElementById('skillChips');if(!e)return;e.innerHTML=CAR.skills.length?CAR.skills.map((x,i)=>`<span class="cr-chip">${esc(x)} <a href="#" title="Remove" onclick="careerDelSkill(${i});return false" style="text-decoration:none;color:inherit;font-weight:700">×</a></span>`).join(''):'<span class="muted" style="font-size:13px">No skills added yet. Add at least a few so the plan can skip what you know.</span>'}
function careerAddSkill(){const i=document.getElementById('skillIn');i.value.split(/[,;]/).forEach(careerPushSkill);i.value='';careerRenderSkills();careerRmSave()}
function careerDelSkill(i){CAR.skills.splice(i,1);careerRenderSkills();careerRmSave()}
function careerSkillsFromTicks(){const n=careerKnown().filter(careerPushSkill).length;careerRenderSkills();careerRmSave();document.getElementById('skillMsg').textContent=n?`Added ${n} skills you ticked in your branch roadmap.`:'No new ticked skills found. Tick skills in Branch Roadmaps → Career Tracks first.'}
function careerSkillFile(inp){
  const f=inp.files&&inp.files[0];if(!f)return;const msg=document.getElementById('skillMsg');
  if(f.size>300000){msg.textContent='File is too large (max 300 KB).';inp.value='';return}
  const r=new FileReader();
  r.onload=()=>{const found=careerExtractSkills(String(r.result||'')),n=found.filter(careerPushSkill).length;careerRenderSkills();careerRmSave();msg.textContent=found.length?`Found ${found.length} skills in ${f.name}; added ${n} new. Remove any that are wrong.`:'No known skills found in that file. Type your skills above instead.'};
  r.onerror=()=>{msg.textContent='Could not read that file.'};r.readAsText(f);inp.value='';
}
async function careerRoleInit(){
  if(!CAR.rmLoaded){try{const d=await api('/roadmap/custom');CAR.skills=d.skills||[];CAR.rm=d.rm||null}catch(e){CAR.skills=CAR.skills||[]}CAR.rmLoaded=true}
  if(!CAR.skills)CAR.skills=[];
  if(!CAR.skills.length&&!CAR.rm)careerKnown().forEach(careerPushSkill);
  const set=(id,v)=>{const e=document.getElementById(id);if(e&&v!=null)e.value=v};
  set('role',CAR.roleText||CAR.rm?.role||'');if(CAR.rm){set('roleMonths',String(CAR.rm.months));set('roleHours',String(CAR.rm.hours))}
  careerRenderSkills();careerRenderRoadmap();
}
/* offline plan built from our branch tracks (used when AI is off or fails) */
function careerLocalPlan(role,skills,months){
  const STOP=new Set(['engineer','engineering','developer','manager','executive','associate','junior','senior','specialist','officer','assistant','intern','analyst','and','the','for','with']);
  const all=role.toLowerCase().split(/[^a-z0-9+#.]+/).filter(w=>w.length>2),words=all.filter(w=>!STOP.has(w)),keys=words.length?words:all;let best=null,bs=0;
  CAREER.forEach(b=>careerTracks(b).forEach(t=>{const nm=t.name.toLowerCase(),rl=(b.roles+' '+b.n).toLowerCase();let sc=0;keys.forEach(w=>{if(nm.includes(w))sc+=3;if(rl.includes(w))sc+=1});if(sc>bs){bs=sc;best={b,t}}}));
  if(!best)return null;
  const mine=skills.map(x=>x.toLowerCase()).filter(x=>x.length>1),has=sk=>{const k=sk.toLowerCase();return mine.some(m=>k.includes(m)||m.includes(k))};
  const have=best.t.skills.filter(has),missing=best.t.skills.filter(x=>!has(x)),total=months*4;
  const base=missing.length?missing.slice(0,8):best.t.path.slice(0,6),per=Math.max(1,Math.round(total/base.length));
  const steps=base.map((x,i)=>missing.length?{title:'Learn: '+x,details:`Needed for the ${best.t.name} track. Follow this step of the path: ${best.t.path[Math.min(i,best.t.path.length-1)]}.`,weeks:per,topics:[x],search:x+' full course playlist',practice:['Watch one lesson a day and take notes','Build or solve something small after every lesson','Revise your notes every Sunday'],checkpoint:`You can explain ${x} and use it in a small project.`}:{title:x,details:`You already cover the skills of this track. Next step: ${x}.`,weeks:per,topics:[],search:best.t.name+' '+x,practice:['Spend time on this step every day','Show your work to a senior for feedback'],checkpoint:'You finished this step and can show proof (project, notes or certificate).'});
  return{have,missing,steps,track:best.b.n+' · '+best.t.name};
}
const careerVideoLink=q=>`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}&sp=EgIQAQ%3D%3D`;
async function careerGenRole(){
  const role=document.getElementById('role').value.trim(),out=document.getElementById('road');
  if(!role){out.innerHTML='<div class="muted">Type a target role first.</div>';return}
  const btn=document.getElementById('roleBtn');btn.disabled=true;btn.textContent='Generating…';out.innerHTML='<div class="loading">Comparing your skills with the role and building your plan…</div>';
  try{
    const months=Number(document.getElementById('roleMonths').value),hours=Number(document.getElementById('roleHours').value);
    const r=await api('/ai/career-roadmap',{method:'POST',body:{role,months,hours,branch:careerB().n,skills:CAR.skills}});
    let plan={have:r.have||[],missing:r.missing||[],steps:r.steps,source:r.aiUsed?'ai':'basic',track:'',note:''};
    if(!r.aiUsed){const loc=careerLocalPlan(role,CAR.skills,months);if(loc)plan={...loc,source:'local',note:''};plan.note=r.aiError?`AI problem: ${r.aiError}. `:'AI is not connected. '}
    CAR.rm={role:r.role,months,hours,have:plan.have,missing:plan.missing,steps:plan.steps,source:plan.source,track:plan.track||'',note:plan.note||'',createdAt:new Date().toISOString(),done:[]};
    careerRenderRoadmap();careerRmSave(true);
  }catch(e){out.innerHTML=`<div class="cr-note">⚠️ ${esc(e.message)}</div>`}
  btn.disabled=false;btn.textContent='Generate my roadmap';
}
function careerRmSave(now){clearTimeout(CAR.rmTimer);CAR.rmTimer=setTimeout(()=>api('/roadmap/custom',{method:'PUT',body:{skills:CAR.skills,rm:CAR.rm}}).catch(e=>toast(e.message)),now?0:700)}
function careerRmToggle(i,on){const d=new Set(CAR.rm.done);on?d.add(i):d.delete(i);CAR.rm.done=[...d];const n=CAR.rm.steps.length,p=Math.round(CAR.rm.done.length*100/n),set=(id,fn)=>{const e=document.getElementById(id);if(e)fn(e)};set('crRmTxt',e=>e.textContent=`${CAR.rm.done.length} of ${n} steps done (${p}%)`);set('crRmBar',e=>e.style.width=p+'%');set('crRmStep'+i,e=>e.classList.toggle('done',on));careerRmSave()}
function careerRmReset(){if(!confirm('Remove this roadmap and start again?'))return;CAR.rm=null;careerRenderRoadmap();careerRmSave(true)}
function careerRmYT(i,type){const st=CAR.rm.steps[i];return careerYtRun('crRmYt'+i,st.search||(st.title+' full course'),type)}
function careerRenderRoadmap(){
  const out=document.getElementById('road');if(!out)return;
  const r=CAR.rm;if(!r){out.innerHTML='<div class="muted">Your roadmap will appear here.</div>';return}
  const done=new Set(r.done||[]),n=r.steps.length,p=Math.round(done.size*100/n),next=r.steps.findIndex((_,i)=>!done.has(i));
  let w=1;const rng=r.steps.map(s=>{const a=w,b=w+Math.max(1,s.weeks||1)-1;w=b+1;return`Week${a===b?' '+a:'s '+a+'–'+b}`}),total=w-1;
  const src=r.source==='ai'?'':`<div class="cr-note">${esc(r.note||'')}${r.source==='local'?`This plan was built from the <b>${esc(r.track)}</b> track in your branch roadmaps.`:'This is a general plan.'} Connect AI for a plan made exactly for this role.</div>`;
  const gap=`<div class="cr-gap"><b>Your skill gap for ${esc(r.role)}</b><div style="margin-top:8px"><span class="muted" style="font-size:12px">YOU ALREADY HAVE</span><br>${(r.have||[]).map(x=>`<span class="cr-chip" style="background:#dcfce7;color:#166534">✓ ${esc(x)}</span>`).join('')||'<span class="muted" style="font-size:13px">Nothing matched yet. Add your skills above for a better plan.</span>'}</div><div style="margin-top:8px"><span class="muted" style="font-size:12px">STILL TO LEARN (most important first)</span><br>${(r.missing||[]).map((x,i)=>`<span class="cr-chip ${i<3?'hot':''}">${esc(x)}</span>`).join('')||'<span class="muted" style="font-size:13px">No gaps listed. Follow the steps below.</span>'}</div></div>`;
  const steps=r.steps.map((s,i)=>{
    const q=s.search||(s.title+' full course'),rec=careerVerified(`${s.title} ${(s.topics||[]).join(' ')} ${q}`).slice(0,3);
    return `<li id="crRmStep${i}" class="${done.has(i)?'done':''}"><div class="cr-stephead"><b>${esc(s.title)}${i===next?' <span class="cr-chip hot">▶ Start here</span>':''}</b><span class="cr-chip">${rng[i]}</span></div><div>${esc(s.details)}</div>${(s.topics||[]).length?`<div style="margin-top:6px"><span class="muted" style="font-size:12px">TOPICS (tap to find playlists)</span><br>${s.topics.map(t=>`<a class="cr-chip" target="_blank" rel="noopener" href="${careerYtLink(t+' full course')}" style="text-decoration:none">${esc(t)}</a>`).join('')}</div>`:''}<div class="cr-plbox"><div class="muted" style="font-size:12px;margin-bottom:4px">LEARN WITH PLAYLISTS AND VIDEOS</div>${rec.map(x=>`<div class="cr-pl"><a href="${esc(x.url)}" target="_blank" rel="noopener">⭐ ${esc(x.t)}</a><small class="muted"> · ${esc(x.c)}</small></div>`).join('')}<div class="actions" style="flex-wrap:wrap;margin-top:6px"><a class="btn" href="${careerYtLink(q)}" target="_blank" rel="noopener">▶ Playlists on YouTube</a><a class="btn ghost" href="${careerVideoLink(q)}" target="_blank" rel="noopener">🎬 Videos</a><button class="btn ghost" onclick="careerRmYT(${i},'playlist')">🔎 Top playlists here</button><button class="btn ghost" onclick="careerRmYT(${i},'video')">🔎 Top videos here</button></div><div id="crRmYt${i}" class="list"></div></div>${(s.practice||[]).length?`<div style="margin-top:8px"><b style="font-size:13px">Daily practice</b><ul class="route-steps" style="max-height:none;margin-top:4px">${s.practice.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`:''}${s.checkpoint?`<div style="margin-top:6px"><b style="font-size:13px">✅ Checkpoint:</b> ${esc(s.checkpoint)}</div>`:''}<label class="cr-check ${done.has(i)?'done':''}" style="margin-top:8px"><input type="checkbox" ${done.has(i)?'checked':''} onchange="careerRmToggle(${i},this.checked)"><span>Mark this step as done</span></label></li>`}).join('');
  const hrs=r.hours||10,learn=Math.round(hrs*.6),prac=Math.round(hrs*.3),rev=Math.max(1,hrs-learn-prac);
  out.innerHTML=`${src}<div class="route-sum"><div style="display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap"><span><b>${esc(r.role)}</b> · ${total} weeks of work at ${hrs} hours/week</span><b id="crRmTxt">${done.size} of ${n} steps done (${p}%)</b></div><div class="cr-bar" style="margin-top:8px"><i id="crRmBar" style="width:${p}%"></i></div></div>${gap}<ol class="cr-steps">${steps}</ol><div class="cr-plbox"><b>🔁 Your continuous preparation routine</b><ul class="route-steps" style="max-height:none;margin-top:6px"><li><b>Every week (${hrs} hours):</b> about ${learn} h watching lessons, ${prac} h practice or projects, ${rev} h revision.</li><li><b>Every Sunday:</b> tick finished steps, list 3 weak topics and revise them first next week.</li><li><b>Every 2 weeks:</b> finish one small project or take a mock test on what you learned.</li><li><b>Every month:</b> update your resume, GitHub and LinkedIn with new skills and projects.</li><li><b>Come back here:</b> your progress is saved. Update your skills above and generate again whenever you learn something new.</li></ul></div><div class="actions" style="margin-top:12px"><button class="btn ghost" onclick="careerRmReset()">Start a new roadmap</button></div>`;
}
function careerPick(id){CAR.branch=id;CAR.track=0;CAR.tab='plan';CAR.pl=[];careerRender();careerSave()}
function careerTab(t){CAR.tab=t;careerRender();if(t==='prep')return careerLoadPl()}
function careerTrack(i){CAR.track=i;careerRender()}
function careerToggle(id,on){on?CAR.done.add(id):CAR.done.delete(id);careerStats();careerSave()}
function careerSave(){clearTimeout(CAR.timer);CAR.timer=setTimeout(()=>api('/roadmap/progress',{method:'PUT',body:{branch:CAR.branch,done:[...CAR.done]}}).catch(e=>toast(e.message)),600)}
function careerStats(){
  const b=careerB(),ids=careerIds(b),set=(id,fn)=>{const e=document.getElementById(id);if(e)fn(e)},p=careerPct(ids);
  set('crOverallTxt',e=>e.textContent=p+'% complete');set('crOverallBar',e=>e.style.width=p+'%');
  careerPlan(b).forEach((y,yi)=>{const yids=ids.filter(i=>i.startsWith(`${b.id}:y${yi}.`));set('crY'+yi,e=>e.textContent=careerPct(yids)+'%')});
  if(CAR.tab==='tracks')set('crGap',e=>e.innerHTML=careerGap(b));
}
function careerGap(b){
  const t=careerTracks(b)[CAR.track],ids=t.skills.map((_,i)=>`${b.id}:t${CAR.track}.${i}`),have=ids.filter(i=>CAR.done.has(i)).length,p=Math.round(have*100/ids.length),miss=t.skills.filter((_,i)=>!CAR.done.has(ids[i]));
  return `<b>Your match for this track: ${have} of ${ids.length} skills (${p}%)</b><div class="cr-bar" style="margin:8px 0"><i style="width:${p}%"></i></div>${miss.length?`<div class="muted" style="margin-bottom:4px">Skill gap, learn in this order:</div>${miss.map((m,i)=>`<span class="cr-chip ${i<2?'hot':''}">${i+1}. ${esc(m)}</span>`).join('')}`:'<div>🎉 You have covered every skill in this track. Start building projects and applying.</div>'}`;
}
function careerRender(){
  const b=careerB(),ids=careerIds(b),p=careerPct(ids);
  document.getElementById('crPicker').innerHTML=CAREER.map(x=>`<button class="cr-btn ${x.id===b.id?'active':''}" onclick="careerPick('${x.id}')"><span style="font-size:22px">${x.i}</span><b>${esc(x.n)}</b></button>`).join('');
  const tabs=[['plan','🗓️ 4-Year Plan'],['tracks','🛣️ Career Tracks & Skill Gap'],['exams','🎓 Exams & Higher Studies'],['prep','📺 YouTube Playlists'],['work','🛠️ Projects & Certificates']];
  let body='';
  if(CAR.tab==='plan')body=`<div class="grid-2">${careerPlan(b).map((y,yi)=>`<div class="card"><div style="display:flex;justify-content:space-between;align-items:center"><h3 style="margin:0">${['1st','2nd','3rd','4th'][yi]} Year</h3><span class="cr-chip" id="crY${yi}">${careerPct(ids.filter(i=>i.startsWith(`${b.id}:y${yi}.`)))}%</span></div><p class="muted" style="margin:6px 0 8px"><b>Focus:</b> ${esc(y.focus)}</p>${y.goals.map((g,gi)=>careerCheck(`${b.id}:y${yi}.${gi}`,g)).join('')}<div class="muted" style="margin:10px 0 2px;font-size:12px">FOR EVERY BRANCH</div>${CAREER_COMMON[yi].map((g,ci)=>careerCheck(`${b.id}:y${yi}.c${ci}`,g)).join('')}</div>`).join('')}</div>`;
  else if(CAR.tab==='tracks'){const ts=careerTracks(b),t=ts[CAR.track];body=`<div class="card"><p class="muted" style="margin-top:0">Pick a career track, tick the skills you already have, and see your skill gap.</p><div>${ts.map((x,i)=>`<button class="cr-tab ${i===CAR.track?'active':''}" onclick="careerTrack(${i})">${esc(x.name)}</button>`).join('')}</div></div><div class="grid-2" style="margin-top:16px"><div class="card"><h3 style="margin-top:0">Skills needed: ${esc(t.name)}</h3>${t.skills.map((s,si)=>careerCheck(`${b.id}:t${CAR.track}.${si}`,s)).join('')}<div id="crGap" class="cr-gap">${careerGap(b)}</div></div><div class="card"><h3 style="margin-top:0">Step-by-step path</h3><ol class="route-steps" style="max-height:none">${t.path.map(s=>`<li>${esc(s)}</li>`).join('')}</ol><h4 style="margin:14px 0 4px">Tools to learn</h4>${t.tools.map(x=>`<span class="cr-chip">${esc(x)}</span>`).join('')}</div></div>`}
  else if(CAR.tab==='exams')body=`<div class="grid-2"><div class="card"><h3 style="margin-top:0">Exams and opportunities for ${esc(b.n)}</h3><ul class="route-steps" style="max-height:none">${b.exams.split('|').map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div><div class="card"><h3 style="margin-top:0">Choosing your path after B.Tech</h3><ul class="route-steps" style="max-height:none">${CAREER_PATHS.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><p class="muted" style="font-size:12px">Check official websites for current eligibility, dates and syllabus before applying.</p></div></div>`;
  else if(CAR.tab==='prep'){const ps=careerPrep(b),nb=(CAREER_PREP[b.id]||[]).length;body=`<div class="card"><h3 style="margin-top:0">📺 Best YouTube playlists to prepare</h3><p class="muted" style="margin-top:0">For each topic: open the top playlists on YouTube, or press <b>Show top playlists here</b> for live results. Pick <b>one</b> playlist per topic, finish it with notes and practice, then tick it done. <b>⭐ Recommended</b> links are widely used playlists. YouTube does not publish ratings, so <b>👍 student votes</b> decide the best ones: add the playlist that helped you and upvote others.</p><div class="actions" style="flex-wrap:wrap"><input class="field search" id="crYtq" placeholder="Search any topic e.g. Verilog, Power BI, GATE 2027" onkeydown="if(event.key==='Enter')careerYtCustom()"><button class="btn" onclick="careerYtCustom()">Find playlists</button></div><div id="crYtcustom" class="list" style="margin-top:10px"></div></div><div class="grid-2" style="margin-top:16px">${ps.map((x,i)=>`${i===nb?'<div style="grid-column:1/-1" class="muted"><b>FOR EVERY BRANCH</b></div>':''}<div class="card"><h3 style="margin:0 0 6px">${esc(x.t)}</h3><div class="muted" style="font-size:12px">Popular channels</div><div>${x.ch.map(c=>`<span class="cr-chip">${esc(c)}</span>`).join('')}</div><div class="actions" style="flex-wrap:wrap;margin:8px 0"><a class="btn" href="${careerYtLink(x.q)}" target="_blank" rel="noopener">▶ Open on YouTube</a><button class="btn ghost" onclick="careerYT(${i})">🔎 Show top playlists here</button></div><div id="crYt${i}" class="list"></div>${careerPlBlock(x.t,i)}${careerCheck(`${b.id}:p${i}`,'I finished a playlist for this topic')}</div>`).join('')}</div><p class="muted" style="font-size:12px">Channel names are popular suggestions and the best playlist can change over time. Check the video count, upload date and comments before you start.</p>`}
  else body=`<div class="grid-2"><div class="card"><h3 style="margin-top:0">Portfolio projects</h3>${b.projects.split('|').map(x=>{const k=x.indexOf(':');return `<div style="margin:10px 0"><span class="cr-chip hot">${esc(x.slice(0,k))}</span> ${esc(x.slice(k+1).trim())}</div>`}).join('')}<p class="muted" style="font-size:12px">Put every project on GitHub (or a document or portfolio for non-software branches) with a clear description, photos or diagrams and results.</p></div><div class="card"><h3 style="margin-top:0">Certificates and courses</h3><ul class="route-steps" style="max-height:none">${b.certs.split('|').map(x=>`<li>${esc(x)}</li>`).join('')}</ul><p class="muted" style="font-size:12px">Pick one or two that match your track. Projects matter more than collecting many certificates.</p></div></div>`;
  document.getElementById('careerBody').innerHTML=`<div class="card"><div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap"><div style="font-size:34px">${b.i}</div><div style="flex:1;min-width:220px"><h2 style="margin:0">${esc(b.n)}</h2><div class="muted">${esc(b.tag)}</div></div><div style="min-width:180px"><b id="crOverallTxt">${p}% complete</b><div class="cr-bar" style="margin-top:6px"><i id="crOverallBar" style="width:${p}%"></i></div></div></div><div style="margin-top:10px"><span class="muted" style="font-size:12px">POPULAR ROLES</span><br>${b.roles.split('|').map(r=>`<span class="cr-chip">${esc(r)}</span>`).join('')}</div></div><div style="margin:16px 0 12px">${tabs.map(t=>`<button class="cr-tab ${CAR.tab===t[0]?'active':''}" onclick="careerTab('${t[0]}')">${t[1]}</button>`).join('')}</div>${body}`;
}

const careerYtCard=(x,label)=>`<div class="video-card list-item">${x.thumbnail?`<img src="${esc(x.thumbnail)}" alt="">`:''}<div><b>${esc(x.title||'Playlist')}</b><br><small class="muted">${esc(x.channel||'')}</small><br><a href="${esc(x.link||'#')}" target="_blank" rel="noopener">${label||'Open playlist →'}</a></div></div>`;
async function careerYtRun(boxId,q,type){
  const box=document.getElementById(boxId);if(!box)return;type=type==='video'?'video':'playlist';
  box.innerHTML=`<div class="loading">Finding top ${type}s…</div>`;
  try{
    const d=await api('/youtube/search?type='+type+'&q='+encodeURIComponent(q));
    if(d.configured===false)box.innerHTML=`<div class="muted">Live search is not set up (${esc(d.message||'missing YouTube API key')}). Use the YouTube buttons instead.</div>`;
    else box.innerHTML=(d.items||[]).map(x=>careerYtCard(x,type==='video'?'Watch video →':'Open playlist →')).join('')||`<div class="muted">No ${type}s found. Use the YouTube buttons instead.</div>`;
  }catch(e){box.innerHTML=`<div class="muted">⚠️ ${esc(e.message)}. Use the YouTube buttons instead.</div>`}
}
function careerYT(i){return careerYtRun('crYt'+i,careerPrep(careerB())[i].q)}
function careerYtCustom(){const q=document.getElementById('crYtq').value.trim();if(q)return careerYtRun('crYtcustom',q)}

function careerPlBlock(topic,i){
  const rec=careerVerified(topic),com=(CAR.pl||[]).filter(p=>p.topic===topic);
  const recRow=p=>`<div class="cr-pl"><a href="${esc(p.url)}" target="_blank" rel="noopener">⭐ ${esc(p.t)}</a><small class="muted"> · ${esc(p.c)}</small></div>`;
  const recH=rec.slice(0,4).map(recRow).join('')+(rec.length>4?`<details class="cr-add"><summary>Show ${rec.length-4} more playlists</summary>${rec.slice(4).map(recRow).join('')}</details>`:'');
  const comH=com.map(p=>`<div class="cr-pl"><a href="${esc(p.url)}" target="_blank" rel="noopener">▶ ${esc(p.title)}</a><small class="muted"> · added by ${esc(p.by)}</small><span class="cr-pl-act"><button class="cr-vote ${p.voted?'on':''}" onclick="careerVote('${p.id}')">👍 ${p.votes}</button>${p.mine?`<button class="cr-vote" title="Remove" onclick="careerDelPl('${p.id}')">🗑️</button>`:''}</span></div>`).join('');
  return `${rec.length?`<div class="cr-plbox"><div class="muted" style="font-size:12px;margin-bottom:2px">RECOMMENDED PLAYLISTS</div>${recH}</div>`:''}${com.length?`<div class="cr-plbox"><div class="muted" style="font-size:12px;margin-bottom:2px">STUDENT PICKS (most helpful first)</div>${comH}</div>`:''}<details class="cr-add"><summary>＋ Add a playlist that helped you</summary><div class="form-grid" style="margin-top:8px"><input class="field full" id="crPlU${i}" placeholder="Paste YouTube playlist link (youtube.com/playlist?list=...)"><input class="field full" id="crPlT${i}" placeholder="Short title, e.g. Gate Smashers DBMS" maxlength="100"></div><button class="btn" style="margin-top:8px" onclick="careerAddPl(${i})">Add playlist</button></details>`;
}
async function careerLoadPl(){try{CAR.pl=await api('/playlists?branch='+CAR.branch)}catch(e){CAR.pl=[]}if(CAR.tab==='prep')careerRender()}
async function careerAddPl(i){
  const x=careerPrep(careerB())[i],url=document.getElementById('crPlU'+i).value,title=document.getElementById('crPlT'+i).value;
  try{const p=await api('/playlists',{method:'POST',body:{branch:CAR.branch,topic:x.t,title,url}});CAR.pl=[...(CAR.pl||[]),p].sort((a,b)=>b.votes-a.votes);careerRender();toast('Playlist added. Thank you!')}catch(e){toast(e.message)}
}
async function careerVote(id){try{const p=await api('/playlists/'+id+'/vote',{method:'POST'});CAR.pl=CAR.pl.map(x=>x.id===id?p:x).sort((a,b)=>b.votes-a.votes);careerRender()}catch(e){toast(e.message)}}
async function careerDelPl(id){if(!confirm('Remove this playlist?'))return;try{await api('/playlists/'+id,{method:'DELETE'});CAR.pl=CAR.pl.filter(x=>x.id!==id);careerRender()}catch(e){toast(e.message)}}
