const db = firebase.database();
const publicarBtn = document.getElementById('publicarBtn');
const userName = document.getElementById('userName');
const publicacion = document.getElementById('publicacion');




const publicar = () => {
    alert('tu jefa');
    let usuario = {
        username: userName.value,
        publicacion: publicacion.value,
    };
    db.ref('users').push().set(usuario);

    userName.value = '';
    publicacion.value = '';

}


publicarBtn.addEventListener('click', publicar);