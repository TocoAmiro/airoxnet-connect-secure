import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Users, Instagram } from "lucide-react";

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

const FloatingSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-20 left-0 glass-card p-5 min-w-[280px]"
          >
            <div className="mb-4">
              <h3 className="font-semibold text-foreground mb-1">پشتیبانی آیروکس‌نت</h3>
              <p className="text-sm text-muted-foreground">سلام! سوالی داری؟ همینجا با ما چت کن!</p>
            </div>

            <div className="space-y-2">
              {supportLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/10 transition-colors group"
                >
                  <div className="icon-circle w-10 h-10">
                    <link.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="text-foreground/80 group-hover:text-primary transition-colors">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover Label */}
      <AnimatePresence>
        {isHovered && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
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
        className="relative w-16 h-16 rounded-full glass-card flex items-center justify-center group overflow-hidden"
        style={{
          background: isOpen
            ? "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(220, 80%, 50%) 100%)"
            : undefined,
        }}
      >
        {/* Pulse Animation */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/20"
            animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}

        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-primary-foreground" />
          ) : (
            <svg className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z"/>
            </svg>
          )}
        </motion.div>
      </motion.button>
    </div>
  );
};

export default FloatingSupport;
