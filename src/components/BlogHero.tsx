const BlogHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 bg-gradient-hero overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Category badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">Blockchain & DeFi</span>
        </div>

        {/* Main title */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up">
          <span className="text-foreground">Atlantis Chain: </span>
          <span className="text-gradient-primary">Pioneering the Future</span>
          <br />
          <span className="text-foreground">of Decentralized Finance</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Discover how Atlantis Chain is revolutionizing the blockchain ecosystem with accessibility, security, and innovation.
        </p>

        {/* Meta info */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-card border border-primary/30 flex items-center justify-center">
              <span className="text-primary font-display text-xs">AC</span>
            </div>
            <span>Atlantis Team</span>
          </div>
          <span className="text-border">•</span>
          <span>November 26, 2024</span>
          <span className="text-border">•</span>
          <span>8 min read</span>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/10 rounded-full blur-[100px]" />
      </div>
    </section>
  );
};

export default BlogHero;
