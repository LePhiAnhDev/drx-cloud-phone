import Container from "../global/container";
import PlatformOrbit from "./platform-orbit";
import { Particles } from "../ui/particles";
import { SectionBadge } from "../ui/section-bade";

const Connect = () => {
    return (
        <section id="connect" className="flex flex-col items-center justify-center py-8 md:py-12 w-full">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <SectionBadge title="Platform Integrations" />
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        Seamless integration across all major platforms
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                        Connect and operate seamlessly across TikTok, Facebook, Instagram, Google, YouTube, Shopee, and X with our unified wireless system
                    </p>
                </div>
            </Container>
            <Container>
                <div className="w-full relative mt-12 flex items-center justify-center min-h-[450px] md:min-h-[550px] lg:min-h-[650px]">
                    <PlatformOrbit />
                    <Particles
                        className="absolute inset-0 pointer-events-none"
                        quantity={150}
                        ease={80}
                        color="#e4e4e7"
                        refresh
                    />
                </div>
            </Container>
        </section>
    )
};

export default Connect
