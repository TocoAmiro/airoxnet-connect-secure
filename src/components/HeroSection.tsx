import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 overflow-hidden">
      {/* Animated Speed Lines Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            style={{
              top: `${15 + i * 10}%`,
              width: `${100 + Math.random() * 150}px`,
            }}
            animate={{
              x: ["-100px", "100vw"],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + i * 0.4,
              delay: i * 0.6,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating Glows */}
      <motion.div
        className="floating-glow w-[500px] h-[500px] bg-primary -top-48 -right-48 absolute"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="floating-glow w-[400px] h-[400px] bg-accent -bottom-36 -left-36 absolute"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center z-10 max-w-3xl mx-auto"
      >
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
        >
          <span className="text-gradient">اینترنت</span>
          <br />
          <span className="text-foreground">بدون محدودیت</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-4"
        >
          وصل شو، کارتو بکن، تموم.
        </motion.p>

        {/* Glow Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glow-line max-w-xs mx-auto mb-10"
        />

        {/* CTA Button */}
        <motion.a
          href="https://t.me/AIroxNetBot"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="glass-button inline-flex items-center gap-3 text-primary-foreground text-lg md:text-xl"
        >
          <Rocket className="w-5 h-5" />
          <span>خرید سریع و فعال‌سازی آنی</span>
        </motion.a>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8 text-sm text-muted-foreground"
        >
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            فعال‌سازی آنی
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            بدون ذخیره لاگ
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            پشتیبانی ۲۴/۷
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-primary/40 flex items-start justify-center p-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
