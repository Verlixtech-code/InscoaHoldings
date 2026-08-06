import { Phone, Mail, MapPin } from "lucide-react";

function WhatsAppIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
            <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.48 1.34 5L2 22l5.14-1.35a10 10 0 0 0 4.9 1.25h.01c5.52 0 10-4.48 10-10s-4.49-9.9-10.01-9.9Zm0 18.15h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.05.8.82-2.97-.2-.3a8.15 8.15 0 0 1-1.26-4.36c0-4.5 3.66-8.16 8.17-8.16 2.18 0 4.23.85 5.77 2.39a8.1 8.1 0 0 1 2.39 5.78c0 4.5-3.67 8.14-8.16 8.14Zm4.47-6.11c-.24-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.78.97-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.44-1.35-1.68-.14-.24-.02-.37.11-.5.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42-.14-.01-.31-.01-.47-.01-.16 0-.42.06-.65.3-.22.24-.85.84-.85 2.03 0 1.2.87 2.36 1 2.52.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
        </svg>
    );
}

export default function Footer() {
    return (
        <footer className="bg-[#1B4C7E] text-white">
            <div className="mx-auto max-w-6xl px-6 pt-12 pb-8">
                <p className="mx-auto max-w-2xl text-center text-sm text-white/80">
                    INSCOA Holdings (Pvt) Ltd. is a CIDA-registered engineering, construction and project development group delivering water, power, transport and infrastructure solutions across Sri Lanka.
                </p>

                <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-8">
                    <a href="tel:+94112972770" className="flex items-center gap-2 text-sm text-white/90 hover:text-white">
                        <Phone className="h-4 w-4" />
                        +94 11 297 2770
                    </a>
                    <a href="https://wa.me/94772357071" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/90 hover:text-white">
                        <WhatsAppIcon />
                        +94 77 235 7071
                    </a>
                    <a href="mailto:inscoaa@gmail.com" className="flex items-center gap-2 text-sm text-white/90 hover:text-white">
                        <Mail className="h-4 w-4" />
                        inscoaa@gmail.com
                    </a>
                </div>

                <div className="mt-4 flex justify-center">
                    <div className="flex items-center gap-2 text-center text-sm text-white/90">
                        <MapPin className="h-4 w-4 shrink-0" />
                        72/10/15, Parakandeniya Road, Pahala Imbulgoda, Imbulgoda, Gampaha, Sri Lanka. 11856
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <h4 className="border-b border-white/20 pb-2 text-sm font-medium text-white/70">Navigation</h4>
                        <ul className="mt-4 space-y-3 text-sm font-semibold">
                            <li><a href="/" className="hover:text-white/80">Home</a></li>
                            <li><a href="/aboutUs" className="hover:text-white/80">About Us</a></li>
                            <li><a href="#" className="hover:text-white/80">Divisions</a></li>
                            <li><a href="#" className="hover:text-white/80">Services</a></li>
                            <li><a href="/projects" className="hover:text-white/80">Projects</a></li>
                            <li><a href="#" className="hover:text-white/80">Products &amp; Supply</a></li>
                            <li><a href="#" className="hover:text-white/80">Partners</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="border-b border-white/20 pb-2 text-sm font-medium text-white/70">What We Do</h4>
                        <ul className="mt-4 space-y-3 text-sm font-semibold">
                            <li><a href="/#" className="hover:text-white/80">Inscoa Consultancy</a></li>
                            <li><a href="/#" className="hover:text-white/80">Inscoa Engineering</a></li>
                            <li><a href="/#" className="hover:text-white/80">Inscoa Real Estate</a></li>
                            <li><a href="/#" className="hover:text-white/80">Inscoa Supply &amp; Services</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="border-b border-white/20 pb-2 text-sm font-medium text-white/70">Resources</h4>
                        <ul className="mt-4 space-y-3 text-sm font-semibold">
                            <li><a href="/projects" className="hover:text-white/80">Project Portfolio</a></li>
                            <li><a href="/contactUs" className="hover:text-white/80">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 border-t border-white/20" />

                <div className="mt-6 flex flex-col items-center gap-4 text-sm text-white/80 sm:flex-row sm:justify-between">
                    <div className="flex gap-6">
                        <a href="/#" className="hover:text-white">Privacy Policy</a>
                        <a href="/#" className="hover:text-white">Terms &amp; Conditions</a>
                    </div>
                    <p>Company No. PV 121084 &middot; CIDA Registration 23912 &mdash; C5</p>
                </div>

                <p className="mt-8 text-center text-sm text-white/70">
                 © 2026 VERLIXTECH (PVT) LTD. All rights reserved.
                </p>
            </div>
        </footer>
    );
}