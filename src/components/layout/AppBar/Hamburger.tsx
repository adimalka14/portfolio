'use client'

import React from "react"
import { Menu, X } from "lucide-react"

export default function Hamburger({
                                      isOpen,
                                      setIsOpen,
                                  }: {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
}) {
    return (
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground focus:outline-none"
        >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
    )
}
