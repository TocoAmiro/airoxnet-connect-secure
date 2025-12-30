import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, MessageCircle, Send, Users } from "lucide-react";

const links = [
  {
    icon: Send,
    name: "ربات تلگرام",
    description: "خرید و تمدید سرویس",
    url: "https://t.me/AIroxNetBot",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Users,
    name: "کانال رسمی",
    description: "اخبار و آپدیت‌ها",
    url: "https://t.me/AIroxNet",
    color: "from-blue-400 to-blue-500",
  },
  {
    icon: MessageCircle,
    name: "پشتیبانی",
    description: "پاسخگویی ۲۴/۷",
    url: "https://t.me/AiroxNet_Sports",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Instagram,
    name: "اینستاگرام",
    description: "@Airox_net",
    url: "https://www.instagram.com/airox_net",
    color: "from-pink-500 to-purple-600",
  },
];

const SocialLinks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          راه‌های <span className="text-primary">ارتباطی</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass-card-hover p-5 flex items-center gap-4 group"
            >
              <div className={`icon-circle w-12 h-12 bg-gradient-to-br ${link.color} border-0`}>
                <link.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <div className="flex-1 text-right">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {link.name}
                </h3>
                <p className="text-sm text-muted-foreground">{link.description}</p>
              </div>
              <svg
                className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
