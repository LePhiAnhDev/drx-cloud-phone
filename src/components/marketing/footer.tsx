import { FOOTER_LINKS } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import Container from "../global/container";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import { Particles } from "../ui/particles";

const Footer = () => {
    return (
        <footer className="w-full py-10 relative">
            <Container>
                <Wrapper className="relative flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-12 lg:gap-16 pb-40 overflow-hidden footer">
                    <Particles
                        className="absolute inset-0 w-full -z-10"
                        quantity={40}
                        ease={10}
                        color="#d4d4d8"
                        refresh
                    />
                    <div className="flex flex-col items-start w-full md:w-auto md:flex-1 md:max-w-md lg:max-w-lg xl:max-w-xl">
                        <div className="flex items-center gap-2 mb-4">
                            <Image src="/logo.png" alt="Logo" width={96} height={32} className="h-6 w-auto object-contain" />
                            <span className="text-xl font-medium">
                                DrxCloudPhone
                            </span>
                        </div>
                        <p className="text-base text-muted-foreground leading-relaxed mt-4 w-full max-w-none md:max-w-full">
                            The only wireless system operating millions of iPhones & Samsungs, processing native original videos to legitimately bypass platform policies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
                            <Button className="w-full sm:w-auto" asChild>
                                <a 
                                    href="https://app.drxcloudphone.com/register" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Start for free
                                </a>
                            </Button>
                            <Button className="w-full sm:w-auto" variant="outline" asChild>
                                <a 
                                    href="https://t.me/tippingseekaff/243" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Contact us
                                </a>
                            </Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full md:w-auto md:flex-shrink-0 md:max-w-lg mt-0">
                        {FOOTER_LINKS?.map((section, index) => (
                            <div key={index} className="flex flex-col gap-4">
                                <h4 className="text-sm font-medium">
                                    {section.title}
                                </h4>
                                <ul className="space-y-4 w-full">
                                    {section.links.map((link, index) => (
                                        <li key={index} className="text-sm text-muted-foreground hover:text-foreground transition-all w-full">
                                            <Link href={link.href} className="w-full">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Wrapper>
            </Container>
            <Container>
                <Wrapper className="pt-10 flex items-center justify-between relative">
                    <p className="text-sm text-secondary-foreground">
                        &copy; {new Date().getFullYear()} DrxCloudPhone. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="#" className="p-1">
                            <Icons.instagram className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
                        </Link>
                        <Link href="#" className="p-1">
                            <Icons.twitter className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
                        </Link>
                        <Link href="#" className="p-1">
                            <Icons.discord className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
                        </Link>
                    </div>
                </Wrapper>
            </Container>
        </footer>
    )
};

export default Footer
