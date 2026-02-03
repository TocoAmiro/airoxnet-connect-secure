import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingSupport = () => {
  return (
    <motion.a
      href="https://t.me/AiroxNet_Sports"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-50 glass-card px-5 py-3 flex items-center gap-3 group"
    >
      {/* Pulse Ring */}
      <div className="absolute inset-0 rounded-2xl bg-primary/20 animate-ping opacity-30" />
      
      {/* Icon */}
      <div className="relative icon-circle w-10 h-10 bg-primary/20">
        <MessageCircle className="w-5 h-5 text-primary" strokeWidth={2} />
      </div>

      {/* Text */}
      <div className="relative text-right">
        <p className="text-sm font-medium text-foreground">💬 خرید و پشتیبانی</p>
        <p className="text-xs text-primary">@AiroxNet_Sports</p>
      </div>
    </motion.a>
  );
};

export default FloatingSupport;
