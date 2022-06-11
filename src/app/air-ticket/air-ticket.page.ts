import { Component, OnInit } from '@angular/core';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-air-ticket',
  templateUrl: './air-ticket.page.html',
  styleUrls: ['./air-ticket.page.scss'],
})
export class AirTicketPage implements OnInit {
  public segment: string = 'one';
  public date0: any;
  public date1: any;
  public date2: any;

  public people0: number = 0;
  public people1: number = 0;
  public people2: number = 0;

  constructor(private alertController: AlertController) {}
  ngOnInit(): void {}

  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }

  formatDate0(value: string) {
    this.date0 = format(parseISO(value), 'dd/MM/yyyy');
  }
  formatDate1(value: string) {
    this.date1 = format(parseISO(value), 'dd/MM/yyyy');
  }
  formatDate2(value: string) {
    this.date2 = format(parseISO(value), 'dd/MM/yyyy');
  }

  async p0Prompt(event) {
    if (event.target.checked) {
      this.people0 = 0;
    } else {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'กรอกจำนวนคน',
        mode: 'ios',
        inputs: [
          {
            name: 'people',
            type: 'number',
            placeholder: 'จำนวนคน',
          },
        ],
        buttons: [
          {
            text: 'ยืนยัน',
            handler: (value) => {
              this.people0 = value.people;
            },
          },
        ],
      });

      await alert.present();
    }
  }

  async p1Prompt(event) {
    if (event.target.checked) {
      this.people1 = 0;
    } else {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'กรอกจำนวนคน',
        mode: 'ios',
        inputs: [
          {
            name: 'people',
            type: 'number',
            placeholder: 'จำนวนคน',
          },
        ],
        buttons: [
          {
            text: 'ยืนยัน',
            handler: (value) => {
              this.people1 = value.people;
            },
          },
        ],
      });

      await alert.present();
    }
  }

  async p2Prompt(event) {
    if (event.target.checked) {
      this.people2 = 0;
    }else{
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'กรอกจำนวนคน',
        mode: 'ios',
        inputs: [
          {
            name: 'people',
            type: 'number',
            placeholder: 'จำนวนคน',
          },
        ],
        buttons: [
          {
            text: 'ยืนยัน',
            handler: (value) => {
              this.people2 = value.people;
            },
          },
        ],
      });
  
      await alert.present();
    }
  }
}
