import { useState, useEffect } from 'react';

const BlogHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-card border border-primary/30 flex items-center justify-center glow-primary transition-all duration-300 group-hover:border-primary/60">
            <span className="font-display text-primary font-bold text-lg">A</span>
          </div>
          <span className="font-display text-xl font-semibold text-gradient-primary">
            Atlantis Chain
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Features
          </a>
          <a href="#opportunities" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Opportunities
          </a>
          <a href="#conclusion" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Conclusion
          </a>
        </div>

        <button className="px-5 py-2.5 bg-gradient-card border border-primary/40 rounded-lg font-medium text-primary hover:border-primary hover:glow-primary transition-all duration-300">
          Join Community
        </button>
      </nav>
    </header>
  );
};

export default BlogHeader;
