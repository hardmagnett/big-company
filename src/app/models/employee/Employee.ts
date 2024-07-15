// Post Model
import { Model } from 'pinia-orm'
import { Attr, BelongsTo, Str, Uid } from 'pinia-orm/decorators'
import Position from '@/app/models/position/Position'
export default class Employee extends Model {
  static entity = 'posts'
  
  @Uid() declare id: string
  
  @Str('') declare firstname: string
  @Str('') declare lastname: string

  // todo:: заменить на number
  @Attr(null) declare positionId: string | null
  @BelongsTo(() => Position, 'positionId') declare author: Position | null
}
