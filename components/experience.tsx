"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BriefcaseIcon } from "lucide-react"

const experiences = [
  {
    title: "Software Developer",
    company: "Aidaptive",
    location: "CA, USA (Remote)",
    period: "Oct 2022 - Current",
    responsibilities: [
      "Developed a Knowledge Graph page to provide an interactive view of user properties and listings, boosting visibility within recommendations.",
      "Collaborated on creating user-friendly Angular web pages, empowering customers to review and download recommendation options and audience lists.",
      "Developed and maintained Python scripts to back up and restore SDK files, ensuring the safety and recoverability of internal files stored in Google Cloud Platform (GCP) using Google APIs.",
      "Played a pivotal role in working with and managing the Core SDK, ensuring the seamless delivery of recommendations and search results to customers using TypeScript.",
      "Designed and provided customers with customizable templates, reducing onboarding time by 40% and enhancing satisfaction through streamlined recommendation and search result feature integration.",
      "Utilized Angular services and dependency injection to manage application state and handle asynchronous data retrieval.",
    ],
    skills: ["TypeScript", "Angular", "Python", "GCP", "SDK Development", "TailwindCSS"],
  },
  {
    title: "Frontend Developer",
    company: "Shloka Concepts",
    location: "Bangalore, IN (Remote)",
    period: "Mar 2022 - Oct 2022",
    responsibilities: [
      "Developed and integrated product catalog management: Implemented features for adding, editing, and displaying products with advanced search and filtering capabilities.",
      "Enhanced user authentication and authorization: Built secure login and registration functionalities using JWT (JSON Web Tokens) for seamless user access control.",
      "Implemented shopping cart and checkout process: Developed functionalities to manage cart items, calculate totals, and process orders, ensuring a smooth and intuitive shopping experience.",
      "Integrated payment gateway: Implemented payment processing functionalities, integrating with third-party payment gateways like Razorpay for secure transactions.",
    ],
    skills: ["JavaScript", "React", "JWT", "Payment Integration", "E-commerce"],
  },
  {
    title: "Software Engineer, Intern",
    company: "Bloomlync Technologies",
    location: "Chennai, IN (Remote)",
    period: "Aug 2021 - Feb 2022",
    responsibilities: [
      "Collaborated with senior developers to troubleshoot and debug software issues, improving application performance by 20%.",
      "Collaborated with cross-functional teams to identify and address software integration issues.",
    ],
    skills: ["JavaScript", "Debugging", "Software Integration"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-10"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-l-4 border-l-emerald-500">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-shrink-0 bg-emerald-100 p-3 rounded-full">
                        <BriefcaseIcon className="h-6 w-6 text-emerald-600" />
                      </div>

                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <Badge variant="outline" className="md:ml-2 mt-1 md:mt-0 w-fit">
                            {exp.period}
                          </Badge>
                        </div>

                        <p className="text-gray-600 mb-4">
                          {exp.company} | {exp.location}
                        </p>

                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="text-gray-700">
                              {resp}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.skills.map((skill, i) => (
                            <Badge key={i} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
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
