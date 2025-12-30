import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card p-8 md:p-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
          >
            درباره <span className="text-primary">آیروکس‌نت</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-foreground/80 leading-relaxed text-lg"
          >
            <p>
              <strong className="text-foreground">آیروکس‌نت</strong> نام تجاری معتبر در حوزه ارائه سرویس‌های اینترنت امن و پایدار است. ما با بهره‌گیری از فناوری‌های پیشرفته VPN و V2Ray، خدماتی با کیفیت بالا، سرعت مطلوب و امنیت بی‌نظیر ارائه می‌دهیم.
            </p>
            <p>
              تمرکز اصلی ما بر <strong className="text-primary">کیفیت</strong>، <strong className="text-primary">شفافیت</strong> و <strong className="text-primary">پشتیبانی مسئولانه</strong> است. هر سرویس با دقت بالا پیکربندی شده و پشتیبانی ۲۴ ساعته در اختیار کاربران قرار دارد.
            </p>
          </motion.div>

          {/* Glow Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glow-line my-10"
          />

          {/* Founder Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold mb-4 text-foreground">بنیان‌گذار</h3>
            <div className="inline-flex items-center gap-4 glass-card p-4 px-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl font-bold">
                ا
              </div>
              <div className="text-right">
                <p className="font-semibold text-foreground">امیرمحمد</p>
                <p className="text-sm text-muted-foreground">۱۶ ساله، خلاق و متعهد به کیفیت</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
