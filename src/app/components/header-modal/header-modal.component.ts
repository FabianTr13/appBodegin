import { Component, OnInit, Input } from '@angular/core';
import { isApp } from '../../Config/configuration';

@Component({
  selector: 'app-header-modal',
  templateUrl: './header-modal.component.html',
  styleUrls: ['./header-modal.component.scss'],
})
export class HeaderModalComponent implements OnInit {

  @Input() titulo: String = "";
  es_app;
  
  constructor() { }

  ngOnInit() {
    this.es_app = isApp;
  }

}
