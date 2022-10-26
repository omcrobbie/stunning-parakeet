import { Subscription } from 'rxjs';
import { HeroService } from './../hero.service';
import { Hero } from './../Hero';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  hero?: Hero;
  sub?: Subscription;
  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) {}

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.sub = this.heroService
      .getHero(id)
      .subscribe((hero) => (this.hero = hero));
  }

  goBack() {
    this.location.back();
  }

  save(hero: Hero): void {
    if (this.hero) {
      this.heroService.updateHero(hero).subscribe(() => this.goBack());
    }
  }
}
