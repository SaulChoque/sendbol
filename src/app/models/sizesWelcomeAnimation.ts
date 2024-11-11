import { SizesAnimationSvg } from './sizesAnimationSvg';

export class SizesWelcomeAnimation extends SizesAnimationSvg {
  constructor(
    screenType: string = '',
    div: string = '',
    public box: string = '',
    public cart: string = '',
    public logo: string = '',
  ) {
    super(screenType, div); // Llama al constructor de la clase padre
  }
}
