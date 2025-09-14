import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	Post,
} from '@nestjs/common';

import { AnalyzeVideoDto } from '@/youtube/dtos';
import { YouTubeService } from '@/youtube/services';

@Controller()
export class YouTubeController {
	constructor(private readonly service: YouTubeService) {}

	@Post('analyze')
	@HttpCode(HttpStatus.OK)
	async analyzeVideo(@Body() dto: AnalyzeVideoDto) {
		return await this.service.analyzeVideo(dto);
	}

	@Get('result/:id')
	async getResult(@Param('id') id: string) {}
}
