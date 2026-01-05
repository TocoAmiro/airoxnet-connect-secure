import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import airoxnetLogo from "@/assets/airoxnet-logo.jpg";

const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-border/20 relative overflow-hidden">
      {/* Speed line decoration */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="w-12 h-12 rounded-xl overflow-hidden">
            <img src={airoxnetLogo} alt="AiroxNet" className="w-full h-full object-cover" />
          </div>
          <span className="text-2xl font-black text-foreground">آیروکس‌نت</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
        >
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">اینترنت فوق سریع و امن</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="glow-line max-w-xs mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-muted-foreground/60 text-sm"
        >
          © {new Date().getFullYear()} AiroxNet. تمامی حقوق محفوظ است.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
