import { Component, EventEmitter, Input, OnInit, Output, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

@Component({
  selector: 'gr-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterViewInit {
  @Input()
  public tabs: string[] = [];
  @Input()
  public defaultStyle: boolean = true;

  @Output()
  public onTabSelect = new EventEmitter<string>();

  constructor(
    private el: ElementRef
  ) { }

  ngAfterViewInit(): void {
    if (this.el.nativeElement.querySelectorAll('button'))
      this.el.nativeElement.querySelectorAll('button')[0].click();
  }

  public setActive(activeTab: any, selected: string) {
    const allTabs = this.el.nativeElement.querySelectorAll('button');

    allTabs.forEach((inActiveTab: any) => {
      inActiveTab.classList.remove('text-blueDS-500');

      if (this.defaultStyle) {
        inActiveTab.classList.remove('border-blueDS-500');
        inActiveTab.classList.add('text-gray-500');
      } else {
        inActiveTab.classList.remove('border-gray-200');
        inActiveTab.classList.remove('border-b-white');
        inActiveTab.classList.remove('border');
        inActiveTab.classList.remove('bg-white');
      }

    });

    activeTab.srcElement.classList.add('text-blueDS-500');

    if (this.defaultStyle) {
      activeTab.srcElement.classList.remove('text-gray-500');
      activeTab.srcElement.classList.add('border-blueDS-500');
    } else {
      activeTab.srcElement.classList.add('border-gray-200');
      activeTab.srcElement.classList.add('border-b-white');
      activeTab.srcElement.classList.add('border');
      activeTab.srcElement.classList.add('bg-white');
    }


    this.onTabSelect.emit(selected);
  }

}
