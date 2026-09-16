export interface SocialLinks {
  email: string;
  phone: string;
  phoneRaw: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface ProfileData {
  name: string;
  firstName: string;
  lastName: string;
  avatar: string;
  role: string;
  heroHeadline: string;
  alternativeHeroHeadline: string;
  heroSubtext: string;
  availability: string;
  summary: string;
  languages: {
    language: string;
    proficiency: string;
    note?: string;
  }[];
  socials: SocialLinks;
  about: {
    heading: string;
    subheading: string;
    statement: string;
    description: string[];
    coreAdvantage: {
      title: string;
      description: string;
      pillars: string[];
    };
    stats: { label: string; value: string; detail: string }[];
  };
  engineeringFoundation: {
    id: string;
    title: string;
    category: string;
    description: string;
    skills: string[];
    icon: string;
  }[];
  aiExpertise: {
    id: string;
    category: string;
    title: string;
    description: string;
    status: string;
    capabilities: string[];
    tools: string[];
  }[];
  aiStackFlow: {
    step: number;
    title: string;
    subtitle: string;
    category: string;
    description: string;
    technicalDetails: string;
    samplePayload: string;
  }[];
  industrialFlow: {
    step: number;
    node: string;
    category: string;
    description: string;
    protocols: string;
  }[];
  visionArchitecture: {
    tier: string;
    name: string;
    components: string[];
    role: string;
    accentColor: string;
  }[];
  projects: ProjectItem[];
  skills: {
    category: string;
    subcategories: {
      name: string;
      items: string[];
    }[];
  }[];
  experience: {
    id: string;
    company: string;
    role: string;
    location: string;
    period: string;
    isCurrentOrUpcoming?: boolean;
    responsibilities: string[];
    technologies: string[];
  }[];
  education: {
    institution: string;
    degree: string;
    period: string;
    cgpa: string;
    honors: {
      title: string;
      year: string;
      detail: string;
    }[];
  };
  achievements: {
    title: string;
    organization: string;
    year: string;
    type: string;
    description: string;
    badge?: string;
  }[];
  certifications: {
    title: string;
    issuer: string;
    skills: string[];
    levels?: string;
  }[];
  philosophy: {
    number: string;
    title: string;
    subtitle: string;
    description: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'AI / GenAI' | 'AI Agents' | 'Automation' | 'PLC' | 'IoT' | 'Software';
  categoryLabel: string;
  tags: string[];
  description: string;
  problem: string;
  solution: string;
  architecture: {
    flow: string[];
    description: string;
  };
  keyFeatures: string[];
  myContribution: string;
  technologies: string[];
  links: {
    github: string;
    liveDemo: string;
  };
  mockupType: 'company-intel' | 'doc-reader' | 'ai-analyst' | 'ai-orchestrator' | 'iot-ac' | 'water-plc';
}

export const PROFILE_DATA: ProfileData = {
  name: "Siva N",
  firstName: "Siva",
  lastName: "N",
  avatar: "/siva-portrait.jpg",
  role: "GenAI Developer | AI Engineer | Industrial Automation Engineer",
  heroHeadline: "Building Intelligent Systems That Connect AI, Software & Automation",
  alternativeHeroHeadline: "Building Intelligent Systems Across AI & Industrial Automation",
  heroSubtext: "I build AI-powered applications and intelligent systems while combining my engineering background in PLCs, industrial automation, IoT and control systems.",
  availability: "Open to AI & Technology Opportunities",
  summary: "Electronics and Communication Engineering graduate passionate about Industrial Automation and emerging Generative AI. Proficient in Programming Logic Controllers, Ladder Logic, FBD, Hardware and Software Integration with working knowledge of industrial communication protocols. A quick learner and collaborative team player, striving to build real-world solutions across intelligent automation and software systems.",
  languages: [
    { language: "Tamil", proficiency: "Native / Full Professional", note: "Primary Language" },
    { language: "English", proficiency: "Professional Working Proficiency", note: "Technical & Professional" },
    { language: "Hindi", proficiency: "Certified (DBHPS)", note: "Parichay, Prathmic, Madhiyama, Rastrabaksha" }
  ],
  socials: {
    email: "siva.prof46@gmail.com",
    phone: "+91 7305852492",
    phoneRaw: "+917305852492",
    linkedin: "https://www.linkedin.com/in/siva-n-8546a7244",
    github: "https://github.com/developersiva7305",
    location: "Chennai, India",
  },
  about: {
    heading: "Engineering Meets Intelligence",
    subheading: "Connecting Physical Control Systems With Autonomous AI Capabilities",
    statement: "From industrial control systems to intelligent AI applications, I enjoy building technology that solves real-world problems.",
    description: [
      "I am an Electronics and Communication Engineering graduate with a strong interest in industrial automation and emerging AI technologies.",
      "My engineering experience includes PLC programming, ladder logic, function block diagrams, instrumentation, SCADA, industrial communication protocols, sensors, actuators, VFD control, PID concepts, panel wiring, commissioning and troubleshooting.",
      "I am also expanding my technical capabilities into Generative AI, LLM applications, RAG, AI agents, document intelligence, AI analytics and modern software development.",
      "The goal is to build practical, intelligent systems that connect technology with real-world applications."
    ],
    coreAdvantage: {
      title: "The Quad-Stack Synergy",
      description: "My unique advantage is the unified convergence of four critical engineering disciplines:",
      pillars: [
        "Engineering: Deep hardware, circuit & instrumentation principles (ECE 9.23 CGPA)",
        "Automation: Deterministic PLC logic, SCADA & industrial bus protocols (Modbus/Profibus/EthernetIP)",
        "Software: Full-stack architectures, modern APIs & asynchronous runtimes (FastAPI, React, Python)",
        "AI & GenAI: LLM agents, semantic vector retrieval & automated reasoning (RAG, Tool Calling)"
      ]
    },
    stats: [
      { label: "Engineering CGPA", value: "9.23 / 10", detail: "Jerusalem College of Eng." },
      { label: "Academic Honors", value: "3x Topper", detail: "Sem 3 (1st), Sem 4 (2nd), Sem 6 (2nd)" },
      { label: "PLC Platforms", value: "6+ Ecosystems", detail: "Siemens, Delta, ABB, Allen-Bradley, Omron, Mitsubishi" },
      { label: "Core Focus", value: "AI + Automation", detail: "Autonomous & Real-Time Systems" }
    ]
  },
  engineeringFoundation: [
    {
      id: "industrial-automation",
      title: "Industrial Automation",
      category: "Deterministic Control",
      description: "PLC programming, ladder logic, FBD, Structured Text and industrial control systems.",
      skills: ["PLC Programming", "Ladder Logic", "Function Block Diagram (FBD)", "Structured Text (ST)", "Industrial Control Systems", "Control Panel Logic", "Siemens Tech", "Delta Tech"],
      icon: "Cpu"
    },
    {
      id: "instrumentation",
      title: "Instrumentation",
      category: "Sensing & Actuation",
      description: "Temperature and pressure transmitters, sensors, actuators, calibration and troubleshooting.",
      skills: ["Temperature Transmitters", "Pressure Transmitters", "Industrial Sensors", "Actuator Integration", "Sensor Calibration", "Field Troubleshooting", "Wiring Diagrams"],
      icon: "Gauge"
    },
    {
      id: "control-systems",
      title: "Control Systems",
      category: "Process Dynamics",
      description: "VFD control, PID concepts, process control and automation logic.",
      skills: ["VFD Drive Control", "PID Closed Loop Tuning", "Process Control Dynamics", "Safety Interlocks", "Automation Sequencing", "Troubleshooting & Commissioning"],
      icon: "Activity"
    },
    {
      id: "industrial-communication",
      title: "Industrial Communication",
      category: "Industrial Bus Protocols",
      description: "Modbus, Ethernet/IP and Profibus.",
      skills: ["Modbus RTU / TCP", "Ethernet/IP", "Profibus DP/PA", "Inter-PLC Communication", "Serial Bus Integration"],
      icon: "Network"
    },
    {
      id: "scada",
      title: "SCADA & HMI",
      category: "Supervisory Control",
      description: "WinCC and InTouch.",
      skills: ["Siemens WinCC", "Wonderware InTouch", "Alarm Telemetry", "HMI Mimic Panels", "Real-Time Historian Logging"],
      icon: "MonitorCheck"
    },
    {
      id: "iot-cloud",
      title: "IoT & Cloud",
      category: "Edge-to-Cloud Telemetry",
      description: "IoT-based monitoring and AWS cloud data transmission.",
      skills: ["Edge IoT Gateways", "AWS Cloud Ingestion", "Real-Time Sensor Streaming", "Cloud Data Logging", "Remote Telemetry Monitoring"],
      icon: "CloudLightning"
    }
  ],
  aiExpertise: [
    {
      id: "genai-llm",
      category: "Generative AI",
      title: "Generative AI & LLM Engineering",
      description: "Designing structured reasoning flows, robust prompt engineering harnesses, and production-grade LLM applications.",
      status: "Technical Knowledge & Active Development",
      capabilities: [
        "Large Language Models (LLMs)",
        "Prompt Engineering & System Framing",
        "Few-shot & Structured Output Generation",
        "AI Application Development",
        "LLM-Powered Domain Workflows"
      ],
      tools: ["OpenAI APIs", "Anthropic Claude", "Gemini", "LangChain", "LlamaIndex"]
    },
    {
      id: "rag-retrieval",
      category: "RAG & Search",
      title: "Retrieval-Augmented Generation (RAG)",
      description: "Building high-precision semantic search and document question-answering systems over unstructured enterprise data.",
      status: "Technical Knowledge & Project Focus",
      capabilities: [
        "Retrieval-Augmented Generation (RAG)",
        "Document Question Answering",
        "Text Embeddings Generation",
        "Semantic Search & Re-ranking",
        "Vector Search & Hybrid Retrieval",
        "Knowledge Retrieval Pipelines"
      ],
      tools: ["ChromaDB", "FAISS", "Pinecone", "Sentence Transformers", "Unstructured"]
    },
    {
      id: "ai-agents",
      category: "Autonomous Systems",
      title: "AI Agents & Orchestration",
      description: "Architecting autonomous agents with tool-calling capabilities, multi-step validation loops, and dynamic task delegation.",
      status: "Technical Knowledge & Current Focus",
      capabilities: [
        "AI Agents & Goal-Driven Execution",
        "Agentic Workflows & State Machines",
        "Deterministic Tool Calling",
        "Multi-step AI Workflows & Loops",
        "AI Orchestration Architectures",
        "API & Custom Tool Integration"
      ],
      tools: ["Function Calling", "LangGraph", "CrewAI", "Custom Orchestrators", "FastAPI"]
    },
    {
      id: "ai-analytics",
      category: "Data Intelligence",
      title: "AI Analytics & Document Intelligence",
      description: "Extracting actionable KPIs, synthesizing high-density business reports, and translating natural language into data queries.",
      status: "Technical Knowledge & Project Exploration",
      capabilities: [
        "AI-Powered Data Analysis",
        "KPI Analysis & Anomaly Extraction",
        "Automated Business Intelligence",
        "Insight Generation & Narration",
        "Automated Summarization",
        "Data-Driven Decision Support"
      ],
      tools: ["Pandas", "Python", "Plotly", "JSON-Schema", "SQL Extraction"]
    },
    {
      id: "ai-app-dev",
      category: "Software Engineering",
      title: "AI Application Development Stack",
      description: "Developing responsive frontend interfaces and high-concurrency API backends to deliver fast, reliable AI tools.",
      status: "Technical Knowledge & Full-Stack Projects",
      capabilities: [
        "LLM APIs & Streaming Responses",
        "REST API Architecture",
        "Python & FastAPI Backend Engines",
        "React & Next.js Frontend Dashboards",
        "Real-Time Data Processing",
        "Database Integration & Schemas"
      ],
      tools: ["FastAPI", "React", "Next.js", "Python", "TypeScript", "Node.js"]
    }
  ],
  aiStackFlow: [
    {
      step: 1,
      title: "User Input",
      subtitle: "Query & Parameters",
      category: "Ingress",
      description: "Natural language instruction, document upload, or edge telemetry query submitted by the user or client interface.",
      technicalDetails: "Sanitization, rate limiting, and intent classification at the API boundary.",
      samplePayload: '{\n  "query": "Compare Q3 operating efficiency across plants",\n  "context_scope": "industrial_telemetry"\n}'
    },
    {
      step: 2,
      title: "Application Layer",
      subtitle: "FastAPI / React Runtime",
      category: "Orchestration Ingress",
      description: "Validates schema, authenticates user context, initializes session state, and forwards structured payload.",
      technicalDetails: "Asynchronous task handler with session state management and tracing tags.",
      samplePayload: '{\n  "session_id": "sess_8941",\n  "timestamp": "2026-09-10T06:20:00Z",\n  "auth_verified": true\n}'
    },
    {
      step: 3,
      title: "LLM",
      subtitle: "Core Reasoning Engine",
      category: "Intelligence Engine",
      description: "Foundation model parses semantic nuances, formulates reasoning goals, and determines necessary external tools.",
      technicalDetails: "High-capability reasoning model with dynamic temperature and context window allocation.",
      samplePayload: '{\n  "model": "gpt-4o / gemini-1.5-pro",\n  "plan": ["retrieve_docs", "query_telemetry_db", "synthesize_kpis"]\n}'
    },
    {
      step: 4,
      title: "Prompt / Context",
      subtitle: "System Instructions & Framing",
      category: "Cognitive Context",
      description: "Injects strict role boundaries, few-shot examples, JSON schema constraints, and safety guidelines.",
      technicalDetails: "Dynamic prompt template compiler injecting live system parameters.",
      samplePayload: '{\n  "role": "Industrial AI Analyst",\n  "schema_constraint": "strict_json",\n  "guardrails": ["zero_hallucination", "cite_sources"]\n}'
    },
    {
      step: 5,
      title: "RAG / Knowledge Retrieval",
      subtitle: "Vector Search & Embeddings",
      category: "Semantic Retrieval",
      description: "Queries high-dimensional vector databases for relevant document chunks, technical manuals, or past logs.",
      technicalDetails: "Cosine similarity search over dense embeddings + BM25 hybrid ranking.",
      samplePayload: '{\n  "retrieved_chunks": 3,\n  "top_score": 0.892,\n  "sources": ["scada_spec_v2.pdf", "plant_kpis_2026.csv"]\n}'
    },
    {
      step: 6,
      title: "Tools / APIs",
      subtitle: "External Tool Integration",
      category: "Execution Layer",
      description: "Executes deterministic function calls: web search, calculation engines, database queries, or industrial actuators.",
      technicalDetails: "Strict OpenAPI function schemas with type validation and retry fallbacks.",
      samplePayload: '{\n  "tool_called": "execute_sql_telemetry",\n  "args": {"metric": "kw_per_ton", "limit": 100}\n}'
    },
    {
      step: 7,
      title: "AI Agent / Orchestrator",
      subtitle: "Multi-Step Workflow Controller",
      category: "Agentic Loop",
      description: "Evaluates tool outputs against the original goal, resolves ambiguities, and loops until the plan is fulfilled.",
      technicalDetails: "ReAct / DAG state machine with execution limits and error-recovery branches.",
      samplePayload: '{\n  "iteration": 2,\n  "state": "data_consolidated",\n  "confidence": 0.96\n}'
    },
    {
      step: 8,
      title: "Data / Database",
      subtitle: "State & Vector Storage",
      category: "Persistence",
      description: "Stores session history, vector indexes, cached embeddings, and audit trails for compliance.",
      technicalDetails: "Hybrid relational (PostgreSQL / MySQL) + Vector Index (Pinecone / Chroma).",
      samplePayload: '{\n  "record_saved": "audit_log_2891",\n  "vector_id": "vec_88194",\n  "status": "synced"\n}'
    },
    {
      step: 9,
      title: "Response / Action",
      subtitle: "Structured Insight & Automation",
      category: "Output",
      description: "Delivers a streaming response with structured citations, interactive charts, or triggered automation webhooks.",
      technicalDetails: "Server-sent events (SSE) stream or JSON payload to frontend UI.",
      samplePayload: '{\n  "summary": "Plant A demonstrated 14.2% higher efficiency...",\n  "citations": ["scada_spec_v2.pdf"],\n  "chart_ready": true\n}'
    }
  ],
  industrialFlow: [
    { step: 1, node: "Sensors & Transmitters", category: "Physical World", description: "Temperature, pressure, flow, and level sensors capture continuous analog & digital signals.", protocols: "4-20mA, 0-10V, RTD, Thermocouple" },
    { step: 2, node: "PLC Controller", category: "Edge Compute", description: "Siemens & Delta PLCs scan inputs, execute deterministic cycle routines, and compute logic.", protocols: "Scan Cycle < 10ms" },
    { step: 3, node: "Control Logic", category: "Deterministic Rules", description: "Ladder logic, Function Block Diagrams (FBD), and PID loops execute safety and process laws.", protocols: "IEC 61131-3 Standard" },
    { step: 4, node: "Actuators & VFDs", category: "Physical Action", description: "Valves, motors, variable frequency drives, and relays modify physical process conditions.", protocols: "Modbus RTU, Relays, VFD" },
    { step: 5, node: "SCADA & HMI", category: "Supervisory Monitoring", description: "WinCC / InTouch systems visualize real-time plant graphics, log alarms, and track historical trends.", protocols: "Modbus TCP, Ethernet/IP, Profibus" },
    { step: 6, node: "Cloud & IoT Gateway", category: "Data Ingestion", description: "Edge IoT gateways transmit telemetry securely to cloud platforms for centralized storage.", protocols: "MQTT, HTTPS, AWS IoT Core" },
    { step: 7, node: "AI & Autonomous Optimization", category: "Intelligent Layer", description: "GenAI agents and predictive algorithms analyze telemetry to recommend setpoint tuning.", protocols: "REST APIs, LLM Agents, Vector RAG" }
  ],
  visionArchitecture: [
    {
      tier: "05",
      name: "Application Layer",
      role: "User Interfaces, Operator Consoles, Smart Alerts & Decision Support",
      components: ["React Dashboards", "Natural Language Query UI", "Automated Action Dispatchers", "Mobile / Web Alerting"],
      accentColor: "#38BDF8"
    },
    {
      tier: "04",
      name: "Agent Layer",
      role: "Autonomous AI Orchestration & Multi-Step Task Resolution",
      components: ["AI Agent DAGs", "Deterministic Tool Calling", "Verification & Retry Loops", "Multi-Agent Collaboration"],
      accentColor: "#818CF8"
    },
    {
      tier: "03",
      name: "Intelligence Layer",
      role: "GenAI Reasoning, Domain Knowledge Retrieval & Analytics",
      components: ["Large Language Models", "Vector Search / RAG", "Automated KPI Synthesis", "Document Intelligence"],
      accentColor: "#A855F7"
    },
    {
      tier: "02",
      name: "Data Layer",
      role: "High-Throughput Telemetry Ingestion, Storage & Buffering",
      components: ["AWS IoT Core / Cloud", "Relational & Time-Series DBs (SQL, MySQL)", "Vector Databases", "Real-Time Message Brokers"],
      accentColor: "#6366F1"
    },
    {
      tier: "01",
      name: "Industrial Layer",
      role: "Deterministic Physical Control, Sensing & Field Actuation",
      components: ["Siemens & Delta PLCs", "Industrial Transmitters (Temp/Pressure)", "VFDs & Actuators", "SCADA (WinCC/InTouch)", "Modbus / Profibus / Ethernet/IP"],
      accentColor: "#EC4899"
    }
  ],
  projects: [
    {
      id: "ai-company-intelligence",
      title: "AI Company Intelligence",
      tagline: "Autonomous Market & Competitor Research Platform",
      category: "AI / GenAI",
      categoryLabel: "Generative AI · AI Agents · Business Intelligence",
      tags: ["Generative AI", "LLM", "RAG", "AI Agents", "Web Search", "Python", "FastAPI", "React", "Data Analysis"],
      description: "An AI-powered company intelligence platform designed to research companies, analyze business information, identify competitors, gather relevant information and generate actionable insights.",
      problem: "Market research and competitive intelligence require analyzing disparate websites, financial filings, and news sources, a process that is time-consuming and prone to informational gaps.",
      solution: "Engineered an autonomous research pipeline where AI agents execute web queries, parse structured filings, index vector knowledge, and synthesize comprehensive competitor breakdown reports with verifiable citations.",
      architecture: {
        flow: ["User Company Query", "Agent Task Planner", "Live Web Search & Scraping", "Vector Embedding & Chunking", "LLM Synthesis & Competitor Matrix", "Interactive Dashboard Output"],
        description: "FastAPI backend coordinates multi-agent research tools with semantic vector re-ranking and streaming React client updates."
      },
      keyFeatures: [
        "Automated multi-source corporate profile generation",
        "Competitor landscape mapping and feature-matrix comparison",
        "Sentiment extraction from public commentary and news",
        "Exportable executive briefing summaries in Markdown/PDF",
        "Interactive Q&A over aggregated company dossier"
      ],
      myContribution: "Architected the multi-step agent query plan, integrated search tool calling with FastAPI, designed the prompt engineering harnesses for unbiased synthesis, and built the React analytics UI.",
      technologies: ["Python", "FastAPI", "OpenAI / Claude LLMs", "React", "Tailwind CSS", "BeautifulSoup", "ChromaDB"],
      links: {
        github: "https://github.com/developersiva7305/ai-company-intelligence",
        liveDemo: "https://demo.siva-n.dev/company-intelligence"
      },
      mockupType: "company-intel"
    },
    {
      id: "ai-document-reader",
      title: "AI Document Reader",
      tagline: "High-Precision RAG Document Intelligence Engine",
      category: "AI / GenAI",
      categoryLabel: "Generative AI · RAG · Document Intelligence",
      tags: ["LLM", "RAG", "Embeddings", "Vector Search", "Python", "React", "APIs", "PDF Extraction"],
      description: "An intelligent document analysis application that allows users to upload documents and interact with their content using natural language.",
      problem: "Extracting precise answers from complex technical manuals, engineering specs, and contracts often leads to hallucinations or missed cross-section references in standard LLM prompts.",
      solution: "Developed a modular Retrieval-Augmented Generation (RAG) architecture using chunk-aware parsing, dense sentence embeddings, cosine similarity vector filtering, and cited response synthesis.",
      architecture: {
        flow: ["Document Upload (PDF/DOCX)", "Text Chunking & Metadata Tagging", "Dense Vector Embedding", "Vector Database Indexing", "Semantic Query Retrieval", "Contextual RAG Response with Page Citations"],
        description: "End-to-end RAG pipeline providing sub-second semantic retrieval and exact page/paragraph attribution."
      },
      keyFeatures: [
        "Multi-document parsing with table and header retention",
        "Hybrid vector search combining keyword and semantic embeddings",
        "Inline citation linking directly to source page numbers",
        "Dynamic conversational memory with context pruning",
        "Side-by-side document viewer and AI dialogue panel"
      ],
      myContribution: "Designed the document chunking and vector retrieval pipeline in Python, configured embedding indexing, and engineered the interactive side-by-side React interface with citation highlights.",
      technologies: ["Python", "FastAPI", "LangChain / LlamaIndex", "ChromaDB", "Sentence Transformers", "React", "TypeScript"],
      links: {
        github: "https://github.com/developersiva7305/ai-document-reader",
        liveDemo: "https://demo.siva-n.dev/doc-reader"
      },
      mockupType: "doc-reader"
    },
    {
      id: "ai-analyst",
      title: "AI Analyst",
      tagline: "Natural Language Business & Telemetry Analytics Engine",
      category: "Software",
      categoryLabel: "AI Analytics · Data Intelligence · BI",
      tags: ["AI Analytics", "KPI Extraction", "Natural Language Query", "Data Visualization", "Python", "React", "Pandas"],
      description: "An AI-powered analytics system that transforms business data into understandable insights, KPIs, trends, summaries and decision-support information.",
      problem: "Non-technical stakeholders struggle to write complex SQL or pivot large datasets to uncover anomalies, operational bottlenecks, or recurring KPI trends.",
      solution: "Built a conversational analytics engine that translates plain English queries into structured data transformations, statistical aggregations, dynamic charts, and executive bullet-point takeaways.",
      architecture: {
        flow: ["Raw CSV / Database Ingress", "Schema Inspection & LLM Code Generation", "Deterministic Pandas / SQL Execution", "Statistical Anomaly Detection", "Interactive Chart Render & Narrative Synthesis"],
        description: "Dual-engine architecture pairing LLM schema comprehension with deterministic Python sandboxed statistical execution."
      },
      keyFeatures: [
        "Zero-code natural language to data transformation queries",
        "Automated outlier and anomaly detection on time-series records",
        "Interactive charts (time-series, distribution, breakdown bars)",
        "Automated executive summaries highlighting key positive/negative variances",
        "Deterministic sandboxed code execution ensuring numeric precision"
      ],
      myContribution: "Engineered the schema introspection and query planning layers, implemented data visualization components, and designed validation routines to prevent erroneous numerical extrapolations.",
      technologies: ["Python", "Pandas", "FastAPI", "React", "Chart.js / Recharts", "Tailwind CSS"],
      links: {
        github: "https://github.com/developersiva7305/ai-analyst",
        liveDemo: "https://demo.siva-n.dev/ai-analyst"
      },
      mockupType: "ai-analyst"
    },
    {
      id: "ai-agent-orchestrator",
      title: "AI Agent / Orchestrator",
      tagline: "Multi-Step Autonomous Workflow & Tool Routing Engine",
      category: "AI Agents",
      categoryLabel: "AI Agents · Automation · Orchestration",
      tags: ["AI Agents", "Tool Calling", "Orchestration", "State Machines", "Python", "FastAPI", "APIs"],
      description: "An AI orchestration system designed to coordinate AI models, tools, APIs and workflows to execute multi-step tasks.",
      problem: "Complex goals require chaining multiple specialized tools (search, computation, document lookup, external APIs) while gracefully handling failures and maintaining step-by-step state.",
      solution: "Constructed a directed acyclic graph (DAG) agent orchestrator with dynamic tool dispatching, schema-validated arguments, automatic retry loops, and step-by-step human-inspectable reasoning logs.",
      architecture: {
        flow: ["User Request", "AI Orchestrator Planner", "Tool Dispatcher (Web / Data / Docs / APIs)", "Execution Sandbox", "Observation & Reflection Loop", "Final Action & Response"],
        description: "State-machine-driven agent orchestrator with tool registration, execution timeouts, and observable progress streams."
      },
      keyFeatures: [
        "Modular tool registry with auto-generated JSON schema descriptions",
        "Dynamic step planning and reactive re-planning on tool failure",
        "Live execution timeline showing agent thought, tool call, and result",
        "Safety guardrails with execution depth and budget limits",
        "Pluggable integrations for search, data analysis, and REST services"
      ],
      myContribution: "Created the core state-machine orchestrator, tool registry decorators, streaming execution WebSocket/SSE feed, and interactive step visualizer UI.",
      technologies: ["Python", "FastAPI", "Pydantic", "React", "Framer Motion", "Tailwind CSS"],
      links: {
        github: "https://github.com/developersiva7305/ai-agent-orchestrator",
        liveDemo: "https://demo.siva-n.dev/agent-orchestrator"
      },
      mockupType: "ai-orchestrator"
    },
    {
      id: "iot-ac-control-system",
      title: "IoT Based Air Conditioner Control System",
      tagline: "Industrial Climate Automation with AWS Telemetry Stream",
      category: "IoT",
      categoryLabel: "Industrial Automation · IoT · PLC",
      tags: ["Siemens PLC", "Ladder Logic", "TIA Portal", "IoT", "AWS", "VIT", "Cloud Telemetry"],
      description: "Worked on an Air Conditioner Control System at VIT using Siemens PLC and IoT modules for real-time parameter monitoring and control. Enabled secure cloud-based data transmission via AWS for remote monitoring, enhancing system efficiency and reliability through smart automation.",
      problem: "Commercial HVAC and cooling systems suffer from energy inefficiencies and lack of remote diagnostic telemetry when operated on standalone local timers.",
      solution: "Engineered a closed-loop automation architecture utilizing a Siemens PLC programmed in Ladder Logic via TIA Portal, coupled with an IoT edge module streaming temperature and current telemetry to AWS for real-time remote supervision.",
      architecture: {
        flow: ["Temperature & Current Sensors", "Siemens PLC Controller (TIA Portal)", "Ladder Logic Relay & VFD Routine", "IoT Edge Transmission Module", "AWS Cloud Ingestion & Dashboard", "Remote Supervision & Control"],
        description: "Industrial hardware architecture bridging deterministic Siemens PLC scan cycles with asynchronous cloud telemetry."
      },
      keyFeatures: [
        "Siemens PLC Ladder Logic for threshold-based cooling cycles",
        "Real-time temperature and power consumption parameter monitoring",
        "Safety interlocks protecting compressor from rapid cycling",
        "Secure cloud-based data transmission via AWS for remote monitoring",
        "Remote parameter logging and operational trend dashboard"
      ],
      myContribution: "Developed the Ladder Logic routines in Siemens TIA Portal, wired industrial sensor inputs to PLC terminal blocks, integrated IoT communication modules, and tested AWS telemetry transmission during the VIT project.",
      technologies: ["Siemens PLC", "TIA Portal", "Ladder Logic", "IoT Gateway", "AWS Cloud", "Industrial Sensors"],
      links: {
        github: "https://github.com/developersiva7305/iot-ac-plc-control",
        liveDemo: "https://demo.siva-n.dev/iot-ac-system"
      },
      mockupType: "iot-ac"
    },
    {
      id: "water-control-system",
      title: "Water Control System",
      tagline: "Multi-PLC Distributed Automation Architecture",
      category: "PLC",
      categoryLabel: "PLC · Industrial Automation · Inter-PLC Communication",
      tags: ["Siemens PLC", "Delta PLC", "Ladder Logic", "TIA Portal", "ISP Soft", "PLC Communication", "BITS Pilani"],
      description: "Developed a Water Control System at BITS Pilani, Hyderabad Campus, using three PLCs (1 Siemens PLC as main controller and 2 Delta PLCs) for coordinated automation. Implemented inter-PLC communication and real-time monitoring to ensure efficient water level management and reliable system performance.",
      problem: "Multi-tank distributed water distribution requires coordinated level management across physically separated nodes without single-point failure or tank overflow conditions.",
      solution: "Architected a synchronized multi-controller automation topology where a primary Siemens PLC coordinates with two secondary Delta PLCs over industrial communication, orchestrating pump sequencing and real-time water-level balancing.",
      architecture: {
        flow: ["Level Transmitters (Tanks 1, 2, 3)", "2x Delta Secondary PLCs (ISP Soft)", "Inter-PLC Communication Bus", "1x Siemens Master PLC (TIA Portal)", "Pump Actuators & Solenoid Valves", "Centralized Monitoring HMI"],
        description: "Multi-vendor PLC network combining Siemens and Delta automation controllers in master-slave coordination."
      },
      keyFeatures: [
        "3-PLC coordinated architecture (1 Siemens Master + 2 Delta Slaves)",
        "Deterministic inter-PLC communication for synchronized status exchange",
        "Multi-tank water-level tracking with high/low threshold safety cutoffs",
        "Automated pump cycling and valve actuation logic",
        "Real-time alarm generation for dry-run prevention and overflow protection"
      ],
      myContribution: "Programmed master control logic in TIA Portal, developed Delta PLC logic in ISP Soft, established inter-PLC communication mapping, and commissioned the multi-controller hardware testbed at BITS Pilani Hyderabad Campus.",
      technologies: ["Siemens PLC", "Delta PLC", "TIA Portal", "ISP Soft", "Inter-PLC Bus", "Level Transmitters", "Ladder Logic"],
      links: {
        github: "https://github.com/developersiva7305/multi-plc-water-system",
        liveDemo: "https://demo.siva-n.dev/water-control-system"
      },
      mockupType: "water-plc"
    }
  ],
  skills: [
    {
      category: "AI & Generative AI",
      subcategories: [
        {
          name: "Core GenAI & Reasoning",
          items: ["Generative AI", "Large Language Models (LLMs)", "Prompt Engineering", "Structured Outputs", "Context Window Management"]
        },
        {
          name: "RAG & Information Retrieval",
          items: ["RAG Systems", "Document Intelligence", "Embeddings", "Semantic Search", "Vector Search", "Knowledge Retrieval"]
        },
        {
          name: "AI Agents & Analytics",
          items: ["AI Agents", "Agentic Workflows", "Tool Calling", "AI Orchestration", "AI Analytics", "Automated Insights"]
        }
      ]
    },
    {
      category: "Programming & Languages",
      subcategories: [
        {
          name: "Software Languages",
          items: ["Python", "JavaScript", "TypeScript"]
        },
        {
          name: "Industrial Automation Languages",
          items: ["Ladder Logic (LD)", "Function Block Diagram (FBD)", "Structured Text (ST)"]
        }
      ]
    },
    {
      category: "Industrial Automation",
      subcategories: [
        {
          name: "PLCs Known",
          items: ["Siemens", "Delta", "Allen Bradley", "ABB", "Omron", "Mitsubishi"]
        },
        {
          name: "Tools / Platforms",
          items: ["TIA Portal", "ISP Soft", "WPL Soft", "CX Programmer", "Control Builder Plus", "Gx Developer", "RS Logix 500 / 5000"]
        },
        {
          name: "Technologies & Protocols",
          items: ["PLC Programming", "Modbus", "Ethernet/IP", "Profibus", "Panel Wiring", "SCADA (WinCC, InTouch)"]
        },
        {
          name: "Core Engineering Skills",
          items: ["Siemens Tech", "Delta Tech", "Problem Solving", "System Design", "VFD Control", "Troubleshooting", "Commissioning", "Data Logging", "Wiring Diagram", "Sensors and Actuators", "PIDs"]
        }
      ]
    },
    {
      category: "Web, Cloud & Databases",
      subcategories: [
        {
          name: "Web Development & APIs",
          items: ["React", "Node.js", "REST APIs", "FastAPI", "Next.js", "NoSQL", "FPGA Development"]
        },
        {
          name: "Databases & Cloud Infrastructure",
          items: ["SQL", "MySQL", "AWS", "IoT Cloud Ingestion"]
        }
      ]
    }
  ],
  experience: [
    {
      id: "jtech-instruments",
      company: "JTECH INSTRUMENTS",
      role: "Trainee Engineer",
      location: "Chennai, India · On-site",
      period: "Dec 2025 – Apr 2026",
      isCurrentOrUpcoming: true,
      responsibilities: [
        "Working as a PLC & Instrumentation Intern, gaining practical exposure to industrial automation systems and control panel components.",
        "Assisted in PLC programming and ladder logic development for basic automation tasks.",
        "Handling industrial sensors and field instruments such as temperature and pressure transmitters.",
        "Supported calibration and troubleshooting of instrumentation systems to ensure smooth process operation."
      ],
      technologies: ["PLC Programming", "Ladder Logic", "Control Panels", "Temperature Transmitters", "Pressure Transmitters", "Calibration", "Troubleshooting"]
    },
    {
      id: "chennai-port-authority",
      company: "CHENNAI PORT AUTHORITY",
      role: "Vocational Trainee",
      location: "Chennai, India · On-site",
      period: "Jun 2024 - Jun 2024",
      isCurrentOrUpcoming: false,
      responsibilities: [
        "Completed In-plant training at Chennai Port Authority in Electronic Data Processing and Mechanical and Electrical Engineering divisions.",
        "Gained practical exposure to engineering operations, equipment maintenance, and data handling.",
        "Developed strong technical skills, professional discipline, and teamwork abilities.",
        "Enhanced understanding of real-world industrial processes and multidisciplinary engineering environments."
      ],
      technologies: ["Electronic Data Processing", "Electrical Engineering", "Mechanical Engineering", "Equipment Maintenance", "Data Handling", "Industrial Processes"]
    }
  ],
  education: {
    institution: "Jerusalem College of Engineering",
    degree: "B.E in Electronics and Communication",
    period: "June 2022 - June 2026",
    cgpa: "9.23 / 10.0",
    honors: [
      { title: "Topper-I 2023", year: "2023", detail: "3rd Semester Distinction | JCE" },
      { title: "Topper-II 2023", year: "2023", detail: "4th Semester Distinction | JCE" },
      { title: "Topper-II 2025", year: "2025", detail: "6th Semester Distinction | JCE" }
    ]
  },
  achievements: [
    {
      title: "Pre-Finalist — IIT PALS INNOWAH 2024",
      organization: "IIT PALS",
      year: "2024",
      type: "National Competition",
      description: "Pre-Finalist of IIT PALS INNOWAH 2024 for developing the 'Blockchain Based E-voting System' project.",
      badge: "Pre-Finalist"
    },
    {
      title: "Three Days Workshop of IIT PALS 2024 (THINK CREATE ENGINEER)",
      organization: "IIT PALS",
      year: "2024",
      type: "Technical Workshop",
      description: "Completed the intensive Three-Day Technical Workshop of IIT PALS 2024 (THINK CREATE ENGINEER) at IIT.",
      badge: "IIT Workshop"
    },
    {
      title: "Academic Excellence — Triple Semester Topper (CGPA 9.23/10.0)",
      organization: "Jerusalem College of Engineering (JCE)",
      year: "2022 - 2026",
      type: "Academic Honors",
      description: "Topper-I 2023 (3rd Sem), Topper-II 2023 (4th Sem), and Topper-II 2025 (6th Sem) with an overall CGPA of 9.23 / 10.0 in B.E Electronics and Communication.",
      badge: "CGPA 9.23 / 10.0"
    }
  ],
  certifications: [
    {
      title: "Certified Automation Engineer",
      issuer: "Technocrat Automation",
      skills: ["Industrial Automation", "PLC Logic", "Sensors & Actuators", "Instrumentation"]
    },
    {
      title: "Electronics and Automation",
      issuer: "JTech Instruments",
      skills: ["Industrial Automation", "PLC Logic", "Sensors & Actuators", "Instrumentation"]
    },
    {
      title: "React JS, Node JS, NoSQL, REST API, FPGA Development",
      issuer: "LinkedIn Learning",
      skills: ["React JS", "Node JS", "NoSQL", "REST API", "FPGA Development"]
    },
    {
      title: "Web Development Concepts",
      issuer: "Infosys",
      skills: ["Web Development Concepts", "HTTP/REST", "Frontend & Backend Basics"]
    },
    {
      title: "Hindi Language Certifications",
      issuer: "Dakshina Bharat Hindi Prachar Sabha",
      skills: ["Hindi Proficiency"],
      levels: "Parichay, Prathmic, Madhiyama, Rastrabaksha"
    }
  ],
  philosophy: [
    {
      number: "01",
      title: "Understand",
      subtitle: "First Principles Analysis",
      description: "Deep-dive into the actual engineering, physical constraints, or business problem before writing a single line of code or logic."
    },
    {
      number: "02",
      title: "Architect",
      subtitle: "Robust Systems Design",
      description: "Design clean, modular system architecture—from deterministic PLC state trees to scalable LLM agent orchestration DAGs."
    },
    {
      number: "03",
      title: "Build",
      subtitle: "Precision Engineering",
      description: "Develop, wire, code, integrate and rigorously test the solution across physical sensors, controllers, and software backends."
    },
    {
      number: "04",
      title: "Improve",
      subtitle: "Data-Driven Iteration",
      description: "Iterate continuously using telemetry, feedback loops, real-world field telemetry, and rigorous evaluation metrics."
    }
  ]
};
