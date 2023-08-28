//seleccionar elemetos qu esten dentros de la sublista
let list_Elements = document.querySelectorAll('.list__button-click');

list_Elements.forEach(list_Element =>
    {   //evento de dar click
        list_Element.addEventListener('click', ()=> {
            //cambio de posicion de la flecha
            list_Element.classList.toggle('arrow');

            let height = 0;
            //tomar el hermano adyacente
            let menu = list_Element.nextElementSibling;
            //determinar el tamaño necesario para no mostrar elementos
            console.log(menu.scrollHeight)
            //clientHeight validar el tamaño
            if(menu.clientHeight == "0"){
                //cuando el tamaño es 0 que pase al necesario para que se muestre
                //el submenu
                height=menu.scrollHeight;
            }

            menu.style.height = height+"px";
        })
    });

document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('deslis');
  const nav = document.querySelector('.nav');


  menuButton.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuButton.classList.toggle('active');
  });
});

let mi_Imagen = document.getElementById('foto');
let texto_Foto = document.getElementById('texto_Nombre');

mi_Imagen.addEventListener('mouseover', ()=>{
  mi_Imagen.style.transform = 'translate(-15px, -10px)';
  texto_Foto.style.display = 'block';
});

mi_Imagen.addEventListener('mouseout', ()=>{
  mi_Imagen.style.transform = 'translate(0,0)';
  texto_Foto.style.display = 'none';
});