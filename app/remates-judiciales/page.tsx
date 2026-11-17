import type { Metadata } from "next";
import { ServiceButton } from "../components/Cotizador";
import { CtaBand, PageShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Remates judiciales | FIDELIUM",
  description: "Búsqueda, estudio jurídico, evaluación comercial y gestión integral de propiedades en remate en todo Chile.",
  openGraph: { title: "Remates judiciales | FIDELIUM", description: "Búsqueda, estudio jurídico, evaluación comercial y gestión integral de propiedades en remate en todo Chile.", images: [] },
  twitter: { images: [] },
};

const prices = [
  ["01", "Búsqueda y estudio jurídico", "15 UF", "Identificación de oportunidades y análisis de los antecedentes jurídicos relevantes."],
  ["02", "Evaluación comercial", "7,5 UF", "Valorización de la propiedad, estimación de costos y revisión de viabilidad comercial."],
  ["03", "Gestión de participación en subasta", "7,5 UF", "Preparación, coordinación y acompañamiento durante la participación en el remate."],
  ["04", "Comisión de éxito", "4% + IVA", "Aplicable sobre el valor de adjudicación cuando la operación resulta exitosa."],
  ["05", "Escritura de adjudicación", "15 UF", "Gestión jurídica y documental para formalizar la adjudicación de la propiedad."],
  ["06", "Gestión de entrega material", "20 UF", "Coordinación de las acciones necesarias para obtener la entrega material del inmueble."],
];

const faqs = [
  ["¿FIDELIUM garantiza la adjudicación?", "No. El servicio constituye una obligación de medio. La adjudicación depende de la subasta, los antecedentes y las ofertas realizadas."],
  ["¿Puedo contratar solo una etapa?", "Sí. Cada etapa tiene un alcance y valor independiente. Primero revisamos el estado del caso para confirmar qué servicio corresponde."],
  ["¿Trabajan fuera de Santiago?", "Sí. FIDELIUM presta servicios para propiedades ubicadas en todo Chile."],
  ["¿Qué tipo de propiedades analizan?", "Principalmente casas, departamentos y propiedades ofrecidas en remates judiciales."],
];

const proceso = [
  ["01", "Buscar", "Definimos criterios e identificamos propiedades que respondan a tu objetivo."],
  ["02", "Evaluar", "Revisamos antecedentes jurídicos, valor comercial, costos y escenarios."],
  ["03", "Participar", "Preparamos la estrategia y coordinamos la participación en la subasta."],
  ["04", "Concluir", "Gestionamos adjudicación, formalización y, cuando corresponde, entrega material."],
];

export default function RematesPage() {
  return (
    <PageShell>
      <section className="hero hero-simple" style={{ ["--hero-img" as string]: "url('/fotos/hero-remates.jpg')" }}>
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow dark">Remates judiciales</span>
            <h1>Estrategia antes de <em>ofertar</em></h1>
            <p>Analizamos la oportunidad, sus antecedentes y sus costos antes de que tomes una decisión. Después, coordinamos cada etapa hasta el cierre.</p>
            <div className="actions">
              <ServiceButton servicio="remates" className="btn btn-primary">Cotizar por etapas</ServiceButton>
              <a className="btn btn-secondary" href="/#contacto">Hablar con el equipo</a>
            </div>
            <div className="badges"><span className="badge">Servicio llave en mano</span><span className="badge">Etapas independientes</span><span className="badge">Todo Chile</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="title"><span className="eyebrow">Etapas y valores</span><h2>Costos transparentes <em>para cada fase</em></h2><p className="lead">Una oportunidad solo es atractiva cuando sus riesgos son comprendidos. Contrata el proceso completo o solo las etapas que necesites.</p></div>
          <div className="price-rows">
            {prices.map(([number, name, price, text]) => (
              <article className="price-row" key={number}><span>{number}</span><div><h3>{name}</h3><p>{text}</p></div><strong>{price}</strong></article>
            ))}
          </div>
          <p className="disclaimer-box">Los valores corresponden a honorarios profesionales y no incluyen gastos, derechos, impuestos, garantías de seriedad, publicaciones, actuaciones judiciales o desembolsos de terceros que puedan resultar aplicables.</p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="title"><span className="eyebrow">Proceso</span><h2>De la oportunidad <em>al cierre</em></h2></div>
          <div className="process">{proceso.map(([n, t, p]) => <article className="card" key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="title"><span className="eyebrow">Preguntas frecuentes</span><h2>Información <em>antes de participar</em></h2></div>
          <div className="faq">{faqs.map(([q, a], i) => <details key={q} open={i === 0}><summary>{q}</summary><p>{a}</p></details>)}</div>
        </div>
      </section>

      <CtaBand title="Evalúa la oportunidad antes de ofertar" />
    </PageShell>
  );
}
