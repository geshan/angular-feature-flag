import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { FeatureFlagService } from './feature-flag.service';
 
@Directive({
  selector: '[removeIfFeatureOff]'
})
export class RemoveIfFeatureOff implements OnInit {
  @Input('removeIfFeatureOff') featureName: string;
 
  constructor(private el: ElementRef,
              private featureFlagService: FeatureFlagService) {
    this.featureName = 'test';
  }
 
  ngOnInit() {
    if (!this.featureFlagService.isFeatureOn(this.featureName)) {
      this.el.nativeElement.parentNode.removeChild(this.el.nativeElement);
    }
  }
}