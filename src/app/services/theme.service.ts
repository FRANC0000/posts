import { Injectable, inject, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDark = signal<boolean>(false);

  constructor() {
    const savedTheme = localStorage.getItem('theme');

    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    this.setDarkMode(savedTheme === 'dark' || (!savedTheme && systemPrefersDark));

    effect(() => {
      const isDark = this.isDark();
      if (isDark) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  }

  toggleTheme() {
    this.isDark.update(v => !v);
  }

  private setDarkMode(isDark: boolean) {
    this.isDark.set(isDark);
  }
}
