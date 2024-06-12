import { Body, Controller, Post, Query } from '@nestjs/common';

@Controller()
export class AppController {
  @Post()
  getHello(@Query() q, @Body() data) {
    console.log('data received!')
    console.log(q)
    console.log(data)
  }
}
