import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  dispOption = 'none';
  constructor() {}
  openPopup() {
    this.dispOption = 'block';
  }
  closePopup() {
    this.dispOption = 'none';
  }

  ngOnInit(): void {}
}
