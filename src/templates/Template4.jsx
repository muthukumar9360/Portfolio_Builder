/* src/templates/Template4.jsx */
const Template4 = ({ userData }) => {
    return (
        <div className="max-w-6xl mx-auto p-8 bg-gradient-to-br from-purple-50 to-white rounded-3xl shadow-xl">

            <div className="col-span-2 bg-gradient-to-r from-pink-100 to-purple-900 text-black p-10 rounded-2xl shadow-lg transform hover:scale-[1.01] transition duration-300 text-left">
                <h1 className="text-5xl font-extrabold tracking-wide">{userData.name}</h1>
                <p className="text-2xl mt-3 font-normal">{userData.title}</p>
            </div>

            {/* About Section */}
            {userData.about && (
                <section className="mb-12 text-center">
                    <h2 className="text-4xl font-extrabold text-purple-700 mb-4 border-b-4 border-purple-300 inline-block pb-1">
                        About Me
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                        {userData.about}
                    </p>
                </section>
            )}

            {/* Experience Section */}
            {userData.experiences && userData.experiences.length > 0 && (
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-teal-600 mb-6 border-b-4 border-teal-300 inline-block pb-1">
                        Experience
                    </h2>
                    <div className="flex flex-wrap gap-6">
                        {userData.experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="flex-1 min-w-[280px] p-6 bg-gradient-to-tr from-teal-50 via-white to-teal-50 
                       rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300"
                            >
                                <h3 className="text-xl font-semibold text-teal-700">{exp.role}</h3>
                                <p className="text-sm text-gray-500 italic mt-1">@ {exp.company} • {exp.duration}</p>
                                <p className="text-gray-700 mt-3">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Projects Section */}
            {userData.projects && userData.projects.length > 0 && (
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-yellow-600 mb-6 border-b-4 border-yellow-300 inline-block pb-1">
                        Projects
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {userData.projects.map((proj, index) => (
                            <div
                                key={index}
                                className="p-6 bg-gradient-to-tr from-yellow-50 via-white to-yellow-50 
                       rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <h3 className="text-lg font-bold text-yellow-700 mb-1">📌 {proj.name}</h3>
                                <p className="text-gray-700 mb-2">{proj.description}</p>
                                {proj.tech && (
                                    <p className="text-xs text-gray-500 mb-2">
                                        <strong>Tech:</strong> {proj.tech.split(",").join(", ")}
                                    </p>
                                )}
                                {proj.link && (
                                    <a
                                        href={proj.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-1 bg-yellow-600 text-white text-xs rounded-lg hover:bg-yellow-700 transition-colors"
                                    >
                                        🔗 View Project
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Skills Section */}
            {userData.skills && userData.skills.length > 0 && (
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-purple-600 mb-6 border-b-4 border-purple-300 inline-block pb-1">
                        Skills
                    </h2>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {userData.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-200 
                       text-purple-800 font-semibold rounded-full shadow-sm transform hover:scale-105 transition-transform"
                            >
                                {skill.name} ({skill.level})
                            </span>
                        ))}
                    </div>
                </section>
            )}

            {/* Education Section */}
            {userData.education && userData.education.length > 0 && (
                <section className="mb-12 relative">
                    <h2 className="text-3xl font-bold text-teal-600 mb-6 border-b-4 border-teal-300 inline-block pb-1">
                        Education
                    </h2>
                    <div className="border-l-2 border-teal-300 ml-4 relative">
                        {userData.education.map((edu, index) => (
                            <div key={index} className="mb-6 ml-6 relative">
                                <span className="absolute -left-5 top-1 w-3 h-3 bg-teal-600 rounded-full animate-pulse"></span>
                                <p className="font-semibold text-teal-700">{edu.degree}</p>
                                <p className="text-gray-700">{edu.institution}</p>
                                <p className="text-gray-500 text-sm">{edu.year}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Certifications Section */}
            {userData.certifications && userData.certifications.length > 0 && (
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-pink-600 mb-6 border-b-4 border-pink-300 inline-block pb-1">
                        Certifications
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {userData.certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="p-6 bg-gradient-to-tr from-pink-50 via-white to-pink-50 
                       rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <h3 className="font-bold text-pink-700 mb-1">🏆 {cert.title}</h3>
                                {cert.issuer && <p className="text-gray-700">Issued by: {cert.issuer}</p>}
                                {cert.year && <p className="text-gray-500 text-sm">Year: {cert.year}</p>}
                                {cert.link && (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 inline-block px-3 py-1 bg-pink-600 text-white text-xs rounded-lg hover:bg-pink-700 transition-colors"
                                    >
                                        🔗 View Certificate
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Contact Section */}
            {userData.contact && (
                <section className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-green-600 mb-6 border-b-4 border-green-300 inline-block pb-1">
                        Contact
                    </h2>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-700">
                        {userData.contact.email && (
                            <a
                                href={`mailto:${userData.contact.email}`}
                                className="px-4 py-2 bg-green-100 text-green-700 rounded-lg shadow hover:bg-green-200 transition"
                            >
                                📧 {userData.contact.email}
                            </a>
                        )}
                        {userData.contact.phone && (
                            <a
                                href={`tel:${userData.contact.phone}`}
                                className="px-4 py-2 bg-green-100 text-green-700 rounded-lg shadow hover:bg-green-200 transition"
                            >
                                📞 {userData.contact.phone}
                            </a>
                        )}
                        {userData.contact.linkedin && (
                            <a
                                href={userData.contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-green-100 text-green-700 rounded-lg shadow hover:bg-green-200 transition"
                            >
                                🔗 LinkedIn
                            </a>
                        )}
                    </div>
                </section>
            )}
        </div>
    );
};

export default Template4;
