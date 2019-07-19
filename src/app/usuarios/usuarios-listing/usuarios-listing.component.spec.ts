import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosListingComponent } from './usuarios-listing.component';

describe('UsuariosListingComponent', () => {
  let component: UsuariosListingComponent;
  let fixture: ComponentFixture<UsuariosListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
