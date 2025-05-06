import Link from 'next/link';
import Menu from './Menu';
import SearchBar from './SearchBar';
import NavIcons from './NavIcons';
import Logo from './Logo';

const Navbar = () => {
    return (
        <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative z-50 glassmorphism2">
            {/* MOBILE */}
            <div className='h-full flex items-center justify-between md:hidden'>
                <Link href="/">
                    {/* <div className="text-2xl tracking-wide">SwiftBuy</div> */}
                    <Logo/>
                </Link>
                <Menu/>
            </div>
            {/* BIGGER SCREENS */}
            <div className="hidden md:flex items-center justify-between gap-8 h-full">
                {/* LEFT */}
                <div className="w-1/3 xl:w-1/2 flex items-center gap-12 justify-between text-white">
                    <Link href="/" className='flex items-center'>
                    <Logo/>
                    </Link>
                    <div className="hidden xl:flex gap-10 text-lg">
                        <Link href="/">Home</Link>
                        <Link href="/">About</Link>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="w-2/3 xl:w-1/2 flex items-center justify-end gap-8">
                    <SearchBar/>
                    <NavIcons/>
                </div>
            </div>
        </div>
    )
}

export default Navbar