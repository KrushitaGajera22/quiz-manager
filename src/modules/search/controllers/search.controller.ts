import { ApiTags } from '@nestjs/swagger';
import { SearchService } from '../search.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { SearchMovieDto } from '../dto/search-movie.dto';
import { quizSampleData } from 'src/database/data/quiz.data';

@ApiTags('Search')
@Controller('search')
export class SearchController {
  constructor(private searchService: SearchService) {}

  @Get('/')
  public async getSearch(): Promise<void> {
    const documents = [];
    for (let i = 0; i < quizSampleData.length; i++) {
      const { questions } = quizSampleData[i];
      for (let j = 0; j < questions.length; j++) {
        const { question } = questions[j];
        // console.log(question);
        
        documents.push({
          id: `${i}${j}`,
          text: question,
        });
      }
    }

    const resp = await this.searchService.addDocuments(documents)
    console.log(resp);
    
  }

  @Post('/')
  public async searchMovie(@Body() search: SearchMovieDto) {
    return await this.searchService.search(search.text, {
      attributesToHighlight: ['title'],
    });
  }
}
