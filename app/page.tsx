import Image from "next/image";
import { ArrowIcon, PageShell } from "./components/SiteChrome";

const process = [
  ["01", "Comprendemos", "Definimos el objetivo, los criterios de decisión y el nivel de exposición aceptable."],
  ["02", "Analizamos", "Revisamos los antecedentes legales, comerciales y documentales de la operación."],
  ["03", "Planificamos", "Diseñamos una ruta clara, con responsables, hitos y condiciones de avance."],
  ["04", "Gestionamos", "Coordinamos a las partes y acompañamos el proceso hasta su cierre."],
];

export default function Home() {
  return (
    <PageShell overlayHeader>
      <section className="hero" id="inicio">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-monogram" aria-hidden="true">
          <Image src="/brand/fidelium-mark-gold.png" alt="" width={434} height={512} priority />
        </div>
        <div className="hero-content">
          <p className="kicker">Eficiencia · Planificación · Resguardo</p>
          <h1>Decisiones inmobiliarias,<br /><em>jurídicamente resguardadas.</em></h1>
          <p className="hero-lead">Planificación legal y gestión estratégica para compraventas, financiamientos y remates judiciales.</p>
          <div className="hero-actions">
            <a href="/contacto" className="button button-gold">Solicitar evaluación <ArrowIcon /></a>
            <a href="/servicios" className="text-link">Conocer servicios <ArrowIcon /></a>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">01 / FIDELIUM</div>
      </section>

      <section className="proof-strip" aria-label="Experiencia FIDELIUM">
        <div><strong>10</strong><span>Años de experiencia</span></div>
        <div><strong>+200</strong><span>Casos de éxito</span></div>
        <div><strong>Chile</strong><span>Cobertura nacional</span></div>
        <div><strong>360°</strong><span>Gestión multidisciplinaria</span></div>
      </section>

      <section className="statement section" id="fidelium">
        <div className="section-label">Nuestra mirada</div>
        <div className="statement-copy">
          <p className="kicker dark">Una operación bien resuelta comienza antes de firmar</p>
          <h2>El valor no está solo en cerrar. Está en <em>anticipar</em> lo que puede salir mal.</h2>
        </div>
        <div className="statement-body">
          <p>Integramos análisis jurídico, planificación y gestión para dar orden a decisiones inmobiliarias complejas.</p>
          <p>Nuestro equipo multidisciplinario coordina cada etapa con una visión completa: desde los antecedentes iniciales hasta el cierre de la operación.</p>
          <a href="/fidelium" className="text-link dark-link">Conocer FIDELIUM <ArrowIcon /></a>
        </div>
        <Image className="statement-seal" src="/brand/fidelium-seal-gold.png" alt="Sello FIDELIUM" width={800} height={800} />
      </section>

      <section className="home-services section" id="servicios">
        <div className="section-heading compact-heading">
          <div>
            <p className="kicker">Servicios</p>
            <h2>Respaldo para cada etapa de la operación.</h2>
          </div>
          <p>Soluciones diseñadas para transformar procesos complejos en rutas de trabajo claras, trazables y estratégicamente conducidas.</p>
        </div>

        <div className="home-service-grid">
          <a href="/compraventa-protegida" className="home-service-card">
            <span className="service-number">01</span>
            <p>Operaciones inmobiliarias</p>
            <h3>Compraventa<br /><em>protegida</em></h3>
            <span className="service-price">Planes desde 10 UF</span>
            <span className="card-link">Ver servicio <ArrowIcon /></span>
          </a>
          <a href="/remates-judiciales" className="home-service-card light-card">
            <span className="service-number">02</span>
            <p>Oportunidades inmobiliarias</p>
            <h3>Remates<br /><em>judiciales</em></h3>
            <span className="service-price">Gestión por etapas</span>
            <span className="card-link">Ver servicio <ArrowIcon /></span>
          </a>
          <a href="/servicios" className="home-service-card seal-card">
            <Image src="/brand/fidelium-mark-gold.png" alt="" width={434} height={512} />
            <p>Visión completa</p>
            <h3>Todos nuestros<br /><em>servicios</em></h3>
            <span className="service-price">Alcances y valores</span>
            <span className="card-link">Explorar <ArrowIcon /></span>
          </a>
        </div>
      </section>

      <section className="method section" id="metodo">
        <div className="method-heading">
          <div className="section-label light">Cómo trabajamos</div>
          <div>
            <p className="kicker">Método FIDELIUM</p>
            <h2>Un proceso claro.<br /><em>Una visión completa.</em></h2>
          </div>
          <p>La confianza se construye con información comprensible, responsabilidades definidas y una gestión que no pierde de vista el objetivo final.</p>
        </div>
        <div className="process-list">
          {process.map(([number, title, text]) => (
            <article className="process-item" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-cta section">
        <div>
          <p className="kicker dark">Experiencia que respalda</p>
          <h2>Más de 200 operaciones conducidas con criterio, método y resguardo.</h2>
        </div>
        <div>
          <p>Trabajamos en todo Chile con casas, departamentos y propiedades en remate. Cada caso se aborda con confidencialidad y una estrategia definida según sus antecedentes.</p>
          <a href="/experiencia" className="text-link dark-link">Conocer nuestra experiencia <ArrowIcon /></a>
        </div>
      </section>

      <section className="contact-promo section">
        <div>
          <p className="kicker">Comencemos</p>
          <h2>Cuéntanos qué necesitas resolver.</h2>
        </div>
        <div>
          <p>Una primera revisión nos permitirá comprender la operación y definir el tipo de acompañamiento que necesita.</p>
          <a href="/contacto" className="button button-gold">Solicitar evaluación <ArrowIcon /></a>
        </div>
      </section>
    </PageShell>
  );
}
