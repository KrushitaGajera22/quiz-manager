import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from '../dto/create-quiz';
import { Quiz } from '../entities/quiz.entity';
import { Repository } from 'typeorm';
import { IPaginationOptions, Pagination, paginate } from 'nestjs-typeorm-paginate';
import { OnEvent } from '@nestjs/event-emitter';
import { events } from 'src/common/constants/event.constants';
import { ResponseAddEvent } from '../events/response-add.event';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz) private quizRepository: Repository<Quiz>,
  ) {}

  async getAllQuiz(): Promise<[Quiz[], number]> {
    return await this.quizRepository
      .createQueryBuilder('q')
      .leftJoinAndSelect('q.questions', 'qt')
      .leftJoinAndSelect('qt.options', 'o')
      .skip(1)
      .take(2)
      .getManyAndCount();
  }

  async paginate(options: IPaginationOptions): Promise<Pagination<Quiz>> {
    const qb = this.quizRepository.createQueryBuilder('q')
    qb.orderBy('q.id', 'DESC')

    return paginate<Quiz>(qb, options)
  }

  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizRepository.findOne({
      where: { id },
      relations: ['questions', 'questions.options'],
    });
  }

  async createNewQuiz(quiz: CreateQuizDto) {
    return await this.quizRepository.save(quiz);
  }

  @OnEvent(events.RESPONSE_SUBMITTED)
    checkQuizCompleted(payload: ResponseAddEvent) {
        console.log('checkQuizCompleted', payload);
        
    }
}
