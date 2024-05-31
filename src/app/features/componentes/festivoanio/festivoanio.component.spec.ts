import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivoanioComponent } from './festivoanio.component';

describe('FestivoanioComponent', () => {
  let component: FestivoanioComponent;
  let fixture: ComponentFixture<FestivoanioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FestivoanioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FestivoanioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
