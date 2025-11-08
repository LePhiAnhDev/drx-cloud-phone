"use client"

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/functions";
import Link from 'next/link';
import React from 'react';

interface Props {
    activeSection?: string;
}

const NAV_ITEMS = [
    { label: "Home", href: "#home", id: "home" },
    { label: "Connect", href: "#connect", id: "connect" },
    { label: "Features", href: "#features", id: "features" },
    { label: "Pricing", href: "#pricing", id: "pricing" },
    { label: "Reviews", href: "#reviews", id: "reviews" },
];

const Menu = ({ activeSection = "" }: Props) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const element = document.getElementById(targetId);
        if (element) {
            const offset = 100; // Account for fixed navbar
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <NavigationMenu>
            <NavigationMenuList>
                {NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                        <NavigationMenuItem key={item.id}>
                            <Link href={item.href} legacyBehavior passHref>
                                <NavigationMenuLink
                                    onClick={(e) => handleClick(e, item.href)}
                                    className={cn(
                                        "h-10 px-4 py-2 text-sm font-normal rounded-md w-max hover:bg-none transition-colors",
                                        isActive
                                            ? "text-foreground font-medium"
                                            : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    {item.label}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    );
                })}
            </NavigationMenuList>
        </NavigationMenu>
    )
};

export default Menu
