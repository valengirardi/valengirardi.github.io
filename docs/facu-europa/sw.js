/* Guarda la guía en el celular para usarla sin conexión. Versión a06b228f58 */
const SHELL = "facu-shell-a06b228f58";
const DATA = "facu-data-v1";
const SHELL_FILES = ["./","index.html","manifest.webmanifest","avisos.ics","vendor/maplibre-gl.js","fonts/4bec71f38e.woff2","fonts/7073ac1529.woff2","fonts/7a09be031c.woff2","fonts/98422a3ade.woff2","fonts/f0c28dac33.woff2","fonts/fd63b3a7fd.woff2","fonts/fonts.css","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-512.png","icons/icon-maskable-512.png","thumb/alameda-tajo.jpg","thumb/albaicin.jpg","thumb/alcala.jpg","thumb/alcazaba-granada.jpg","thumb/alcazaba-malaga.jpg","thumb/alcazar.jpg","thumb/aldehuela.jpg","thumb/alfama.jpg","thumb/alfareria.jpg","thumb/almudena.jpg","thumb/atarazanas.jpg","thumb/ayuntamiento-valencia.jpg","thumb/bairro-alto.jpg","thumb/baixa.jpg","thumb/barceloneta.jpg","thumb/batllo.jpg","thumb/bertrand.jpg","thumb/betis.jpg","thumb/bodegas-gaia.jpg","thumb/bolhao.jpg","thumb/bolsa.jpg","thumb/bom-sucesso.jpg","thumb/bombarda.jpg","thumb/born-ccm.jpg","thumb/born.jpg","thumb/cais-gaia.jpg","thumb/cais-sodre.jpg","thumb/calahorra.jpg","thumb/capela-almas.jpg","thumb/capilla-real.jpg","thumb/carlos-v.jpg","thumb/carmelitas.jpg","thumb/carmen.jpg","thumb/carmo-porto.jpg","thumb/carmo.jpg","thumb/casa-musica.jpg","thumb/catedral-bcn.jpg","thumb/catedral-granada.jpg","thumb/catedral-malaga.jpg","thumb/catedral-sevilla.jpg","thumb/catedral-valencia.jpg","thumb/cava-baja.jpg","thumb/cedofeita.jpg","thumb/chiado.jpg","thumb/chueca.jpg","thumb/ciudad-artes.jpg","thumb/ciutadella.jpg","thumb/clerigos.jpg","thumb/constitucion.jpg","thumb/corredera.jpg","thumb/dom-luis.jpg","thumb/dos-aguas.jpg","thumb/embaixada.jpg","thumb/farola.jpg","thumb/flores.jpg","thumb/fourquet.jpg","thumb/foz.jpg","thumb/garrett.jpg","thumb/generalife.jpg","thumb/gracia.jpg","thumb/jardim-morro.jpg","thumb/jardim-pr.jpg","thumb/jardines-cuenca.jpg","thumb/jeronimos.jpg","thumb/juderia.jpg","thumb/la-latina.jpg","thumb/larios.jpg","thumb/lavapies.jpg","thumb/lello.jpg","thumb/ler-devagar.jpg","thumb/letras.jpg","thumb/lonja.jpg","thumb/lx-factory.jpg","thumb/majestic.jpg","thumb/malagueta.jpg","thumb/malasana.jpg","thumb/maria-luisa.jpg","thumb/mercado-central.jpg","thumb/mercado-triana.jpg","thumb/merced.jpg","thumb/mezquita.jpg","thumb/mies.jpg","thumb/miro.jpg","thumb/mondragon.jpg","thumb/montjuic.jpg","thumb/mouros.jpg","thumb/muelle-uno.jpg","thumb/nazaries.jpg","thumb/opera.jpg","thumb/padrao.jpg","thumb/palacio-cristal-madrid.jpg","thumb/palacio-cristal-porto.jpg","thumb/palacio-real.jpg","thumb/palacio-sintra.jpg","thumb/palau-guell.jpg","thumb/park-guell.jpg","thumb/passeig-gracia.jpg","thumb/pasteis-belem.jpg","thumb/patriarca.jpg","thumb/pc-comercio.jpg","thumb/pedrera.jpg","thumb/pena.jpg","thumb/picasso-malaga.jpg","thumb/placa-rei.jpg","thumb/placa-reial.jpg","thumb/plaza-espana.jpg","thumb/plaza-mayor.jpg","thumb/plaza-redonda.jpg","thumb/plaza-villa.jpg","thumb/plaza-virgen.jpg","thumb/poble-sec.jpg","thumb/pompidou.jpg","thumb/pont-bisbe.jpg","thumb/port-vell.jpg","thumb/portas-sol.jpg","thumb/potro.jpg","thumb/prado.jpg","thumb/principe-real.jpg","thumb/puente-nuevo.jpg","thumb/puente-romano.jpg","thumb/puente-viejo.jpg","thumb/quart.jpg","thumb/regaleira.jpg","thumb/retiro.jpg","thumb/ribeira.jpg","thumb/rua-augusta.jpg","thumb/rua-flores.jpg","thumb/russafa.jpg","thumb/sagrada.jpg","thumb/salesas.jpg","thumb/salvador.jpg","thumb/san-anton.jpg","thumb/san-miguel.jpg","thumb/san-nicolas.jpg","thumb/sant-jaume.jpg","thumb/sant-pau.jpg","thumb/santa-ana.jpg","thumb/santa-catarina-porto.jpg","thumb/santa-catarina.jpg","thumb/santa-cruz.jpg","thumb/santa-luzia.jpg","thumb/santa-maria-mar.jpg","thumb/santa-maria-ronda.jpg","thumb/sao-bento.jpg","thumb/sao-pedro.jpg","thumb/se-lisboa.jpg","thumb/se-porto.jpg","thumb/serra-pilar.jpg","thumb/serranos.jpg","thumb/sintra-centro.jpg","thumb/soho-malaga.jpg","thumb/sol.jpg","thumb/teatro-romano.jpg","thumb/temple-august.jpg","thumb/templo-romano.jpg","thumb/time-out.jpg","thumb/toros-ronda.jpg","thumb/torre-belem.jpg","thumb/torre-oro.jpg","thumb/tram28.jpg","thumb/triana.jpg","thumb/turia.jpg","thumb/viana.jpg","vmap/font-noto-sans-bold-0-255.b64.txt","vmap/font-noto-sans-bold-256-511.b64.txt","vmap/font-noto-sans-bold-8192-8447.b64.txt","vmap/font-noto-sans-italic-0-255.b64.txt","vmap/font-noto-sans-italic-256-511.b64.txt","vmap/font-noto-sans-italic-8192-8447.b64.txt","vmap/font-noto-sans-regular-0-255.b64.txt","vmap/font-noto-sans-regular-256-511.b64.txt","vmap/font-noto-sans-regular-8192-8447.b64.txt","vmap/sprite.json","vmap/sprite.png","vmap/sprite@2x.json","vmap/sprite@2x.png","vmap/style.json"];
const isData = u => /\/(img\/[^/]+|vmap\/[a-z]+\.b64\.txt)$/.test(u.pathname);

self.addEventListener("install", e => {
  e.waitUntil(caches.open(SHELL).then(c => c.addAll(SHELL_FILES.map(f => new Request(f, { cache: "reload" })))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== SHELL && k !== DATA).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("notificationclick", e => {
  e.notification.close();
  const go = "./" + ((e.notification.data && e.notification.data.go) || "");
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(cs => {
    for (const c of cs) { if ("focus" in c) { c.navigate ? c.navigate(go).catch(() => {}) : null; return c.focus(); } }
    return self.clients.openWindow(go);
  }));
});
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url); if (url.origin !== location.origin) return;
  if (req.mode === "navigate") {
    // Primero la red (para recibir actualizaciones); sin señal, la copia guardada
    e.respondWith(fetch(req).then(r => { const cp = r.clone(); caches.open(SHELL).then(c => c.put("index.html", cp)); return r; })
      .catch(() => caches.match("index.html", { ignoreSearch: true })));
    return;
  }
  if (isData(url)) {
    // Fotos y mapas: de lo guardado; si falta, se baja y se guarda
    e.respondWith(caches.open(DATA).then(c => c.match(req).then(hit => hit || fetch(req).then(r => { if (r.ok) c.put(req, r.clone()); return r; }))));
    return;
  }
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(r => {
    if (r.ok) { const cp = r.clone(); caches.open(SHELL).then(c => c.put(req, cp)); }
    return r;
  })));
});
