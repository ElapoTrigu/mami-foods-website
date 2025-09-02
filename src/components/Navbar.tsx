import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="/" className="logo" aria-label="Mami Foods home">
          <span className="logo-dot" /> Mami Foods
        </a>

        <button
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(p => !p)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${open ? 'open' : ''}`}>
          <ul>
  <li>
    <NavLink to="/" end>Home</NavLink>
  </li>
  <li>
    <NavLink to="/products">Our Products</NavLink>
  </li>

  <li className="has-submenu">
    <NavLink to="/about">About</NavLink>
    <ul className="submenu">
      <li><NavLink to="/about#story">Our Story</NavLink></li>
      <li><NavLink to="/about#farmers">Our Farmers</NavLink></li>
      <li><NavLink to="/about#team">Meet the Team</NavLink></li>
    </ul>
  </li>

  <li>
    <NavLink to="/stockists">Stockists</NavLink>
  </li>
  <li>
    <NavLink to="/contact">Contact</NavLink>
  </li>
</ul>

          <a
            className="btn whatsapp"
            href="https://wa.me/265885238265?text=Hi%20Mami%20Foods%2C%20I%27d%20like%20to%20order."
            target="_blank"
            rel="noreferrer"
          >
            Order on WhatsApp
          </a>
        </nav>
      </div>

      <style>{css}</style>
    </header>
  )
}

const css = `
.site-header{
  position:sticky; top:0; z-index:50; background:rgba(255,252,243,.92);
  backdrop-filter:saturate(130%) blur(6px); border-bottom:1px solid rgba(0,0,0,.05);
}
.nav-wrap{display:flex; align-items:center; justify-content:space-between; height:72px;}
.logo{display:flex; align-items:center; gap:10px; font-weight:800; letter-spacing:.2px}
.logo-dot{width:14px;height:14px;border-radius:50%;display:inline-block;background:
  radial-gradient(circle at 30% 30%, #fff6, #0000),
  linear-gradient(135deg, var(--mf-yellow), var(--mf-green), var(--mf-red))}
.menu-btn{display:inline-flex; flex-direction:column; gap:4px; background:transparent; border:0; padding:8px; cursor:pointer}
.menu-btn span{width:22px;height:2px;background:#333;border-radius:2px}
.nav{display:flex; align-items:center; gap:18px}
.nav ul{display:flex; list-style:none; margin:0; padding:0; gap:16px}
.nav a{font-weight:600}
.nav a.active{border-bottom:2px solid var(--mf-red)}
.btn{
  display:inline-block;padding:10px 14px;border-radius:999px;font-weight:600;border:2px solid #1F2937;
  background:#fff;transition:transform .06s ease, box-shadow .06s ease
}
.btn:hover{transform:translateY(-1px)}
.btn.whatsapp{background:var(--mf-green);border-color:transparent;color:#08320f}
/* mobile */
@media (max-width: 820px){
  .menu-btn{display:inline-flex}
  .nav{
    position:fixed; inset:72px 0 0 0; background:var(--mf-bg);
    flex-direction:column; padding:18px; gap:14px; transform:translateY(-8px); opacity:0; pointer-events:none;
    transition:opacity .15s ease, transform .15s ease;
  }
  .nav.open{transform:translateY(0); opacity:1; pointer-events:auto}
  .nav ul{flex-direction:column; gap:12px}
}
@media (min-width: 821px){
  .menu-btn{display:none}
}
`
