import Image from "next/image";
import Link from "next/link";

export const contactEmail = "contacto@fidelium.cl";
export const instagramUrl = "https://www.instagram.com/fidelium.cl";

export const navItems = [
  ["Inicio", "/"],
  ["FIDELIUM", "/fidelium"],
  ["Servicios", "/servicios"],
  ["Compraventa protegida", "/compraventa-protegida"],
  ["Remates judiciales", "/remates-judiciales"],
  ["Experiencia", "/experiencia"],
  ["Contacto", "/contacto"],
] as const;

export function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="arrow-icon">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="check-icon">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="instagram-icon">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.4" cy="6.7" r=".8" className="instagram-dot" />
    </svg>
  );
}

export function Header({ overlay = false }: { overlay?: boolean }) {
  return (
    <header className={`site-header${overlay ? " header-overlay" : " header-solid"}`}>
      <Link href="/" className="brand" aria-label="FIDELIUM, volver al inicio">
        <Image src="/brand/fidelium-horizontal-gold.png" alt="FIDELIUM" width={1400} height={351} priority />
      </Link>

      <nav className="desktop-nav" aria-label="Navegación principal">
        {navItems.slice(1, 6).map(([label, href]) => <a href={href} key={href}>{label}</a>)}
      </nav>

      <div className="header-actions">
        <a className="instagram-nav" href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram de FIDELIUM">
          <InstagramIcon /><span>Instagram</span>
        </a>
        <a className="header-cta" href="/contacto">
          Solicitar evaluación <ArrowIcon />
        </a>
      </div>

      <details className="mobile-menu">
        <summary aria-label="Abrir menú"><span /><span /></summary>
        <nav aria-label="Navegación móvil">
          {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a>
        </nav>
      </details>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <Link href="/" aria-label="FIDELIUM, volver al inicio">
          <Image src="/brand/fidelium-horizontal-white.png" alt="FIDELIUM" width={1400} height={351} />
        </Link>
        <div className="footer-nav-wrap">
          <p className="footer-label">Navegación</p>
          <div className="footer-links">
            {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
            <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a>
          </div>
        </div>
        <div className="footer-contact">
          <p className="footer-label">Contacto</p>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a className="footer-instagram" href={instagramUrl} target="_blank" rel="noreferrer"><InstagramIcon />@fidelium.cl</a>
          <p>Los Militares 5890<br />Las Condes, Santiago</p>
          <p>Lunes a viernes<br />09:00 a 17:00 horas</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} FIDELIUM</span>
        <span>Eficiencia · Planificación · Resguardo</span>
        <a href="#inicio">Volver arriba ↑</a>
      </div>
    </footer>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 4.5A11.4 11.4 0 0 0 6.2 21.8L4.7 27.4l5.8-1.5A11.4 11.4 0 1 0 16 4.5Z" />
      <path d="M12.1 10.2c-.3-.7-.6-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.3.4-1.3 1.3-1.3 3.2s1.4 3.7 1.6 4c.2.2 2.7 4.3 6.7 5.8 3.3 1.3 4 .9 4.7.8.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.8-.5l-2.7-1.3c-.4-.2-.8-.3-1.1.2-.3.5-1.1 1.3-1.3 1.6-.2.3-.5.3-.9.1-.4-.2-1.8-.7-3.4-2.1-1.3-1.1-2.1-2.5-2.4-2.9-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.7.1-.2.1-.5 0-.7l-1.4-3.1Z" />
    </svg>
  );
}

export function WhatsAppFloat() {
  return (
    <a className="whatsapp-float" href="/contacto?canal=whatsapp#formulario" aria-label="Solicitar evaluación por WhatsApp" title="WhatsApp — número por confirmar">
      <WhatsAppIcon />
      <span>WhatsApp</span>
    </a>
  );
}

export function PageShell({ children, overlayHeader = false }: { children: React.ReactNode; overlayHeader?: boolean }) {
  return (
    <>
      <Header overlay={overlayHeader} />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export function InteriorHero({ kicker, title, emphasis, lead, index, photo, photoAlt = "" }: { kicker: string; title: string; emphasis?: string; lead: string; index: string; photo?: string; photoAlt?: string }) {
  return (
    <section className={`interior-hero${photo ? " has-photo" : ""}`} id="inicio">
      {photo && <div className="hero-photo"><img src={photo} alt={photoAlt} /></div>}
      <div>
        <p className="kicker">{kicker}</p>
        <h1>{title}{emphasis && <> <em>{emphasis}</em></>}</h1>
        <p>{lead}</p>
      </div>
      <span aria-hidden="true">{index} / FIDELIUM</span>
    </section>
  );
}

export function EvaluationCTA({ title = "Revisemos tu operación." }: { title?: string }) {
  return (
    <section className="evaluation-cta section">
      <div>
        <p className="kicker">Siguiente paso</p>
        <h2>{title}</h2>
      </div>
      <div>
        <p>Cuéntanos los antecedentes principales. Evaluaremos el alcance del servicio y te indicaremos cómo avanzar.</p>
        <a href="/contacto" className="button button-gold">Solicitar evaluación <ArrowIcon /></a>
      </div>
    </section>
  );
}
