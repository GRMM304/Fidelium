import { Cotizador, QuickCard, ServiceButton } from "./components/Cotizador";
import { contactEmail, CtaBand, PageShell } from "./components/SiteChrome";

const pasos = [
  ["01", "Comprendemos", "Definimos tu objetivo, los criterios de decisión y el nivel de exposición aceptable."],
  ["02", "Analizamos", "Revisamos los antecedentes legales, comerciales y documentales de la operación."],
  ["03", "Planificamos", "Diseñamos una ruta clara, con responsables, hitos y condiciones de avance."],
  ["04", "Gestionamos", "Coordinamos a las partes y acompañamos el proceso hasta su cierre."],
];

const faqs = [
  ["¿Los honorarios incluyen gastos de notaría y Conservador?", "No. Los valores corresponden a honorarios profesionales y no incluyen gastos notariales, derechos del Conservador, impuestos ni desembolsos de terceros."],
  ["¿Puedo contratar solo una etapa?", "Sí. En remates judiciales cada etapa tiene un alcance y valor independiente. En compraventas también podemos intervenir si la operación ya comenzó, revisando antes su estado de avance."],
  ["¿FIDELIUM garantiza la adjudicación en un remate?", "No. El servicio es una obligación de medio: la adjudicación depende de la subasta, los antecedentes y las ofertas realizadas."],
  ["¿Trabajan con cualquier banco?", "La gestión hipotecaria se coordina con la entidad financiera que elijas, según sus procesos y requerimientos."],
  ["¿Trabajan fuera de Santiago?", "Sí. Prestamos servicios para casas, departamentos y propiedades en remate ubicadas en todo Chile."],
];

export default function Home() {
  return (
    <PageShell>
      <section id="inicio" className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow dark">Eficiencia · Planificación · Resguardo</span>
            <h1>Decisiones inmobiliarias, <em>jurídicamente resguardadas</em></h1>
            <p>Planificación legal y gestión estratégica para compraventas, financiamientos hipotecarios y remates judiciales, desde los primeros antecedentes hasta la inscripción.</p>
            <p><strong>Valores transparentes en UF. Un equipo que coordina todo el proceso.</strong></p>
            <div className="actions">
              <a className="btn btn-primary" href="#cotizador">Cotizar honorarios</a>
              <a className="btn btn-secondary" href="#contacto">Hablar con el equipo</a>
            </div>
            <div className="badges">
              <span className="badge">10 años de experiencia</span>
              <span className="badge">+200 casos de éxito</span>
              <span className="badge">Cobertura en todo Chile</span>
              <span className="badge">Confidencialidad</span>
            </div>
          </div>
          <QuickCard />
        </div>
      </section>

      <section className="section" id="fidelium">
        <div className="container differential-panel">
          <div className="differential-content">
            <div className="differential-copy">
              <span className="eyebrow">Diferencial FIDELIUM</span>
              <h2>Una operación bien resuelta <em>comienza antes de firmar</em></h2>
              <p>Integramos análisis jurídico, planificación y gestión para dar orden a decisiones inmobiliarias complejas. Nuestro equipo multidisciplinario —jurídico, inmobiliario, estratégico y operativo— coordina cada etapa con una visión completa.</p>
              <p>El valor no está solo en cerrar: está en anticipar lo que puede salir mal.</p>
              <div className="diff-badges">
                <span className="diff-badge">Equipo multidisciplinario</span>
                <span className="diff-badge">Valores en UF</span>
                <span className="diff-badge">Etapas contratables por separado</span>
                <span className="diff-badge">Reserva y confidencialidad</span>
              </div>
            </div>
            <div className="differential-map" aria-label="Método FIDELIUM">
              {pasos.map(([n, t, p], i) => (
                <article className={`diff-step${i === 1 ? " highlight" : ""}`} key={n}>
                  <div className="diff-number">{n}</div>
                  <div><strong>{t}</strong><p>{p}</p></div>
                </article>
              ))}
            </div>
          </div>
          <div className="stats-row" id="experiencia">
            <div className="stat"><strong>10</strong><span>Años de experiencia</span></div>
            <div className="stat"><strong>+200</strong><span>Casos de éxito</span></div>
            <div className="stat"><strong>Chile</strong><span>Cobertura nacional</span></div>
            <div className="stat"><strong>360°</strong><span>Gestión integral</span></div>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="servicios">
        <div className="container">
          <div className="title">
            <span className="eyebrow">Servicios</span>
            <h2>Tres formas de <em>resguardar tu operación</em></h2>
            <p className="lead">Alcances claros y valores transparentes, presentados en una misma vista para que compares rápidamente.</p>
          </div>
          <div className="grid-3">
            <article className="card service-card">
              <div className="letter">H</div>
              <h3>Compraventa con crédito hipotecario</h3>
              <div className="price">10 UF <small>+ estudio de títulos 2 UF</small></div>
              <div className="pills"><span className="pill">Banco</span><span className="pill">Notaría</span><span className="pill">Conservador</span></div>
              <p>Para operaciones financiadas que deben coordinar documentos, banco, reparos, notaría e inscripción.</p>
              <div className="card-actions"><ServiceButton servicio="compraventa-con">Cotizar</ServiceButton><a className="btn btn-outline" href="/compraventa-protegida">Ver detalle</a></div>
            </article>
            <article className="card service-card">
              <div className="letter">C</div>
              <h3>Compraventa sin crédito hipotecario</h3>
              <div className="price">15 UF <small>todo incluido</small></div>
              <div className="pills"><span className="pill">Estudio de títulos</span><span className="pill">Promesa</span><span className="pill">Escritura</span></div>
              <p>Estudio, redacción y coordinación completa desde la promesa hasta el ingreso al Conservador.</p>
              <div className="card-actions"><ServiceButton servicio="compraventa-sin">Cotizar</ServiceButton><a className="btn btn-outline" href="/compraventa-protegida">Ver detalle</a></div>
            </article>
            <article className="card service-card">
              <div className="letter">R</div>
              <h3>Remates judiciales</h3>
              <div className="price">Por etapas <small>desde 7,5 UF</small></div>
              <div className="pills"><span className="pill">Estudio jurídico</span><span className="pill">Subasta</span><span className="pill">Entrega</span></div>
              <p>Búsqueda, evaluación, participación, adjudicación y entrega material. Contratas solo las etapas que necesitas.</p>
              <div className="card-actions"><ServiceButton servicio="remates">Cotizar</ServiceButton><a className="btn btn-outline" href="/remates-judiciales">Ver detalle</a></div>
            </article>
          </div>
          <div className="note-bar">
            <p><strong>¿No sabes cuál necesitas?</strong> Cuéntanos tu operación y te orientamos según su estado y antecedentes.</p>
            <a className="btn btn-primary" href="#contacto">Hablar con el equipo</a>
          </div>
        </div>
      </section>

      <section className="section" id="cotizador">
        <div className="container">
          <div className="title">
            <span className="eyebrow">Cotizador</span>
            <h2>Cotiza tus <em>honorarios</em></h2>
            <p className="lead">Calcula una estimación referencial y envíala directamente a nuestro equipo.</p>
          </div>
          <Cotizador />
        </div>
      </section>

      <section className="section section-soft" id="contacto">
        <div className="container advisor">
          <div className="advisor-visual">
            <img src="/fotos/equipo.jpg" alt="Reunión de evaluación en FIDELIUM" loading="lazy" width={1400} height={788} />
            <p>Equipo multidisciplinario: jurídico, inmobiliario, estratégico y operativo</p>
          </div>
          <div>
            <span className="eyebrow">Contacto directo</span>
            <h2>Obtén una <em>evaluación experta</em></h2>
            <p className="lead">Revisamos los antecedentes principales de tu operación, definimos el alcance y te explicamos cómo avanzar.</p>
            <div className="actions">
              <a className="btn btn-primary" href={`mailto:${contactEmail}`}>Enviar email</a>
              <a className="btn btn-outline" href="#cotizador">Cotizar en línea</a>
            </div>
            <div className="contact-list">
              <div><span>Email</span>{contactEmail}</div>
              <div><span>Oficina</span>Los Militares 5890, Las Condes</div>
              <div><span>Horario</span>Lunes a viernes, 09:00 a 17:00</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container">
          <div className="title"><span className="eyebrow">Preguntas frecuentes</span><h2>Antes de <em>comenzar</em></h2></div>
          <div className="faq">
            {faqs.map(([q, a], i) => <details key={q} open={i === 0}><summary>{q}</summary><p>{a}</p></details>)}
          </div>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}
