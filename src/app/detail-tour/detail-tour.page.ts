import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-tour',
  templateUrl: './detail-tour.page.html',
  styleUrls: ['./detail-tour.page.scss'],
})
export class DetailTourPage implements OnInit {
  pagkage = [
    {
      thainame: 'ไร่เลย์ เบย์ รีสอร์ท แอนด์ สปา',
      englishname: 'Railay Bay Resort',
      detail:
        'สะดวก รถ รับส่ง ส่วนตัว สนามบินกระบี่ - ท่าเรืออ่าวน้ำเมา พักรีสอร์ท ติดหาดติดหาดไร่เลย์ วิวสวย เช็คอิน ห้อง DELUXE COTTAGE 3 วัน 2 คืน พร้อม อาหารเช้า แบบบุฟเฟ่ต์ 2 มื้อ ชมบรรยากาศ หาดสวย พร้อมวิวอาทิตย์ลับขอบฟ้า',
      image:
        'https://itp1.itopfile.com/ImageServer/itp_17012020ybvl/0/0/Home-Recommend-3z-z877547007295.jpg',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
