import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateworkComponent } from './updatework.component';

describe('UpdateworkComponent', () => {
  let component: UpdateworkComponent;
  let fixture: ComponentFixture<UpdateworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
