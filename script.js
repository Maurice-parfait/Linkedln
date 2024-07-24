const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const closemenu = document.getElementById('closemenu');
const textpost = document.getElementById('textpost');
const btnpost = document.getElementById('btnpost');
const menuprofille= document.getElementById('menuprofille');
const btnvous = document.getElementById('btnvous');

const parg_cacher = document.getElementById("parg_cacher");
const btn_plus = document.getElementById("btn_plus");
const btn_moins = document.getElementById("btn_moins");

    menuButton.addEventListener('click', () => {
      menu.style.display = 'block';

        closemenu.addEventListener('click', () => {
            menu.style.display = 'none';
        })
    });

    textpost.addEventListener('input', ()=> {
        btnpost.style.cursor = 'pointer';
    })

    btnvous.addEventListener('click', () => {

        if (menuprofille.style.display === 'block') {
            menuprofille.style.display = 'none';
        } else {
            menuprofille.style.display = 'block';
        }
    });

    // la partie voir plus 
    btn_plus.addEventListener('click', ()=>{
        parg_cacher.style.display = "block";
        btn_plus.style.display = 'none';
        btn_moins.style.display = 'block'

        // voir moins
        btn_moins.addEventListener('click', function() {
            parg_cacher.style.display = 'none';
            btn_plus.style.display = 'block';
            btn_moins.style.display = 'none';
        });
    });
    

    // le script pour  la responsivité 
    const btnimage = document.getElementById("btnimage");
    const gridgauche = document.getElementById("gridgauche");
    const postrespon =document.getElementById("postrespon");
    const closepostrespo = document.getElementById("closepostrespo");
    const menupostresp = document.getElementById("menupostresp");
    const postimage = document.getElementById("postimage");
    // const importimage = document.getElementById("importimage");


    btnimage.addEventListener('click', ()=> {

        if (gridgauche.style.display  === 'block') {
            gridgauche.style.display = 'none';
        }else {
            gridgauche.style.display  = 'block';
        }

    });

    postrespon.addEventListener('click', ()=> {
        menupostresp.style.display = 'block';
        closepostrespo.addEventListener('click', ()=> {
            menupostresp.style.display = "none";
        });
    });

    