"use client"
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation';

const SearchBar = () => {
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;

        if (name) {
            router.push(`/list?name=${name}`);
        }
    }

    return (
        <form className="flex items-center justify-center gap-3.5 p-2.5 pr-4 pl-4 rounded-full glassmorphism flex-1 bg-gray-100 max-w-[300px]" onSubmit={handleSearch}>
            <button className="text-zinc-500">
                <Search size={20} />
            </button>
            <input type="text" name='name' placeholder="Search Products..." className='flex-1 bg-transparent outline-none'/>
        </form>
    )
}

export default SearchBar