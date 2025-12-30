import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Eye, HeartHandshake } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "امنیت",
    description: "رمزنگاری پیشرفته و محافظت از حریم خصوصی شما",
  },
  {
    icon: Zap,
    title: "پایداری",
    description: "اتصال پایدار و بدون قطعی در هر شرایطی",
  },
  {
    icon: Eye,
    title: "شفافیت",
    description: "قیمت‌گذاری شفاف و بدون هزینه‌های پنهان",
  },
  {
    icon: HeartHandshake,
    title: "اعتماد",
    description: "پشتیبانی مسئولانه و پاسخگویی سریع",
  },
];

const ValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          ارزش‌های <span className="text-primary">ما</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass-card-hover p-6 text-center"
            >
              <div className="icon-circle w-16 h-16 mx-auto mb-5">
                <value.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
