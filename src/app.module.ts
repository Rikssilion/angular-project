import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // для ngModel и других директив форм
// import { AppComponent } from './app.component';
// import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  // declarations: [
  //   AppComponent,
  //   ContactComponent,
  //   // другие компоненты
  // ],
  imports: [
    BrowserModule,  // обязательно для работы *ngIf, *ngFor, *ngSwitch
    FormsModule     // нужно для [(ngModel)] и других директив
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule { }
