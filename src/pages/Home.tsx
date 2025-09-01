import { Link } from "react-router-dom";
import WaveDivider from "../components/WaveDivider";



export default function Home() {
  return (
    <div className="space-y-16">
      {/* HERO (bottom waves into the mf-bg section below) */}
      <section className="relative bg-gradient-to-b from-[var(--color-mf-bg)] to-white py-16">
        <div className="max-w-[1120px] mx-auto px-4 grid gap-10 md:grid-cols-[1.2fr_1fr] items-center">
          <div>
    <h1 className="font-script text-[clamp(30px,5.5vw,48px)] leading-tight text-mf-ink">
  Preservative-free goodness, made in Malawi
</h1>


            <p className="mt-2 text-[clamp(16px,2.6vw,18px)] text-slate-700">
              Dried fruits, juices, and condiments made with real ingredients.
              Sourced from smallholder farmers and crafted with care.
            </p>

            


           
          </div>

          {/* Simple hero mock; swap with your images later */}
          <div className="flex justify-center">
            <div className="relative w-[min(420px,90%)] h-[min(420px,90%)] rounded-[28px] bg-white shadow-xl border border-slate-100 overflow-hidden">
              <div className="absolute top-7 left-6 w-40 h-40 rounded-full"
                   style={{background: `radial-gradient(circle at 35% 35%, #ffffff33, #0000),
                                        linear-gradient(135deg, var(--color-mf-yellow), var(--color-mf-red))`}} />
              <div className="absolute bottom-6 right-6 w-32 h-32 rounded-full bg-mf-yellow" />
              <div className="absolute top-1/2 left-[55%] -translate-y-1/2 w-24 h-24 rounded-full bg-mf-red" />
            </div>
          </div>
        </div>
        <WaveDivider position="bottom" color="var(--color-mf-bg)" height={40} speed="18s" />

      </section>
      
      {/* CATEGORIES */}
      <section className="py-8 bg-[var(--color-mf-bg)]">
        <div className="max-w-[1120px] mx-auto px-4">
          <h2 className="text-[clamp(20px,2.6vw,28px)] font-bold mb-4">Our Products</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <CategoryCard
              to="/products?category=dried-fruits"
              title="Dried Fruits"
              desc="Wholesome goodness in every bite"
              tone="yellow"
            />
            <CategoryCard
              to="/products?category=juices"
              title="Juices"
              desc="Just the fruit, nothing else"
              tone="green"
            />
            <CategoryCard
              to="/products?category=other"
              title="Other Products"
              desc="Real ingredients. Real wellness."
              tone="red"
            />
          </div>
        </div>
      </section>

      {/* WHY MAMI FOODS */}
      <section className="relative">
    
        <div className="max-w-[1120px] mx-auto px-4">
          <h2 className="text-[clamp(20px,2.6vw,28px)] font-bold mb-4">Why Mami Foods</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Value icon="🥭" title="Real Ingredients">
              No preservatives. Nothing artificial.
            </Value>
            <Value icon="🌱" title="Zero-waste Mindset">
              Leftovers power new products and compost.
            </Value>
            <Value icon="👩🏾‍🌾" title="Direct from Farmers">
              We buy from smallholder farmers and pay fairly.
            </Value>
            
          </div>
        </div>
        
      </section>

     

      {/* TESTIMONIAL */}
      <section>
        <div className="max-w-[1120px] mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-lg">“Best dried mangoes I’ve tried. Clean, tasty, and consistent.”</p>
            <span className="text-slate-600">— Happy Customer</span>
          </div>
        </div>
      </section>

      {/* FINDER + FAQ */}
      <section className="py-10 bg-[#faf9f4]">
        <div className="max-w-[1120px] mx-auto px-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-bold text-xl">Find a Stockist</h3>
            <p className="text-slate-700 mt-1">See stores near you that carry Mami Foods.</p>
            <Link to="/stockists" className="inline-block mt-3 rounded-full bg-[var(--color-mf-ink)] text-white font-bold px-4 py-2">
              Open Map
            </Link>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-bold text-xl">Questions?</h3>
            <p className="text-slate-700 mt-1">We’ve answered the most common ones in a simple guide.</p>
            <Link to="/contact" className="inline-block mt-3 rounded-full border-2 border-[var(--color-mf-ink)] text-[var(--color-mf-ink)] font-bold px-4 py-2 bg-white">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

     
    </div>
  );
}

/* Small helpers as inline components */
function Value({ icon, title, children }: { icon: string; title: string; children: React.ReactNode; }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="text-2xl mb-1" aria-hidden>{icon}</div>
      <h3 className="font-bold">{title}</h3>
      <p className="text-slate-700">{children}</p>
    </div>
  );
}

function UseCase({ title, children }: { title: string; children: React.ReactNode; }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-slate-700">{children}</p>
    </div>
  );
}

function CategoryCard({
  to, title, desc, tone,
}: { to: string; title: string; desc: string; tone: "yellow" | "green" | "red"; }) {
  const toneClass =
    tone === "yellow" ? "bg-mf-yellow text-black" :
    tone === "green"  ? "bg-mf-green text-black" :
                        "bg-mf-red text-white";
  return (
    <Link to={to} className={`relative rounded-2xl p-6 shadow-md ${toneClass}`}>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="opacity-90">{desc}</p>
      <span className="absolute right-4 bottom-3 text-2xl">→</span>
    </Link>
  );
}
