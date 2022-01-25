// export interface Ingredient {
//     name: string,
//     amount: number
// }

export class Ingredient {
  constructor(public name: string, public amount: number) {
    (name = name), (amount = amount);
  }
}
