import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Server, Database, PenToolIcon as Tool } from 'lucide-react';

const skills = [
  {
    name: 'Frontend Development',
    icon: Code,
    description:
      'Proficient in HTML, CSS, JavaScript, TypeScript, React, and Next.js for creating responsive and interactive user interfaces.',
  },
  {
    name: 'Backend Development',
    icon: Server,
    description:
      'Experienced with Express.js, NestJS, Prisma, and JWT for building robust server-side applications and RESTful APIs.',
  },
  {
    name: 'Database Management',
    icon: Database,
    description:
      'Skilled in working with databases such as MongoDB, PostgreSQL, and AWS S3 for efficient data storage and retrieval.',
  },
  {
    name: 'Development Tools',
    icon: Tool,
    description:
      'Proficient with Debian, Brave, Postman, VS Code, GitHub, Git, Node.js, and Nginx for streamlined development processes.',
  },
];

export function Skills() {
  return (
    <section id="skills" className="pt-16 py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            My Expertise
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
            Leveraging cutting-edge technologies to build powerful and scalable web applications.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <Card
              key={skill.name}
              className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 dark:border dark:border-gray-700"
            >
              <CardHeader>
                <CardTitle className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                  <skill.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-300 mr-2" />
                  {skill.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
