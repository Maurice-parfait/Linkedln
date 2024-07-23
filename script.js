const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const closemenu = document.getElementById('closemenu');
const textpost = document.getElementById('textpost');
const btnpost = document.getElementById('btnpost');
const menuprofille= document.getElementById('menuprofille');
const btnvous = document.getElementById('btnvous');

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

    