import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Percent, Wallet } from "lucide-react";

const AgencySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="agency" ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Speed Effect Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 border-accent/30 text-center"
        >
          {/* Icon */}
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="icon-circle w-16 h-16 mx-auto mb-6"
          >
            <Users className="w-8 h-8 text-accent" strokeWidth={1.5} />
          </motion.div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            درخواست <span className="text-accent">نمایندگی</span>
          </h2>

          {/* Description */}
          <p className="text-foreground/80 mb-8 max-w-md mx-auto">
            با نمایندگی آیروکس‌نت، از تخفیف ویژه روی همه محصولات بهره‌مند شو
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
              <Percent className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="font-bold text-foreground">۳۵٪ تخفیف</p>
              <p className="text-xs text-muted-foreground">روی همه محصولات</p>
            </div>
            <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
              <Wallet className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="font-bold text-foreground">۵۰۰ هزار</p>
              <p className="text-xs text-muted-foreground">اعتبار اولیه</p>
            </div>
          </div>

          {/* Price */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/30 mb-6">
            <p className="text-sm text-muted-foreground mb-1">هزینه دریافت نمایندگی</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-3xl font-bold text-foreground">۵۰۰,۰۰۰</span>
              <span className="text-muted-foreground">تومان</span>
            </div>
            <p className="text-xs text-accent mt-2">
              ✨ این مبلغ به اعتبار حساب شما اضافه می‌شود
            </p>
          </div>

          {/* CTA */}
          <motion.a
            href="https://t.me/AIroxNetBot"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="glass-button inline-flex items-center gap-2 text-primary-foreground bg-gradient-to-r from-accent to-primary"
          >
            <span>درخواست نمایندگی</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AgencySection;
