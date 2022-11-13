import { Component, Input } from '@angular/core';

@Component({
  selector: 'gr-select-block',
  templateUrl: './select-block.component.html',
  styleUrls: ['./select-block.component.scss']
})
export class SelectBlockComponent {
  @Input() 
  public label: string = '';
  @Input() 
  public options: any[] = [];
  @Input() 
  public isHorizontal: boolean = false;
  @Input() 
  public setLabelWidth: any;
  @Input() 
  public setSelectWidth: any;

  @Input()  
  public includeDefaultAllOption: boolean = false;

  constructor() { }
  ngOnInit(): void {
  }

}
