import { Observable } from 'tns-core-modules/data/observable'
import { AdConfig } from '../../../demo-common/ad-config-loader'

export class HomeViewModel extends Observable {
  slotId1 = AdConfig.ads[0].slotId
  slotId2 = AdConfig.ads[1].slotId
}
