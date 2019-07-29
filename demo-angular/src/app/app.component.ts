import { Component } from '@angular/core'
import { FiveSdk } from 'nativescript-five-sdk'
import { AdConfig } from '../../../demo-common/ad-config-loader'

@Component({
  selector: 'ns-app',
  moduleId: module.id,
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor () {
    console.log('init Five Sdk...', AdConfig.appId)
    FiveSdk.initSdk(AdConfig.appId, true)
  }
}
