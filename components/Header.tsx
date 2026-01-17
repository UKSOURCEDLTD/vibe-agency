"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Header() {
    const pathname = usePathname();

    const links = [
        { href: "/wholesale", label: "Wholesale" },
        { href: "/management", label: "Management" },
        { href: "/consulting", label: "Consulting" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="sticky top-0 w-full z-50 bg-soft-bg/90 backdrop-blur-xl border-b border-border-subtle px-8 py-5">
            <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
                <Link href="/" className="flex items-center gap-6 group">
                    <span className="text-deep-charcoal font-heading font-medium tracking-[0.25em] text-lg group-hover:text-desaturated-teal transition-colors">
                        UK SOURCED LTD
                    </span>
                    <span className="hidden lg:inline text-[10px] font-mono text-deep-charcoal/60 uppercase tracking-widest border border-border-subtle px-3 py-1 rounded-full">
                        Amazon Premier Partner
                    </span>
                </Link>
                <nav className="hidden md:flex gap-8 lg:gap-12 text-[12px] font-medium tracking-widest uppercase">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={clsx(
                                "transition-colors hover:text-desaturated-teal",
                                pathname === link.href
                                    ? "text-desaturated-teal font-semibold"
                                    : "text-deep-charcoal"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                {/* Mobile Menu Placeholder (can be expanded later) */}
                <div className="md:hidden">
                    <span className="text-desaturated-teal font-mono text-xs">MENU</span>
                </div>
            </div>
        </header>
    );
}
