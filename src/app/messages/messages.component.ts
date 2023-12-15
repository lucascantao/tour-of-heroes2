import { Component } from '@angular/core';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

import { MessageService } from '../message.service';

@Component({
  // standalone: true,
  // imports: [HeroesComponent, HeroDetailComponent],
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {}

}
