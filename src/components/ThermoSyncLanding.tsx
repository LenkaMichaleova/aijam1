export default function ThermoSyncLanding() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      {/* TopNavBar */}
      <nav className="neon-wash fixed top-0 z-50 flex w-full items-center justify-between border-b border-primary-container/10 bg-surface/40 px-8 py-4 backdrop-blur-xl">
        <div className="font-headline text-xl font-bold tracking-tighter text-primary">
          ThermoSync
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a
            className="border-b border-primary-container pb-1 font-headline text-xs uppercase tracking-widest text-primary-container transition-colors duration-300"
            href="#"
          >
            Features
          </a>
          <a
            className="font-headline text-xs uppercase tracking-widest text-primary/60 transition-colors duration-300 hover:text-primary-container"
            href="#"
          >
            Compare
          </a>
          <a
            className="font-headline text-xs uppercase tracking-widest text-primary/60 transition-colors duration-300 hover:text-primary-container"
            href="#"
          >
            Reviews
          </a>
        </div>

        <button className="neon-glow rounded-sm bg-primary-container px-6 py-2 font-headline text-xs font-bold uppercase tracking-widest text-on-primary transition-all duration-200 active:scale-95">
          Buy Now
        </button>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <img
              className="h-full w-full object-cover opacity-60"
              alt="Modern sleek black smart thermos standing on a dark minimalist surface with dramatic cyan rim lighting and subtle vapor"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvOfUC6hu2MS4qg8kC3JS7_fET-47o5miw5paK-J95Sn0-tO2GEBc6MuF-24qNBzT4Oo4HiJd6LllYOmgZxHmoTXue9KhOkvlIrk7_ZNUzmytJMT5NcIEfoesTaYntFEHrZSW_gbbCJM8whsJBfxCRnpAio68qACh6VNVlrXB6pLGKXYagEq8qQh7OkDkpxoVx1LHku29vjG-swg2T91x2pN4l0C7RsvJZhHLl7dkaDTocNmbszf0KLnzq34LwUOiAx3VLNFA2Hg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
            <h1 className="font-headline mb-8 text-6xl font-light leading-none tracking-tighter text-primary md:text-8xl lg:text-9xl">
              BUDOUCNOST <br />
              <span className="bg-gradient-to-r from-primary-container to-secondary bg-clip-text font-bold text-transparent">
                HYDRATACE
              </span>
            </h1>

            <p className="mx-auto mb-12 max-w-2xl text-lg font-light tracking-wide text-on-surface-variant md:text-xl">
              První inteligentní termoska na světě, která synchronizuje vaši
              teplotu s vaším životním stylem přes Bluetooth.
            </p>

            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <button className="neon-glow rounded-md bg-primary-container px-10 py-4 font-headline text-sm font-bold uppercase tracking-[0.2em] text-on-primary transition-all hover:scale-105 active:scale-95">
                KOUPIT NYNÍ
              </button>

              <div className="group flex cursor-pointer items-center gap-3 text-secondary">
                <span className="font-headline text-xs uppercase tracking-widest">
                  Sledovat video
                </span>
                <span
                  className="material-symbols-outlined text-3xl transition-transform group-hover:scale-110"
                  aria-hidden="true"
                >
                  play_circle
                </span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-40">
            <span className="font-headline text-[10px] uppercase tracking-[0.3em]">
              Scroll
            </span>
            <div className="h-12 w-[1px] bg-gradient-to-b from-primary to-transparent" />
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="mx-auto max-w-7xl px-8 py-32">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            {/* Large Feature */}
            <div className="ghost-border-top group relative overflow-hidden rounded-xl bg-surface-container p-10 md:col-span-8">
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <span className="mb-4 block font-headline text-xs uppercase tracking-[0.3em] text-primary-container">
                    Precision Control
                  </span>
                  <h2 className="font-headline mb-6 text-4xl font-bold text-primary md:text-5xl">
                    App-Controlled Precision
                  </h2>
                  <p className="max-w-md leading-relaxed text-on-surface-variant">
                    Monitorujte a nastavujte teplotu svého nápoje s přesností na
                    0,5°C přímo z vašeho smartphonu přes ThermoSync App.
                  </p>
                </div>

                <div className="neon-glow mt-12 flex w-fit items-baseline gap-2">
                  <span className="font-headline text-7xl font-bold tracking-tighter text-primary-container">
                    55
                  </span>
                  <span className="ml-1 text-2xl font-light uppercase text-primary-container">
                    °C
                  </span>
                </div>
              </div>

              <img
                className="absolute -bottom-20 -right-20 w-3/4 opacity-20 transition-transform duration-700 group-hover:scale-105"
                alt="Close up of a premium smartphone display showing a sleek temperature control interface with cyan circular slider"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcpFTkJfWnB9N89cTcCRuo0z57QpwoHvUaRFn2n7uzE3tD5RwALLUi0BuhoB8DxX7FTYqn39S-kd69OwqyQuQR0CUGk047Q7ZKd7te9E2DpB8ZjmRcf9Q7S22ZG43Fw_PKO4ZqlWObee7BauzsvE2SHn1dOgOZF4liI5Fl5OfPTpYVnQasVDkSftXnWDHQoekEeQCV-jQJsZ5cnvHMr8NE1pSbbLmEsGpaL0ieItcuNUpBYlwRx8HpGNoIPumRvBv8RibIyzJ2dA"
              />
            </div>

            {/* Small Feature 1 */}
            <div className="ghost-border-top flex flex-col justify-between rounded-xl bg-surface-container p-10 transition-colors hover:bg-surface-container-high md:col-span-4">
              <span
                className="material-symbols-outlined text-4xl text-primary-container"
                aria-hidden="true"
              >
                bolt
              </span>
              <div>
                <h3 className="font-headline mb-3 text-2xl font-bold text-primary">
                  24h Thermal Stamina
                </h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  Pokročilá izolace a baterie s vysokou hustotou udrží váš nápoj
                  v ideální teplotě po celý den i noc.
                </p>
              </div>
            </div>

            {/* Small Feature 2 */}
            <div className="ghost-border-top flex flex-col justify-between rounded-xl bg-surface-container p-10 transition-colors hover:bg-surface-container-high md:col-span-4">
              <span
                className="material-symbols-outlined text-4xl text-primary-container"
                aria-hidden="true"
              >
                shield
              </span>
              <div>
                <h3 className="font-headline mb-3 text-2xl font-bold text-primary">
                  Letecká nerez 18/8
                </h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  Vyrobeno z odolné nerezové oceli 18/8 s čistou chutí,
                  vysokou pevností a povrchem připraveným na každodenní zátěž.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-primary-container/15 bg-surface-container-high px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-primary-container">
                    Ocel 18/8
                  </span>
                  <span className="rounded-full border border-outline-variant/70 bg-surface-container-low px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-on-surface-variant">
                    Bez pachuti
                  </span>
                  <span className="rounded-full border border-outline-variant/70 bg-surface-container-low px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-on-surface-variant">
                    Pro potraviny
                  </span>
                </div>
              </div>
            </div>

            {/* Medium Visual Feature */}
            <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-1 md:col-span-8">
              <img
                className="h-full w-full rounded-xl object-cover opacity-50"
                alt="Macro photography of brushed aerospace-grade stainless steel texture with subtle blue light reflections"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY4i9ckMSBfWpfAHzzSz88CNipJYDXCT8oPAhnRGSdYiCyt3_erZ4tVlyCn7QIzPiziJBDpqUXncXZwZHIo7UQYqfVXWeINZXYr2e5oyJ91gIRXbQyiSTgt4CWMScBUecW5NokYbcii9hB7Html5U71Jy_WD6unOe28IJZOhyNkDVwF4VrFoB4_Uo_fFdU4OyZcHRIFSgylJjaOeFoFC5DLOuJlJS_Soke5CwW6_fpPcs6Mn9YHJezMkHw0TVTeHo2h25GAl9aaw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-10">
                <p className="mb-2 font-headline text-xs uppercase tracking-widest text-primary-container">
                  Technologie
                </p>
                <h4 className="font-headline text-2xl font-bold text-primary md:text-3xl">
                  Navrženo pro extrémní podmínky
                </h4>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-on-surface-variant md:text-base">
                  Vícevrstvá izolace, přesné těsnění a chytré řízení teploty
                  drží výkon stabilní i při dlouhém pohybu, zimě a častém
                  otevírání.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-primary-container/15 bg-surface/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-primary-container backdrop-blur-sm">
                    Izolace
                  </span>
                  <span className="rounded-full border border-outline-variant/80 bg-surface/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-on-surface-variant backdrop-blur-sm">
                    Těsnění
                  </span>
                  <span className="rounded-full border border-outline-variant/80 bg-surface/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-on-surface-variant backdrop-blur-sm">
                    Stabilita teploty
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Comparison */}
        <section className="bg-surface-container-lowest py-32">
          <div className="mx-auto max-w-6xl px-8">
            <div className="mb-20 text-center">
              <h2 className="font-headline mb-4 text-4xl font-bold tracking-tight text-primary md:text-5xl">
                VYBERTE SI SVOU ÚROVEŇ
              </h2>
              <div className="mx-auto h-1 w-20 bg-primary-container" />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-surface-container-highest">
                    <th className="py-8 font-headline text-xs uppercase tracking-widest text-on-surface-variant">
                      Vlastnosti
                    </th>
                    <th className="px-6 py-8 font-headline text-xl font-bold text-primary">
                      Standard
                    </th>
                    <th className="relative px-6 py-8 font-headline text-xl font-bold text-primary-container">
                      Pro
                      <span className="absolute -top-4 left-6 rounded-sm bg-secondary px-2 py-0.5 text-[8px] uppercase tracking-widest text-on-secondary">
                        Most Popular
                      </span>
                    </th>
                    <th className="px-6 py-8 font-headline text-xl font-bold text-secondary">
                      Ultra
                    </th>
                  </tr>
                </thead>

                <tbody className="text-on-surface">
                  <tr className="border-b border-surface-container-highest/30">
                    <td className="py-6 font-medium">Udržení teploty</td>
                    <td className="px-6 py-6 text-on-surface-variant">12 Hodin</td>
                    <td className="px-6 py-6 font-bold text-primary">24 Hodin</td>
                    <td className="px-6 py-6 text-secondary">48 Hodin</td>
                  </tr>

                  <tr className="border-b border-surface-container-highest/30">
                    <td className="py-6 font-medium">Konektivita</td>
                    <td className="px-6 py-6 text-on-surface-variant">
                      Bluetooth 4.2
                    </td>
                    <td className="px-6 py-6 font-bold text-primary">Bluetooth 5.0</td>
                    <td className="px-6 py-6 text-secondary">Ultra-Wideband</td>
                  </tr>

                  <tr className="border-b border-surface-container-highest/30">
                    <td className="py-6 font-medium">Materiál</td>
                    <td className="px-6 py-6 text-on-surface-variant">Steel 18/8</td>
                    <td className="px-6 py-6 font-bold text-primary">Aerospace Steel</td>
                    <td className="px-6 py-6 text-secondary">Titanium Grade 5</td>
                  </tr>

                  <tr className="border-b border-surface-container-highest/30">
                    <td className="py-6 font-medium">OLED Displej</td>
                    <td className="px-6 py-6">
                      <span
                        className="material-symbols-outlined text-error"
                        aria-hidden="true"
                      >
                        close
                      </span>
                    </td>
                    <td className="px-6 py-6">
                      <span
                        className="material-symbols-outlined text-primary-container"
                        aria-hidden="true"
                      >
                        check
                      </span>
                    </td>
                    <td className="px-6 py-6">
                      <span
                        className="material-symbols-outlined text-secondary"
                        aria-hidden="true"
                      >
                        check
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="overflow-hidden px-8 py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 flex items-end justify-between">
              <div>
                <h2 className="font-headline text-4xl font-bold tracking-tight text-primary">
                  ZKUŠENOSTI UŽIVATELŮ
                </h2>
                <p className="mt-2 text-xs font-light uppercase tracking-wide text-on-surface-variant">
                  Ověřené recenze komunity
                </p>
              </div>

              <div className="hidden gap-4 md:flex">
                <button className="rounded-sm border border-outline-variant p-3 transition-colors hover:border-primary-container">
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    arrow_back
                  </span>
                </button>
                <button className="rounded-sm border border-outline-variant p-3 transition-colors hover:border-primary-container">
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Review 1 */}
              <div className="ghost-border-top relative rounded-lg bg-surface-container p-8">
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className="material-symbols-outlined text-sm text-primary-container"
                      aria-hidden="true"
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="mb-8 italic leading-relaxed text-on-surface">
                  "Neuvěřitelná přesnost. Jako baristovi mi ThermoSync umožňuje
                  mít kávu v perfektní teplotě pro pití po celé dopoledne."
                </p>
                <div className="flex items-center gap-4">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    alt="Portrait of a professional man in his 30s with a modern haircut, smiling subtly against a dark background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsNH56fteRkhAkrKVzIDPqlaGHhBjisCsnkzaftX_b4UBgG-NSfUYmhZ5UTI4LRdZOk9fLR1riQQuHBao7gxZUh-dMJBJwW9xPaPu5hWX_JqakwYMZRfwGQkKpFLLYLTOuYxT-03HeSVD-I865YUZoGiHfsX5LT-CxOigL248npD0VJwCNfN_AaY5Ib7DEL9ywmmopLILoGJ8BhHVpasoRsK8fBGiehwJSIuO6AKa4ZLuKO_1cCkUwgu6X7c3CqNw9VCZGgGEIzQ"
                  />
                  <div>
                    <h5 className="text-sm font-bold text-primary">Marek Novotný</h5>
                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">
                      Profesionální Barista
                    </p>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="ghost-border-top relative rounded-lg bg-surface-container p-8">
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className="material-symbols-outlined text-sm text-primary-container"
                      aria-hidden="true"
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="mb-8 italic leading-relaxed text-on-surface">
                  "Design je naprosto špičkový. Vypadá to v kanceláři skvěle a
                  appka je překvapivě intuitivní. Moje nejlepší investice roku."
                </p>
                <div className="flex items-center gap-4">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    alt="Close up portrait of a young professional woman with minimal jewelry, soft studio lighting"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8PNIvHCEoqSEi0M_FOumLmMK-zVaEv_DgiqnMcSn-v3MKibRst7qkesMH35G_VG7GfQzV9pBYipdwJRl-_wFvoeAhconRbOyf5hMzckECC-MRFQE8W00ZV-MjwCOnFY8IIT3tCKP6tOW4l8lyVdNc-P6FY8ood0cc0nBpRyktuYzglkSs4ZsSpS9M-_Zmr435qm_4yJ9X8wYRxZaMutY1rvpLxpeLVlNj86ewPcUWwJLIsESUGDFdBoHAplu0dbJYQBACPTYuRA"
                  />
                  <div>
                    <h5 className="text-sm font-bold text-primary">Elena Svobodová</h5>
                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">
                      Product Designer
                    </p>
                  </div>
                </div>
              </div>

              {/* Review 3 */}
              <div className="ghost-border-top relative rounded-lg border-l-2 border-primary-container bg-surface-container p-8">
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className="material-symbols-outlined text-sm text-primary-container"
                      aria-hidden="true"
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="mb-8 italic leading-relaxed text-on-surface">
                  "Beru ji na každou túru. I po 10 hodinách v mrazu je čaj stále
                  horký. Materiál je extrémně odolný, už mi párkrát spadla."
                </p>
                <div className="flex items-center gap-4">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    alt="Portrait of an athletic man with a beard wearing high-performance outdoor apparel"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVzQQJV3IqdNLKqnhobZI-rS2L1r58BtLMSSUfSIopoKZifItWOkdp4LBlAR0shMMCuLUPq2KOMxqzmbzFfVvfgXJybTCI6fdqxoaDmA0B3CgPzfts4JVINnRA4K1ifhxML5BWv0pTUeOD-8BY92YDw999PWBEvegQ1qHfHluHk3f7TwBQzTZHBGDYsQCoUblL7H0CkscCAgdu4tkIpFueev-h0oMfLqJHjKvR0weCTexhnXlRj1Pm5dj-cIt00m5-JCqHgIMAfA"
                  />
                  <div>
                    <h5 className="text-sm font-bold text-primary">Jakub Král</h5>
                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">
                      Outdoor Explorer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-8 py-24">
          <div className="ghost-border-top relative mx-auto max-w-4xl overflow-hidden rounded-2xl bg-gradient-to-br from-surface-container to-surface-container-high p-16 text-center">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary-container/10 blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-secondary/10 blur-[100px]" />

            <h2 className="font-headline relative z-10 mb-6 text-4xl font-bold text-primary md:text-5xl">
              PŘIPRAVENI NA SYNCHRONIZACI?
            </h2>
            <p className="relative z-10 mx-auto mb-10 max-w-xl text-on-surface-variant">
              Limitovaná edice Graphite Black je nyní k dispozici s doručením do
              48 hodin.
            </p>

            <button className="neon-glow relative z-10 rounded-md bg-primary-container px-12 py-5 font-headline text-sm font-black uppercase tracking-widest text-on-primary transition-all hover:neon-glow-strong">
              OBJEDNAT THERMOSYNC PRO
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex w-full flex-col items-center justify-between gap-6 border-t border-surface-container-highest bg-surface-container-lowest px-8 py-12 md:flex-row">
        <div className="font-headline text-lg font-black text-primary-container">
          THERMOSYNC
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a
            className="text-[10px] tracking-tight text-primary/40 opacity-80 transition-all hover:text-secondary hover:opacity-100"
            href="#"
          >
            Tech Support
          </a>
          <a
            className="text-[10px] tracking-tight text-primary/40 opacity-80 transition-all hover:text-secondary hover:opacity-100"
            href="#"
          >
            Privacy
          </a>
          <a
            className="text-[10px] tracking-tight text-primary/40 opacity-80 transition-all hover:text-secondary hover:opacity-100"
            href="#"
          >
            Terms
          </a>
          <a
            className="text-[10px] tracking-tight text-primary/40 opacity-80 transition-all hover:text-secondary hover:opacity-100"
            href="#"
          >
            Twitter
          </a>
          <a
            className="text-[10px] tracking-tight text-primary/40 opacity-80 transition-all hover:text-secondary hover:opacity-100"
            href="#"
          >
            Instagram
          </a>
        </div>
        <div className="text-[10px] uppercase tracking-tight text-primary/40">
          © 2024 THERMOSYNC PRECISION. ALL RIGHTS RESERVED.
        </div>
      </footer>

      {/* Mobile Sync Glow Indicator (Fixed Corner) */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative flex items-center justify-center">
          <div className="absolute h-12 w-12 animate-ping rounded-full bg-secondary-container opacity-20" />
          <div className="sync-glow relative flex h-10 w-10 items-center justify-center rounded-full bg-secondary-container">
            <span
              className="material-symbols-outlined text-xl text-primary"
              aria-hidden="true"
            >
              sync
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
