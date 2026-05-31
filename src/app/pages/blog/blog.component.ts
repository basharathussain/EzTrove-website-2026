import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Post {
  tag: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  link: string | null;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="section bg-gradient-to-b from-brand-50 to-white">
      <div class="container-page max-w-3xl mx-auto text-center">
        <span class="eyebrow">Blog</span>
        <h1 class="h1 mt-3">Field notes from the dropshipping front line.</h1>
        <p class="lede mt-5">
          Tactics, benchmarks and post-mortems from the EzTrove team — written for sellers who would
          rather measure than guess.
        </p>
      </div>
    </section>

    <!-- Featured (top) post -->
    @if (featured) {
      <section class="pb-12">
        <div class="container-page">
          <a [routerLink]="featured.link" class="block group">
            <div class="grid lg:grid-cols-2 gap-8 items-center rounded-3xl bg-white ring-1 ring-ink-300/20 shadow-card overflow-hidden">
              <div class="aspect-[16/10] lg:aspect-auto lg:h-full bg-gradient-to-br from-brand-100 to-brand-50 flex items-center justify-center">
                <span class="text-brand-700/70 font-mono text-sm">{{ featured.tag }}</span>
              </div>
              <div class="p-8 lg:p-10">
                <div class="text-xs text-ink-500 uppercase tracking-wide flex items-center gap-2">
                  <span class="rounded-full bg-brand-100 text-brand-700 px-2 py-0.5 font-semibold">Featured</span>
                  <span>{{ featured.category }} · {{ featured.date }}</span>
                </div>
                <h2 class="mt-4 text-2xl md:text-3xl font-extrabold leading-snug text-ink-900 group-hover:text-brand-700 transition">
                  {{ featured.title }}
                </h2>
                <p class="mt-4 text-ink-500 leading-relaxed">{{ featured.excerpt }}</p>
                <span class="mt-5 inline-flex items-center gap-1 text-brand-700 font-semibold">Read article →</span>
              </div>
            </div>
          </a>
        </div>
      </section>
    }

    <!-- Grid of rest -->
    <section class="pb-24">
      <div class="container-page grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        @for (p of posts; track p.title) {
          <article class="card flex flex-col">
            <div class="aspect-[16/9] rounded-xl bg-gradient-to-br from-brand-100 to-brand-50 mb-5 flex items-center justify-center">
              <span class="text-brand-700/70 font-mono text-xs">{{ p.tag }}</span>
            </div>
            <div class="text-xs text-ink-500 uppercase tracking-wide">{{ p.category }} · {{ p.date }}</div>
            <h3 class="mt-3 text-xl font-bold leading-snug">{{ p.title }}</h3>
            <p class="mt-3 text-ink-500 leading-relaxed text-sm flex-1">{{ p.excerpt }}</p>
            @if (p.link) {
              <a [routerLink]="p.link" class="mt-5 inline-flex items-center gap-1 text-brand-700 font-semibold text-sm">Read more →</a>
            } @else {
              <span class="mt-5 inline-flex items-center gap-1 text-ink-500 font-semibold text-sm cursor-not-allowed">Coming soon</span>
            }
          </article>
        }
      </div>
    </section>
  `
})
export class BlogComponent {
  featured: Post = {
    tag: 'OPS', category: 'Operations', date: 'May 30, 2026',
    title: 'Picking the best dropshipping fulfillment model in 2026',
    excerpt: 'The fastest growing stores aren’t the ones with the slickest ads — they’re the ones whose orders ship on time. A practical guide to the four fulfillment models, what to look for in a partner, and the red flags worth walking away from.',
    link: '/blog/best-dropshipping-fulfillment'
  };

  posts: Post[] = [
    { tag: 'PRICE', category: 'Repricing', date: 'May 17, 2026',
      title: 'Why a competitor-only repricer is leaking margin every day',
      excerpt: 'Most repricers chase the buy box. They miss the bigger lever — supplier-cost drift. A side-by-side test on a real account.',
      link: null },
    { tag: 'AE',    category: 'AliExpress', date: 'May 8, 2026',
      title: 'AliExpress block patterns in 2026 — what changed and what still works',
      excerpt: 'TMD soft-blocks moved to a path-based punish flow with new markers. Here is what to look for and how we recover sessions.',
      link: null },
    { tag: 'AMZ',   category: 'Amazon',     date: 'Apr 30, 2026',
      title: 'A practical guide to keeping ODR under 0.5% as a dropshipper',
      excerpt: 'Order-defect rate is the metric that ends accounts. We break it into the four things sellers can actually influence.',
      link: null },
    { tag: 'BIZ',   category: 'Business',   date: 'Apr 19, 2026',
      title: 'Per-order P&L: the spreadsheet you should have built two years ago',
      excerpt: 'If you can’t cost an order in 30 seconds, you can’t reprice with confidence. A simple model that fits on one screen.',
      link: null },
    { tag: 'TECH',  category: 'Engineering',date: 'Apr 5, 2026',
      title: 'Inside the EzTrove repricer — events, fairness and the margin floor',
      excerpt: 'A look at the architecture under our repricing engine, and why we treat each variant SKU as its own little system.',
      link: null }
  ];
}
