import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-promotion',
  templateUrl: './car-promotion.page.html',
  styleUrls: ['./car-promotion.page.scss'],
})
export class CarPromotionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/tabs/main-menu']);
  }
}
