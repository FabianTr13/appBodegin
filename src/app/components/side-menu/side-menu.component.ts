import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  constructor(private Pro_router:Router) { }

  ngOnInit() {}

  navegar(pRuta){
    console.log('sillego')
    this.Pro_router.navigate([pRuta])
  }
}
