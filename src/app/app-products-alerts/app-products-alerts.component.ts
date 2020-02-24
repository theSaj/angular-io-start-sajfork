import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-app-products-alerts',
  templateUrl: './app-products-alerts.component.html',
  styleUrls: ['./app-products-alerts.component.css']
})
export class AppProductsAlertsComponent implements OnInit {

  @Input() product;
  constructor() { }

  ngOnInit() {
  }

}