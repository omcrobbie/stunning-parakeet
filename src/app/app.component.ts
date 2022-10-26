import { Location } from '@angular/common';
import { first, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.location.onUrlChange((url) => {
      this.activeLink = this.links.find((link) => link.link === url);
    });
  }
  title = 'Tour of Heroes';
  links = [
    {
      title: 'Heroes',
      link: '/heroes',
    },
    {
      title: 'Dashboard',
      link: '/dashboard',
    },
  ];
  activeLink: any;

  constructor(private location: Location) {}
}
