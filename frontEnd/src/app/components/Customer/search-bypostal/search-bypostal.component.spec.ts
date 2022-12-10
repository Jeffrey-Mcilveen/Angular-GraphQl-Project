import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBypostalComponent } from './search-bypostal.component';

describe('SearchBypostalComponent', () => {
  let component: SearchBypostalComponent;
  let fixture: ComponentFixture<SearchBypostalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBypostalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBypostalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
