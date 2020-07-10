import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { ICat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<void> {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<ICat[]> {
    return this.catsService.findAll();
  }
}
