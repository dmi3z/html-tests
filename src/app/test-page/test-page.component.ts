import { Component } from "@angular/core";
import { Question, Answer } from './question';
import { questions } from './data';

@Component({
    selector: 'app-test-page',
    templateUrl: 'test-page.component.html',
    styleUrls: ['test-page.component.scss']
})

export class TestPageComponent {

    public step = 0;

    private total = 0;

    public questions: Question[] = questions;

    constructor() { }

    public goNext(answer: Answer): void {
        this.total += answer.cost;
        if (this.step < this.questions.length - 1) {
            this.step++;
        } else {
            console.log(this.total);
        }
    }
}
