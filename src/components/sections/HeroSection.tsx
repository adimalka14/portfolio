'use client'

import { Separator } from "@/components/ui/separator"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export default function HeroSection() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
    const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

    return (
        <section ref={ref} id='about' className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-24 gap-6 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
            <motion.div
                style={{ opacity, translateY }}
                className="flex flex-col items-center gap-6 z-10"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <Image
                        src="/profile.png"
                        alt="Adi Malka"
                        width={120}
                        height={120}
                        className="rounded-full border shadow-md"
                    />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-foreground text-transparent bg-clip-text"
                >
                    Adi Malka
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="prose prose-neutral dark:prose-invert text-muted-foreground max-w-2xl leading-relaxed text-lg"
                >
                    <p>
                        I’m a <strong className="text-foreground">Fullstack Developer</strong> with a <strong>B.Sc. in Computer Science</strong> (GPA <strong>91.6</strong>, <em>Dean’s List</em>), passionate about building <strong>secure</strong>, <strong>scalable</strong>, and <strong>user-friendly</strong> web applications.
                    </p>
                    <p>
                        I specialize in technologies like <strong>React</strong>, <strong>Node.js</strong>, <strong>MongoDB</strong>, and <strong>TypeScript</strong>. My focus is on crafting clean frontend experiences and reliable backend systems.
                    </p>
                    <p>
                        I’m looking to join a team where I can <strong>make meaningful contributions</strong>, learn from talented people, and <strong>grow into a high-impact developer</strong>.
                    </p>
                </motion.div>
                <Separator className="w-1/2 mt-8" />
            </motion.div>

            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 0.3}}
                transition={{duration: 2}}
                className="absolute inset-0 -z-10 pointer-events-none"
            >
                    <Image
                        src="/hero-bg6.jpg"
                        alt="Background pattern"
                        fill
                        className="object-cover object-center"
                        priority
                    />
            </motion.div>
        </section>
)
}
