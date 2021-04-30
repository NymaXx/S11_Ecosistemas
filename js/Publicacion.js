class Publicacion{

    constructor(publik){
        this.publik = publik;
    }


    visual = () => {
        let component = document.createElement('div');
        component.className = 'respGnralContainer';

        let publiContainer = document.createElement('div');
        publiContainer.className = 'publiContainer';
        publiContainer.innerHTML = (
            '<div>' + this.publik.publicacion+ '</div>' +
            '<div>' + '@' + this.publik.username+ '</div>'
        );

        let respContainer = document.createElement('div');
        respContainer.className = 'comentContainer';
        respContainer.innerHTML = (
            '<div>' + this.publik.comentario + '</div>'
        );

        let anadirRespContainer = document.createElement('div');
        anadirRespContainer.innerHTML = (
            '<textarea rows="1" cols="7" id="respuesta" placeholder="Escribe una respuesta" >' +'</textarea>' +
            '<button id="responderBtn">' + 'Responder' + '</button>'
        );
        

        component.appendChild(publiContainer);
        component.appendChild(respContainer);
        component.appendChild(anadirRespContainer);
        return component;
    }
}