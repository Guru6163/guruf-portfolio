"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-2">About Me</h2>
        <div className="w-20 h-1 bg-emerald-500 mx-auto mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="md:col-span-2">
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-4">
                I'm a Software Developer with experience in building modern web applications using JavaScript,
                TypeScript, React, Angular, and Next.js. I'm passionate about creating intuitive user interfaces and
                solving complex problems.
              </p>
              <p className="text-gray-700 mb-4">
                Currently working at Aidaptive, where I develop interactive web pages and maintain Python scripts for
                SDK file management. I've also contributed to open-source projects like Lightdash.
              </p>
              <p className="text-gray-700">
                I enjoy working on challenging projects that push me to learn new technologies and improve my skills.
                When I'm not coding, I'm exploring new tech trends or contributing to open-source projects.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Personal Info</h3>
              <ul className="space-y-2">
                <li className="flex">
                  <span className="font-medium w-24">Name:</span>
                  <span className="text-gray-700">Guruprasath Sankaran</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-24">Location:</span>
                  <span className="text-gray-700">Chennai, India</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-24">Email:</span>
                  <span className="text-gray-700">gprasath20@gmail.com</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-24">Availability:</span>
                  <span className="text-gray-700">Full-time</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-4">Interests</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Full Stack Development</Badge>
                <Badge variant="outline">Open Source</Badge>
                <Badge variant="outline">AI and ML</Badge>
                <Badge variant="outline">Blockchain</Badge>
                <Badge variant="outline">DevOps</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  )
}
