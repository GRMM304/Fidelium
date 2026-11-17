"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

const EMAIL = "contacto@fidelium.cl";
const EVENT = "fidelium:servicio";

export type Servicio = "compraventa-sin" | "compraventa-con" | "remates";

export const servicioNombre: Record<Servicio, string> = {
  "compraventa-sin": "Compraventa protegida sin gestión hipotecaria",
  "compraventa-con": "Compraventa protegida con gestión hipotecaria",
  remates: "Remates judiciales",
};

const etapasRemate = [
  { id: "busqueda", nombre: "Búsqueda y estudio jurídico", uf: 15 },
  { id: "evaluacion", nombre: "Evaluación comercial", uf: 7.5 },
  { id: "participacion", nombre: "Gestión de participación en subasta", uf: 7.5 },
  { id: "escritura", nombre: "Escritura de adjudicación", uf: 15 },
  { id: "entrega", nombre: "Gestión de entrega material", uf: 20 },
];

const fmt = (n: number) => n.toLocaleString("es-CL", { maximumFractionDigits: 2 });

export function elegirServicio(s: Servicio) {
  const destino = document.getElementById("cotizador");
  if (!destino) { window.location.href = `/?servicio=${s}#cotizador`; return; }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: s }));
  destino.scrollIntoView({ behavior: "smooth" });
}

export function QuickCard() {
  const [s, setS] = useState<Servicio | "">("");
  return (
    <aside className="quick-card">
      <h3>Cotiza rápido</h3>
      <p className="muted">Elige el servicio y revisa al instante los honorarios referenciales.</p>
      <form className="form-grid" onSubmit={(e) => { e.preventDefault(); elegirServicio((s || "compraventa-con") as Servicio); }}>
        <div>
          <label htmlFor="hero-servicio">¿Qué necesitas resolver?</label>
          <select id="hero-servicio" value={s} onChange={(e) => setS(e.target.value as Servicio)}>
            <option value="">No sé cuál elegir</option>
            <option value="compraventa-con">Compra con crédito hipotecario</option>
            <option value="compraventa-sin">Compraventa sin crédito</option>
            <option value="remates">Comprar en un remate judicial</option>
          </select>
        </div>
        <button className="btn btn-primary" type="submit">Cotizar ahora</button>
        <p className="helper">Valores referenciales en UF. No constituyen una propuesta final.</p>
      </form>
    </aside>
  );
}

export function ServiceButton({ servicio, children, className = "btn btn-outline" }: { servicio: Servicio; children: React.ReactNode; className?: string }) {
  return <button type="button" className={className} onClick={() => elegirServicio(servicio)}>{children}</button>;
}

export function Cotizador() {
  const [servicio, setServicio] = useState<Servicio>("compraventa-con");
  const [estudio, setEstudio] = useState(true);
  const [etapas, setEtapas] = useState<string[]>(etapasRemate.map((e) => e.id));
  const [valorAdj, setValorAdj] = useState("");
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "", consentimiento: false, publicidad: false });
  const [error, setError] = useState("");
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    const desdeUrl = new URLSearchParams(window.location.search).get("servicio");
    if (desdeUrl && desdeUrl in servicioNombre) setServicio(desdeUrl as Servicio);
  }, []);

  useEffect(() => {
    const h = (e: Event) => { setServicio((e as CustomEvent<Servicio>).detail); setEnviado(false); };
    window.addEventListener(EVENT, h);
    return () => window.removeEventListener(EVENT, h);
  }, []);

  const calc = useMemo(() => {
    const lineas: [string, number][] = [];
    if (servicio === "compraventa-sin") lineas.push(["Plan sin gestión hipotecaria (incluye estudio de títulos)", 15]);
    if (servicio === "compraventa-con") {
      lineas.push(["Plan con gestión hipotecaria", 10]);
      if (estudio) lineas.push(["Estudio de títulos", 2]);
    }
    if (servicio === "remates") etapasRemate.filter((e) => etapas.includes(e.id)).forEach((e) => lineas.push([e.nombre, e.uf]));
    const total = lineas.reduce((a, [, uf]) => a + uf, 0);
    const v = parseFloat(valorAdj.replace(/\./g, "").replace(",", "."));
    const comision = servicio === "remates" && v > 0 ? v * 0.04 * 1.19 : 0;
    return { lineas, total, comision };
  }, [servicio, estudio, etapas, valorAdj]);

  function toggleEtapa(id: string) {
    setEtapas((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function enviar(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!form.nombre.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) { setError("Ingresa tu nombre y un email válido."); return; }
    if (!form.consentimiento) { setError("Debes aceptar el uso de tus datos para responder la solicitud."); return; }
    const detalle = calc.lineas.map(([n, uf]) => `- ${n}: ${fmt(uf)} UF`).join("\n");
    const body = [
      `Nombre: ${form.nombre}`,
      `Email: ${form.email}`,
      `Teléfono: ${form.telefono ? "+56 " + form.telefono : "No informado"}`,
      "",
      `Servicio: ${servicioNombre[servicio]}`,
      detalle,
      `Total honorarios referenciales: ${fmt(calc.total)} UF`,
      servicio === "remates" ? `Comisión de éxito: 4% + IVA${calc.comision ? ` (≈ ${fmt(calc.comision)} UF sobre ${valorAdj} UF)` : ""}` : "",
      "",
      `Mensaje: ${form.mensaje || "—"}`,
      `Acepta recibir publicidad: ${form.publicidad ? "Sí" : "No"}`,
    ].filter((l) => l !== "").join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Cotización FIDELIUM — ${servicioNombre[servicio]}`)}&body=${encodeURIComponent(body)}`;
    setEnviado(true);
  }

  return (
    <div className="simulator">
      <form className="card form-grid" onSubmit={enviar} noValidate>
        <div>
          <label htmlFor="sim-servicio">Servicio</label>
          <select id="sim-servicio" value={servicio} onChange={(e) => { setServicio(e.target.value as Servicio); setEnviado(false); }}>
            <option value="compraventa-con">Compraventa protegida con gestión hipotecaria</option>
            <option value="compraventa-sin">Compraventa protegida sin gestión hipotecaria</option>
            <option value="remates">Remates judiciales (por etapas)</option>
          </select>
        </div>

        {servicio === "compraventa-con" && (
          <label className="stage"><input type="checkbox" checked={estudio} onChange={(e) => setEstudio(e.target.checked)} /><span>Agregar estudio de títulos</span><span>2 UF</span></label>
        )}
        {servicio === "compraventa-sin" && <p className="helper">Incluye estudio de títulos, promesa, escritura, coordinación notarial e ingreso al Conservador.</p>}
        {servicio === "remates" && (
          <>
            <div>
              <label>Etapas que necesitas</label>
              <div className="stage-list">
                {etapasRemate.map((e) => (
                  <label className="stage" key={e.id}><input type="checkbox" checked={etapas.includes(e.id)} onChange={() => toggleEtapa(e.id)} /><span>{e.nombre}</span><span>{fmt(e.uf)} UF</span></label>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="sim-adj">Valor estimado de adjudicación (UF, opcional)</label>
              <input id="sim-adj" inputMode="decimal" placeholder="Ej: 3.000" value={valorAdj} onChange={(e) => setValorAdj(e.target.value)} />
              <p className="helper">Se usa solo para estimar la comisión de éxito (4% + IVA), que aplica si la adjudicación resulta exitosa.</p>
            </div>
          </>
        )}

        <div><label htmlFor="sim-nombre">Datos de contacto</label><input id="sim-nombre" placeholder="Nombre y apellido" autoComplete="name" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} /></div>
        <div className="split-2">
          <input type="email" placeholder="Email" aria-label="Email" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input type="tel" placeholder="Teléfono (+56)" aria-label="Teléfono" autoComplete="tel-national" value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })} />
        </div>
        <textarea placeholder="Cuéntanos brevemente tu operación (opcional)" aria-label="Mensaje" value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} />
        <label className="check"><input type="checkbox" checked={form.consentimiento} onChange={(e) => setForm({ ...form, consentimiento: e.target.checked })} /><span>Acepto que FIDELIUM use mis datos para responder esta solicitud.</span></label>
        <label className="check"><input type="checkbox" checked={form.publicidad} onChange={(e) => setForm({ ...form, publicidad: e.target.checked })} /><span>Quiero recibir información y novedades de FIDELIUM (opcional).</span></label>
        {error && <p className="form-error">{error}</p>}
        {enviado
          ? <p className="sent">✓ Se abrió tu aplicación de correo con la cotización. Envíala para que nuestro equipo te contacte.</p>
          : <button type="submit" className="btn btn-primary">Enviar cotización</button>}
      </form>

      <aside className="result">
        <span className="eyebrow dark">Honorarios referenciales</span>
        <h3>Tu cotización</h3>
        <ul>
          <li><span>Servicio</span><strong>{servicioNombre[servicio]}</strong></li>
          {calc.lineas.map(([n, uf]) => <li key={n}><span>{n}</span><strong>{fmt(uf)} UF</strong></li>)}
          {servicio === "remates" && <li><span>Comisión de éxito</span><strong>4% + IVA{calc.comision ? ` (≈ ${fmt(calc.comision)} UF)` : ""}</strong></li>}
        </ul>
        <div className="total">
          <span>Total honorarios</span>
          <strong>{fmt(calc.total)} UF</strong>
          {servicio === "remates" && <small>+ comisión de éxito si hay adjudicación</small>}
        </div>
        <p className="helper">Referencial. No incluye gastos notariales, del Conservador, impuestos, garantías ni desembolsos de terceros. El alcance final se confirma tras revisar los antecedentes.</p>
      </aside>
    </div>
  );
}
