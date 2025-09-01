/* src/templates/Template3.jsx */
import { motion } from "framer-motion";

const Template3 = ({ userData }) => {
  return (
    <div className="animate-fadeIn grid gap-6 md:grid-cols-2">
      {/* Header Section */}
      <div className="col-span-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-10 rounded-2xl shadow-lg text-center">
        <h1 className="text-4xl font-extrabold tracking-wide">{userData.name}</h1>
        <p className="text-2xl mt-3 font-light">{userData.title}</p>
      </div>

      {/* About */}
      {userData.about && (
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 w-full col-span-2">
          <h2 className="text-2xl font-semibold text-pink-600">About Me</h2>
          <p className="text-gray-700 mt-3 leading-relaxed">{userData.about}</p>
        </div>
      )}

      {/* Experience */}
      <section className="mt-8 w-full col-span-2">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-teal-400 mb-6 border-b-4 border-green-300 inline-block pb-1 tracking-wide">
          Experience
        </h2>

        {userData.experiences && userData.experiences.length > 0 ? (
          <div className="grid grid-cols-2 gap-6">
            {userData.experiences.map((exp, index) => (
              <div
                key={index}
                className="relative p-6 border border-transparent rounded-2xl
                     bg-gradient-to-tr from-green-100 via-white to-green-50
                     shadow-lg hover:shadow-2xl transition-all duration-500
                     hover:-translate-y-2 hover:border-green-400 hover:bg-gradient-to-br 
                     hover:from-green-200 hover:via-white hover:to-green-100
                     group overflow-hidden"
              >
                {/* Decorative glowing bar */}
                <span className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-green-400 to-emerald-500 rounded-l-lg shadow-[0_0_10px_rgba(34,197,94,0.7)]"></span>

                {/* Title */}
                <h3 className="text-xl font-extrabold text-gray-900 flex items-center group-hover:text-green-700 transition-colors">
                  {exp.role}
                  <span className="ml-2 text-green-600 font-semibold group-hover:text-green-800">
                    @ {exp.company}
                  </span>
                </h3>

                {/* Duration */}
                <p className="text-sm text-gray-600 italic mt-2 flex items-center gap-2 group-hover:text-emerald-700 transition-colors">
                  <span className="inline-block w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-[0_0_6px_rgba(34,197,94,0.6)]"></span>
                  {exp.duration}
                </p>

                {/* Description */}
                <p className="text-gray-700 mt-3 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 italic">No experience added</p>
        )}
      </section>

      {/* Projects */}
      {userData.projects && userData.projects.length > 0 && (
        <section className="mb-12 w-full col-span-2">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400 mb-6">
            🌟 Projects
          </h2>

          <ul className="grid md:grid-cols-2 gap-6">
            {userData.projects.map((proj, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.03, rotate: [-1, 1, 0] }}
                className="p-6 border border-green-100 rounded-2xl 
                     bg-gradient-to-tr from-green-50 via-white to-green-100
                     shadow-md hover:shadow-lg 
                     transition-all duration-500 relative overflow-hidden group"
              >
                {/* Decorative background effect */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-300 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>

                {/* Project Title */}
                <h3 className="text-xl font-semibold text-green-800 flex items-center gap-2">
                  📌 {proj.name}
                </h3>

                {/* Description */}
                {proj.description && (
                  <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                    {proj.description}
                  </p>
                )}

                {/* Tech Stack */}
                {proj.tech && proj.tech.length > 0 && (
                  <p className="text-xs text-gray-600 mt-3">
                    <span className="font-semibold text-green-700">⚙ Tech:</span>{" "}
                    <span className="italic">{proj.tech.split(",").join(", ")}</span>
                  </p>
                )}

                {/* Project Link */}
                {proj.link && (
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-5 py-2 bg-green-600 text-white text-xs font-medium rounded-full
                         hover:bg-green-700 transition-colors shadow-md hover:shadow-xl"
                  >
                    🔗 View Project
                  </motion.a>
                )}
              </motion.li>
            ))}
          </ul>
        </section>
      )}

      {/* Education */}
      <section className="mt-8 w-full col-span-2">
        <h2 className="text-3xl font-extrabold text-purple-700 mb-6 border-b-4 border-purple-300 inline-block pb-1 animate-pulse">
          🎓 Education
        </h2>

        {userData.education && userData.education.length > 0 ? (
          <div className="grid grid-cols-2 gap-6">
            {userData.education.map((edu, index) => (
              <div
                key={index}
                className="relative p-6 rounded-2xl bg-gradient-to-r from-purple-100 via-white to-purple-50 
                     shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 
                     transition-all duration-500"
              >
                {/* Decorative left accent */}
                <span className="absolute left-0 top-0 h-full w-2 bg-purple-500 rounded-l-xl"></span>

                {/* Degree */}
                <h3 className="text-xl font-bold text-purple-800 flex items-center gap-2">
                  {edu.degree} <span className="text-purple-600">@ {edu.institution}</span>
                </h3>

                {/* Year */}
                <p className="text-sm text-gray-600 italic mt-2 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-purple-500 rounded-full animate-bounce"></span>
                  {edu.year}
                </p>

              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 italic">No education added</p>
        )}
      </section>

      {/* Skills */}
      <section className="mt-8 col-span-2">
        <h2 className="text-3xl font-extrabold text-pink-600 mb-6 border-b-4 border-pink-300 inline-block pb-1">
          Skills
        </h2>

        {userData.skills && userData.skills.length > 0 ? (
          <ul className="flex flex-wrap gap-4 justify-center">
            {userData.skills.map((skill, index) => (
              <li
                key={index}
                className="px-5 py-2 bg-gradient-to-r from-pink-400 via-pink-300 to-pink-200
                     text-white font-semibold rounded-full cursor-pointer 
                     transform hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                {skill.name} {skill.level ? `(${skill.level})` : ""}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic text-center">No skills added</p>
        )}
      </section>

      {/* Certifications */}
      <section className="mt-8 col-span-2">
        <h2 className="text-3xl font-extrabold text-pink-600 mb-6 border-b-4 border-pink-300 inline-block pb-1">
          Certifications
        </h2>

        {userData.certifications && userData.certifications.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {userData.certifications.map((cert, index) => (
              <div
                key={index}
                className="relative p-6 border border-pink-100 rounded-2xl 
               bg-gradient-to-tr from-pink-50 via-white to-pink-50 
               shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Decorative left accent */}
                <span className="absolute left-0 top-0 h-full w-1.5 bg-pink-400 rounded-l-lg"></span>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  🏆 {cert.title}
                </h3>

                {/* Issuer */}
                {cert.issuer && (
                  <p className="text-sm text-gray-500 italic mt-2 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-pink-400 rounded-full"></span>
                    Issued by: {cert.issuer}
                  </p>
                )}

                {/* Year */}
                {cert.year && <p className="text-gray-700 mt-2">{cert.year}</p>}

                {/* Link */}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 px-4 py-1.5 bg-pink-600 text-white text-xs rounded-lg
                   hover:bg-pink-700 transition-colors shadow-sm"
                  >
                    🔗 View Certificate
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 italic">No certifications added</p>
        )}
      </section>

      {/* Contact / Social Links */}
      <div className="col-span-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-2xl shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <div className="space-y-2">
          {userData.email && <p>📧 {userData.email}</p>}
          {userData.phone && <p>📞 {userData.phone}</p>}
          {userData.socialLinks?.github && <p>🔗 GitHub: {userData.socialLinks.github}</p>}
          {userData.socialLinks?.linkedin && <p>💼 LinkedIn: {userData.socialLinks.linkedin}</p>}
          {userData.socialLinks?.leetcode && <p>🐦 Leetcode: {userData.socialLinks.leetcode}</p>}
          {userData.socialLinks?.website && <p>🌐 Website: {userData.socialLinks.website}</p>}
        </div>
      </div>
    </div>
  );
};

export default Template3;
