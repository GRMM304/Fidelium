import type { Metadata } from "next";
import Image from "next/image";
import { EvaluationCTA, InteriorHero, PageShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "FIDELIUM | Equipo multidisciplinario inmobiliario",
  description: "Conoce el enfoque, los principios y el equipo multidisciplinario de FIDELIUM.",
  openGraph: { title: "FIDELIUM | Equipo multidisciplinario inmobiliario", description: "Conoce el enfoque, los principios y el equipo multidisciplinario de FIDELIUM.", images: [] },
  twitter: { images: [] },
};

export default function FideliumPage() {
  return (
    <PageShell>
      <InteriorHero kicker="Quiénes somos" title="Criterio jurídico para" emphasis="decisiones inmobiliarias." lead="Un equipo multidisciplinario que integra análisis, planificación y gestión para conducir operaciones complejas con mayor claridad." index="02" photo="/fotos/fidelium.jpg" photoAlt="Reunión de asesoría en oficina de FIDELIUM con vista a la cordillera" />

      <section className="editorial-split section">
        <div>
          <p className="kicker dark">FIDELIUM</p>
          <h2>La experiencia no reemplaza al método. Lo hace más preciso.</h2>
        </div>
        <div className="prose-block">
          <p>Durante 10 años hemos acompañado a personas e inversionistas en decisiones relacionadas con compraventas, financiamiento y remates judiciales.</p>
          <p>FIDELIUM nace de una convicción: una operación inmobiliaria requiere más que resolver documentos. Exige comprender el objetivo, anticipar escenarios, coordinar especialistas y mantener el control de cada etapa.</p>
          <p>Por eso trabajamos como un equipo multidisciplinario, sumando mirada jurídica, comercial, inmobiliaria y operativa según las necesidades de cada caso.</p>
        </div>
      </section>

      <section className="brand-principles section">
        <div className="brand-principles-mark"><Image src="/brand/fidelium-seal-gold.png" alt="Sello FIDELIUM" width={800} height={800} /></div>
        <div>
          <p className="kicker">Nuestros principios</p>
          <div className="principle-list">
            <article><span>01</span><h3>Eficiencia</h3><p>Avanzar con orden, prioridades claras y acciones que agreguen valor al proceso.</p></article>
            <article><span>02</span><h3>Planificación</h3><p>Comprender la operación completa antes de ejecutar sus decisiones críticas.</p></article>
            <article><span>03</span><h3>Resguardo</h3><p>Identificar riesgos, documentar acuerdos y proteger los intereses del cliente.</p></article>
          </div>
        </div>
      </section>

      <section className="team-section section">
        <div>
          <p className="kicker dark">Equipo multidisciplinario</p>
          <h2>Una mirada integral para cada operación.</h2>
        </div>
        <div className="discipline-grid">
          <article><span>J</span><h3>Área jurídica</h3><p>Revisión de antecedentes, contratos, instrucciones notariales y procesos registrales.</p></article>
          <article><span>I</span><h3>Gestión inmobiliaria</h3><p>Coordinación de tasaciones, propiedades, participantes y etapas comerciales.</p></article>
          <article><span>E</span><h3>Evaluación estratégica</h3><p>Análisis de viabilidad, costos, riesgos y decisiones de inversión.</p></article>
          <article><span>O</span><h3>Coordinación operativa</h3><p>Seguimiento de hitos, responsables, documentos y cierre de la operación.</p></article>
        </div>
      </section>

      <EvaluationCTA title="Conversemos sobre tu próxima decisión inmobiliaria." />
    </PageShell>
  );
}
