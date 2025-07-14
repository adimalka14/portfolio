'use client'

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function HeroSection() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 gap-6 py-24">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Adi Malka
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl">
                Fullstack Developer · B.Sc. in CS (GPA 91.6, Dean’s List) · Specializing in building secure, scalable, and elegant web applications with React, Node.js, and MongoDB.
            </p>

            <div className="flex gap-4 flex-wrap justify-center">
                <Button asChild>
                    <Link href="#projects">View Projects</Link>
                </Button>
                <Button variant="outline" asChild>
                    <a href="mailto:adimalka14@gmail.com">Contact Me</a>
                </Button>
            </div>

            <Separator className="w-1/2 mt-8" />

            <div className="flex gap-4 mt-4 text-muted-foreground text-sm">
                <a href="https://github.com/adimalka14" target="_blank" rel="noreferrer">GitHub</a>
                <span>·</span>
                <a href="https://www.linkedin.com/in/adimalka/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
        </section>
    )
}
