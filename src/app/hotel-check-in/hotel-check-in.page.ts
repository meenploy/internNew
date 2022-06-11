import { Component, OnInit } from '@angular/core';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';

@Component({
  selector: 'app-hotel-check-in',
  templateUrl: './hotel-check-in.page.html',
  styleUrls: ['./hotel-check-in.page.scss'],
})
export class HotelCheckInPage {
  
  public driver: string = "no";
  public date1: any;
  public date2: any;

  constructor() {}
  
  ngOnInit() {
  }

  segmentChanged(ev: any) {
    this.driver = ev.detail.value;
  }
  formatDate1(value: string) {
    this.date1 = format(parseISO(value), 'dd/MM/yyyy');
  }
  formatDate2(value: string) {
    this.date2 = format(parseISO(value), 'dd/MM/yyyy');
  }
}