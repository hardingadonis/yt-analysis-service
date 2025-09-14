import { IsUrl, Matches } from 'class-validator';

export class AnalyzeVideoDto {
	@IsUrl()
	@Matches(/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)(\/)?/, {
		message: 'URL must be a valid YouTube link',
	})
	url: string;
}
