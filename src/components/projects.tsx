import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tags = [
  'All',
  'Next.js',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'TypeScript',
  'NestJS',
];

interface IProject {
  title: string;
  description: string;
  image: string;
  github?: string;
  live?: string;
  tags: string[];
}

const projects: IProject[] = [
  {
    title: '4meg E-commerce Website',
    description:
      'A fully functional e-commerce platform built from scratch, offering seamless navigation, secure transactions, and a reliable backend.',
    image: '/4meg.png',
    live: 'https://4meg.net',
    github: 'https://github.com/your-username/4meg', // Added GitHub link
    tags: ['Next.js', 'React', 'Node.js', 'NestJS', 'PostgreSQL', 'TypeScript'],
  },
  {
    title: 'B2B Project',
    description:
      'An ongoing platform designed to connect businesses and streamline their operations, facilitating better business interactions and operational workflows.',
    image: '/placeholder.svg',
    live: 'https://example.com',
    github: 'https://github.com/your-username/b2b-project', // Added GitHub link
    tags: ['Next.js', 'TypeScript', 'NestJS', 'PostgreSQL'],
  },
  // Add more projects as needed
];

export function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projects.filter(
    (project) => filter === 'All' || project.tags.includes(filter),
  );

  return (
    <section id="projects" className="pt-16 py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl text-center mb-12">
          Featured Projects
        </h2>
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <Button
              key={tag}
              onClick={() => setFilter(tag)}
              variant={filter === tag ? 'default' : 'outline'}
              size="sm"
              className={`
                ${
                  filter === tag
                    ? 'bg-indigo-600 text-white dark:bg-indigo-500 dark:text-white hover:bg-indigo-700 dark:hover:bg-indigo-600'
                    : 'bg-white text-gray-700 border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                }
              `}
            >
              {tag}
            </Button>
          ))}
        </div>
        <AnimatePresence>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden dark:bg-gray-800 dark:border dark:border-gray-700 h-full flex flex-col">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end space-x-2">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.github, '_blank')}
                        className="flex items-center dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </Button>
                    )}
                    {project.live && (
                      <Button
                        size="sm"
                        onClick={() => window.open(project.live, '_blank')}
                        className="flex items-center bg-indigo-600 text-white dark:bg-indigo-500 dark:hover:bg-indigo-600"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
