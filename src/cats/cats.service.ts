import { ICat } from './interfaces/cat.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private readonly cats: ICat[] = [];

  create(cat: ICat): void {
    this.cats.push(cat);
  }

  findAll(): ICat[] {
    return this.cats;
  }
}
