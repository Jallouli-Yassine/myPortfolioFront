import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsANDcarouselComponent } from './skills-andcarousel.component';

describe('SkillsANDcarouselComponent', () => {
  let component: SkillsANDcarouselComponent;
  let fixture: ComponentFixture<SkillsANDcarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsANDcarouselComponent]
    });
    fixture = TestBed.createComponent(SkillsANDcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
