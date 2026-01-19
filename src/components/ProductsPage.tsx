import { Clock, Sparkles, Lock } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { SubscribeModal } from './SubscribeModal';
import { RoadmapModal } from './RoadmapModal';

export function ProductsPage() {
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [showRoadmapModal, setShowRoadmapModal] = useState(false);

  const products = [
    {
      name: 'SuprServices',
      status: 'In Progress',
      description: 'A hands-on freelancing studio working with local businesses and teams. We handle both creative and technical work—design, development, automation, and systems, focusing on practical solutions that actually get used.',
      icon: Clock,
      color: 'from-blue-500/20 to-blue-600/20 border-blue-500/30',
      iconColor: 'text-blue-400',
    },
    {
      name: 'SmartScriber',
      status: 'Launching Soon',
      description: 'A smart purchases tracker that automatically detects bills and receipts from Gmail, organizes spending, and generates clear insights—built to help users understand where their money goes without manual tracking.',
      icon: Sparkles,
      color: 'from-purple-500/20 to-purple-600/20 border-purple-500/30',
      iconColor: 'text-purple-400',
    },
    {
      name: 'CodeConnect',
      status: 'Early Stage',
      description: 'Something different. Can\'t share details yet, but we\'re excited about where this is going.',
      icon: Lock,
      color: 'from-white/10 to-white/5 border-white/20',
      iconColor: 'text-white/60',
    },
  ];

  return (
    <div className="pt-32 px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl mb-6"
          >
            Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-white/60 max-w-3xl"
          >
            Products we're building for ourselves and the community. These are evolving, not finished. 
            We ship when ready, not when rushed.
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ duration: 0.3 }}
              className={`p-8 rounded-2xl border bg-gradient-to-br ${product.color} relative overflow-hidden group cursor-pointer`}
            >
              <motion.div
                animate={{
                  rotate: [0, 10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  delay: index * 0.5,
                }}
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full"
              ></motion.div>
              
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <product.icon className={`mb-6 ${product.iconColor}`} size={32} />
              </motion.div>
              
              <div className="mb-3">
                <span className="px-3 py-1 rounded-full border border-white/20 bg-white/10 text-xs">
                  {product.status}
                </span>
              </div>
              
              <h3 className="text-xl mb-3">{product.name}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Build in Public Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="bg-white/[0.02] border border-white/10 rounded-2xl p-12 text-center hover:border-white/20 hover:bg-white/[0.04] transition-all"
        >
          <h2 className="text-2xl md:text-3xl mb-6">Building in Public</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            We share progress, learnings, and setbacks as we build. Follow us for real-time updates 
            on what we're shipping and why.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-black rounded-lg hover:bg-white/90 transition-colors"
              onClick={() => setShowSubscribeModal(true)}
            >
              Subscribe to Updates
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/5 hover:border-white/40 transition-all"
              onClick={() => setShowRoadmapModal(true)}
            >
              View Roadmap
            </motion.button>
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {[
            { title: 'Ship When Ready', desc: "We don't rush launches. Quality matters more than timelines." },
            { title: 'Iterate Constantly', desc: 'Every product is a living thing. We improve based on real usage.' },
            { title: 'Community First', desc: 'We build for people who care as much as we do.' },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -10 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 180 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-white/30 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
              </motion.div>
              <h3 className="mb-2">{item.title}</h3>
              <p className="text-sm text-white/60">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modals */}
      {showSubscribeModal && <SubscribeModal onClose={() => setShowSubscribeModal(false)} />}
      {showRoadmapModal && <RoadmapModal onClose={() => setShowRoadmapModal(false)} />}
    </div>
  );
}