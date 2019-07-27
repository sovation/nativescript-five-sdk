/* tslint:disable */
/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module five_corp {
		export module ad {
			export class AdViewUpdateTimer {
				public static class: java.lang.Class<com.five_corp.ad.AdViewUpdateTimer>;
				public addAdView(param0: com.five_corp.ad.ck): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class BitmapFactoryUtil {
				public static class: java.lang.Class<com.five_corp.ad.BitmapFactoryUtil>;
				public static decodeFile(param0: com.five_corp.ad.internal.e): com.five_corp.ad.ay<globalAndroid.graphics.Bitmap>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class BuildConfig {
				public static class: java.lang.Class<com.five_corp.ad.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public static HOST_PREFIXX: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class CreativeType {
				public static class: java.lang.Class<com.five_corp.ad.CreativeType>;
				public static NOT_LOADED: com.five_corp.ad.CreativeType;
				public static MOVIE: com.five_corp.ad.CreativeType;
				public static IMAGE: com.five_corp.ad.CreativeType;
				public value: number;
				public static get(param0: number): com.five_corp.ad.CreativeType;
				public static values(): native.Array<com.five_corp.ad.CreativeType>;
				public static valueOf(param0: string): com.five_corp.ad.CreativeType;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export abstract class FiveAd {
				public static class: java.lang.Class<com.five_corp.ad.FiveAd>;
				public registerWebView(param0: globalAndroid.webkit.WebView): com.five_corp.ad.WebViewRequestInterceptor;
				public static isInitialized(): boolean;
				public static getSingleton(): com.five_corp.ad.FiveAd;
				public getVersion(): number;
				/** @deprecated */
				public enableLoading(param0: boolean): void;
				public isSoundEnabled(): boolean;
				public registerWebView(param0: globalAndroid.webkit.WebView, param1: boolean): com.five_corp.ad.WebViewRequestInterceptor;
				public enableSound(param0: boolean): void;
				/** @deprecated */
				public isLoadingEnabled(): boolean;
				public constructor();
				public static initialize(param0: globalAndroid.content.Context, param1: com.five_corp.ad.FiveAdConfig): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class FiveAdBounce extends com.five_corp.ad.FiveAdInterface {
				public static class: java.lang.Class<com.five_corp.ad.FiveAdBounce>;
				public getAdParameter(): string;
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public loadAd(): void;
				public getListener(): com.five_corp.ad.FiveAdListener;
				public onScrollChanged(param0: number, param1: number, param2: number, param3: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: number, param3: number);
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: number, param3: number, param4: number);
				public loadAdAsync(): void;
				public destroy(): void;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: number);
				public getCreativeType(): com.five_corp.ad.CreativeType;
				public getFiveAdTag(): string;
				public isSoundEnabled(): boolean;
				public setListener(param0: com.five_corp.ad.FiveAdListener): void;
				public setFiveAdTag(param0: string): void;
				public enableSound(param0: boolean): void;
				public setTargetView(param0: globalAndroid.view.View): void;
				public getSlotId(): string;
				public getState(): com.five_corp.ad.FiveAdState;
			}
			export module FiveAdBounce {
				export class a {
					public static class: java.lang.Class<com.five_corp.ad.FiveAdBounce.a>;
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class FiveAdConfig {
				public static class: java.lang.Class<com.five_corp.ad.FiveAdConfig>;
				public appId: string;
				public formats: java.util.EnumSet<com.five_corp.ad.FiveAdFormat>;
				public isTest: boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public deepCopy(): com.five_corp.ad.FiveAdConfig;
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class FiveAdCustomLayout extends com.five_corp.ad.ad implements com.five_corp.ad.FiveAdInterface {
				public static class: java.lang.Class<com.five_corp.ad.FiveAdCustomLayout>;
				public getAdParameter(): string;
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public loadAd(): void;
				public getListener(): com.five_corp.ad.FiveAdListener;
				/** @deprecated */
				public loadAd(): void;
				public loadAdAsync(): void;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: number);
				public getAdvertiserName(): string;
				public constructor(param0: globalAndroid.content.Context);
				public getCreativeType(): com.five_corp.ad.CreativeType;
				public getFiveAdTag(): string;
				public isSoundEnabled(): boolean;
				public setListener(param0: com.five_corp.ad.FiveAdListener): void;
				public setFiveAdTag(param0: string): void;
				public enableSound(param0: boolean): void;
				public getSlotId(): string;
				public getState(): com.five_corp.ad.FiveAdState;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class FiveAdFormat {
				public static class: java.lang.Class<com.five_corp.ad.FiveAdFormat>;
				public static INTERSTITIAL_LANDSCAPE: com.five_corp.ad.FiveAdFormat;
				public static INTERSTITIAL_PORTRAIT: com.five_corp.ad.FiveAdFormat;
				public static IN_FEED: com.five_corp.ad.FiveAdFormat;
				public static BOUNCE: com.five_corp.ad.FiveAdFormat;
				public static W320_H180: com.five_corp.ad.FiveAdFormat;
				public static W300_H250: com.five_corp.ad.FiveAdFormat;
				public static CUSTOM_LAYOUT: com.five_corp.ad.FiveAdFormat;
				public static VIDEO_REWARD: com.five_corp.ad.FiveAdFormat;
				public static values(): native.Array<com.five_corp.ad.FiveAdFormat>;
				public static valueOf(param0: string): com.five_corp.ad.FiveAdFormat;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class FiveAdInFeed implements com.five_corp.ad.FiveAdInterface {
				public static class: java.lang.Class<com.five_corp.ad.FiveAdInFeed>;
				public getAdParameter(): string;
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public getLogicalWidth(): number;
				public loadAd(): void;
				public getListener(): com.five_corp.ad.FiveAdListener;
				public getLogicalHeight(): number;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: number);
				public constructor(param0: globalAndroid.content.Context);
				public getCreativeType(): com.five_corp.ad.CreativeType;
				public getFiveAdTag(): string;
				public isSoundEnabled(): boolean;
				public setListener(param0: com.five_corp.ad.FiveAdListener): void;
				public setFiveAdTag(param0: string): void;
				public enableSound(param0: boolean): void;
				public getSlotId(): string;
				public getState(): com.five_corp.ad.FiveAdState;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class FiveAdInterface {
				public static class: java.lang.Class<com.five_corp.ad.FiveAdInterface>;
				/**
				 * Constructs a new instance of the com.five_corp.ad.FiveAdInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getListener(): com.five_corp.ad.FiveAdListener;
					setListener(param0: com.five_corp.ad.FiveAdListener): void;
					getSlotId(): string;
					getFiveAdTag(): string;
					setFiveAdTag(param0: string): void;
					isSoundEnabled(): boolean;
					enableSound(param0: boolean): void;
					loadAd(): void;
					getState(): com.five_corp.ad.FiveAdState;
					getCreativeType(): com.five_corp.ad.CreativeType;
					getAdParameter(): string;
				});
				public constructor();
				public getAdParameter(): string;
				public loadAd(): void;
				public getListener(): com.five_corp.ad.FiveAdListener;
				public getCreativeType(): com.five_corp.ad.CreativeType;
				public getFiveAdTag(): string;
				public isSoundEnabled(): boolean;
				public setListener(param0: com.five_corp.ad.FiveAdListener): void;
				public setFiveAdTag(param0: string): void;
				public enableSound(param0: boolean): void;
				public getSlotId(): string;
				public getState(): com.five_corp.ad.FiveAdState;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class FiveAdInterstitial extends com.five_corp.ad.FiveAdInterface {
				public static class: java.lang.Class<com.five_corp.ad.FiveAdInterstitial>;
				public show(): boolean;
				public getAdParameter(): string;
				public loadAd(): void;
				public getListener(): com.five_corp.ad.FiveAdListener;
				public constructor(param0: globalAndroid.app.Activity, param1: string);
				public loadAdAsync(): void;
				public getCreativeType(): com.five_corp.ad.CreativeType;
				public getFiveAdTag(): string;
				public isSoundEnabled(): boolean;
				public setListener(param0: com.five_corp.ad.FiveAdListener): void;
				public setFiveAdTag(param0: string): void;
				public enableSound(param0: boolean): void;
				public getSlotId(): string;
				public getState(): com.five_corp.ad.FiveAdState;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class FiveAdListener {
				public static class: java.lang.Class<com.five_corp.ad.FiveAdListener>;
				/**
				 * Constructs a new instance of the com.five_corp.ad.FiveAdListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onFiveAdLoad(param0: com.five_corp.ad.FiveAdInterface): void;
					onFiveAdError(param0: com.five_corp.ad.FiveAdInterface, param1: com.five_corp.ad.FiveAdListener.ErrorCode): void;
					onFiveAdClick(param0: com.five_corp.ad.FiveAdInterface): void;
					onFiveAdClose(param0: com.five_corp.ad.FiveAdInterface): void;
					onFiveAdStart(param0: com.five_corp.ad.FiveAdInterface): void;
					onFiveAdPause(param0: com.five_corp.ad.FiveAdInterface): void;
					onFiveAdResume(param0: com.five_corp.ad.FiveAdInterface): void;
					onFiveAdViewThrough(param0: com.five_corp.ad.FiveAdInterface): void;
					onFiveAdReplay(param0: com.five_corp.ad.FiveAdInterface): void;
					onFiveAdImpressionImage(param0: com.five_corp.ad.FiveAdInterface): void;
					onFiveAdStall(param0: com.five_corp.ad.FiveAdInterface): void;
					onFiveAdRecover(param0: com.five_corp.ad.FiveAdInterface): void;
				});
				public constructor();
				public onFiveAdStart(param0: com.five_corp.ad.FiveAdInterface): void;
				public onFiveAdResume(param0: com.five_corp.ad.FiveAdInterface): void;
				public onFiveAdLoad(param0: com.five_corp.ad.FiveAdInterface): void;
				public onFiveAdRecover(param0: com.five_corp.ad.FiveAdInterface): void;
				public onFiveAdClose(param0: com.five_corp.ad.FiveAdInterface): void;
				public onFiveAdImpressionImage(param0: com.five_corp.ad.FiveAdInterface): void;
				public onFiveAdStall(param0: com.five_corp.ad.FiveAdInterface): void;
				public onFiveAdError(param0: com.five_corp.ad.FiveAdInterface, param1: com.five_corp.ad.FiveAdListener.ErrorCode): void;
				public onFiveAdPause(param0: com.five_corp.ad.FiveAdInterface): void;
				public onFiveAdClick(param0: com.five_corp.ad.FiveAdInterface): void;
				public onFiveAdReplay(param0: com.five_corp.ad.FiveAdInterface): void;
				public onFiveAdViewThrough(param0: com.five_corp.ad.FiveAdInterface): void;
			}
			export module FiveAdListener {
				export class ErrorCode {
					public static class: java.lang.Class<com.five_corp.ad.FiveAdListener.ErrorCode>;
					public static NETWORK_ERROR: com.five_corp.ad.FiveAdListener.ErrorCode;
					public static NO_CACHED_AD: com.five_corp.ad.FiveAdListener.ErrorCode;
					public static NO_FILL: com.five_corp.ad.FiveAdListener.ErrorCode;
					public static BAD_APP_ID: com.five_corp.ad.FiveAdListener.ErrorCode;
					public static STORAGE_ERROR: com.five_corp.ad.FiveAdListener.ErrorCode;
					public static INTERNAL_ERROR: com.five_corp.ad.FiveAdListener.ErrorCode;
					public static UNSUPPORTED_OS_VERSION: com.five_corp.ad.FiveAdListener.ErrorCode;
					public static INVALID_STATE: com.five_corp.ad.FiveAdListener.ErrorCode;
					public static BAD_SLOT_ID: com.five_corp.ad.FiveAdListener.ErrorCode;
					public static SUPPRESSED: com.five_corp.ad.FiveAdListener.ErrorCode;
					public static CONTENT_UNAVAILABLE: com.five_corp.ad.FiveAdListener.ErrorCode;
					public static PLAYER_ERROR: com.five_corp.ad.FiveAdListener.ErrorCode;
					public toInt(): number;
					public static values(): native.Array<com.five_corp.ad.FiveAdListener.ErrorCode>;
					public get(param0: number): com.five_corp.ad.FiveAdListener.ErrorCode;
					public static valueOf(param0: string): com.five_corp.ad.FiveAdListener.ErrorCode;
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class FiveAdState {
				public static class: java.lang.Class<com.five_corp.ad.FiveAdState>;
				public static NOT_LOADED: com.five_corp.ad.FiveAdState;
				public static LOADING: com.five_corp.ad.FiveAdState;
				public static LOADED: com.five_corp.ad.FiveAdState;
				public static CLOSED: com.five_corp.ad.FiveAdState;
				public static ERROR: com.five_corp.ad.FiveAdState;
				public static values(): native.Array<com.five_corp.ad.FiveAdState>;
				public toInt(): number;
				public static valueOf(param0: string): com.five_corp.ad.FiveAdState;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class FiveAdVideoReward extends com.five_corp.ad.FiveAdInterface {
				public static class: java.lang.Class<com.five_corp.ad.FiveAdVideoReward>;
				public show(): boolean;
				public getAdParameter(): string;
				public loadAd(): void;
				public getListener(): com.five_corp.ad.FiveAdListener;
				public constructor(param0: globalAndroid.app.Activity, param1: string);
				/** @deprecated */
				public loadAd(): void;
				public loadAdAsync(): void;
				public getCreativeType(): com.five_corp.ad.CreativeType;
				public getFiveAdTag(): string;
				public isSoundEnabled(): boolean;
				public setListener(param0: com.five_corp.ad.FiveAdListener): void;
				public setFiveAdTag(param0: string): void;
				public enableSound(param0: boolean): void;
				public getSlotId(): string;
				public getState(): com.five_corp.ad.FiveAdState;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class FiveAdW320H180 implements com.five_corp.ad.FiveAdInterface {
				public static class: java.lang.Class<com.five_corp.ad.FiveAdW320H180>;
				public getAdParameter(): string;
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public getLogicalWidth(): number;
				public loadAd(): void;
				public getListener(): com.five_corp.ad.FiveAdListener;
				public getLogicalHeight(): number;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: number);
				public getAdvertiserName(): string;
				public constructor(param0: globalAndroid.content.Context);
				public getCreativeType(): com.five_corp.ad.CreativeType;
				public getFiveAdTag(): string;
				public isSoundEnabled(): boolean;
				public setListener(param0: com.five_corp.ad.FiveAdListener): void;
				public setFiveAdTag(param0: string): void;
				public enableSound(param0: boolean): void;
				public getSlotId(): string;
				public getState(): com.five_corp.ad.FiveAdState;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class LoadingSpinnerView {
				public static class: java.lang.Class<com.five_corp.ad.LoadingSpinnerView>;
				public constructor(param0: globalAndroid.content.Context);
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class MoviePlayer {
				public static class: java.lang.Class<com.five_corp.ad.MoviePlayer>;
				/**
				 * Constructs a new instance of the com.five_corp.ad.MoviePlayer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: com.five_corp.ad.internal.e, param1: globalAndroid.view.Surface): void;
					a(): void;
					b(): void;
					a(param0: number, param1: java.lang.Runnable): void;
					a(param0: boolean): void;
					c(): void;
					d(): boolean;
					e(): number;
					f(): number;
					a(param0: com.five_corp.ad.MoviePlayer.OnPreparedListener): void;
					a(param0: com.five_corp.ad.MoviePlayer.OnCompletionListener): void;
					a(param0: com.five_corp.ad.MoviePlayer.OnSeekCompleteListener): void;
					a(param0: com.five_corp.ad.MoviePlayer.OnErrorListener): void;
					a(param0: com.five_corp.ad.MoviePlayer.OnMovieStallListener): void;
				});
				public constructor();
				public a(param0: boolean): void;
				public b(): void;
				public a(param0: number, param1: java.lang.Runnable): void;
				public f(): number;
				public a(param0: com.five_corp.ad.MoviePlayer.OnMovieStallListener): void;
				public d(): boolean;
				public e(): number;
				public a(param0: com.five_corp.ad.MoviePlayer.OnCompletionListener): void;
				public a(param0: com.five_corp.ad.internal.e, param1: globalAndroid.view.Surface): void;
				public a(param0: com.five_corp.ad.MoviePlayer.OnPreparedListener): void;
				public c(): void;
				public a(): void;
				public a(param0: com.five_corp.ad.MoviePlayer.OnSeekCompleteListener): void;
				public a(param0: com.five_corp.ad.MoviePlayer.OnErrorListener): void;
			}
			export module MoviePlayer {
				export class OnCompletionListener {
					public static class: java.lang.Class<com.five_corp.ad.MoviePlayer.OnCompletionListener>;
					/**
					 * Constructs a new instance of the com.five_corp.ad.MoviePlayer$OnCompletionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCompletion(param0: com.five_corp.ad.MoviePlayer): void;
					});
					public constructor();
					public onCompletion(param0: com.five_corp.ad.MoviePlayer): void;
				}
				export class OnErrorListener {
					public static class: java.lang.Class<com.five_corp.ad.MoviePlayer.OnErrorListener>;
					/**
					 * Constructs a new instance of the com.five_corp.ad.MoviePlayer$OnErrorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onError(param0: com.five_corp.ad.MoviePlayer, param1: com.five_corp.ad.internal.exception.b): boolean;
					});
					public constructor();
					public onError(param0: com.five_corp.ad.MoviePlayer, param1: com.five_corp.ad.internal.exception.b): boolean;
				}
				export class OnMovieStallListener {
					public static class: java.lang.Class<com.five_corp.ad.MoviePlayer.OnMovieStallListener>;
					/**
					 * Constructs a new instance of the com.five_corp.ad.MoviePlayer$OnMovieStallListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMovieStall(param0: com.five_corp.ad.MoviePlayer): void;
						onMovieRecoverable(param0: com.five_corp.ad.MoviePlayer): void;
					});
					public constructor();
					public onMovieStall(param0: com.five_corp.ad.MoviePlayer): void;
					public onMovieRecoverable(param0: com.five_corp.ad.MoviePlayer): void;
				}
				export class OnPreparedListener {
					public static class: java.lang.Class<com.five_corp.ad.MoviePlayer.OnPreparedListener>;
					/**
					 * Constructs a new instance of the com.five_corp.ad.MoviePlayer$OnPreparedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPrepared(param0: com.five_corp.ad.MoviePlayer): void;
					});
					public constructor();
					public onPrepared(param0: com.five_corp.ad.MoviePlayer): void;
				}
				export class OnSeekCompleteListener {
					public static class: java.lang.Class<com.five_corp.ad.MoviePlayer.OnSeekCompleteListener>;
					/**
					 * Constructs a new instance of the com.five_corp.ad.MoviePlayer$OnSeekCompleteListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSeekComplete(param0: com.five_corp.ad.MoviePlayer): void;
					});
					public constructor();
					public onSeekComplete(param0: com.five_corp.ad.MoviePlayer): void;
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class WebViewRequestInterceptor {
				public static class: java.lang.Class<com.five_corp.ad.WebViewRequestInterceptor>;
				/**
				 * Constructs a new instance of the com.five_corp.ad.WebViewRequestInterceptor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					shouldInterceptRequest(param0: globalAndroid.webkit.WebView, param1: globalAndroid.webkit.WebResourceRequest): globalAndroid.webkit.WebResourceResponse;
					shouldInterceptRequest(param0: globalAndroid.webkit.WebView, param1: string): globalAndroid.webkit.WebResourceResponse;
				});
				public constructor();
				public shouldInterceptRequest(param0: globalAndroid.webkit.WebView, param1: string): globalAndroid.webkit.WebResourceResponse;
				public shouldInterceptRequest(param0: globalAndroid.webkit.WebView, param1: globalAndroid.webkit.WebResourceRequest): globalAndroid.webkit.WebResourceResponse;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class a {
				public static class: java.lang.Class<com.five_corp.ad.a>;
				/**
				 * Constructs a new instance of the com.five_corp.ad.a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: java.util.Collection<com.five_corp.ad.internal.ad.g>): string;
					a(param0: com.five_corp.ad.bc, param1: java.util.List<com.five_corp.ad.c>): string;
					a(param0: com.five_corp.ad.be, param1: com.five_corp.ad.bc, param2: com.five_corp.ad.internal.ad.beacon.b, param3: com.five_corp.ad.internal.beacon.b, param4: boolean, param5: number, param6: number, param7: boolean, param8: com.five_corp.ad.internal.ad.beacon.a, param9: java.util.Map<string,string>): string;
					a(param0: com.five_corp.ad.bc, param1: string, param2: com.five_corp.ad.internal.c, param3: com.five_corp.ad.internal.ad.a, param4: com.five_corp.ad.FiveAdFormat, param5: java.lang.Long, param6: number, param7: java.lang.Boolean): string;
					a(): string;
					a(param0: java.util.Map<string,string>): string;
				});
				public constructor();
				public a(param0: com.five_corp.ad.bc, param1: java.util.List<com.five_corp.ad.c>): string;
				public a(): string;
				public a(param0: java.util.Map<string,string>): string;
				public a(param0: com.five_corp.ad.be, param1: com.five_corp.ad.bc, param2: com.five_corp.ad.internal.ad.beacon.b, param3: com.five_corp.ad.internal.beacon.b, param4: boolean, param5: number, param6: number, param7: boolean, param8: com.five_corp.ad.internal.ad.beacon.a, param9: java.util.Map<string,string>): string;
				public a(param0: com.five_corp.ad.bc, param1: string, param2: com.five_corp.ad.internal.c, param3: com.five_corp.ad.internal.ad.a, param4: com.five_corp.ad.FiveAdFormat, param5: java.lang.Long, param6: number, param7: java.lang.Boolean): string;
				public a(param0: java.util.Collection<com.five_corp.ad.internal.ad.g>): string;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class aa implements com.five_corp.ad.dd {
				public static class: java.lang.Class<com.five_corp.ad.aa>;
				public a(param0: number, param1: number): void;
				public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class ab implements com.five_corp.ad.dd {
				public static class: java.lang.Class<com.five_corp.ad.ab>;
				public a(param0: number, param1: number): void;
				public onDraw(param0: globalAndroid.graphics.Canvas): void;
				public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class ac implements com.five_corp.ad.dd {
				public static class: java.lang.Class<com.five_corp.ad.ac>;
				public a(param0: number, param1: number): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class ad {
				public static class: java.lang.Class<com.five_corp.ad.ad>;
				public a: com.five_corp.ad.z;
				public getLogicalHeight(): number;
				public getLogicalWidth(): number;
				public onMeasure(param0: number, param1: number): void;
				public onAttachedToWindow(): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class ae {
				public static class: java.lang.Class<com.five_corp.ad.ae>;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class af {
				public static class: java.lang.Class<com.five_corp.ad.af>;
				/**
				 * Constructs a new instance of the com.five_corp.ad.af interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: number, param1: number, param2: com.five_corp.ad.internal.callback.a, param3: com.five_corp.ad.internal.callback.c): com.five_corp.ad.dc;
					a(param0: com.five_corp.ad.internal.callback.a, param1: com.five_corp.ad.internal.callback.c): com.five_corp.ad.dc;
					a(param0: number, param1: com.five_corp.ad.internal.callback.b): void;
					a(): void;
				});
				public constructor();
				public a(param0: number, param1: number, param2: com.five_corp.ad.internal.callback.a, param3: com.five_corp.ad.internal.callback.c): com.five_corp.ad.dc;
				public a(param0: com.five_corp.ad.internal.callback.a, param1: com.five_corp.ad.internal.callback.c): com.five_corp.ad.dc;
				public a(param0: number, param1: com.five_corp.ad.internal.callback.b): void;
				public a(): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class ag extends com.five_corp.ad.af {
				public static class: java.lang.Class<com.five_corp.ad.ag>;
				public a(param0: number, param1: number, param2: com.five_corp.ad.internal.callback.a, param3: com.five_corp.ad.internal.callback.c): com.five_corp.ad.dc;
				public a(param0: com.five_corp.ad.internal.callback.a, param1: com.five_corp.ad.internal.callback.c): com.five_corp.ad.dc;
				public a(param0: number, param1: com.five_corp.ad.internal.callback.b): void;
				public a(): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class ah {
				public static class: java.lang.Class<com.five_corp.ad.ah>;
				/**
				 * Constructs a new instance of the com.five_corp.ad.ah interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(): com.five_corp.ad.dc;
					b(): com.five_corp.ad.dc;
					a(param0: com.five_corp.ad.internal.media_config.b): com.five_corp.ad.dc;
					c(): com.five_corp.ad.ay<string>;
					a(param0: com.five_corp.ad.de): com.five_corp.ad.dc;
					d(): com.five_corp.ad.ay<string>;
					a(param0: com.five_corp.ad.internal.ad.c): com.five_corp.ad.dc;
					e(): com.five_corp.ad.ay<string>;
					a(param0: com.five_corp.ad.internal.ad.a): com.five_corp.ad.dc;
					f(): com.five_corp.ad.ay<com.five_corp.ad.internal.b>;
					b(param0: com.five_corp.ad.internal.ad.a): void;
					g(): java.util.Collection<string>;
					a(param0: string): void;
					a(param0: com.five_corp.ad.internal.e): com.five_corp.ad.dc;
					b(param0: com.five_corp.ad.internal.e): com.five_corp.ad.ay<java.io.FileOutputStream>;
					c(param0: com.five_corp.ad.internal.e): com.five_corp.ad.ay<java.io.FileInputStream>;
					d(param0: com.five_corp.ad.internal.e): com.five_corp.ad.dc;
				});
				public constructor();
				public a(param0: com.five_corp.ad.internal.media_config.b): com.five_corp.ad.dc;
				public c(): com.five_corp.ad.ay<string>;
				public b(): com.five_corp.ad.dc;
				public d(): com.five_corp.ad.ay<string>;
				public a(param0: com.five_corp.ad.internal.ad.a): com.five_corp.ad.dc;
				public c(param0: com.five_corp.ad.internal.e): com.five_corp.ad.ay<java.io.FileInputStream>;
				public e(): com.five_corp.ad.ay<string>;
				public a(param0: com.five_corp.ad.internal.ad.c): com.five_corp.ad.dc;
				public f(): com.five_corp.ad.ay<com.five_corp.ad.internal.b>;
				public g(): java.util.Collection<string>;
				public a(): com.five_corp.ad.dc;
				public a(param0: com.five_corp.ad.de): com.five_corp.ad.dc;
				public b(param0: com.five_corp.ad.internal.ad.a): void;
				public a(param0: string): void;
				public d(param0: com.five_corp.ad.internal.e): com.five_corp.ad.dc;
				public a(param0: com.five_corp.ad.internal.e): com.five_corp.ad.dc;
				public b(param0: com.five_corp.ad.internal.e): com.five_corp.ad.ay<java.io.FileOutputStream>;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class ai extends com.five_corp.ad.ah {
				public static class: java.lang.Class<com.five_corp.ad.ai>;
				public a(param0: com.five_corp.ad.internal.media_config.b): com.five_corp.ad.dc;
				public c(): com.five_corp.ad.ay<string>;
				public b(): com.five_corp.ad.dc;
				public d(): com.five_corp.ad.ay<string>;
				public c(param0: com.five_corp.ad.internal.e): com.five_corp.ad.ay<java.io.FileInputStream>;
				public a(param0: com.five_corp.ad.internal.ad.a): com.five_corp.ad.dc;
				public e(): com.five_corp.ad.ay<string>;
				public a(param0: com.five_corp.ad.internal.ad.c): com.five_corp.ad.dc;
				public f(): com.five_corp.ad.ay<com.five_corp.ad.internal.b>;
				public g(): java.util.Collection<string>;
				public a(): com.five_corp.ad.dc;
				public a(param0: com.five_corp.ad.de): com.five_corp.ad.dc;
				public b(param0: com.five_corp.ad.internal.ad.a): void;
				public a(param0: string): void;
				public d(param0: com.five_corp.ad.internal.e): com.five_corp.ad.dc;
				public a(param0: com.five_corp.ad.internal.e): com.five_corp.ad.dc;
				public b(param0: com.five_corp.ad.internal.e): com.five_corp.ad.ay<java.io.FileOutputStream>;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class aj {
				public static class: java.lang.Class<com.five_corp.ad.aj>;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class ak {
				public static class: java.lang.Class<com.five_corp.ad.ak>;
				public static a: com.five_corp.ad.ak;
				public static b: com.five_corp.ad.ak;
				public static c: com.five_corp.ad.ak;
				public static d: com.five_corp.ad.ak;
				public static valueOf(param0: string): com.five_corp.ad.ak;
				public static values(): native.Array<com.five_corp.ad.ak>;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class al {
				public static class: java.lang.Class<com.five_corp.ad.al>;
				public static a: number;
				public static b: number;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class am {
				public static class: java.lang.Class<com.five_corp.ad.am>;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class an {
				public static class: java.lang.Class<com.five_corp.ad.an>;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class ao {
				public static class: java.lang.Class<com.five_corp.ad.ao>;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class ap extends com.five_corp.ad.FiveAd {
				public static class: java.lang.Class<com.five_corp.ad.ap>;
				public static a(): boolean;
				public registerWebView(param0: globalAndroid.webkit.WebView): com.five_corp.ad.WebViewRequestInterceptor;
				public b(): void;
				public getVersion(): number;
				public static a(param0: globalAndroid.content.Context, param1: com.five_corp.ad.FiveAdConfig): void;
				public a(param0: string): void;
				public isSoundEnabled(): boolean;
				public registerWebView(param0: globalAndroid.webkit.WebView, param1: boolean): com.five_corp.ad.WebViewRequestInterceptor;
				public a(param0: any): void;
				public static d(): com.five_corp.ad.FiveAd;
				public enableSound(param0: boolean): void;
				public c(): any;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class aq extends com.five_corp.ad.cp {
				public static class: java.lang.Class<com.five_corp.ad.aq>;
				public a(param0: com.five_corp.ad.i, param1: java.util.List<com.five_corp.ad.g>): com.five_corp.ad.cn;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class ar extends com.five_corp.ad.as {
				public static class: java.lang.Class<com.five_corp.ad.ar>;
				public a(param0: number, param1: number): void;
				public b(): void;
				public i(): void;
				public a(param0: globalAndroid.view.View, param1: globalAndroid.widget.FrameLayout.LayoutParams, param2: com.five_corp.ad.internal.ad.a.c.e): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class as implements com.five_corp.ad.ca, com.five_corp.ad.dd {
				public static class: java.lang.Class<com.five_corp.ad.as>;
				public a(param0: number, param1: number): void;
				public b(): void;
				public i(): void;
				public onMeasure(param0: number, param1: number): void;
				public a(param0: globalAndroid.view.View, param1: globalAndroid.widget.FrameLayout.LayoutParams, param2: com.five_corp.ad.internal.ad.a.c.e): void;
			}
			export module as {
				export class a {
					public static class: java.lang.Class<com.five_corp.ad.as.a>;
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class at {
				public static class: java.lang.Class<com.five_corp.ad.at>;
			}
			export module at {
				export class a {
					public static class: java.lang.Class<com.five_corp.ad.at.a>;
					/**
					 * Constructs a new instance of the com.five_corp.ad.at$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						a(param0: globalAndroid.widget.SeekBar, param1: number, param2: boolean): void;
					});
					public constructor();
					public a(param0: globalAndroid.widget.SeekBar, param1: number, param2: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class au {
				public static class: java.lang.Class<com.five_corp.ad.au>;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class av<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.five_corp.ad.av<any>>;
				/**
				 * Constructs a new instance of the com.five_corp.ad.av<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					b(param0: com.five_corp.ad.cv<T>): void;
				});
				public constructor();
				public b(param0: com.five_corp.ad.cv<T>): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class aw extends com.five_corp.ad.y {
				public static class: java.lang.Class<com.five_corp.ad.aw>;
				public b(): void;
				public d(): globalAndroid.widget.FrameLayout;
				public c(): void;
				public a(): void;
			}
			export module aw {
				export class a {
					public static class: java.lang.Class<com.five_corp.ad.aw.a>;
					/**
					 * Constructs a new instance of the com.five_corp.ad.aw$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						a(): void;
						b(): void;
						a(param0: number): void;
						a(param0: java.lang.Throwable): void;
					});
					public constructor();
					public a(param0: java.lang.Throwable): void;
					public b(): void;
					public a(): void;
					public a(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class ax {
				public static class: java.lang.Class<com.five_corp.ad.ax>;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class ay<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.five_corp.ad.ay<any>>;
				public constructor(param0: boolean, param1: com.five_corp.ad.internal.c, param2: T);
				public constructor();
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class az extends com.five_corp.ad.y {
				public static class: java.lang.Class<com.five_corp.ad.az>;
				public b(): void;
				public d(): globalAndroid.widget.FrameLayout;
				public c(): void;
				public a(): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class b extends com.five_corp.ad.a {
				public static class: java.lang.Class<com.five_corp.ad.b>;
				public a(param0: com.five_corp.ad.bc, param1: java.util.List<com.five_corp.ad.c>): string;
				public a(): string;
				public a(param0: java.util.Map<string,string>): string;
				public a(param0: com.five_corp.ad.be, param1: com.five_corp.ad.bc, param2: com.five_corp.ad.internal.ad.beacon.b, param3: com.five_corp.ad.internal.beacon.b, param4: boolean, param5: number, param6: number, param7: boolean, param8: com.five_corp.ad.internal.ad.beacon.a, param9: java.util.Map<string,string>): string;
				public a(param0: com.five_corp.ad.bc, param1: string, param2: com.five_corp.ad.internal.c, param3: com.five_corp.ad.internal.ad.a, param4: com.five_corp.ad.FiveAdFormat, param5: java.lang.Long, param6: number, param7: java.lang.Boolean): string;
				public a(param0: java.util.Collection<com.five_corp.ad.internal.ad.g>): string;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class ba implements com.five_corp.ad.cq, com.five_corp.ad.e {
				public static class: java.lang.Class<com.five_corp.ad.ba>;
				public a(param0: number, param1: number): void;
				public g(param0: number): void;
				public a(param0: com.five_corp.ad.internal.c): void;
				public h(param0: number): void;
				public i(): void;
				public a(param0: number, param1: com.five_corp.ad.internal.exception.b): void;
				public d(param0: number): void;
				public e(param0: number): void;
				public c(param0: number): void;
				public f(param0: number): void;
				public a(param0: com.five_corp.ad.internal.ad.a, param1: com.five_corp.ad.internal.e, param2: com.five_corp.ad.internal.c): void;
				public h(): void;
			}
			export module ba {
				export class a extends com.five_corp.ad.cw {
					public static class: java.lang.Class<com.five_corp.ad.ba.a>;
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class bb {
				public static class: java.lang.Class<com.five_corp.ad.bb>;
				/**
				 * Constructs a new instance of the com.five_corp.ad.bb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: com.five_corp.ad.be): void;
				});
				public constructor();
				public a(param0: com.five_corp.ad.be): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class bc {
				public static class: java.lang.Class<com.five_corp.ad.bc>;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class bd extends com.five_corp.ad.internal.d {
				public static class: java.lang.Class<com.five_corp.ad.bd>;
				public a(param0: com.five_corp.ad.internal.ad.a, param1: string, param2: com.five_corp.ad.FiveAdFormat, param3: number): boolean;
				public a(param0: com.five_corp.ad.internal.ad.a, param1: number): boolean;
				public a(param0: string, param1: com.five_corp.ad.FiveAdFormat, param2: com.five_corp.ad.internal.media_config.b): com.five_corp.ad.internal.c;
				public a(param0: com.five_corp.ad.internal.ad.a, param1: string, param2: com.five_corp.ad.FiveAdFormat): boolean;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class be {
				public static class: java.lang.Class<com.five_corp.ad.be>;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class bf {
				public static class: java.lang.Class<com.five_corp.ad.bf>;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class bg {
				public static class: java.lang.Class<com.five_corp.ad.bg>;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class bh {
				public static class: java.lang.Class<com.five_corp.ad.bh>;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class bi extends com.five_corp.ad.MoviePlayer {
				public static class: java.lang.Class<com.five_corp.ad.bi>;
				public a(param0: boolean): void;
				public b(): void;
				public a(param0: number, param1: java.lang.Runnable): void;
				public f(): number;
				public a(param0: com.five_corp.ad.MoviePlayer.OnMovieStallListener): void;
				public onTimeUpdate(param0: globalAndroid.animation.TimeAnimator, param1: number, param2: number): void;
				public d(): boolean;
				public e(): number;
				public a(param0: com.five_corp.ad.MoviePlayer.OnCompletionListener): void;
				public a(param0: com.five_corp.ad.internal.e, param1: globalAndroid.view.Surface): void;
				public a(param0: com.five_corp.ad.MoviePlayer.OnPreparedListener): void;
				public c(): void;
				public a(): void;
				public a(param0: com.five_corp.ad.MoviePlayer.OnSeekCompleteListener): void;
				public a(param0: com.five_corp.ad.MoviePlayer.OnErrorListener): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class bj {
				public static class: java.lang.Class<com.five_corp.ad.bj>;
				public j: boolean;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class bk extends com.five_corp.ad.av<com.five_corp.ad.bj> {
				public static class: java.lang.Class<com.five_corp.ad.bk>;
				public b(param0: com.five_corp.ad.cv<any>): void;
				public b(param0: com.five_corp.ad.cv<com.five_corp.ad.bj>): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class bl {
				public static class: java.lang.Class<com.five_corp.ad.bl>;
			}
			export module bl {
				export class a extends java.lang.Comparable<com.five_corp.ad.bl.a> {
					public static class: java.lang.Class<com.five_corp.ad.bl.a>;
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class bm extends com.five_corp.ad.MoviePlayer {
				public static class: java.lang.Class<com.five_corp.ad.bm>;
				public a(param0: boolean): void;
				public b(): void;
				public a(param0: number, param1: java.lang.Runnable): void;
				public f(): number;
				public a(param0: com.five_corp.ad.MoviePlayer.OnMovieStallListener): void;
				public d(): boolean;
				public e(): number;
				public a(param0: com.five_corp.ad.MoviePlayer.OnCompletionListener): void;
				public a(param0: com.five_corp.ad.internal.e, param1: globalAndroid.view.Surface): void;
				public a(param0: com.five_corp.ad.MoviePlayer.OnPreparedListener): void;
				public c(): void;
				public a(): void;
				public a(param0: com.five_corp.ad.MoviePlayer.OnSeekCompleteListener): void;
				public a(param0: com.five_corp.ad.MoviePlayer.OnErrorListener): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class bn extends com.five_corp.ad.internal.exception.b {
				public static class: java.lang.Class<com.five_corp.ad.bn>;
				public constructor(param0: com.five_corp.ad.internal.c, param1: string, param2: java.lang.Throwable);
				public constructor(param0: com.five_corp.ad.internal.c, param1: number, param2: number);
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class bo extends com.five_corp.ad.cq {
				public static class: java.lang.Class<com.five_corp.ad.bo>;
				/**
				 * Constructs a new instance of the com.five_corp.ad.bo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: com.five_corp.ad.internal.ad.a): void;
					a(param0: com.five_corp.ad.internal.ad.g): void;
					b(param0: com.five_corp.ad.internal.ad.g): void;
					a(param0: com.five_corp.ad.bc): com.five_corp.ad.ay<com.five_corp.ad.internal.ad.a>;
					a(param0: com.five_corp.ad.bc, param1: com.five_corp.ad.cx): void;
					a(param0: com.five_corp.ad.cg, param1: com.five_corp.ad.bc, param2: com.five_corp.ad.cx): void;
					a(): java.util.Collection<com.five_corp.ad.internal.ad.g>;
					a(param0: com.five_corp.ad.de): void;
					b(): com.five_corp.ad.de;
					c(): com.five_corp.ad.internal.media_config.b;
					d(): void;
					e(): boolean;
					a(param0: com.five_corp.ad.internal.e): void;
					a(param0: string, param1: com.five_corp.ad.internal.ad.g): boolean;
					a(param0: com.five_corp.ad.internal.ad.a, param1: com.five_corp.ad.internal.e, param2: com.five_corp.ad.internal.c): void;
				});
				public constructor();
				public a(param0: com.five_corp.ad.internal.ad.a): void;
				public c(): com.five_corp.ad.internal.media_config.b;
				public b(param0: com.five_corp.ad.internal.ad.g): void;
				public a(param0: com.five_corp.ad.bc, param1: com.five_corp.ad.cx): void;
				public e(): boolean;
				public b(): com.five_corp.ad.de;
				public a(param0: com.five_corp.ad.internal.ad.a, param1: com.five_corp.ad.internal.e, param2: com.five_corp.ad.internal.c): void;
				public a(param0: com.five_corp.ad.bc): com.five_corp.ad.ay<com.five_corp.ad.internal.ad.a>;
				public a(param0: string, param1: com.five_corp.ad.internal.ad.g): boolean;
				public a(): java.util.Collection<com.five_corp.ad.internal.ad.g>;
				public d(): void;
				public a(param0: com.five_corp.ad.cg, param1: com.five_corp.ad.bc, param2: com.five_corp.ad.cx): void;
				public a(param0: com.five_corp.ad.de): void;
				public a(param0: com.five_corp.ad.internal.ad.g): void;
				public a(param0: com.five_corp.ad.internal.e): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class bp extends com.five_corp.ad.bo {
				public static class: java.lang.Class<com.five_corp.ad.bp>;
				public a(param0: com.five_corp.ad.internal.ad.a): void;
				public c(): com.five_corp.ad.internal.media_config.b;
				public b(param0: com.five_corp.ad.internal.ad.g): void;
				public a(param0: com.five_corp.ad.bc, param1: com.five_corp.ad.cx): void;
				public e(): boolean;
				public b(): com.five_corp.ad.de;
				public a(param0: com.five_corp.ad.internal.ad.a, param1: com.five_corp.ad.internal.e, param2: com.five_corp.ad.internal.c): void;
				public a(param0: com.five_corp.ad.bc): com.five_corp.ad.ay<com.five_corp.ad.internal.ad.a>;
				public a(param0: string, param1: com.five_corp.ad.internal.ad.g): boolean;
				public a(): java.util.Collection<com.five_corp.ad.internal.ad.g>;
				public d(): void;
				public a(param0: com.five_corp.ad.cg, param1: com.five_corp.ad.bc, param2: com.five_corp.ad.cx): void;
				public a(param0: com.five_corp.ad.de): void;
				public a(param0: com.five_corp.ad.internal.ad.g): void;
				public a(param0: com.five_corp.ad.internal.e): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class bq {
				public static class: java.lang.Class<com.five_corp.ad.bq>;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class br {
				public static class: java.lang.Class<com.five_corp.ad.br>;
				public static b: number;
				public static c: number;
				public static d: number;
				public static a(): native.Array<number>;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class bs {
				public static class: java.lang.Class<com.five_corp.ad.bs>;
			}
			export module bs {
				export class a {
					public static class: java.lang.Class<com.five_corp.ad.bs.a>;
					/**
					 * Constructs a new instance of the com.five_corp.ad.bs$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						a(): void;
					});
					public constructor();
					public a(): void;
				}
				export class b {
					public static class: java.lang.Class<com.five_corp.ad.bs.b>;
				}
				export class c {
					public static class: java.lang.Class<com.five_corp.ad.bs.c>;
					public static a: com.five_corp.ad.bs.c;
					public static b: com.five_corp.ad.bs.c;
					public static c: com.five_corp.ad.bs.c;
					public static d: com.five_corp.ad.bs.c;
					public static e: com.five_corp.ad.bs.c;
					public static f: com.five_corp.ad.bs.c;
					public static g: com.five_corp.ad.bs.c;
					public static h: com.five_corp.ad.bs.c;
					public static i: com.five_corp.ad.bs.c;
					public static j: com.five_corp.ad.bs.c;
					public static k: com.five_corp.ad.bs.c;
					public static l: com.five_corp.ad.bs.c;
					public static valueOf(param0: string): com.five_corp.ad.bs.c;
					public static values(): native.Array<com.five_corp.ad.bs.c>;
				}
				export class d {
					public static class: java.lang.Class<com.five_corp.ad.bs.d>;
				}
				export class e {
					public static class: java.lang.Class<com.five_corp.ad.bs.e>;
				}
				export class f {
					public static class: java.lang.Class<com.five_corp.ad.bs.f>;
				}
				export class g {
					public static class: java.lang.Class<com.five_corp.ad.bs.g>;
				}
				export class h {
					public static class: java.lang.Class<com.five_corp.ad.bs.h>;
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class bt extends com.five_corp.ad.db<com.five_corp.ad.ao> {
				public static class: java.lang.Class<com.five_corp.ad.bt>;
				public b(param0: com.five_corp.ad.cv<any>): void;
			}
			export module bt {
				export class a {
					public static class: java.lang.Class<com.five_corp.ad.bt.a>;
					/**
					 * Constructs a new instance of the com.five_corp.ad.bt$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						a(param0: com.five_corp.ad.cv<com.five_corp.ad.ao>): void;
					});
					public constructor();
					public a(param0: com.five_corp.ad.cv<com.five_corp.ad.ao>): void;
				}
				export class b {
					public static class: java.lang.Class<com.five_corp.ad.bt.b>;
					/**
					 * Constructs a new instance of the com.five_corp.ad.bt$b interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						a(param0: number, param1: globalAndroid.media.MediaFormat, param2: globalAndroid.media.MediaFormat): void;
					});
					public constructor();
					public a(param0: number, param1: globalAndroid.media.MediaFormat, param2: globalAndroid.media.MediaFormat): void;
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class bu {
				public static class: java.lang.Class<com.five_corp.ad.bu>;
				/**
				 * Constructs a new instance of the com.five_corp.ad.bu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: java.lang.Runnable, param1: com.five_corp.ad.internal.callback.c): void;
					a(param0: com.five_corp.ad.internal.movie.partialcache.b, param1: com.five_corp.ad.internal.callback.c): void;
					b(param0: com.five_corp.ad.internal.movie.partialcache.b, param1: com.five_corp.ad.internal.callback.c): void;
					a(param0: number): void;
					a(): void;
					b(): void;
					c(): globalAndroid.media.MediaFormat;
					d(): globalAndroid.media.MediaFormat;
					e(): number;
					f(): number;
					a(param0: number, param1: com.five_corp.ad.internal.callback.b): void;
				});
				public constructor();
				public e(): number;
				public b(): void;
				public d(): globalAndroid.media.MediaFormat;
				public f(): number;
				public c(): globalAndroid.media.MediaFormat;
				public b(param0: com.five_corp.ad.internal.movie.partialcache.b, param1: com.five_corp.ad.internal.callback.c): void;
				public a(): void;
				public a(param0: number, param1: com.five_corp.ad.internal.callback.b): void;
				public a(param0: java.lang.Runnable, param1: com.five_corp.ad.internal.callback.c): void;
				public a(param0: com.five_corp.ad.internal.movie.partialcache.b, param1: com.five_corp.ad.internal.callback.c): void;
				public a(param0: number): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class bv {
				public static class: java.lang.Class<com.five_corp.ad.bv>;
			}
			export module bv {
				export class a extends com.five_corp.ad.bv.bm {
					public static class: java.lang.Class<com.five_corp.ad.bv.a>;
				}
				export class aa extends com.five_corp.ad.bv.d {
					public static class: java.lang.Class<com.five_corp.ad.bv.aa>;
				}
				export class ab extends com.five_corp.ad.bv.d {
					public static class: java.lang.Class<com.five_corp.ad.bv.ab>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class ac extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.ac>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class ad extends com.five_corp.ad.bv.d {
					public static class: java.lang.Class<com.five_corp.ad.bv.ad>;
				}
				export class ae extends com.five_corp.ad.bv.d {
					public static class: java.lang.Class<com.five_corp.ad.bv.ae>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class af extends com.five_corp.ad.bv.d {
					public static class: java.lang.Class<com.five_corp.ad.bv.af>;
				}
				export class ag {
					public static class: java.lang.Class<com.five_corp.ad.bv.ag>;
				}
				export module ag {
					export class a {
						public static class: java.lang.Class<com.five_corp.ad.bv.ag.a>;
						public static b: number;
						public static c: number;
						public static d: number;
						public static e: number;
						public static a(): native.Array<number>;
					}
				}
				export class ah extends com.five_corp.ad.bv.d {
					public static class: java.lang.Class<com.five_corp.ad.bv.ah>;
				}
				export class ai extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.ai>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class aj extends com.five_corp.ad.bv.d {
					public static class: java.lang.Class<com.five_corp.ad.bv.aj>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class ak extends com.five_corp.ad.bv.d {
					public static class: java.lang.Class<com.five_corp.ad.bv.ak>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class al extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.al>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class am extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.am>;
				}
				export class an extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.an>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class ao {
					public static class: java.lang.Class<com.five_corp.ad.bv.ao>;
				}
				export class ap extends com.five_corp.ad.bv.d {
					public static class: java.lang.Class<com.five_corp.ad.bv.ap>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class aq extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.aq>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export module aq {
					export class a {
						public static class: java.lang.Class<com.five_corp.ad.bv.aq.a>;
					}
				}
				export class ar extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.ar>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export abstract class as extends com.five_corp.ad.bv.d {
					public static class: java.lang.Class<com.five_corp.ad.bv.as>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class at extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.at>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class au extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.au>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class av extends com.five_corp.ad.bv.d {
					public static class: java.lang.Class<com.five_corp.ad.bv.av>;
				}
				export class aw extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.aw>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export module aw {
					export class a {
						public static class: java.lang.Class<com.five_corp.ad.bv.aw.a>;
					}
				}
				export class ax extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.ax>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export module ax {
					export class a {
						public static class: java.lang.Class<com.five_corp.ad.bv.ax.a>;
					}
				}
				export class ay extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.ay>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export module ay {
					export class a {
						public static class: java.lang.Class<com.five_corp.ad.bv.ay.a>;
					}
				}
				export class az extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.az>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class b extends com.five_corp.ad.bv.d {
					public static class: java.lang.Class<com.five_corp.ad.bv.b>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class ba extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.ba>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export module ba {
					export class a {
						public static class: java.lang.Class<com.five_corp.ad.bv.ba.a>;
					}
					export class b {
						public static class: java.lang.Class<com.five_corp.ad.bv.ba.b>;
					}
				}
				export class bb extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.bb>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class bc extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.bc>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export module bc {
					export class a {
						public static class: java.lang.Class<com.five_corp.ad.bv.bc.a>;
					}
				}
				export class bd extends com.five_corp.ad.bv.d {
					public static class: java.lang.Class<com.five_corp.ad.bv.bd>;
				}
				export class be extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.be>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class bf extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.bf>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class bg extends com.five_corp.ad.bv.d {
					public static class: java.lang.Class<com.five_corp.ad.bv.bg>;
				}
				export abstract class bh extends com.five_corp.ad.bv.d {
					public static class: java.lang.Class<com.five_corp.ad.bv.bh>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class bi extends com.five_corp.ad.bv.bh {
					public static class: java.lang.Class<com.five_corp.ad.bv.bi>;
				}
				export class bj extends com.five_corp.ad.bv.bh {
					public static class: java.lang.Class<com.five_corp.ad.bv.bj>;
				}
				export class bk extends com.five_corp.ad.bv.d {
					public static class: java.lang.Class<com.five_corp.ad.bv.bk>;
				}
				export class bl extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.bl>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class bm extends com.five_corp.ad.bv.as {
					public static class: java.lang.Class<com.five_corp.ad.bv.bm>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class c extends com.five_corp.ad.bv.as {
					public static class: java.lang.Class<com.five_corp.ad.bv.c>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export abstract class d {
					public static class: java.lang.Class<com.five_corp.ad.bv.d>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class e extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.e>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class f extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.f>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class g extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.g>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class h extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.h>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export module h {
					export class a {
						public static class: java.lang.Class<com.five_corp.ad.bv.h.a>;
					}
				}
				export class i extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.i>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class j extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.j>;
				}
				export class k extends com.five_corp.ad.bv.j {
					public static class: java.lang.Class<com.five_corp.ad.bv.k>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class l extends com.five_corp.ad.bv.j {
					public static class: java.lang.Class<com.five_corp.ad.bv.l>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class m extends com.five_corp.ad.bv.d {
					public static class: java.lang.Class<com.five_corp.ad.bv.m>;
				}
				export class n extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.n>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class o extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.o>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class p extends com.five_corp.ad.bv.d {
					public static class: java.lang.Class<com.five_corp.ad.bv.p>;
				}
				export class q extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.q>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export module q {
					export class a {
						public static class: java.lang.Class<com.five_corp.ad.bv.q.a>;
					}
				}
				export class r extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.r>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export module r {
					export class a extends com.five_corp.ad.bv.r.c {
						public static class: java.lang.Class<com.five_corp.ad.bv.r.a>;
					}
					export class b extends com.five_corp.ad.bv.r.c {
						public static class: java.lang.Class<com.five_corp.ad.bv.r.b>;
					}
					export class c {
						public static class: java.lang.Class<com.five_corp.ad.bv.r.c>;
					}
					export class d extends com.five_corp.ad.bv.r.c {
						public static class: java.lang.Class<com.five_corp.ad.bv.r.d>;
					}
					export class e extends com.five_corp.ad.bv.r.c {
						public static class: java.lang.Class<com.five_corp.ad.bv.r.e>;
					}
				}
				export class s extends com.five_corp.ad.bv.d {
					public static class: java.lang.Class<com.five_corp.ad.bv.s>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class t extends com.five_corp.ad.bv.d {
					public static class: java.lang.Class<com.five_corp.ad.bv.t>;
				}
				export class u extends com.five_corp.ad.bv.d {
					public static class: java.lang.Class<com.five_corp.ad.bv.u>;
				}
				export abstract class v extends com.five_corp.ad.bv.d {
					public static class: java.lang.Class<com.five_corp.ad.bv.v>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class w extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.w>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class x extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.x>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class y extends com.five_corp.ad.bv.v {
					public static class: java.lang.Class<com.five_corp.ad.bv.y>;
					public a(param0: com.five_corp.ad.internal.util.b, param1: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b, param1: number, param2: com.five_corp.ad.internal.logger.a): void;
					public a(param0: com.five_corp.ad.internal.util.b): number;
				}
				export class z extends com.five_corp.ad.bv.c {
					public static class: java.lang.Class<com.five_corp.ad.bv.z>;
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class bw {
				public static class: java.lang.Class<com.five_corp.ad.bw>;
				public e(): number;
				public b(): void;
				public f(): number;
				public b(param0: com.five_corp.ad.internal.movie.partialcache.b, param1: com.five_corp.ad.internal.callback.c): void;
				public a(): void;
				public a(param0: number, param1: com.five_corp.ad.internal.callback.b): void;
				public a(param0: java.lang.Runnable, param1: com.five_corp.ad.internal.callback.c): void;
				public a(param0: com.five_corp.ad.internal.movie.partialcache.b, param1: com.five_corp.ad.internal.callback.c): void;
				public a(param0: number): void;
			}
			export module bw {
				export class a {
					public static class: java.lang.Class<com.five_corp.ad.bw.a>;
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class bx extends com.five_corp.ad.bw implements com.five_corp.ad.bu {
				public static class: java.lang.Class<com.five_corp.ad.bx>;
				public e(): number;
				public b(): void;
				public d(): globalAndroid.media.MediaFormat;
				public f(): number;
				public c(): globalAndroid.media.MediaFormat;
				public b(param0: com.five_corp.ad.internal.movie.partialcache.b, param1: com.five_corp.ad.internal.callback.c): void;
				public a(): void;
				public a(param0: number, param1: com.five_corp.ad.internal.callback.b): void;
				public a(param0: java.lang.Runnable, param1: com.five_corp.ad.internal.callback.c): void;
				public a(param0: com.five_corp.ad.internal.movie.partialcache.b, param1: com.five_corp.ad.internal.callback.c): void;
				public a(param0: number): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class by {
				public static class: java.lang.Class<com.five_corp.ad.by>;
				/**
				 * Constructs a new instance of the com.five_corp.ad.by interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: string): com.five_corp.ad.ax;
					a(param0: string, param1: string): com.five_corp.ad.ax;
				});
				public constructor();
				public a(param0: string, param1: string): com.five_corp.ad.ax;
				public a(param0: string): com.five_corp.ad.ax;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class bz extends com.five_corp.ad.by {
				public static class: java.lang.Class<com.five_corp.ad.bz>;
				public a(param0: string, param1: string): com.five_corp.ad.ax;
				public a(param0: string): com.five_corp.ad.ax;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class c {
				public static class: java.lang.Class<com.five_corp.ad.c>;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class ca {
				public static class: java.lang.Class<com.five_corp.ad.ca>;
				/**
				 * Constructs a new instance of the com.five_corp.ad.ca interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					i(): void;
				});
				public constructor();
				public i(): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class cb {
				public static class: java.lang.Class<com.five_corp.ad.cb>;
				/**
				 * Constructs a new instance of the com.five_corp.ad.cb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(): void;
				});
				public constructor();
				public a(): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class cc {
				public static class: java.lang.Class<com.five_corp.ad.cc>;
				/**
				 * Constructs a new instance of the com.five_corp.ad.cc interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: com.five_corp.ad.cj): void;
				});
				public constructor();
				public a(param0: com.five_corp.ad.cj): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class cd {
				public static class: java.lang.Class<com.five_corp.ad.cd>;
				public static a: number;
				public static b: number;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class ce extends com.five_corp.ad.y {
				public static class: java.lang.Class<com.five_corp.ad.ce>;
				public b(): void;
				public d(): globalAndroid.widget.FrameLayout;
				public c(): void;
				public a(): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class cf {
				public static class: java.lang.Class<com.five_corp.ad.cf>;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class cg {
				public static class: java.lang.Class<com.five_corp.ad.cg>;
				/**
				 * Constructs a new instance of the com.five_corp.ad.cg interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: globalAndroid.content.Context): void;
					a(): void;
					a(param0: com.five_corp.ad.bc, param1: java.util.List<com.five_corp.ad.c>, param2: com.five_corp.ad.internal.ad_check.b): void;
					a(param0: com.five_corp.ad.bc, param1: string, param2: com.five_corp.ad.internal.c, param3: string, param4: com.five_corp.ad.internal.ad.a, param5: com.five_corp.ad.FiveAdFormat, param6: java.lang.Long, param7: java.lang.Boolean, param8: number): void;
					a(param0: com.five_corp.ad.be, param1: com.five_corp.ad.bc, param2: boolean, param3: number, param4: number, param5: com.five_corp.ad.internal.ad.beacon.b, param6: com.five_corp.ad.internal.beacon.b, param7: com.five_corp.ad.internal.ad.beacon.a, param8: java.util.Map<string,string>): void;
					a(param0: string): void;
				});
				public constructor();
				public a(param0: com.five_corp.ad.bc, param1: java.util.List<com.five_corp.ad.c>, param2: com.five_corp.ad.internal.ad_check.b): void;
				public a(param0: string): void;
				public a(): void;
				public a(param0: globalAndroid.content.Context): void;
				public a(param0: com.five_corp.ad.bc, param1: string, param2: com.five_corp.ad.internal.c, param3: string, param4: com.five_corp.ad.internal.ad.a, param5: com.five_corp.ad.FiveAdFormat, param6: java.lang.Long, param7: java.lang.Boolean, param8: number): void;
				public a(param0: com.five_corp.ad.be, param1: com.five_corp.ad.bc, param2: boolean, param3: number, param4: number, param5: com.five_corp.ad.internal.ad.beacon.b, param6: com.five_corp.ad.internal.beacon.b, param7: com.five_corp.ad.internal.ad.beacon.a, param8: java.util.Map<string,string>): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class ch extends com.five_corp.ad.cg {
				public static class: java.lang.Class<com.five_corp.ad.ch>;
				public a(param0: com.five_corp.ad.bc, param1: java.util.List<com.five_corp.ad.c>, param2: com.five_corp.ad.internal.ad_check.b): void;
				public a(param0: string): void;
				public a(): void;
				public a(param0: globalAndroid.content.Context): void;
				public a(param0: com.five_corp.ad.bc, param1: string, param2: com.five_corp.ad.internal.c, param3: string, param4: com.five_corp.ad.internal.ad.a, param5: com.five_corp.ad.FiveAdFormat, param6: java.lang.Long, param7: java.lang.Boolean, param8: number): void;
				public a(param0: com.five_corp.ad.be, param1: com.five_corp.ad.bc, param2: boolean, param3: number, param4: number, param5: com.five_corp.ad.internal.ad.beacon.b, param6: com.five_corp.ad.internal.beacon.b, param7: com.five_corp.ad.internal.ad.beacon.a, param8: java.util.Map<string,string>): void;
			}
			export module ch {
				export class a extends com.five_corp.ad.cz {
					public static class: java.lang.Class<com.five_corp.ad.ch.a>;
				}
				export class b extends com.five_corp.ad.ch.c {
					public static class: java.lang.Class<com.five_corp.ad.ch.b>;
					public a: com.five_corp.ad.bc;
					public b: com.five_corp.ad.internal.ad.beacon.b;
					public c: com.five_corp.ad.internal.beacon.b;
					public d: boolean;
					public e: number;
					public f: boolean;
					public g: com.five_corp.ad.internal.ad.beacon.a;
					public h: java.util.Map<string,string>;
				}
				export abstract class c extends com.five_corp.ad.cz {
					public static class: java.lang.Class<com.five_corp.ad.ch.c>;
				}
				export class d extends com.five_corp.ad.ch.c {
					public static class: java.lang.Class<com.five_corp.ad.ch.d>;
					public a: string;
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class ci extends com.five_corp.ad.ck {
				public static class: java.lang.Class<com.five_corp.ad.ci>;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class cj extends com.five_corp.ad.ck {
				public static class: java.lang.Class<com.five_corp.ad.cj>;
				public d: com.five_corp.ad.be;
				public e: com.five_corp.ad.e;
				public onVisibilityChanged(param0: globalAndroid.view.View, param1: number): void;
				public b(): void;
				public a(param0: globalAndroid.view.View): void;
				public q(): void;
				public a_(): void;
				public c(): void;
				public a(param0: com.five_corp.ad.internal.exception.b): void;
				public onDetachedFromWindow(): void;
				public r(): void;
				public onAttachedToWindow(): void;
				public onWindowVisibilityChanged(param0: number): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export abstract class ck {
				public static class: java.lang.Class<com.five_corp.ad.ck>;
				public g: number;
				public h: globalAndroid.os.Handler;
				public i: com.five_corp.ad.AdViewUpdateTimer;
				public j: any;
				public a(param0: globalAndroid.view.View): void;
				public onMeasure(param0: number, param1: number): void;
				public t(): number;
			}
			export module ck {
				export class a {
					public static class: java.lang.Class<com.five_corp.ad.ck.a>;
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class cl implements com.five_corp.ad.dd, com.five_corp.ad.n {
				public static class: java.lang.Class<com.five_corp.ad.cl>;
				public a(param0: number, param1: number): void;
				public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public onMeasure(param0: number, param1: number): void;
				public a(param0: com.five_corp.ad.ck): void;
			}
			export module cl {
				export class a {
					public static class: java.lang.Class<com.five_corp.ad.cl.a>;
					/**
					 * Constructs a new instance of the com.five_corp.ad.cl$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						a(param0: com.five_corp.ad.internal.ad.custom_layout.a, param1: number): void;
					});
					public constructor();
					public a(param0: com.five_corp.ad.internal.ad.custom_layout.a, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class cm extends com.five_corp.ad.dd {
				public static class: java.lang.Class<com.five_corp.ad.cm>;
				public a(param0: number, param1: number): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class cn {
				public static class: java.lang.Class<com.five_corp.ad.cn>;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class co extends com.five_corp.ad.f {
				public static class: java.lang.Class<com.five_corp.ad.co>;
				public a(param0: com.five_corp.ad.g): void;
				public a(param0: com.five_corp.ad.g, param1: number): void;
				public a(param0: com.five_corp.ad.g, param1: com.five_corp.ad.internal.e, param2: com.five_corp.ad.internal.c): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class cp {
				public static class: java.lang.Class<com.five_corp.ad.cp>;
				/**
				 * Constructs a new instance of the com.five_corp.ad.cp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: com.five_corp.ad.i, param1: java.util.List<com.five_corp.ad.g>): com.five_corp.ad.cn;
				});
				public constructor();
				public a(param0: com.five_corp.ad.i, param1: java.util.List<com.five_corp.ad.g>): com.five_corp.ad.cn;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class cq {
				public static class: java.lang.Class<com.five_corp.ad.cq>;
				/**
				 * Constructs a new instance of the com.five_corp.ad.cq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: com.five_corp.ad.internal.ad.a, param1: com.five_corp.ad.internal.e, param2: com.five_corp.ad.internal.c): void;
				});
				public constructor();
				public a(param0: com.five_corp.ad.internal.ad.a, param1: com.five_corp.ad.internal.e, param2: com.five_corp.ad.internal.c): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class cr {
				public static class: java.lang.Class<com.five_corp.ad.cr>;
				/**
				 * Constructs a new instance of the com.five_corp.ad.cr interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: com.five_corp.ad.internal.e, param1: number): com.five_corp.ad.dc;
				});
				public constructor();
				public a(param0: com.five_corp.ad.internal.e, param1: number): com.five_corp.ad.dc;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class cs extends com.five_corp.ad.cr {
				public static class: java.lang.Class<com.five_corp.ad.cs>;
				public a(param0: com.five_corp.ad.internal.e, param1: number): com.five_corp.ad.dc;
			}
			export module cs {
				export abstract class a extends com.five_corp.ad.cw {
					public static class: java.lang.Class<com.five_corp.ad.cs.a>;
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class ct {
				public static class: java.lang.Class<com.five_corp.ad.ct>;
				public static a: com.five_corp.ad.ct;
				public static b: com.five_corp.ad.ct;
				public static c: com.five_corp.ad.ct;
				public static d: com.five_corp.ad.ct;
				public static values(): native.Array<com.five_corp.ad.ct>;
				public static valueOf(param0: string): com.five_corp.ad.ct;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class cu {
				public static class: java.lang.Class<com.five_corp.ad.cu>;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class cv<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.five_corp.ad.cv<any>>;
				/**
				 * Constructs a new instance of the com.five_corp.ad.cv<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: T): void;
				});
				public constructor();
				public a(param0: T): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export abstract class cw {
				public static class: java.lang.Class<com.five_corp.ad.cw>;
				public run(): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class cx {
				public static class: java.lang.Class<com.five_corp.ad.cx>;
				/**
				 * Constructs a new instance of the com.five_corp.ad.cx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: com.five_corp.ad.be): void;
					a(param0: com.five_corp.ad.internal.c): void;
				});
				public constructor();
				public a(param0: com.five_corp.ad.internal.c): void;
				public a(param0: com.five_corp.ad.be): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class cy {
				public static class: java.lang.Class<com.five_corp.ad.cy>;
				/**
				 * Constructs a new instance of the com.five_corp.ad.cy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: number): void;
				});
				public constructor();
				public a(param0: number): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export abstract class cz extends com.five_corp.ad.cw {
				public static class: java.lang.Class<com.five_corp.ad.cz>;
			}
			export module cz {
				export class a {
					public static class: java.lang.Class<com.five_corp.ad.cz.a>;
					public static b: number;
					public static c: number;
					public static d: number;
					public static e: number;
					public static f: number;
					public static a(): native.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class d implements com.five_corp.ad.cq, com.five_corp.ad.e {
				public static class: java.lang.Class<com.five_corp.ad.d>;
				public a(param0: number, param1: number): void;
				public g(param0: number): void;
				public a(param0: com.five_corp.ad.internal.c): void;
				public h(param0: number): void;
				public a(param0: number, param1: com.five_corp.ad.internal.exception.b): void;
				public a(param0: com.five_corp.ad.internal.ad.a, param1: com.five_corp.ad.internal.e, param2: com.five_corp.ad.internal.c): void;
				public c(): com.five_corp.ad.FiveAdState;
				public i(): void;
				public d(param0: number): void;
				public e(param0: number): void;
				public c(param0: number): void;
				public f(param0: number): void;
				public h(): void;
			}
			export module d {
				export class a extends com.five_corp.ad.cw {
					public static class: java.lang.Class<com.five_corp.ad.d.a>;
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class da {
				public static class: java.lang.Class<com.five_corp.ad.da>;
			}
			export module da {
				export class a {
					public static class: java.lang.Class<com.five_corp.ad.da.a>;
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class db<T>  extends com.five_corp.ad.av<any> {
				public static class: java.lang.Class<com.five_corp.ad.db<any>>;
				public b(param0: com.five_corp.ad.cv<any>): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class dc extends com.five_corp.ad.ay<java.lang.Void> {
				public static class: java.lang.Class<com.five_corp.ad.dc>;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class dd {
				public static class: java.lang.Class<com.five_corp.ad.dd>;
				/**
				 * Constructs a new instance of the com.five_corp.ad.dd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: number, param1: number): void;
				});
				public constructor();
				public a(param0: number, param1: number): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class de {
				public static class: java.lang.Class<com.five_corp.ad.de>;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class df {
				public static class: java.lang.Class<com.five_corp.ad.df>;
				/**
				 * Constructs a new instance of the com.five_corp.ad.df interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(): string;
					b(): com.five_corp.ad.internal.a;
					c(): string;
					d(): string;
					e(): string;
					f(): string;
					g(): string;
					h(): number;
					i(): number;
					j(): number;
					k(): number;
					l(): number;
					a(param0: number): number;
					a(param0: globalAndroid.content.Context): boolean;
					m(): string;
				});
				public constructor();
				public k(): number;
				public a(): string;
				public m(): string;
				public d(): string;
				public f(): string;
				public c(): string;
				public i(): number;
				public b(): com.five_corp.ad.internal.a;
				public e(): string;
				public a(param0: number): number;
				public g(): string;
				public h(): number;
				public a(param0: globalAndroid.content.Context): boolean;
				public j(): number;
				public l(): number;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class dg extends com.five_corp.ad.df {
				public static class: java.lang.Class<com.five_corp.ad.dg>;
				public k(): number;
				public a(): string;
				public m(): string;
				public d(): string;
				public f(): string;
				public c(): string;
				public i(): number;
				public b(): com.five_corp.ad.internal.a;
				public e(): string;
				public a(param0: number): number;
				public g(): string;
				public h(): number;
				public a(param0: globalAndroid.content.Context): boolean;
				public j(): number;
				public l(): number;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class dh extends com.five_corp.ad.db<com.five_corp.ad.bl> {
				public static class: java.lang.Class<com.five_corp.ad.dh>;
				public b(param0: com.five_corp.ad.cv<any>): void;
			}
			export module dh {
				export class a {
					public static class: java.lang.Class<com.five_corp.ad.dh.a>;
					/**
					 * Constructs a new instance of the com.five_corp.ad.dh$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						a(param0: boolean): void;
					});
					public constructor();
					public a(param0: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class di extends com.five_corp.ad.bb {
				public static class: java.lang.Class<com.five_corp.ad.di>;
				public a(param0: com.five_corp.ad.be): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class dj {
				public static class: java.lang.Class<com.five_corp.ad.dj>;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class dk {
				public static class: java.lang.Class<com.five_corp.ad.dk>;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class dl {
				public static class: java.lang.Class<com.five_corp.ad.dl>;
			}
			export module dl {
				export class a extends com.five_corp.ad.WebViewRequestInterceptor {
					public static class: java.lang.Class<com.five_corp.ad.dl.a>;
					public shouldInterceptRequest(param0: globalAndroid.webkit.WebView, param1: string): globalAndroid.webkit.WebResourceResponse;
					public shouldInterceptRequest(param0: globalAndroid.webkit.WebView, param1: globalAndroid.webkit.WebResourceRequest): globalAndroid.webkit.WebResourceResponse;
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class dm {
				public static class: java.lang.Class<com.five_corp.ad.dm>;
				public static a: com.five_corp.ad.dm;
				public static b: com.five_corp.ad.dm;
				public static c: com.five_corp.ad.dm;
				public static d: com.five_corp.ad.dm;
				public static e: com.five_corp.ad.dm;
				public static f: com.five_corp.ad.dm;
				public static g: com.five_corp.ad.dm;
				public static h: com.five_corp.ad.dm;
				public static values(): native.Array<com.five_corp.ad.dm>;
				public static valueOf(param0: string): com.five_corp.ad.dm;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class dn {
				public static class: java.lang.Class<com.five_corp.ad.dn>;
				public static a: com.five_corp.ad.dn;
				public static b: com.five_corp.ad.dn;
				public static valueOf(param0: string): com.five_corp.ad.dn;
				public static values(): native.Array<com.five_corp.ad.dn>;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class e {
				public static class: java.lang.Class<com.five_corp.ad.e>;
				/**
				 * Constructs a new instance of the com.five_corp.ad.e interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					h(): void;
					c(param0: number): void;
					d(param0: number): void;
					i(): void;
					e(param0: number): void;
					a(param0: number, param1: number): void;
					f(param0: number): void;
					a(param0: number, param1: com.five_corp.ad.internal.exception.b): void;
					a(param0: com.five_corp.ad.internal.c): void;
					g(param0: number): void;
					h(param0: number): void;
				});
				public constructor();
				public a(param0: number, param1: number): void;
				public g(param0: number): void;
				public a(param0: com.five_corp.ad.internal.c): void;
				public h(param0: number): void;
				public i(): void;
				public a(param0: number, param1: com.five_corp.ad.internal.exception.b): void;
				public d(param0: number): void;
				public e(param0: number): void;
				public c(param0: number): void;
				public f(param0: number): void;
				public h(): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class f {
				public static class: java.lang.Class<com.five_corp.ad.f>;
				/**
				 * Constructs a new instance of the com.five_corp.ad.f interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: com.five_corp.ad.g, param1: com.five_corp.ad.internal.e, param2: com.five_corp.ad.internal.c): void;
					a(param0: com.five_corp.ad.g): void;
					a(param0: com.five_corp.ad.g, param1: number): void;
				});
				public constructor();
				public a(param0: com.five_corp.ad.g): void;
				public a(param0: com.five_corp.ad.g, param1: number): void;
				public a(param0: com.five_corp.ad.g, param1: com.five_corp.ad.internal.e, param2: com.five_corp.ad.internal.c): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class g {
				public static class: java.lang.Class<com.five_corp.ad.g>;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class h {
				public static class: java.lang.Class<com.five_corp.ad.h>;
			}
			export module h {
				export class a {
					public static class: java.lang.Class<com.five_corp.ad.h.a>;
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class i {
				public static class: java.lang.Class<com.five_corp.ad.i>;
			}
			export module i {
				export class a {
					public static class: java.lang.Class<com.five_corp.ad.i.a>;
				}
				export class b {
					public static class: java.lang.Class<com.five_corp.ad.i.b>;
				}
				export class c {
					public static class: java.lang.Class<com.five_corp.ad.i.c>;
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export class a {
					public static class: java.lang.Class<com.five_corp.ad.internal.a>;
					public a: string;
					public b: boolean;
					public constructor(param0: string, param1: boolean);
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export class a {
						public static class: java.lang.Class<com.five_corp.ad.internal.ad.a>;
						public c: string;
						public d: java.lang.Long;
						public e: com.five_corp.ad.internal.ad.g;
						public f: com.five_corp.ad.internal.ad.h;
						public g: com.five_corp.ad.internal.ad.i;
						public h: java.lang.Long;
						public i: java.util.List<com.five_corp.ad.internal.ad.a.a>;
						public j: number;
						public k: com.five_corp.ad.internal.ad.k;
						public l: java.lang.Integer;
						public m: com.five_corp.ad.internal.ad.j;
						public n: com.five_corp.ad.internal.ad.l;
						public o: com.five_corp.ad.internal.ad.n;
						public p: string;
						public q: java.util.List<string>;
						public r: java.util.List<string>;
						public s: number;
						public t: com.five_corp.ad.internal.ad.m;
						public u: com.five_corp.ad.internal.ad.m;
						public v: com.five_corp.ad.internal.ad.m;
						public w: string;
						public x: any;
						public y: string;
						public z: string;
						public A: string;
						public B: string;
						public C: java.util.List<com.five_corp.ad.internal.ad.a.h>;
						public D: java.util.List<com.five_corp.ad.internal.ad.a.b>;
						public E: java.util.List<com.five_corp.ad.internal.ad.beacon.d>;
						public F: number;
						public G: com.five_corp.ad.internal.ad.beacon.f;
						public H: com.five_corp.ad.internal.ad.beacon.f;
						public I: java.util.List<com.five_corp.ad.internal.ad.beacon.f>;
						public J: com.five_corp.ad.internal.ad.a.j;
						public K: string;
						public L: java.util.List<com.five_corp.ad.internal.ad.m>;
						public a(): java.util.Set<com.five_corp.ad.internal.ad.beacon.a>;
						public a(param0: com.five_corp.ad.internal.ad.beacon.a): com.five_corp.ad.internal.ad.beacon.f;
						public static a(param0: com.five_corp.ad.internal.ad.a, param1: string): com.five_corp.ad.internal.ad.a.b;
						public b(param0: com.five_corp.ad.internal.ad.beacon.a): java.util.List<com.five_corp.ad.internal.ad.beacon.d>;
						public constructor(param0: string, param1: com.five_corp.ad.CreativeType, param2: string, param3: java.lang.Long, param4: com.five_corp.ad.internal.ad.g, param5: com.five_corp.ad.internal.ad.h, param6: com.five_corp.ad.internal.ad.i, param7: java.lang.Long, param8: java.util.List<com.five_corp.ad.internal.ad.a.a>, param9: number, param10: com.five_corp.ad.internal.ad.k, param11: java.lang.Integer, param12: com.five_corp.ad.internal.ad.j, param13: com.five_corp.ad.internal.ad.l, param14: com.five_corp.ad.internal.ad.n, param15: string, param16: java.util.List<string>, param17: java.util.List<string>, param18: number, param19: com.five_corp.ad.internal.ad.m, param20: com.five_corp.ad.internal.ad.m, param21: com.five_corp.ad.internal.ad.m, param22: string, param23: any, param24: string, param25: string, param26: string, param27: string, param28: java.util.List<com.five_corp.ad.internal.ad.a.h>, param29: java.util.List<com.five_corp.ad.internal.ad.a.b>, param30: java.util.List<com.five_corp.ad.internal.ad.beacon.d>, param31: number, param32: com.five_corp.ad.internal.ad.beacon.f, param33: com.five_corp.ad.internal.ad.beacon.f, param34: java.util.List<com.five_corp.ad.internal.ad.beacon.f>, param35: com.five_corp.ad.internal.ad.a.j, param36: string, param37: java.util.List<com.five_corp.ad.internal.ad.m>);
					}
					export module a {
						export class a {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.a>;
							public a: number;
							public b: number;
							public constructor();
						}
						export class b {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.b>;
							public a: java.lang.Integer;
							public b: com.five_corp.ad.internal.ad.a.b.j;
							public c: com.five_corp.ad.internal.ad.a.b.n;
							public d: com.five_corp.ad.internal.ad.a.b.g;
							public e: com.five_corp.ad.internal.ad.a.b.h;
							public f: com.five_corp.ad.internal.ad.a.b.f;
							public g: com.five_corp.ad.internal.ad.a.b.a;
							public h: com.five_corp.ad.internal.ad.a.b.u;
							public i: com.five_corp.ad.internal.ad.a.b.t;
							public j: com.five_corp.ad.internal.ad.custom_layout.d;
							public k: com.five_corp.ad.internal.ad.a.g;
							public constructor();
						}
						export module b {
							export class a {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.b.a>;
								public a: com.five_corp.ad.internal.ad.a.b.d;
								public b: com.five_corp.ad.internal.ad.a.b.b;
								public c: java.lang.Integer;
								public d: string;
								public e: com.five_corp.ad.internal.ad.m;
								public f: com.five_corp.ad.internal.ad.m;
								public g: string;
								public h: string;
								public i: string;
								public j: java.util.List<com.five_corp.ad.internal.ad.m>;
								public constructor();
							}
							export class b {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.b.b>;
								public a: com.five_corp.ad.internal.ad.a.b.c;
								public b: java.lang.Integer;
								public constructor();
							}
							export class c {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.b.c>;
								public static b: com.five_corp.ad.internal.ad.a.b.c;
								public static c: com.five_corp.ad.internal.ad.a.b.c;
								public static d: com.five_corp.ad.internal.ad.a.b.c;
								public static e: com.five_corp.ad.internal.ad.a.b.c;
								public static values(): native.Array<com.five_corp.ad.internal.ad.a.b.c>;
								public static a(param0: number): com.five_corp.ad.internal.ad.a.b.c;
								public static valueOf(param0: string): com.five_corp.ad.internal.ad.a.b.c;
							}
							export class d {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.b.d>;
								public a: com.five_corp.ad.internal.ad.a.b.s;
								public b: com.five_corp.ad.internal.ad.a.b.s;
								public c: com.five_corp.ad.internal.ad.a.b.s;
								public d: java.lang.Double;
								public e: java.lang.Double;
								public f: java.lang.Double;
								public constructor();
							}
							export class e {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.b.e>;
								public static b: com.five_corp.ad.internal.ad.a.b.e;
								public static c: com.five_corp.ad.internal.ad.a.b.e;
								public static a(param0: number): com.five_corp.ad.internal.ad.a.b.e;
								public static values(): native.Array<com.five_corp.ad.internal.ad.a.b.e>;
								public static valueOf(param0: string): com.five_corp.ad.internal.ad.a.b.e;
							}
							export class f {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.b.f>;
								public a: com.five_corp.ad.internal.ad.a.b.d;
								public b: com.five_corp.ad.internal.ad.a.b.b;
								public c: java.lang.Integer;
								public d: java.lang.Integer;
								public e: string;
								public f: string;
								public g: java.lang.Integer;
								public h: java.lang.Integer;
								public i: java.util.List<com.five_corp.ad.internal.ad.m>;
								public j: string;
								public constructor();
							}
							export class g {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.b.g>;
								public a: com.five_corp.ad.internal.ad.a.b.d;
								public b: com.five_corp.ad.internal.ad.a.b.b;
								public c: com.five_corp.ad.internal.ad.a.b.q;
								public constructor();
							}
							export class h {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.b.h>;
								public a: com.five_corp.ad.internal.ad.a.b.d;
								public b: com.five_corp.ad.internal.ad.a.b.b;
								public c: com.five_corp.ad.internal.ad.a.b.q;
								public d: com.five_corp.ad.internal.ad.a.b.l;
								public constructor();
							}
							export class i {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.b.i>;
								public a: java.lang.Integer;
								public b: java.lang.Integer;
								public c: com.five_corp.ad.internal.ad.a.b.r;
								public d: com.five_corp.ad.internal.ad.a.b.r;
								public constructor();
							}
							export class j {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.b.j>;
								public a: com.five_corp.ad.internal.ad.a.b.m;
								public b: com.five_corp.ad.internal.ad.a.b.m;
								public constructor();
							}
							export class k {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.b.k>;
								public a: string;
								public b: string;
								public c: string;
								public d: string;
								public constructor();
							}
							export class l {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.b.l>;
								public a: java.lang.Integer;
								public b: com.five_corp.ad.internal.ad.m;
								public c: com.five_corp.ad.internal.ad.m;
								public d: com.five_corp.ad.internal.ad.m;
								public e: string;
								public f: string;
								public g: string;
								public h: java.util.List<com.five_corp.ad.internal.ad.m>;
								public constructor();
							}
							export class m {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.b.m>;
								public static b: com.five_corp.ad.internal.ad.a.b.m;
								public static c: com.five_corp.ad.internal.ad.a.b.m;
								public static d: com.five_corp.ad.internal.ad.a.b.m;
								public static e: com.five_corp.ad.internal.ad.a.b.m;
								public f: number;
								public static a(param0: number): com.five_corp.ad.internal.ad.a.b.m;
								public static values(): native.Array<com.five_corp.ad.internal.ad.a.b.m>;
								public static valueOf(param0: string): com.five_corp.ad.internal.ad.a.b.m;
							}
							export class n {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.b.n>;
								public a: com.five_corp.ad.internal.ad.a.b.o;
								public b: com.five_corp.ad.internal.ad.a.b.p;
								public c: com.five_corp.ad.internal.ad.a.b.k;
								public d: com.five_corp.ad.internal.ad.format_config.a;
								public e: com.five_corp.ad.internal.ad.a.b.i;
								public constructor();
							}
							export class o {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.b.o>;
								public static b: com.five_corp.ad.internal.ad.a.b.o;
								public static c: com.five_corp.ad.internal.ad.a.b.o;
								public static values(): native.Array<com.five_corp.ad.internal.ad.a.b.o>;
								public static valueOf(param0: string): com.five_corp.ad.internal.ad.a.b.o;
								public static a(param0: number): com.five_corp.ad.internal.ad.a.b.o;
							}
							export class p {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.b.p>;
								public static b: com.five_corp.ad.internal.ad.a.b.p;
								public static c: com.five_corp.ad.internal.ad.a.b.p;
								public static d: com.five_corp.ad.internal.ad.a.b.p;
								public static values(): native.Array<com.five_corp.ad.internal.ad.a.b.p>;
								public static valueOf(param0: string): com.five_corp.ad.internal.ad.a.b.p;
								public static a(param0: number): com.five_corp.ad.internal.ad.a.b.p;
							}
							export class q {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.b.q>;
								public a: com.five_corp.ad.internal.ad.a.b.e;
								public b: java.lang.Long;
								public c: string;
								public constructor();
							}
							export class r {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.b.r>;
								public a: java.lang.Integer;
								public b: java.lang.Integer;
								public c: java.lang.Integer;
								public d: java.lang.Integer;
								public constructor();
							}
							export class s {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.b.s>;
								public static b: com.five_corp.ad.internal.ad.a.b.s;
								public static c: com.five_corp.ad.internal.ad.a.b.s;
								public static d: com.five_corp.ad.internal.ad.a.b.s;
								public static values(): native.Array<com.five_corp.ad.internal.ad.a.b.s>;
								public static a(param0: number): com.five_corp.ad.internal.ad.a.b.s;
								public static valueOf(param0: string): com.five_corp.ad.internal.ad.a.b.s;
							}
							export class t {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.b.t>;
								public a: com.five_corp.ad.internal.ad.a.b.d;
								public b: com.five_corp.ad.internal.ad.a.b.b;
								public constructor();
							}
							export class u {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.b.u>;
								public a: com.five_corp.ad.internal.ad.a.b.d;
								public b: com.five_corp.ad.internal.ad.a.b.b;
								public constructor();
							}
						}
						export class c {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c>;
						}
						export module c {
							export class a {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c.a>;
								public static b: com.five_corp.ad.internal.ad.a.c.a;
								public static c: com.five_corp.ad.internal.ad.a.c.a;
								public static d: com.five_corp.ad.internal.ad.a.c.a;
								public static values(): native.Array<com.five_corp.ad.internal.ad.a.c.a>;
								public static valueOf(param0: string): com.five_corp.ad.internal.ad.a.c.a;
								public static a(param0: number): com.five_corp.ad.internal.ad.a.c.a;
							}
							export class aa {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c.aa>;
								public static b: com.five_corp.ad.internal.ad.a.c.aa;
								public static a(param0: number): com.five_corp.ad.internal.ad.a.c.aa;
								public static valueOf(param0: string): com.five_corp.ad.internal.ad.a.c.aa;
								public static values(): native.Array<com.five_corp.ad.internal.ad.a.c.aa>;
							}
							export class ab {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c.ab>;
								public a: java.lang.Boolean;
								public b: java.lang.Integer;
								public c: java.lang.Integer;
								public constructor();
							}
							export class ac {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c.ac>;
								public a: com.five_corp.ad.internal.ad.a.c.h;
								public b: com.five_corp.ad.internal.ad.a.c.i;
								public c: com.five_corp.ad.internal.ad.a.c.e;
								public d: com.five_corp.ad.internal.ad.a.c.f;
								public e: com.five_corp.ad.internal.ad.a.c.f;
								public constructor();
							}
							export class ad {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c.ad>;
								public static b: com.five_corp.ad.internal.ad.a.c.ad;
								public static c: com.five_corp.ad.internal.ad.a.c.ad;
								public static d: com.five_corp.ad.internal.ad.a.c.ad;
								public static valueOf(param0: string): com.five_corp.ad.internal.ad.a.c.ad;
								public static a(param0: number): com.five_corp.ad.internal.ad.a.c.ad;
								public static values(): native.Array<com.five_corp.ad.internal.ad.a.c.ad>;
							}
							export class b {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c.b>;
								public a: com.five_corp.ad.internal.ad.a.c.t;
								public b: java.lang.Boolean;
								public c: java.lang.Boolean;
								public d: com.five_corp.ad.internal.ad.a.c.ad;
								public e: com.five_corp.ad.internal.ad.a.c.a;
								public f: java.util.List<com.five_corp.ad.internal.ad.a.c.c>;
								public g: com.five_corp.ad.internal.ad.a.c.ab;
								public h: com.five_corp.ad.internal.ad.m;
								public i: com.five_corp.ad.internal.ad.a.c.m;
								public j: com.five_corp.ad.internal.ad.a.c.x;
								public k: com.five_corp.ad.internal.ad.a.c.y;
								public constructor();
							}
							export class c {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c.c>;
								public a: com.five_corp.ad.internal.ad.a.c.d;
								public b: com.five_corp.ad.internal.ad.a.c.f;
								public c: com.five_corp.ad.internal.ad.a.c.i;
								public constructor();
							}
							export class d {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c.d>;
								public static b: com.five_corp.ad.internal.ad.a.c.d;
								public static c: com.five_corp.ad.internal.ad.a.c.d;
								public static a(param0: number): com.five_corp.ad.internal.ad.a.c.d;
								public static values(): native.Array<com.five_corp.ad.internal.ad.a.c.d>;
								public static valueOf(param0: string): com.five_corp.ad.internal.ad.a.c.d;
							}
							export class e {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c.e>;
								public static b: com.five_corp.ad.internal.ad.a.c.e;
								public static a(param0: number): com.five_corp.ad.internal.ad.a.c.e;
								public static values(): native.Array<com.five_corp.ad.internal.ad.a.c.e>;
								public static valueOf(param0: string): com.five_corp.ad.internal.ad.a.c.e;
							}
							export class f {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c.f>;
								public a: com.five_corp.ad.internal.ad.a.c.g;
								public b: com.five_corp.ad.internal.ad.a.c.j;
								public c: com.five_corp.ad.internal.ad.m;
								public constructor();
							}
							export class g {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c.g>;
								public static b: com.five_corp.ad.internal.ad.a.c.g;
								public static valueOf(param0: string): com.five_corp.ad.internal.ad.a.c.g;
								public static a(param0: number): com.five_corp.ad.internal.ad.a.c.g;
								public static values(): native.Array<com.five_corp.ad.internal.ad.a.c.g>;
							}
							export class h {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c.h>;
								public static b: com.five_corp.ad.internal.ad.a.c.h;
								public static c: com.five_corp.ad.internal.ad.a.c.h;
								public static d: com.five_corp.ad.internal.ad.a.c.h;
								public static e: com.five_corp.ad.internal.ad.a.c.h;
								public static f: com.five_corp.ad.internal.ad.a.c.h;
								public static g: com.five_corp.ad.internal.ad.a.c.h;
								public static h: com.five_corp.ad.internal.ad.a.c.h;
								public static i: com.five_corp.ad.internal.ad.a.c.h;
								public static j: com.five_corp.ad.internal.ad.a.c.h;
								public static valueOf(param0: string): com.five_corp.ad.internal.ad.a.c.h;
								public static a(param0: number): com.five_corp.ad.internal.ad.a.c.h;
								public static values(): native.Array<com.five_corp.ad.internal.ad.a.c.h>;
							}
							export class i {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c.i>;
								public a: java.lang.Double;
								public b: java.lang.Double;
								public c: java.lang.Double;
								public d: java.lang.Double;
								public constructor();
							}
							export class j {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c.j>;
								public a: string;
								public b: string;
								public c: string;
								public constructor();
							}
							export class k {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c.k>;
								public a: java.lang.Boolean;
								public b: com.five_corp.ad.internal.ad.a.c.l;
								public constructor();
							}
							export class l {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c.l>;
								public static b: com.five_corp.ad.internal.ad.a.c.l;
								public static c: com.five_corp.ad.internal.ad.a.c.l;
								public static a(param0: number): com.five_corp.ad.internal.ad.a.c.l;
								public static values(): native.Array<com.five_corp.ad.internal.ad.a.c.l>;
								public static valueOf(param0: string): com.five_corp.ad.internal.ad.a.c.l;
							}
							export class m {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c.m>;
								public a: com.five_corp.ad.internal.ad.a.c.h;
								public b: com.five_corp.ad.internal.ad.a.c.i;
								public c: com.five_corp.ad.internal.ad.a.c.e;
								public d: com.five_corp.ad.internal.ad.a.c.f;
								public constructor();
							}
							export class n {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c.n>;
								public a: com.five_corp.ad.internal.ad.a.c.o;
								public constructor();
							}
							export class o {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c.o>;
								public static b: com.five_corp.ad.internal.ad.a.c.o;
								public static c: com.five_corp.ad.internal.ad.a.c.o;
								public static d: com.five_corp.ad.internal.ad.a.c.o;
								public static values(): native.Array<com.five_corp.ad.internal.ad.a.c.o>;
								public static valueOf(param0: string): com.five_corp.ad.internal.ad.a.c.o;
								public static a(param0: number): com.five_corp.ad.internal.ad.a.c.o;
							}
							export class p {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c.p>;
								public a: com.five_corp.ad.internal.ad.a.c.t;
								public b: java.lang.Boolean;
								public c: java.lang.Boolean;
								public d: com.five_corp.ad.internal.ad.a.c.ad;
								public e: com.five_corp.ad.internal.ad.a.c.a;
								public f: com.five_corp.ad.internal.ad.a.c.ab;
								public g: com.five_corp.ad.internal.ad.a.c.m;
								public h: com.five_corp.ad.internal.ad.a.c.x;
								public i: com.five_corp.ad.internal.ad.a.c.ac;
								public j: com.five_corp.ad.internal.ad.a.c.y;
								public constructor();
							}
							export class q {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c.q>;
								public a: com.five_corp.ad.internal.ad.a.c.s;
								public b: com.five_corp.ad.internal.ad.a.c.p;
								public c: com.five_corp.ad.internal.ad.a.c.r;
								public constructor();
							}
							export class r {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c.r>;
								public a: com.five_corp.ad.internal.ad.a.c.t;
								public b: java.lang.Boolean;
								public c: java.lang.Boolean;
								public d: com.five_corp.ad.internal.ad.a.c.ad;
								public e: com.five_corp.ad.internal.ad.a.c.a;
								public f: com.five_corp.ad.internal.ad.a.c.ab;
								public g: com.five_corp.ad.internal.ad.a.c.m;
								public h: com.five_corp.ad.internal.ad.a.c.x;
								public i: com.five_corp.ad.internal.ad.a.c.ac;
								public j: com.five_corp.ad.internal.ad.a.c.y;
								public k: com.five_corp.ad.internal.ad.m;
								public l: com.five_corp.ad.internal.ad.custom_layout.d;
								public m: com.five_corp.ad.internal.ad.m;
								public n: com.five_corp.ad.internal.ad.custom_layout.d;
								public constructor();
							}
							export class s {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c.s>;
								public static b: com.five_corp.ad.internal.ad.a.c.s;
								public static a(param0: number): com.five_corp.ad.internal.ad.a.c.s;
								public static values(): native.Array<com.five_corp.ad.internal.ad.a.c.s>;
								public static valueOf(param0: string): com.five_corp.ad.internal.ad.a.c.s;
							}
							export class t {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c.t>;
								public static b: com.five_corp.ad.internal.ad.a.c.t;
								public static c: com.five_corp.ad.internal.ad.a.c.t;
								public static d: com.five_corp.ad.internal.ad.a.c.t;
								public static a(param0: number): com.five_corp.ad.internal.ad.a.c.t;
								public static values(): native.Array<com.five_corp.ad.internal.ad.a.c.t>;
								public static valueOf(param0: string): com.five_corp.ad.internal.ad.a.c.t;
							}
							export class u {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c.u>;
								public a: com.five_corp.ad.internal.ad.a.c.w;
								public b: com.five_corp.ad.internal.ad.a.c.b;
								public c: com.five_corp.ad.internal.ad.a.c.v;
								public constructor();
							}
							export class v {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c.v>;
								public a: com.five_corp.ad.internal.ad.a.c.t;
								public b: java.lang.Boolean;
								public c: java.lang.Boolean;
								public d: com.five_corp.ad.internal.ad.a.c.ad;
								public e: com.five_corp.ad.internal.ad.a.c.a;
								public f: com.five_corp.ad.internal.ad.a.c.ab;
								public g: com.five_corp.ad.internal.ad.m;
								public h: com.five_corp.ad.internal.ad.a.c.m;
								public i: com.five_corp.ad.internal.ad.a.c.x;
								public j: com.five_corp.ad.internal.ad.a.c.y;
								public k: com.five_corp.ad.internal.ad.m;
								public l: com.five_corp.ad.internal.ad.custom_layout.d;
								public m: com.five_corp.ad.internal.ad.m;
								public n: com.five_corp.ad.internal.ad.custom_layout.d;
								public constructor();
							}
							export class w {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c.w>;
								public static b: com.five_corp.ad.internal.ad.a.c.w;
								public static c: com.five_corp.ad.internal.ad.a.c.w;
								public static d: com.five_corp.ad.internal.ad.a.c.w;
								public static valueOf(param0: string): com.five_corp.ad.internal.ad.a.c.w;
								public static a(param0: number): com.five_corp.ad.internal.ad.a.c.w;
								public static values(): native.Array<com.five_corp.ad.internal.ad.a.c.w>;
							}
							export class x {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c.x>;
								public a: com.five_corp.ad.internal.ad.a.c.h;
								public b: com.five_corp.ad.internal.ad.a.c.i;
								public c: com.five_corp.ad.internal.ad.a.c.e;
								public d: com.five_corp.ad.internal.ad.a.c.f;
								public constructor();
							}
							export class y {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c.y>;
								public a: com.five_corp.ad.internal.ad.a.c.e;
								public b: string;
								public c: java.lang.Boolean;
								public d: java.util.List<com.five_corp.ad.internal.ad.a.c.z>;
								public e: java.util.List<com.five_corp.ad.internal.ad.a.c.aa>;
								public f: java.lang.Boolean;
								public constructor();
							}
							export class z {
								public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.c.z>;
								public static b: com.five_corp.ad.internal.ad.a.c.z;
								public static valueOf(param0: string): com.five_corp.ad.internal.ad.a.c.z;
								public static a(param0: number): com.five_corp.ad.internal.ad.a.c.z;
								public static values(): native.Array<com.five_corp.ad.internal.ad.a.c.z>;
							}
						}
						export class d {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.d>;
							public a: string;
							public b: java.util.List<com.five_corp.ad.internal.ad.a.e>;
							public c: com.five_corp.ad.internal.ad.a.f;
							public constructor();
						}
						export class e {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.e>;
							public a: string;
							public b: string;
							public constructor();
						}
						export class f {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.f>;
							public static b: com.five_corp.ad.internal.ad.a.f;
							public static values(): native.Array<com.five_corp.ad.internal.ad.a.f>;
							public static valueOf(param0: string): com.five_corp.ad.internal.ad.a.f;
							public static a(param0: number): com.five_corp.ad.internal.ad.a.f;
						}
						export class g {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.g>;
							public a: com.five_corp.ad.internal.ad.a.c.k;
							public b: com.five_corp.ad.internal.ad.a.c.n;
							public c: com.five_corp.ad.internal.ad.a.c.q;
							public d: com.five_corp.ad.internal.ad.a.c.u;
							public e: string;
							public constructor();
						}
						export class h {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.h>;
							public a: string;
							public b: number;
							public constructor();
						}
						export class i {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.i>;
							public static a: com.five_corp.ad.internal.ad.a.i;
							public static b: com.five_corp.ad.internal.ad.a.i;
							public static c: com.five_corp.ad.internal.ad.a.i;
							public static values(): native.Array<com.five_corp.ad.internal.ad.a.i>;
							public static valueOf(param0: string): com.five_corp.ad.internal.ad.a.i;
						}
						export class j {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.a.j>;
							public a: com.five_corp.ad.internal.ad.a.d;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export class b {
						public static class: java.lang.Class<com.five_corp.ad.internal.ad.b>;
						public b: com.five_corp.ad.CreativeType;
						public c: string;
						public d: java.lang.Long;
						public e: com.five_corp.ad.internal.ad.g;
						public f: com.five_corp.ad.internal.ad.h;
						public g: com.five_corp.ad.internal.ad.i;
						public h: java.lang.Long;
						public i: java.util.List<com.five_corp.ad.internal.ad.a.a>;
						public j: number;
						public k: com.five_corp.ad.internal.ad.k;
						public l: java.lang.Integer;
						public m: com.five_corp.ad.internal.ad.j;
						public n: com.five_corp.ad.internal.ad.l;
						public o: com.five_corp.ad.internal.ad.n;
						public p: string;
						public q: java.util.List<string>;
						public r: java.util.List<string>;
						public s: number;
						public t: com.five_corp.ad.internal.ad.m;
						public u: com.five_corp.ad.internal.ad.m;
						public v: com.five_corp.ad.internal.ad.m;
						public w: string;
						public x: any;
						public y: string;
						public z: string;
						public A: string;
						public B: string;
						public C: java.util.List<com.five_corp.ad.internal.ad.a.h>;
						public D: java.util.List<com.five_corp.ad.internal.ad.a.b>;
						public E: java.util.List<com.five_corp.ad.internal.ad.beacon.d>;
						public F: number;
						public G: com.five_corp.ad.internal.ad.beacon.f;
						public H: com.five_corp.ad.internal.ad.beacon.f;
						public I: java.util.List<com.five_corp.ad.internal.ad.beacon.f>;
						public J: com.five_corp.ad.internal.ad.a.j;
						public K: string;
						public constructor();
						public a(): com.five_corp.ad.internal.ad.a;
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export module beacon {
						export class a {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.beacon.a>;
							public a: com.five_corp.ad.internal.ad.beacon.c;
							public b: com.five_corp.ad.internal.ad.beacon.h;
							public c: number;
							public d: number;
							public constructor(param0: com.five_corp.ad.internal.ad.beacon.c, param1: com.five_corp.ad.internal.ad.beacon.h, param2: number, param3: number);
							public hashCode(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export module beacon {
						export class b {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.beacon.b>;
							public static b: com.five_corp.ad.internal.ad.beacon.b;
							public static c: com.five_corp.ad.internal.ad.beacon.b;
							public static d: com.five_corp.ad.internal.ad.beacon.b;
							public static e: com.five_corp.ad.internal.ad.beacon.b;
							public static f: com.five_corp.ad.internal.ad.beacon.b;
							public static g: com.five_corp.ad.internal.ad.beacon.b;
							public static h: com.five_corp.ad.internal.ad.beacon.b;
							public static i: com.five_corp.ad.internal.ad.beacon.b;
							public static j: com.five_corp.ad.internal.ad.beacon.b;
							public static k: com.five_corp.ad.internal.ad.beacon.b;
							public static l: com.five_corp.ad.internal.ad.beacon.b;
							public static m: com.five_corp.ad.internal.ad.beacon.b;
							public static n: com.five_corp.ad.internal.ad.beacon.b;
							public static o: com.five_corp.ad.internal.ad.beacon.b;
							public static p: com.five_corp.ad.internal.ad.beacon.b;
							public static q: com.five_corp.ad.internal.ad.beacon.b;
							public static r: com.five_corp.ad.internal.ad.beacon.b;
							public static s: com.five_corp.ad.internal.ad.beacon.b;
							public t: number;
							public static valueOf(param0: string): com.five_corp.ad.internal.ad.beacon.b;
							public static a(param0: number): com.five_corp.ad.internal.ad.beacon.b;
							public static values(): native.Array<com.five_corp.ad.internal.ad.beacon.b>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export module beacon {
						export class c {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.beacon.c>;
							public static b: com.five_corp.ad.internal.ad.beacon.c;
							public c: number;
							public static valueOf(param0: string): com.five_corp.ad.internal.ad.beacon.c;
							public static a(param0: number): com.five_corp.ad.internal.ad.beacon.c;
							public static values(): native.Array<com.five_corp.ad.internal.ad.beacon.c>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export module beacon {
						export class d {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.beacon.d>;
							public a: com.five_corp.ad.internal.ad.beacon.e;
							public b: string;
							public c: com.five_corp.ad.internal.ad.beacon.a;
							public constructor(param0: com.five_corp.ad.internal.ad.beacon.e, param1: string, param2: com.five_corp.ad.internal.ad.beacon.a);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export module beacon {
						export class e {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.beacon.e>;
							public static b: com.five_corp.ad.internal.ad.beacon.e;
							public static c: com.five_corp.ad.internal.ad.beacon.e;
							public static d: com.five_corp.ad.internal.ad.beacon.e;
							public static e: com.five_corp.ad.internal.ad.beacon.e;
							public static f: com.five_corp.ad.internal.ad.beacon.e;
							public static g: com.five_corp.ad.internal.ad.beacon.e;
							public static h: com.five_corp.ad.internal.ad.beacon.e;
							public static i: com.five_corp.ad.internal.ad.beacon.e;
							public static j: com.five_corp.ad.internal.ad.beacon.e;
							public static k: com.five_corp.ad.internal.ad.beacon.e;
							public static l: com.five_corp.ad.internal.ad.beacon.e;
							public static m: com.five_corp.ad.internal.ad.beacon.e;
							public static n: com.five_corp.ad.internal.ad.beacon.e;
							public static o: com.five_corp.ad.internal.ad.beacon.e;
							public static p: com.five_corp.ad.internal.ad.beacon.e;
							public static q: com.five_corp.ad.internal.ad.beacon.e;
							public static r: com.five_corp.ad.internal.ad.beacon.e;
							public static s: com.five_corp.ad.internal.ad.beacon.e;
							public static t: com.five_corp.ad.internal.ad.beacon.e;
							public static u: com.five_corp.ad.internal.ad.beacon.e;
							public static v: com.five_corp.ad.internal.ad.beacon.e;
							public static w: com.five_corp.ad.internal.ad.beacon.e;
							public x: number;
							public static valueOf(param0: string): com.five_corp.ad.internal.ad.beacon.e;
							public static values(): native.Array<com.five_corp.ad.internal.ad.beacon.e>;
							public static a(param0: number): com.five_corp.ad.internal.ad.beacon.e;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export module beacon {
						export class f {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.beacon.f>;
							public a: com.five_corp.ad.internal.ad.beacon.b;
							public b: com.five_corp.ad.internal.ad.beacon.a;
							public c: java.util.List<com.five_corp.ad.internal.ad.beacon.g>;
							public constructor(param0: com.five_corp.ad.internal.ad.beacon.b, param1: com.five_corp.ad.internal.ad.beacon.a, param2: java.util.List<com.five_corp.ad.internal.ad.beacon.g>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export module beacon {
						export class g {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.beacon.g>;
							public a: string;
							public b: string;
							public hashCode(): number;
							public constructor(param0: string, param1: string);
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export module beacon {
						export class h {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.beacon.h>;
							public static b: com.five_corp.ad.internal.ad.beacon.h;
							public static c: com.five_corp.ad.internal.ad.beacon.h;
							public d: number;
							public static a(param0: number): com.five_corp.ad.internal.ad.beacon.h;
							public static valueOf(param0: string): com.five_corp.ad.internal.ad.beacon.h;
							public static values(): native.Array<com.five_corp.ad.internal.ad.beacon.h>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export class c {
						public static class: java.lang.Class<com.five_corp.ad.internal.ad.c>;
						/**
						 * Constructs a new instance of the com.five_corp.ad.internal.ad.c interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(param0: com.five_corp.ad.internal.ad.g): java.lang.Long;
							a(param0: com.five_corp.ad.internal.ad.g, param1: java.lang.Long): void;
							a(param0: string): java.util.Map<com.five_corp.ad.internal.ad.g,java.lang.Integer>;
							a(param0: string, param1: java.util.List<com.five_corp.ad.internal.ad.e>): void;
							b(param0: string): java.util.Map<com.five_corp.ad.internal.ad.g,java.lang.Boolean>;
							a(param0: string, param1: java.util.Map<com.five_corp.ad.internal.ad.g,java.lang.Boolean>): void;
							a(param0: java.util.Collection<com.five_corp.ad.internal.ad.g>): void;
							toString(): string;
							c(param0: string): void;
						});
						public constructor();
						public a(param0: com.five_corp.ad.internal.ad.g, param1: java.lang.Long): void;
						public a(param0: string, param1: java.util.Map<com.five_corp.ad.internal.ad.g,java.lang.Boolean>): void;
						public a(param0: string, param1: java.util.List<com.five_corp.ad.internal.ad.e>): void;
						public b(param0: string): java.util.Map<com.five_corp.ad.internal.ad.g,java.lang.Boolean>;
						public a(param0: string): java.util.Map<com.five_corp.ad.internal.ad.g,java.lang.Integer>;
						public a(param0: java.util.Collection<com.five_corp.ad.internal.ad.g>): void;
						public c(param0: string): void;
						public a(param0: com.five_corp.ad.internal.ad.g): java.lang.Long;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export module custom_layout {
						export class a {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.custom_layout.a>;
							public a: com.five_corp.ad.internal.ad.custom_layout.b;
							public b: number;
							public c: number;
							public d: number;
							public e: number;
							public f: number;
							public g: com.five_corp.ad.internal.ad.custom_layout.c;
							public h: string;
							public constructor(param0: com.five_corp.ad.internal.ad.custom_layout.b, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.five_corp.ad.internal.ad.custom_layout.c, param7: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export module custom_layout {
						export class b {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.custom_layout.b>;
							public static b: com.five_corp.ad.internal.ad.custom_layout.b;
							public static c: com.five_corp.ad.internal.ad.custom_layout.b;
							public static d: com.five_corp.ad.internal.ad.custom_layout.b;
							public static e: com.five_corp.ad.internal.ad.custom_layout.b;
							public static f: com.five_corp.ad.internal.ad.custom_layout.b;
							public static g: com.five_corp.ad.internal.ad.custom_layout.b;
							public static h: com.five_corp.ad.internal.ad.custom_layout.b;
							public static valueOf(param0: string): com.five_corp.ad.internal.ad.custom_layout.b;
							public static a(param0: number): com.five_corp.ad.internal.ad.custom_layout.b;
							public static values(): native.Array<com.five_corp.ad.internal.ad.custom_layout.b>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export module custom_layout {
						export class c {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.custom_layout.c>;
							public a: com.five_corp.ad.internal.ad.custom_layout.q;
							public b: com.five_corp.ad.internal.ad.custom_layout.o;
							public c: com.five_corp.ad.internal.ad.custom_layout.n;
							public constructor(param0: com.five_corp.ad.internal.ad.custom_layout.q, param1: com.five_corp.ad.internal.ad.custom_layout.o, param2: com.five_corp.ad.internal.ad.custom_layout.n);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export module custom_layout {
						export class d {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.custom_layout.d>;
							public a: number;
							public b: number;
							public c: java.util.List<com.five_corp.ad.internal.ad.custom_layout.g>;
							public d: java.util.List<com.five_corp.ad.internal.ad.custom_layout.a>;
							public constructor(param0: number, param1: number, param2: java.util.List<com.five_corp.ad.internal.ad.custom_layout.g>, param3: java.util.List<com.five_corp.ad.internal.ad.custom_layout.a>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export module custom_layout {
						export class e {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.custom_layout.e>;
							public a: com.five_corp.ad.internal.ad.custom_layout.m;
							public b: com.five_corp.ad.internal.ad.custom_layout.l;
							public c: com.five_corp.ad.internal.ad.m;
							public d: com.five_corp.ad.internal.ad.custom_layout.i;
							public e: com.five_corp.ad.internal.ad.format_config.a;
							public f: com.five_corp.ad.internal.ad.custom_layout.f;
							public g: com.five_corp.ad.internal.ad.custom_layout.k;
							public h: com.five_corp.ad.internal.ad.custom_layout.h;
							public constructor(param0: com.five_corp.ad.internal.ad.custom_layout.m, param1: com.five_corp.ad.internal.ad.custom_layout.l, param2: com.five_corp.ad.internal.ad.m, param3: com.five_corp.ad.internal.ad.custom_layout.i, param4: com.five_corp.ad.internal.ad.format_config.a, param5: com.five_corp.ad.internal.ad.custom_layout.f, param6: com.five_corp.ad.internal.ad.custom_layout.k, param7: com.five_corp.ad.internal.ad.custom_layout.h);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export module custom_layout {
						export class f {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.custom_layout.f>;
							public a: boolean;
							public b: java.util.List<com.five_corp.ad.internal.ad.m>;
							public c: number;
							public constructor(param0: boolean, param1: java.util.List<com.five_corp.ad.internal.ad.m>, param2: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export module custom_layout {
						export class g {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.custom_layout.g>;
							public a: com.five_corp.ad.internal.ad.custom_layout.e;
							public b: number;
							public c: number;
							public d: number;
							public e: number;
							public f: number;
							public g: com.five_corp.ad.internal.ad.custom_layout.c;
							public constructor(param0: com.five_corp.ad.internal.ad.custom_layout.e, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.five_corp.ad.internal.ad.custom_layout.c);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export module custom_layout {
						export class h {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.custom_layout.h>;
							public a: string;
							public b: string;
							public c: string;
							public d: string;
							public constructor(param0: string, param1: string, param2: string, param3: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export module custom_layout {
						export class i {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.custom_layout.i>;
							public a: com.five_corp.ad.internal.ad.custom_layout.j;
							public constructor(param0: com.five_corp.ad.internal.ad.custom_layout.j);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export module custom_layout {
						export class j {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.custom_layout.j>;
							public a: number;
							public b: number;
							public c: number;
							public d: number;
							public hashCode(): number;
							public equals(param0: any): boolean;
							public constructor(param0: number, param1: number, param2: number, param3: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export module custom_layout {
						export class k {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.custom_layout.k>;
							public a: com.five_corp.ad.internal.ad.m;
							public b: com.five_corp.ad.internal.ad.m;
							public constructor(param0: com.five_corp.ad.internal.ad.m, param1: com.five_corp.ad.internal.ad.m);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export module custom_layout {
						export class l {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.custom_layout.l>;
							public a: string;
							public b: string;
							public c: string;
							public d: com.five_corp.ad.internal.ad.custom_layout.p;
							public e: boolean;
							public f: java.lang.Integer;
							public g: java.lang.Integer;
							public constructor(param0: string, param1: string, param2: string, param3: com.five_corp.ad.internal.ad.custom_layout.p, param4: java.lang.Boolean, param5: java.lang.Integer, param6: java.lang.Integer);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export module custom_layout {
						export class m {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.custom_layout.m>;
							public static b: com.five_corp.ad.internal.ad.custom_layout.m;
							public static c: com.five_corp.ad.internal.ad.custom_layout.m;
							public static d: com.five_corp.ad.internal.ad.custom_layout.m;
							public static e: com.five_corp.ad.internal.ad.custom_layout.m;
							public static f: com.five_corp.ad.internal.ad.custom_layout.m;
							public static g: com.five_corp.ad.internal.ad.custom_layout.m;
							public h: number;
							public static valueOf(param0: string): com.five_corp.ad.internal.ad.custom_layout.m;
							public static values(): native.Array<com.five_corp.ad.internal.ad.custom_layout.m>;
							public static a(param0: number): com.five_corp.ad.internal.ad.custom_layout.m;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export module custom_layout {
						export class n {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.custom_layout.n>;
							public static b: com.five_corp.ad.internal.ad.custom_layout.n;
							public static c: com.five_corp.ad.internal.ad.custom_layout.n;
							public static values(): native.Array<com.five_corp.ad.internal.ad.custom_layout.n>;
							public static valueOf(param0: string): com.five_corp.ad.internal.ad.custom_layout.n;
							public static a(param0: number): com.five_corp.ad.internal.ad.custom_layout.n;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export module custom_layout {
						export class o {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.custom_layout.o>;
							public static b: com.five_corp.ad.internal.ad.custom_layout.o;
							public static c: com.five_corp.ad.internal.ad.custom_layout.o;
							public static values(): native.Array<com.five_corp.ad.internal.ad.custom_layout.o>;
							public static a(param0: number): com.five_corp.ad.internal.ad.custom_layout.o;
							public static valueOf(param0: string): com.five_corp.ad.internal.ad.custom_layout.o;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export module custom_layout {
						export class p {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.custom_layout.p>;
							public static b: com.five_corp.ad.internal.ad.custom_layout.p;
							public static c: com.five_corp.ad.internal.ad.custom_layout.p;
							public static values(): native.Array<com.five_corp.ad.internal.ad.custom_layout.p>;
							public static valueOf(param0: string): com.five_corp.ad.internal.ad.custom_layout.p;
							public static a(param0: number): com.five_corp.ad.internal.ad.custom_layout.p;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export module custom_layout {
						export class q {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.custom_layout.q>;
							public a: com.five_corp.ad.internal.ad.custom_layout.r;
							public b: java.lang.Integer;
							public c: java.lang.Integer;
							public constructor(param0: com.five_corp.ad.internal.ad.custom_layout.r, param1: java.lang.Integer, param2: java.lang.Integer);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export module custom_layout {
						export class r {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.custom_layout.r>;
							public static b: com.five_corp.ad.internal.ad.custom_layout.r;
							public static c: com.five_corp.ad.internal.ad.custom_layout.r;
							public static d: com.five_corp.ad.internal.ad.custom_layout.r;
							public static e: com.five_corp.ad.internal.ad.custom_layout.r;
							public static valueOf(param0: string): com.five_corp.ad.internal.ad.custom_layout.r;
							public static a(param0: number): com.five_corp.ad.internal.ad.custom_layout.r;
							public static values(): native.Array<com.five_corp.ad.internal.ad.custom_layout.r>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export class d extends com.five_corp.ad.internal.ad.c {
						public static class: java.lang.Class<com.five_corp.ad.internal.ad.d>;
						public a(param0: com.five_corp.ad.internal.ad.g, param1: java.lang.Long): void;
						public a(param0: string, param1: java.util.Map<com.five_corp.ad.internal.ad.g,java.lang.Boolean>): void;
						public a(param0: string, param1: java.util.List<com.five_corp.ad.internal.ad.e>): void;
						public b(param0: string): java.util.Map<com.five_corp.ad.internal.ad.g,java.lang.Boolean>;
						public a(param0: string): java.util.Map<com.five_corp.ad.internal.ad.g,java.lang.Integer>;
						public a(param0: java.util.Collection<com.five_corp.ad.internal.ad.g>): void;
						public c(param0: string): void;
						public a(param0: com.five_corp.ad.internal.ad.g): java.lang.Long;
						public constructor(param0: com.five_corp.ad.internal.logger.a);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export class e {
						public static class: java.lang.Class<com.five_corp.ad.internal.ad.e>;
						public a: com.five_corp.ad.internal.ad.g;
						public b: number;
						public constructor(param0: com.five_corp.ad.internal.ad.g, param1: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export class f {
						public static class: java.lang.Class<com.five_corp.ad.internal.ad.f>;
						public a: number;
						public b: com.five_corp.ad.internal.ad.g;
						public c: java.lang.Long;
						public constructor(param0: number, param1: com.five_corp.ad.internal.ad.g, param2: java.lang.Long);
					}
					export module f {
						export class a {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.f.a>;
							public static b: number;
							public static c: number;
							public static a(param0: number): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export module format_config {
						export class a {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.format_config.a>;
							public a: number;
							public b: number;
							public c: java.util.List<com.five_corp.ad.internal.ad.m>;
							public d: string;
							public constructor(param0: number, param1: number, param2: java.util.List<com.five_corp.ad.internal.ad.m>, param3: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export class g {
						public static class: java.lang.Class<com.five_corp.ad.internal.ad.g>;
						public b: number;
						public c: number;
						public a(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public constructor(param0: number, param1: number, param2: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export class h {
						public static class: java.lang.Class<com.five_corp.ad.internal.ad.h>;
						public static b: com.five_corp.ad.internal.ad.h;
						public static c: com.five_corp.ad.internal.ad.h;
						public d: number;
						public static values(): native.Array<com.five_corp.ad.internal.ad.h>;
						public static a(param0: number): com.five_corp.ad.internal.ad.h;
						public static valueOf(param0: string): com.five_corp.ad.internal.ad.h;
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export class i {
						public static class: java.lang.Class<com.five_corp.ad.internal.ad.i>;
						public static b: com.five_corp.ad.internal.ad.i;
						public c: number;
						public static values(): native.Array<com.five_corp.ad.internal.ad.i>;
						public static valueOf(param0: string): com.five_corp.ad.internal.ad.i;
						public static a(param0: number): com.five_corp.ad.internal.ad.i;
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export class j {
						public static class: java.lang.Class<com.five_corp.ad.internal.ad.j>;
						public static b: com.five_corp.ad.internal.ad.j;
						public c: number;
						public static a(param0: number): com.five_corp.ad.internal.ad.j;
						public static valueOf(param0: string): com.five_corp.ad.internal.ad.j;
						public static values(): native.Array<com.five_corp.ad.internal.ad.j>;
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export class k {
						public static class: java.lang.Class<com.five_corp.ad.internal.ad.k>;
						public b: number;
						public c: com.five_corp.ad.internal.ad.k.a;
						public static a(param0: number): com.five_corp.ad.internal.ad.k;
						public a(): boolean;
						public constructor(param0: number, param1: number);
						public static a(param0: com.five_corp.ad.internal.ad.k.a): com.five_corp.ad.internal.ad.k;
					}
					export module k {
						export class a {
							public static class: java.lang.Class<com.five_corp.ad.internal.ad.k.a>;
							public static a: com.five_corp.ad.internal.ad.k.a;
							public static b: com.five_corp.ad.internal.ad.k.a;
							public static c: com.five_corp.ad.internal.ad.k.a;
							public static d: com.five_corp.ad.internal.ad.k.a;
							public static e: com.five_corp.ad.internal.ad.k.a;
							public static f: com.five_corp.ad.internal.ad.k.a;
							public static g: com.five_corp.ad.internal.ad.k.a;
							public static h: com.five_corp.ad.internal.ad.k.a;
							public static i: com.five_corp.ad.internal.ad.k.a;
							public j: number;
							public static valueOf(param0: string): com.five_corp.ad.internal.ad.k.a;
							public static values(): native.Array<com.five_corp.ad.internal.ad.k.a>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export class l {
						public static class: java.lang.Class<com.five_corp.ad.internal.ad.l>;
						public a: number;
						public b: number;
						public constructor(param0: number, param1: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export class m {
						public static class: java.lang.Class<com.five_corp.ad.internal.ad.m>;
						public b: string;
						public c: number;
						public d: boolean;
						public static a(param0: string, param1: string): com.five_corp.ad.internal.ad.m;
						public static a(param0: string): com.five_corp.ad.internal.ad.m;
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad {
					export class n {
						public static class: java.lang.Class<com.five_corp.ad.internal.ad.n>;
						public static b: com.five_corp.ad.internal.ad.n;
						public static c: com.five_corp.ad.internal.ad.n;
						public static d: com.five_corp.ad.internal.ad.n;
						public static e: com.five_corp.ad.internal.ad.n;
						public static valueOf(param0: string): com.five_corp.ad.internal.ad.n;
						public static values(): native.Array<com.five_corp.ad.internal.ad.n>;
						public static a(param0: number): com.five_corp.ad.internal.ad.n;
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad_check {
					export class a {
						public static class: java.lang.Class<com.five_corp.ad.internal.ad_check.a>;
						public a: com.five_corp.ad.internal.ad_check.c;
						public b: com.five_corp.ad.internal.ad.a;
						public c: com.five_corp.ad.internal.ad.g;
						public constructor(param0: com.five_corp.ad.internal.ad_check.c, param1: com.five_corp.ad.internal.ad.a, param2: com.five_corp.ad.internal.ad.g);
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad_check {
					export class b {
						public static class: java.lang.Class<com.five_corp.ad.internal.ad_check.b>;
						/**
						 * Constructs a new instance of the com.five_corp.ad.internal.ad_check.b interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(param0: com.five_corp.ad.internal.ad_check.a): void;
							a(param0: com.five_corp.ad.internal.c): void;
						});
						public constructor();
						public a(param0: com.five_corp.ad.internal.c): void;
						public a(param0: com.five_corp.ad.internal.ad_check.a): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module ad_check {
					export class c {
						public static class: java.lang.Class<com.five_corp.ad.internal.ad_check.c>;
						public static b: com.five_corp.ad.internal.ad_check.c;
						public static c: com.five_corp.ad.internal.ad_check.c;
						public d: number;
						public static valueOf(param0: string): com.five_corp.ad.internal.ad_check.c;
						public static a(param0: number): com.five_corp.ad.internal.ad_check.c;
						public static values(): native.Array<com.five_corp.ad.internal.ad_check.c>;
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export class b {
					public static class: java.lang.Class<com.five_corp.ad.internal.b>;
					public a: java.util.List<com.five_corp.ad.internal.ad.a>;
					public b: java.util.Map<string,java.util.List<com.five_corp.ad.internal.ad.e>>;
					public c: com.five_corp.ad.internal.media_config.b;
					public d: java.util.List<com.five_corp.ad.internal.ad.f>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module base_url {
					export class a extends com.five_corp.ad.internal.base_url.b {
						public static class: java.lang.Class<com.five_corp.ad.internal.base_url.a>;
						public constructor();
						public a(): globalAndroid.net.Uri.Builder;
						public d(): globalAndroid.net.Uri.Builder;
						public b(): globalAndroid.net.Uri.Builder;
						public c(): globalAndroid.net.Uri.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module base_url {
					export class b {
						public static class: java.lang.Class<com.five_corp.ad.internal.base_url.b>;
						/**
						 * Constructs a new instance of the com.five_corp.ad.internal.base_url.b interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(): globalAndroid.net.Uri.Builder;
							b(): globalAndroid.net.Uri.Builder;
							c(): globalAndroid.net.Uri.Builder;
							d(): globalAndroid.net.Uri.Builder;
						});
						public constructor();
						public a(): globalAndroid.net.Uri.Builder;
						public d(): globalAndroid.net.Uri.Builder;
						public b(): globalAndroid.net.Uri.Builder;
						public c(): globalAndroid.net.Uri.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module beacon {
					export class a {
						public static class: java.lang.Class<com.five_corp.ad.internal.beacon.a>;
						public a(param0: number, param1: number): void;
						public constructor(param0: com.five_corp.ad.internal.logger.a, param1: com.five_corp.ad.internal.ad.beacon.a, param2: com.five_corp.ad.internal.beacon.a.a, param3: com.five_corp.ad.internal.ad.g);
						public a(): void;
					}
					export module a {
						export class a {
							public static class: java.lang.Class<com.five_corp.ad.internal.beacon.a.a>;
							/**
							 * Constructs a new instance of the com.five_corp.ad.internal.beacon.a$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: number, param1: com.five_corp.ad.internal.ad.beacon.a): void;
							});
							public constructor();
							public a(param0: number, param1: com.five_corp.ad.internal.ad.beacon.a): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module beacon {
					export class b {
						public static class: java.lang.Class<com.five_corp.ad.internal.beacon.b>;
						public static a: com.five_corp.ad.internal.beacon.b;
						public static b: com.five_corp.ad.internal.beacon.b;
						public c: number;
						public static values(): native.Array<com.five_corp.ad.internal.beacon.b>;
						public static valueOf(param0: string): com.five_corp.ad.internal.beacon.b;
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module beacon {
					export class c {
						public static class: java.lang.Class<com.five_corp.ad.internal.beacon.c>;
						public a(param0: number, param1: number): void;
						public a(): void;
						public constructor(param0: java.util.List<com.five_corp.ad.internal.beacon.a>);
						public a(param0: number): void;
						public b(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module beacon {
					export class d {
						public static class: java.lang.Class<com.five_corp.ad.internal.beacon.d>;
						public static a(param0: number, param1: number): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export class c {
					public static class: java.lang.Class<com.five_corp.ad.internal.c>;
					public static b: com.five_corp.ad.internal.c;
					public static c: com.five_corp.ad.internal.c;
					public static d: com.five_corp.ad.internal.c;
					public static e: com.five_corp.ad.internal.c;
					public static f: com.five_corp.ad.internal.c;
					public static g: com.five_corp.ad.internal.c;
					public static h: com.five_corp.ad.internal.c;
					public static i: com.five_corp.ad.internal.c;
					public static j: com.five_corp.ad.internal.c;
					public static k: com.five_corp.ad.internal.c;
					public static l: com.five_corp.ad.internal.c;
					public static m: com.five_corp.ad.internal.c;
					public static n: com.five_corp.ad.internal.c;
					public static o: com.five_corp.ad.internal.c;
					public static p: com.five_corp.ad.internal.c;
					public static q: com.five_corp.ad.internal.c;
					public static r: com.five_corp.ad.internal.c;
					public static s: com.five_corp.ad.internal.c;
					public static t: com.five_corp.ad.internal.c;
					public static u: com.five_corp.ad.internal.c;
					public static v: com.five_corp.ad.internal.c;
					public static w: com.five_corp.ad.internal.c;
					public static x: com.five_corp.ad.internal.c;
					public static y: com.five_corp.ad.internal.c;
					public static z: com.five_corp.ad.internal.c;
					public static A: com.five_corp.ad.internal.c;
					public static B: com.five_corp.ad.internal.c;
					public static C: com.five_corp.ad.internal.c;
					public static D: com.five_corp.ad.internal.c;
					public static E: com.five_corp.ad.internal.c;
					public static F: com.five_corp.ad.internal.c;
					public static G: com.five_corp.ad.internal.c;
					public static H: com.five_corp.ad.internal.c;
					public static I: com.five_corp.ad.internal.c;
					public static J: com.five_corp.ad.internal.c;
					public static K: com.five_corp.ad.internal.c;
					public static L: com.five_corp.ad.internal.c;
					public static M: com.five_corp.ad.internal.c;
					public static N: com.five_corp.ad.internal.c;
					public static O: com.five_corp.ad.internal.c;
					public static P: com.five_corp.ad.internal.c;
					public static Q: com.five_corp.ad.internal.c;
					public static R: com.five_corp.ad.internal.c;
					public static S: com.five_corp.ad.internal.c;
					public static T: com.five_corp.ad.internal.c;
					public static U: com.five_corp.ad.internal.c;
					public static V: com.five_corp.ad.internal.c;
					public static W: com.five_corp.ad.internal.c;
					public static X: com.five_corp.ad.internal.c;
					public static Y: com.five_corp.ad.internal.c;
					public static Z: com.five_corp.ad.internal.c;
					public static aa: com.five_corp.ad.internal.c;
					public static ab: com.five_corp.ad.internal.c;
					public static ac: com.five_corp.ad.internal.c;
					public static ad: com.five_corp.ad.internal.c;
					public static ae: com.five_corp.ad.internal.c;
					public static af: com.five_corp.ad.internal.c;
					public static ag: com.five_corp.ad.internal.c;
					public static ah: com.five_corp.ad.internal.c;
					public static ai: com.five_corp.ad.internal.c;
					public static aj: com.five_corp.ad.internal.c;
					public static ak: com.five_corp.ad.internal.c;
					public static al: com.five_corp.ad.internal.c;
					public static am: com.five_corp.ad.internal.c;
					public static an: com.five_corp.ad.internal.c;
					public static ao: com.five_corp.ad.internal.c;
					public static ap: com.five_corp.ad.internal.c;
					public static aq: com.five_corp.ad.internal.c;
					public static ar: com.five_corp.ad.internal.c;
					public static as: com.five_corp.ad.internal.c;
					public static at: com.five_corp.ad.internal.c;
					public static au: com.five_corp.ad.internal.c;
					public static av: com.five_corp.ad.internal.c;
					public static aw: com.five_corp.ad.internal.c;
					public static ax: com.five_corp.ad.internal.c;
					public static ay: com.five_corp.ad.internal.c;
					public static az: com.five_corp.ad.internal.c;
					public static aA: com.five_corp.ad.internal.c;
					public static aB: com.five_corp.ad.internal.c;
					public static aC: com.five_corp.ad.internal.c;
					public static aD: com.five_corp.ad.internal.c;
					public static aE: com.five_corp.ad.internal.c;
					public static aF: com.five_corp.ad.internal.c;
					public static aG: com.five_corp.ad.internal.c;
					public static aH: com.five_corp.ad.internal.c;
					public static aI: com.five_corp.ad.internal.c;
					public static aJ: com.five_corp.ad.internal.c;
					public static aK: com.five_corp.ad.internal.c;
					public static aL: com.five_corp.ad.internal.c;
					public static aM: com.five_corp.ad.internal.c;
					public static aN: com.five_corp.ad.internal.c;
					public static aO: com.five_corp.ad.internal.c;
					public static aP: com.five_corp.ad.internal.c;
					public static aQ: com.five_corp.ad.internal.c;
					public static aR: com.five_corp.ad.internal.c;
					public static aS: com.five_corp.ad.internal.c;
					public aT: number;
					public aU: boolean;
					public static valueOf(param0: string): com.five_corp.ad.internal.c;
					public static values(): native.Array<com.five_corp.ad.internal.c>;
					public static a(param0: com.five_corp.ad.internal.c): com.five_corp.ad.FiveAdListener.ErrorCode;
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module callback {
					export class a {
						public static class: java.lang.Class<com.five_corp.ad.internal.callback.a>;
						/**
						 * Constructs a new instance of the com.five_corp.ad.internal.callback.a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: boolean): void;
						});
						public constructor();
						public a(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module callback {
					export class b {
						public static class: java.lang.Class<com.five_corp.ad.internal.callback.b>;
						/**
						 * Constructs a new instance of the com.five_corp.ad.internal.callback.b interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(): void;
							b(): void;
						});
						public constructor();
						public a(): void;
						public b(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module callback {
					export class c {
						public static class: java.lang.Class<com.five_corp.ad.internal.callback.c>;
						/**
						 * Constructs a new instance of the com.five_corp.ad.internal.callback.c interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(param0: com.five_corp.ad.internal.c): void;
						});
						public constructor();
						public a(param0: com.five_corp.ad.internal.c): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module callback {
					export class d {
						public static class: java.lang.Class<com.five_corp.ad.internal.callback.d>;
						/**
						 * Constructs a new instance of the com.five_corp.ad.internal.callback.d interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(param0: com.five_corp.ad.internal.c): void;
							a(param0: native.Array<number>, param1: number, param2: number, param3: boolean): void;
							a(param0: number): boolean;
						});
						public constructor();
						public a(param0: number): boolean;
						public a(param0: com.five_corp.ad.internal.c): void;
						public a(param0: native.Array<number>, param1: number, param2: number, param3: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module callback {
					export class e extends com.five_corp.ad.internal.callback.d {
						public static class: java.lang.Class<com.five_corp.ad.internal.callback.e>;
						public a(param0: number): boolean;
						public constructor(param0: number, param1: number, param2: com.five_corp.ad.internal.callback.a, param3: com.five_corp.ad.internal.callback.c);
						public a(param0: com.five_corp.ad.internal.c): void;
						public a(param0: native.Array<number>, param1: number, param2: number, param3: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module callback {
					export class f extends com.five_corp.ad.internal.callback.d {
						public static class: java.lang.Class<com.five_corp.ad.internal.callback.f>;
						public constructor(param0: com.five_corp.ad.internal.callback.a, param1: com.five_corp.ad.internal.callback.c);
						public a(param0: number): boolean;
						public a(param0: com.five_corp.ad.internal.c): void;
						public a(param0: native.Array<number>, param1: number, param2: number, param3: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export class d {
					public static class: java.lang.Class<com.five_corp.ad.internal.d>;
					/**
					 * Constructs a new instance of the com.five_corp.ad.internal.d interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						a(param0: com.five_corp.ad.internal.ad.a, param1: number): boolean;
						a(param0: string, param1: com.five_corp.ad.FiveAdFormat, param2: com.five_corp.ad.internal.media_config.b): com.five_corp.ad.internal.c;
						a(param0: com.five_corp.ad.internal.ad.a, param1: string, param2: com.five_corp.ad.FiveAdFormat, param3: number): boolean;
						a(param0: com.five_corp.ad.internal.ad.a, param1: string, param2: com.five_corp.ad.FiveAdFormat): boolean;
					});
					public constructor();
					public a(param0: string, param1: com.five_corp.ad.FiveAdFormat, param2: com.five_corp.ad.internal.media_config.b): com.five_corp.ad.internal.c;
					public a(param0: com.five_corp.ad.internal.ad.a, param1: string, param2: com.five_corp.ad.FiveAdFormat, param3: number): boolean;
					public a(param0: com.five_corp.ad.internal.ad.a, param1: number): boolean;
					public a(param0: com.five_corp.ad.internal.ad.a, param1: string, param2: com.five_corp.ad.FiveAdFormat): boolean;
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export class e {
					public static class: java.lang.Class<com.five_corp.ad.internal.e>;
					public a(param0: string, param1: boolean, param2: number): void;
					public c(): string;
					public e(): string;
					public a(param0: native.Array<number>, param1: number): void;
					public a(param0: com.five_corp.ad.internal.callback.a, param1: com.five_corp.ad.internal.callback.c): number;
					public constructor(param0: string, param1: boolean, param2: number);
					public a(param0: com.five_corp.ad.internal.c): void;
					public equals(param0: any): boolean;
					public b(): number;
					public d(): void;
					public a(param0: string): void;
					public a(): boolean;
					public hashCode(): number;
					public a(param0: number, param1: number, param2: com.five_corp.ad.internal.callback.a, param3: com.five_corp.ad.internal.callback.c): number;
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module exception {
					export class a extends com.five_corp.ad.internal.exception.b {
						public static class: java.lang.Class<com.five_corp.ad.internal.exception.a>;
						public constructor(param0: com.five_corp.ad.internal.c, param1: number);
						public constructor(param0: com.five_corp.ad.internal.c, param1: string, param2: java.lang.Throwable);
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module exception {
					export class b {
						public static class: java.lang.Class<com.five_corp.ad.internal.exception.b>;
						public c: com.five_corp.ad.internal.c;
						public constructor(param0: com.five_corp.ad.internal.c, param1: string, param2: java.lang.Throwable);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export class f {
					public static class: java.lang.Class<com.five_corp.ad.internal.f>;
					public static a(param0: com.five_corp.ad.internal.f.a): boolean;
				}
				export module f {
					export class a {
						public static class: java.lang.Class<com.five_corp.ad.internal.f.a>;
						public static a: com.five_corp.ad.internal.f.a;
						public static b: com.five_corp.ad.internal.f.a;
						public static c: com.five_corp.ad.internal.f.a;
						public static valueOf(param0: string): com.five_corp.ad.internal.f.a;
						public static values(): native.Array<com.five_corp.ad.internal.f.a>;
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export class g {
					public static class: java.lang.Class<com.five_corp.ad.internal.g>;
					public constructor();
					public static a(param0: string): string;
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module logger {
					export class a {
						public static class: java.lang.Class<com.five_corp.ad.internal.logger.a>;
						/**
						 * Constructs a new instance of the com.five_corp.ad.internal.logger.a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(param0: string): void;
						});
						public constructor();
						public a(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module media_config {
					export class a {
						public static class: java.lang.Class<com.five_corp.ad.internal.media_config.a>;
						public a: string;
						public b: java.util.List<com.five_corp.ad.FiveAdFormat>;
						public c: boolean;
						public d: number;
						public constructor(param0: string, param1: java.util.List<com.five_corp.ad.FiveAdFormat>, param2: boolean, param3: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module media_config {
					export class b {
						public static class: java.lang.Class<com.five_corp.ad.internal.media_config.b>;
						public a: string;
						public b: java.util.List<com.five_corp.ad.internal.media_config.a>;
						public c: boolean;
						public d: java.util.List<java.lang.Integer>;
						public e: com.five_corp.ad.internal.media_config.d;
						public f: boolean;
						public constructor(param0: string, param1: java.util.List<com.five_corp.ad.internal.media_config.a>, param2: boolean, param3: java.util.List<java.lang.Integer>, param4: com.five_corp.ad.internal.media_config.d, param5: boolean);
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module media_config {
					export class c {
						public static class: java.lang.Class<com.five_corp.ad.internal.media_config.c>;
						public a: boolean;
						public constructor(param0: boolean);
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module media_config {
					export class d {
						public static class: java.lang.Class<com.five_corp.ad.internal.media_config.d>;
						public a: com.five_corp.ad.internal.media_config.c;
						public constructor(param0: com.five_corp.ad.internal.media_config.c);
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module movie {
					export module partialcache {
						export class a {
							public static class: java.lang.Class<com.five_corp.ad.internal.movie.partialcache.a>;
							public a: native.Array<number>;
							public b: number;
							public c: number;
							public d: number;
							public e: number;
							public constructor(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module movie {
					export module partialcache {
						export class b {
							public static class: java.lang.Class<com.five_corp.ad.internal.movie.partialcache.b>;
							/**
							 * Constructs a new instance of the com.five_corp.ad.internal.movie.partialcache.b interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: com.five_corp.ad.internal.movie.partialcache.a): void;
								a(): void;
							});
							public constructor();
							public a(): void;
							public a(param0: com.five_corp.ad.internal.movie.partialcache.a): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module resource_download {
					export module resource_requirement_type {
						export class a {
							public static class: java.lang.Class<com.five_corp.ad.internal.resource_download.resource_requirement_type.a>;
							/**
							 * Constructs a new instance of the com.five_corp.ad.internal.resource_download.resource_requirement_type.a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(): number;
							});
							public constructor();
							public a(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module resource_download {
					export module resource_requirement_type {
						export class b extends com.five_corp.ad.internal.resource_download.resource_requirement_type.a {
							public static class: java.lang.Class<com.five_corp.ad.internal.resource_download.resource_requirement_type.b>;
							public constructor();
							public a(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module resource_download {
					export module resource_requirement_type {
						export class c {
							public static class: java.lang.Class<com.five_corp.ad.internal.resource_download.resource_requirement_type.c>;
							public static b: number;
							public static c: number;
							public static d: number;
							public static e: number;
							public static f: number;
							public static a(): native.Array<number>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module resource_download {
					export module resource_requirement_type {
						export class d extends com.five_corp.ad.internal.resource_download.resource_requirement_type.a {
							public static class: java.lang.Class<com.five_corp.ad.internal.resource_download.resource_requirement_type.d>;
							public constructor();
							public a(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module resource_download {
					export module resource_requirement_type {
						export class e extends com.five_corp.ad.internal.resource_download.resource_requirement_type.a {
							public static class: java.lang.Class<com.five_corp.ad.internal.resource_download.resource_requirement_type.e>;
							public constructor();
							public a(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module resource_download {
					export module resource_requirement_type {
						export class f extends com.five_corp.ad.internal.resource_download.resource_requirement_type.a {
							public static class: java.lang.Class<com.five_corp.ad.internal.resource_download.resource_requirement_type.f>;
							public constructor();
							public a(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module resource_download {
					export module resource_requirement_type {
						export class g extends com.five_corp.ad.internal.resource_download.resource_requirement_type.a {
							public static class: java.lang.Class<com.five_corp.ad.internal.resource_download.resource_requirement_type.g>;
							public constructor();
							public a(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module util {
					export class a {
						public static class: java.lang.Class<com.five_corp.ad.internal.util.a>;
						public static a(param0: native.Array<number>, param1: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module util {
					export class b {
						public static class: java.lang.Class<com.five_corp.ad.internal.util.b>;
						public constructor();
						public a(param0: native.Array<number>): void;
						public d(): number;
						public e(): number;
						public c(): number;
						public a(): number;
						public b(): number;
						public f(): number;
						public a(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module util {
					export class c {
						public static class: java.lang.Class<com.five_corp.ad.internal.util.c>;
						public a: number;
						public b: number;
						public constructor(param0: number, param1: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module util {
					export class d {
						public static class: java.lang.Class<com.five_corp.ad.internal.util.d>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module util {
					export class e {
						public static class: java.lang.Class<com.five_corp.ad.internal.util.e>;
						public static a: com.five_corp.ad.internal.util.e;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module util {
					export class f<T1, T2>  extends java.lang.Object {
						public static class: java.lang.Class<com.five_corp.ad.internal.util.f<any,any>>;
						public b: T2;
						public static a(param0: any, param1: any): com.five_corp.ad.internal.util.f<any,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export module internal {
				export module util {
					export class g<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.five_corp.ad.internal.util.g<any>>;
						public a: java.util.ArrayList<java.lang.ref.WeakReference<T>>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class j {
				public static class: java.lang.Class<com.five_corp.ad.j>;
				/**
				 * Constructs a new instance of the com.five_corp.ad.j interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: string): com.five_corp.ad.internal.b;
					b(param0: string): com.five_corp.ad.internal.ad.a;
					c(param0: string): com.five_corp.ad.internal.media_config.b;
					d(param0: string): com.five_corp.ad.internal.ad_check.a;
				});
				public constructor();
				public c(param0: string): com.five_corp.ad.internal.media_config.b;
				public a(param0: string): com.five_corp.ad.internal.b;
				public b(param0: string): com.five_corp.ad.internal.ad.a;
				public d(param0: string): com.five_corp.ad.internal.ad_check.a;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class k extends com.five_corp.ad.j {
				public static class: java.lang.Class<com.five_corp.ad.k>;
				public c(param0: string): com.five_corp.ad.internal.media_config.b;
				public a(param0: string): com.five_corp.ad.internal.b;
				public b(param0: string): com.five_corp.ad.internal.ad.a;
				public d(param0: string): com.five_corp.ad.internal.ad_check.a;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class l {
				public static class: java.lang.Class<com.five_corp.ad.l>;
			}
			export module l {
				export class a {
					public static class: java.lang.Class<com.five_corp.ad.l.a>;
				}
				export class b {
					public static class: java.lang.Class<com.five_corp.ad.l.b>;
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class m extends com.five_corp.ad.cj {
				public static class: java.lang.Class<com.five_corp.ad.m>;
				public b(): void;
				public a_(): void;
				public c(): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class n {
				public static class: java.lang.Class<com.five_corp.ad.n>;
				/**
				 * Constructs a new instance of the com.five_corp.ad.n interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: com.five_corp.ad.ck): void;
				});
				public constructor();
				public a(param0: com.five_corp.ad.ck): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class o {
				public static class: java.lang.Class<com.five_corp.ad.o>;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class p extends com.five_corp.ad.internal.logger.a {
				public static class: java.lang.Class<com.five_corp.ad.p>;
				public a(param0: string): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class q extends com.five_corp.ad.db<com.five_corp.ad.bh> {
				public static class: java.lang.Class<com.five_corp.ad.q>;
				public b(param0: com.five_corp.ad.cv<any>): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class s {
				public static class: java.lang.Class<com.five_corp.ad.s>;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class t {
				public static class: java.lang.Class<com.five_corp.ad.t>;
				/**
				 * Constructs a new instance of the com.five_corp.ad.t interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(): void;
					b(): void;
					a(param0: com.five_corp.ad.cz): void;
				});
				public constructor();
				public b(): void;
				public a(param0: com.five_corp.ad.cz): void;
				public a(): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class u extends com.five_corp.ad.t {
				public static class: java.lang.Class<com.five_corp.ad.u>;
				public b(): void;
				public a(param0: com.five_corp.ad.cz): void;
				public a(): void;
			}
			export module u {
				export class a {
					public static class: java.lang.Class<com.five_corp.ad.u.a>;
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class v {
				public static class: java.lang.Class<com.five_corp.ad.v>;
			}
			export module v {
				export class a {
					public static class: java.lang.Class<com.five_corp.ad.v.a>;
					/**
					 * Constructs a new instance of the com.five_corp.ad.v$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						a(param0: number, param1: number): number;
					});
					public constructor();
					public a(param0: number, param1: number): number;
				}
				export class b extends com.five_corp.ad.v.a {
					public static class: java.lang.Class<com.five_corp.ad.v.b>;
					public a(param0: number, param1: number): number;
				}
				export class c extends com.five_corp.ad.v.a {
					public static class: java.lang.Class<com.five_corp.ad.v.c>;
					public a(param0: number, param1: number): number;
				}
				export class d {
					public static class: java.lang.Class<com.five_corp.ad.v.d>;
				}
				export module d {
					export class a {
						public static class: java.lang.Class<com.five_corp.ad.v.d.a>;
					}
					export class b {
						public static class: java.lang.Class<com.five_corp.ad.v.d.b>;
					}
					export module b {
						export class a {
							public static class: java.lang.Class<com.five_corp.ad.v.d.b.a>;
						}
					}
					export class c {
						public static class: java.lang.Class<com.five_corp.ad.v.d.c>;
					}
				}
				export class e extends com.five_corp.ad.v.a {
					public static class: java.lang.Class<com.five_corp.ad.v.e>;
					public a(param0: number, param1: number): number;
				}
				export class f extends com.five_corp.ad.v.a {
					public static class: java.lang.Class<com.five_corp.ad.v.f>;
					public a(param0: number, param1: number): number;
				}
				export class g extends com.five_corp.ad.v.a {
					public static class: java.lang.Class<com.five_corp.ad.v.g>;
					public a(param0: number, param1: number): number;
				}
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class w {
				public static class: java.lang.Class<com.five_corp.ad.w>;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class x {
				public static class: java.lang.Class<com.five_corp.ad.x>;
				public static a: java.nio.charset.Charset;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class y {
				public static class: java.lang.Class<com.five_corp.ad.y>;
				/**
				 * Constructs a new instance of the com.five_corp.ad.y interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(): void;
					b(): void;
					c(): void;
					d(): globalAndroid.widget.FrameLayout;
				});
				public constructor();
				public b(): void;
				public d(): globalAndroid.widget.FrameLayout;
				public c(): void;
				public a(): void;
			}
		}
	}
}

declare module com {
	export module five_corp {
		export module ad {
			export class z extends com.five_corp.ad.bb {
				public static class: java.lang.Class<com.five_corp.ad.z>;
				public a(param0: com.five_corp.ad.be): void;
			}
		}
	}
}

//Generics information:
//com.five_corp.ad.av:1
//com.five_corp.ad.ay:1
//com.five_corp.ad.cv:1
//com.five_corp.ad.db:1
//com.five_corp.ad.internal.util.f:2
//com.five_corp.ad.internal.util.g:1

