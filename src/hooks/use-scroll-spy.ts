"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook to track which section is currently in the viewport
 * @param sectionIds - Array of section IDs to observe (must be in page order from top to bottom)
 * @param options - IntersectionObserver options
 * @returns The ID of the currently active section
 */
export const useScrollSpy = (
    sectionIds: string[],
    options?: IntersectionObserverInit
) => {
    const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || "home");

    useEffect(() => {
        if (typeof window === "undefined" || sectionIds.length === 0) return;

        const sectionElements: Map<string, Element> = new Map();

        // Get all section elements in order
        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                sectionElements.set(id, element);
            }
        });

        if (sectionElements.size === 0) return;

        const offset = 150; // Offset for navbar

        // Function to determine active section based on scroll position
        const updateActiveSection = () => {
            const scrollY = window.scrollY;
            let currentActive = sectionIds[0]; // Default to first section

            // Check sections in order from top to bottom
            // Find the last section we've scrolled past
            for (let i = 0; i < sectionIds.length; i++) {
                const id = sectionIds[i];
                const element = sectionElements.get(id);
                if (!element) continue;

                const elementTop = element.getBoundingClientRect().top + scrollY;
                
                // If we've scrolled past the start of this section (with offset)
                if (scrollY + offset >= elementTop - 50) {
                    currentActive = id;
                } else {
                    // Once we find a section we haven't reached, stop
                    break;
                }
            }

            setActiveSection((prev) => {
                return currentActive !== prev ? currentActive : prev;
            });
        };

        // Throttled scroll handler
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateActiveSection();
                    ticking = false;
                });
                ticking = true;
            }
        };

        // Initial check
        updateActiveSection();

        // Add scroll listener
        window.addEventListener("scroll", handleScroll, { passive: true });

        // Use IntersectionObserver as additional check for accuracy
        const observerOptions: IntersectionObserverInit = {
            rootMargin: `-${offset}px 0px -50% 0px`,
            threshold: [0, 0.25, 0.5, 0.75, 1],
            ...options,
        };

        const observer = new IntersectionObserver(
            (entries) => {
                // Find sections that are intersecting
                const intersecting: string[] = [];
                
                entries.forEach((entry) => {
                    const id = entry.target.id;
                    if (sectionIds.includes(id) && entry.isIntersecting && entry.intersectionRatio > 0.2) {
                        intersecting.push(id);
                    }
                });

                if (intersecting.length === 0) return;

                // Get the first intersecting section in order (closest to top)
                let bestSection = sectionIds[0];
                for (const id of sectionIds) {
                    if (intersecting.includes(id)) {
                        bestSection = id;
                        break;
                    }
                }

                setActiveSection((prev) => {
                    return bestSection !== prev ? bestSection : prev;
                });
            },
            observerOptions
        );

        // Observe all sections
        sectionElements.forEach((element) => {
            observer.observe(element);
        });

        // Cleanup
        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, [sectionIds, options]);

    return activeSection;
};
