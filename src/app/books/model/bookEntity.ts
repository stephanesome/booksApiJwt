export class BookEntity {
  constructor(
    public id: number,
    public category: string,
    public title: string,
    public cost: number,
    public authors?: AuthorEntity[],
    public year?: number,
    public description?: string
  ) {}
}

export class AuthorEntity {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string
  ){}
}
