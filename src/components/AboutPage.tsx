import { Mail, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export function AboutPage() {
  const founders = [
    {
      name: 'Lakshya Patel',
      role: 'Co-Founder & Product Manager',
      bio: 'Thinks in products, communicates in systems, builds with intent. Dropped out to build. Believes every product should tell a story.',
      focus: 'Product strategy, design systems, user experience',
      email: '23f3001274@ds.study.iitm.ac.in',
      linkedin: 'https://www.linkedin.com/in/lakshya-patel-lp/',
      instagram: 'https://www.instagram.com/__lakshya.patel?igsh=ZGJwaWNndTg5YnR6',
    },
    {
      name: 'Amitesh Yadav',
      role: 'Co-Founder & Technical Head',
      bio: 'Former techie who designs systems that lasts, turned founder. Ships code at 3am, thinks about architecture at 3pm.',
      focus: 'Technical architecture, infrastructure, rapid prototyping',
      email: 'amiteshyadav24042022@gmail.com',
      linkedin: 'https://www.linkedin.com/in/amitesh-yadav-22784236b/',
      instagram: 'https://instagram.com/jordanships',
    },
  ];

  const teamMembers = [
    {
      name: 'Riley Martinez',
      role: 'Lead Designer',
      bio: 'Pixel perfectionist with a love for minimalism. Designs interfaces that feel invisible.',
      skills: 'UI/UX, Brand identity, Design systems',
      email: 'riley@teamsouls.co',
      linkedin: 'https://linkedin.com/in/rileymartinez',
      instagram: 'https://instagram.com/rileydesigns',
    },
    {
      name: 'Sam Okafor',
      role: 'Full-Stack Developer',
      bio: 'Builds fast, breaks things, fixes them faster. Loves clean code and messy whiteboards.',
      skills: 'React, Node.js, Database design, APIs',
      email: 'sam@teamsouls.co',
      linkedin: 'https://linkedin.com/in/samokafor',
      instagram: 'https://instagram.com/samcodes',
    },
    {
      name: 'Casey Lin',
      role: 'Community & Growth',
      bio: 'Storyteller turned builder. Connects with users, shares our journey, grows the community.',
      skills: 'Content strategy, Community building, Social media',
      email: 'casey@teamsouls.co',
      linkedin: 'https://linkedin.com/in/caseylin',
      instagram: 'https://instagram.com/caseyshares',
    },
    {
      name: 'Morgan Webb',
      role: 'Strategy & Operations',
      bio: 'Keeps the chaos organized. Turns ideas into actionable plans and makes sure we ship on time.',
      skills: 'Project management, Client relations, Process optimization',
      email: 'morgan@teamsouls.co',
      linkedin: 'https://linkedin.com/in/morganwebb',
      instagram: 'https://instagram.com/morganbuilds',
    },
  ];

  return (
    <div className="pt-32 px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl mb-12"
          >
            How Team Souls Started?
          </motion.h1>
          
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
            className="space-y-8 text-lg text-white/70 leading-relaxed"
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Team Souls didn’t start as a company.<br></br>It started as two friends—after classes, on weekends, in between everything else—building things whenever we could find the time.
            </motion.p>
            
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              We were tired of products that felt empty, teams built without trust, and projects that turned into transactions instead of collaborations. So we decided to build differently.
            </motion.p>
            
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Our first project wasn’t planned. We built it just to see if we could. Then we built another. And then another. Somewhere along the way, people started asking if we could help them build too. That’s when Team Souls stopped being “just us” and became something real.
            </motion.p>
            
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Today, Team Souls is a small collective focused on one thing: building products that matter.
              No corporate speak. No unnecessary complexity. Just honest work, good code, and real collaboration.
            </motion.p>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              className="pt-8 border-l-2 border-white/20 pl-6 italic"
            >
              <p className="text-white">
                "We're not trying to be the biggest. <br></br>We're trying to be the team we'd want to work with."
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Founders Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          className="mb-32"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-3xl md:text-4xl mb-12"
          >
            The Founders
          </motion.h2>
          
          <div className="space-y-12">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="p-8 md:p-12 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Avatar Placeholder */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/20 shrink-0"
                  ></motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl mb-2">{founder.name}</h3>
                    <p className="text-white/60 mb-6">{founder.role}</p>
                    <p className="text-white/70 mb-6">{founder.bio}</p>
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-sm text-white/50">Focus areas</p>
                      <p className="text-white/70 mt-2">{founder.focus}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/10">
                      <motion.a
                        whileHover={{ scale: 1.2, y: -2 }}
                        href={`mailto:${founder.email}`}
                        className="text-white/60 hover:text-white transition-colors"
                        title="Email"
                      >
                        <Mail size={20} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.2, y: -2 }}
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors"
                        title="LinkedIn"
                      >
                        <Linkedin size={20} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.2, y: -2 }}
                        href={founder.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors"
                        title="Instagram"
                      >
                        <Instagram size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Members Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="mb-32"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-3xl md:text-4xl mb-12"
          >
            The Team
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shrink-0"
                  ></motion.div>
                  <div>
                    <h3 className="text-xl mb-1">{member.name}</h3>
                    <p className="text-sm text-white/60">{member.role}</p>
                  </div>
                </div>
                <p className="text-white/70 mb-4">{member.bio}</p>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-white/50 mb-2">Skills</p>
                  <p className="text-sm text-white/60">{member.skills}</p>
                </div>
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10">
                  <motion.a
                    whileHover={{ scale: 1.2, y: -2 }}
                    href={`mailto:${member.email}`}
                    className="text-white/60 hover:text-white transition-colors"
                    title="Email"
                  >
                    <Mail size={18} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, y: -2 }}
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, y: -2 }}
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors"
                    title="Instagram"
                  >
                    <Instagram size={18} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Vision Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-32"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="p-12 rounded-2xl bg-white/[0.02] border border-white/10 text-center hover:border-white/20 hover:bg-white/[0.04] transition-all"
          >
            <h2 className="text-2xl md:text-3xl mb-6">Building Together</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Team Souls exists because we believe the best products come from friendship, 
              shared vision, and the courage to build in public. We're here for the journey, 
              not just the destination.
            </p>
          </motion.div>
        </motion.section>

        {/* Join the Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="p-8 md:p-12 rounded-2xl border border-white/20 bg-gradient-to-br from-white/[0.04] to-white/[0.01] text-center hover:border-white/30 transition-colors">
            <h2 className="text-2xl md:text-3xl mb-4">Want to Join Us?</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
              We're always looking for builders who share our values. If you're passionate about creating 
              meaningful products and want to be part of something real, we'd love to hear from you.
            </p>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="grid md:grid-cols-3 gap-6 mb-8 text-left max-w-3xl mx-auto"
            >
              {['Builders over talkers', 'Learning over knowing', 'Real work over credentials'].map((value) => (
                <motion.div
                  key={value}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-4 rounded-lg bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors"
                >
                  <p className="text-sm text-white/50 mb-2">We value</p>
                  <p className="text-white/80">{value}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              href="mailto:join@teamsouls.co?subject=Interested in Joining Team Souls"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-lg hover:bg-white/90 transition-colors"
            >
              Apply to Join the Team
            </motion.a>
            
            <p className="text-sm text-white/40 mt-6">
              Send us your story, what you build, and why Team Souls resonates with you.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}