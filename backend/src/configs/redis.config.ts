import { registerAs } from '@nestjs/config';

import { CONFIG_TOKENS } from '@/configs/constant.config';

interface RedisInterface {
	url: string;
}

export const redisConfig = registerAs(
	CONFIG_TOKENS.REDIS,
	(): RedisInterface => {
		if (!process.env.APP_REDIS_URL) {
			throw new Error(
				'Redis configuration is not properly set in environment variables',
			);
		}

		return {
			url: process.env.APP_REDIS_URL,
		};
	},
);

export type RedisConfig = ReturnType<typeof redisConfig>;
