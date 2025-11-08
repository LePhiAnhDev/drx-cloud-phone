import Marquee from "../ui/marquee";
import { Facebook, Instagram, Youtube, Twitter, ShoppingBag, Search } from "lucide-react";

const PLATFORMS = [
    { name: "TikTok", icon: null },
    { name: "Facebook", icon: Facebook },
    { name: "Instagram", icon: Instagram },
    { name: "Google", icon: Search },
    { name: "YouTube", icon: Youtube },
    { name: "Shopee", icon: ShoppingBag },
    { name: "X", icon: Twitter },
];

const Companies = () => {
    return (
        <div className="flex w-full py-20">
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
        </div>
    )
};

const PlatformBadge = ({ platform }: { platform: { name: string; icon: any } }) => {
    const Icon = platform.icon;
    return (
        <div className="flex items-center gap-2 px-6 py-3 rounded-lg border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 transition-colors">
            {Icon && <Icon className="w-5 h-5" />}
            <span className="text-base font-medium">{platform.name}</span>
        </div>
    );
};

export default Companies
