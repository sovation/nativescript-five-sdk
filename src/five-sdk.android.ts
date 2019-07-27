import { FiveSdkBase, slotIdProperty, slotWidthProperty } from './five-sdk.common'
import * as application from 'tns-core-modules/application'
import FiveAdConfig = com.five_corp.ad.FiveAdConfig
import EnumSet = java.util.EnumSet
import FiveAdFormat = com.five_corp.ad.FiveAdFormat
import FiveAd = com.five_corp.ad.FiveAd
import FiveAdCustomLayout = com.five_corp.ad.FiveAdCustomLayout
import FiveAdListener = com.five_corp.ad.FiveAdListener
import FrameLayout = android.widget.FrameLayout

const MAX_LOAD_FAILED_COUNT = 10

let adListener: FiveAdListener
const initializeAdListner = () => {
  if (adListener) {
    return
  }

  @Interfaces([FiveAdListener])
  class AdListener extends FiveAdListener {

    constructor () {
      super()
      // Required by Android runtime when native class is extended through TypeScript.
      return global.__native(this)
    }

    onFiveAdLoad (f: com.five_corp.ad.FiveAdInterface): void {
      const fiveSdk = (f as any).owner as FiveSdk
      if (fiveSdk) {
        fiveSdk.onFiveAdLoad()
      }
    }

    onFiveAdError (f: com.five_corp.ad.FiveAdInterface, errorCode: FiveAdListener.ErrorCode): void {
      const fiveSdk = (f as any).owner as FiveSdk
      if (fiveSdk) {
        fiveSdk.onFiveAdError(errorCode)
      }
    }

    onFiveAdImpressionImage (f: com.five_corp.ad.FiveAdInterface): void {
      const fiveSdk = (f as any).owner as FiveSdk
      if (fiveSdk) {
        fiveSdk.onFiveAdImpressionImage()
      }
    }

    onFiveAdStart (param0: com.five_corp.ad.FiveAdInterface): void {
      // do nothing but needed to avoid runtime exception
    }

    onFiveAdClick (param0: com.five_corp.ad.FiveAdInterface): void {
      // do nothing but needed to avoid runtime exception
    }

    onFiveAdClose (param0: com.five_corp.ad.FiveAdInterface): void {
      // do nothing but needed to avoid runtime exception
    }

    onFiveAdPause (param0: com.five_corp.ad.FiveAdInterface): void {
      // do nothing but needed to avoid runtime exception
    }

    onFiveAdRecover (param0: com.five_corp.ad.FiveAdInterface): void {
      // do nothing but needed to avoid runtime exception
    }

    onFiveAdReplay (param0: com.five_corp.ad.FiveAdInterface): void {
      // do nothing but needed to avoid runtime exception
    }

    onFiveAdResume (param0: com.five_corp.ad.FiveAdInterface): void {
      // do nothing but needed to avoid runtime exception
    }

    onFiveAdStall (param0: com.five_corp.ad.FiveAdInterface): void {
      // do nothing but needed to avoid runtime exception
    }

    onFiveAdViewThrough (param0: com.five_corp.ad.FiveAdInterface): void {
      // do nothing but needed to avoid runtime exception
    }

  }

  adListener = new AdListener()
}

export class FiveSdk extends FiveSdkBase {

  nativeView: FrameLayout
  adView: FiveAdCustomLayout
  loadFailedCount = 0

  /**
   * SDKの初期化
   */
  static initSdk (appId: string, isTest: boolean) {
    const config = new FiveAdConfig(appId)
    config.isTest = isTest
    config.formats = EnumSet.of(
      FiveAdFormat.CUSTOM_LAYOUT as any
    )

    if (!FiveAd.isInitialized()) {
      FiveAd.initialize(application.android.context, config)
      console.log('Five Sdk initialized done')
    }
  }

  createNativeView () {
    initializeAdListner()
    // 広告Viewを格納するレイアウトView
    const frame = new FrameLayout(this._context)
    this.initAdView(false)
    return frame
  }

  initNativeView (): void {
    this.adView.loadAdAsync()
  }

  disposeNativeView (): void {
    this.disposeAdView()
    super.disposeNativeView()
  }

  disposeAdView (): void {
    if (this.adView) {
      (this.adView as any).owner = null
    }
  }

  initAdView (loadAd: boolean) {
    console.log('init ad view start')
    // 広告Viewの初期化
    this.disposeAdView()

    this.adView = new FiveAdCustomLayout(this._context, this.slotId, this.slotWidth)
    this.adView.setListener(adListener);
    (this.adView as any).owner = this

    if (loadAd) {
      this.adView.loadAdAsync()
    }
    console.log('init ad view done')
  }

  /**
   * FiveAd の読み込み時
   */
  onFiveAdLoad (): void {
    console.log('five ad load event fired')
    this.nativeView.addView(this.adView as any)
  }

  /**
   * FiveAd の読み込みエラー時
   * @param errorCode
   */
  onFiveAdError (errorCode: FiveAdListener.ErrorCode) {
    console.log('five ad load error, code=' + errorCode.toInt())

    // Dispose if loading failed too much
    this.loadFailedCount++
    if (this.loadFailedCount > MAX_LOAD_FAILED_COUNT) {
      this.disposeAdView()
      return
    }

    // Reload ad
    setTimeout(() => {
      this.initAdView(true)
    }, 1000)
  }

  /**
   * FiveAd のインプレッション発生時
   */
  onFiveAdImpressionImage () {
    // do nothing
  }

  [slotIdProperty.setNative] (value: string) {
    this.slotId = value
  }

  [slotIdProperty.getDefault] (): string {
    return this.slotId
  }

  [slotWidthProperty.setNative] (value: number) {
    this.slotWidth = value
  }

  [slotWidthProperty.getDefault] (): number {
    return this.slotWidth
  }

}
