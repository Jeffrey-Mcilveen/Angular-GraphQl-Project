import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPostalComponent } from './search-postal.component';

describe('SearchPostalComponent', () => {
  let component: SearchPostalComponent;
  let fixture: ComponentFixture<SearchPostalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPostalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPostalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
