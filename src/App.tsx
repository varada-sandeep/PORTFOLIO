import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Monitor, Notebook as Robot, Cpu, Database, Laptop, Mail, Phone, MapPin, Github, Linkedin, Instagram, ExternalLink, X, Sun, Moon, BookOpen, Briefcase, Clock, Users, Star, Calendar, CheckCircle } from 'lucide-react';
import axios from 'axios';

function App() {
  const [selectedSkill, setSelectedSkill] = useState<null | {
    icon: JSX.Element;
    name: string;
    description: string;
    projects: {
      title: string;
      description: string;
      image: string;
      video?: string;
    }[];
  }>(null);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY, scrollYProgress } = useScroll();
  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const slideFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const slideFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { 
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const nameAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const publications = [
    {
      title: "Crafting Customer Segmentation Strategies for Advanced Recommendation System",
      journal: "2024 Third International Conference on Electrical, Electronics, Information and Communication Technologies (ICEEICT)",
      year: 2024,
      link: "https://ieeexplore.ieee.org/document/10718371",
      description: "Research on implementing ML algorithms for customer segmentation to enhance recommendation systems.",
    },
  ];

  const freelanceProjects = [
    {
      title: "E-commerce Inventory Management System",
      description: "Built a comprehensive desktop application for a local retail business to manage their inventory, track sales, and generate reports. Features include barcode scanning, low stock alerts, and automated reordering.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "Tkinter", "SQLite", "Pandas"],
      duration: "3 weeks",
      client: "Local Retail Store",
      status: "Completed",
      year: "2024",
      features: ["Real-time inventory tracking", "Sales analytics", "Automated reports", "Barcode integration"]
    },
    {
      title: "Social Media Analytics Dashboard",
      description: "Developed a web-based analytics dashboard for a marketing agency to track social media performance across multiple platforms. Includes data visualization, trend analysis, and automated reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Django", "PostgreSQL", "Chart.js"],
      duration: "4 weeks",
      client: "Digital Marketing Agency",
      status: "Completed",
      year: "2024",
      features: ["Multi-platform integration", "Real-time analytics", "Custom dashboards", "Automated reports"]
    },
    {
      title: "IoT Home Automation System",
      description: "Created a smart home automation system using Arduino and Raspberry Pi. Includes mobile app control, voice commands, and energy monitoring for lights, fans, and appliances.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Arduino", "Raspberry Pi", "Python", "React Native"],
      duration: "5 weeks",
      client: "Private Homeowner",
      status: "Completed",
      year: "2023",
      features: ["Voice control", "Mobile app", "Energy monitoring", "Remote access"]
    },
    {
      title: "Data Processing Automation Suite",
      description: "Automated data processing workflow for a research institute. The system processes large datasets, performs statistical analysis, and generates visualizations automatically, reducing manual work by 80%.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
      duration: "2 weeks",
      client: "Research Institute",
      status: "Completed",
      year: "2024",
      features: ["Automated processing", "Statistical analysis", "Data visualization", "Batch processing"]
    },
    {
      title: "Customer Support Chatbot",
      description: "Developed an AI-powered chatbot for an e-commerce website to handle customer inquiries, order tracking, and basic support. Integrated with existing CRM system and reduced support tickets by 60%.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "NLP", "Flask", "JavaScript"],
      duration: "3 weeks",
      client: "E-commerce Company",
      status: "Completed",
      year: "2023",
      features: ["Natural language processing", "CRM integration", "Order tracking", "24/7 availability"]
    },
    {
      title: "Financial Portfolio Tracker",
      description: "Built a personal finance application to track investments, analyze portfolio performance, and provide insights. Features real-time stock data integration and risk assessment tools.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "Django", "React", "Alpha Vantage API"],
      duration: "4 weeks",
      client: "Financial Advisor",
      status: "Completed",
      year: "2024",
      features: ["Real-time data", "Portfolio analysis", "Risk assessment", "Performance tracking"]
    }
  ];

  const skills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      name: 'Python',
      description: 'Expert in Python development with extensive experience in automation and scripting.',
      projects: [
        {
          title: 'Data Analysis Tool',
          description: 'Advanced data processing and visualization tool built with Python.',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          video: 'https://example.com/video1.mp4'
        },
        {
          title: 'Task Automation Suite',
          description: 'Enterprise-level automation framework for business processes.',
          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          video: 'https://example.com/video2.mp4'
        }
      ]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      name: 'Desktop Applications',
      description: 'Building robust desktop applications with modern UI/UX.',
      projects: [
        {
          title: 'Inventory Management System',
          description: 'Cross-platform desktop application for inventory tracking.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
      ]
    },
    {
      icon: <Robot className="w-8 h-8" />,
      name: 'Python Automation',
      description: 'Automating workflows and processes for increased efficiency.',
      projects: []
    },
    {
      icon: <Database className="w-8 h-8" />,
      name: 'Full Stack Development',
      description: 'Creating end-to-end applications using Django and React.',
      projects: []
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      name: 'Machine Learning',
      description: 'Implementation of basic ML algorithms and data analysis.',
      projects: []
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      name: 'IoT',
      description: 'Working with IoT devices and sensor integration.',
      projects: [
        {
          title: 'Led-Blinking-using-fingers-with-cv2-and-pyfiramates',
          description: 'This project uses computer vision to detect hand gestures and control LEDs connected to an Arduino board. It combines OpenCV, CVZone\'s hand tracking, and Python for real-time gesture-based interaction.',
          image: 'https://raw.githubusercontent.com/varada-sandeep/Led-Blinking-using-fingers-with-cv2-and-pyfiramates/refs/heads/main/led_blinking.jpg',
          video: 'https://github.com/varada-sandeep/Led-Blinking-using-fingers-with-cv2-and-pyfiramates.git',
        }
      ]
    }
  ];

  const services = [
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions for your specific needs.',
      icon: <Code2 className="w-12 h-12" />
    },
    {
      title: 'Process Automation',
      description: 'Streamline your workflows with intelligent automation.',
      icon: <Robot className="w-12 h-12" />
    },
    {
      title: 'Full Stack Web Development',
      description: 'End-to-end web applications with modern technologies.',
      icon: <Monitor className="w-12 h-12" />
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-500`}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1, opacity }}
          className="absolute inset-0"
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${
                isDarkTheme 
                  ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20' 
                  : 'bg-gradient-to-r from-purple-300/30 to-pink-300/30'
              }`}
              initial={{ scale: 0 }}
              animate={{
                scale: [1, 1.1, 1],
                x: mousePosition.x * 5,
                y: mousePosition.y * 5,
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                delay: i * 0.8,
              }}
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </motion.div>
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsDarkTheme(!isDarkTheme)}
        className={`fixed top-4 right-4 z-50 p-3 rounded-full ${
          isDarkTheme ? 'bg-yellow-500 text-gray-900' : 'bg-gray-800 text-white'
        } transition-colors duration-300 shadow-lg`}
      >
        {isDarkTheme ? (
          <Sun className="w-6 h-6" />
        ) : (
          <Moon className="w-6 h-6" />
        )}
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-purple-500 shadow-lg"
            >
              <img
                src="https://github.com/varada-sandeep/marks_revelar_automation/blob/main/images/team11.jpg?raw=true"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.h1
              variants={nameAnimation}
              initial="hidden"
              animate="visible"
              className={`text-6xl font-bold mb-6 ${
                isDarkTheme
                  ? 'bg-gradient-to-r from-blue-400 to-purple-600'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600'
              } bg-clip-text text-transparent`}
            >
              {["V", "a", "r", "a", "d", "a", " ", "S", "a", "n", "d", "e", "e", "p"].map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterAnimation}
                  className="inline-block"
                  style={{ marginRight: letter === " " ? "0.5rem" : "0.1rem" }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className={`text-xl ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}
            >
              Specializing in Python Development, Automation, and Modern Web Applications
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-4">
        <motion.a
          href="https://github.com/varada-sandeep"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className={`p-3 rounded-full ${
            isDarkTheme 
              ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500 hover:text-white' 
              : 'bg-blue-600 text-white shadow-lg hover:bg-blue-700'
          } transition-all duration-300`}
        >
          <Github className="w-6 h-6" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/varada-sandeep-a72446260/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className={`p-3 rounded-full ${
            isDarkTheme 
              ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500 hover:text-white' 
              : 'bg-blue-600 text-white shadow-lg hover:bg-blue-700'
          } transition-all duration-300`}
        >
          <Linkedin className="w-6 h-6" />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/sandeepvarada4/?__pwa=1"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className={`p-3 rounded-full ${
            isDarkTheme 
              ? 'bg-pink-500/20 text-pink-400 hover:bg-pink-500 hover:text-white' 
              : 'bg-pink-600 text-white shadow-lg hover:bg-pink-700'
          } transition-all duration-300`}
        >
          <Instagram className="w-6 h-6" />
        </motion.a>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`py-20 ${
          isDarkTheme
            ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50'
            : 'bg-gradient-to-r from-purple-100/80 to-pink-100/80'
        } backdrop-blur-lg`}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={slideFromLeft}
            className={`text-4xl font-bold text-center mb-16 ${
              isDarkTheme
                ? 'bg-gradient-to-r from-blue-400 to-purple-600'
                : 'bg-gradient-to-r from-purple-700 to-pink-700'
            } bg-clip-text text-transparent`}
          >
            Publications
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className={`${
                  isDarkTheme
                    ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/20'
                    : 'bg-white border border-purple-200 shadow-lg'
                } rounded-lg p-8`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${
                    isDarkTheme
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-purple-100 text-purple-600'
                  }`}>
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                      {pub.title}
                    </h3>
                    <p className={`text-sm mb-2 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                      {pub.journal} • {pub.year}
                    </p>
                    <p className={`mb-4 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                      {pub.description}
                    </p>
                    <a
                      href={pub.link}
                      className={`inline-flex items-center ${
                        isDarkTheme
                          ? 'text-blue-400 hover:text-blue-300'
                          : 'text-purple-600 hover:text-purple-500'
                      } transition-colors`}
                    >
                      <span className="mr-2">Read Paper</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={itemVariants}
            className={`text-4xl font-bold text-center mb-16 ${
              isDarkTheme
                ? 'bg-gradient-to-r from-blue-400 to-purple-600'
                : 'bg-gradient-to-r from-purple-700 to-pink-700'
            } bg-clip-text text-transparent`}
          >
            My Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className={`group relative ${
                  isDarkTheme
                    ? 'bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-500/20'
                    : 'bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 shadow-lg'
                } backdrop-blur-sm rounded-lg p-6 cursor-pointer
                          transform transition-all duration-300 hover:shadow-2xl ${
                            isDarkTheme ? 'hover:shadow-purple-500/20' : 'hover:shadow-purple-500/30'
                          }`}
                onClick={() => setSelectedSkill(skill)}
              >
                <div className={`absolute inset-0 ${
                  isDarkTheme 
                    ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10' 
                    : 'bg-gradient-to-r from-purple-500/5 to-pink-500/5'
                } rounded-lg opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div className={`${
                      isDarkTheme
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400'
                        : 'bg-gradient-to-r from-purple-200 to-pink-200 text-purple-600'
                    } p-3 rounded-lg mr-4`}>
                      {skill.icon}
                    </div>
                    <h3 className={`text-xl font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                      {skill.name}
                    </h3>
                  </div>
                  <p className={isDarkTheme ? 'text-gray-400' : 'text-gray-600'}>
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={slideFromLeft}
            className={`text-4xl font-bold text-center mb-8 ${
              isDarkTheme
                ? 'bg-gradient-to-r from-blue-400 to-purple-600'
                : 'bg-gradient-to-r from-purple-700 to-pink-700'
            } bg-clip-text text-transparent`}
          >
            Freelance Projects
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className={`text-center text-lg mb-16 max-w-3xl mx-auto ${
              isDarkTheme ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Here are some of the successful projects I've completed for clients across various industries. 
            Each project showcases different aspects of my technical expertise and problem-solving abilities.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {freelanceProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`${
                  isDarkTheme
                    ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/20'
                    : 'bg-white border border-purple-200 shadow-lg'
                } rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl ${
                  isDarkTheme ? 'hover:shadow-purple-500/20' : 'hover:shadow-purple-500/30'
                }`}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                    isDarkTheme
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-green-100 text-green-700 border border-green-200'
                  }`}>
                    <CheckCircle className="w-3 h-3 inline mr-1" />
                    {project.status}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`text-xl font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                      {project.title}
                    </h3>
                    <span className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`}>
                      {project.year}
                    </span>
                  </div>
                  
                  <p className={`mb-4 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex items-center mb-4 text-sm">
                    <Users className={`w-4 h-4 mr-2 ${isDarkTheme ? 'text-blue-400' : 'text-purple-600'}`} />
                    <span className={isDarkTheme ? 'text-gray-400' : 'text-gray-600'}>
                      {project.client}
                    </span>
                    <Clock className={`w-4 h-4 ml-4 mr-2 ${isDarkTheme ? 'text-blue-400' : 'text-purple-600'}`} />
                    <span className={isDarkTheme ? 'text-gray-400' : 'text-gray-600'}>
                      {project.duration}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className={`text-sm font-medium mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-xs">
                          <CheckCircle className={`w-3 h-3 mr-2 ${
                            isDarkTheme ? 'text-green-400' : 'text-green-500'
                          }`} />
                          <span className={isDarkTheme ? 'text-gray-400' : 'text-gray-600'}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 py-1 text-xs rounded-full ${
                          isDarkTheme
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            : 'bg-purple-100 text-purple-700 border border-purple-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            variants={fadeInUp}
            className={`mt-16 text-center p-8 ${
              isDarkTheme
                ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/20'
                : 'bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200'
            } rounded-lg`}
          >
            <Briefcase className={`w-12 h-12 mx-auto mb-4 ${
              isDarkTheme ? 'text-blue-400' : 'text-purple-600'
            }`} />
            <h3 className={`text-2xl font-bold mb-4 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
              Interested in Working Together?
            </h3>
            <p className={`mb-6 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm always open to discussing new projects and opportunities. Let's create something amazing together!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg ${
                  isDarkTheme
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                    : 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700'
                } text-white font-medium transform transition-all duration-300`}
                onClick={() => {
                  const subject = encodeURIComponent('Project Inquiry');
                  const body = encodeURIComponent('Hi Varada,\n\nI have a project in mind and would like to discuss the details with you.\n\nThanks!');
                  window.open(`mailto:sandeepvarada4@gmail.com?subject=${subject}&body=${body}`);
                }}
              >
                <Mail className="w-5 h-5 inline mr-2" />
                Email Me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg border-2 ${
                  isDarkTheme
                    ? 'border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'
                    : 'border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white'
                } font-medium transform transition-all duration-300`}
                onClick={() => window.open('https://www.linkedin.com/in/varada-sandeep-a72446260/', '_blank')}
              >
                <Linkedin className="w-5 h-5 inline mr-2" />
                LinkedIn
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`py-20 ${
          isDarkTheme
            ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50'
            : 'bg-gradient-to-r from-purple-100/80 to-pink-100/80'
        } backdrop-blur-lg`}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={slideFromRight}
            className={`text-4xl font-bold text-center mb-16 ${
              isDarkTheme
                ? 'bg-gradient-to-r from-blue-400 to-purple-600'
                : 'bg-gradient-to-r from-purple-700 to-pink-700'
            } bg-clip-text text-transparent`}
          >
            Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={slideFromRight}
                whileHover={{ scale: 1.05 }}
                className={`${
                  isDarkTheme
                    ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/20'
                    : 'bg-white border border-purple-200 shadow-lg'
                } rounded-lg p-8 text-center
                          transform transition-all duration-300 hover:shadow-2xl ${
                            isDarkTheme ? 'hover:shadow-purple-500/20' : 'hover:shadow-purple-500/30'
                          }`}
              >
                <div className={`${
                  isDarkTheme
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400'
                    : 'bg-gradient-to-r from-purple-200 to-pink-200 text-purple-600'
                } p-4 rounded-full inline-block mb-6`}>
                  {service.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-4 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                <p className={isDarkTheme ? 'text-gray-400' : 'text-gray-600'}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`py-20 ${
          isDarkTheme
            ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50'
            : 'bg-gradient-to-r from-purple-100/80 to-pink-100/80'
        } backdrop-blur-lg`}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={slideFromLeft}
            className={`text-4xl font-bold text-center mb-16 ${
              isDarkTheme
                ? 'bg-gradient-to-r from-blue-400 to-purple-600'
                : 'bg-gradient-to-r from-purple-700 to-pink-700'
            } bg-clip-text text-transparent`}
          >
            Get in Touch
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <motion.div
                variants={slideFromLeft}
                className={`${
                  isDarkTheme
                    ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/20'
                    : 'bg-white border border-purple-200 shadow-lg'
                } rounded-lg p-8`}
              >
                <h3 className={`text-2xl font-semibold mb-6 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className={`w-6 h-6 mr-4 ${isDarkTheme ? 'text-blue-400' : 'text-purple-600'}`} />
                    <p className={isDarkTheme ? 'text-gray-300' : 'text-gray-700'}>
                      sandeepvarada4@gmail.com
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Phone className={`w-6 h-6 mr-4 ${isDarkTheme ? 'text-blue-400' : 'text-purple-600'}`} />
                    <p className={isDarkTheme ? 'text-gray-300' : 'text-gray-700'}>
                      +91 93911 32531
                    </p>
                  </div>
                  <div className="flex items-center">
                    <MapPin className={`w-6 h-6 mr-4 ${isDarkTheme ? 'text-blue-400' : 'text-purple-600'}`} />
                    <p className={isDarkTheme ? 'text-gray-300' : 'text-gray-700'}>
                      Chennai
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.form
                variants={slideFromRight}
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const name = formData.get('name') as string;
                  const email = formData.get('email') as string;
                  const message = formData.get('message') as string;
                  console.log(name, email, message);
                  axios.post('https://backend-2-anxj.onrender.com/send-email', {
                    name,
                    email,
                    message,
                  }, {
                    headers: { 'Content-Type': 'application/json' }
                  })
                    .then(response => {
                      alert(response.data.message);
                    })
                    .catch(error => {
                      alert('Failed to send email. Please try again later.');
                      console.error('Error sending email:', error);
                    });
                }}
              >
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 rounded-lg ${
                      isDarkTheme
                        ? 'bg-blue-900/20 border-blue-500/30 text-white placeholder-gray-400'
                        : 'bg-white border-purple-200 text-gray-900 placeholder-gray-500'
                    } border focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all`}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className={`w-full px-4 py-3 rounded-lg ${
                      isDarkTheme
                        ? 'bg-blue-900/20 border-blue-500/30 text-white placeholder-gray-400'
                        : 'bg-white border-purple-200 text-gray-900 placeholder-gray-500'
                    } border focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all`}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    name="message"
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg ${
                      isDarkTheme
                        ? 'bg-blue-900/20 border-blue-500/30 text-white placeholder-gray-400'
                        : 'bg-white border-purple-200 text-gray-900 placeholder-gray-500'
                    } border focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all`}
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg ${
                    isDarkTheme
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                      : 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700'
                  } text-white transform transition-all duration-300`}
                >
                  Send Message
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`${
                isDarkTheme
                  ? 'bg-gradient-to-br from-blue-900/90 to-purple-900/90 border border-blue-500/20'
                  : 'bg-white border border-purple-200'
              } rounded-lg p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto`}
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className={`text-2xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                  {selectedSkill.name}
                </h3>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className={isDarkTheme ? 'text-gray-300' : 'text-gray-700'}>
                {selectedSkill.description}
              </p>
              {selectedSkill.projects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {selectedSkill.projects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`${
                        isDarkTheme
                          ? 'bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-500/20'
                          : 'bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200'
                      } rounded-lg overflow-hidden`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h4 className={`text-xl font-semibold mb-2 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                          {project.title}
                        </h4>
                        <p className={isDarkTheme ? 'text-gray-400' : 'text-gray-600'}>
                          {project.description}
                        </p>
                        {project.video && (
                          <a
                            href={project.video}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center mt-4 ${
                              isDarkTheme ? 'text-blue-400 hover:text-blue-300' : 'text-purple-600 hover:text-purple-500'
                            } transition-colors`}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Project Link/Project Video
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className={`text-center mt-8 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                  No projects to display yet.
                </p>
              )}
            </motion.div>
           </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className={`fixed bottom-4 right-4 w-12 h-12 rounded-full ${
          isDarkTheme ? 'bg-blue-500' : 'bg-purple-600'
        } flex items-center justify-center text-white text-sm font-bold shadow-lg`}
        style={{
          scaleY: scrollYProgress
        }}
      >
        <motion.div
          className="w-full h-full rounded-full border-4 border-white"
          style={{
            scaleY: scrollYProgress
          }}
        />
      </motion.div>
    </div>
  );
}

export default App;