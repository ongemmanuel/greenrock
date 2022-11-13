import { Component, Input } from '@angular/core';

@Component({
  selector: 'gr-input-block',
  templateUrl: './input-block.component.html',
  styleUrls: ['./input-block.component.scss']
})
export class InputBlockComponent {
  @Input() public label: string = 'Label';
  @Input() public value: string = '';
  @Input() public type: string = 'text';
  // data types to be ENUM
  @Input() 
  public isHorizontal: boolean = false;
  @Input() 
  public setLabelWidth: string = '';
  @Input() 
  public setInputWidth: any;


  constructor() { }



}
