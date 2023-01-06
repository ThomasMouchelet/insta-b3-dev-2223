import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from './post.entity';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(PostEntity)
        private postRepository: Repository<PostEntity>,
    ){}

    async findAll(){
        return await this.postRepository.find();
    }

    async create(data){
        const post = await this.postRepository.create(data);
        await this.postRepository.save(post);
        return post;
    }
}
