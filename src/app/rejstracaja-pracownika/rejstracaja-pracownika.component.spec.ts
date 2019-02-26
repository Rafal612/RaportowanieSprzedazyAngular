import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejstracajaPracownikaComponent } from './rejstracaja-pracownika.component';

describe('RejstracajaPracownikaComponent', () => {
  let component: RejstracajaPracownikaComponent;
  let fixture: ComponentFixture<RejstracajaPracownikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejstracajaPracownikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejstracajaPracownikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
