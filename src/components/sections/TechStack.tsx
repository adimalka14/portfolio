'use client'

import Image from "next/image"
import { categorizedTechnologies } from "@/lib/technologies"
import { motion } from "framer-motion"

export default function TechStack() {
    return (
        <section id="tech" className="py-24 px-4 overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>

            <div className="flex flex-col gap-16 items-center max-w-5xl mx-auto">
                {categorizedTechnologies.map((group, idx) => (
                    <motion.div
                        key={group.category}
                        initial={{ x: idx % 2 === 0 ? 150 : -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ amount: 0.3, once: false }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full"
                    >
                        <h3 className="text-lg font-semibold mb-6 text-center text-muted-foreground">
                            {group.category}
                        </h3>

                        <div className="flex flex-wrap justify-center gap-8">
                            {group.items.map((tech) => (
                                <Image
                                    key={tech.name}
                                    src={tech.icon}
                                    alt={tech.name}
                                    width={48}
                                    height={48}
                                    className="transition-transform hover:scale-110"
                                    title={tech.name}
                                />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
