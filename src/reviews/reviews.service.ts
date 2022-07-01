import { Injectable } from '@nestjs/common';
import { Review } from './Reviews.entity';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';

@Injectable()
export class ReviewsService {
    constructor(
        @InjectRepository(Review)
        private Reviews: Repository<Review>,
    ) { }

    getReview(): Promise<Review[]> {
        return this.Reviews.find();
    }

    getReviewbyID (id: number): Promise<Review> {
        return this.Reviews.findOneBy({ IdReview: id });
    }

    crearReview(Review: Review) {
        return this.Reviews.save(Review);
    }

    editarReview(id: number, Review: Review) {
        return this.Reviews.update(id, Review);
    }

    async eliminarReview(id: number): Promise<void>  {
        await this.Reviews.delete(id);
    }

}
