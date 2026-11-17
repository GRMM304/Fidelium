import { MobileMenuToggle } from "./MobileMenuToggle";

export const contactEmail = "contacto@fidelium.cl";
export const instagramUrl = "https://www.instagram.com/fidelium.cl";

export const navItems = [
  ["Inicio", "/#inicio"],
  ["FIDELIUM", "/#fidelium"],
  ["Servicios", "/#servicios"],
  ["Cotizador", "/#cotizador"],
  ["Contacto", "/#contacto"],
] as const;

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.4" cy="6.7" r=".6" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <a href="/#inicio" className="logo" aria-label="FIDELIUM, volver al inicio">
          <img src="/brand/fidelium-horizontal-gold.png" alt="FIDELIUM" width={1400} height={351} />
        </a>
        <nav className="menu" id="menu" aria-label="Principal">
          {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <a className="btn btn-outline" href="/#cotizador">Cotizar</a>
          <a className="btn btn-primary" href="/#contacto">Solicitar evaluación</a>
        </div>
        <MobileMenuToggle />
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="/#inicio" aria-label="FIDELIUM"><img className="footer-logo" src="/brand/fidelium-horizontal-white.png" alt="FIDELIUM" width={1400} height={351} /></a>
            <p>Planificación legal y gestión estratégica para compraventas, financiamientos y remates judiciales en todo Chile.</p>
          </div>
          <div>
            <h4>Navegación</h4>
            <ul>
              <li><a href="/#fidelium">FIDELIUM</a></li>
              <li><a href="/compraventa-protegida">Compraventa protegida</a></li>
              <li><a href="/remates-judiciales">Remates judiciales</a></li>
              <li><a href="/#cotizador">Cotizador de honorarios</a></li>
              <li><a href="/#contacto">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul>
              <li><a href={`mailto:${contactEmail}`}>{contactEmail}</a></li>
              <li>Los Militares 5890, Las Condes, Santiago</li>
              <li>Lunes a viernes, 09:00 a 17:00 horas</li>
              <li><a href={instagramUrl} target="_blank" rel="noopener noreferrer">Instagram @fidelium.cl</a></li>
            </ul>
          </div>
        </div>
        <p className="disclaimer">La información de este sitio es referencial. Los valores corresponden a honorarios profesionales expresados en UF y no incluyen gastos notariales, derechos del Conservador de Bienes Raíces, impuestos ni desembolsos de terceros. Los servicios de FIDELIUM constituyen obligaciones de medio; el alcance y los honorarios definitivos se confirman tras revisar los antecedentes de cada caso. © {new Date().getFullYear()} FIDELIUM · Eficiencia · Planificación · Resguardo.</p>
      </div>
    </footer>
  );
}

export function FloatSocial() {
  return (
    <div className="float-social">
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram de FIDELIUM"><InstagramIcon /></a>
      <a href={`mailto:${contactEmail}`} aria-label="Escribir a FIDELIUM"><MailIcon /></a>
    </div>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatSocial />
    </>
  );
}

export function CtaBand({ title = "Da el siguiente paso con tu operación resguardada", text = "Cotiza tus honorarios y conversa con nuestro equipo para definir el acompañamiento que tu operación necesita." }: { title?: string; text?: string }) {
  return (
    <>
      <div className="brand-line" />
      <section className="section cta-band">
        <div className="container">
          <h2>{title}</h2>
          <p>{text}</p>
          <a className="btn btn-primary" href="/#cotizador">Cotizar honorarios</a>
          <a className="btn btn-secondary" href="/#contacto">Hablar con el equipo</a>
        </div>
      </section>
    </>
  );
}
