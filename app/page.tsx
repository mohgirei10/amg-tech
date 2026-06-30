import Image from "next/image";
import { Montserrat } from "next/font/google";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { 
  SiNodedotjs, 
  SiTailwindcss, 
  SiTypescript, 
  SiReact, SiSupabase, 
  SiNextdotjs
} from "react-icons/si";
import { FaX } from "react-icons/fa6";

const tools = [
  { icon: SiNextdotjs, label: "Next" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiTailwindcss, label: "Tailwind" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiReact, label: "React" },
  { icon: SiSupabase, label: "supabase" },

];

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Portfolio() {
  return (
    <div className={`${montserrat.className} bg-zinc-50 dark:bg-black min-h-screen text-zinc-600 dark:text-zinc-400 scroll-smooth transition-colors duration-300`}>
      
      {/* Added pb-24 for mobile to ensure content isn't hidden behind the bottom navbar */}
      <main className="md:ml-30 p-12 md:p-12 pb-24 md:pb-12 md:pt-6 max-w-6xl mx-auto">
        
        {/* Header Section */}
        <header id="home" className="py-6 md:py-12 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-4 text-zinc-900 dark:text-white transition-colors">
            <span className="block md:inline">AMG-TECH </span>SOLUTIONS
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-8 tracking-widest uppercase font-medium">A Software Developer.</p>
          <div className="relative w-full max-w-3xl mx-auto h-[50vh] md:h-175 drop-shadow-2xl dark:drop-shadow-none">
            <Image 
              src="/assets/image.png" 
              alt="Adamu Mohammed Girei" 
              fill 
              className="object-contain"
              priority
            />
          </div>
        </header>

        {/* About Section */}
        <section id="about" className="py-16 text-justify">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-200 mb-4 tracking-wide">ADAMU MOHAMMED GIREI</h2>
           <hr className="w-60 md:w-50 border-amber-500 border-2 mb-8 rounded-full" />          
          <p className="mb-6 text-lg">
            A-M-G is a versatile Software Engineer and DevOps strategist based in Abuja, Nigeria. With a strong foundation in full-stack development and infrastructure administration, he thrives at the intersection of robust backend logic and intuitive frontend design. He specializes in crafting scalable web and mobile solutions using modern technologies such as React, Next.js, Flutter, and Node.js.
            Throughout his professional journey—spanning high-impact roles at MTN and FlexiSAF Edusoft to strategic volunteer initiatives at Equicare—Muhammed has remained dedicated to writing clean, maintainable, and high-performance code. Whether architecting complex infrastructure systems or developing user-centric mobile applications, his work is defined by technical precision and a deep commitment to system optimization.
            Driven by the belief that technology should be both functional and transformative, Muhammed combines technical rigor with a user-first mindset. He is committed to delivering seamless digital experiences that solve real-world problems and drive operational efficiency. Muhammed does not just build software; he engineers reliable, future-ready digital foundations.
          </p>
          
          
          {/* Skills */}
          <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-200 tracking-wider mb-6">SKILLS</h3>
          
          <div className="space-y-6 mb-16">
            <div>
              <p className="tracking-widest mb-2 text-sm font-semibold">FRONTEND DEVELOPMENT</p>
              <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-3 overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            
            <div>
              <p className="tracking-widest mb-2 text-sm font-semibold">BACKEND DEVELOPMENT</p>
              <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-3 overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div>
              <p className="tracking-widest mb-2 text-sm font-semibold">DATABASE MANAGEMENT</p>
              <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-3 overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-16">
            <div className="bg-white dark:bg-[#111] p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-900 transition-all">
              <span className="text-4xl font-bold text-zinc-900 dark:text-white">10+</span><br/>
              <span className="text-sm text-zinc-500 mt-2 block">Partners</span>
            </div>
            <div className="bg-white dark:bg-[#111] p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-900 transition-all">
              <span className="text-4xl font-bold text-zinc-900 dark:text-white">50+</span><br/>
              <span className="text-sm text-zinc-500 mt-2 block">Projects</span>
            </div>
            <div className="bg-white dark:bg-[#111] p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-900 transition-all">
              <span className="text-4xl font-bold text-zinc-900 dark:text-white">50+</span><br/>
              <span className="text-sm text-zinc-500 mt-2 block">Clients</span>
            </div>
            <div className="bg-white dark:bg-[#111] p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-900 transition-all">
              <span className="text-4xl font-bold text-zinc-900 dark:text-white">150+</span><br/>
              <span className="text-sm text-zinc-500 mt-2 block">Meetings</span>
            </div>
          </div>

          {/* Resume Button */}
          <div className="text-center md:text-left mb-16">
            <a href="/assets/resume.pdf" target="_blank" download className="inline-block bg-amber-500 hover:bg-amber-600 active:scale-95 text-white shadow-lg shadow-amber-500/30 px-8 py-4 rounded-xl transition-all duration-300 font-bold tracking-wider">
              DOWNLOAD RESUME  
            </a>
          </div>

          {/* Services Pricing */}
          <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-200 tracking-wider mb-6">SERVICES</h3>
          <div className="flex flex-col md:flex-row gap-6 mb-16">
            
            <div className="flex-1 bg-white dark:bg-[#111] rounded-3xl overflow-hidden shadow-lg border border-zinc-100 dark:border-zinc-900 transition-transform hover:-translate-y-2 duration-300">
              <div className="bg-zinc-100 dark:bg-[#222] text-zinc-900 dark:text-white text-2xl py-6 text-center font-bold">Basic</div>
              <ul className="text-center p-0 m-0 list-none">
                <li className="py-4 border-b border-zinc-100 dark:border-zinc-800">Web Design</li>
                <li className="py-4 border-b border-zinc-100 dark:border-zinc-800">Database Management</li>
                <li className="py-4 border-b border-zinc-100 dark:border-zinc-800">5GB Storage</li>
                <li className="py-4 border-b border-zinc-100 dark:border-zinc-800">Mail Support</li>
                <li className="py-6">
                  <h2 className="text-4xl font-bold text-zinc-900 dark:text-white">$10</h2>
                  <span className="text-zinc-400 text-sm">per month</span>
                </li>
                <li className="bg-zinc-50 dark:bg-[#0a0a0a] py-6 px-6">
                  <button className="w-full bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-amber-500 dark:hover:bg-amber-500 hover:text-white rounded-xl py-3 transition-colors font-semibold active:scale-95">Sign Up</button>
                </li>
              </ul>
            </div>

            <div className="flex-1 bg-zinc-900 dark:bg-[#111] rounded-3xl overflow-hidden shadow-xl shadow-zinc-900/20 border-2 border-zinc-900 dark:border-amber-500 transition-transform hover:-translate-y-2 duration-300 transform md:-translate-y-4">
              <div className="bg-black dark:bg-amber-500 text-white text-2xl py-6 text-center font-bold flex items-center justify-center gap-2">
                Pro <span className="text-xs bg-amber-500 dark:bg-white text-white dark:text-black px-2 py-1 rounded-full uppercase tracking-wider">Popular</span>
              </div>
              <ul className="text-center p-0 m-0 list-none text-zinc-300 dark:text-zinc-400">
                <li className="py-4 border-b border-zinc-800 dark:border-zinc-800">Web Design</li>
                <li className="py-4 border-b border-zinc-800 dark:border-zinc-800">Database Management</li>
                <li className="py-4 border-b border-zinc-800 dark:border-zinc-800">Cloud Management</li>
                <li className="py-4 border-b border-zinc-800 dark:border-zinc-800">Endless Support</li>
                <li className="py-6">
                  <h2 className="text-4xl font-bold text-white">$25</h2>
                  <span className="text-zinc-500 text-sm">per month</span>
                </li>
                <li className="bg-black dark:bg-[#0a0a0a] py-6 px-6">
                  <button className="w-full bg-amber-500 hover:bg-amber-400 text-white rounded-xl py-3 transition-colors font-semibold active:scale-95 shadow-lg shadow-amber-500/20">Sign Up</button>
                </li>
              </ul>
            </div>
          </div>

          {/* Reputation */}
          <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-200 tracking-wider mb-8">MY REPUTATION</h3>

         <div className="grid md:grid-cols-2 gap-8">
  {/* Testimonial 1 */}
  <div className="relative bg-white dark:bg-[#111] p-6 rounded-2xl shadow-md border border-zinc-100 dark:border-zinc-900 flex items-start gap-4">
    {/* Absolute Icon */}
    <i className="fa-brands fa-x-twitter absolute top-8 right-4 text-zinc-400 hover:text-amber-500 transition-colors"></i>
    
    <div className="relative w-16 h-16 shrink-0">
      <Image src="/assets/testimonial-1.jpg" alt="Chris Fox" fill className="rounded-full object-cover shadow-md" />
    </div>
    <div className="pr-8"> {/* Added pr-8 to prevent text from overlapping the icon */}
      <p className="mb-1 text-zinc-900 dark:text-white font-bold text-lg">Chris Fox</p>
      <p className="text-xs text-amber-500 mb-2 uppercase tracking-tight">CEO at Mighty Schools</p>
      <p className="italic text-zinc-600 dark:text-zinc-400">"Mohgirei saved us from a web disaster. Highly recommended professional."</p>
    </div>
  </div>

  {/* Testimonial 2 */}
  <div className="relative bg-white dark:bg-[#111] p-6 rounded-2xl shadow-md border border-zinc-100 dark:border-zinc-900 flex items-start gap-4">
    {/* Absolute Icon */}
    <i className="fa-brands fa-x-twitter absolute top-8 right-4 text-zinc-400 hover:text-amber-500 transition-colors"></i>
    
    <div className="relative w-16 h-16 shrink-0">
      <Image src="/assets/avatar_g2.jpg" alt="Rebecca Flex" fill className="rounded-full object-cover shadow-md" />
    </div>
    <div className="pr-8"> {/* Added pr-8 to prevent text from overlapping the icon */}
      <p className="mb-1 text-zinc-900 dark:text-white font-bold text-lg">Rebecca Flex</p>
      <p className="text-xs text-amber-500 mb-2 uppercase tracking-tight">CEO at Company</p>
      <p className="italic text-zinc-600 dark:text-zinc-400">"No one is better than Moh Girei. The attention to detail is unmatched."</p>
    </div>
  </div>
</div> 
  </section>

          {/* Tools Section */}
<section id="tools" className="py-16">
  <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-200 mb-4 tracking-wider">TECH STACK</h2>
  <hr className="w-25 md:w-50 border-amber-500 border-2 mb-12 rounded-full" />

  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
    {[
      { icon: SiNextdotjs, label: "Next.js" },
      { icon: SiNodedotjs, label: "Node.js" },
      { icon: SiTailwindcss, label: "Tailwind" },
      { icon: SiTypescript, label: "TypeScript" },
      { icon: SiReact, label: "React" },
      { icon: SiSupabase, label: "supabase" },

    ].map((item, index) => (
      <div 
        key={index} 
        className="bg-white dark:bg-[#111] p-8 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-900 flex flex-col justify-center items-center group cursor-pointer transition-all hover:border-amber-500/50"
      >
        <item.icon 
          className="text-5xl md:text-6xl text-zinc-400 group-hover:text-amber-500 group-hover:scale-110 transition-all duration-300" 
        />
        <span className="mt-4 text-sm font-medium text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
          {item.label}
        </span>
      </div>
    ))}
  </div>
</section>

{/* 1. Reduced outer padding on mobile from px-4 to px-2 */}
<section id="contact" className="py-16 max-w-6xl mx-auto px-2 sm:px-6">
  
  <div className="text-left mb-10 px-2 sm:px-0">
    <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-wider uppercase">
      CONTACT ME
    </h2>
    <hr className="w-16 sm:w-24 border-amber-500 border-2 mt-3 rounded-full" />
  </div>

  {/* 2. Added -mx-2 on mobile to pull the cards to the absolute edges of the screen */}
  <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-stretch -mx-2 sm:mx-0">
    
    {/* Left Column: Contact Details Card */}
    <div className="bg-white dark:bg-[#111] p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-zinc-100 dark:border-zinc-900 flex flex-col justify-between h-full">
      <div className="space-y-6 sm:space-y-6 text-base sm:text-lg">
         <p className="mb-4 text-zinc-900 dark:text-zinc-200 font-semibold uppercase">
get in touch with us
        </p>
        <div className="flex items-center gap-4 text-zinc-700 dark:text-zinc-300">
          <div className="w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center bg-zinc-50 dark:bg-[#222] rounded-full shadow-sm shrink-0 text-amber-500">
            <MapPin size={20} />
          </div> 
          <span className="font-medium">Abuja, Nigeria</span>
        </div>

        <div className="flex items-start gap-4 text-zinc-700 dark:text-zinc-300">
          <div className=" w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center bg-zinc-50 dark:bg-[#222] rounded-full shadow-sm shrink-0 text-amber-500">
            <Phone size={20} />
          </div> 
          <div className="flex flex-col  font-medium text-sm sm:text-base">
            <a href="tel:+2348106999804" className="hover:text-amber-500 transition-colors">+234 810 699 9804</a>
            <a href="tel:+2349168426276" className="hover:text-amber-500 mt-2 transition-colors">+234 916 842 6276</a>
          </div>
        </div>

        <div className="flex items-center gap-4 text-zinc-700 dark:text-zinc-300">
          <div className="w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center bg-zinc-50 dark:bg-[#222] rounded-full shadow-sm shrink-0 text-amber-500">
            <Mail size={20} />
          </div> 
          <a href="mailto:amgtech100@gmail.com" className="font-medium text-sm sm:text-base break-all hover:text-amber-500 transition-colors">
            amgtech100@gmail.com
          </a>
        </div>
      </div>
      
      <div className="flex items-center gap-5 text-zinc-500 md:mt-2 border-t border-zinc-100 dark:border-zinc-800/60 py-3.5 mt-4 ">
      <a href='https://www.instagram.com/mohh_girei/' aria-label="Instagram" className="hover:text-amber-500 translate-y-1 transition-all duration-300"><FaInstagram size={28} /></a>
      <a href="https://www.facebook.com/profile.php?id=61576328873335" aria-label="Facebook" className="hover:text-amber-500 translate-y-1 transition-all duration-300"><FaFacebook size={28} /></a>
      <a href="https://x.com/moh_girei" className="fa-brands fa-x-twitter text-[28px] hover:text-amber-500 translate-y-1 transition-all duration-300"></a>
      <a href="https://github.com/mohgirei10" aria-label="Github" className="hover:text-amber-500 translate-y-1 transition-all duration-300"><FaGithub size={28} /></a>
      <a href="#" aria-label="LinkedIn" className="hover:text-amber-500 translate-y-1 transition-all duration-300"><FaLinkedin size={28} /></a>
      </div>
    </div>

    {/* Right Column: Contact Form Card */}
    {/* 4. Changed mobile padding to p-5 here as well to widen the input forms */}
    <div className="bg-white dark:bg-[#111] p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-zinc-100 dark:border-zinc-900 flex flex-col justify-between h-full">
      <div>
        <p className="mb-4 text-zinc-900 dark:text-zinc-200 font-semibold uppercase">
          Let's build something
        </p>
        <form action="https://formspree.io/f/mojkkbpk" method="POST" className="space-y-3.5">
          <input className="w-full p-3.5 bg-zinc-50 dark:bg-[#222] text-zinc-900 dark:text-white outline-none border border-transparent focus:border-amber-500 rounded-xl transition-all text-sm" type="text" placeholder="Name" required name="name" />
          <input className="w-full p-3.5 bg-zinc-50 dark:bg-[#222] text-zinc-900 dark:text-white outline-none border border-transparent focus:border-amber-500 rounded-xl transition-all text-sm" type="email" placeholder="Email" required name="email" />
          <input className="w-full p-3.5 bg-zinc-50 dark:bg-[#222] text-zinc-900 dark:text-white outline-none border border-transparent focus:border-amber-500 rounded-xl transition-all text-sm" type="text" placeholder="Subject" required name="subject" />
          <textarea className="w-full p-3.5 bg-zinc-50 dark:bg-[#222] text-zinc-900 dark:text-white outline-none border border-transparent focus:border-amber-500 rounded-xl h-32 transition-all resize-none text-sm" placeholder="Message" required name="message"></textarea>
          
          <hr className="text-zinc-400 md:mt-0 border-t border-zinc-100 dark:border-zinc-800/60 pt-2 mt-4" />
          <button className="w-full bg-zinc-900 dark:bg-white hover:bg-amber-500 dark:hover:bg-amber-500 text-white dark:text-black hover:text-white px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all font-bold text-sm active:scale-[0.98]" type="submit">
            SEND MESSAGE <Send size={14} />
          </button>
        </form>
      </div>
    </div>

  </div>
</section>

        {/* Footer */}
        <footer className="py-8 border-t border-zinc-200 dark:border-zinc-900 text-center text-zinc-400 text-sm">
          <p>AMG-TECH Solutions {new Date().getFullYear()} © All rights reserved.</p>
        </footer>

      </main>
    </div>
  );
}
