
'use client';

import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Futuristic Mail Sender',
    description:
      'A futuristic mail sender with backend and API integration, similar to Web3 forms.',
    image: 'https://picsum.photos/600/400?random=1',
    tags: ['Backend', 'API', 'Web3'],
    dataAiHint: 'email interface',
    liveLink: 'https://mail-service-pro.onrender.com/',
  },
  {
    title: 'Futuristic Social Platform',
    description:
      'A futuristic social media platform for sharing files, photos, and media.',
    image: 'https://picsum.photos/600/400?random=2',
    tags: ['Social Media', 'File Sharing', 'Next.js'],
    dataAiHint: 'social network',
    liveLink: 'https://share-pro.onrender.com/',
  },
  {
    title: 'GitHub File Editor',
    description:
      'An online tool to edit GitHub repository files directly from the web.',
    image: 'https://picsum.photos/600/400?random=3',
    tags: ['GitHub', 'API', 'Developer Tool'],
    dataAiHint: 'code editor',
    liveLink: 'https://cookie-pro.onrender.com/',
  },
  {
    title: 'BTEB Result Checker',
    description:
      'A dedicated app for students of Magura Polytechnic Institute to check their BTEB results.',
    image: 'https://picsum.photos/600/400?random=4',
    tags: ['React', 'Vercel', 'Educational'],
    dataAiHint: 'student results',
    liveLink: 'https://btebresultcheek.vercel.app/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-card">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-4xl font-black text-center text-foreground tracking-tighter mb-12 animate-fade-in-up">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
             <div
              key={index}
              className="animated-border-box group animate-fade-in-right transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:rotate-1"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card className="flex flex-col h-full overflow-hidden transition-all duration-500 bg-card border-0 group-hover:shadow-2xl group-hover:shadow-primary/20">
                <CardHeader>
                  <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-125 group-hover:rotate-2"
                      data-ai-hint={project.dataAiHint}
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 hover:scale-110">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full group/button hover:shadow-lg hover:shadow-primary/30 transition-all duration-300" size="lg">
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover/button:translate-x-2 group-hover/button:scale-125" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
