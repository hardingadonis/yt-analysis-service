import { Global, Module } from '@nestjs/common';

import { YoutubeQueueProcessor } from '@/queue/youtube/processors';
import { YoutubeQueueService } from '@/queue/youtube/services';

@Global()
@Module({
	providers: [YoutubeQueueService, YoutubeQueueProcessor],
	exports: [YoutubeQueueService],
})
export class YouTubeQueueModule {}
