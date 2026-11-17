import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { contactEmail, InteriorHero, PageShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Contacto | FIDELIUM",
  description: "Solicita una evaluación para tu compraventa, gestión hipotecaria o propiedad en remate.",
  openGraph: { title: "Contacto | FIDELIUM", description: "Solicita una evaluación para tu compraventa, gestión hipotecaria o propiedad en remate.", images: [] },
  twitter: { images: [] },
};

export default function ContactoPage() {
  return (
    <PageShell>
      <InteriorHero kicker="Contacto" title="Cuéntanos qué necesitas" emphasis="resolver." lead="Una primera revisión nos permitirá comprender la operación, definir el alcance y explicarte cómo avanzar." index="07" photo="/fotos/contacto.jpg" photoAlt="Reunión de evaluación inicial en FIDELIUM" />

      <section className="contact-page section">
        <div className="contact-page-info">
          <p className="kicker dark">Solicitar evaluación</p>
          <h2>Comencemos por los antecedentes principales.</h2>
          <p>Completa el formulario y prepararemos un correo con tu información para enviarlo a nuestro equipo.</p>
          <div className="contact-data">
            <article><span>Correo</span><a href={`mailto:${contactEmail}`}>{contactEmail}</a></article>
            <article><span>Dirección</span><p>Los Militares 5890<br />Las Condes, Santiago</p></article>
            <article><span>Horario</span><p>Lunes a viernes<br />09:00 a 17:00 horas</p></article>
          </div>
        </div>
        <ContactForm />
      </section>

      <section className="contact-note section">
        <div><p className="kicker">Antes de enviar</p><h2>La evaluación inicial no constituye una aceptación automática del caso.</h2></div>
        <p>FIDELIUM revisará los antecedentes generales y confirmará la disponibilidad, el alcance profesional y los honorarios aplicables antes de iniciar cualquier gestión.</p>
      </section>
    </PageShell>
  );
}
