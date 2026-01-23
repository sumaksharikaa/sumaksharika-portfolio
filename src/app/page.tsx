"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail, MapPin, ExternalLink, Download, BarChart3, Database, LineChart, Code2 } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-300 selection:bg-blue-500/30 relative overflow-hidden font-sans">
      {/* GLOBAL GRAPHICS: Floating Orbs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px] opacity-30" />
        <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] opacity-20" />
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold text-white tracking-tight cursor-pointer">
            Sumaksharika<span className="text-blue-500">.</span>
          </div>
          
          <div className="flex items-center gap-6">
             {/* Resume Button - Updated Link */}
             <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              <Download size={18} /> Resume
            </a>

            {/* Hire Me Button */}
            <a
              href={`mailto:${portfolioData.personalInfo.email}`}
              className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] active:scale-95"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1.5 text-sm font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">
              Available for new opportunities
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight leading-[1.1]">
              Data <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400">
                Storyteller.
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
              Transforming complex datasets into clear, actionable business strategies. 
              Specialized in <span className="text-white">Healthcare</span> & <span className="text-white">Finance</span> analytics.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
              >
                View Work
              </a>
              <a
                href={portfolioData.personalInfo.linkedin}
                target="_blank"
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors text-white"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Animated Hero Graphic (Charts & Data) */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="relative hidden lg:block h-[500px] w-full"
          >
            {/* Main Dashboard Card */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-white/10 shadow-2xl overflow-hidden p-6 flex flex-col">
               {/* Header */}
               <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/50" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                   <div className="w-3 h-3 rounded-full bg-green-500/50" />
                 </div>
                 <div className="text-xs text-gray-500 uppercase tracking-widest">Live Analytics</div>
               </div>

               {/* Animated Bar Chart */}
               <div className="flex items-end justify-between h-48 px-2 gap-2 mb-8">
                 {[40, 70, 50, 90, 60, 80, 45, 75].map((height, i) => (
                   <motion.div
                     key={i}
                     initial={{ height: 0 }}
                     animate={{ height: `${height}%` }}
                     transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                     className={`w-full rounded-t-lg opacity-80 ${i % 2 === 0 ? 'bg-blue-500' : 'bg-emerald-500'}`}
                   />
                 ))}
               </div>

               {/* Metrics Grid */}
               <div className="grid grid-cols-2 gap-4 mt-auto">
                 <div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                   <div className="text-gray-400 text-xs uppercase tracking-wider mb-2">Efficiency</div>
                   <div className="text-3xl font-bold text-white flex items-baseline gap-1">
                     24.8<span className="text-sm text-emerald-400 font-normal">%</span>
                   </div>
                 </div>
                 <div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                   <div className="text-gray-400 text-xs uppercase tracking-wider mb-2">Risk Reduction</div>
                   <div className="text-3xl font-bold text-emerald-400 flex items-baseline gap-1">
                     12.5<span className="text-sm text-white/50 font-normal">%</span>
                   </div>
                 </div>
               </div>
            </div>

            {/* Floating Overlay Card 1 */}
            <motion.div 
               animate={{ y: [-10, 10, -10] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -right-8 top-20 bg-[#1a1a1a] p-4 rounded-2xl border border-white/10 shadow-xl"
            >
               <div className="flex items-center gap-3">
                 <div className="p-2 bg-purple-500/20 rounded-lg">
                   <Database size={20} className="text-purple-400" />
                 </div>
                 <div>
                   <div className="text-xs text-gray-400">Data Processed</div>
                   <div className="text-sm font-bold text-white">3.2 Million</div>
                 </div>
               </div>
            </motion.div>

            {/* Floating Overlay Card 2 */}
            <motion.div 
               animate={{ y: [10, -10, 10] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -left-8 bottom-32 bg-[#1a1a1a] p-4 rounded-2xl border border-white/10 shadow-xl"
            >
               <div className="flex items-center gap-3">
                 <div className="p-2 bg-blue-500/20 rounded-lg">
                   <Code2 size={20} className="text-blue-400" />
                 </div>
                 <div>
                   <div className="text-xs text-gray-400">Pipelines</div>
                   <div className="text-sm font-bold text-white">99.9% Uptime</div>
                 </div>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section (New) */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
           <motion.div {...fadeInUp} className="mb-20">
              <h2 className="text-4xl font-bold text-white mb-6">What I Do</h2>
              <div className="h-1 w-20 bg-blue-500 rounded-full" />
           </motion.div>

           <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Data Analysis", icon: <BarChart3 className="text-blue-400" size={32} />, desc: "Uncovering trends and patterns to drive strategic decisions." },
                { title: "Data Engineering", icon: <Database className="text-emerald-400" size={32} />, desc: "Building robust ETL pipelines and Snowflake warehouses." },
                { title: "BI Dashboarding", icon: <LineChart className="text-purple-400" size={32} />, desc: "Creating interactive Power BI & Tableau visuals for stakeholders." }
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-2xl transition-all group"
                >
                  <div className="mb-6 p-4 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Featured Projects (New Style) */}
      <section id="projects" className="py-32 px-6 bg-[#0c0c0c] relative">
         <div className="absolute inset-0 bg-blue-900/5 clip-path-slant" />
         <div className="max-w-7xl mx-auto relative z-10">
           <motion.div {...fadeInUp} className="mb-20">
              <h2 className="text-4xl font-bold text-white mb-6">Featured Work</h2>
              <div className="h-1 w-20 bg-emerald-500 rounded-full" />
           </motion.div>

           <div className="grid md:grid-cols-2 gap-10">
              {/* Project 1 */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="group relative bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/50 transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-blue-900/20 to-black p-8 flex items-end">
                   <Code2 size={48} className="text-blue-500/50 group-hover:text-blue-400 transition-colors" />
                </div>
                <div className="p-8">
                   <h3 className="text-2xl font-bold text-white mb-2">Credit Risk Analytics</h3>
                   <p className="text-emerald-400 text-sm mb-4">Python • Snowflake • ETL</p>
                   <p className="text-gray-400 mb-6">Built a risk detection model processing 3M+ transactions, identifying $1.2M in at-risk revenue.</p>
                   <div className="flex gap-2">
                      <span className="px-3 py-1 bg-white/5 rounded-md text-xs text-gray-300">Data Modeling</span>
                      <span className="px-3 py-1 bg-white/5 rounded-md text-xs text-gray-300">Fraud Detection</span>
                   </div>
                </div>
              </motion.div>

              {/* Project 2 */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="group relative bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-emerald-500/50 transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-emerald-900/20 to-black p-8 flex items-end">
                   <BarChart3 size={48} className="text-emerald-500/50 group-hover:text-emerald-400 transition-colors" />
                </div>
                <div className="p-8">
                   <h3 className="text-2xl font-bold text-white mb-2">Student Retention Engine</h3>
                   <p className="text-emerald-400 text-sm mb-4">Docker • Scikit-Learn • AI</p>
                   <p className="text-gray-400 mb-6">Deployed a churn prediction microservice with 89% accuracy, saving $2M+ in tuition revenue.</p>
                   <div className="flex gap-2">
                      <span className="px-3 py-1 bg-white/5 rounded-md text-xs text-gray-300">Predictive AI</span>
                      <span className="px-3 py-1 bg-white/5 rounded-md text-xs text-gray-300">Python</span>
                   </div>
                </div>
              </motion.div>
           </div>
         </div>
      </section>

      {/* Experience Section (Restyled) */}
      <section className="py-32 px-6 max-w-5xl mx-auto">
        <motion.h2 {...fadeInUp} className="text-4xl font-bold text-white mb-16 text-center">
          Professional Journey
        </motion.h2>

        <div className="space-y-12 relative before:absolute before:left-[19px] md:before:left-1/2 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-blue-500 before:via-purple-500 before:to-emerald-500 before:opacity-20">
          {portfolioData.experience.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
               {/* Timeline Dot with Glow */}
               <div className="absolute left-0 md:left-1/2 w-10 h-10 -translate-x-1/2 flex items-center justify-center z-10">
                 <div className="w-4 h-4 bg-[#0a0a0a] border-2 border-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
               </div>

               {/* Content Card */}
               <div className="md:w-1/2 pl-12 md:pl-0 md:px-12">
                  <div className={`p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-blue-500/30 transition-all group ${idx % 2 === 0 ? 'md:text-left' : 'md:text-left'}`}>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                        <div>
                           <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{job.role}</h3>
                           <div className="text-blue-400 font-medium">{job.company}</div>
                        </div>
                        <div className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 font-mono border border-white/5">
                           {job.period}
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                       <MapPin size={14} /> {job.location}
                    </div>

                    <ul className="space-y-3 text-gray-400 text-sm">
                      {job.achievements.slice(0, 3).map((bullet, bIdx) => (
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

      {/* Skills & Education Grid */}
      <section className="py-32 px-6 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          
          {/* Skills */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-10">Technical Arsenal</h2>
            <div className="grid grid-cols-2 gap-4">
               {portfolioData.skills.slice(0, 4).map((grp, i) => (
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

          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-10">Education</h2>
            <div className="space-y-6">
              {portfolioData.education.map((edu, idx) => (
                <div key={idx} className="p-6 bg-black/40 border border-white/10 rounded-xl flex items-start justify-between">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{edu.institution}</h3>
                    <p className="text-blue-400">{edu.degree}</p>
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap bg-white/5 px-2 py-1 rounded">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <section className="py-32 px-6 text-center">
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="max-w-3xl mx-auto bg-gradient-to-br from-blue-900/20 to-emerald-900/20 p-12 rounded-3xl border border-white/10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to transform your data?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Currently available for full-time Data Analyst roles.
          </p>
          <a
            href={`mailto:${portfolioData.personalInfo.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
          >
            <Mail size={20} /> Get in Touch
          </a>
        </motion.div>
        
        <footer className="mt-20 text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Sumaksharika Nainavarapu. All rights reserved.</p>
        </footer>
      </section>
    </main>
  );
}