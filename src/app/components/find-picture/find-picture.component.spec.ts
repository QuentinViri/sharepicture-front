import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPictureComponent } from './find-picture.component';

describe('FindPictureComponent', () => {
  let component: FindPictureComponent;
  let fixture: ComponentFixture<FindPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
