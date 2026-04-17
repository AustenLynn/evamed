import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class EnergyTotalService {
  private construction$ = new BehaviorSubject<number>(0);
  private usage$        = new BehaviorSubject<number>(0);
  private endLife$      = new BehaviorSubject<number>(0);

  breakdown$ = combineLatest([this.construction$, this.usage$, this.endLife$]).pipe(
    map(([c, u, e]) => ({
      construction: c,
      usage: u,
      endLife: e,
      total: c + u + e
    }))
  );

  setConstructionTotal(val: number): void { this.construction$.next(val || 0); }
  setUsageTotal(val: number): void        { this.usage$.next(val || 0); }
  setEndLifeTotal(val: number): void      { this.endLife$.next(val || 0); }
}
