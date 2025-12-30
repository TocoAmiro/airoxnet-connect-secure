import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Infinity, Database, Sparkles } from "lucide-react";

const plans = [
  {
    icon: Infinity,
    name: "پلن نامحدود",
    duration: "یک ماهه",
    price: "۱۲۰,۰۰۰",
    features: ["ترافیک نامحدود", "سرعت بالا", "پشتیبانی ۲۴/۷"],
    popular: true,
  },
  {
    icon: Database,
    name: "پلن ۵۰ گیگابایت",
    duration: "یک ماهه",
    price: "۹۹,۰۰۰",
    features: ["۵۰ گیگابایت ترافیک", "سرعت بالا", "پشتیبانی ۲۴/۷"],
    popular: false,
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 relative">
      {/* Background Glow - Static */}
      <div className="floating-glow w-96 h-96 bg-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute opacity-10" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
        >
          قیمت <span className="text-primary">سرویس‌ها</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
          className="text-muted-foreground text-center mb-16 max-w-lg mx-auto"
        >
          قیمت‌ها ممکن است با توجه به شرایط ارزی و هزینه سرورها به‌روزرسانی شوند
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: 0.1 + index * 0.08,
                ease: "easeOut",
              }}
              className={`glass-card-hover p-8 relative ${
                plan.popular ? "border-primary/50" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-6 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-xs font-medium text-primary-foreground flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  محبوب‌ترین
                </div>
              )}

              <div className="icon-circle w-14 h-14 mb-6">
                <plan.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-semibold mb-2 text-foreground">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{plan.duration}</p>

              <div className="mb-8">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground mr-2">تومان</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://t.me/AIroxNetBot"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button w-full flex items-center justify-center gap-2 text-primary-foreground"
              >
                <span>سفارش از ربات</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z"/>
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
