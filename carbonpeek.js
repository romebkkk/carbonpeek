/*! CarbonPeek v1.0.0 — estima la huella de CO2 de una página web
 *  by DataFlow Elegance · MIT · https://github.com/romebkkk/carbonpeek
 *  100% en el navegador. Modelo: Sustainable Web Design (aprox.).
 */
(function (global) {
  "use strict";

  // Constantes del modelo Sustainable Web Design (valores de referencia).
  var KWH_PER_GB = 0.81;      // energía por GB transferido (kWh/GB)
  var GRID_G_PER_KWH = 442;   // intensidad de carbono media de la red (gCO2/kWh)
  var GREEN_FACTOR = 0.91;    // ajuste si el hosting usa energía renovable

  // Bandas de nota según gCO2 por visita (inspiradas en percentiles reales).
  var BANDS = [
    { max: 0.30, grade: "A+" },
    { max: 0.50, grade: "A" },
    { max: 0.75, grade: "B" },
    { max: 1.00, grade: "C" },
    { max: 1.50, grade: "D" },
    { max: 2.00, grade: "E" },
    { max: Infinity, grade: "F" }
  ];

  function gradeFor(grams) {
    for (var i = 0; i < BANDS.length; i++) {
      if (grams <= BANDS[i].max) return BANDS[i].grade;
    }
    return "F";
  }

  /**
   * Estima el CO2 por visita a partir del peso transferido.
   * @param {number} bytes - peso total de la página (bytes)
   * @param {object} opts - { greenHost: bool }
   */
  function estimate(bytes, opts) {
    opts = opts || {};
    bytes = Number(bytes) || 0;
    var gb = bytes / 1e9;
    var kwh = gb * KWH_PER_GB;
    var grams = kwh * GRID_G_PER_KWH;
    if (opts.greenHost) grams *= GREEN_FACTOR;

    var r3 = function (x) { return Math.round(x * 1000) / 1000; };
    return {
      bytes: bytes,
      mb: Math.round((bytes / 1048576) * 100) / 100,
      kwh: r3(kwh),
      grams_co2: r3(grams),
      grade: gradeFor(grams),
      green_host: !!opts.greenHost,
      // equivalencias divulgativas (aprox.) para 10.000 visitas/mes
      kg_per_10k_visits: Math.round((grams * 10000 / 1000) * 10) / 10
    };
  }

  // Insignia SVG compartible (para pegar en un README o web).
  function badgeSVG(res) {
    var color = (res.grade === "A+" || res.grade === "A") ? "#16a34a"
      : (res.grade === "B" || res.grade === "C") ? "#d97706" : "#dc2626";
    var label = res.grams_co2 + " g CO₂/visita";
    var w = 190;
    return '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="28" role="img" aria-label="CarbonPeek: ' + label + '">' +
      '<rect width="' + w + '" height="28" rx="6" fill="#0b1220"/>' +
      '<rect x="120" width="' + (w - 120) + '" height="28" rx="6" fill="' + color + '"/>' +
      '<text x="10" y="18" fill="#9fe6c0" font-family="system-ui,sans-serif" font-size="12">🌱 CarbonPeek</text>' +
      '<text x="' + (120 + (w - 120) / 2) + '" y="18" fill="#fff" font-family="system-ui,sans-serif" font-size="11" text-anchor="middle" font-weight="700">' + res.grade + ' · ' + res.grams_co2 + 'g</text>' +
      '</svg>';
  }

  global.CarbonPeek = {
    version: "1.0.0",
    estimate: estimate,
    gradeFor: gradeFor,
    badgeSVG: badgeSVG,
    constants: { KWH_PER_GB: KWH_PER_GB, GRID_G_PER_KWH: GRID_G_PER_KWH }
  };
})(typeof window !== "undefined" ? window : globalThis);
