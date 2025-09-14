import { Injectable } from '@nestjs/common';

import { AnalyzeVideoDto } from '@/youtube/dtos';

@Injectable()
export class YouTubeService {
	async analyzeVideo(dto: AnalyzeVideoDto) {
		return { message: 'Video analysis started', videoId: dto.url };
	}
}
