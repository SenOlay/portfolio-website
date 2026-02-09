import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects';
import { ContactsComponent } from '../contacts/contacts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule,ProjectsComponent, ContactsComponent],
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.css'],
})
export class LandingPage {

  currentSection: 'about' | 'projects' | 'skills' | 'contact' = 'about';

  navigateTo(section: 'about' | 'projects' | 'skills' | 'contact'): void {
    this.currentSection = section;
  }

}