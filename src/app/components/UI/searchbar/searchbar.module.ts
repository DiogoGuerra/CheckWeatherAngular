import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar.component';
import { NavbarComponent } from '../navbar/navbar.component';



@NgModule({
  declarations: [SearchbarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SearchbarComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class SearchbarModule { }
