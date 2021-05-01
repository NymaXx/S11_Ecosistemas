class Publicacion{

    constructor(publik){
        this.publik = publik;
    }


    visual = () => {
        //console.log(this.publik.id);
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
        

            buttonResp.addEventListener('click', ()=>{
                const db = firebase.database();
                let text= textAreaContainer.value;
                //console.log(text);

               let id= db.ref('publish/' + this.publik.id + '/comments').push().key;
               //console.log(id);
               let newComment = {
                   id: id,
                   textCome: text,
               }

               db.ref('publish/' + this.publik.id + '/comments/' + id).set(newComment);

               
               db.ref('publish/' +this.publik.id + '/comments').on('value', (data)=>{
                   data.forEach(answer => {
                    let valor =answer.val();
                    console.log(valor.textCome);
                    
                    let res = new Respuesta(valor);
                    anadirRespContainer.appendChild(res.visual());
                       
                   });
               })
            });

        
        anadirRespContainer.appendChild(textAreaContainer);
        anadirRespContainer.appendChild(buttonResp);
        publicContainer.appendChild(publica);
        publicContainer.appendChild(name);
        component.appendChild(publicContainer);
        component.appendChild(respContainer);
        component.appendChild(anadirRespContainer);

        return component;
    }
}