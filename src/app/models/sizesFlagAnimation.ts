import { SizesAnimationSvg } from './sizesAnimationSvg';

export class SizesFlagAnimation extends SizesAnimationSvg {
  constructor(
    screenType: string = '',
    div: string = '',
    public world: string = '',
    public usaFlag: string = '',
    public bolFlag: string = '',
    public sync: string = ''
  ) {
    super(screenType, div); // Llama al constructor de la clase padre
  }
}