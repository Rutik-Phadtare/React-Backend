import { Castle, Search } from 'lucide-react';

const Navbar = () => {
  return (
    // Removed 'border-b' from the main nav container to make room for our custom line
    <nav className="relative flex items-center justify-between w-full px-8 py-4 bg-black/10 text-white">
      
      {/* Left side: Logo */}
      <div className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity">
        <Castle className="w-7 h-7 text-amber-400" /> 
        <h3 className="text-xl font-bold tracking-wide">Hello</h3>
      </div>

      {/* Right side: Navigation Links & Search */}
      <div className="flex items-center gap-8 font-medium">
        <span className="cursor-pointer hover:text-amber-400 transition-colors">Home</span>
        <span className="cursor-pointer hover:text-amber-400 transition-colors">About</span>
        <span className="cursor-pointer hover:text-amber-400 transition-colors">Contact</span>
        
        {/* Search Icon wrapper */}
        <button className="p-1.5 rounded-full hover:bg-white/10 transition-colors" aria-label="Search">
          <Search className="w-5 h-5" />
        </button>
      </div>

      {/* Custom Bottom Border Line:
        - h-[2px] makes it crisp and bold.
        - bg-gradient-to-r handles the horizontal color progression.
        - from-transparent / via-white / to-transparent makes it blend flawlessly at both ends.
      */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />

    </nav>
  );
};

export default Navbar;