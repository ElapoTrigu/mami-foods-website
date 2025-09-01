import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-mf-green text-mf-bg">
      {/* Top */}
      <div className="max-w-[1120px] mx-auto px-4 py-12 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-2">
          <Link to="/" className="inline-block">
            <span className="font-script text-4xl leading-none">Mami Foods</span>
          </Link>
          <p className="mt-3 text-sm/6 text-white/70 max-w-md">
            Preservative-free dried fruits, juices, and condiments made in Malawi.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h4 className="uppercase tracking-wider text-sm font-extrabold">Menu</h4>
           <ul className="mt-4 space-y-3 text-white/80">
    <li>
      <Link to="/products" className="hover:text-white">Our products</Link>
    </li>
    <li>
      <Link to="/about" className="hover:text-white">About</Link>
    </li>
    <li>
      <Link to="/stockists" className="hover:text-white">Stockists</Link>
    </li>
  </ul>
        </div>

        {/* Store locator + Contact (stacked like inspo) */}
        <div className="space-y-10">
          <div>
            <div className="flex items-center gap-2">
              <h4 className="uppercase tracking-wider text-sm font-extrabold">Store locator</h4>
              <MapPin className="w-4 h-4 text-mf-yellow" />
            </div>
            <p className="mt-3 text-white/70 max-w-xs">
              We are available in various points of sale.
            </p>
            <Link to="/stockists"
                  className="mt-3 inline-block underline underline-offset-4 hover:text-white">
              Find a stockist
            </Link>
          </div>

          <div>
            <h4 className="uppercase tracking-wider text-sm font-extrabold">Contact Mami Foods</h4>
            <p className="mt-3 text-white/70 max-w-xs">
              Do you have a question? Send it to us!
            </p>
            <a href="mailto:hello@mamifoods.mw"
               className="mt-3 inline-block underline underline-offset-4 hover:text-white">
              Please put in our proper email address
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[1120px] mx-auto px-4">
        <hr className="border-white/25" />
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1120px] mx-auto px-4 py-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2 text-sm text-white/70">
          
          <span>© {year} Mami Foods. Powered by Mami Foods.</span>
        </div>

        {/* Socials as outlined circles to be filled in later */}
        <div className="flex items-center gap-4">
          <SocialLink href="https://facebook.com/yourpage" label="Facebook" className="hover:border-white/70">
            <Facebook />
          </SocialLink>
          <SocialLink href="https://instagram.com/yourpage" label="Instagram" className="hover:border-white/70">
            <Instagram />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/company/yourpage" label="LinkedIn" className="hover:border-white/70">
            <LinkedIn />
          </SocialLink>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Small icon + link helpers (no extra deps) ---------- */
function SocialLink({
  href, label, className = "", children,
}: { href: string; label: string; className?: string; children: React.ReactNode }) {
  return (
    <a
      href={href} target="_blank" rel="noreferrer" aria-label={label}
      className={`inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/40 text-white/90 ${className}`}
    >
      {children}
      <span className="sr-only">{label}</span>
    </a>
  );
}

function MapPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <path d="M12 21s7-7.8 7-12.5A7 7 0 1 0 5 8.5C5 13.2 12 21 12 21Z" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
function Facebook() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden>
      <path fill="currentColor" d="M13.5 9H16l.5-3h-3V4.5c0-.9.2-1.5 1.5-1.5H16V0c-.3 0-1.2 0-2 0c-2 0-3.5 1.2-3.5 3.5V6H8v3h2.5v9H13.5z"/>
    </svg>
  );
}
function Instagram() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden>
      <path fill="currentColor" d="M12 2.2c3.2 0 3.6 0 4.9.07c1.2.06 1.9.25 2.3.42c.6.23 1 .5 1.4.94s.71.83.94 1.4c.17.4.36 1.1.42 2.3c.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.9-.42 2.3c-.23.6-.5 1-.94 1.4s-.83.71-1.4.94c-.4.17-1.1.36-2.3.42c-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.9-.25-2.3-.42c-.6-.23-1-.5-1.4-.94s-.71-.83-.94-1.4c-.17-.4-.36-1.1-.42-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.9.42-2.3c.23-.6.5-1 .94-1.4s.83-.71 1.4-.94c.4-.17 1.1-.36 2.3-.42C8.4 2.2 8.8 2.2 12 2.2m0 1.8c-3.1 0-3.5 0-4.7.07c-1.1.05-1.7.23-2.1.38c-.5.2-.8.43-1.1.77c-.34.34-.58.62-1.1.77c-.15.4-.33 1-.38 2.1C3 9.5 3 9.9 3 13s0 3.5.07 4.7c.05 1.1.23 1.7.38 2.1c.2.5.43.8.77 1.1c.34.34.62.58 1.1.77c.4.15 1 .33 2.1.38c1.2.07 1.6.07 4.7.07s3.5 0 4.7-.07c1.1-.05 1.7-.23 2.1-.38c.5-.2.8-.43 1.1-.77c.34-.34.58-.62.77-1.1c.15-.4.33-1 .38-2.1c.07-1.2.07-1.6.07-4.7s0-3.5-.07-4.7c-.05-1.1-.23-1.7-.38-2.1c-.2-.5-.43-.8-.77-1.1c-.34-.34-.62-.58-1.1-.77c-.4-.15-1-.33-2.1-.38C15.5 4 15.1 4 12 4m0 2.9A5.1 5.1 0 1 1 6.9 12A5.1 5.1 0 0 1 12 6.9m0 1.8a3.3 3.3 0 1 0 3.3 3.3A3.3 3.3 0 0 0 12 8.7m5.6-2.2a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2"/>
    </svg>
  );
}
function LinkedIn() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden>
      <path fill="currentColor" d="M21 0H3C1.35 0 0 1.35 0 3v18c0 1.65 1.35 3 3 3h18c1.65 0 3-1.35 3-3V3c0-1.65-1.35-3-3-3zM7.1 20.5H4.4V9h2.7v11.5zM5.8 7.6c-.9 0-1.6-.7-1.6-1.6S4.9 4.4 5.8 4.4s1.6.7 1.6 1.6s-.7 1.6-1.6 1.6zM20.5 20.5h-2.7v-5.6c0-1.33-.47-2.24-1.64-2.24c-.9 0-1.43.6-1.66 1.18c-.09.22-.11.53-.11.84v5.82h-2.7V9h2.7v1.57c.36-.55 1.02-1.33 2.49-1.33c1.82 0 3.32 1.19 3.32 3.75v7.51z"/>
    </svg>
  );
}
