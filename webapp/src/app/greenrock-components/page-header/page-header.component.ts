import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gr-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
  @Input()
  public pageHeader: string = '';
  constructor() { }


}
