import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div id='home' className="relative bg-gradient-to-r from-indigo-500 to-purple-600 overflow-hidden z-0 min-h-screen w-full">
      <div className="relative z-20 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 flex justify-center items-center min-h-screen">
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Amer Mohammed</span>{' '}
              <span className="block text-yellow-300">
                Full-Stack Developer
              </span>
            </h1>
            <p className="mt-3 text-base text-indigo-100 sm:mt-5 sm:text-lg max-w-xl md:mt-5 md:text-xl mx-auto">
              Crafting innovative web solutions that drive business growth and user engagement.
              Specializing in full-stack development with expertise in modern web technologies.
            </p>
            <div className="mt-5 sm:mt-8 flex justify-center">
              <div className="rounded-md shadow">
                <Button
                  size="lg"
                  className="w-full flex items-center justify-center"
                  onClick={() => scrollToSection('projects')}
                >
                  View Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Button
                  size="lg"
                  className="w-full bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-indigo-50 dark:hover:bg-gray-700"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <svg
          className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        ></svg>
      </div>
      <motion.div
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown className="h-8 w-8 text-white" />
      </motion.div>
    </div>
  );
}
