import { inject, Injectable, signal } from '@angular/core';
import { WINDOW } from "@shared/injection-tokens";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private _prefix = signal('psi.manoella@');

  private window = inject(WINDOW);

  private _state = signal<Record<LocalStorageKey, any>>({} as any);
  state = this._state.asReadonly();

  constructor() {
    this.atualizarState()
  }

  get<T = string>(key: LocalStorageKey): T | null {
    const value = this.window?.localStorage?.getItem(this._prefix() + key);

    if ([null, undefined].includes(value as any)) {
      return null;
    }

    return JSON.parse(value!);
  }

  set<T = any>(key: LocalStorageKey, value: T): void {
    this.window?.localStorage?.setItem(this._prefix() + key, JSON.stringify(value ?? null));
    this.atualizarState();
  }

  remove(key: LocalStorageKey): void {
    this.window?.localStorage?.removeItem(this._prefix() + key);
    this.atualizarState();
  }

  clear() {
    (Object.keys(LocalStorageKey) as LocalStorageKey[]).forEach((key) => this.remove(key));
  }

  private atualizarState(): void {
    let values: Partial<Record<LocalStorageKey, any>> = {};
    (Object.keys(LocalStorageKey) as LocalStorageKey[]).forEach((key) => values[key] = this.get(key));
    this._state.update((prev) => ({ ...prev, ...values }));
  }
}

export enum LocalStorageKey {
  ValorSessao = 'ValorSessao'
}
