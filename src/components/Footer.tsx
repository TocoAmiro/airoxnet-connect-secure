import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <Shield className="w-6 h-6 text-primary" strokeWidth={1.5} />
          <span className="text-xl font-semibold text-foreground">آیروکس‌نت</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-sm mb-4"
        >
          اینترنت امن، پایدار و مدرن
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="glow-line max-w-xs mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-muted-foreground/60 text-xs"
        >
          © {new Date().getFullYear()} AiroxNet. تمامی حقوق محفوظ است.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
