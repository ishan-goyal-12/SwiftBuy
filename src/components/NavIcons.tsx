"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import CartModal from "./CartModal"
import { ShoppingCart, User } from "lucide-react"

const NavIcons = () => {

    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)

    const router = useRouter()

    // TEMPORARY
    const isLoggedIn = false
    const handleProfile = () => {
        if (!isLoggedIn) {
            router.push("/")
        }
        setIsProfileOpen((prev) => !prev)
    }

    return (
        <div className="flex items-center gap-4 xl:gap-6 relative">
            <div className="relative cursor-pointer hover:text-white transition-colors text-zinc-500">
                <ShoppingCart className="w-5 h-5" onClick={() => setIsCartOpen((prev) => !prev)} />
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-[#A855F7] rounded-full text-white text-sm flex items-center justify-center">2</div>
            </div>
            {isCartOpen && <CartModal />}
            <User className="w-5 h-5 cursor-pointer hover:text-white transition-colors text-zinc-500" onClick={handleProfile} />
            {isProfileOpen &&
                <div className="flex flex-col gap-1.5 w-48 absolute p-4 pl-6 rounded-xl top-10 right-0 text-sm tracking-widest glassmorphism z-20 shadow-glass text-gray-300">
                    <Link href="/">Profile</Link>
                    <div className="mt-2 cursor-pointer">Logout</div>
                </div>}
        </div>
    )
}

export default NavIcons