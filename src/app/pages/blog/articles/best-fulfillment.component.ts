import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface TocItem { id: string; label: string; }

@Component({
  selector: 'app-article-best-fulfillment',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Article header -->
    <section class="pt-20 pb-12 lg:pt-24 bg-white">
      <div class="container-page max-w-4xl mx-auto">
        <nav class="text-sm text-ink-500 mb-6">
          <a routerLink="/blog" class="hover:text-brand-700">← Back to blog</a>
        </nav>
        <p class="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-4">Operations · 12 min read</p>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-ink-900">
          Picking the best dropshipping fulfillment model in 2026
        </h1>
        <p class="mt-6 text-lg md:text-xl text-ink-500 leading-relaxed">
          The fastest growing stores aren’t the ones with the slickest ads — they’re the ones whose orders ship on time, every time. Here’s how to choose a fulfillment model that won’t quietly sink your account health.
        </p>
        <div class="mt-8 flex items-center gap-4 text-sm text-ink-500">
          <div class="h-10 w-10 rounded-full bg-brand-100 text-brand-700 font-bold inline-flex items-center justify-center">JK</div>
          <div>
            <div class="font-semibold text-ink-900">EzTrove Team</div>
            <div>Published May 30, 2026</div>
          </div>
        </div>
      </div>
    </section>

    <!-- TOC + body -->
    <section class="pb-24 bg-white">
      <div class="container-page max-w-6xl mx-auto grid lg:grid-cols-12 gap-12">

        <!-- Left: sticky TOC -->
        <aside class="lg:col-span-3">
          <div class="lg:sticky lg:top-24">
            <p class="text-xs font-semibold uppercase tracking-widest text-ink-500 mb-4">On this page</p>
            <nav class="space-y-2 text-sm">
              @for (item of toc; track item.id) {
                <a [href]="'#' + item.id"
                   class="block text-ink-700 hover:text-brand-700 border-l-2 border-ink-300/30 hover:border-brand-500 pl-3 py-1 transition">
                  {{ item.label }}
                </a>
              }
            </nav>

            <div class="mt-10 rounded-2xl bg-brand-50 p-5 ring-1 ring-brand-100">
              <p class="text-sm font-bold text-ink-900">Try fulfillment on autopilot</p>
              <p class="mt-2 text-xs text-ink-500 leading-relaxed">
                EzTrove routes, tracks and refunds your orders end-to-end. 7-day free trial.
              </p>
              <a href="#" class="mt-3 inline-flex items-center justify-center rounded-full bg-ink-900 hover:bg-ink-700 text-white font-semibold px-4 py-2 text-xs transition">Start free trial</a>
            </div>
          </div>
        </aside>

        <!-- Right: body -->
        <article class="lg:col-span-9 prose-article">
          <section id="why-fulfillment-matters">
            <h2>Why fulfillment is the hardest part of dropshipping</h2>
            <p>
              Most new sellers underestimate fulfillment because it sounds boring next to product research and ads. By the time a store starts doing real volume, fulfillment is what everything else hangs on: ad spend depends on the buy box, the buy box depends on account health, account health depends on shipping on time and supplying real tracking. Miss the chain at any point and the rest collapses inside a quarter.
            </p>
            <p>
              The platforms measure you on three numbers — order-defect rate, late-shipment rate, valid-tracking rate. None of those are about your products. They’re about your fulfillment.
            </p>
          </section>

          <section id="four-models" class="mt-12">
            <h2>The four common fulfillment models</h2>
            <p>
              When sellers talk about “fulfillment” they’re usually mixing up four very different setups. It’s worth being precise, because the trade-offs are not the same.
            </p>

            <h3>1. Supplier-direct</h3>
            <p>
              The supplier ships the buyer order on your behalf. You never touch the inventory. This is the classic dropshipping model — low capital, low control. It works at small scale and breaks loudly when supplier stock gets erratic or ship times slip.
            </p>
            <ul>
              <li><strong>Best for:</strong> early validation, niche catalogs, low-velocity SKUs.</li>
              <li><strong>Watch out for:</strong> stock-outs you find out about only when the buyer cancels.</li>
            </ul>

            <h3>2. Self-fulfilled</h3>
            <p>
              You hold the inventory and pack the orders. Higher control, higher capital lock-up, and the operational cost of running a packing operation. Most sellers end up here only on their top-100 SKUs, never the full catalog.
            </p>
            <ul>
              <li><strong>Best for:</strong> bulky items, branded packaging, faster delivery promises.</li>
              <li><strong>Watch out for:</strong> warehouse leases that scale faster than revenue.</li>
            </ul>

            <h3>3. Third-party logistics (3PL)</h3>
            <p>
              A 3PL warehouses your inventory and ships orders against an API. You get FBA-like economics without locking into Amazon’s warehouse network. The economics start to work somewhere around 1,000 orders/month per SKU.
            </p>
            <ul>
              <li><strong>Best for:</strong> proven SKUs you’ve forecast confidently.</li>
              <li><strong>Watch out for:</strong> hidden long-term storage fees on slow movers.</li>
            </ul>

            <h3>4. Hybrid (the one most large stores actually run)</h3>
            <p>
              Top SKUs go through a 3PL or self-fulfillment. The long tail stays supplier-direct. New listings start supplier-direct and graduate up the stack as their velocity stabilises. This is messy in a spreadsheet — which is exactly why most dropshippers fight it until they can’t.
            </p>
          </section>

          <section id="how-to-choose" class="mt-12">
            <h2>What to look for in a fulfillment partner</h2>
            <p>
              Whether your "partner" is one supplier, one 3PL, or a stack of both, the same five questions matter.
            </p>
            <ol>
              <li><strong>Real-time stock and price visibility.</strong> If you can’t see what’s in stock right now (and at what cost), every listing is a guess. Polling cadence matters more than coverage.</li>
              <li><strong>Tracking that lands in the carrier system.</strong> "Tracking uploaded" is not the same as "tracking scannable." The platforms check the second one.</li>
              <li><strong>Returns workflow.</strong> Refunds, partial refunds, reships and disputes need a default — automated if possible. Otherwise this work eats your week.</li>
              <li><strong>Capacity headroom.</strong> Ask what happens on a Black Friday surge. If the answer is "we figure it out," it means your account is the one that absorbs the failure.</li>
              <li><strong>Account isolation.</strong> A 3PL that ships from a flagged warehouse can take your marketplace account down with it. Check the addresses before you go live.</li>
            </ol>
          </section>

          <section id="red-flags" class="mt-12">
            <h2>Red flags to walk away from</h2>
            <p>
              A few patterns reliably end badly. If you see any of these on a sales call, save yourself the migration:
            </p>
            <ul>
              <li>“Stock is updated daily.” Daily isn’t fast enough. By the time you find out a supplier ran out, you’ve already taken orders against air.</li>
              <li>No SLA on order acknowledgement. If the supplier can sit on an order for 36 hours before confirming, your late-shipment rate is theirs to wreck.</li>
              <li>Tracking provided as a screenshot or a copy-paste field. You want a structured tracking number with a real carrier code — not a string the platforms can’t validate.</li>
              <li>Pricing tiers that scale by seat count. Fulfillment doesn’t get more expensive because you hired a VA. Walk.</li>
            </ul>
          </section>

          <section id="how-eztrove" class="mt-12">
            <h2>How EzTrove approaches fulfillment</h2>
            <p>
              EzTrove was built around the hybrid model on purpose. Each SKU can be routed to a different supplier or warehouse, and the routing rule can change as the SKU matures.
            </p>
            <p>
              In practice that means:
            </p>
            <ul>
              <li>Per-SKU primary supplier with up to three fallbacks. When the primary goes out of stock, the order routes to the next supplier before the buyer notices.</li>
              <li>Polling every four minutes on price and stock — fast enough that out-of-stock cancellations stay under half a percent for most sellers.</li>
              <li>Tracking auto-uploaded to the marketplace within minutes of the supplier issuing it, with carrier code attached so the platform validates it.</li>
              <li>Per-order P&L so you can see, for every line item, what it cost and what it earned — and decide which SKUs deserve to graduate to a 3PL.</li>
            </ul>
            <p>
              None of this is magic. It’s the boring operational work, automated.
            </p>
          </section>

          <section id="checklist" class="mt-12">
            <h2>A quick fulfillment checklist</h2>
            <p>
              Before you commit to any fulfillment setup, walk through this five-question check. If you can’t answer all five with a yes, you’re not ready to scale spend behind it.
            </p>
            <ol>
              <li>Can I see live stock and cost for every SKU I sell?</li>
              <li>Does every order get a structured tracking number within 24 hours?</li>
              <li>Do I have a written workflow for refunds, partial refunds, reships and disputes?</li>
              <li>Have I tested what happens when my primary supplier goes down?</li>
              <li>Can I produce a per-order P&L this quarter?</li>
            </ol>
            <p class="text-ink-500 italic">
              The sellers who answer “yes” to all five are the ones whose ad spend keeps working a year from now.
            </p>
          </section>

          <!-- CTA -->
          <div class="mt-16 rounded-2xl bg-ink-900 text-white p-8 lg:p-10 text-center">
            <h3 class="text-2xl md:text-3xl font-extrabold">Let EzTrove run the boring parts.</h3>
            <p class="mt-3 text-ink-300 max-w-xl mx-auto">
              Order routing, tracking, returns and per-order P&L — automated end-to-end. Try it free for seven days.
            </p>
            <div class="mt-6">
              <a href="#" class="inline-flex items-center justify-center rounded-full bg-white text-ink-900 hover:bg-brand-50 font-semibold px-6 py-3 transition">Start 7-day free trial</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  `,
  styles: [`
    .prose-article :is(h2) {
      font-size: 1.875rem;
      line-height: 1.2;
      font-weight: 800;
      letter-spacing: -0.01em;
      color: #0b1220;
      scroll-margin-top: 6rem;
    }
    .prose-article :is(h3) {
      font-size: 1.25rem;
      line-height: 1.3;
      font-weight: 700;
      color: #0b1220;
      margin-top: 1.75rem;
      margin-bottom: 0.5rem;
    }
    .prose-article p {
      color: #4a5876;
      font-size: 1.0625rem;
      line-height: 1.75;
      margin-top: 1rem;
    }
    .prose-article ul, .prose-article ol {
      color: #4a5876;
      font-size: 1.0625rem;
      line-height: 1.75;
      margin-top: 1rem;
      padding-left: 1.5rem;
    }
    .prose-article ul { list-style: disc; }
    .prose-article ol { list-style: decimal; }
    .prose-article li { margin-top: 0.35rem; }
    .prose-article strong { color: #0b1220; font-weight: 700; }
  `]
})
export class ArticleBestFulfillmentComponent {
  toc: TocItem[] = [
    { id: 'why-fulfillment-matters', label: 'Why fulfillment is the hardest part of dropshipping' },
    { id: 'four-models',             label: 'The four common fulfillment models' },
    { id: 'how-to-choose',           label: 'What to look for in a fulfillment partner' },
    { id: 'red-flags',               label: 'Red flags to walk away from' },
    { id: 'how-eztrove',             label: 'How EzTrove approaches fulfillment' },
    { id: 'checklist',               label: 'A quick fulfillment checklist' }
  ];
}
