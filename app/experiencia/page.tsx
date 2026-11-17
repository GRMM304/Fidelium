import type { Metadata } from "next";
import { EvaluationCTA, InteriorHero, PageShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Experiencia inmobiliaria | FIDELIUM",
  description: "10 años de experiencia, más de 200 casos de éxito y cobertura en todo Chile.",
  openGraph: { title: "Experiencia inmobiliaria | FIDELIUM", description: "10 años de experiencia, más de 200 casos de éxito y cobertura en todo Chile.", images: [] },
  twitter: { images: [] },
};

export default function ExperienciaPage() {
  return (
    <PageShell>
      <InteriorHero kicker="Experiencia" title="Trayectoria que se transforma en" emphasis="criterio." lead="Diez años acompañando operaciones inmobiliarias y más de 200 casos conducidos con método, confidencialidad y visión integral." index="06" />

      <section className="experience-numbers section">
        <article><strong>10</strong><span>Años de experiencia</span><p>Conocimiento acumulado en operaciones, documentos, participantes y procesos inmobiliarios.</p></article>
        <article><strong>+200</strong><span>Casos de éxito</span><p>Compraventas, gestiones hipotecarias y oportunidades en remate acompañadas por el equipo.</p></article>
        <article><strong>Todo Chile</strong><span>Cobertura nacional</span><p>Capacidad para analizar y coordinar operaciones en distintas comunas y regiones del país.</p></article>
      </section>

      <section className="experience-detail section">
        <div><p className="kicker dark">Qué hacemos</p><h2>Experiencia aplicada a propiedades y escenarios distintos.</h2></div>
        <div className="experience-types">
          <article><span>01</span><h3>Casas</h3><p>Operaciones de compraventa, financiamiento, revisión documental e inscripción.</p></article>
          <article><span>02</span><h3>Departamentos</h3><p>Coordinación jurídica y operativa para operaciones con o sin gestión bancaria.</p></article>
          <article><span>03</span><h3>Propiedades en remate</h3><p>Análisis de antecedentes, valorización, participación y gestión posterior.</p></article>
        </div>
      </section>

      <section className="confidentiality section">
        <div><p className="kicker">Confidencialidad</p><h2>La experiencia se demuestra en el trabajo, no exponiendo a nuestros clientes.</h2></div>
        <p>Por respeto a la privacidad y a los acuerdos establecidos, no publicamos nombres, testimonios ni antecedentes que permitan identificar las operaciones realizadas. Cada caso se trata de manera reservada.</p>
      </section>

      <section className="experience-values section">
        <div><p className="kicker dark">Lo que aporta la experiencia</p><h2>Anticipación, coordinación y mejores preguntas.</h2></div>
        <div className="value-list">
          <article><h3>Reconocer señales</h3><p>Identificar observaciones, vacíos y riesgos antes de que se conviertan en problemas mayores.</p></article>
          <article><h3>Ordenar participantes</h3><p>Coordinar propietarios, compradores, bancos, notarías, especialistas y organismos registrales.</p></article>
          <article><h3>Tomar perspectiva</h3><p>Evaluar la operación jurídica y comercialmente, sin perder de vista el objetivo final.</p></article>
        </div>
      </section>

      <EvaluationCTA title="Pon nuestra experiencia al servicio de tu operación." />
    </PageShell>
  );
}
