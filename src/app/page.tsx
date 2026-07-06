"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, ExternalLink, Download, BarChart3, TrendingDown, Brain, Activity, DollarSign, MessageSquare, Pill, Database, ShieldCheck, HeartPulse } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const projects = [
    {
      title: "Specialty Pharmacy Claims Analytics",
      subtitle: "PostgreSQL • Python ETL • Streamlit • Plotly",
      description: "End-to-end SP claims pipeline on 2,000 specialty pharmacy claims across 10 drugs and 7 payers. Full PostgreSQL schema with ER model, PL/pgSQL audit triggers, 11 KPI SQL queries, and 5-tab Streamlit executive dashboard.",
      metrics: ["2,000 SP claims", "11 KPI queries", "Audit triggers"],
      tags: ["Pharmacy", "PostgreSQL", "ETL", "Data Governance"],
      github: "https://github.com/sumaksharikaa/sp-claims-analytics",
      demo: "",
      color: "blue",
      Icon: Pill,
    },
    {
      title: "Drug Utilization & Formulary Analytics",
      subtitle: "MySQL • Python ETL • Streamlit • Prior Auth",
      description: "Formulary tier management and drug utilization analytics on 5,000 Rx across 20 drugs. MySQL schema with stored procedure, 2,047 prior auth requests analyzed, generic substitution opportunity engine estimating plan savings.",
      metrics: ["5,000 prescriptions", "2,047 PA requests", "MySQL + Stored Proc"],
      tags: ["Formulary", "MySQL", "Prior Auth", "Drug Utilization"],
      github: "https://github.com/sumaksharikaa/drug-utilization-analytics",
      demo: "",
      color: "emerald",
      Icon: Database,
    },
    {
      title: "Healthcare Data Quality & Governance",
      subtitle: "PostgreSQL • Rules Engine • Audit Trail • Streamlit",
      description: "Enterprise DQ pipeline with 21 configurable validation rules across 4 clinical datasets. Severity-weighted scoring, column-level data profiling, reconciliation reporting, downstream impact registry tracking 7 reports, and full audit log.",
      metrics: ["21 DQ rules", "998 issues caught", "7 reports tracked"],
      tags: ["Data Governance", "DQ Rules Engine", "Audit Trail", "Healthcare"],
      github: "https://github.com/sumaksharikaa/healthcare-dq-governance",
      demo: "",
      color: "purple",
      Icon: ShieldCheck,
    },
    {
      title: "Pharmacy Readmission Risk Predictor",
      subtitle: "XGBoost • scikit-learn • MLflow • CCI • Streamlit",
      description: "30-day readmission risk prediction on 2,500 patients using Charlson Comorbidity Index (CCI) scoring, pharmacy features, and lab values. Logistic Regression achieved ROC-AUC of 0.8432. Interactive CCI calculator for real-time risk scoring.",
      metrics: ["ROC-AUC: 0.8432", "2,500 patients", "CCI + XGBoost"],
      tags: ["ML", "Readmission Risk", "CCI", "MLflow", "XGBoost"],
      github: "https://github.com/sumaksharikaa/pharmacy-readmission-risk",
      demo: "https://pharmacy-readmission-risk.streamlit.app/",
      color: "pink",
      Icon: HeartPulse,
    },
    {
      title: "Pharmacy Supply Chain & Prescription Analytics",
      subtitle: "PostgreSQL • Oracle SQL • Python ETL • Streamlit",
      description: "End-to-end pharmacy supply chain platform covering drug inventory management, supplier performance, prescription fill rates, stockout analysis, and automated reorder alerts.",
      metrics: ["8,000 prescriptions", "92% fill rate", "Oracle-compatible SQL"],
      tags: ["Supply Chain", "Inventory", "PostgreSQL", "Oracle SQL"],
      github: "https://github.com/sumaksharikaa/pharmacy-supply-chain",
      demo: "https://pharmacy-supply-chain.streamlit.app/",
      color: "orange",
      Icon: TrendingDown,
    },
    {
      title: "Financial Risk Dashboard",
      subtitle: "PostgreSQL • Python • XGBoost • Streamlit",
      description: "End-to-end credit risk analytics pipeline on 2.26M Lending Club loans ($34B portfolio). XGBoost default prediction model achieving AUC-ROC of 0.73. Interactive Streamlit dashboard with real-time filters deployed publicly.",
      metrics: ["AUC-ROC: 0.73", "$34B portfolio", "2.26M loans"],
      tags: ["Credit Risk", "SQL", "XGBoost", "Streamlit"],
      github: "https://github.com/sumaksharikaa/financial-risk-dashboard",
      demo: "https://financial-risk-dashboard-ovjmqv7edtxfdeczx8zctv.streamlit.app",
      color: "blue",
      Icon: DollarSign,
    },
    {
      title: "Earnings Call NLP Analyzer",
      subtitle: "FinBERT • HuggingFace • Python • Streamlit",
      description: "FinBERT sentiment analysis on 514 earnings call transcripts from 30 S&P 500 companies across 8 sectors. Detected COVID-19 impact (Disney Q3 2020 negative sentiment) and identified risk language patterns.",
      metrics: ["514 transcripts", "30 companies", "8 sectors"],
      tags: ["NLP", "FinBERT", "Sentiment Analysis", "Finance"],
      github: "https://github.com/sumaksharikaa/earnings-call-nlp",
      demo: "https://earnings-call-nlp-hpvrwqwv6rrtxknzwt2seb.streamlit.app",
      color: "emerald",
      Icon: MessageSquare,
    },
    {
      title: "Retail Demand Forecasting",
      subtitle: "Python • ARIMA • Prophet • XGBoost • MLflow",
      description: "End-to-end demand forecasting pipeline on real Walmart weekly sales data. XGBoost achieved 2.61% MAPE — 74% below the industry benchmark of 5–10%. Includes promotional uplift modeling and MLflow experiment tracking.",
      metrics: ["MAPE: 2.61%", "MAE: $39,864", "143 weeks data"],
      tags: ["Time-Series", "Forecasting", "Feature Engineering"],
      github: "https://github.com/sumaksharikaa/retail-demand-forecasting",
      demo: "",
      color: "purple",
      Icon: TrendingDown,
    },
    {
      title: "Customer Churn Prediction",
      subtitle: "Python • Scikit-learn • XGBoost • Random Forest • MLflow",
      description: "ML classification project predicting telecom customer churn on 7,043 real customers. Logistic Regression achieved best ROC-AUC of 84.60% with recall of 78.61% — correctly identifying 4 out of 5 at-risk customers.",
      metrics: ["ROC-AUC: 84.60%", "Recall: 78.61%", "7,043 customers"],
      tags: ["Classification", "Customer Analytics", "Feature Engineering"],
      github: "https://github.com/sumaksharikaa/customer-churn-prediction",
      demo: "",
      color: "pink",
      Icon: BarChart3,
    },
    {
      title: "U.S. Maternal Mortality Analysis",
      subtitle: "Python • Tableau • Excel • CDC Data • PRAMS",
      description: "M.S. capstone project analyzing the impact of COVID-19 on U.S. maternal mortality rates (2017–2023). MMR rose 51% during the pandemic (25.91 → 39.26). Adj. R²=0.941 between mortality ratio and year.",
      metrics: ["MMR +51% (COVID)", "Adj. R² = 0.941", "2017–2023 data"],
      tags: ["Healthcare Analytics", "EDA", "Tableau", "CDC Data"],
      github: "https://github.com/sumaksharikaa/maternal-mortality-analysis",
      demo: "",
      color: "pink",
      Icon: Activity,
    },
    {
      title: "SQL Analytics & dbt Project",
      subtitle: "SQL • dbt • Snowflake • Data Modeling",
      description: "End-to-end analytics engineering project using dbt + SQL to build modular data models, tests, and documentation on a real business dataset. Targeting banking and retail analytics use cases.",
      metrics: ["Coming Soon", "In Progress"],
      tags: ["dbt", "SQL", "Snowflake", "Data Modeling"],
      github: "",
      demo: "",
      color: "purple",
      Icon: Brain,
      comingSoon: true,
    },
  ];

  const experience = [
    {
      role: "Data Scientist / Data Analyst",
      company: "HSBC",
      period: "10/2024 – Present",
      location: "Remote, USA",
      achievements: [
        "Built time-series and ML forecasting models to predict customer behavioral trends, supporting demand planning and business forecasting use cases.",
        "Improved data accuracy by 22% through automated SQL + Python validation pipelines on Snowflake enterprise data warehouses.",
        "Designed Tableau self-service dashboards driving a 35% increase in digital banking adoption and 14% improvement in customer satisfaction.",
        "Applied feature engineering and model validation contributing to 20% improvement in customer follow-up efficiency.",
      ],
    },
    {
      role: "Data Analyst / Data Scientist",
      company: "TCS",
      period: "01/2021 – 08/2023",
      location: "Andhra Pradesh, India",
      achievements: [
        "Built predictive models for clinical risk stratification contributing to a 22% reduction in 30-day readmissions.",
        "Reduced missing/inconsistent records by 18% through automated EHR data validation and reconciliation workflows.",
        "Designed Power BI dashboards and automated pipelines enabling near real-time insights for executive stakeholders.",
      ],
    },
  ];

  const skills = [
    { category: "Languages & Querying", items: ["Python (Pandas, NumPy)", "SQL", "Oracle/PL/SQL", "PostgreSQL", "MySQL", "Snowflake"] },
    { category: "BI & Reporting", items: ["Power BI", "Tableau", "Streamlit", "SQL Developer", "Qlik (familiar)", "KPI Dashboards"] },
    { category: "Analytics & ML", items: ["XGBoost", "scikit-learn", "MLflow", "FinBERT", "ARIMA", "Prophet", "Risk Stratification"] },
    { category: "Data Engineering", items: ["ETL Pipelines", "ER Modeling", "Data Governance", "Audit Trail", "Data Quality", "Reconciliation"] },
    { category: "Healthcare & Pharmacy", items: ["Specialty Pharmacy", "Drug Lifecycle", "Charlson Comorbidity Index", "EHR Analytics", "Prior Auth", "Formulary Management"] },
    { category: "Governance & Tools", items: ["Data Governance", "Metadata Management", "Confluence", "Jira", "GitHub", "MLflow"] },
  ];

  const education = [
    { institution: "University of North Carolina at Charlotte", degree: "M.S. Health Informatics and Analytics", period: "08/2023 – 05/2025" },
    { institution: "Koneru Lakshmaiah University", degree: "Bachelor of Pharmacy", period: "08/2018 – 05/2022" },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-300 selection:bg-blue-500/30 relative overflow-hidden font-sans">
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px] opacity-30" />
        <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] opacity-20" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold text-white tracking-tight cursor-pointer">
            Sumaksharika<span className="text-blue-500">.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
              <Download size={18} /> Resume
            </a>
            <a href="mailto:sumaksharika.n@gmail.com" className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] active:scale-95">
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center pt-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
            <div className="inline-block px-4 py-1.5 text-sm font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">
              Available for new opportunities · Open to USA
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight leading-[1.1]">
              Data <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400">Analyst.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
              Building <span className="text-white">pharmacy analytics pipelines</span>,{" "}
              <span className="text-white">data governance frameworks</span>, and BI dashboards that drive measurable outcomes across Healthcare & Financial Services.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
                <div className="text-2xl font-bold text-blue-400">0.84</div>
                <div className="text-xs text-gray-500 mt-1">ROC-AUC</div>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
                <div className="text-2xl font-bold text-emerald-400">8</div>
                <div className="text-xs text-gray-500 mt-1">Live Projects</div>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
                <div className="text-2xl font-bold text-purple-400">4+</div>
                <div className="text-xs text-gray-500 mt-1">Yrs Experience</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#projects" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">View Projects</a>
              <a href="https://linkedin.com/in/sumaksharika" target="_blank" className="px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors text-white flex items-center gap-2"><Linkedin size={16} /> LinkedIn</a>
              <a href="https://github.com/sumaksharikaa" target="_blank" className="px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors text-white flex items-center gap-2"><Github size={16} /> GitHub</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative hidden lg:block">
            <div className="bg-[#0d1117] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#161b22]">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-xs text-gray-500 font-mono">results.py</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-1">
                <div><span className="text-blue-400">$</span> <span className="text-white">python sp_claims_etl.py</span></div>
                <div className="text-gray-500">Loading 2,000 SP claims · PostgreSQL...</div>
                <div><span className="text-emerald-400">✓ Approval Rate:</span> <span className="text-yellow-400">66.5%</span> <span className="text-gray-500">· Audit triggers active</span></div>
                <div className="pt-2"><span className="text-blue-400">$</span> <span className="text-white">python dq_engine.py</span></div>
                <div className="text-gray-500">Running 21 DQ rules · 4 tables...</div>
                <div><span className="text-emerald-400">✓ Issues Found:</span> <span className="text-yellow-400">998</span> <span className="text-gray-500">· 7 reports affected</span></div>
                <div className="pt-2"><span className="text-blue-400">$</span> <span className="text-white">python train_models.py</span></div>
                <div className="text-gray-500">CCI scoring · XGBoost · MLflow...</div>
                <div><span className="text-emerald-400">✓ ROC-AUC:</span> <span className="text-yellow-400">0.8432</span> <span className="text-gray-500">· 2,500 patients</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-16 text-center">
            <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3">// what I&apos;ve built</p>
            <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className={"group relative bg-[#111] rounded-2xl overflow-hidden border transition-all flex flex-col " + (
                  project.comingSoon ? "border-white/5 opacity-70" :
                  project.color === "blue" ? "border-white/5 hover:border-blue-500/50" :
                  project.color === "emerald" ? "border-white/5 hover:border-emerald-500/50" :
                  project.color === "pink" ? "border-white/5 hover:border-pink-500/50" :
                  "border-white/5 hover:border-purple-500/50"
                )}
              >
                <div className={"h-36 p-8 flex items-end bg-gradient-to-br " + (
                  project.color === "blue" ? "from-blue-900/20 to-black" :
                  project.color === "emerald" ? "from-emerald-900/20 to-black" :
                  project.color === "pink" ? "from-pink-900/20 to-black" :
                  "from-purple-900/20 to-black"
                )}>
                  <project.Icon size={40} className={(
                    project.color === "blue" ? "text-blue-500/50 group-hover:text-blue-400" :
                    project.color === "emerald" ? "text-emerald-500/50 group-hover:text-emerald-400" :
                    project.color === "pink" ? "text-pink-500/50 group-hover:text-pink-400" :
                    "text-purple-500/50 group-hover:text-purple-400"
                  ) + " transition-colors"} />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className={"text-sm mb-3 " + (
                    project.color === "blue" ? "text-blue-400" :
                    project.color === "emerald" ? "text-emerald-400" :
                    project.color === "pink" ? "text-pink-400" : "text-purple-400"
                  )}>{project.subtitle}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.metrics.map((m, i) => (
                      <span key={i} className={"text-xs px-2 py-1 rounded font-mono " + (
                        project.color === "blue" ? "bg-blue-500/10 text-blue-300" :
                        project.color === "emerald" ? "bg-emerald-500/10 text-emerald-300" :
                        project.color === "pink" ? "bg-pink-500/10 text-pink-300" :
                        "bg-purple-500/10 text-purple-300"
                      )}>{m}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300">{tag}</span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github ? (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                        <Github size={16} /> GitHub <ExternalLink size={12} />
                      </a>
                    ) : (
                      <span className="text-sm text-gray-600 italic">In progress...</span>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
                        Live Demo <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 max-w-5xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16 text-center">
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3">// where I&apos;ve worked</p>
          <h2 className="text-4xl font-bold text-white">Professional Journey</h2>
        </motion.div>
        <div className="space-y-12 relative before:absolute before:left-[19px] md:before:left-1/2 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-blue-500 before:via-purple-500 before:to-emerald-500 before:opacity-20">
          {experience.map((job, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={"relative flex flex-col md:flex-row gap-8 " + (idx % 2 === 0 ? "md:flex-row-reverse" : "")}>
              <div className="absolute left-0 md:left-1/2 w-10 h-10 -translate-x-1/2 flex items-center justify-center z-10">
                <div className="w-4 h-4 bg-[#0a0a0a] border-2 border-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
              </div>
              <div className="md:w-1/2 pl-12 md:pl-0 md:px-12">
                <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-blue-500/30 transition-all group">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{job.role}</h3>
                      <div className="text-blue-400 font-medium">{job.company}</div>
                    </div>
                    <div className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 font-mono border border-white/5 whitespace-nowrap">{job.period}</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-6"><MapPin size={14} /> {job.location}</div>
                  <ul className="space-y-3 text-gray-400 text-sm">
                    {job.achievements.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500/50 rounded-full flex-shrink-0" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-10">Technical Arsenal</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((grp, i) => (
                <div key={i} className="p-4 bg-black/40 border border-white/10 rounded-xl">
                  <h3 className="text-white font-semibold mb-3">{grp.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {grp.items.map((item, j) => (
                      <span key={j} className="text-xs px-2 py-1 bg-blue-500/10 text-blue-300 rounded">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-10">Education</h2>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="p-6 bg-black/40 border border-white/10 rounded-xl flex items-start justify-between">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{edu.institution}</h3>
                    <p className="text-blue-400">{edu.degree}</p>
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap bg-white/5 px-2 py-1 rounded">{edu.period}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-white font-semibold mb-4">Certifications</h3>
              <div className="space-y-3">
                {["Tableau Desktop Specialist", "DataCamp Data Analyst Track", "dbt Fundamentals (in progress)"].map((cert, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 bg-blue-500/50 rounded-full flex-shrink-0" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="max-w-3xl mx-auto bg-gradient-to-br from-blue-900/20 to-emerald-900/20 p-12 rounded-3xl border border-white/10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let&apos;s build something together.</h2>
          <p className="text-xl text-gray-400 mb-10">Actively targeting Senior Data Analyst roles across the United States — open to Healthcare, Pharma, and Financial Services.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:sumaksharika.n@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"><Mail size={20} /> Get in Touch</a>
            <a href="https://github.com/sumaksharikaa" target="_blank" className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors border border-white/10"><Github size={20} /> GitHub</a>
            <a href="https://linkedin.com/in/sumaksharika" target="_blank" className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors"><Linkedin size={20} /> LinkedIn</a>
          </div>
        </motion.div>
        <footer className="mt-20 text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Sumaksharika Nainavarapu. All rights reserved.</p>
        </footer>
      </section>
    </main>
  );
}
