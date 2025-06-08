import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Resume() {
  return (
    <div className="min-h-screen bg-white">
      <div id="resume-content" className="max-w-[850px] mx-auto p-8 print:p-6 font-sans">
        {/* Header Section */}
        <header className="mb-8 border-b border-gray-200 pb-4">
          <h1 className="text-3xl font-bold tracking-tight mb-1">DHRUVIL SHAH</h1>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm mt-2">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Ahmedabad</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <a href="mailto:dhruvilshah884@gmail.com" className="hover:underline">
                dhruvilshah884@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>966278694</span>
            </div>
            <div className="flex items-center gap-1">
              <Linkedin className="h-4 w-4" />
              <a href="https://linkedin.com/in/dhruvil-shah-3415a2259" className="hover:underline">
                linkedin.com/in/dhruvil-shah-3415a2259
              </a>
            </div>
            <div className="flex items-center gap-1">
              <Github className="h-4 w-4" />
              <a href="https://github.com/dhruvilshah884" className="hover:underline">
                github.com/dhruvilshah884
              </a>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">
            Professional Summary
          </h2>
          <p className="text-sm leading-relaxed">
            Full Stack Developer with 2+ years of experience building scalable web applications. Specialized in React,
            Next.js, Node.js, and database technologies including MongoDB, MySQL, and PostgreSQL. Demonstrated success
            in developing enterprise solutions including ERP systems, booking platforms, and custom database engines.
            Committed to writing clean, maintainable code and delivering intuitive user experiences that solve real
            business problems.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="mb-2">
                <h3 className="font-semibold">Frontend Development</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  {["React.js", "Next.js", "Redux", "HTML5", "CSS3", "JavaScript", "jQuery"].map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-gray-100 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-2">
                <h3 className="font-semibold">Backend Development</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  {["Node.js", "Express.js", "REST API Design", "API Documentation"].map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-gray-100 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="mb-2">
                <h3 className="font-semibold">Database Technologies</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  {["MongoDB", "MySQL", "PostgreSQL", "SQLite"].map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-gray-100 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-2">
                <h3 className="font-semibold">Tools & Methodologies</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  {["Git", "GitHub", "Agile", "Responsive Design"].map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-gray-100 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">
            Work Experience
          </h2>

          <div className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold">Full Stack Developer</h3>
              <div className="text-sm">Oct 2024 - Present</div>
            </div>
            <div className="text-sm font-medium mb-2">Quickint Solutions - Ahmedabad</div>
            <ul className="list-disc list-outside ml-5 text-sm space-y-1">
              <li>Lead development of full-stack applications using Next.js, Node.js, PostgreSQL, and MongoDB</li>
              <li>Developed and deployed School ERP, Gate Pass, and Quotation Management platforms</li>
              <li>Designed robust API architectures and database schemas for dynamic business requirements</li>
              <li>Implemented responsive UI components with modern JavaScript frameworks</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold">MERN Stack Developer</h3>
              <div className="text-sm">Oct 2023 - Oct 2024</div>
            </div>
            <div className="text-sm font-medium mb-2">Maxgen Technology - Ahmedabad</div>
            <ul className="list-disc list-outside ml-5 text-sm space-y-1">
              <li>Built responsive UI components using React.js integrated with REST APIs</li>
              <li>Developed internal tools and dashboards that improved productivity by 30%</li>
              <li>Maintained MongoDB schemas and optimized queries for performance</li>
              <li>Collaborated with UX designers to implement intuitive user interfaces</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold">Backend Developer Intern</h3>
              <div className="text-sm">Apr 2021 - Dec 2021</div>
            </div>
            <div className="text-sm font-medium mb-2">Aakash Technolabs - Ahmedabad</div>
            <ul className="list-disc list-outside ml-5 text-sm space-y-1">
              <li>Developed and maintained RESTful APIs using Node.js and Express</li>
              <li>Enhanced reliability and maintainability of backend services</li>
              <li>Assisted in database design and implementation for web applications</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">
            Key Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div className="border border-gray-100 p-3 rounded-md shadow-sm">
              <h3 className="font-bold text-sm">School ERP System</h3>
              <p className="text-xs mt-1 mb-2">Next.js, Node.js, PostgreSQL</p>
              <p className="text-xs">
                Comprehensive ERP solution for educational institutions managing attendance, exams, fees, and student
                profiles with role-based access control.
              </p>
            </div>

            <div className="border border-gray-100 p-3 rounded-md shadow-sm">
              <h3 className="font-bold text-sm">Dozo System</h3>
              <p className="text-xs mt-1 mb-2">MongoDB, Node.js, React.js</p>
              <p className="text-xs">
                Service booking and management platform connecting vendors and customers with real-time availability
                tracking and payment processing.
              </p>
            </div>

            <div className="border border-gray-100 p-3 rounded-md shadow-sm">
              <h3 className="font-bold text-sm">Gate-Pass System</h3>
              <p className="text-xs mt-1 mb-2">Express.js, MySQL</p>
              <p className="text-xs">
                Security solution tracking and verifying entries/exits from physical locations with real-time dashboards
                and automated notifications.
              </p>
            </div>

            <div className="border border-gray-100 p-3 rounded-md shadow-sm">
              <h3 className="font-bold text-sm">Own_Database Engine</h3>
              <p className="text-xs mt-1 mb-2">Node.js, File-based Storage</p>
              <p className="text-xs">
                Custom-built database management system for educational purposes implementing basic CRUD operations and
                query functionality.
              </p>
            </div>

            <div className="border border-gray-100 p-3 rounded-md shadow-sm">
              <h3 className="font-bold text-sm">Quotation Management System</h3>
              <p className="text-xs mt-1 mb-2">Next.js, MongoDB, REST APIs</p>
              <p className="text-xs">
                Centralized platform for quote creation, approval workflows, and document generation with role-based
                permissions.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-lg font-bold uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">Education</h2>

          <div className="mb-3">
            <div className="flex justify-between items-start">
              <h3 className="font-bold">B.Tech in Computer Engineering</h3>
              <div className="text-sm">Jan 2022 - Present</div>
            </div>
            <div className="text-sm">Silver Oak University</div>
            <div className="text-xs italic">Specialization: Error Analysis</div>
          </div>

          <div>
            <div className="flex justify-between items-start">
              <h3 className="font-bold">Diploma in Computer Engineering</h3>
              <div className="text-sm">Sep 2019 - Sep 2022</div>
            </div>
            <div className="text-sm">Dalia Institute of Diploma Studies</div>
          </div>
        </section>
      </div>
    </div>
  )
}
