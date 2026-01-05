import { motion } from "framer-motion";
import { Wifi, Lock, Shield, Zap, Rocket } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import airoxnetLogo from "@/assets/airoxnet-logo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Theme Toggle */}
      <div className="absolute top-6 left-6 z-20">
        <ThemeToggle />
      </div>

      {/* Animated Speed Lines Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            style={{
              top: `${20 + i * 12}%`,
              width: `${150 + Math.random() * 100}px`,
            }}
            animate={{
              x: ["-100px", "100vw"],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              delay: i * 0.8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating Glows with animation */}
      <motion.div
        className="floating-glow w-[500px] h-[500px] bg-primary -top-48 -right-48 absolute"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="floating-glow w-[400px] h-[400px] bg-accent -bottom-36 -left-36 absolute"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center z-10"
      >
        {/* Logo with neon effect */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.div
            className="inline-flex items-center justify-center w-36 h-36 md:w-44 md:h-44 rounded-3xl glass-card overflow-hidden p-2 neon-pulse"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <img 
              src={airoxnetLogo} 
              alt="AiroxNet Logo" 
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Brand Name with animated gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-black mb-4 tracking-tight"
        >
          <span className="text-gradient">آیروکس‌نت</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          className="text-2xl md:text-3xl text-primary font-bold mb-6 tracking-wider"
        >
          AiroxNet
        </motion.p>

        {/* Glow Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="glow-line max-w-sm mx-auto mb-8"
        />

        {/* Tagline with speed emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="text-xl md:text-2xl text-foreground/90 mb-2 font-medium">
            اینترنت <span className="text-primary font-bold">فوق سریع</span>، امن و بدون محدودیت
          </p>
          <p className="text-muted-foreground text-base md:text-lg">
            تجربه سرعت واقعی با فناوری پیشرفته V2Ray
          </p>
        </motion.div>

        {/* Feature Icons with enhanced design */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="flex items-center justify-center gap-4 md:gap-8 mb-12 flex-wrap"
        >
          {[
            { icon: Zap, label: "سرعت بالا", color: "text-yellow-500" },
            { icon: Shield, label: "امنیت", color: "text-primary" },
            { icon: Wifi, label: "پایداری", color: "text-green-500" },
            { icon: Lock, label: "حریم خصوصی", color: "text-accent" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + index * 0.1 }}
            >
              <motion.div
                className="icon-circle w-16 h-16"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <item.icon className={`w-7 h-7 ${item.color}`} strokeWidth={2} />
              </motion.div>
              <span className="text-sm font-medium text-foreground/80">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button with rocket icon */}
        <motion.a
          href="https://t.me/AIroxNetBot"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="glass-button inline-flex items-center gap-3 text-primary-foreground text-lg"
        >
          <Rocket className="w-5 h-5" />
          <span>همین الان شروع کن</span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z"/>
          </svg>
        </motion.a>
      </motion.div>

      {/* Scroll Indicator with pulse */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          className="w-7 h-12 rounded-full border-2 border-primary/50 flex items-start justify-center p-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-2 h-2 rounded-full bg-primary"
            animate={{ y: [0, 16, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
