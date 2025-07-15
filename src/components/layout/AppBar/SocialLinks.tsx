'use client'

import { Github, Linkedin } from "lucide-react"

export default function SocialLinks() {
    return (
        <>
            <a
                href="https://github.com/adimalka14"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition"
            >
                <Github className="w-4 h-4 inline mr-1" /> GitHub
            </a>
            <a
                href="https://www.linkedin.com/in/adimalka/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition"
            >
                <Linkedin className="w-4 h-4 inline mr-1" /> LinkedIn
            </a>
        </>
    )
}
