import { Controller, Body, Get, Post, Patch, Delete, Param } from '@nestjs/common';
import { ReviewsService } from './Reviews.service';
import { Review } from './Reviews.entity';

@Controller('Reviews')
export class ReviewsController {
    constructor(private ReviewsService: ReviewsService) { }

    @Get() // localhost:3000/Reviews/
    getReviews() {
        return this.ReviewsService.getReview();
    }

    @Get(':id') // localhost:3000/Reviews/1
    getReviewByID(@Param('id') id: number) {
        return this.ReviewsService.getReviewbyID(id);
    }

    @Post() // localhost:3000/Reviews
    crearReview(@Body() Reviews: Review) {
        return this.ReviewsService.crearReview(Reviews);
    }

    @Patch(':id') // localhost:3000/Reviews/1
    editarReview(@Param('id') id: number, @Body() Reviews: Review) {
        return this.ReviewsService.editarReview(id, Reviews);
    }

    @Delete(':id') // localhost:3000/Reviews/1
    eliminarReview(@Param('id') id: number) {
        return this.ReviewsService.eliminarReview(id);
    }


}
