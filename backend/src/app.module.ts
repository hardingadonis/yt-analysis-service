import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { RedisConfig, redisConfig } from '@/configs';
import { DomainModule } from '@/domains';

@Module({
	imports: [
		ConfigModule.forRoot({
			load: [redisConfig],
			cache: true,
			isGlobal: true,
		}),

		BullModule.forRootAsync({
			inject: [redisConfig.KEY],
			useFactory: (config: RedisConfig) => {
				return {
					connection: {
						url: config.url,
					},
				};
			},
		}),

		DomainModule,
	],
})
export class AppModule {}
