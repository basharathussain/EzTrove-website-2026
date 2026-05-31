import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-ink-900 text-ink-300 mt-24">
      <div class="container-page py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div class="flex items-center gap-2 text-white">
            <span class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 text-white font-extrabold">E</span>
            <span class="font-extrabold text-lg">EzTrove</span>
          </div>
          <p class="mt-4 text-sm leading-relaxed">
            Automation tooling for cross-platform resellers — order routing, repricing and stock monitoring under one roof.
          </p>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-4">Product</h4>
          <ul class="space-y-2 text-sm">
            <li><a routerLink="/marketplaces" class="hover:text-white">Marketplaces</a></li>
            <li><a routerLink="/fulfillment" class="hover:text-white">Fulfillment</a></li>
            <li><a routerLink="/pricing" class="hover:text-white">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-4">Resources</h4>
          <ul class="space-y-2 text-sm">
            <li><a routerLink="/blog" class="hover:text-white">Blog</a></li>
            <li><a href="#" class="hover:text-white">Help center</a></li>
            <li><a href="#" class="hover:text-white">API docs</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-4">Company</h4>
          <ul class="space-y-2 text-sm">
            <li><a routerLink="/contact" class="hover:text-white">Contact</a></li>
            <li><a href="#" class="hover:text-white">Terms</a></li>
            <li><a href="#" class="hover:text-white">Privacy</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-ink-700/60">
        <div class="container-page py-6 flex flex-col md:flex-row justify-between gap-3 text-xs">
          <span>© {{ year }} EzTrove. All rights reserved.</span>
          <span>Built for sellers who want their nights back.</span>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  year = new Date().getFullYear();
}
