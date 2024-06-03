import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

// your-domain.com/products when '/products' is requested OR your-domain.com/products/users.
@Controller(/*'products'*/)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(/*'users'*/) //only empty path triggers this OR '/products/users' when '/users' is requested.
  @Header('Content-Type', 'text/html')
  getHello(): /*string*/ {name: string} {
    return {name: 'Hello World!'};
    // return this.appService.getHello();
  }
}
