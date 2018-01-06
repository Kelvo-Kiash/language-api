import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShengComponent } from './sheng.component';

describe('ShengComponent', () => {
  let component: ShengComponent;
  let fixture: ComponentFixture<ShengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
