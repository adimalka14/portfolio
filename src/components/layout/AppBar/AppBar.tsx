'use client'

import React, { useState } from "react"

import NavLinks from "./NavLinks"
import SocialLinks from "./SocialLinks"
import Hamburger from "./Hamburger"
import SideDrawer from "./SideDrawer"
import ThemeToggle from "@/components/ui/themeToggle"

export default function AppBar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 backdrop-blur bg-background/80 border-b flex justify-between items-center">
            <div className="hidden md:flex gap-4 text-muted-foreground text-sm">
                <SocialLinks />
            </div>
            <nav className="hidden md:flex gap-6 text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
                <NavLinks />
            </nav>
            <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />

            <SideDrawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <NavLinks onClick={() => setIsOpen(false)} />
                <div className="flex flex-col gap-2 text-muted-foreground text-sm">
                    <SocialLinks />
                </div>
            </SideDrawer>
            <ThemeToggle />
        </header>
    )
}
