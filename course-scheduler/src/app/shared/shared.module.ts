import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { DurationPipe } from './pipes/duration.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DurationPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    DurationPipe

  ]
})
export class SharedModule { }
