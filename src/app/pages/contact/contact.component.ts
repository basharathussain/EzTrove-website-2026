import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="section bg-gradient-to-b from-brand-50 to-white">
      <div class="container-page grid lg:grid-cols-2 gap-16">
        <div>
          <span class="eyebrow">Contact</span>
          <h1 class="h1 mt-3">Talk to a human.</h1>
          <p class="lede mt-5">
            Sales, onboarding, or just kicking the tires — we read every message and a human responds, usually in under four business hours.
          </p>

          <div class="mt-10 space-y-6">
            <div>
              <div class="text-xs uppercase tracking-wide text-ink-500 font-semibold">Sales</div>
              <div class="font-semibold mt-1">sales&#64;eztrove.io</div>
            </div>
            <div>
              <div class="text-xs uppercase tracking-wide text-ink-500 font-semibold">Support</div>
              <div class="font-semibold mt-1">support&#64;eztrove.io</div>
            </div>
            <div>
              <div class="text-xs uppercase tracking-wide text-ink-500 font-semibold">Press</div>
              <div class="font-semibold mt-1">press&#64;eztrove.io</div>
            </div>
            <div>
              <div class="text-xs uppercase tracking-wide text-ink-500 font-semibold">Office</div>
              <div class="font-semibold mt-1">Remote-first · HQ in Singapore</div>
            </div>
          </div>
        </div>

        <form class="card" (submit)="$event.preventDefault(); submit()">
          <h2 class="text-xl font-bold">Send us a note</h2>
          <p class="text-sm text-ink-500 mt-1">We’ll get back to you within one business day.</p>
          <div class="mt-6 grid gap-4">
            <label class="block">
              <span class="text-xs font-semibold uppercase tracking-wide text-ink-500">Name</span>
              <input [(ngModel)]="model.name" name="name" required class="mt-1 w-full rounded-lg border border-ink-300/40 px-3 py-2 focus:border-brand-500 focus:outline-none">
            </label>
            <label class="block">
              <span class="text-xs font-semibold uppercase tracking-wide text-ink-500">Work email</span>
              <input [(ngModel)]="model.email" name="email" type="email" required class="mt-1 w-full rounded-lg border border-ink-300/40 px-3 py-2 focus:border-brand-500 focus:outline-none">
            </label>
            <label class="block">
              <span class="text-xs font-semibold uppercase tracking-wide text-ink-500">Monthly orders</span>
              <select [(ngModel)]="model.volume" name="volume" class="mt-1 w-full rounded-lg border border-ink-300/40 px-3 py-2 focus:border-brand-500 focus:outline-none bg-white">
                <option value="<100">Less than 100</option>
                <option value="100-500">100 – 500</option>
                <option value="500-2000">500 – 2,000</option>
                <option value="2000+">2,000+</option>
              </select>
            </label>
            <label class="block">
              <span class="text-xs font-semibold uppercase tracking-wide text-ink-500">How can we help?</span>
              <textarea [(ngModel)]="model.message" name="message" rows="4" class="mt-1 w-full rounded-lg border border-ink-300/40 px-3 py-2 focus:border-brand-500 focus:outline-none"></textarea>
            </label>
            <button type="submit" class="btn-primary w-full">Send message</button>
            @if (sent) {
              <div class="text-sm text-brand-700 font-semibold">Thanks — we received it. A human will reply shortly.</div>
            }
          </div>
        </form>
      </div>
    </section>
  `
})
export class ContactComponent {
  model = { name: '', email: '', volume: '100-500', message: '' };
  sent = false;
  submit() { this.sent = true; }
}
