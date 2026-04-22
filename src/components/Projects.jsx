import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import project1 from '../assets/Ecommerce.jpg'
import project2 from '../assets/Blog.jpg'
import project3 from '../assets/Auction.jpg'
import project4 from '../assets/Transportation.jpg'
import project5 from '../assets/Chat.jpg'
import project6 from '../assets/MilkProduction.jpg'

const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Developed a Full-stack E-Commerce Platform using React and Laravel.",
      image: project1,
      tags: ["React", "Laravel", "Bootstrap", "VueJS"],
    },
    {
      id: 2,
      title: "Online Auction Platform",
      description: "Developed an Online Auction Platform using Laravel with real-time bidding functionality.",
      image: project3,
      tags: ["React", "Laravel", "Bootstrap", "Figma"],
    },
    {
      id: 3,
      title: "Blog Management System",
      description: "Built a blog management system with content creation, editing, and publishing features.",
      image: project2,
      tags: ["React", "Laravel", "Bootstrap"],
    },
    {
      id: 4,
      title: "Transportation Management System",
      description: "Contributed to the development of a full-stack transportation management application in a team environment.",
      image: project4,
      tags: ["PHP", "Laravel", "Bootstrap"],
    },
    {
      id: 5,
      title: "Chat Application",
      description: "Engineered a real-time chat application with instant messaging and responsive user experience.",
      image: project5,
      tags: ["PHP", "Bootstrap", "Socket.io"],
    },
    {
      id: 6,
      title: "Milk & Dairy Management System",
      description: "Contributed to the development of a dairy management system in a team environment.",
      image: project6,
      tags: ["PHP", "Laravel", "Bootstrap"],
    },
  ]

  return (
    <section
      id="project"
      style={{
        backgroundColor: darkMode ? '#111827' : '#f9fafb'
      }}
      className="relative py-24"
    >
      <div className="container mx-auto px-4">

        <div className="text-center mb-10" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{
              color: darkMode ? 'white' : '#1f2937'
            }}
          >
            My{" "}
            <span
              style={{
                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Projects
            </span>
          </h2>

          <p
            className="max-w-xl mx-auto"
            style={{
              color: darkMode ? '#d1d5db' : '#6b7280'
            }}
          >
            Here are some of my projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: darkMode
                  ? 'linear-gradient(to right, #1f2937, #111827)'
                  : 'linear-gradient(to right, #ffffff, #f9fafb)',
                borderColor: darkMode ? '#374151' : '#e5e7eb'
              }}
              className="group rounded-xl border duration-300 hover:border-orange-500/50 transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-36 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{
                    color: darkMode ? 'white' : '#1f2937'
                     
                  }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm mb-3"
                  style={{
                    color: darkMode ? '#d1d5db' : '#6b7280'
                  }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                        color: darkMode ? '#d1d5db' : '#4b5563'
                      }}
                      className="px-2 py-1 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* FIXED BUTTON SECTION */}
                <div className="flex gap-2">
                  <a
                    href="#"
                    style={{
                      backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                      color: darkMode ? 'white' : '#374151'
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-colors duration-300"
                  >
                    <FaGithub className="text-sm" />
                    <span>Code</span>
                  </a>

                  <a
                    href="#"
                    style={{
                      background: 'linear-gradient(to right, #f97316, #f59e0b)'
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FIXED BOTTOM BUTTON */}
        <div className="text-center mt-10">
          <a
            href="#"
            style={{
              background: 'linear-gradient(to right, #f97316, #f59e0b)'
            }}
            className="inline-flex items-center font-semibold gap-2 px-7 py-4 text-white text-sm rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <FaGithub />
            <span>View All Projects</span>
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Projects