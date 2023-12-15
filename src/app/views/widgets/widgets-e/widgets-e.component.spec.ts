import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridModule, WidgetModule } from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../icons/icon-subset';

import { WidgetsEComponent } from './widgets-e.component';

describe('WidgetsEComponent', () => {
  let component: WidgetsEComponent;
  let fixture: ComponentFixture<WidgetsEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetsEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetsEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
