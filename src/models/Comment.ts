import { CommentDB, CommnetModel } from "../type"

export class Comment {

    constructor (
        private id: string,
        private userId: string,
        private postId: string,
        private comment: string,
        private likes: number,
        private dislikes: number,
        private createAt: string
    ) {}

    public getId(): string {
        return this.id
    }

    public setId(value: string): void {
        this.id = value
    }

    public getUserId(): string {
        return this.userId
    }

    public setUserId(value: string): void {
        this.userId = value
    }

    public getPostId(): string {
        return this.postId
    }

    public setPostId(value: string): void {
        this.postId = value
    }

    public getComment(): string {
        return this.comment
    }

    public setComment(value: string): void {
        this.comment = value
    }

    public getLikes(): number {
        return this.likes
    }

    public setLikes(value: number): void {
        this.likes = value
    }
    
    public getDislikes(): number {
        return this.dislikes
    }

    public setDislikes(value: number): void {
        this.dislikes = value
    }

    public getCreateAt(): string {
        return this.createAt
    }

    public setCreateAt(value: string): void {
        this.createAt = value
    }

    public toDBModel(): CommentDB {
        return {
            id: this.id,
            user_id: this.userId,
            post_id: this.postId,
            comment: this.comment,
            likes: this.likes,
            dislikes: this.dislikes,
            create_at: this.createAt
        }
    }

    public toBusinessModel(): CommnetModel{
        return {
            id: this.id,
            userId: this.userId,
            postId: this.postId,
            comment: this.comment,
            likes: this.likes,
            dislikes: this.dislikes,
            createAt: this.createAt
        }
    }
}