import { Injectable } from '@angular/core';
import flagsmith from 'flagsmith';

flagsmith.init({
  environmentID:"BtvpWuJ6V3YkuunRgLkFqg",
  cacheFlags: true,
  enableAnalytics: false,  
});

@Injectable()
export class FeatureFlagService {
  isFeatureOn(featureName: string) {
    return flagsmith.hasFeature(featureName);
  }
}
