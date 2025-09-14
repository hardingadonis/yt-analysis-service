import { Module } from '@nestjs/common';

import { DomainModule } from '@/domains';

@Module({
	imports: [DomainModule],
})
export class AppModule {}
