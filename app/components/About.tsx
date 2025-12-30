import Section from "./Section";
import { motion } from "framer-motion";
import "./about.css";

const About: React.FC = () => {
  return (
    <Section
      id="about"
      className="about-section py-24 px-6 md:px-16 overflow-hidden bg-main text-main"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left column */}
        <div className="space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="about-heading text-main"
          >
            What is Regatta?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="edition-block"
          >
            <span className="pulse-dot" />

            <div className="text-sm tracking-widest uppercase text-muted">
              Since 1928
            </div>

            <div className="text-3xl font-semibold text-main">
              98<sup>th</sup> Regatta
            </div>

            <div className="text-accent font-medium">
              Legacy in Motion
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="about-intro text-muted"
          >
            COEP Technological University, Asia&apos;s third-oldest academic
            institution, proudly hosts the COEP Regatta—India&apos;s
            longest-running college festival. Since 1928, it has stood as a
            symbol of endurance, teamwork, and excellence on water.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="about-prose space-y-6 text-main"
        >
          <p>
            Recognized in the Limca Book of Records as India&apos;s Oldest College
            Festival, the Regatta attracts over 12,000 spectators annually. Each
            edition builds upon the legacy of those before it, carrying forward
            nearly a century of tradition.
          </p>

          <p>
            From the elegance of Kayak Ballet and the precision of Shell Games to
            the artistic Punt Formations and thrilling Tele-matches, the event is
            a seamless blend of athleticism and artistry.
          </p>

          <p>
            The iconic Mashaal Dance remains the soul of the Regatta—a luminous
            spectacle where flaming torches glide across the water, symbolizing
            unity, resilience, and the unbroken flow of tradition.
          </p>

          <p className="text-muted">
            As the Regatta enters its 98th edition,{" "}
            <strong className="text-main">Legacy in Motion</strong> reflects a
            journey where history propels movement, and every stroke carries the
            spirit of generations past into the future.
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;