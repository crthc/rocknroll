import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandHeaderComponent } from './band-header.component';

describe('BandHeaderComponent', () => {
  let component: BandHeaderComponent;
  let fixture: ComponentFixture<BandHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
