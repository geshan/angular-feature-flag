import { Injectable } from '@angular/core';
import flagsmith from 'flagsmith';

flagsmith.init({
  environmentID:"CUWmKUsvqw7WpVLS3nY85Z",
  cacheFlags: true,
  enableAnalytics: false,  
});

@Injectable()
export class FeatureFlagService {
  isFeatureOn(featureName: string) {
    return flagsmith.hasFeature(featureName);
  }
}
