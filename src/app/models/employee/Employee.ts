import { Model } from 'pinia-orm'
import { Attr, BelongsTo, Str, Uid, Num } from 'pinia-orm/decorators'
import Position from '@/app/models/position/Position'
export default class Employee extends Model {
  static entity = 'employees'
  
  @Uid() declare id: string
  
  @Str('') declare firstname: string
  @Str('') declare lastname: string

  @Num(null) declare position_id: number
  // @Attr(null) declare position_id: number | null
  
  @BelongsTo(() => Position, 'position_id') declare position: Position | null
  
  get fullname() {
    return `${this.firstname} ${this.lastname}`
  }
}
