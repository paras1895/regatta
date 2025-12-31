import Section from "./Section";
import { useTheme } from "./ThemeProvider";

const Hero: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Section className="relative overflow-hidden">

      <div className="absolute inset-0 opacity-[0.03] bg-[url('/grain.png')] animate-hero-grain pointer-events-none" />

      <div className="hero-fonts relative min-h-screen flex items-center">
        <div className="relative z-10 max-w-5xl px-6 md:px-12 animate-hero-fade-up">
          <img
            src={theme === "light" ? "logo-dark.png" : "logo-light.png"}
            alt="COEP Regatta"
            className="w-32 mb-10"
          />

          <h1 className="font-serif text-5xl md:text-7xl leading-tight tracking-tight">
            <span className="block">98 Years of</span>
            <span className="relative inline-block">
              Legacy
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-yellow-400 animate-hero-underline" />
            </span>{" "}
            <span className="italic">in Motion</span>
          </h1>

          <p className="font-sans text-lg md:text-xl max-w-2xl mt-8 text-neutral-400">
            India's oldest college festival, where tradition flows forward and
            every stroke carries the spirit of generations past.
          </p>

          <p className="font-sans uppercase tracking-widest text-sm text-neutral-700 mt-6">
            Since 1928 • COEP Regatta
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
