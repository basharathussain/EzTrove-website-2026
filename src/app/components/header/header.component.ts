import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-ink-300/20">
      <div class="container-page flex items-center justify-between h-16">
        <a routerLink="/" class="flex items-center gap-2">
          <span class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white font-extrabold">E</span>
          <span class="font-extrabold text-lg tracking-tight">EzTrove</span>
        </a>

        <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-ink-700">
          <a routerLink="/marketplaces" routerLinkActive="text-brand-700">Marketplaces</a>
          <a routerLink="/fulfillment" routerLinkActive="text-brand-700">Fulfillment</a>
          <a routerLink="/pricing" routerLinkActive="text-brand-700">Pricing</a>
          <a routerLink="/blog" routerLinkActive="text-brand-700">Blog</a>
          <a routerLink="/contact" routerLinkActive="text-brand-700">Contact</a>
        </nav>

        <div class="hidden md:flex items-center gap-3">
          <a href="#" class="text-sm font-semibold text-ink-700 hover:text-brand-700">Sign in</a>
          <a href="#" class="btn-primary py-2 px-4 text-sm">Start free trial</a>
        </div>

        <button (click)="open.set(!open())" class="md:hidden inline-flex items-center justify-center rounded-md p-2 text-ink-700" aria-label="Toggle menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </div>

      @if (open()) {
        <div class="md:hidden border-t border-ink-300/20 bg-white">
          <div class="container-page py-4 flex flex-col gap-3 text-ink-700 font-medium">
            <a routerLink="/marketplaces" (click)="open.set(false)">Marketplaces</a>
            <a routerLink="/fulfillment" (click)="open.set(false)">Fulfillment</a>
            <a routerLink="/pricing" (click)="open.set(false)">Pricing</a>
            <a routerLink="/blog" (click)="open.set(false)">Blog</a>
            <a routerLink="/contact" (click)="open.set(false)">Contact</a>
            <div class="flex gap-3 pt-2">
              <a href="#" class="btn-secondary py-2 px-4 text-sm flex-1 text-center">Sign in</a>
              <a href="#" class="btn-primary py-2 px-4 text-sm flex-1 text-center">Start trial</a>
            </div>
          </div>
        </div>
      }
    </header>
  `
})
export class HeaderComponent {
  open = signal(false);
}
