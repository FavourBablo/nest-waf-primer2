import { Controller, Get, Post, Body, Put, Param, Delete, Render } from '@nestjs/common';
import { BiodataService } from './biodata.service';
import { CreateBiodatumDto } from './dto/create-biodatum.dto';
import { UpdateBiodatumDto } from './dto/update-biodatum.dto';

@Controller('biodata')
export class BiodataController {
  constructor(private readonly biodataService: BiodataService) { }

  @Get('create')
  @Render('biodata/create-user.html')
  createForm() {
  }

  @Post()
  @Render('biodata/create-user.html')
  create(@Body() createBiodatumDto: CreateBiodatumDto) {
    return this.biodataService.create(createBiodatumDto);
  }

  @Get()
  findAll() {
    return this.biodataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.biodataService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBiodatumDto: UpdateBiodatumDto) {
    return this.biodataService.update(+id, updateBiodatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.biodataService.remove(+id);
  }
}
