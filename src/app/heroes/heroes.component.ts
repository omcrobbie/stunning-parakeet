import { MessagesService } from './../message.service';
import { Observable, Subscription } from 'rxjs';
import { HeroService } from './../hero.service';
import { Hero } from './../Hero';
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit, OnDestroy {
  heroes?: Hero[];
  selectedHero?: Hero;
  subscription?: Subscription;
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
  constructor(private heroService: HeroService) {}
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  getHeroes(): void {
    this.subscription = this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService
      .addHero({ name } as Hero)
      .subscribe((hero) => this.heroes?.push(hero));
  }

  delete(hero: Hero) {
    this.heroService.deleteHero(hero.id).subscribe(() => {
      this.heroes = this.heroes?.filter((h) => h !== hero);
    });
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
