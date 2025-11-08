"use client";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { BlurText } from "../ui/blur-text";
import { Button } from "../ui/button";
import Container from "../global/container";
import { useEffect, useRef } from "react";

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Video is visible, play it
                        videoElement.play().catch(() => {
                            // Autoplay prevented by browser
                        });
                    } else {
                        // Video is not visible, pause it
                        videoElement.pause();
                    }
                });
            },
            {
                threshold: 0.5, // Trigger when 50% of video is visible
            }
        );

        observer.observe(videoElement);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section id="home" className="flex flex-col items-center text-center w-full max-w-5xl my-24 mx-auto z-40 relative">
            <Container delay={0.0}>
                <div className="pl-2 pr-1 py-1 rounded-full border border-foreground/10 hover:border-foreground/15 backdrop-blur-lg cursor-pointer flex items-center gap-2.5 select-none w-max mx-auto">
                    <div className="w-3.5 h-3.5 rounded-full bg-primary/40 flex items-center justify-center relative">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary/60 flex items-center justify-center animate-ping">
                            <div className="w-2.5 h-2.5 rounded-full bg-primary/60 flex items-center justify-center animate-ping"></div>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        </div>
                    </div>
                    <span className="inline-flex items-center justify-center gap-2 animate-text-gradient animate-background-shine bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-sm text-transparent">
                        The only wireless system operating millions of devices
                        <span className="text-xs text-secondary-foreground px-1.5 py-0.5 rounded-full bg-gradient-to-b from-foreground/20 to-foreground/10 flex items-center justify-center">
                            Trusted by businesses worldwide
                            <ArrowRightIcon className="w-3.5 h-3.5 ml-1 text-foreground/50" />
                        </span>
                    </span>
                </div>
            </Container>
            <BlurText
                word={"DrXCloudPhone\n Wireless iPhone & Samsung System"}
                className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent py-2 md:py-0 lg:!leading-snug font-medium racking-[-0.0125em] mt-6 font-heading"
            />
            <Container delay={0.1}>
                <p className="text-sm sm:text-base lg:text-lg mt-4 text-accent-foreground/60 max-w-3xl mx-auto">
                    The only wireless system operating millions of iPhones & Samsungs, processing native original videos to legitimately and most effectively bypass platform policies. <span className="hidden sm:inline">We understand the pain of account trust & operation lifespan affecting business → thoroughly optimized.</span>
                </p>
            </Container>
            <Container delay={0.2}>
                <div className="flex items-center justify-center md:gap-x-6 mt-8">
                    <Button size="lg">
                        Start for free
                    </Button>
                    <Button asChild size="lg" variant="outline" className="hidden md:flex">
                        <Link href="#">
                            How it works
                        </Link>
                    </Button>
                </div>
            </Container>
            <Container delay={0.3}>
                <div className="relative mx-auto max-w-7xl rounded-xl lg:rounded-[32px] border border-neutral-200/50 p-2 backdrop-blur-lg border-neutral-700 bg-neutral-800/50 md:p-4 mt-12">
                    <div className="absolute top-1/4 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>

                    <div className="rounded-lg lg:rounded-[24px] border p-2 border-neutral-700 bg-black overflow-hidden">
                        <video
                            ref={videoRef}
                            className="w-full h-auto rounded-lg lg:rounded-[20px] object-cover"
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            aria-label="DrXCloudPhone demonstration video"
                        >
                            <source src="/video.MP4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default Hero
