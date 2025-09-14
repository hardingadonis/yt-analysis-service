import { Module } from '@nestjs/common';

import { YouTubeController } from '@/youtube/controllers';
import { YouTubeService } from '@/youtube/services';

@Module({
	controllers: [YouTubeController],
	providers: [YouTubeService],
})
export class YouTubeModule {}
