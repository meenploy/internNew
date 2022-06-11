import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-air-oneway-payment',
  templateUrl: './air-oneway-payment.page.html',
  styleUrls: ['./air-oneway-payment.page.scss'],
})
export class AirOnewayPaymentPage implements OnInit {
  public tickets = [
    { img: 'assets/photo/air.png', amount: '1', flight: 'บินตรง', weight: '7', age: 'ผู้ใหญ่', airline: 'AIR ASIA', airlineID: 'DDC552', THgo: 'ท่าอากาศยานขอนแก่น', THto: 'ท่าอากาศยานสุวรรณภูมิ', go: 'KKC', to: 'BKK', date: '29 พ.ค. 2022', gtime: '13:05', ttime: '14:35', time: '1h30m', price: '458'},
];

  constructor() { }

  ngOnInit() {
  }

}
