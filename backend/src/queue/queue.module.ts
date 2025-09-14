import { Module } from '@nestjs/common';

import { YouTubeQueueModule } from '@/queue/youtube';

@Module({ imports: [YouTubeQueueModule] })
export class QueueModule {}
