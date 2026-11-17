import type { Metadata } from "next";
import { ArrowIcon, EvaluationCTA, InteriorHero, PageShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Servicios inmobiliarios | FIDELIUM",
  description: "Compraventa protegida, estudio de títulos, gestión hipotecaria y remates judiciales en todo Chile.",
  openGraph: { title: "Servicios inmobiliarios | FIDELIUM", description: "Compraventa protegida, estudio de títulos, gestión hipotecaria y remates judiciales en todo Chile.", images: [] },
  twitter: { images: [] },
};

export default function ServiciosPage() {
  return (
    <PageShell>
      <InteriorHero kicker="Servicios" title="Soluciones que integran" emphasis="análisis y gestión." lead="Acompañamos la operación completa o una etapa específica, con alcances y valores transparentes." index="03" photo="/fotos/servicios.jpg" photoAlt="Asesora de FIDELIUM revisando planos con un cliente" />

      <section className="services-overview section">
        <p className="kicker dark">Áreas de servicio</p>
        <div className="overview-grid">
          <article className="overview-card burgundy-card">
            <span>01</span>
            <h2>Compraventa protegida</h2>
            <p>Gestión jurídica, documental, notarial y registral para operaciones con o sin financiamiento hipotecario.</p>
            <ul><li>Sin gestión hipotecaria: 15 UF</li><li>Con gestión hipotecaria: 10 UF</li><li>Estudio de títulos adicional: 2 UF</li></ul>
            <a href="/compraventa-protegida" className="card-link">Ver planes y alcances <ArrowIcon /></a>
          </article>
          <article className="overview-card ivory-card">
            <span>02</span>
            <h2>Remates judiciales</h2>
            <p>Evaluación, estrategia y acompañamiento para participar en remates con mayor información y control.</p>
            <ul><li>Búsqueda y estudio jurídico</li><li>Evaluación comercial</li><li>Participación, adjudicación y entrega</li></ul>
            <a href="/remates-judiciales" className="card-link dark-card-link">Ver etapas y valores <ArrowIcon /></a>
          </article>
        </div>
      </section>

      <section className="service-scope section">
        <div>
          <p className="kicker dark">Cómo definimos el servicio</p>
          <h2>El alcance correcto depende de la operación.</h2>
        </div>
        <div className="scope-steps">
          <article><span>01</span><h3>Antecedentes</h3><p>Revisamos el tipo de propiedad, participantes, financiamiento y estado documental.</p></article>
          <article><span>02</span><h3>Necesidad</h3><p>Identificamos qué etapas requieren acompañamiento y cuáles ya están resueltas.</p></article>
          <article><span>03</span><h3>Propuesta</h3><p>Entregamos un alcance claro, valores aplicables y próximos pasos.</p></article>
        </div>
      </section>

      <EvaluationCTA />
    </PageShell>
  );
}
