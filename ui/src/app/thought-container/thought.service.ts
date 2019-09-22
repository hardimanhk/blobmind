import { Injectable } from "@angular/core";
import { Thought } from './thought.model';

@Injectable()
export class BlobService {
    private thoughts: Thought[];

    getThoughts() {
        return this.thoughts.slice();
    }
}