import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
  @Output() searchClicked: EventEmitter<string> = new EventEmitter<string>();
  @Input() placeholder_text!: string;
  @Input() disableButton !: boolean;
  onClick(): void {
    const searchText: string = (document.querySelector('.search-bar-input') as HTMLInputElement).value;
    this.searchClicked.emit(searchText);

  }

  clearInputText(): void {
    (document.querySelector('.search-bar-input') as HTMLInputElement).value = '';
  }


  onEnterKey() {
    this.onClick();
  }
}
