"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Python", level: 80 },
    ],
  },
  {
    category: "Frontend Technologies",
    skills: [
      { name: "React", level: 95 },
      { name: "React Hooks", level: 90 },
      { name: "Redux", level: 85 },
      { name: "Angular", level: 85 },
      { name: "Next.js", level: 90 },
      { name: "TailwindCSS", level: 90 },
      { name: "Material UI", level: 85 },
      { name: "ShadCN", level: 85 },
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "FastAPI", level: 75 },
      { name: "MongoDB", level: 80 },
      { name: "SQL", level: 75 },
      { name: "Firestore", level: 80 },
    ],
  },
  {
    category: "Other Skills",
    skills: [
      { name: "Git", level: 90 },
      { name: "Unit Testing", level: 80 },
      { name: "Playwright", level: 75 },
      { name: "GraphQL", level: 70 },
      { name: "Docker", level: 75 },
      { name: "Kubernetes", level: 70 },
      { name: "GCP", level: 75 },
      { name: "EC2", level: 70 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-2">Skills</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6">{category.category}</h3>

                    <div className="space-y-4">
                      {category.skills.map((skill, i) => (
                        <div key={i}>
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-gray-500">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
