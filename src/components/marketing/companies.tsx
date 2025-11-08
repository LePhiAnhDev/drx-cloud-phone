import Marquee from "../ui/marquee";
import Image from "next/image";

const PLATFORMS = [
    { name: "TikTok", logo: "/brands/tiktok.svg" },
    { name: "Facebook", logo: "/brands/facebook.svg" },
    { name: "Instagram", logo: "/brands/instagram.svg" },
    { name: "Google", logo: "/brands/google.svg" },
    { name: "YouTube", logo: "/brands/youtube.svg" },
    { name: "Shopee", logo: "/brands/shopee.svg" },
    { name: "X", logo: "/brands/x.svg" },
];

const Companies = () => {
    return (
        <section id="companies" className="flex w-full py-20">
            <div className="flex flex-col items-center justify-center text-center w-full py-2">
                <h2 className="text-xl heading">
                    Supported Platforms
                </h2>
                <p className="text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
                    Seamlessly operate across all major social media and e-commerce platforms
                </p>
                <div className="mt-16 w-full relative overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:30s]">
                        <div className="flex gap-8 md:gap-12">
                            {PLATFORMS.map((platform, index) => (
                                <PlatformBadge key={index} platform={platform} />
                            ))}
                            {PLATFORMS.map((platform, index) => (
                                <PlatformBadge key={`duplicate-${index}`} platform={platform} />
                            ))}
                        </div>
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                </div>
            </div>
        </section>
    )
};

const PlatformBadge = ({ platform }: { platform: { name: string; logo: string } }) => {
    return (
        <div className="flex items-center gap-3 px-6 py-3 rounded-lg border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 transition-colors">
            <div className="relative w-5 h-5 flex-shrink-0">
                <Image
                    src={platform.logo}
                    alt={platform.name}
                    fill
                    className="object-contain"
                />
            </div>
            <span className="text-base font-medium whitespace-nowrap">{platform.name}</span>
        </div>
    );
};

export default Companies
