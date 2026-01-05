import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Percent, Wallet, Rocket } from "lucide-react";

const benefits = [
  {
    icon: Percent,
    title: "۳۵٪ تخفیف",
    description: "روی تمام محصولات",
  },
  {
    icon: Wallet,
    title: "اعتبار اولیه",
    description: "۵۰۰ هزار تومان اعتبار اولیه",
  },
  {
    icon: Rocket,
    title: "سود بیشتر",
    description: "امکان فروش مجدد با سود",
  },
];

const AgencySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Speed effect background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="glass-card p-8 md:p-12 border-accent/30"
        >
          {/* Header */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="icon-circle w-16 h-16"
            >
              <Users className="w-8 h-8 text-accent" strokeWidth={1.5} />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold"
            >
              درخواست <span className="text-accent">نمایندگی</span>
            </motion.h2>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-center text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            با دریافت نمایندگی آیروکس‌نت، از <strong className="text-accent">۳۵٪ تخفیف</strong> روی تمام محصولات برخوردار شوید و با فروش مجدد، درآمد کسب کنید!
          </motion.p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-accent/5 border border-accent/20"
              >
                <div className="icon-circle w-12 h-12 mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Price Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="text-center p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/30 mb-8"
          >
            <p className="text-muted-foreground mb-2">هزینه دریافت نمایندگی</p>
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-4xl md:text-5xl font-bold text-foreground">۵۰۰,۰۰۰</span>
              <span className="text-muted-foreground">تومان</span>
            </div>
            <p className="text-sm text-accent">
              ✨ این مبلغ به اعتبار حساب شما اضافه می‌شود و می‌توانید با آن خرید کنید
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="text-center"
          >
            <a
              href="https://t.me/AIroxNetBot"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button inline-flex items-center gap-3 text-primary-foreground bg-gradient-to-r from-accent to-primary"
            >
              <span>درخواست نمایندگی</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z"/>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgencySection;
