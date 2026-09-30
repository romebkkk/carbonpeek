# 🌱 CarbonPeek

> How much **CO₂** does a web page emit per visit? CarbonPeek gives you a **grade**, the grams of CO₂ per visit, tips to reduce it, and a **shareable badge** — so you can show off a low-carbon website. Runs 100% in your browser.

<sub>[🇪🇸 Español abajo](#-español)</sub>

---

## What it does
- Estimates **gCO₂ per visit** from your page's transfer size using the **[Sustainable Web Design](https://sustainablewebdesign.org/) model**.
- Gives a **grade (A+ → F)** and the impact per 10k monthly visits.
- Generates a **shareable SVG badge** to embed in your site/README (this is the fun, viral part 🌍).
- Green-hosting adjustment + concrete tips to reduce your footprint.

## How to use
Open `index.html`. Enter your page's total weight in MB (from Chrome DevTools → Network → "transferred", or PageSpeed Insights), or click **"measure this page"** to estimate the current page's weight via the Performance API.

## Honest limitation
A purely in-browser tool **can't** download an arbitrary third-party URL's full weight (CORS), so v1 estimates from a size you provide. **Auto-measuring any URL needs a backend** (roadmap). The carbon model is an approximation for awareness, not a certified audit.

## License
[MIT](LICENSE) © 2026 DataFlow Elegance

---

## 🇪🇸 Español
**CarbonPeek** calcula cuánto **CO₂** emite una web por visita: te da una **nota (A+ → F)**, los gramos por visita, consejos para reducirlo y una **insignia compartible** para presumir de web sostenible. **100% en tu navegador.**

- Estima gCO₂/visita a partir del peso de la página (modelo **Sustainable Web Design**).
- Nota + impacto por 10.000 visitas/mes + ajuste por hosting renovable.
- **Insignia SVG** para pegar en tu web o README (lo viral 🌍).

**Uso:** abre `index.html`. Mete el peso en MB (de DevTools → Network → "transferred", o PageSpeed), o pulsa **"medir esta página"**.

**Límite honesto:** en el navegador no se puede descargar el peso completo de una URL ajena (CORS), así que v1 estima con el peso que le das; el auto-fetch de cualquier URL necesita backend (roadmap). Es orientativo, no una auditoría certificada.

---

<div align="center">
Hecho con ❤️ por <a href="https://github.com/romebkkk">DataFlow Elegance</a> · <a href="https://dataflowelegance.es">dataflowelegance.es</a>
</div>
