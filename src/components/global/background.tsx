'use client';
import React from 'react';
import DotGrid from '@/components/ui/dot-grid';

interface Props {
    children: React.ReactNode
}

const Background = ({ children }: Props) => {
    return (
        <main id='background' className="flex-none min-h-scree -z-10 relative">
            {/* Dot Grid Background */}
            <DotGrid
                dotSize={2}
                gap={24}
                baseColor="#3b3b3b"
                activeColor="#8b5cf6"
                proximity={120}
                speedTrigger={100}
                shockRadius={250}
                shockStrength={5}
                maxSpeed={5000}
                resistance={750}
                returnDuration={1.5}
                className="opacity-40"
            />

            {/* <div className="absolute h-full inset-0 bg-dot-foreground/[0.2] hidden lg:flex"></div> */}

            {/* <div className="absolute h-full pointer-events-none inset-0 hidden lg:flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}

            {/* <div className="absolute top-[-266px] left-[calc(55%-379px/2)] bg-primary/60 opacity-50 rounded-full blur-[10rem] w-[379px] h-[620px] hidden lg:flex -z-10"></div>
            <div className="absolute top-[-60px] left-[calc(50%-433px/2)] bg-primaryLight/40 opacity-50 rounded-full blur-[15rem] w-[433px] h-[525px] hidden lg:flex -z-10"></div> */}

            {children}
            {/* <Icons.grid className="absolute top-0 left-0 w-full h-full" /> */}

            {/* <div className="absolute z-[20] inset-0 items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)] hidden lg:flex"></div> */}
            {/* <div className="h-[50rem] w-full bg-background bg-dot-white/[0.2] relative flex items-center justify-center"></div> */}
        </main>
    )
};

export default Background
