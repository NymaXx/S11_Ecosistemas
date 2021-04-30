const db = firebase.database();
const publicarBtn = document.getElementById('publicarBtn');
const userName = document.getElementById('userName');
const publicacion = document.getElementById('publicacion');
const respuesta = document.getElementById('respuesta');
const publiContainer = document.getElementById('publiContainer');

let comentarios='';



//hacer una publicacion
const publicar = () => {
    if(userName.value === '' || publicacion.value === ''){
        alert("Llena todos los campos para poder publicar");
        /*console.log('pilas pacho');*/
        return; 
    }
    
    let publik = {
        username: userName.value,
        publicacion: publicacion.value,
        comentario: comentarios,
    };

    db.ref('publish').push().set(publik);

    userName.value = '';
    publicacion.value = '';

}


//lectura
const leer = () => {
    db.ref('publish').on('value',  (data) => {
        data.forEach(
            publicacion => {
                let valor =publicacion.val();
                console.log(valor.publicacion);
                

                let feed = new Publicacion(valor);
                publiContainer.appendChild(feed.visual());
        });

    });
}


leer();



//acciones de los botones
publicarBtn.addEventListener('click', publicar);