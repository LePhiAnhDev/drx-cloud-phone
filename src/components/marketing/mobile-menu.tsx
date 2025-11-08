"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/functions";
import { useClickOutside } from "@/hooks";
import { motion } from "framer-motion";
import { Home, Sparkles, DollarSign, Star, Link2 } from "lucide-react";
import Link from "next/link";
import React from 'react';

interface Props {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    activeSection?: string;
}

const NAV_ITEMS = [
    { label: "Home", href: "#home", id: "home", icon: Home },
    { label: "Connect", href: "#connect", id: "connect", icon: Link2 },
    { label: "Features", href: "#features", id: "features", icon: Sparkles },
    { label: "Pricing", href: "#pricing", id: "pricing", icon: DollarSign },
    { label: "Reviews", href: "#reviews", id: "reviews", icon: Star },
];

const MobileMenu = ({ isOpen, setIsOpen, activeSection = "" }: Props) => {

    const ref = useClickOutside(() => setIsOpen(false));

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsOpen(false);
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

    const variants = {
        open: { opacity: 1, y: 20 },
        closed: { opacity: 0, y: 0 },
    };

    return (
        <div
            ref={ref}
            className={cn(
                "absolute top-12 inset-x-0 size-full p-4 z-20 bg-inherit flex flex-1",
                isOpen ? "flex" : "hidden"
            )}
        >
            <motion.div
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                transition={{
                    type: "spring",
                    bounce: 0.15,
                    duration: 0.5,
                }}
                className="size-full flex flex-col justify-start"
            >
                <ul className="flex flex-col items-start flex-1 w-full space-y-3">
                    {NAV_ITEMS.map((item) => {
                        const isActive = activeSection === item.id;
                        const Icon = item.icon;
                        return (
                            <li
                                key={item.id}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-start active:scale-95 hover:bg-muted/20 active:opacity-80",
                                    isActive
                                        ? "text-foreground font-medium"
                                        : "text-foreground hover:text-muted-foreground"
                                )}
                            >
                                <Link
                                    href={item.href}
                                    onClick={(e) => handleClick(e, item.href)}
                                    className="flex items-center w-full text-start"
                                >
                                    <Icon className={cn(
                                        "w-4 h-4 mr-2",
                                        isActive && "text-primary"
                                    )} />
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </motion.div>
        </div>
    )
};

export default MobileMenu
