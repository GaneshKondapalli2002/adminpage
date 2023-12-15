import { Component,AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef,  } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent {
  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterContentInit(): void {
    this.changeDetectorRef.detectChanges();
  }
}
