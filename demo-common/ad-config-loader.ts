// @ts-ignore
export type IAdConfig = typeof import('../config/ad.json')
// @ts-ignore
import adConf from '../config/ad.json'

export const AdConfig: IAdConfig = {
  appId: adConf.appId,
  ads: adConf.ads
}
