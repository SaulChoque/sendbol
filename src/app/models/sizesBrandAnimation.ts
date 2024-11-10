import { SizesAnimationSvg } from './sizesAnimationSvg';

export class SizesBrandAnimation extends SizesAnimationSvg {
  constructor(
    screenType: string = '',
    div: string = '',
    public cart: string = '',
    public amazon: string = '',
    public ebay: string = '',
    public etsy: string = '',
    public shein: string = '',
  ) {
    super(screenType, div); // Llama al constructor de la clase padre
  }
}