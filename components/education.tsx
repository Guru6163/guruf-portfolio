"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCapIcon } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-2">Education</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-10"></div>

          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-emerald-100 p-3 rounded-full">
                  <GraduationCapIcon className="h-6 w-6 text-emerald-600" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">Bachelor of Engineering</h3>
                  <p className="text-gray-600 mb-2">Sathyabama University | Chennai, IN</p>
                  <p className="text-gray-600 mb-4">Aug 2018 - May 2022</p>

                  <div className="text-gray-700">
                    <p>Major in Computer Science and Engineering</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
