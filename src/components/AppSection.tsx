import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, CheckCircle, Shield, Zap, Download } from "lucide-react";

const appFeatures = [
  { icon: Shield, text: "اتصال با یک کلیک" },
  { icon: Zap, text: "سرعت بالا و پایدار" },
  { icon: CheckCircle, text: "رابط کاربری ساده" },
];

const AppSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <motion.div
        className="floating-glow w-[400px] h-[400px] bg-primary -bottom-32 -right-32 absolute"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="glass-card p-8 md:p-12 border-2 border-primary/30"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* App Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              {/* Glow Ring */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary to-accent opacity-50 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* App Icon Box */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl">
                <Smartphone className="w-16 h-16 md:w-20 md:h-20 text-primary-foreground" strokeWidth={1.5} />
              </div>

              {/* Active Badge */}
              <motion.div
                className="absolute -top-3 -right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500 text-white text-sm font-bold shadow-lg"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-white"
                  animate={{
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                فعال
              </motion.div>
            </motion.div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-right">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-3xl md:text-4xl font-black mb-4">
                  اپلیکیشن اختصاصی <span className="text-gradient">آیروکس</span>
                </h2>
                
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  با اپلیکیشن اختصاصی آیروکس‌نت، تجربه‌ای ساده و سریع از اتصال به سرورها داشته باشید.
                  همه امکانات در یک برنامه کاربرپسند.
                </p>

                {/* Features */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                  {appFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.text}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
                    >
                      <feature.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Download Button */}
                <motion.a
                  href="https://t.me/AIroxNetBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass-button inline-flex items-center gap-3 text-primary-foreground"
                >
                  <Download className="w-5 h-5" />
                  <span>دریافت اپلیکیشن</span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppSection;
