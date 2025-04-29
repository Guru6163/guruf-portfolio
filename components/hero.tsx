"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Software Developer";

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-emerald-600 font-medium text-lg mb-2">
          Hello, I'm
        </h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          GuruF
        </h1>
        <div className="h-8 mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700">
            {typedText}
            <span className="animate-pulse">|</span>
          </h2>
        </div>

        <p className="max-w-2xl mx-auto text-gray-600 mb-8 text-lg">
          Passionate about building exceptional web experiences with modern
          technologies. Currently working remotely for Aidaptive as a Software
          Developer.
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          <Button variant="outline" size="icon" className="rounded-full">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Mail className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            {" "}
            <a href="#projects"> View Projects</a>{" "}
          </Button>
          <Button variant="outline">Contact Me</Button>
        </div>
      </motion.div>
    </section>
  );
}
