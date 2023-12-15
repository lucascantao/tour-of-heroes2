import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { NgFor } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MessageService } from '../message.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [NgFor, HeroDetailComponent, RouterLink],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heroes: Hero[] = [];
  selectedHero?: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
    
  }
}