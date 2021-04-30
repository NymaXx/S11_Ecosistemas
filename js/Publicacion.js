class Publicacion{

    constructor(publik){
        this.publik = publik;
    }


    visual = () => {
        let component = document.createElement('div');
        component.className = 'respGnralContainer';

        let publicContainer = document.createElement('div');
        publicContainer.className = 'containerFeedPub';
       

        let publica = document.createElement('div');
        publica.className = 'publitext';
        publica.innerHTML = (
            this.publik.publicacion
        );

        let name = document.createElement('div');
        name.className = 'userNamePub';
        name.innerHTML = (
             '@' + this.publik.username
        );

        let respContainer = document.createElement('div');
        respContainer.className = 'comentContainer';
        respContainer.innerHTML = (
            this.publik.comentario  
        );

        let anadirRespContainer = document.createElement('div');
        anadirRespContainer.className = 'InputAndBtnResp';


        let textAreaContainer = document.createElement('textArea');
        textAreaContainer.className = "textRespuesta";
        

        let buttonResp = document.createElement('button');
        buttonResp.className = 'responderBtn';
        buttonResp.innerHTML =('Responder');
        


        anadirRespContainer.appendChild(textAreaContainer);
        anadirRespContainer.appendChild(buttonResp);
        publicContainer.appendChild(publica);
        publicContainer.appendChild(name);
        component.appendChild(publicContainer);
        component.appendChild(respContainer);
        component.appendChild(anadirRespContainer);

        const comentarioNuevo = document.querySelector('textRespuesta');
        buttonResp.addEventListener('click', () => {
            let db = firebase.database();

            let comment = {
                text: comentarioNuevo.val(),
            }
            
            db.ref('publish/-MZYIBP4W6dngZa_59EA/comments').push().set(comment);
            console.log(comentarioNuevo.value);

        });


        return component;
    }
}