import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, CheckCircle, Shield, Zap, Smartphone } from "lucide-react";

const AppSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleDownload = () => {
    // Direct APK download link - update this with actual APK URL
    const apkUrl = "https://t.me/AIroxNetBot"; // Replace with actual APK URL when available
    window.open(apkUrl, "_blank");
  };

  return (
    <section id="app" ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Background Glow */}
      <motion.div
        className="floating-glow w-[400px] h-[400px] bg-accent -bottom-32 -right-32 absolute"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-10 border-2 border-primary/30 text-center"
        >
          {/* App Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative inline-block mb-6"
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
            <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl">
              <Smartphone className="w-12 h-12 text-primary-foreground" strokeWidth={1.5} />
            </div>

            {/* Active Badge */}
            <motion.div
              className="absolute -top-2 -right-2 flex items-center gap-1 px-2 py-1 rounded-full bg-green-500 text-white text-xs font-bold shadow-lg"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <CheckCircle className="w-3 h-3" />
              فعال
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold mb-2"
          >
            اپ اختصاصی <span className="text-gradient">آیروکس نت</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-muted-foreground mb-6"
          >
            نصب کن، وصل شو، تموم ✔️
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {[
              { icon: Shield, text: "اتصال با یک کلیک" },
              { icon: Zap, text: "سرعت بالا" },
              { icon: CheckCircle, text: "رابط ساده" },
            ].map((feature, index) => (
              <div
                key={feature.text}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-primary/10 border border-primary/20"
              >
                <feature.icon className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Download Button */}
          <motion.button
            onClick={handleDownload}
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="glass-button inline-flex items-center gap-3 text-primary-foreground text-lg mb-4"
          >
            <Download className="w-5 h-5" />
            <span>⬇️ دانلود مستقیم اپ اندروید</span>
          </motion.button>

          {/* Small Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xs text-muted-foreground mb-4"
          >
            نسخه رسمی • بدون تبلیغ • آپدیت منظم
          </motion.p>

          {/* Install Guide */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="p-3 rounded-xl bg-accent/10 border border-accent/20"
          >
            <p className="text-sm text-accent">
              💡 قبل نصب، اجازه نصب از منابع ناشناس رو فعال کن
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppSection;
