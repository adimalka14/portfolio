'use client'

import React from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function SideDrawer({
                                       isOpen,
                                       onClose,
                                       children,
                                   }: {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-0 left-0 h-full w-64 bg-background border-r shadow-lg z-50 md:hidden"
                >
                    <div className="flex justify-end p-4">
                        <button onClick={onClose}>
                            <X className="w-6 h-6 text-foreground" />
                        </button>
                    </div>
                    <div className="flex flex-col gap-6 px-6 pb-6 text-lg font-medium bg-background opacity-70">
                        {children}
                    </div>
                </motion.div>
            ) as React.ReactNode}
        </AnimatePresence>
    )
}
