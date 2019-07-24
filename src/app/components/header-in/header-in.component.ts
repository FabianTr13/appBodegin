import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-in',
  templateUrl: './header-in.component.html',
  styleUrls: ['./header-in.component.scss'],
})
export class HeaderInComponent implements OnInit {

  @Input() titulo: String = "";

  constructor() { }

  ngOnInit() {}

}
