import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Code, Rocket } from 'lucide-react';

const processes = [
  {
    icon: Lightbulb,
    title: 'Ideate',
    description: 'Brainstorm innovative solutions to meet client needs.',
  },
  {
    icon: Code,
    title: 'Develop',
    description: 'Transform ideas into robust, scalable applications.',
  },
  {
    icon: Rocket,
    title: 'Deploy',
    description: 'Launch and maintain high-performance web solutions.',
  },
];

export function WorkProcess() {
  return (
    <section id="work-process" className="pt-16 py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white sm:text-4xl mb-12">
          My Work Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={process.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold text-gray-800 dark:text-gray-100">
                    <process.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-2" />
                    {process.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{process.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
