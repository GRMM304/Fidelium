import type { Metadata } from "next";
import { CheckIcon, EvaluationCTA, InteriorHero, PageShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Compraventa protegida | FIDELIUM",
  description: "Planes de compraventa protegida con y sin gestión hipotecaria, desde la revisión documental hasta la inscripción.",
  openGraph: { title: "Compraventa protegida | FIDELIUM", description: "Planes con y sin gestión hipotecaria, desde la revisión documental hasta la inscripción.", images: [] },
  twitter: { images: [] },
};

const plans = [
  {
    name: "Sin gestión hipotecaria",
    price: "15 UF",
    description: "Para operaciones que requieren estudio, redacción y coordinación completa desde la promesa hasta la inscripción.",
    featured: true,
    items: [
      "Coordinación de tasación del inmueble",
      "Estudio de títulos",
      "Redacción del contrato de promesa de compraventa",
      "Redacción del contrato de compraventa",
      "Redacción de instrucciones notariales",
      "Coordinación de firma en notaría y cierre de escritura",
      "Registro de instrucciones para su posterior cumplimiento",
      "Ingreso y obtención de carátula en el Conservador de Bienes Raíces",
      "Indicaciones para cobros relacionados con las instrucciones notariales",
    ],
    excluded: ["Gastos notariales", "Gastos del Conservador de Bienes Raíces"],
  },
  {
    name: "Con gestión hipotecaria",
    price: "10 UF",
    description: "Para operaciones financiadas que deben coordinar documentos, banco, notaría y registro.",
    items: [
      "Coordinación de tasación del inmueble",
      "Gestión de documentación para el estudio de títulos",
      "Envío de carpeta de antecedentes al ejecutivo bancario",
      "Manejo y gestión de reparos del estudio de títulos",
      "Redacción de instrucciones notariales",
      "Coordinación de firma en notaría y cierre de escritura",
      "Registro de instrucciones para su posterior cumplimiento",
      "Seguimiento de inscripción ante el Conservador de Bienes Raíces",
      "Indicaciones para cobros relacionados con las instrucciones notariales",
    ],
    excluded: ["Estudio de títulos: 2 UF adicionales", "Gastos notariales", "Gastos del Conservador de Bienes Raíces"],
  },
];

const faqs = [
  ["¿El valor incluye los gastos de notaría y Conservador?", "No. Los honorarios de FIDELIUM no incluyen gastos notariales, derechos del Conservador ni desembolsos de terceros."],
  ["¿El plan con gestión hipotecaria incluye el estudio de títulos?", "No. Puede incorporarse por un valor adicional de 2 UF."],
  ["¿Trabajan con cualquier banco?", "La gestión se coordina con la entidad financiera seleccionada por el cliente, según sus procesos y requerimientos."],
  ["¿Pueden intervenir si la operación ya comenzó?", "Sí. Primero revisamos el estado de avance y definimos las etapas que todavía requieren acompañamiento."],
];

export default function CompraventaPage() {
  return (
    <PageShell>
      <InteriorHero kicker="Compraventa protegida" title="Cada firma debe responder a una" emphasis="operación bien planificada." lead="Coordinamos los aspectos jurídicos, documentales, notariales y registrales necesarios para conducir la compraventa con claridad." index="04" />

      <section className="pricing-section section">
        <div className="pricing-intro">
          <p className="kicker dark">Planes y valores</p>
          <h2>Elige el acompañamiento que necesita tu operación.</h2>
          <p>Todos los valores están expresados en UF. Antes de contratar revisaremos los antecedentes para confirmar el alcance aplicable.</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article className={`pricing-card${plan.featured ? " featured-plan" : ""}`} key={plan.name}>
              <div className="plan-head">
                <p>{plan.name}</p><strong>{plan.price}</strong>
              </div>
              <p className="plan-description">{plan.description}</p>
              <p className="plan-label">Incluye</p>
              <ul className="included-list">{plan.items.map(item => <li key={item}><CheckIcon />{item}</li>)}</ul>
              <div className="excluded-box">
                <p>No incluye</p>
                <ul>{plan.excluded.map(item => <li key={item}>{item}</li>)}</ul>
              </div>
              <a href="/contacto" className={`button ${plan.featured ? "button-gold" : "button-burgundy"}`}>Solicitar evaluación</a>
            </article>
          ))}
        </div>
      </section>

      <section className="additional-service section">
        <div><span>Servicio adicional</span><h2>Estudio de títulos</h2></div>
        <strong>2 UF</strong>
        <p>Aplicable cuando el plan contratado no lo incluye. Su alcance se confirma según los antecedentes de la propiedad.</p>
      </section>

      <section className="faq-section section">
        <div><p className="kicker dark">Preguntas frecuentes</p><h2>Antes de comenzar.</h2></div>
        <div className="faq-list">
          {faqs.map(([q, a], index) => <details key={q}><summary><span>0{index + 1}</span>{q}</summary><p>{a}</p></details>)}
        </div>
      </section>

      <EvaluationCTA title="Protege tu próxima compraventa desde el inicio." />
    </PageShell>
  );
}
