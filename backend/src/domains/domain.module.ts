import { Module } from '@nestjs/common';

import { YouTubeModule } from '@/youtube/youtube.module';

@Module({
	imports: [YouTubeModule],
})
export class DomainModule {}
