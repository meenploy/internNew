import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour-form',
  templateUrl: './tour-form.page.html',
  styleUrls: ['./tour-form.page.scss'],
})
export class TourFormPage implements OnInit {
  package = 
    {
      thainame: 'ไร่เลย์ เบย์ รีสอร์ท แอนด์ สปา',
      englishname: 'Railay Bay Resort',
      detail:
        'สะดวก รถ รับส่ง ส่วนตัว สนามบินกระบี่ - ท่าเรืออ่าวน้ำเมา พักรีสอร์ท ติดหาดติดหาดไร่เลย์ วิวสวย เช็คอิน ห้อง DELUXE COTTAGE 3 วัน 2 คืน พร้อม อาหารเช้า แบบบุฟเฟ่ต์ 2 มื้อ ชมบรรยากาศ หาดสวย พร้อมวิวอาทิตย์ลับขอบฟ้า',
      image:
        'https://itp1.itopfile.com/ImageServer/itp_17012020ybvl/0/0/Home-Recommend-3z-z877547007295.jpg',
    }
  
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = [
    's\u00f8n',
    'man',
    'tir',
    'ons',
    'tor',
    'fre',
    'l\u00f8r',
  ];
  customPickerOptions: any;

  private currentNumber = 0;
  private currentNumber1 = 0;
  private currentNumber2= 0;
  constructor() {}

  ngOnInit() {}
  private increment() {
    this.currentNumber++;
  }

  private decrement() {
    if (this.currentNumber == 0){
      this.currentNumber = 0;
    }else{
      this.currentNumber--;
    }
    
  }
  private increment1() {
    this.currentNumber1++;
  }

  private decrement1() {
    if (this.currentNumber1 == 0){
      this.currentNumber1 = 0;
    }else{
      this.currentNumber1--;
    }
    
  }
  private increment2() {
    this.currentNumber2++;
  }

  private decrement2() {
    if (this.currentNumber2 == 0){
      this.currentNumber2 = 0;
    }else{
      this.currentNumber2--;
    }
    
  }
}
