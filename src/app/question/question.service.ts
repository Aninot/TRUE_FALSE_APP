import { Injectable } from "@angular/core";

import { Question } from "./questionClass";

@Injectable({
    providedIn: "root"
})
export class QuestionService {

    private lifes = 3;
    private points = 0;
    private level = 1;
    private joker = 2;
    private theme = 1;
    private questions = new Array<Question>(
        {id:1, content:"La meilleure tarte est celle aux pommes", answer:true, level:1, goodAnswer:"Evidemment c'est la meilleure, surtout celle de mamie !", alreadyDone:false,theme:0},
        {id:2, content:"La meilleure tarte est celle que tu prends dans la gueule", answer:false, level:1, goodAnswer:"Euh...Non c'est faux, sauf si tu es masochiste !",alreadyDone:false,theme:0},
        {id:3, content:"La meilleure tarte de film est celle d'American Pie", answer:true, level:1, goodAnswer:"HUM DELICIEUX C'est culte ! Donc c'est VRAI",alreadyDone:false,theme:0},
        {id:4, content:"La meilleure tartiflette est celle de ma mère", answer:true, level:2, goodAnswer:"C'est vrai, mais on parle de tartes normalement ici...",alreadyDone:false,theme:0},
        {id:5, content:"La meilleure tarte au citron est celle de Cyril Lignac", answer:false, level:2, goodAnswer:"FAUX ! Mon petit frère fait mieux !",alreadyDone:false,theme:0},
        {id:6, content:"La meilleure tarte de bande dessinée est celle donnée à Robin par Bat-Man", answer:true, level:2, goodAnswer:"VRAI et ceux qui disent le contraire sont des cons !",alreadyDone:false,theme:0},
        {id:7, content:"La tarte en pions est un jeu de plateau", answer:false, level:3, goodAnswer:"FAUX c'est juste un mauvais jeu de mots",alreadyDone:false,theme:0},
        {id:8, content:"La meilleure tarte à patinée est un mauvais jeu de mot", answer:true, level:3, goodAnswer:"VRAI, va te pendre si tu as rigolé.",alreadyDone:false,theme:0},
        {id:9, content:"La pire tarte tation est de jouer à ce jeu", answer:true, level:3, goodAnswer:"VRAI, si tu es tenté par ça c'est que t'es sacrément perdu dans ta vie...",alreadyDone:false,theme:0},
        {id:10, content:"Quand tu regarde Arte la tarte t'artends au tournant", answer:true, level:3, goodAnswer:"VRAI, si tu regardes Arte tu va probablement prendre une tarte de fatigue dans la gueule...",alreadyDone:false,theme:0},
        {id:11, content:"La biscotte est une tarte", answer:false, level:2, goodAnswer:"FAUX... La biscotte est une biscotte, et la tarte est une tarte, rien à voir !",alreadyDone:false,theme:0},
        {id:12, content:"La Flamiche est une tarte", answer:true, level:3, goodAnswer:"VRAI, une tarte au fromage et à l'oeuf",alreadyDone:false,theme:0},
        {id:13, content:"Tartegnin est une le nom d'une commune en Suisse", answer:true, level:3, goodAnswer:"VRAI, mais personne la connaît sauf ceux qui trichent au Scrabble ;)",alreadyDone:false,theme:0},
        {id:14, content:"On peut retrouver une tarte dans un moulin", answer:true, level:3, goodAnswer:"VRAI, dans la tartevelle, qui est une partie du moulin :)",alreadyDone:false,theme:0},
        {id:15, content:"Il est autorisé de tarter sa famille", answer:false, level:2, goodAnswer:"FAUX, pas d'excuses genre 'nan mais il a commencé c'est pas moi'",alreadyDone:false,theme:0},
        {id:16, content:"La tartification est une maladie qui a pour symptome la transformation du malade en tarte géante", answer:false, level:3, goodAnswer:"FAUX, tu fait des tests pour perdre où quoi ??",alreadyDone:false,theme:0},
        {id:17, content:"La tarte existe depuis 7 ans entre deux amies de Emma", answer:true, level:2, goodAnswer:"VRAI, mais tout le monde s'en fou royalement",alreadyDone:false,theme:0},
        {id:18, content:"Tartement parlant, la pizza n'est pas une tarte", answer:true, level:3, goodAnswer:"VRAI, la pizza c'est sacré, on mélange pas les tartes et les pizzas !",alreadyDone:false,theme:0},
        {id:19, content:"Le nom 'tartiflette' viens d'une vieille histoire de tarte", answer:true, level:3, goodAnswer:"VRAI, enfin peut être, il me semble, fait pas chier.",alreadyDone:false,theme:0},
        {id:20, content:"La tarte aux fraises est dans un dessin animé", answer:false, level:1, goodAnswer:"FAUX, c'est une CHARLOTTE aux fraises, rien à voir !",alreadyDone:false,theme:0},

        {id:21, content:"La France a gagnée 2 fois la coupe du monde", answer:true, level:1, goodAnswer:"VRAI, on ne sait pas comment o.O",alreadyDone:false,theme:1},
        {id:22, content:"Nous sommes 3 milliards sur la Terre", answer:false, level:1, goodAnswer:"FAUX, en tout cas pas dans le système décimale",alreadyDone:false,theme:1},
        {id:23, content:"L'eau bout à 100°", answer:true, level:1, goodAnswer:"VRAI, et tu peux vérifier en faisant des pâtes :)",alreadyDone:false,theme:1},
        {id:24, content:"Notre squelette se compose de 206 os", answer:true, level:3, goodAnswer:"VRAI, et tu peux vérifier en autopsiant ton voisin :)",alreadyDone:false,theme:1},
        {id:25, content:"L'eau froide gèle plus vite que l'eau chaude", answer:false, level:3, goodAnswer:"FAUX, je sais pas pourquoi mais google est ton ami !",alreadyDone:false,theme:1},
        {id:26, content:"Christophe Colomb a découvert l'Amérique", answer:false, level:2, goodAnswer:"FAUX, c'est Amerigo Vespucci",alreadyDone:false,theme:1},
        {id:27, content:"Victor Hugo a écrit \"les Misérables\"", answer:true, level:1, goodAnswer:"VRAI, enfin il a écris l'histoire des misérables dans \"Les Misérables\", il s'est pas cassé le cul pour trouver un titre...",alreadyDone:false,theme:1},
        {id:28, content:"Les antibiotiques tuent les bactéries et les virus", answer:false, level:2, goodAnswer:"FAUX, ils tuent les biotiques !",alreadyDone:false,theme:1},
        {id:29, content:"L'ONU (Organisation des Nations unies) a été créée en 1991", answer:false, level:3, goodAnswer:"FAUX, en 1945 !",alreadyDone:false,theme:1},
        {id:30, content:"Le renard est un félin", answer:false, level:1, goodAnswer:"FAUX, c'est renard ! et il n'appartient pas à la famille des félins :)",alreadyDone:false,theme:1},
        {id:31, content:"La durée d’un jour a toujours été de 24 heures", answer:false, level:2, goodAnswer:"FAUX, les années bisextiles ne sont pas une légende !",alreadyDone:false,theme:1},
        {id:32, content:"Les éléphants ont peur des souris", answer:false, level:1, goodAnswer:"FAUX, par contre ils n'aiment pas les fourmis qui chatouillent l'interieur de leur trompe et ... ATCHOUM",alreadyDone:false,theme:1},
        {id:33, content:"Le sens de rotation de l’eau dans un lavabo dépend de l’hémisphère dans lequel on se trouve", answer:false, level:1, goodAnswer:"FAUX, c'était pas un piège, désolé bro !",alreadyDone:false,theme:1},
        {id:34, content:"L’homme a plus de poils que la femme", answer:false, level:1, goodAnswer:"FAUX, en fait elles en ont aussi, mais la plupart d'entre elles les rasent :)",alreadyDone:false,theme:1},
        {id:35, content:"Il est impossible d’éternuer les yeux ouverts", answer:true, level:1, goodAnswer:"VRAI, mais essaye pas tu auras l'air bête pour rien :P",alreadyDone:false,theme:1},
        {id:36, content:"Le taureau est excité par la couleur rouge", answer:false, level:1, goodAnswer:"FAUX, c'est le mouvement de la cape qui le fait charger en corrida",alreadyDone:false,theme:1},
        {id:37, content:"Les connexions Wi-Fi peuvent être perturbées par les fours à micro-ondes", answer:true, level:1, goodAnswer:"VRAI, si tu connecte ton téléphone en wifi puis que tu le mets au micro-onde, il va pas être en très bon état à la sortie !",alreadyDone:false,theme:1},
        {id:38, content:"L’homme n’utilise que 10% de son cerveau", answer:false, level:1, goodAnswer:"FAUX, c'est la femme qui n'en utilise que 10% !",alreadyDone:false,theme:1},
        {id:39, content:"Cléopâtre était égyptienne", answer:false, level:1, goodAnswer:"FAUX, elle était grecque, comme le yaourt !",alreadyDone:false,theme:1},


    );
    getQuestions(): Array<Question> {
        return this.questions;
    }

    getAnswer(id: number): boolean {
        return this.questions.filter((question) => question.id === id)[0].answer;
    }
    getQuestionByLvl(lvl: number):Question{
        let table: Array<Question>;
        table = this.questions.filter((question)=> question.level === lvl);
        table = table.filter((question)=> question.alreadyDone === false);
        return (table[Math.floor(Math.random() * Math.floor(table.length-1))])
    }

    getRandomQuestion(): Question{
        let table: Array<Question>;
        table = this.questions.filter((question)=> question.alreadyDone === false);
        table = table.filter((question)=> question.level <= this.level);
        if(this.theme <= 2)
            table = table.filter((question) => question.theme == this.theme);
        return table[Math.floor(Math.random() * Math.floor(table.length-1))]
    }
    updateQuestion(id:number, alreadyDone:boolean){
        this.questions.filter((question) => question.id === id)[0].alreadyDone = alreadyDone;
    }
    success(){
        this.points += 1;
    }

    defeat(){
        this.lifes -= 1;
    }

    getLifes(): number{
        return this.lifes;
    }

    getPoints():number{
        return this.points;
    }

    stopGame():boolean{
        let table = this.questions.filter((question) => question.alreadyDone == false);
        table = table.filter((question) => question.level == this.level);
        if(table.length == 0 || this.lifes == 0)
            return true;
        return false;
    }

    setPoints(points:number){
        this.points = points;
    }
    setLifes(lifes:number){
        this.lifes = lifes;
    }

    reset(){
        this.setLifes(3);
        this.setPoints(0);

        this.questions.forEach(
            function (element){
                element.alreadyDone = false;
            }
        );
    }
    setLevel(lvl: number){
        this.level = lvl;
    }

    getLevel():number{
        return this.level;
    }

    getJokers():number{
        return this.joker;
    }
    setJokers(joker:number){
        this.joker = joker;
    }
    setTheme(theme:number){
        this.theme = theme;
    }
    getTheme():number{
        return this.theme;
    }
}
