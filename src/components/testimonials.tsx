import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'CEO, TechCorp',
    image: '/placeholder.svg',
    content:
      'Working with this developer was an absolute pleasure. They delivered a high-quality product on time and within budget.',
  },
  {
    name: 'Sarah Lee',
    role: 'Marketing Director, StartupX',
    image: '/placeholder.svg',
    content:
      'The attention to detail and the ability to translate our vision into reality was impressive. Highly recommended!',
  },
  {
    name: 'Mike Brown',
    role: 'CTO, InnovateCo',
    image: '/placeholder.svg',
    content:
      'The technical expertise and problem-solving skills demonstrated were top-notch. A true professional in every sense.',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="pt-16 py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white sm:text-4xl mb-12">
          What Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{testimonial.content}</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
