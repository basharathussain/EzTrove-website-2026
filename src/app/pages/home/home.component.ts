import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero — centered, text-first -->
    <section class="pt-20 pb-24 lg:pt-28 lg:pb-32 bg-white">
      <div class="container-page text-center max-w-5xl mx-auto">
        <p class="text-brand-600 font-semibold text-base md:text-lg mb-8">
          All-in-one dropshipping operations suite
        </p>

        <h1 class="font-extrabold tracking-tight leading-[1.05] text-ink-900 text-5xl md:text-6xl lg:text-7xl">
          Run a hands-off store with
          <span class="text-brand-500">smart automation</span>
          built for Amazon, eBay &amp; Shopify
        </h1>

        <div class="mt-10 space-y-2 text-ink-500 text-lg md:text-xl">
          <p>Stop juggling tabs at midnight.</p>
          <p>Stop refunding orders that quietly went out of stock.</p>
        </div>

        <div class="mt-12">
          <a href="#" class="inline-flex items-center justify-center rounded-full bg-ink-900 hover:bg-ink-700 text-white font-semibold px-8 py-4 text-base transition">
            Start 7-day free trial
          </a>
        </div>
      </div>
    </section>

    <!-- Social proof headline -->
    <section class="pb-20 bg-white">
      <div class="container-page text-center max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink-900">
          Join 38,000+ sellers running their stores on EzTrove
        </h2>
        <div class="mt-8 flex items-center justify-center gap-8 text-sm text-ink-500 flex-wrap">
          <span class="flex items-center gap-1"><span class="text-yellow-500">★★★★★</span> 4.8 Trustpilot</span>
          <span class="flex items-center gap-1"><span class="text-yellow-500">★★★★★</span> 4.9 G2</span>
          <span class="flex items-center gap-1"><span class="text-yellow-500">★★★★★</span> 4.7 Capterra</span>
        </div>
      </div>
    </section>

    <!-- Marketplaces strip -->
    <section class="section">
      <div class="container-page text-center">
        <span class="eyebrow">Works where you sell</span>
        <h2 class="h2 mt-3">One platform for every channel.</h2>
        <p class="lede mt-4 max-w-2xl mx-auto">
          Connect each storefront once and EzTrove keeps your catalog, prices and orders in sync.
        </p>
        <div class="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6">
          @for (p of platforms; track p) {
            <div class="card flex flex-col items-center justify-center text-center">
              <div class="h-12 w-12 rounded-xl bg-brand-50 text-brand-700 font-bold flex items-center justify-center text-xl">{{ p.initial }}</div>
              <div class="mt-3 font-semibold">{{ p.name }}</div>
              <div class="text-xs text-ink-500">{{ p.note }}</div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="section bg-ink-900 text-white">
      <div class="container-page">
        <div class="text-center">
          <span class="eyebrow text-brand-300">How it works</span>
          <h2 class="h2 mt-3 text-white">Four steps from sign-up to scaled.</h2>
        </div>
        <div class="mt-14 grid md:grid-cols-4 gap-6">
          @for (s of steps; track s; let i = $index) {
            <div class="rounded-2xl bg-ink-700/40 ring-1 ring-white/10 p-6">
              <div class="h-9 w-9 rounded-full bg-brand-500 text-white font-bold flex items-center justify-center">{{ i + 1 }}</div>
              <h3 class="mt-4 text-lg font-bold">{{ s.title }}</h3>
              <p class="mt-2 text-sm text-ink-300 leading-relaxed">{{ s.body }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Feature highlights -->
    <section class="section">
      <div class="container-page space-y-24">
        @for (f of features; track f; let i = $index) {
          <div class="grid lg:grid-cols-2 gap-12 items-center" [class.lg:flex-row-reverse]="i % 2 === 1">
            <div [class.lg:order-2]="i % 2 === 1">
              <span class="eyebrow">{{ f.eyebrow }}</span>
              <h3 class="h2 mt-3">{{ f.title }}</h3>
              <p class="lede mt-4">{{ f.body }}</p>
              <ul class="mt-6 space-y-3">
                @for (b of f.bullets; track b) {
                  <li class="flex items-start gap-3">
                    <span class="mt-1 h-5 w-5 rounded-full bg-brand-100 text-brand-700 inline-flex items-center justify-center text-xs font-bold">✓</span>
                    <span class="text-ink-700">{{ b }}</span>
                  </li>
                }
              </ul>
            </div>
            <div [class.lg:order-1]="i % 2 === 1">
              <div class="aspect-[5/4] rounded-3xl bg-gradient-to-br from-brand-100 to-brand-50 ring-1 ring-ink-300/20 p-6 flex items-center justify-center shadow-card">
                <div class="text-center text-brand-700/60 font-mono text-xs">{{ f.mock }}</div>
              </div>
            </div>
          </div>
        }
      </div>
    </section>

    <!-- Companion tool: Product Discovery -->
    <section class="section">
      <div class="container-page">
        <div class="rounded-3xl bg-ink-900 text-white p-10 lg:p-14 grid lg:grid-cols-5 gap-10 items-center">
          <div class="lg:col-span-3">
            <span class="eyebrow text-brand-300">Companion tool</span>
            <h2 class="h2 text-white mt-3">
              Find your next winning SKU with <span class="text-brand-300">Product Discovery</span>.
            </h2>
            <p class="mt-5 text-ink-300 text-lg leading-relaxed max-w-xl">
              Our standalone discovery workspace surfaces UK supplier products from AliExpress and Amazon UK,
              scores them on trend, margin, supplier trust and competition, and lets you draft eBay listings in one click —
              before they ever touch your main EzTrove store.
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
              <a href="http://109.199.121.116:12091" target="_blank" rel="noreferrer"
                 class="inline-flex items-center justify-center rounded-full bg-white text-ink-900 hover:bg-brand-50 font-semibold px-6 py-3 transition">
                Open Product Discovery →
              </a>
              <span class="inline-flex items-center text-sm text-ink-300">UK · GBP · sandbox build</span>
            </div>
          </div>
          <div class="lg:col-span-2">
            <div class="rounded-2xl bg-ink-700/40 ring-1 ring-white/10 p-6 font-mono text-xs text-brand-300 space-y-2">
              <div>› discovered_products = 30</div>
              <div class="text-ink-300">› sources: aliexpress_uk · amazon_uk</div>
              <div>› top score = 82.6 / 100</div>
              <div class="text-ink-300">› drafts ready for eBay sandbox</div>
              <div>› try it free →</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Companion tool: TallyTrove -->
    <section class="section pt-0">
      <div class="container-page">
        <div class="rounded-3xl bg-ink-900 text-white p-10 lg:p-14 grid lg:grid-cols-5 gap-10 items-center">
          <div class="lg:col-span-3">
            <span class="eyebrow text-brand-300">Companion tool</span>
            <h2 class="h2 text-white mt-3">
              Honest sourcing with every cost on the receipt —
              <span class="text-brand-300">TallyTrove</span>.
            </h2>
            <p class="mt-5 text-ink-300 text-lg leading-relaxed max-w-xl">
              Where Product Discovery helps you find what to list, TallyTrove is the transparent storefront
              your buyers actually shop on. Itemised pricing on every cart, pre-checkout price-drift verification,
              and a back-office that lets an operator place the real AliExpress order with one click — across US and UK regions.
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
              <a href="http://109.199.121.116:12095" target="_blank" rel="noreferrer"
                 class="inline-flex items-center justify-center rounded-full bg-white text-ink-900 hover:bg-brand-50 font-semibold px-6 py-3 transition">
                Open TallyTrove storefront →
              </a>
              <a href="http://109.199.121.116:12096" target="_blank" rel="noreferrer"
                 class="inline-flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 transition">
                Open TallyTrove admin
              </a>
              <span class="inline-flex items-center text-sm text-ink-300">US + UK · live FX · sandbox</span>
            </div>
          </div>
          <div class="lg:col-span-2">
            <div class="rounded-2xl bg-ink-700/40 ring-1 ring-white/10 p-6 font-mono text-xs text-brand-300 space-y-2">
              <div>› region = GB · currency = GBP</div>
              <div class="text-ink-300">› item £5.20 · ship £1.40 · fees £0.80</div>
              <div>› drift check ✓ (0.4% under 2%)</div>
              <div class="text-ink-300">› vendor_order created · ops queue</div>
              <div>› try it free →</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing teaser -->
    <section class="section bg-brand-50">
      <div class="container-page text-center">
        <span class="eyebrow">Pricing</span>
        <h2 class="h2 mt-3">Plans that grow with your order volume.</h2>
        <p class="lede mt-4 max-w-2xl mx-auto">Start small. Upgrade only when your monthly orders need more headroom.</p>
        <div class="mt-10">
          <a routerLink="/pricing" class="btn-primary">Compare plans</a>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section">
      <div class="container-page">
        <div class="text-center">
          <span class="eyebrow">Customers</span>
          <h2 class="h2 mt-3">Sellers who shipped more, slept more.</h2>
        </div>
        <div class="mt-12 grid md:grid-cols-3 gap-6">
          @for (t of testimonials; track t) {
            <div class="card">
              <div class="text-yellow-500">★★★★★</div>
              <p class="mt-3 text-ink-700 leading-relaxed">"{{ t.quote }}"</p>
              <div class="mt-5 flex items-center gap-3">
                <div class="h-10 w-10 rounded-full bg-brand-100 text-brand-700 font-bold flex items-center justify-center">{{ t.initial }}</div>
                <div>
                  <div class="font-semibold text-sm">{{ t.name }}</div>
                  <div class="text-xs text-ink-500">{{ t.role }}</div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section bg-white border-t border-ink-300/10">
      <div class="container-page max-w-3xl">
        <div class="text-center">
          <span class="eyebrow">FAQ</span>
          <h2 class="h2 mt-3">Common questions.</h2>
        </div>
        <div class="mt-10 divide-y divide-ink-300/20">
          @for (q of faqs; track q) {
            <details class="py-5 group">
              <summary class="cursor-pointer list-none flex items-center justify-between font-semibold text-ink-900">
                {{ q.q }}
                <span class="text-brand-600 group-open:rotate-45 transition">+</span>
              </summary>
              <p class="mt-3 text-ink-500 leading-relaxed">{{ q.a }}</p>
            </details>
          }
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="section bg-brand-600">
      <div class="container-page text-center text-white">
        <h2 class="text-3xl md:text-4xl font-extrabold">Ready to put the busywork on autopilot?</h2>
        <p class="mt-4 text-brand-100">Spin up your first store in under five minutes.</p>
        <div class="mt-8 flex justify-center gap-3 flex-wrap">
          <a href="#" class="btn-primary bg-white text-brand-700 hover:bg-brand-50">Start 7-day free trial</a>
          <a routerLink="/contact" class="btn-secondary bg-transparent border-white/40 text-white hover:bg-white/10">Talk to sales</a>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {
  platforms = [
    { name: 'Amazon',     initial: 'A', note: 'US, EU, UK' },
    { name: 'eBay',       initial: 'e', note: 'US, EU, UK, AU' },
    { name: 'Walmart',    initial: 'W', note: 'US, CA' },
    { name: 'Shopify',    initial: 'S', note: 'Global' },
    { name: 'AliExpress', initial: 'Ae', note: 'Source' }
  ];

  steps = [
    { title: 'Connect your storefronts', body: 'Link Amazon, eBay, Walmart or Shopify in a couple of clicks. Catalog and orders sync instantly.' },
    { title: 'Pick winners with research', body: 'Browse curated supplier listings, filter by margin and ROI, and push them to your stores in bulk.' },
    { title: 'Let EzTrove auto-fulfill', body: 'Every paid order is routed to the right supplier with the right buyer details and a tracking number you can show the customer.' },
    { title: 'Scale with smart pricing', body: 'Our repricing engine reacts to supplier and competitor moves so your margin holds while you sleep.' }
  ];

  features = [
    {
      eyebrow: 'Auto-ordering',
      title: 'Orders placed in seconds, not in your spare time.',
      body: 'When a buyer checks out, EzTrove forwards the order to your chosen supplier with the right address, gift options and notes — then drops the tracking number back into your storefront.',
      bullets: [
        'Multi-supplier routing with fallback rules',
        'Address verification and buyer-message handling',
        'Tracking auto-uploaded to Amazon / eBay / Shopify',
        'Failed-order alerts with a one-click retry'
      ],
      mock: '› AUTO-ORDER  routed → AE supplier  ✓ tracking back in 4m'
    },
    {
      eyebrow: 'Repricing',
      title: 'A repricer that watches the supplier, not just the buy box.',
      body: 'Most repricers only react to competitor moves. EzTrove also reacts when your supplier’s cost shifts, so a margin floor you set actually stays the floor.',
      bullets: [
        'Per-listing margin floor and ceiling',
        'Competitor and supplier dual-trigger',
        'Variant-aware: each SKU repriced independently',
        'Detailed audit log per price change'
      ],
      mock: '› REPRICE  cost +0.40 → ASIN B07X… +$0.55  margin held'
    },
    {
      eyebrow: 'Stock monitoring',
      title: 'Never sell what your supplier just ran out of.',
      body: 'EzTrove checks supplier stock and price every few minutes and pauses your listing the moment things go sideways — no more cancellations, no more late shipments.',
      bullets: [
        'Polling cadence per channel',
        'Auto-pause and auto-resume on restock',
        'Out-of-stock dashboard with one-click swap supplier',
        'Email and Slack alerts'
      ],
      mock: '› STOCK  AE 1005… → 0  listing PAUSED  notify Slack #ops'
    }
  ];

  testimonials = [
    { quote: 'I went from 40 manual orders a day to zero. EzTrove just handles it.', name: 'Marta R.', role: 'Amazon US seller, $1.2M/yr', initial: 'M' },
    { quote: 'The supplier-aware repricer paid for the year-long plan in three weeks.', name: 'Liam K.', role: 'eBay UK reseller', initial: 'L' },
    { quote: 'Out-of-stock cancellations dropped to almost nothing in the first month.', name: 'Daniel A.', role: 'Walmart US seller', initial: 'D' }
  ];

  faqs = [
    { q: 'Do I need a separate supplier account?',
      a: 'Yes — EzTrove uses your own supplier accounts on Amazon, AliExpress, etc., so you stay in control of payment methods and account standing.' },
    { q: 'Can I try before I pay?',
      a: 'Yes. Every plan starts with a 7-day free trial. No credit card required to begin.' },
    { q: 'How many marketplaces can I connect?',
      a: 'Any number on any plan. Plans are sized by monthly order volume and repricing listings, not by storefront count.' },
    { q: 'Do you support variant listings?',
      a: 'Yes. Each variant SKU is tracked, repriced and ordered independently — with its own margin rules.' },
    { q: 'Can I cancel any time?',
      a: 'Monthly plans cancel any time inside the dashboard. Annual plans are refundable for the unused months minus a small admin fee.' }
  ];
}
