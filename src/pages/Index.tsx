import ParticleBackground from '@/components/ParticleBackground';
import BlogHeader from '@/components/BlogHeader';
import BlogHero from '@/components/BlogHero';
import BlogContent from '@/components/BlogContent';
import BlogFooter from '@/components/BlogFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <ParticleBackground />
      <BlogHeader />
      <main>
        <BlogHero />
        <BlogContent />
      </main>
      <BlogFooter />
    </div>
  );
};

export default Index;
