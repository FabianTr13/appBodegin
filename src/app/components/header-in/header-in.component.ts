import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { isApp } from '../../Config/configuration';

@Component({
  selector: 'app-header-in',
  templateUrl: './header-in.component.html',
  styleUrls: ['./header-in.component.scss'],
})
export class HeaderInComponent implements OnInit {

  @Input() titulo: String = "";
  es_app;

  constructor(private router:Router,
              private reload:ChangeDetectorRef) {}

  ngOnInit() {
    this.es_app = isApp;
  }

  public refresh() {
    this.reload.detectChanges();
  }
}
