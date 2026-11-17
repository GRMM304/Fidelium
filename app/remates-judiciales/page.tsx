import type { Metadata } from "next";
import { EvaluationCTA, InteriorHero, PageShell } from "../components/SiteChrome";

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

export default function RematesPage() {
  return (
    <PageShell>
      <InteriorHero kicker="Remates judiciales" title="Estrategia antes de" emphasis="ofertar." lead="Analizamos la oportunidad, sus antecedentes y sus costos antes de tomar una decisión. Después, coordinamos cada etapa hasta el cierre." index="05" photo="/fotos/remates.jpg" photoAlt="Asesora de FIDELIUM visitando una propiedad junto a un cliente" />

      <section className="auction-introduction section">
        <div><p className="kicker dark">Servicio llave en mano</p><h2>Una oportunidad solo es atractiva cuando sus riesgos son comprendidos.</h2></div>
        <div><p>Nuestro acompañamiento integra búsqueda, estudio jurídico, evaluación comercial, estrategia de subasta y gestión posterior al remate.</p><p>El cliente puede contratar el proceso completo o las etapas que correspondan según su necesidad.</p></div>
      </section>

      <section className="auction-prices section">
        <div className="auction-prices-heading"><p className="kicker">Etapas y valores</p><h2>Costos transparentes para cada fase.</h2></div>
        <div className="price-rows">
          {prices.map(([number, name, price, text]) => (
            <article key={number}><span>{number}</span><div><h3>{name}</h3><p>{text}</p></div><strong>{price}</strong></article>
          ))}
        </div>
        <p className="pricing-disclaimer">Los valores corresponden a honorarios profesionales y no incluyen gastos, derechos, impuestos, garantías de seriedad, publicaciones, actuaciones judiciales o desembolsos de terceros que puedan resultar aplicables.</p>
      </section>

      <section className="auction-process section">
        <div><p className="kicker dark">Proceso</p><h2>De la oportunidad al cierre.</h2></div>
        <div className="scope-steps four-steps">
          <article><span>01</span><h3>Buscar</h3><p>Definimos criterios e identificamos propiedades que puedan responder al objetivo.</p></article>
          <article><span>02</span><h3>Evaluar</h3><p>Revisamos antecedentes jurídicos, valor comercial, costos y escenarios.</p></article>
          <article><span>03</span><h3>Participar</h3><p>Preparamos la estrategia y coordinamos la participación en la subasta.</p></article>
          <article><span>04</span><h3>Concluir</h3><p>Gestionamos adjudicación, formalización y, cuando corresponda, entrega material.</p></article>
        </div>
      </section>

      <section className="faq-section section">
        <div><p className="kicker dark">Preguntas frecuentes</p><h2>Información antes de participar.</h2></div>
        <div className="faq-list">{faqs.map(([q, a], index) => <details key={q}><summary><span>0{index + 1}</span>{q}</summary><p>{a}</p></details>)}</div>
      </section>

      <EvaluationCTA title="Evalúa la oportunidad antes de ofertar." />
    </PageShell>
  );
}
