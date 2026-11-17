import type { Metadata } from "next";
import { ServiceButton } from "../components/Cotizador";
import { CtaBand, PageShell } from "../components/SiteChrome";

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
      <section className="hero hero-simple" style={{ ["--hero-img" as string]: "url('/fotos/hero-compraventa.jpg')" }}>
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow dark">Compraventa protegida</span>
            <h1>Cada firma debe responder a una <em>operación bien planificada</em></h1>
            <p>Coordinamos los aspectos jurídicos, documentales, notariales y registrales necesarios para conducir tu compraventa con claridad.</p>
            <div className="actions">
              <ServiceButton servicio="compraventa-con" className="btn btn-primary">Cotizar mi compraventa</ServiceButton>
              <a className="btn btn-secondary" href="/#contacto">Hablar con el equipo</a>
            </div>
            <div className="badges"><span className="badge">Desde 10 UF</span><span className="badge">Hasta la inscripción</span><span className="badge">Con o sin crédito</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="title"><span className="eyebrow">Planes y valores</span><h2>Elige el acompañamiento <em>que necesita tu operación</em></h2><p className="lead">Valores en UF. Antes de contratar revisamos los antecedentes para confirmar el alcance aplicable.</p></div>
          <div className="grid-2">
            {plans.map((plan) => (
              <article className={`card service-card${plan.featured ? " featured" : ""}`} key={plan.name}>
                <span className="eyebrow">{plan.name}</span>
                <div className="price">{plan.price}</div>
                <p>{plan.description}</p>
                <ul className="plan-list">{plan.items.map((item) => <li key={item}>{item}</li>)}</ul>
                <div className="excluded"><strong>No incluye:</strong> {plan.excluded.join(" · ")}</div>
                <div className="card-actions"><ServiceButton servicio={plan.featured ? "compraventa-sin" : "compraventa-con"} className="btn btn-primary">Cotizar este plan</ServiceButton></div>
              </article>
            ))}
          </div>
          <div className="note-bar">
            <p><strong>Estudio de títulos · 2 UF.</strong> Servicio adicional cuando el plan contratado no lo incluye.</p>
            <a className="btn btn-outline" href="/#cotizador">Ir al cotizador</a>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="title"><span className="eyebrow">Preguntas frecuentes</span><h2>Antes de <em>comenzar</em></h2></div>
          <div className="faq">{faqs.map(([q, a], i) => <details key={q} open={i === 0}><summary>{q}</summary><p>{a}</p></details>)}</div>
        </div>
      </section>

      <CtaBand title="Protege tu próxima compraventa desde el inicio" />
    </PageShell>
  );
}
