import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('youtube')
export class YoutubeQueueProcessor extends WorkerHost {
	async process(job: Job): Promise<void> {}
}
