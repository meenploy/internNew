import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AirTwowayTicketInboundPage } from './air-twoway-ticket-inbound.page';

describe('AirTwowayTicketInboundPage', () => {
  let component: AirTwowayTicketInboundPage;
  let fixture: ComponentFixture<AirTwowayTicketInboundPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AirTwowayTicketInboundPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AirTwowayTicketInboundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
