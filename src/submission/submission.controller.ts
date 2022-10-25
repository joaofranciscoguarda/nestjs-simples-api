import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { SubmissionService } from './submission.service';
import { CreateSubmissionDto, EditSubmissionDto } from './dto';

@UseGuards(JwtGuard)
@Controller('submission')
export class SubmissionController {
  constructor(private submissionService: SubmissionService) {}

  //Create
  @Post()
  createsubmission(
    @GetUser('id') userId: number,
    @Body() dto: CreateSubmissionDto,
  ) {
    return this.submissionService.createSubmission(userId, dto);
  }

  // Get ALl
  @Get()
  getsubmissions(@GetUser('id') userId: number) {
    return this.submissionService.getSubmissions(userId);
  }

  //Get Id
  @Get(':submissionId')
  getsubmissionById(
    @GetUser('id') userId: number,
    @Param('submissionId', ParseIntPipe)
    submissionId: number,
  ) {
    return this.submissionService.getSubmissionById(userId, submissionId);
  }

  // Update
  @Patch(':submissionId')
  editsubmissionById(
    @GetUser('id') userId: number,
    @Param('submissionId', ParseIntPipe)
    submissionId: number,
    @Body() dto: EditSubmissionDto,
  ) {
    return this.submissionService.editSubmissionById(userId, submissionId, dto);
  }

  //Delete
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':submissionId')
  deletesubmissionById(
    @GetUser('id') userId: number,
    @Param('submissionId', ParseIntPipe)
    submissionId: number,
  ) {
    return this.submissionService.deleteSubmissionById(userId, submissionId);
  }
}
