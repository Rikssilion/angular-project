import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from "./components/contact/contact.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { AboutComponent } from "./components/about/about.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactComponent, SkillsComponent, ProjectsComponent, AboutComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular18-app';
}
