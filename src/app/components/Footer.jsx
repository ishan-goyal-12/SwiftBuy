import React from 'react';
import InstagramAnimation from '../IconsAnimations/InstagramAnimation';
import FacebookAnimation from '../IconsAnimations/FacebookAnimation';
import TwitterAnimation from '../IconsAnimations/TwitterAnimation';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function Footer() {
    const pathname = usePathname();
    const navItems = [
        { id: 'home', label: 'Home', path: '/' },
        { id: 'products', label: 'Products', path: '/products' },
        { id: 'about', label: 'About', path: '/about' },
        { id: 'blog', label: 'Blog', path: '/blog' }
    ];
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        key={item.id}
                                        href={item.path}
                                        className={"text-gray-300 hover:text-white"}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <div className="mr-2">📩</div>
                                <span className="text-gray-300">ishan.goyal.1206@gmail.com</span>
                            </div>
                            <div className="flex items-center">
                                <div className="mr-2">📞</div>
                                <span className="text-gray-300">+91 81681-94430</span>
                            </div>
                        </div>
                    </div>

                    
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                        <div className="flex space-x-3">
                            <FacebookAnimation />
                            <TwitterAnimation />
                            <InstagramAnimation />
                        </div>
                    </div>

                    
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <p className="text-gray-300 text-sm mb-4">Subscribe for flash sale alerts!</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-l-md"
                                required
                            />
                            <button type="submit" className="bg-red-600 px-4 py-2 rounded-r-md text-white">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                
                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-300">&copy; 2025 SwiftBuy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;