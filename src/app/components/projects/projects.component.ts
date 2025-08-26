import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
projects = [
    { title: 'Проект 1', description: 'Описание проекта 1' },
    { title: 'Проект 2', description: 'Описание проекта 2' },
    { title: 'Проект 3', description: 'Описание проекта 3' }
  ];
    constructor(private http: HttpClient) { }

  loadProjects() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => {
        this.projects = data.slice(0, 5); 
      }, error => console.error(error));
  }
}

