import { ArrowRight, Zap, Users, Rocket, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export function LandingPage() {
  const whatWeDo = [
    {
      icon: Zap,
      title: 'Product Building',
      description: 'We turn ideas into real products. From concept to launch, we build things that matter.',
    },
    {
      icon: Users,
      title: 'Selective Freelancing',
      description: 'Working with founders and teams on projects that excite us. Quality over quantity.',
    },
    {
      icon: Rocket,
      title: 'Own Products',
      description: 'Building our own suite of tools and products. Experimenting, learning, shipping.',
    },
  ];

  const buildTimeline = [
    { phase: 'Ideas', description: 'Start with problems worth solving' },
    { phase: 'Building', description: 'Ship fast, iterate faster' },
    { phase: 'Shipping', description: 'Real products, real impact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
              <span className="text-sm text-white/70">Friends → Founders → Builders</span>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl mb-8 tracking-tight"
          >
            Building Products
            <br />
            <span className="text-white/40">With Soul</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            We're a collective of young founders building digital products, working on tech projects, 
            and collaborating with teams who share our vision.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/builds"
              className="group px-8 py-4 bg-white text-black rounded-lg hover:bg-white/90 transition-all flex items-center gap-2 hover:gap-3 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              See What We're Building
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-white/20 rounded-lg hover:bg-white/5 transition-all hover:border-white/40"
            >
              Work With Us
            </Link>
          </motion.div>

          {/* Abstract Visual Element */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent blur-3xl animate-pulse"></div>
            <div className="relative bg-[#111] border border-white/10 rounded-2xl p-8 md:p-12 overflow-hidden hover:border-white/20 transition-colors">
              <div className="flex items-start gap-2 mb-6">
                <div className="flex gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="w-3 h-3 rounded-full bg-red-500/40"
                  ></motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 0.2 }}
                    className="w-3 h-3 rounded-full bg-yellow-500/40"
                  ></motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 0.4 }}
                    className="w-3 h-3 rounded-full bg-green-500/40"
                  ></motion.div>
                </div>
              </div>
              <div className="text-left font-mono text-sm space-y-2 text-white/60">
                <div><span className="text-purple-400">const</span> buildProduct = <span className="text-blue-400">(</span>idea<span className="text-blue-400">)</span> <span className="text-blue-400">=&gt;</span> {'{'}</div>
                <div className="pl-4"><span className="text-purple-400">return</span> {'{'}</div>
                <div className="pl-8">vision: idea<span className="text-white/40">,</span></div>
                <div className="pl-8">execution: <span className="text-green-400">'fast'</span><span className="text-white/40">,</span></div>
                <div className="pl-8">soul: <span className="text-green-400">true</span></div>
                <div className="pl-4">{'};'}</div>
                <div>{'}; '}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl mb-16 text-center"
          >
            What We Do?
          </motion.h2>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {whatWeDo.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all group"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="mb-6 text-white/80 group-hover:text-white transition-colors" size={32} />
                </motion.div>
                <h3 className="text-xl mb-4">{item.title}</h3>
                <p className="text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How We Build Section */}
      <section className="px-6 py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl mb-16 text-center"
          >
            How We Build?
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="space-y-8"
            >
              {buildTimeline.map((item, index) => (
                <motion.div
                  key={item.phase}
                  variants={itemVariants}
                  className="flex items-start gap-6"
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 rounded-full border-2 border-white/20 bg-[#0a0a0a] flex items-center justify-center shrink-0 hover:border-white/40 transition-colors"
                    >
                      <span className="text-sm text-white/60">{index + 1}</span>
                    </motion.div>
                    {index < buildTimeline.length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '5rem' }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="w-0.5 bg-white/10 my-2"
                      ></motion.div>
                    )}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl mb-2">{item.phase}</h3>
                    <p className="text-white/60">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Image on the right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl animate-pulse"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Team working together" 
                  className="w-full h-auto opacity-60 hover:opacity-80 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Team Souls Section */}
      <section className="px-6 py-32">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl mb-16 text-center"
          >
            Why Team Souls?
          </motion.h2>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-12"
          >
            {['Trust', 'Collaboration', 'Execution'].map((title, index) => {
              const descriptions = [
                'Built on friendship and shared values. We treat your ideas like our own.',
                'We work with you, not for you. Your vision, our execution.',
                'We ship. Fast iterations, real products, actual results.',
              ];
              
              return (
                <motion.div
                  key={title}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-white/30 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </motion.div>
                  <h3 className="text-xl mb-3">{title}</h3>
                  <p className="text-white/60">{descriptions[index]}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
