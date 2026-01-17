import Link from "next/link";

export default function Footer() {
    return (
        <footer className="p-12 border-t border-border-subtle bg-white">
            <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="flex items-center gap-8">
                    <div className="w-14 h-14 border-2 border-desaturated-teal flex items-center justify-center font-heading font-bold text-desaturated-teal text-sm">
                        UK
                    </div>
                    <div className="text-[10px] font-mono text-deep-charcoal/50 leading-loose uppercase tracking-[0.15em]">
                        © 2026 UK Sourced Ltd. <br />
                        All Rights Reserved.
                    </div>
                </div>
                <div className="flex gap-14 text-[10px] font-mono tracking-[0.2em] uppercase font-bold text-deep-charcoal/40">
                    <Link
                        href="/privacy"
                        className="hover:text-desaturated-teal transition-colors underline decoration-desaturated-teal/20 underline-offset-8"
                    >
                        Privacy
                    </Link>
                    <Link
                        href="/terms"
                        className="hover:text-desaturated-teal transition-colors underline decoration-desaturated-teal/20 underline-offset-8"
                    >
                        Terms
                    </Link>
                    <Link
                        href="#"
                        className="hover:text-desaturated-teal transition-colors underline decoration-desaturated-teal/20 underline-offset-8"
                    >
                        LinkedIn
                    </Link>
                </div>
            </div>
        </footer>
    );
}
