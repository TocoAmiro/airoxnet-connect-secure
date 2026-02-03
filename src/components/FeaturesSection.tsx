import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gamepad2, Youtube, Briefcase, Smartphone } from "lucide-react";

const features = [
  {
    icon: Gamepad2,
    emoji: "🎮",
    title: "گیم بدون لگ",
    description: "پینگ پایین و سرعت بالا برای گیمرها",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
  },
  {
    icon: Youtube,
    emoji: "📺",
    title: "یوتیوب بدون تبلیغ",
    description: "تماشای ویدیو بدون تبلیغات مزاحم",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
  },
  {
    icon: Briefcase,
    emoji: "💻",
    title: "کار و فریلنس",
    description: "دسترسی به تمام سایت‌ها و ابزارها",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
  },
  {
    icon: Smartphone,
    emoji: "📱",
    title: "استفاده روزمره",
    description: "مرور راحت و امن اینترنت",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="features" ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Background Effect */}
      <motion.div
        className="floating-glow w-[400px] h-[400px] bg-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            برای هر <span className="text-gradient">نیازی</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            هر کاری که داری، ما پوششت می‌دیم
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`glass-card-hover p-6 text-center border-2 ${feature.borderColor}`}
            >
              {/* Emoji */}
              <motion.div
                className="text-4xl mb-4"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                {feature.emoji}
              </motion.div>

              {/* Icon */}
              <div className={`icon-circle w-14 h-14 mx-auto mb-4 ${feature.bgColor}`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} strokeWidth={2} />
              </div>

              {/* Title */}
              <h3 className={`text-lg font-bold mb-2 ${feature.color}`}>
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
