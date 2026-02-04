import { ExternalLink, Github } from 'lucide-react'

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: '/api/placeholder/600/400',
      description: 'A modern e-commerce solution with real-time inventory management and secure payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Task Management App',
      category: 'Mobile App',
      image: '/api/placeholder/600/400',
      description: 'Cross-platform mobile application for team collaboration and project management.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Healthcare Dashboard',
      category: 'UI/UX Design',
      image: '/api/placeholder/600/400',
      description: 'Comprehensive dashboard for healthcare providers with patient management and analytics.',
      technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Social Media Analytics',
      category: 'Data Visualization',
      image: '/api/placeholder/600/400',
      description: 'Real-time analytics platform for social media performance tracking and reporting.',
      technologies: ['React', 'D3.js', 'Node.js', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Food Delivery App',
      category: 'Mobile App',
      image: '/api/placeholder/600/400',
      description: 'On-demand food delivery application with real-time tracking and payment integration.',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Learning Management System',
      category: 'Web Development',
      image: '/api/placeholder/600/400',
      description: 'Complete LMS with video streaming, quizzes, and progress tracking for educational institutions.',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  const categories = ['All', 'Web Development', 'Mobile App', 'UI/UX Design', 'Data Visualization']

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Explore our latest projects and see how we've helped businesses achieve their digital goals.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-green-600 hover:text-white hover:border-green-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">Project Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-green-600 font-medium">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            We'd love to hear about your ideas and discuss how we can help bring them to life.
          </p>
          <button className="inline-flex items-center px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
