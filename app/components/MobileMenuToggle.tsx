"use client";

import { useEffect, useState } from "react";

export function MobileMenuToggle() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const menu = document.getElementById("menu");
    if (!menu) return;
    menu.classList.toggle("open", open);
    const close = () => setOpen(false);
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
    return () => menu.querySelectorAll("a").forEach((a) => a.removeEventListener("click", close));
  }, [open]);

  return (
    <button className="mobile-toggle" type="button" aria-controls="menu" aria-expanded={open} aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)}>
      {open ? "✕" : "☰"}
    </button>
  );
}
