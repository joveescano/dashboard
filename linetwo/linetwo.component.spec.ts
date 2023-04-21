import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinetwoComponent } from './linetwo.component';

describe('LinetwoComponent', () => {
  let component: LinetwoComponent;
  let fixture: ComponentFixture<LinetwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinetwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
