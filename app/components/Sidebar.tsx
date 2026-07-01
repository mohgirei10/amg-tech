import Image from "next/image";
import { Home, User, Wrench, Mail } from "lucide-react";

export default function Sidebar() {
  return (
    <>
      {/* --- DESKTOP SIDEBAR --- */}
      <nav className="fixed top-0 left-0 h-screen w-32 bg-white dark:bg-[#111] border-r border-zinc-200 dark:border-zinc-900 hidden md:flex flex-col items-center text-xs text-center z-50 transition-colors duration-300">
        <div className="w-full relative h-32 mb-4">
          <Image 
            src="/assets/avatar.png" 
            alt="Avatar" 
            fill 
            className="object-cover" 
          />
        </div>
        
        <a href="#home" className="group w-full p-6 bg-white dark:bg-[#111] hover:bg-zinc-50 dark:hover:bg-black text-black dark:text-zinc-400 transition-all duration-300 flex flex-col items-center gap-2">
          <Home size={32} className="group-hover:scale-125 group-hover:-translate-y-1 group-hover:text-amber-500 transition-all duration-300" />
          <p className="group-hover:text-amber-500 transition-colors duration-300 font-medium">HOME</p>
        </a>
        
        <a href="#about" className="group w-full p-6 bg-white dark:bg-[#111] hover:bg-zinc-50 dark:hover:bg-black text-black dark:text-zinc-400 transition-all duration-300 flex flex-col items-center gap-2">
          <User size={32} className="group-hover:scale-125 group-hover:-translate-y-1 group-hover:text-amber-500 transition-all duration-300" />
          <p className="group-hover:text-amber-500 transition-colors duration-300 font-medium">ABOUT</p>
        </a>
        
        <a href="#tools" className="group w-full p-6 bg-white dark:bg-[#111] hover:bg-zinc-50 dark:hover:bg-black text-black dark:text-zinc-400 transition-all duration-300 flex flex-col items-center gap-2">
          <Wrench size={32} className="group-hover:scale-125 group-hover:-translate-y-1 group-hover:text-amber-500 transition-all duration-300" />
          <p className="group-hover:text-amber-500 transition-colors duration-300 font-medium">TOOLS</p>
        </a>
        
        <a href="#contact" className="group w-full p-6 bg-white dark:bg-[#111] hover:bg-zinc-50 dark:hover:bg-black text-black dark:text-zinc-400 transition-all duration-300 flex flex-col items-center gap-2">
          <Mail size={32} className="group-hover:scale-125 group-hover:-translate-y-1 group-hover:text-amber-500 transition-all duration-300" />
          <p className="group-hover:text-amber-500 transition-colors duration-300 font-medium">CONTACT</p>
        </a>
      </nav>

      {/* --- PREMIUM MOBILE NAVBAR (BOTTOM) --- */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-t border-zinc-200 dark:border-zinc-800 text-[10px] flex justify-around items-center pt-2 px-2 transition-colors duration-300">
        <a href="#home" className="flex flex-col items-center gap-1 p-2 text-zinc-500 dark:text-zinc-400 hover:text-amber-500 active:scale-95 transition-all">
          <Home size={24} />
          <span className="font-medium">HOME</span>
        </a>
        <a href="#about" className="flex flex-col items-center gap-1 p-2 text-zinc-500 dark:text-zinc-400 hover:text-amber-500 active:scale-95 transition-all">
          <User size={24} />
          <span className="font-medium">ABOUT</span>
        </a>
        <a href="#tools" className="flex flex-col items-center gap-1 p-2 text-zinc-500 dark:text-zinc-400 hover:text-amber-500 active:scale-95 transition-all">
          <Wrench size={24} />
          <span className="font-medium">TOOLS</span>
        </a>
        <a href="#contact" className="flex flex-col items-center gap-1 p-2 text-zinc-500 dark:text-zinc-400 hover:text-amber-500 active:scale-95 transition-all">
          <Mail size={24} />
          <span className="font-medium">CONTACT</span>
        </a>
      </div>
    </>
  );
}