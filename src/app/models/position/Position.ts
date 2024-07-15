// todo:: разобраться здесь и в Employee c Vue: All imports in import declaration are unused. и подчеркиванием декораторов.

import { Model, useStoreActions } from 'pinia-orm'
import { Str, Uid, Num } from 'pinia-orm/decorators'
export default class Position extends Model {
  static entity = 'positions'
  @Num(null) declare id: number
  @Str('') declare title: string
}
