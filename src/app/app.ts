import { Component, signal } from '@angular/core';
import { LandingPage } from './landing-page/landing-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LandingPage],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('portfolio-website');
}