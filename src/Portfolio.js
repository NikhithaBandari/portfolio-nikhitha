import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaDatabase, FaProjectDiagram, FaCode } from "react-icons/fa";
import { SiFlask, SiSqlite } from "react-icons/si";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [email] = useState("nikhithabandari2002@gmail.com");

  return (
    <main className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-blue-100 to-purple-200">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nikhitha Bandari
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Data Analytics Engineer | Power BI | Python | SQL
        </motion.p>
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a href="#projects" className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">View Projects</a>
          <a
            href="/Nikhitha_Bandari_Resume.pdf"
            download
            className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition"
          >
            Download Resume
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section id="about" className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            I’m a Data Analytics Engineer with a passion for turning data into impactful insights. Currently at Schlumberger, I design scalable dashboards, automate data flows, and build efficient ETL pipelines. I enjoy solving problems with data and building tools that empower decision-making.
          </p>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section id="experience" className="py-16 bg-gray-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">Data Analytics Engineer @ SLB - Schlumberger</h3>
            <p className="text-sm text-gray-600">Jan 2024 - Present</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Built Power BI dashboards reducing decision latency by 30%.</li>
              <li>Automated workflows using Power Automate and improved ETL processes.</li>
              <li>Collaborated cross-functionally to ensure data governance and scalability.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Goldman Sachs Virtual Experience</h3>
            <p className="text-sm text-gray-600">June 2023</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Simulated large-scale system governance and security tasks.</li>
              <li>Gained exposure to collaborative software development at scale.</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section id="projects" className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.div className="border rounded-lg p-4 shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.03 }}>
              <h3 className="text-xl font-semibold">NickMart: Grocery Store App</h3>
              <p className="text-sm mb-2">Flask, SQLite, Bootstrap</p>
              <p>Built a scalable multi-user grocery store platform with CRUD APIs and dynamic pricing algorithms.</p>
              <a href="https://nickmart.onrender.com" target="_blank" className="text-blue-600 hover:underline">Live Demo</a>
              <span className="mx-2">|</span>
              <a href="https://github.com/NikhithaBandari/GroceryStore" target="_blank" className="text-blue-600 hover:underline">GitHub</a>
            </motion.div>

            <motion.div className="border rounded-lg p-4 shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.03 }}>
              <h3 className="text-xl font-semibold">Minion Talk Translator</h3>
              <p className="text-sm mb-2">HTML, CSS, JavaScript</p>
              <p>Fun translator web app converting English sentences into Minionese using external APIs.</p>
              <a href="https://talkativeminion.netlify.app/" target="_blank" className="text-blue-600 hover:underline">Live Demo</a>
              <span className="mx-2">|</span>
              <a href="https://github.com/NikhithaBandari/Banana-talk" target="_blank" className="text-blue-600 hover:underline">GitHub</a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section id="skills" className="py-16 bg-gray-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: <FaPython />, label: "Python" },
              { icon: <FaProjectDiagram />, label: "Power BI" },
              { icon: <FaProjectDiagram />, label: "Power Automate" },
              { icon: <SiFlask />, label: "Flask" },
              { icon: <FaCode />, label: "DAX" },
              { icon: <FaHtml5 />, label: "HTML" },
              { icon: <FaCss3Alt />, label: "CSS" },
              { icon: <FaJsSquare />, label: "JavaScript" },
              { icon: <FaGitAlt />, label: "Git & GitHub" },
              { icon: <SiSqlite />, label: "SQL / SQLite" },
              { icon: <FaDatabase />, label: "Dataiku" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="p-4 bg-white rounded shadow hover:shadow-lg transition"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-3xl text-purple-600 mb-2 mx-auto">{skill.icon}</div>
                <p className="text-lg font-medium">{skill.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section id="contact" className="py-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>
          <p className="mb-6">Feel free to reach out via email or connect with me on LinkedIn or GitHub.</p>
          <div className="flex justify-center gap-6 text-2xl">
            <a href="mailto:nikhithabandari2002@gmail.com" aria-label="Email">
              <FaEnvelope className="hover:text-purple-600" />
            </a>
            <a href="https://github.com/NikhithaBandari" target="_blank" aria-label="GitHub">
              <FaGithub className="hover:text-purple-600" />
            </a>
            <a href="https://www.linkedin.com/in/nikhitha-bandari" target="_blank" aria-label="LinkedIn">
              <FaLinkedin className="hover:text-purple-600" />
            </a>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
