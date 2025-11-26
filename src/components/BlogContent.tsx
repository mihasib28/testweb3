import { useEffect, useRef, useState } from 'react';

const FeatureCard = ({ title, description, delay }: { title: string; description: string; delay: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={ref}
      className={`p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/40 transition-all duration-500 shadow-card group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h4 className="font-display text-lg font-semibold text-primary mb-3 group-hover:text-gradient-primary transition-colors">
        {title}
      </h4>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const SectionHeading = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <h2 id={id} className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 scroll-mt-24">
    <span className="text-gradient-primary">#</span> {children}
  </h2>
);

const BlogContent = () => {
  const features = [
    {
      title: "Atlantis X DEX",
      description: "A decentralized exchange allowing users to trade ATC-20 tokens seamlessly. The DEX prioritizes speed, low fees, and liquidity, making it an attractive platform for traders and investors."
    },
    {
      title: "USDA Stablecoin Integration",
      description: "Atlantis Chain integrates USDA, a native stablecoin pegged to real-world value. This provides users with reliable means of transaction, trading, and staking without volatility."
    },
    {
      title: "ATC-20 Token Launch Platform",
      description: "Developers and entrepreneurs can launch their own ATC-20 tokens through user-friendly tools. From memecoins to utility tokens, the platform offers smart contract templates and launchpad support."
    },
    {
      title: "WTF Launchpad",
      description: "The Atlantis WTF Launchpad empowers projects with presales, community engagement, and fundraising support. A comprehensive solution for token projects seeking early traction."
    },
    {
      title: "High Security & Scalability",
      description: "Built with modern blockchain architecture, ensuring robust security for smart contracts and transactions while maintaining fast confirmation times and scalability."
    }
  ];

  return (
    <article className="relative z-10 max-w-4xl mx-auto px-6 py-16">
      {/* Introduction */}
      <section className="mb-16">
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          The blockchain ecosystem has seen an explosion of innovation in recent years, but few projects have managed to combine <span className="text-primary font-medium">accessibility</span>, <span className="text-primary font-medium">security</span>, and <span className="text-primary font-medium">innovation</span> as effectively as Atlantis Chain.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Designed to be a comprehensive platform for decentralized finance (DeFi) and tokenized assets, Atlantis Chain is quickly establishing itself as a major player in the blockchain space.
        </p>
      </section>

      {/* What is Atlantis Chain */}
      <section className="mb-16">
        <SectionHeading>What is Atlantis Chain?</SectionHeading>
        <div className="p-6 rounded-xl bg-gradient-card border border-border mb-6">
          <p className="text-foreground leading-relaxed">
            Atlantis Chain is a <span className="text-gradient-gold font-semibold">next-generation blockchain ecosystem</span> built to support a wide variety of digital assets, smart contracts, and decentralized applications (dApps).
          </p>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Its primary aim is to provide an efficient, secure, and scalable infrastructure for the issuance and management of <strong className="text-foreground">ATC-20 tokens</strong>—its native token standard, similar in concept to Ethereum's ERC-20.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          By focusing on interoperability and user-friendly design, Atlantis Chain makes blockchain technology accessible to both developers and everyday users.
        </p>
      </section>

      {/* Key Features */}
      <section className="mb-16" id="features">
        <SectionHeading id="features">Key Features of Atlantis Chain</SectionHeading>
        <div className="grid gap-4 md:grid-cols-2">
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title} 
              title={feature.title} 
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </section>

      {/* Why Atlantis Chain Stands Out */}
      <section className="mb-16">
        <SectionHeading>Why Atlantis Chain Stands Out</SectionHeading>
        <div className="relative p-8 rounded-2xl bg-gradient-card border border-primary/30 overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[60px]" />
          <p className="text-foreground leading-relaxed mb-4 relative z-10">
            Unlike many blockchain projects that focus solely on one aspect, Atlantis Chain combines <span className="text-primary font-medium">token issuance</span>, <span className="text-primary font-medium">trading</span>, and <span className="text-primary font-medium">community-driven growth</span> in a single ecosystem.
          </p>
          <p className="text-muted-foreground leading-relaxed relative z-10">
            The integration of presale features, a native stablecoin, and a DEX ensures that users and developers have all the tools they need under one roof. Additionally, Atlantis Chain emphasizes fairness and transparency in token launches and trading events, fostering trust within its community.
          </p>
        </div>
      </section>

      {/* Opportunities */}
      <section className="mb-16" id="opportunities">
        <SectionHeading id="opportunities">Opportunities for Investors and Developers</SectionHeading>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-gradient-card border border-accent/30 hover:border-accent/60 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h4 className="font-display text-lg font-semibold text-gradient-gold mb-3">For Investors</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">→</span>
                Participate in early-stage ATC-20 token presales
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">→</span>
                Exclusive airdrops and trading on Atlantis X DEX
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">→</span>
                Stake assets for potential rewards
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-gradient-card border border-primary/30 hover:border-primary/60 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="font-display text-lg font-semibold text-gradient-primary mb-3">For Developers</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                Robust infrastructure for creating dApps
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                Easy token launching tools
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                Engage with a growing ecosystem
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-16" id="conclusion">
        <SectionHeading id="conclusion">Conclusion</SectionHeading>
        <div className="p-8 rounded-2xl bg-gradient-card border border-border relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/5 rounded-full blur-[80px]" />
          <p className="text-lg text-foreground leading-relaxed mb-4 relative z-10">
            Atlantis Chain represents a <span className="text-gradient-primary font-semibold">bold step forward</span> in the evolution of blockchain technology.
          </p>
          <p className="text-muted-foreground leading-relaxed relative z-10">
            By combining a stablecoin, a DEX, token launch capabilities, and community-focused governance, it provides an integrated solution for the growing demands of the DeFi world. Whether you are an investor, developer, or blockchain enthusiast, Atlantis Chain offers tools, security, and opportunities to thrive in the decentralized economy.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-gradient-card border border-primary/30 glow-primary">
          <h3 className="font-display text-xl font-semibold text-foreground">
            Ready to Dive In?
          </h3>
          <p className="text-muted-foreground max-w-md">
            Join the Atlantis Chain community and be part of the decentralized future.
          </p>
          <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-display font-medium hover:bg-primary/90 transition-colors">
            Explore Atlantis Chain
          </button>
        </div>
      </section>
    </article>
  );
};

export default BlogContent;
