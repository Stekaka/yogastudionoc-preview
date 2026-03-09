/**
 * Theme Management Utilities
 */

export type ThemePreset =
  | 'navy'
  | 'forest'
  | 'graphite'
  | 'bluegray'
  | 'petrol'
  | 'wine'
  | 'industrial'
  | 'olive'
  | 'charcoal'
  | 'brown'
  | 'slate'
  | 'dark'
  | 'yoga'
  | 'corporate'
  | 'creative'
  | 'startup'
  | 'ocean'
  | 'minimal';

export type ThemeMode = 'light' | 'dark';

export interface ThemeConfig {
  preset: ThemePreset;
  mode: ThemeMode;
}

/**
 * Apply theme to document
 */
export function applyTheme(config: ThemeConfig): void {
  const root = document.documentElement;
  root.setAttribute('data-theme', config.preset);

  // Apply mode if it's dark
  if (config.mode === 'dark') {
    root.classList.add('dark-mode');
  } else {
    root.classList.remove('dark-mode');
  }
}

/**
 * Get current theme from document
 */
export function getCurrentTheme(): ThemeConfig {
  const root = document.documentElement;
  const preset = (root.getAttribute('data-theme') as ThemePreset) || 'navy';
  const mode: ThemeMode = root.classList.contains('dark-mode') ? 'dark' : 'light';

  return { preset, mode };
}

/**
 * Save theme to localStorage
 */
export function saveTheme(config: ThemeConfig): void {
  localStorage.setItem('theme', JSON.stringify(config));
}

/**
 * Load theme from localStorage
 */
export function loadTheme(): ThemeConfig | null {
  const stored = localStorage.getItem('theme');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return null;
    }
  }
  return null;
}

/**
 * Initialize theme from localStorage or default
 */
export function initializeTheme(): void {
  const stored = loadTheme();
  if (stored) {
    applyTheme(stored);
  } else {
    // Default theme
    applyTheme({ preset: 'navy', mode: 'light' });
  }
}

/**
 * Available theme presets with labels
 */
export const THEME_PRESETS: Array<{ value: ThemePreset; label: string; color: string }> = [
  { value: 'navy', label: 'Navy Corporate', color: '#0B1F3B' },
  { value: 'forest', label: 'Skogsgrön', color: '#1F3D2B' },
  { value: 'graphite', label: 'Modern Graphite', color: '#2C2F33' },
  { value: 'bluegray', label: 'Blågrå Professional', color: '#2C3E50' },
  { value: 'petrol', label: 'Petroleum Blue', color: '#004D5C' },
  { value: 'wine', label: 'Burgundy Wine', color: '#5C2028' },
  { value: 'industrial', label: 'Industrial Steel', color: '#3C444A' },
  { value: 'olive', label: 'Olivgrön Earth', color: '#3D4E2C' },
  { value: 'charcoal', label: 'Charcoal Executive', color: '#1A1D23' },
  { value: 'brown', label: 'Chocolate Brown', color: '#4A3728' },
  { value: 'slate', label: 'Slate Professional', color: '#475569' },
  { value: 'dark', label: 'Dark Theme', color: '#0f172a' },
  { value: 'yoga', label: 'Yoga Zen', color: '#8b5cf6' },
  { value: 'corporate', label: 'Corporate Blue', color: '#1e40af' },
  { value: 'creative', label: 'Creative Purple', color: '#7c3aed' },
  { value: 'startup', label: 'Startup Orange', color: '#ea580c' },
  { value: 'ocean', label: 'Ocean Teal', color: '#0d9488' },
  { value: 'minimal', label: 'Minimal Mono', color: '#18181b' },
];
