import { motion } from "framer-motion";
import { Instagram, Send, Users, MessageCircle } from "lucide-react";
import airoxnetLogo from "@/assets/airoxnet-logo.jpg";

const socialLinks = [
  {
    icon: Send,
    name: "ربات",
    url: "https://t.me/AIroxNetBot",
  },
  {
    icon: Users,
    name: "کانال",
    url: "https://t.me/AIroxNet",
  },
  {
    icon: MessageCircle,
    name: "پشتیبانی",
    url: "https://t.me/AiroxNet_Sports",
  },
  {
    icon: Instagram,
    name: "اینستا",
    url: "https://www.instagram.com/airox_net",
  },
];

// Get Persian date
const getPersianDate = () => {
  const date = new Date();
  const persianDate = new Intl.DateTimeFormat('fa-IR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
  return persianDate;
};

const Footer = () => {
  return (
    <footer id="support" className="py-16 px-4 border-t border-border/20 relative overflow-hidden">
      {/* Speed Line Decoration */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Logo & Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden">
            <img src={airoxnetLogo} alt="AiroxNet" className="w-full h-full object-cover" />
          </div>
          <span className="text-xl font-bold text-foreground">آیروکس‌نت</span>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="icon-circle w-10 h-10"
            >
              <link.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </motion.a>
          ))}
        </motion.div>

        {/* Glow Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="glow-line max-w-xs mx-auto mb-8"
        />

        {/* Status & Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
            <span className="flex items-center gap-2">
              <motion.span
                className="w-2 h-2 rounded-full bg-green-500"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-sm text-green-500 font-medium">وضعیت سرویس: پایدار</span>
            </span>
            <span className="text-muted-foreground text-sm">|</span>
            <span className="text-sm text-muted-foreground">{getPersianDate()}</span>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-muted-foreground/60 text-sm text-center"
        >
          © {new Date().getFullYear()} AiroxNet. تمامی حقوق محفوظ است.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
