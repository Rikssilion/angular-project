import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { ContactComponent } from "./components/contact/contact.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { AboutComponent } from "./components/about/about.component";
import { HeaderComponent } from "./components/header/header.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ContactComponent,
    SkillsComponent,
    ProjectsComponent,
    AboutComponent,
    HeaderComponent,
    CommonModule,   
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular18-app';
  aboutList = [
    { title: 'Обо мне', content: 'Привет! Я учусь работать с Angular. Это мой первый учебный проект.' },
    { title: 'Мои навыки', content: 'Я начинающий разработчик, изучаю TypeScript, Angular и Frontend-разработку.' },
    { title: 'Цели', content: 'Моя цель - стать профессионалом в области веб-разработки и работать с современными технологиями.' }
  ];
}

const routes: Routes = [
  { path: 'skills', component: SkillsComponent },
];
