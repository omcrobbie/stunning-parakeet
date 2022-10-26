import { Subscription } from 'rxjs';
import { Hero } from './../Hero';
import { HeroService } from './../hero.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  heroes?: Hero[];
  sub?: Subscription;

  constructor(private heroService: HeroService) {}

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.sub = this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(0, 5)));
  }
}
