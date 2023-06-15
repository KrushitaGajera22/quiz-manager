import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Param,
  ParseIntPipe,
  Query,
  DefaultValuePipe,
  UseGuards,
} from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { CreateQuizDto } from '../dto/create-quiz';
import { Quiz } from '../entities/quiz.entity';
import { ApiCreatedResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { JwtAuthguard } from 'src/modules/auth/jwt-auth.guard';
import { RolesGuard } from 'src/modules/auth/roles.guard';
import { Roles } from 'src/modules/auth/roles.decorator';

@ApiTags('Quiz')
@Controller('quiz')
@ApiSecurity('bearer')
@UseGuards(JwtAuthguard)
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Get('/')
  // @ApiPaginatedResponse({ model: Quiz, description: 'List of quizes'})
  async getAllQuiz(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 1,
  ): Promise<Pagination<Quiz>> {
    const options: IPaginationOptions = {
      limit,
      page,
    };
    return await this.quizService.paginate(options);
  }

  @Get('/:id')
  async getQuizById(@Param('id', ParseIntPipe) id: number): Promise<Quiz> {
    return await this.quizService.getQuizById(id);
  }

  @ApiCreatedResponse({ description: 'The quiz that got created', type: Quiz })
  @Post('/create')
  @UsePipes(ValidationPipe)
  @UseGuards(RolesGuard)
  @Roles('admin')
  async createQuiz(@Body() quizData: CreateQuizDto): Promise<Quiz> {
    return await this.quizService.createNewQuiz(quizData);
  }
}
