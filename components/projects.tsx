"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Worddare",
    description: "A CRM to Summarize Daily Emails",
    image: "worddare.png",
    link: "https://worddare.vercel.app/",
    github: "#",
    tags: [
      "TypeScript",
      "React",
      "Next.js",
      "ShadCN",
      "NextAuth",
      "OpenAI",
      "Gmail API",
    ],
  },
   {
    title: "Gumdupe PDF",
    description: "Extract data from PDFs with AI precision",
    image: "gumdupe.png",
    link: "https://gumdupe-pdf.vercel.app/",
    github: "#",
    tags: [
      "TypeScript",
      "React",
      "Next.js",
      "ShadCN",
      "Clerk",
      "OpenAI",
    ],
  },
  {
    title: "Loudable",
    description: "Turn customer calls into proof",
    image: "loudbale.png",
    link: "https://loudable-saas.vercel.app/",
    github: "#",
    tags: ["TypeScript", "React", "Next.js", "ShadCN", "OpenAI"],
  },
  {
    title: "D2 Residency",
    description: "A CRM to Track Room Bookings and Revenue",
    image: "d2-residency`.png",
    link: "https://d2-residency-ss9p.vercel.app",
    github: "#",
    tags: [
      "TypeScript",
      "React",
      "Next.js",
      "ShadCN",
      "Prisma ORM",
      "Supabase",
    ],
  },
  {
    title: "Learning Management System (Alt: Skill)",
    description:
      "Built with NextJS 13, React, MUX, Prisma, Postgres, TailwindCSS. Create, manage, and sell courses with teacher dashboards, student enrollment, and an online video player.",
    image: "skillshare.png",
    link: "https://school-rose-mu.vercel.app",
    github: "#",
    tags: ["Next.js", "React", "Prisma", "PostgreSQL", "TailwindCSS", "MUX"],
  },
  {
    title: "MirrorMagic - Photo Studio Website",
    description:
      "Complete frontend developed with Next.js, ShadCN, and Aceternity UI, utilizing react-photo-gallery for portfolio grids.",
    image: "mirro-magic.png",
    link: "https://mirror-magic-photography.vercel.app",
    github: "#",
    tags: ["Next.js", "ShadCN", "Aceternity UI", "React"],
  },
  {
    title: "Sathya RiceMill Dashboard",
    description: "A CRM App to Track Daily Income and Expenses in a RiceMill",
    image: "sathya.png",
    link: "https://rice-mill-dashboard.vercel.app",
    github: "#",
    tags: ["Next.js", "ShadCN", "TypeScript", "FireStore"],
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-2">Projects</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative"
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className={`object-contain transition-transform duration-500 ${
                        hoveredIndex === index ? "scale-110" : "scale-100"
                      }`}
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>

                  <CardContent className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-700 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="px-6 py-4 border-t bg-gray-50 flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>

                    <Button
                      className="bg-emerald-600 hover:bg-emerald-700"
                      size="sm"
                      asChild
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <h3 className="text-xl font-bold mb-4">
              Open Source Contributions
            </h3>
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-6">
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-gray-700">
                    Contributed to Lightdash Open-source, by adding new features
                    mentioned in the issues
                  </li>
                  <li className="text-gray-700">
                    Fixed bugs in Lightdash project and collaborated with the
                    team regarding improvements
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
