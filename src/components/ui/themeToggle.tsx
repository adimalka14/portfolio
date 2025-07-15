'use client'

import React, {useEffect, useState} from 'react'
import {useTheme} from 'next-themes'
import {Sun, Moon} from 'lucide-react'

import {Button} from './button'

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {(theme === 'dark' ?
                <Sun className="w-4 h-4"/>
                : <Moon className="w-4 h-4"/>) as React.ReactNode
            }
            <span className="sr-only">Toggle Theme</span>
        </Button>
    )
}
