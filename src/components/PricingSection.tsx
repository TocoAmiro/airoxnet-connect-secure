import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Infinity as InfinityIcon, Check, Zap } from "lucide-react";

const planFeatures = [
  "ترافیک نامحدود",
  "سرعت فوق‌العاده",
  "پشتیبانی ۲۴/۷",
  "تک‌کاربره",
  "بدون ذخیره لاگ",
  "فعال‌سازی آنی",
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="pricing" ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Background Glow */}
      <motion.div
        className="floating-glow w-[500px] h-[500px] bg-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="max-w-lg mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">تعرفه ساده و شفاف</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-black mb-4">
            یک پلن، <span className="text-gradient">نامحدود</span>
          </h2>
        </motion.div>

        {/* Single Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-8 border-2 border-primary/40 relative"
        >
          {/* Neon Pulse Effect */}
          <div className="absolute inset-0 rounded-2xl neon-pulse opacity-50" />

          {/* Icon */}
          <motion.div
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent p-[3px]"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
              <InfinityIcon className="w-10 h-10 text-primary" strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Plan Name */}
          <h3 className="text-2xl font-bold text-center mb-2 text-foreground">پلن نامحدود</h3>
          <p className="text-sm text-muted-foreground text-center mb-6">ماهانه • تک‌کاربره</p>

          {/* Price */}
          <div className="text-center mb-8">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl md:text-6xl font-black text-foreground">۳۸۰,۰۰۰</span>
              <span className="text-muted-foreground text-lg">تومان</span>
            </div>
          </div>

          {/* Features */}
          <ul className="space-y-3 mb-8">
            {planFeatures.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-foreground/80">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <motion.a
            href="https://t.me/AIroxNetBot"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="glass-button w-full flex items-center justify-center gap-2 text-primary-foreground text-lg"
          >
            <span>می‌خوام وصل شم</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z"/>
            </svg>
          </motion.a>
        </motion.div>

        {/* Simple Path */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-muted-foreground text-sm">
            خرید → دریافت اپ → اتصال
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
