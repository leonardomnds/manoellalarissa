import { InjectionToken } from "@angular/core";

export const SiteURL = new InjectionToken<string>('SITE_URL');
export const WINDOW = new InjectionToken<Window & typeof globalThis>('WINDOW');
