import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffe.entity';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';
import { ConfigModule } from '@nestjs/config';
import coffeesConfig from './config/coffees.config';

@Module({
    imports: [
        TypeOrmModule.forFeature([Coffee, Flavor, Event]),
        ConfigModule.forFeature(coffeesConfig),
    ],
    controllers: [CoffeesController],
    providers: [CoffeesService],
    exports: [CoffeesService],
})
export class CoffeesModule {}
