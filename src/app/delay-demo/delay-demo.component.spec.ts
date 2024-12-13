import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayDemoComponent } from './delay-demo.component';

describe('DelayDemoComponent', () => {
  let component: DelayDemoComponent;
  let fixture: ComponentFixture<DelayDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelayDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelayDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
