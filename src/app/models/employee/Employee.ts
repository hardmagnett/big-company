import { Model } from 'pinia-orm'
import { Attr, BelongsTo, Str, Uid } from 'pinia-orm/decorators'
import Position from '@/app/models/position/Position'
export default class Employee extends Model {
  static entity = 'employees'
  
  @Uid() declare id: string
  
  @Str('') declare firstname: string
  @Str('') declare lastname: string

  @Attr(null) declare position_id: number | null
  @BelongsTo(() => Position, 'position_id') declare author: Position | null
}
