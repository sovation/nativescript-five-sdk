import { Property, View } from 'tns-core-modules/ui/core/view'

export class FiveSdkBase extends View {

  slotId: string
  slotWidth: number

  constructor () {
    super()
  }

}

export const slotIdProperty = new Property<FiveSdkBase, string>({
  name: 'slotId', defaultValue: '', affectsLayout: true
})
slotIdProperty.register(FiveSdkBase)

export const slotWidthProperty = new Property<FiveSdkBase, number>({
  name: 'slotWidth', defaultValue: 0, affectsLayout: true
})
slotWidthProperty.register(FiveSdkBase)
