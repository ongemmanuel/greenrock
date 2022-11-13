import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'gr-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {
  @Input() public itemsPerPage: number = 10;
  @Input() public current: number = 0;
  @Input() public dataCount: number = 0;
  @Output() public setPageToDisplay: EventEmitter<{}> = new EventEmitter<{}>()

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

  }

  public get pages() {
    if (this.dataCount > 0) {
      const pagesTotal = Math.ceil(this.dataCount / this.itemsPerPage);
      let collectionOfPages = [];
      for (var i = 0; i < pagesTotal; i++) {
        collectionOfPages.push(i);
      }
      return collectionOfPages;
    }
    else
      return [];
  }

  public goToPrev() {
    if (this.current !== 0) {
      this.current = this.current - 1;
      const startSlice = this.current * this.itemsPerPage;
      const endSlice = (this.current + 1) * this.itemsPerPage;
      this.setPageToDisplay.emit({ current: this.current, start: startSlice, end: endSlice })
    }
  }

  public goToPage(pageNum: number) {
    this.current = pageNum;
    const startSlice = pageNum * this.itemsPerPage;
    const endSlice = (pageNum + 1) * this.itemsPerPage;
    this.setPageToDisplay.emit({ current: this.current, start: startSlice, end: endSlice })
  }

  public goToNext() {
    if (this.current + 1 < this.pages.length) {
      this.current = this.current + 1;
      const startSlice = this.current * this.itemsPerPage;
      const endSlice = (this.current + 1) * this.itemsPerPage;
      this.setPageToDisplay.emit({ current: this.current, start: startSlice, end: endSlice })
    }
  }

}
