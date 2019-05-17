import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PierEditComponent } from './pier-edit.component';

describe('PierEditComponent', () => {
  let component: PierEditComponent;
  let fixture: ComponentFixture<PierEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PierEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PierEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
