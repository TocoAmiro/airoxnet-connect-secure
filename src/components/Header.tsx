import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import airoxnetLogo from "@/assets/airoxnet-logo.jpg";

const navLinks = [
  { name: "خانه", href: "#hero" },
  { name: "ویژگی‌ها", href: "#features" },
  { name: "اپلیکیشن", href: "#app" },
  { name: "تعرفه", href: "#pricing" },
  { name: "نمایندگی", href: "#agency" },
  { name: "پشتیبانی", href: "#support" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-card rounded-none border-t-0 border-x-0" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#hero");
              }}
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 rounded-xl overflow-hidden">
                <img src={airoxnetLogo} alt="AiroxNet" className="w-full h-full object-cover" />
              </div>
              <span className="text-lg font-bold text-foreground hidden sm:block">آیروکس‌نت</span>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              
              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
                whileTap={{ scale: 0.9 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-0 right-0 z-40 glass-card rounded-t-none border-t-0 md:hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-3 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
