"use client";

import { FormEvent, useState } from "react";
import { ArrowIcon, contactEmail } from "./SiteChrome";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `Solicitud de evaluación — ${form.get("servicio") || "Consulta general"}`;
    const body = [
      `Nombre: ${form.get("nombre") || ""}`,
      `Correo: ${form.get("correo") || ""}`,
      `Teléfono: ${form.get("telefono") || "No informado"}`,
      `Servicio: ${form.get("servicio") || "Consulta general"}`,
      `Acepta publicidad: ${form.get("publicidad") ? "Sí" : "No"}`,
      "",
      String(form.get("mensaje") || ""),
    ].join("\n");

    setSent(true);
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={submit} id="formulario">
      <div className="form-grid">
        <label>
          <span>Nombre y apellido *</span>
          <input name="nombre" type="text" required autoComplete="name" />
        </label>
        <label>
          <span>Correo electrónico *</span>
          <input name="correo" type="email" required autoComplete="email" />
        </label>
        <label>
          <span>Teléfono</span>
          <input name="telefono" type="tel" autoComplete="tel" />
        </label>
        <label>
          <span>Servicio de interés *</span>
          <select name="servicio" required defaultValue="">
            <option value="" disabled>Seleccionar</option>
            <option>Compraventa protegida sin gestión hipotecaria</option>
            <option>Compraventa protegida con gestión hipotecaria</option>
            <option>Remates judiciales</option>
            <option>Estudio de títulos</option>
            <option>Consulta general</option>
          </select>
        </label>
      </div>
      <label>
        <span>Cuéntanos brevemente qué necesitas resolver *</span>
        <textarea name="mensaje" rows={6} required />
      </label>
      <label className="consent-field">
        <input type="checkbox" required />
        <span>Acepto ser contactado por FIDELIUM para responder esta solicitud.</span>
      </label>
      <label className="consent-field">
        <input type="checkbox" name="publicidad" value="si" />
        <span>Acepto recibir información y publicidad de FIDELIUM (opcional).</span>
      </label>
      <button className="button button-gold" type="submit">
        Solicitar evaluación <ArrowIcon />
      </button>
      {sent && <p className="form-status">Se abrirá tu aplicación de correo para completar el envío.</p>}
    </form>
  );
}
