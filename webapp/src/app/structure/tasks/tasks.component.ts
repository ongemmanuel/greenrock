import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  public id: string = "";
  public tabs = ['My tasks', 'All tasks', 'Archive'];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  public switchTab(event: any) {
    this.router.navigate([event], { relativeTo: this.activatedRoute });
  }

}
