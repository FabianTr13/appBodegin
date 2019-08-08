import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-in',
  templateUrl: './header-in.component.html',
  styleUrls: ['./header-in.component.scss'],
})
export class HeaderInComponent implements OnInit {

  @Input() titulo: String = "";
  constructor(private router:Router,
              private reload:ChangeDetectorRef) {}

  ngOnInit() {}

  public refresh() {
    this.reload.detectChanges();
  }
}
