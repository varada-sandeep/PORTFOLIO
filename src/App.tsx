import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Menu, X, Download, Mail, Phone, MapPin, Github, Linkedin, Instagram, ExternalLink, Code2, Database, Cpu, Monitor, Notebook as Robot, Laptop, Award, Calendar, Users, Star, CheckCircle, ArrowRight, Send, BookOpen, Briefcase, Globe, Zap, Target, TrendingUp, Building, GraduationCap, Trophy, Eye, EyeOff } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showTestimonials, setShowTestimonials] = useState(true); // Toggle for testimonials
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'portfolio', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'Python', icon: <Code2 className="w-6 h-6" />, category: 'Programming' },
    { name: 'JavaScript/React', icon: <Monitor className="w-6 h-6" />, category: 'Frontend' },
    { name: 'Django/Flask', icon: <Database className="w-6 h-6" />, category: 'Backend' },
    { name: 'Machine Learning', icon: <Cpu className="w-6 h-6" />, category: 'AI/ML' },
    { name: 'IoT Development', icon: <Laptop className="w-6 h-6" />, category: 'Hardware' },
    { name: 'Process Automation', icon: <Robot className="w-6 h-6" />, category: 'Automation' },
    { name: 'SQL/PostgreSQL', icon: <Database className="w-6 h-6" />, category: 'Database' },
    { name: 'Git/GitHub', icon: <Github className="w-6 h-6" />, category: 'Tools' }
  ];

  const projects = [
    {
      title: 'E-commerce Inventory Management System',
      description: 'Comprehensive desktop application for retail inventory management with real-time tracking, automated alerts, and detailed analytics.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['Python', 'Tkinter', 'SQLite', 'Pandas'],
      features: ['Real-time inventory tracking', 'Automated low stock alerts', 'Sales analytics dashboard', 'Barcode integration'],
      liveDemo: '#',
      github: '#',
      category: 'Desktop Application',
      impact: 'Reduced inventory management time by 60%'
    },
    {
      title: 'Social Media Analytics Dashboard',
      description: 'Web-based analytics platform for tracking social media performance across multiple platforms with automated reporting.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Django', 'PostgreSQL', 'Chart.js'],
      features: ['Multi-platform integration', 'Real-time analytics', 'Custom dashboards', 'Automated reports'],
      liveDemo: '#',
      github: '#',
      category: 'Web Application',
      impact: 'Improved marketing ROI by 40%'
    },
    {
      title: 'IoT Home Automation System',
      description: 'Smart home automation solution with mobile app control, voice commands, and energy monitoring capabilities.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['Arduino', 'Raspberry Pi', 'Python', 'React Native'],
      features: ['Voice control integration', 'Mobile app control', 'Energy monitoring', 'Remote access'],
      liveDemo: '#',
      github: '#',
      category: 'IoT Solution',
      impact: 'Reduced energy consumption by 25%'
    },
    {
      title: 'Machine Learning Customer Segmentation',
      description: 'Advanced ML model for customer segmentation to enhance recommendation systems with improved accuracy.',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      features: ['Advanced clustering algorithms', 'Data visualization', 'Performance metrics', 'Scalable architecture'],
      liveDemo: '#',
      github: '#',
      category: 'Machine Learning',
      impact: 'Increased recommendation accuracy by 35%'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Project Manager, TechCorp',
      content: 'Varada delivered exceptional work on our inventory management system. The solution exceeded our expectations and significantly improved our operational efficiency.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, DataFlow Solutions',
      content: 'Outstanding technical expertise and professional communication. The analytics dashboard Varada built has become an essential tool for our marketing team.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Director, SmartHome Inc',
      content: 'Varada\'s IoT solution transformed our home automation offerings. The integration was seamless and the results speak for themselves.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
    }
  ];

  const achievements = [
    {
      title: 'IEEE Publication',
      description: 'Published research on customer segmentation strategies for recommendation systems',
      year: '2024',
      icon: <BookOpen className="w-6 h-6" />,
      type: 'Research'
    },
    {
      title: 'Top Performer Award',
      description: 'Recognized for outstanding project delivery and technical innovation',
      year: '2024',
      icon: <Trophy className="w-6 h-6" />,
      type: 'Achievement'
    },
    {
      title: 'Technical Leadership',
      description: 'Led development team of 5 engineers on multiple successful projects',
      year: '2023-2024',
      icon: <Users className="w-6 h-6" />,
      type: 'Leadership'
    },
    {
      title: 'Certification in ML',
      description: 'Advanced Machine Learning certification from recognized institution',
      year: '2023',
      icon: <GraduationCap className="w-6 h-6" />,
      type: 'Education'
    }
  ];

  const workExperience = [
    {
      title: 'Senior Python Developer',
      company: 'Tech Solutions Inc.',
      period: '2023 - Present',
      location: 'Chennai, India',
      description: 'Leading development of automation solutions and web applications using Python, Django, and React.',
      achievements: [
        'Developed 15+ successful automation projects',
        'Improved system efficiency by 40% through process optimization',
        'Mentored junior developers and led technical reviews'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd.',
      period: '2022 - 2023',
      location: 'Chennai, India',
      description: 'Built end-to-end web applications and IoT solutions for various clients across different industries.',
      achievements: [
        'Delivered 10+ client projects on time and within budget',
        'Implemented ML models that increased accuracy by 35%',
        'Collaborated with cross-functional teams on product development'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <motion.header
        style={{ opacity: headerOpacity }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Varada Sandeep
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Skills', 'Portfolio', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? 'text-blue-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300"
              >
                <Download className="w-4 h-4 inline mr-2" />
                Resume
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                {['Home', 'About', 'Skills', 'Portfolio', 'Experience', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </button>
                ))}
                <button
                  onClick={() => window.open('/resume.pdf', '_blank')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium w-full"
                >
                  <Download className="w-4 h-4 inline mr-2" />
                  Download Resume
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-blue-500 shadow-xl"
            >
              <img
                src="https://github.com/varada-sandeep/marks_revelar_automation/blob/main/images/team11.jpg?raw=true"
                alt="Varada Sandeep"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Varada Sandeep
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed"
            >
              Python Developer & Automation Specialist
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto"
            >
              Passionate about building scalable solutions and automating complex processes. 
              Ready to contribute to innovative teams and drive technological excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('portfolio')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transition-all duration-300"
              >
                View My Work
                <ArrowRight className="w-5 h-5 inline ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('mailto:sandeepvarada4@gmail.com', '_blank')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 inline mr-2" />
                Hire Me
              </motion.button>
            </motion.div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-8 max-w-md mx-auto mb-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">2+</div>
                <div className="text-sm text-gray-600">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center space-x-6"
            >
              {[
                { icon: <Github className="w-6 h-6" />, url: 'https://github.com/varada-sandeep', label: 'GitHub' },
                { icon: <Linkedin className="w-6 h-6" />, url: 'https://www.linkedin.com/in/varada-sandeep-a72446260/', label: 'LinkedIn' },
                { icon: <Mail className="w-6 h-6" />, url: 'mailto:sandeepvarada4@gmail.com', label: 'Email' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-blue-600 border border-gray-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Driven Developer Ready to Make an Impact
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate Python developer with a strong foundation in full-stack development, 
                automation, and emerging technologies. My experience spans from building desktop applications 
                to implementing IoT solutions and machine learning models.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                What sets me apart is my ability to understand complex business requirements and translate 
                them into efficient, scalable solutions. I'm always eager to learn new technologies and 
                contribute to innovative projects that make a real difference.
              </p>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-4">What I Bring to Your Team</h4>
                <div className="space-y-3">
                  {[
                    'Strong problem-solving and analytical thinking',
                    'Excellent communication and collaboration skills',
                    'Passion for clean, maintainable code',
                    'Quick learner with adaptability to new technologies',
                    'Results-driven approach with attention to detail'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Technical Expertise</h4>
                <div className="space-y-4">
                  {[
                    { icon: <Code2 className="w-5 h-5" />, text: 'Python Development & Automation', level: 'Expert' },
                    { icon: <Monitor className="w-5 h-5" />, text: 'Full-Stack Web Development', level: 'Advanced' },
                    { icon: <Database className="w-5 h-5" />, text: 'Database Design & Management', level: 'Advanced' },
                    { icon: <Laptop className="w-5 h-5" />, text: 'IoT Solutions & Integration', level: 'Intermediate' },
                    { icon: <Cpu className="w-5 h-5" />, text: 'Machine Learning & AI', level: 'Intermediate' },
                    { icon: <Robot className="w-5 h-5" />, text: 'Process Automation', level: 'Expert' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg text-blue-600">
                          {item.icon}
                        </div>
                        <span className="text-gray-700">{item.text}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        item.level === 'Expert' ? 'bg-green-100 text-green-700' :
                        item.level === 'Advanced' ? 'bg-blue-100 text-blue-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {item.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
                <h4 className="text-xl font-bold mb-4">Ready to Contribute</h4>
                <p className="text-blue-100 mb-4">
                  I'm actively seeking opportunities to join a dynamic team where I can contribute 
                  my skills and continue growing as a developer.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('mailto:sandeepvarada4@gmail.com', '_blank')}
                  className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                >
                  Let's Connect
                  <ArrowRight className="w-4 h-4 inline ml-2" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive skill set built through hands-on experience and continuous learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{skill.name}</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {skill.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing successful projects that demonstrate technical expertise and problem-solving capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-200"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.impact}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.liveDemo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:shadow-lg transition-all duration-300"
                    >
                      <Globe className="w-4 h-4 inline mr-2" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 border-2 border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-center font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                    >
                      <Github className="w-4 h-4 inline mr-2" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            
            {/* Testimonial Toggle */}
            <div className="flex justify-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowTestimonials(!showTestimonials)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  showTestimonials 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {showTestimonials ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                <span>{showTestimonials ? 'Hide' : 'Show'} Testimonials</span>
              </motion.button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Professional Experience</h3>
              <div className="space-y-8">
                {workExperience.map((job, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{job.title}</h4>
                        <p className="text-blue-600 font-medium">{job.company}</p>
                        <p className="text-sm text-gray-500">{job.location}</p>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="space-y-2">
                      <h5 className="font-semibold text-gray-900">Key Achievements:</h5>
                      {job.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievements and Testimonials */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Achievements */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Achievements & Certifications</h3>
                <div className="space-y-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg text-blue-600">
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-bold text-gray-900">{achievement.title}</h4>
                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                              achievement.type === 'Research' ? 'bg-purple-100 text-purple-700' :
                              achievement.type === 'Achievement' ? 'bg-yellow-100 text-yellow-700' :
                              achievement.type === 'Leadership' ? 'bg-blue-100 text-blue-700' :
                              'bg-green-100 text-green-700'
                            }`}>
                              {achievement.type}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-2">{achievement.description}</p>
                          <span className="text-sm text-blue-600 font-medium">{achievement.year}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials - Conditional Rendering */}
              <AnimatePresence>
                {showTestimonials && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Client Testimonials</h3>
                    <div className="space-y-6">
                      {testimonials.map((testimonial, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
                        >
                          <div className="flex items-center mb-4">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full mr-4 border-2 border-gray-200"
                            />
                            <div>
                              <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                              <p className="text-sm text-gray-600">{testimonial.role}</p>
                            </div>
                            <div className="ml-auto flex">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-700 italic">"{testimonial.content}"</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm actively seeking new opportunities to contribute my skills and grow with an innovative team. 
              Let's discuss how I can add value to your organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg text-blue-600">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <a href="mailto:sandeepvarada4@gmail.com" className="text-blue-600 hover:underline text-lg">
                        sandeepvarada4@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg text-blue-600">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <a href="tel:+919391132531" className="text-blue-600 hover:underline text-lg">
                        +91 93911 32531
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg text-blue-600">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Location</h4>
                      <p className="text-gray-600 text-lg">Chennai, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Hire Me?</h3>
                <div className="space-y-3">
                  {[
                    { icon: <Zap className="w-5 h-5" />, text: 'Quick to adapt and learn new technologies' },
                    { icon: <Target className="w-5 h-5" />, text: 'Results-oriented with strong work ethic' },
                    { icon: <Users className="w-5 h-5" />, text: 'Excellent team collaboration skills' },
                    { icon: <CheckCircle className="w-5 h-5" />, text: 'Committed to delivering quality solutions' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="text-blue-600">{item.icon}</div>
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Job Opportunity / Collaboration"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about the opportunity..."
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                  >
                    <Send className="w-5 h-5 inline mr-2" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Varada Sandeep
            </div>
            <p className="text-gray-400 mb-6">
              Python Developer & Automation Specialist
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              {[
                { icon: <Github className="w-6 h-6" />, url: 'https://github.com/varada-sandeep' },
                { icon: <Linkedin className="w-6 h-6" />, url: 'https://www.linkedin.com/in/varada-sandeep-a72446260/' },
                { icon: <Mail className="w-6 h-6" />, url: 'mailto:sandeepvarada4@gmail.com' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="p-3 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">
                © 2024 Varada Sandeep. All rights reserved. Built with React & Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;