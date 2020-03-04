import { Component, OnInit } from "@angular/core";
import { Question, Answer, UserAnswer } from './question';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
    selector: 'app-test-page',
    templateUrl: 'test-page.component.html',
    styleUrls: ['test-page.component.scss']
})

export class TestPageComponent implements OnInit {

    public step = 0;

    private total = 0;

    public questions: Question[] = [];
    public currentQestion: Question;
    private questionsLength: number;

    private userAnswers: UserAnswer = {
        name: '',
        answers: []
    };

    constructor(private dataService: DataService, private router: Router) { }

    ngOnInit() {
        this.dataService.getQuestions().subscribe(res => {
            this.questions = res;
            this.questionsLength = res.length;
            this.currentQestion = this.questions[this.step];
        });
        this.userAnswers.name = this.dataService.user;
    }

    public goNext(answer: Answer): void {
        this.total += answer.cost;
        if (this.step < this.questionsLength - 1) {
            this.step++;
            this.userAnswers.answers.push(answer);
            this.currentQestion = this.questions[this.step];
        } else {
            this.dataService.saveResult(this.userAnswers);
            this.dataService.total = this.total;
            this.router.navigate(['complete']);
        }
    }
}
