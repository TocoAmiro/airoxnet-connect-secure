import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Youtube, Coins, Tv, Gamepad2, Sparkles } from "lucide-react";

const features = [
  {
    icon: Youtube,
    title: "سرور یوتیوبر",
    subtitle: "حذف تبلیغات یوتیوب",
    description: "با اتصال به این سرور دیگه وقتی دارید از یوتیوب استفاده می‌کنید تبلیغی براتون نمایش داده نمیشه و می‌تونید بدون تبلیغات مزاحم یوتیوب‌گردی کنید",
    emoji: "📱",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
  },
  {
    icon: Coins,
    title: "سرور نیم‌بها",
    subtitle: "مصرف نصف اینترنت",
    description: "مصرف اینترنت شما با اتصال به این سرور نصف میشه! مثلا ۱۰ گیگ هرجای نت مصرف کنید فقط ۵ گیگ از بسته سیمکارتتون کم میشه",
    emoji: "💎",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
  },
  {
    icon: Tv,
    title: "سرور تماشا",
    subtitle: "فیلم و سریال نامحدود",
    description: "مشاهده نامحدود فیلم و سریال بدون خرید اشتراک در فیلیمو، نماوا، فیلم‌نت، چهارخونه، گپ‌فیلم و دیجی‌تون",
    emoji: "🎬",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    platforms: ["فیلیمو", "نماوا", "فیلم‌نت", "چهارخونه", "گپ‌فیلم", "دیجی‌تون"],
  },
  {
    icon: Gamepad2,
    title: "سرور گیمینگ",
    subtitle: "پینگ پایین و سرعت بالا",
    description: "برای گیمرهای عزیز سرور و DNS گیمینگ قرار دادیم که بهترین پینگ ممکن و بالاترین سرعت دانلود فایل‌های بازی رو داشته باشید",
    emoji: "🎮",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
  },
];

const SpecialFeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent"
            style={{ top: `${30 + i * 25}%` }}
            animate={{ x: ["-30%", "30%"] }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div
        className="floating-glow w-[350px] h-[350px] bg-accent -top-20 -left-20 absolute"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">ویژگی‌های اختصاصی</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            بیشتر از یک <span className="text-gradient">VPN</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            ده‌ها قابلیت منحصربه‌فرد که فقط در آیروکس‌نت پیدا می‌کنید
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ y: -5 }}
              className={`glass-card-hover p-6 border-2 ${feature.borderColor} group`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <motion.div
                  className={`icon-circle w-16 h-16 ${feature.bgColor} shrink-0`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <feature.icon className={`w-8 h-8 ${feature.color}`} strokeWidth={2} />
                </motion.div>

                <div className="flex-1">
                  {/* Title with Emoji */}
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`text-xl font-bold ${feature.color} group-hover:scale-105 transition-transform origin-right`}>
                      {feature.title}
                    </h3>
                    <span className="text-xl">{feature.emoji}</span>
                  </div>
                  
                  {/* Subtitle */}
                  <p className="text-sm font-medium text-foreground/70 mb-3">
                    {feature.subtitle}
                  </p>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Platforms for Streaming */}
                  {feature.platforms && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {feature.platforms.map((platform) => (
                        <span
                          key={platform}
                          className={`px-2 py-1 text-xs rounded-full ${feature.bgColor} ${feature.color} font-medium`}
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Features Hint */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card">
            <span className="text-2xl">😎</span>
            <p className="text-foreground font-medium">
              و ده‌ها قابلیت دیگه که با گشت‌وگذار داخل برنامه و کانال باهاشون آشنا میشید!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialFeaturesSection;
