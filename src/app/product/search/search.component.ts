import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  textSearch: string = '';

  @ViewChild('searchInput') searchInputEle!: ElementRef;

  inputTextChange(event: any){
    this.textSearch = event.target.value;
  }
  
  updateSearch(){
    this.textSearch = this.searchInputEle.nativeElement.value;
    this.onSearchTextChanged.emit(this.textSearch);
  }

  @Output()
    onSearchTextChanged: EventEmitter<string> = new EventEmitter<string>();
}
