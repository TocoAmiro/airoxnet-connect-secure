import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Users, Instagram } from "lucide-react";
import supportLogo from "@/assets/airoxnet-support.png";

const supportLinks = [
  {
    icon: MessageCircle,
    name: "پشتیبانی مستقیم",
    url: "https://t.me/AiroxNet_Sports",
  },
  {
    icon: Send,
    name: "ربات تلگرام",
    url: "https://t.me/AIroxNetBot",
  },
  {
    icon: Users,
    name: "کانال رسمی",
    url: "https://t.me/AIroxNet",
  },
  {
    icon: Instagram,
    name: "اینستاگرام",
    url: "https://www.instagram.com/airox_net",
  },
];

// Motion-compatible link component
const MotionLink = motion.a;

const FloatingSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
            className="absolute bottom-20 left-0 glass-card p-5 min-w-[280px]"
          >
            <div className="mb-4">
              <h3 className="font-semibold text-foreground mb-1">پشتیبانی آیروکس‌نت</h3>
              <p className="text-sm text-muted-foreground">سلام! سوالی داری؟ همینجا با ما چت کن!</p>
            </div>

            <div className="space-y-2">
              {supportLinks.map((link, index) => (
                <MotionLink
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03, duration: 0.15 }}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/10 transition-colors group"
                >
                  <div className="icon-circle w-10 h-10">
                    <link.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="text-foreground/80 group-hover:text-primary transition-colors">
                    {link.name}
                  </span>
                </MotionLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover Label */}
      <AnimatePresence mode="wait">
        {isHovered && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 5 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-4 left-20 glass-card px-4 py-2 whitespace-nowrap"
          >
            <span className="text-sm text-foreground">پشتیبانی آنلاین آیروکس‌نت</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.15, ease: [0.33, 1, 0.68, 1] }}
        className="relative w-16 h-16 rounded-full glass-card flex items-center justify-center group overflow-hidden"
        style={{
          background: isOpen
            ? "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(220, 80%, 50%) 100%)"
            : undefined,
        }}
      >
        {/* Pulse Animation - Simplified */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-30" />
        )}

        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.15 }}
          className="w-full h-full flex items-center justify-center"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-primary-foreground" />
          ) : (
            <img 
              src={supportLogo} 
              alt="پشتیبانی آیروکس‌نت" 
              className="w-12 h-12 object-contain rounded-full"
            />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
};

export default FloatingSupport;
