import { Component, OnInit } from '@angular/core'
import { AdConfig } from '../../../../demo-common/ad-config-loader'

@Component({
  selector: 'ns-items',
  moduleId: module.id,
  templateUrl: './items.component.html'
})
export class ItemsComponent implements OnInit {

  ad1 = AdConfig.ads[0].slotId
  ad2 = AdConfig.ads[1].slotId

  ngOnInit (): void {
    //
  }
}
