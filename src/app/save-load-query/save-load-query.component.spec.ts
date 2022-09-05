import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveLoadQueryComponent } from './save-load-query.component';

describe('SaveLoadQueryComponent', () => {
  let component: SaveLoadQueryComponent;
  let fixture: ComponentFixture<SaveLoadQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveLoadQueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveLoadQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
