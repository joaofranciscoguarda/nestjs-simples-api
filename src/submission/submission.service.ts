import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSubmissionDto, EditSubmissionDto } from './dto';

@Injectable()
export class SubmissionService {
  constructor(private prisma: PrismaService) {}

  async createSubmission(userId: number, dto: CreateSubmissionDto) {
    const contact = await this.prisma.submission.create({
      data: {
        userId,
        ...dto,
      },
    });
    return contact;
  }

  async getSubmissions(userId: number) {
    return await this.prisma.submission.findMany({
      where: {
        userId,
      },
    });
  }

  async getSubmissionById(userId: number, contactId: number) {
    return await this.prisma.submission.findFirstOrThrow({
      where: {
        id: contactId,
        userId,
      },
    });
  }

  async editSubmissionById(
    userId: number,
    contactId: number,
    dto: EditSubmissionDto,
  ) {
    const contact = await this.prisma.submission.findUniqueOrThrow({
      where: { id: contactId },
    });

    if (!contact || contact.userId !== userId) {
      throw new ForbiddenException('Access to resources denied');
    }

    this.prisma.submission.update({
      where: {
        id: contactId,
      },
      data: {
        ...dto,
      },
    });

    return contact;
  }

  async deleteSubmissionById(userId: number, contactId: number) {
    const contact = await this.prisma.submission.findFirst({
      where: { id: contactId },
    });
    console.log(userId);
    console.log(contactId);

    if (!contact) {
      throw new NotFoundException('Contact not found');
    } else if (contact.userId !== userId) {
      throw new ForbiddenException('Access to resources denied');
    }

    await this.prisma.submission.delete({
      where: {
        id: contactId,
      },
    });
  }
}
