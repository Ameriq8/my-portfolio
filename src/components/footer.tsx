import { Github, Twitter, Linkedin } from 'lucide-react';

const footerItems = [
  { name: 'Home', id: 'home' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

export function Footer() {
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
    <footer className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">About</h3>
            <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
              Passionate developer creating innovative web solutions to help businesses thrive in
              the digital world.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              {footerItems.map((item) => (
                <li key={item.id}>
                  <a
                    onClick={() => scrollToSection(item.id.toLowerCase())}
                    className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Connect
            </h3>
            <div className="mt-4 flex space-x-6">
              <a href="" className="text-gray-400 hover:text-gray-500 dark:hover:text-white">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="" className="text-gray-400 hover:text-gray-500 dark:hover:text-white">
                <span className="sr-only">Instagram</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="" className="text-gray-400 hover:text-gray-500 dark:hover:text-white">
                <span className="sr-only">Telegram</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2024 Amer Mohammed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
