import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlobDialogComponent } from './blob-dialog.component';

describe('BlobDialogComponent', () => {
  let component: BlobDialogComponent;
  let fixture: ComponentFixture<BlobDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlobDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlobDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
