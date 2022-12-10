import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewListingComponent } from './admin-view-listing.component';

describe('AdminViewListingComponent', () => {
  let component: AdminViewListingComponent;
  let fixture: ComponentFixture<AdminViewListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
