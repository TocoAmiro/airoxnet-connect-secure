import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Infinity as InfinityIcon, Database, Sparkles, Zap, Check } from "lucide-react";

const plans = [
  {
    icon: InfinityIcon,
    name: "پلن نامحدود",
    duration: "یک ماهه",
    price: "۱۲۰,۰۰۰",
    features: ["ترافیک نامحدود", "سرعت فوق‌العاده", "پشتیبانی ۲۴/۷", "بدون محدودیت دستگاه"],
    popular: true,
    gradient: "from-primary via-accent to-primary",
  },
  {
    icon: Database,
    name: "پلن ۵۰ گیگابایت",
    duration: "یک ماهه",
    price: "۹۹,۰۰۰",
    features: ["۵۰ گیگابایت ترافیک", "سرعت بالا", "پشتیبانی ۲۴/۷", "۲ دستگاه همزمان"],
    popular: false,
    gradient: "from-primary to-blue-500",
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="floating-glow w-[600px] h-[600px] bg-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">بهترین قیمت‌ها</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            انتخاب <span className="text-gradient">پلن شما</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            با بهترین قیمت و بالاترین کیفیت، اینترنت امن و سریع را تجربه کنید
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.15,
                ease: "easeOut",
              }}
              className={`glass-card-hover p-8 relative ${
                plan.popular ? "border-primary/50 md:scale-105" : ""
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-sm font-bold text-primary-foreground flex items-center gap-2 shadow-lg"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-4 h-4" />
                  پرفروش‌ترین
                </motion.div>
              )}

              {/* Icon */}
              <motion.div
                className={`icon-circle w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${plan.gradient} p-[2px]`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <plan.icon className="w-9 h-9 text-primary" strokeWidth={1.5} />
                </div>
              </motion.div>

              <h3 className="text-2xl font-bold text-center mb-2 text-foreground">{plan.name}</h3>
              <p className="text-sm text-muted-foreground text-center mb-6">{plan.duration}</p>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-black text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-lg">تومان</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
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
                className={`glass-button w-full flex items-center justify-center gap-2 text-primary-foreground ${
                  plan.popular ? "" : "bg-gradient-to-r from-primary/80 to-accent/80"
                }`}
              >
                <span>خرید از ربات</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z"/>
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
