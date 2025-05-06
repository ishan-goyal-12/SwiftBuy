'use client'

import { useState } from "react"
import Link from "next/link"
import { Menu as MenuIcon } from "lucide-react"

const Menu = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="">
            <MenuIcon className="w-7 h-7 cursor-pointer text-zinc-500 hover:text-white transition-colors" onClick={() => setOpen((prev) => !prev)} />
            {open && (
                <div className="absolute glassmorphism text-zinc-400 left-0 top-18 w-full h-[calc(100vh-70px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
                    <Link href="/" className="text-white">Homepage</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                    <Link href="/">Logout</Link>
                </div>
            )}
        </div>
    )
}

export default Menu