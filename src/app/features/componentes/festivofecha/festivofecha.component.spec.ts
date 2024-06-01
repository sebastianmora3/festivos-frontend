import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FestivofechaComponent } from './festivofecha.component';

describe('FestivofechaComponent', () => {
  let component: FestivofechaComponent;
  let fixture: ComponentFixture<FestivofechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FestivofechaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FestivofechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
