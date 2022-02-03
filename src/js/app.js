/*MENU MOBILE*/

const btnMenu = document.getElementById("btnMobile");

const activeMenu = () => {

    const logo = document.querySelector(".logo");

    const img = document.getElementById("hamburguer")

    const nav = document.getElementById("nav");
    nav.classList.toggle("active");

    if(nav.classList.contains("active")){
        img.src = "assets/img/icon-close.svg";

        logo.src = "assets/img/logo-white.svg"
    }else{
        img.src = "assets/img/icon-hamburger.svg"

        logo.src = "assets/img/logo-bookmark.svg"
    }

}
btnMenu.addEventListener("click", activeMenu);


function tabNav(){
    const tabLinks = document.querySelectorAll(".btns-tab button");

    const tabContent = document.querySelectorAll(".js-tab-content section");


    if(tabLinks.length && tabContent.length){
        const activeTab = (index) =>{
            tabContent.forEach((c)=>{
                c.classList.remove("ativo");
            })
            tabContent[index].classList.add("ativo");
        }

        tabLinks.forEach((item, index) =>{
            item.addEventListener("click", ()=>{
                activeTab(index);
            });
        })
    }
}
tabNav()

function accordion(){
    const faqLista = document.querySelectorAll(".faq-lista dt");

    function accordionAtivo(){
        this.classList.toggle("active")
        this.nextElementSibling.classList.toggle("active")
    }

    faqLista.forEach((item) =>{
        item.addEventListener("click", accordionAtivo)
    })
}

accordion()