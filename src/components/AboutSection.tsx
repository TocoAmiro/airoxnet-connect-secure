import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Clock, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: "۵۰۰+", label: "کاربر فعال" },
  { icon: Clock, value: "۲۴/۷", label: "پشتیبانی" },
  { icon: TrendingUp, value: "۹۹.۹٪", label: "آپتایم" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Animated glow */}
      <motion.div
        className="floating-glow w-[400px] h-[400px] bg-accent top-0 right-0"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="glass-card p-8 md:p-12"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              درباره <span className="text-gradient">آیروکس‌نت</span>
            </h2>
            <div className="glow-line max-w-xs mx-auto" />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-foreground/80 leading-relaxed text-lg text-center max-w-3xl mx-auto mb-12"
          >
            <p>
              <strong className="text-primary">آیروکس‌نت</strong> یک برند معتبر در ارائه سرویس‌های 
              <strong className="text-foreground"> VPN و V2Ray </strong>
              با کیفیت بالا، سرعت فوق‌العاده و امنیت بی‌نظیر است.
            </p>
            <p className="text-muted-foreground">
              ما با استفاده از پیشرفته‌ترین فناوری‌ها و سرورهای قدرتمند، بهترین تجربه اینترنت امن را برای شما فراهم می‌کنیم.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-3 gap-4 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 rounded-2xl bg-primary/5 border border-primary/10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-2xl md:text-3xl font-black text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Founder Section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent font-medium">بنیان‌گذار</span>
            </div>
            
            <motion.div
              className="inline-flex items-center gap-4 glass-card p-5 px-8"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-black text-primary-foreground">
                ا
              </div>
              <div className="text-right">
                <p className="font-bold text-lg text-foreground">امیرمحمد</p>
                <p className="text-sm text-muted-foreground">۱۶ ساله، متعهد به کیفیت و نوآوری</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
