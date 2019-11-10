import { Injectable } from "@angular/core";
import { Thought } from './thought.model';
import { Subject } from 'rxjs';
@Injectable()
export class ThoughtService {
    thoughtsChanged = new Subject<Thought[]>();
    private thoughts: Thought[] = [];

    getThoughts() {
        return this.thoughts.slice();
    }

    addThought(thought: Thought) {
        this.thoughts.push(thought);
        this.thoughtsChanged.next(this.thoughts.slice());
    }
}