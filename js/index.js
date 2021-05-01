const db = firebase.database();
const publicarBtn = document.getElementById('publicarBtn');
const userName = document.getElementById('userName');
const publicacion = document.getElementById('publicacion');
const publiContainer = document.getElementById('publiContainer');





//hacer una publicacion
const publicar = () => {
    let referencia = db.ref('publish').push();

    if(userName.value === '' || publicacion.value === ''){
        alert("Llena todos los campos para poder publicar");
        /*console.log('pilas pacho');*/
        return; 
    }

  
    
    let publik = {
        id: referencia.key,
        username: userName.value,
        publicacion: publicacion.value,

    };

    referencia.set(publik);

    userName.value = '';
    publicacion.value = '';

}


//lectura
const MostrarPublicaciones = () => {
    db.ref('publish').on('value',  (data) => {
        publiContainer.innerHTML = '';
        data.forEach(
            publicacion => {
                let valor =publicacion.val();
                console.log(valor.publicacion);
                

                let feed = new Publicacion(valor);
                publiContainer.appendChild(feed.visual());
        });

    });
}


//comentar

const comentar = () => {

}






//acciones 
publicarBtn.addEventListener('click', publicar);
MostrarPublicaciones();