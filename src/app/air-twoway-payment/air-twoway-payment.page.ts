import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-air-twoway-payment',
  templateUrl: './air-twoway-payment.page.html',
  styleUrls: ['./air-twoway-payment.page.scss'],
})
export class AirTwowayPaymentPage implements OnInit {
  public tickets = [
    { img: 'assets/photo/air.png', flight: 'บินตรง', weight: '7', airline: 'AIR ASIA', airlineID: 'DDC552', THgo: 'ท่าอากาศยานขอนแก่น', THto: 'ท่าอากาศยานสุวรรณภูมิ', go: 'KKC', to: 'BKK', date: '29 พ.ค. 2022', gtime: '13:05', ttime: '14:35', time: '1h30m', price: '458'},
];
  public back_tickets = [
  { img: 'assets/photo/nok.jpg', amount: '4', flight: 'บินตรง', weight: '7', age: 'ผู้ใหญ่', airline: 'NOK AIR', airlineID: 'NPK529', THgo: 'ท่าอากาศยานสุวรรณภูมิ', THto: 'ท่าอากาศยานขอนแก่น', go: 'BKK', to: 'KKC', date: '4 มิ.ย. 2022', gtime: '06:00', ttime: '07:30', time: '1h30m', price: '679'},
];
  constructor() { }

  ngOnInit() {
  }

}
