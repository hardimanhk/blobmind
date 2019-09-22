import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoughtContainerComponent } from './thought-container.component';

describe('ThoughtContainerComponent', () => {
  let component: ThoughtContainerComponent;
  let fixture: ComponentFixture<ThoughtContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThoughtContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThoughtContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
