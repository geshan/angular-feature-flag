import { Component } from '@angular/core';
import { FeatureFlagService } from './feature-flag/feature-flag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FeatureFlagService]
})
export class AppComponent { }
