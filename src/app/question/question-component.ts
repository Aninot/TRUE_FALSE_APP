import {Component} from "@angular/core";

import {QuestionService} from "~/app/question/question.service";
import {Question} from "~/app/question/questionClass";
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
    selector: 'question',
    templateUrl: './question-component.html'
})

export class QuestionComponent {
    question: Question;
    questionText:string;
    answersButtons:boolean;
    nextButton:boolean;
    trueImage:number;
    points:number;
    lifes:number;
    stopGame:boolean;
    jokers:number;
    constructor (private questionService: QuestionService){}

    ngOnInit(){
        this.questionService.reset();
        this.jokers = this.questionService.getJokers();
        this.question = this.questionService.getRandomQuestion();
        this.questionText = this.question.content;
        this.answersButtons = true;
        this.nextButton = false;
        this.trueImage = 0;
        this.lifes = this.questionService.getLifes();
        this.points = this.questionService.getPoints();
        this.stopGame = this.questionService.stopGame();

    }

    checkAnswer(answer:boolean):boolean{
        this.answersButtons = false;
        this.nextButton = true;
        if(this.question.answer == answer)
        {
            dialogs.alert({
                title: "BRAVO",
                message: "Bien joué ! C'est la bonne réponse !",
                okButtonText: "Well played !"
            }).then(() => {
                console.log("Dialog closed!");
            });
            this.questionService.success();
            this.points = this.questionService.getPoints();
            this.trueImage = 1;
            return true
        }
        else {
            this.questionService.defeat();
            this.lifes = this.questionService.getLifes();
            this.trueImage = 2;
            dialogs.alert({
                title: "Raté",
                message: this.question.goodAnswer,
                okButtonText: "Bon ok..."
            }).then(() => {
                console.log("Dialog closed!");
            });
        }

        console.log(this.stopGame);
        return false;
    }

    giveAnswer(){
        this.jokers--;
        this.answersButtons = false;
        this.nextButton = true;
        dialogs.alert({
            title: "JOKER",
            message: this.question.goodAnswer,
            okButtonText: "Ah d'accord"
        }).then(() => {
            console.log("Dialog closed!");
        });
    }

    refresh(){
        this.questionService.updateQuestion(this.question.id, true);
        this.stopGame = this.questionService.stopGame();
        if(this.stopGame == false) {
            this.question = this.questionService.getRandomQuestion();
            this.questionText = this.question.content;
            this.trueImage = 0;
            this.answersButtons = true;
            this.nextButton = false;
        }
    }
}
