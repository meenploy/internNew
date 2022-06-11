import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AirTwowayTicketOutboundPage } from './air-twoway-ticket-outbound.page';

describe('AirTwowayTicketOutboundPage', () => {
  let component: AirTwowayTicketOutboundPage;
  let fixture: ComponentFixture<AirTwowayTicketOutboundPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AirTwowayTicketOutboundPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AirTwowayTicketOutboundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
