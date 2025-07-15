'use client'

import Link from "next/link"

import { navLinks } from "./navLinks.constants"

export default function NavLinks({ onClick }: { onClick?: () => void }) {
    return (
        <>
            {navLinks.map(({ href, label }) => (
                <Link
                    key={href}
                    href={href}
                    onClick={onClick}
                    className="hover:text-primary transition flex items-center"
                >
                    {label}
                </Link>
            ))}
        </>
    )
}
