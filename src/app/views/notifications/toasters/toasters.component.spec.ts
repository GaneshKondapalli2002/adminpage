import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule, CardModule, FormModule, GridModule, ProgressModule, ToastModule } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../icons/icon-subset';
import { DocsComponentsModule } from '../../../../components';
import { ToastersComponent } from './toasters.component';

describe('ToastersComponent', () => {
  let component: ToastersComponent;
  let fixture: ComponentFixture<ToastersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
