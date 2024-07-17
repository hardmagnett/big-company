import { Model } from "pinia-orm";
import { Str, Num } from "pinia-orm/decorators";
export default class Position extends Model {
  static entity = "positions";
  @Num(null) declare id: number;
  @Str("") declare title: string;
}
