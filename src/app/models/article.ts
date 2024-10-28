export class Article {
    constructor(
        public titulo: string,
        public subtitulos: Article[], // Corregido: Especifica que subtitulos es un array de Article
        public contenido: string,
    ){}
}
