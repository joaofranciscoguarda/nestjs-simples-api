import { ApiProperty } from '@nestjs/swagger';
import { IsUrl, IsNotEmpty, IsString } from 'class-validator';

export class EditSubmissionDto {
  @ApiProperty()
  @IsUrl()
  @IsNotEmpty()
  url: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  comment: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  contact: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  findWhere: string;
}
