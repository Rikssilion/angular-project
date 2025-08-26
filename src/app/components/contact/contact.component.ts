import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  isSubmitted = false;
contactForm: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required), // одна валидация
      email: new FormControl('', [Validators.required, Validators.email]), // массив валидаций
      subject: new FormControl(''),
      message: new FormControl('')
    });
  }
  submitForm() {
    this.isSubmitted = true;
    if (this.contactForm.valid) {
      console.log('Форма отправлена:', this.contactForm.value);
      alert('Форма успешно отправлена!');
      this.contactForm.reset();
    } else {
      alert('Пожалуйста, заполните форму корректно.');
}

  }



}