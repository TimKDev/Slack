import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditChannelComponent } from './dialog-edit-channel.component';

describe('DialogEditChannelComponent', () => {
  let component: DialogEditChannelComponent;
  let fixture: ComponentFixture<DialogEditChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
