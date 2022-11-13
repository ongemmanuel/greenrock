import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'gr-table-with-input',
  templateUrl: './table-with-input.component.html',
  styleUrls: ['./table-with-input.component.scss']
})
export class TableWithInputComponent implements OnInit {
  @Output() 
  private onEditClick: EventEmitter<any> = new EventEmitter();
  @Output() 
  private onDeleteClick: EventEmitter<boolean> = new EventEmitter();
  @Output() 
  private onActionClick: EventEmitter<{name: string, data: any}> = new EventEmitter();

  @Input()
  public tableData: any[] = [];
  @Input()
  public isRowClickable: boolean = false;
  @Input()
  public itemsPerPage: number = 10;

  @Input()
  public editAction: boolean = false;
  @Input()
  public deleteAction: boolean = false;

  @Input()
  public set setWidth(value: number) {
    if (value)
      this.colWidth = value;
  }

  @Input()
  public setTimeColumns: any[] = [];
  @Input()
  public setNumericColumns: any[] = [];
  @Input()
  public hiddenColumns: any[] = [];
  @Input()
  public setStatusColor: boolean = false;

  @Input()
  public dropdownOptions: any[] = [];

  //Add columns with action, array of action names
  @Input()
  public actionColumns: any[] = [];

  // default is w-48 of tailwind width
  // select from here 24, 32, 40, 48, 64, 80, 96
  public colWidth: number = 48;

  public current: number = 0;
  public startSlice: number = 0;
  public endSlice: number = 0 + this.itemsPerPage;

  public setItemsDisplay(event: any) {
    this.startSlice = event.start;
    this.endSlice = event.end;
  }

  public rowEdit(data: any) {
    this.onEditClick.emit(data);
  }

  public rowDelete(data: boolean) {
    this.onDeleteClick.emit(data);
  }

  public customAction(columnName: string, rowData: any) {
    this.onActionClick.emit({name: columnName, data: rowData});
  }

  public unsortKeyValue() {
    return 0;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
