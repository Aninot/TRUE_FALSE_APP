import {Component} from "@angular/core";

import {QuestionService} from "~/app/question/question.service";
import { ListPicker } from "tns-core-modules/ui/list-picker";
import {Question} from "~/app/question/questionClass";
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
    selector: 'options',
    templateUrl: './options-component.html'
})

export class OptionsComponent {
    constructor (private questionService: QuestionService){}
    level:number;
    levels:Array<String> = [];
    picked:String;
    theme:number;
    themes:Array<String> = [];
    ngOnInit(){
        this.level = this.questionService.getLevel();
        this.theme = this.questionService.getTheme();
        this.levels = ["Facile","Moyen","Difficile"];
        this.themes = ["Tarte","Culture Générale","DONNE MOI TOUT"];
    }

    updateLevel(){
        this.questionService.setLevel(1);
    }

    public changeLevel(args) {
        let picker = <ListPicker>args.object;
        this.questionService.setLevel(picker.selectedIndex + 1);
        this.questionService.setJokers(picker.selectedIndex);
        this.picked = this.levels[picker.selectedIndex];
    }
    public changeTheme(args) {
        let picker = <ListPicker>args.object;
        this.questionService.setTheme(picker.selectedIndex + 1);
        this.picked = this.levels[picker.selectedIndex];
    }
}
