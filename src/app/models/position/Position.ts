// todo:: разобраться здесь и в Employee c Vue: All imports in import declaration are unused. и подчеркиванием декораторов.

import { Model } from 'pinia-orm'
import { Str, Uid } from 'pinia-orm/decorators'
export default class Position extends Model {
  static entity = 'positions'
  
  // todo:: заменить на number
  @Uid() declare id: string
  @Str('') declare title: string
}
