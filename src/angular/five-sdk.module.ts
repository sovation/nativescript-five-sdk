import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { registerElement } from 'nativescript-angular/element-registry'
import { NativeScriptCommonModule } from 'nativescript-angular/common'

// Angular用のセレクタ登録
registerElement('FiveAdCustomLayout', () => require('../five-sdk').FiveSdk)

@NgModule({
  imports: [
    NativeScriptCommonModule
  ],
  declarations: [
  ],
  exports: [
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class FiveSdkModule {

}
