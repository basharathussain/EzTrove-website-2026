import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface SourceRow {
  name: string;
  initial: string;
  autoOrder: boolean | 'soon';
  reprice: boolean | 'soon';
  search: boolean | 'soon';
}

interface TargetRow {
  name: string;
  initial: string;
  regions: string;
}

@Component({
  selector: 'app-marketplaces',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero -->
    <section class="pt-20 pb-20 lg:pt-28 lg:pb-24 bg-white">
      <div class="container-page text-center max-w-4xl mx-auto">
        <p class="text-brand-600 font-semibold text-base md:text-lg mb-6">
          Marketplaces
        </p>
        <h1 class="font-extrabold tracking-tight leading-[1.05] text-ink-900 text-5xl md:text-6xl">
          Every channel you sell on, every supplier you buy from —
          <span class="text-brand-500">one platform</span>.
        </h1>
        <p class="mt-8 text-ink-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Plug in the storefronts where your buyers live, and the suppliers behind your catalog. EzTrove keeps the two sides in sync — orders, prices, stock, tracking.
        </p>
        <div class="mt-10">
          <a href="#" class="inline-flex items-center justify-center rounded-full bg-ink-900 hover:bg-ink-700 text-white font-semibold px-8 py-4 text-base transition">
            Connect a store
          </a>
        </div>
      </div>
    </section>

    <!-- Source markets table -->
    <section class="py-16 lg:py-20 bg-white border-t border-ink-300/15">
      <div class="container-page max-w-5xl">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <p class="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Where you source</p>
          <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight text-ink-900">Supplier sources</h2>
          <p class="mt-4 text-ink-500">
            The marketplaces EzTrove can pull product data from, place automated orders on, and watch for price or stock changes.
          </p>
        </div>

        <div class="overflow-hidden rounded-2xl ring-1 ring-ink-300/30 shadow-card bg-white">
          <table class="w-full text-left">
            <thead class="bg-ink-900 text-white text-xs uppercase tracking-wider">
              <tr>
                <th class="py-4 px-5 font-semibold">Source</th>
                <th class="py-4 px-3 font-semibold text-center">Auto-order</th>
                <th class="py-4 px-3 font-semibold text-center">Repricing</th>
                <th class="py-4 px-3 font-semibold text-center">Listing search</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-ink-300/20">
              @for (row of sources; track row.name) {
                <tr class="hover:bg-brand-50/40 transition">
                  <td class="py-4 px-5">
                    <div class="flex items-center gap-3">
                      <span class="h-9 w-9 rounded-lg bg-brand-50 text-brand-700 font-bold flex items-center justify-center text-sm">{{ row.initial }}</span>
                      <span class="font-semibold text-ink-900">{{ row.name }}</span>
                    </div>
                  </td>
                  <td class="py-4 px-3 text-center">
                    @switch (row.autoOrder) {
                      @case (true)   { <span class="inline-flex h-7 w-7 rounded-full bg-brand-600 text-white items-center justify-center text-sm font-bold">✓</span> }
                      @case ('soon') { <span class="text-xs font-semibold text-ink-500 italic">Coming soon</span> }
                      @default       { <span class="text-ink-300">—</span> }
                    }
                  </td>
                  <td class="py-4 px-3 text-center">
                    @switch (row.reprice) {
                      @case (true)   { <span class="inline-flex h-7 w-7 rounded-full bg-brand-600 text-white items-center justify-center text-sm font-bold">✓</span> }
                      @case ('soon') { <span class="text-xs font-semibold text-ink-500 italic">Coming soon</span> }
                      @default       { <span class="text-ink-300">—</span> }
                    }
                  </td>
                  <td class="py-4 px-3 text-center">
                    @switch (row.search) {
                      @case (true)   { <span class="inline-flex h-7 w-7 rounded-full bg-brand-600 text-white items-center justify-center text-sm font-bold">✓</span> }
                      @case ('soon') { <span class="text-xs font-semibold text-ink-500 italic">Coming soon</span> }
                      @default       { <span class="text-ink-300">—</span> }
                    }
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>

        <p class="mt-5 text-sm text-ink-500 text-center">
          Don’t see your supplier? <a routerLink="/contact" class="text-brand-700 font-semibold hover:underline">Ask us to add it</a> — most new sources ship within a month.
        </p>
      </div>
    </section>

    <!-- Target markets table -->
    <section class="py-16 lg:py-20 bg-brand-50/40">
      <div class="container-page max-w-5xl">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <p class="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Where you sell</p>
          <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight text-ink-900">Sales channels</h2>
          <p class="mt-4 text-ink-500">
            The storefronts your buyers see. Connect once and EzTrove keeps catalog, price and order state aligned.
          </p>
        </div>

        <div class="overflow-hidden rounded-2xl ring-1 ring-ink-300/30 shadow-card bg-white">
          <table class="w-full text-left">
            <thead class="bg-ink-900 text-white text-xs uppercase tracking-wider">
              <tr>
                <th class="py-4 px-5 font-semibold">Channel</th>
                <th class="py-4 px-5 font-semibold">Regions supported</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-ink-300/20">
              @for (row of targets; track row.name) {
                <tr class="hover:bg-brand-50/40 transition">
                  <td class="py-4 px-5">
                    <div class="flex items-center gap-3">
                      <span class="h-9 w-9 rounded-lg bg-brand-50 text-brand-700 font-bold flex items-center justify-center text-sm">{{ row.initial }}</span>
                      <span class="font-semibold text-ink-900">{{ row.name }}</span>
                    </div>
                  </td>
                  <td class="py-4 px-5 text-ink-700">{{ row.regions }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>

        <p class="mt-5 text-sm text-ink-500 text-center">
          Selling somewhere we don’t list yet? <a routerLink="/contact" class="text-brand-700 font-semibold hover:underline">Tell us about it</a>.
        </p>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-20 bg-white">
      <div class="container-page text-center max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink-900">
          Join 38,000+ sellers running their stores on EzTrove
        </h2>
        <div class="mt-10">
          <a href="#" class="inline-flex items-center justify-center rounded-full bg-ink-900 hover:bg-ink-700 text-white font-semibold px-8 py-4 text-base transition">
            Start 7-day free trial
          </a>
        </div>
      </div>
    </section>
  `
})
export class MarketplacesComponent {
  sources: SourceRow[] = [
    { name: 'Amazon US',      initial: 'US', autoOrder: true,  reprice: true,  search: true  },
    { name: 'Amazon UK',      initial: 'UK', autoOrder: true,  reprice: true,  search: true  },
    { name: 'Amazon CA',      initial: 'CA', autoOrder: true,  reprice: true,  search: true  },
    { name: 'Amazon DE',      initial: 'DE', autoOrder: true,  reprice: true,  search: true  },
    { name: 'Amazon FR',      initial: 'FR', autoOrder: true,  reprice: true,  search: true  },
    { name: 'Amazon IT',      initial: 'IT', autoOrder: true,  reprice: true,  search: true  },
    { name: 'Amazon ES',      initial: 'ES', autoOrder: true,  reprice: true,  search: true  },
    { name: 'Amazon IN',      initial: 'IN', autoOrder: true,  reprice: true,  search: true  },
    { name: 'AliExpress',     initial: 'Ae', autoOrder: true,  reprice: true,  search: true  },
    { name: 'Walmart',        initial: 'W',  autoOrder: 'soon', reprice: 'soon', search: true },
    { name: 'Custom supplier (API)', initial: '+', autoOrder: true, reprice: true, search: false }
  ];

  targets: TargetRow[] = [
    { name: 'eBay',       initial: 'e', regions: 'US · UK · DE · AU · FR · IT · ES · CA' },
    { name: 'Amazon FBM', initial: 'A', regions: 'US · UK · DE · FR · IT · ES · CA · AU' },
    { name: 'Shopify',    initial: 'S', regions: 'Global — any country' },
    { name: 'Walmart',    initial: 'W', regions: 'US · CA' },
    { name: 'WooCommerce',initial: 'Wo',regions: 'Global — any country' },
    { name: 'Custom storefront (API)', initial: '+', regions: 'Any platform with a public API' }
  ];
}
