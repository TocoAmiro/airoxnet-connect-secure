import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Eye, HeartHandshake, Rocket, Globe } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "سرعت برق‌آسا",
    description: "اتصال فوری و سرعت بالا برای تجربه بهتر",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Shield,
    title: "امنیت بی‌نظیر",
    description: "رمزنگاری پیشرفته و محافظت کامل",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Globe,
    title: "دسترسی جهانی",
    description: "سرورهای پرسرعت در سراسر دنیا",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Eye,
    title: "حریم خصوصی",
    description: "بدون ذخیره لاگ و اطلاعات کاربر",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: HeartHandshake,
    title: "پشتیبانی ۲۴/۷",
    description: "پاسخگویی سریع و مسئولانه",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: Rocket,
    title: "فناوری پیشرفته",
    description: "استفاده از جدیدترین پروتکل‌ها",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
];

const ValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Speed lines background */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            style={{ top: `${25 + i * 20}%` }}
            animate={{ x: ["-50%", "50%"] }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            چرا <span className="text-gradient">آیروکس‌نت؟</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            ویژگی‌هایی که ما را متفاوت می‌کند
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{ y: -5 }}
              className="glass-card-hover p-6 group"
            >
              <motion.div
                className={`icon-circle w-14 h-14 mb-5 ${value.bgColor}`}
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <value.icon className={`w-7 h-7 ${value.color}`} strokeWidth={2} />
              </motion.div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
