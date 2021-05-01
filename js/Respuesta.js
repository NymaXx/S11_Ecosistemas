class Respuesta{

    constructor(comments){
        this.comments = comments;
    }


    visual = () => {
        let answer = document.createElement('div');
        answer.innerHTML = (
            this.comments.textCome
        );
    }


}