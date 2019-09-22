import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlobContainerComponent } from './blob-container.component';

describe('BlobContainerComponent', () => {
  let component: BlobContainerComponent;
  let fixture: ComponentFixture<BlobContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlobContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlobContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
