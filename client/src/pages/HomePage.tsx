// src/pages/HomePage.tsx
export default function HomePage() {
  const features = [
    {
      icon: '🔐',
      title: 'Secure Authentication',
      description: 'Password hashing with bcrypt and email validation',
    },
    {
      icon: '⚡',
      title: 'Fast & Responsive',
      description: 'Built with modern React and NestJS technologies',
    },
    {
      icon: '🎨',
      title: 'Beautiful UI',
      description: 'Clean and modern interface with Tailwind CSS',
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Welcome to User Registration
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A modern, secure, and beautiful user authentication system built with the latest technologies.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/signup"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Get Started
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="/login"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
          >
            Sign In
          </a>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 group"
          >
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900">Built With</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'React', icon: '⚛️' },
            { name: 'NestJS', icon: '🐈' },
            { name: 'MongoDB', icon: '🍃' },
            { name: 'Tailwind', icon: '🎨' },
          ].map((tech, index) => (
            <div key={index} className="text-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="text-2xl mb-1">{tech.icon}</div>
              <div className="text-sm font-medium text-gray-700">{tech.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
