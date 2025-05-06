import { Sparkles } from 'lucide-react';

// You'll need to install lucide-react: npm install lucide-react
// And make sure you have Tailwind CSS configured

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      {/* Icon part */}
      <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center">
        <Sparkles className="text-white h-4 w-4" />
        <div className="absolute inset-0 rounded-full border border-white/20 animate-pulse-slow"></div>
      </div>
      {/* Text part */}
      <span className="text-xl font-bold text-white">
        <span className="bg-gradient-to-r from-purple-400 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">Swift</span>Buy
      </span>
    </div>
  )
}

export default Logo