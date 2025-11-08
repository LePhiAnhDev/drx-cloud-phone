"use client";

import Container from "../global/container";
import { SectionBadge } from "../ui/section-badge";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader } from "../ui/card";
import Link from "next/link";
import { Smartphone, CreditCard, Banknote, TrendingUp, AlertCircle } from "lucide-react";

// Device rental pricing data
const DEVICE_PLANS = [
    {
        model: "iPhone 6S",
        withDeposit: 140,
        withoutDeposit: 170,
        deposit: 650,
    },
    {
        model: "iPhone 7G",
        withDeposit: 150,
        withoutDeposit: 180,
        deposit: 1000,
        highlight: true,
    },
    {
        model: "iPhone SE3",
        withDeposit: 400,
        withoutDeposit: 430,
        deposit: 3350,
    },
    {
        model: "iPhone X",
        withDeposit: 300,
        withoutDeposit: 330,
        deposit: 2550,
    },
];

// Format price in Vietnamese currency with dot separator
const formatPrice = (price: number | null): string => {
    if (price === null) return "Out of Stock";
    // Convert to thousands (e.g., 140 -> 140000)
    const priceInVND = price * 1000;
    // Format with dot separator (e.g., 140000 -> 140.000)
    return `${priceInVND.toLocaleString('vi-VN')}₫`;
};

const Pricing = () => {
    return (
        <section id="pricing" className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full relative">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <SectionBadge title="Choose your plan" />
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        iPhone device rental pricing
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                        Competitive monthly rental rates for iPhone devices. Flexible pricing options to match your operational needs.
                    </p>
                </div>
            </Container>

            <div className="mt-12 w-full relative flex flex-col items-center justify-center">
                <div className="absolute hidden lg:block top-1/2 right-2/3 translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-primary/15 blur-[10rem] -z-10"></div>
                <div className="absolute hidden lg:block top-1/2 left-2/3 -translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-violet-500/15 blur-[10rem] -z-10"></div>
                
                <Container>
                    {/* Desktop Table */}
                    <div className="hidden md:block w-full overflow-x-auto">
                        <Card className="border-border/60 backdrop-blur-sm bg-background/50">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-border/60">
                                        <th className="text-left p-4 md:p-6 font-semibold text-base">
                                            <div className="flex items-center gap-2">
                                                <Smartphone className="w-4 h-4 text-muted-foreground" />
                                                Device Model
                                            </div>
                                        </th>
                                        <th className="text-center p-4 md:p-6 font-semibold text-base">
                                            <div className="flex flex-col items-center gap-1">
                                                <div className="flex items-center gap-2">
                                                    <Banknote className="w-4 h-4 text-muted-foreground" />
                                                    With Deposit
                                                </div>
                                                <span className="text-xs font-normal text-muted-foreground">Physical device</span>
                                            </div>
                                        </th>
                                        <th className="text-center p-4 md:p-6 font-semibold text-base">
                                            <div className="flex flex-col items-center gap-1">
                                                <div className="flex items-center gap-2">
                                                    <TrendingUp className="w-4 h-4 text-muted-foreground" />
                                                    No Deposit
                                                </div>
                                                <span className="text-xs font-normal text-muted-foreground">Online rental</span>
                                            </div>
                                        </th>
                                        <th className="text-center p-4 md:p-6 font-semibold text-base">
                                            <div className="flex items-center justify-center gap-2">
                                                <CreditCard className="w-4 h-4 text-muted-foreground" />
                                                Deposit Amount
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {DEVICE_PLANS.map((device, index) => (
                                        <tr
                                            key={index}
                                            className={`border-b border-border/40 last:border-b-0 transition-colors hover:bg-muted/20 ${
                                                device.highlight ? "bg-primary/5" : ""
                                            }`}
                                        >
                                            <td className="p-4 md:p-6 font-medium text-base">
                                                <div className="flex items-center gap-2">
                                                    {device.model}
                                                    {device.highlight && (
                                                        <Badge variant="default" className="bg-primary/20 text-primary hover:bg-primary/30">
                                                            Popular
                                                        </Badge>
                                                    )}
                                                </div>
                                            </td>
                                            <td className={`p-4 md:p-6 text-center text-base font-semibold ${device.model === "iPhone 7G" ? "text-red-500" : "text-primary"}`}>
                                                {formatPrice(device.withDeposit)}/mo
                                            </td>
                                            <td className={`p-4 md:p-6 text-center text-base font-semibold ${device.model === "iPhone 7G" ? "text-red-500" : "text-primary"}`}>
                                                {formatPrice(device.withoutDeposit)}/mo
                                            </td>
                                            <td className="p-4 md:p-6 text-center text-base font-semibold">
                                                {device.deposit === null ? (
                                                    <Badge variant="destructive">Out of Stock</Badge>
                                                ) : (
                                                    <span className="text-foreground">{formatPrice(device.deposit)}</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Card>
                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden w-full space-y-4">
                        {DEVICE_PLANS.map((device, index) => (
                            <Card
                                key={index}
                                className={`backdrop-blur-sm bg-background/50 ${
                                    device.highlight ? "border-primary/50 bg-primary/5" : ""
                                }`}
                            >
                                <CardHeader className="pb-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Smartphone className="w-4 h-4 text-muted-foreground" />
                                            <h3 className="font-semibold text-base">{device.model}</h3>
                                        </div>
                                        {device.highlight && (
                                            <Badge variant="default" className="bg-primary/20 text-primary hover:bg-primary/30">
                                                Popular
                                            </Badge>
                                        )}
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-3 pt-0">
                                    <div className="flex justify-between items-center py-2 border-b border-border/40">
                                        <span className="text-sm text-muted-foreground flex items-center gap-2">
                                            <Banknote className="w-3.5 h-3.5" />
                                            With Deposit
                                        </span>
                                        <span className={`font-semibold ${device.model === "iPhone 7G" ? "text-red-500" : "text-primary"}`}>{formatPrice(device.withDeposit)}/mo</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-border/40">
                                        <span className="text-sm text-muted-foreground flex items-center gap-2">
                                            <TrendingUp className="w-3.5 h-3.5" />
                                            No Deposit
                                        </span>
                                        <span className={`font-semibold ${device.model === "iPhone 7G" ? "text-red-500" : "text-primary"}`}>{formatPrice(device.withoutDeposit)}/mo</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-sm text-muted-foreground flex items-center gap-2">
                                            <CreditCard className="w-3.5 h-3.5" />
                                            Deposit
                                        </span>
                                        {device.deposit === null ? (
                                            <Badge variant="destructive">Out of Stock</Badge>
                                        ) : (
                                            <span className="font-semibold text-foreground">{formatPrice(device.deposit)}</span>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Important Notice */}
                    <Card className="mt-8 border-border/60 backdrop-blur-sm bg-muted/20">
                        <CardContent className="p-6">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <AlertCircle className="w-5 h-5 text-primary" />
                                Important Notice
                            </h3>
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                For bulk orders, custom pricing is available. Rates may vary based on market conditions and specific device requirements. Please contact us for a personalized quote.
                            </p>
                        </CardContent>
                    </Card>

                    {/* CTA Button */}
                    <div className="mt-8 flex justify-center">
                        <Button size="lg" asChild>
                            <Link href="#">
                                Contact Sales
                            </Link>
                        </Button>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default Pricing;
