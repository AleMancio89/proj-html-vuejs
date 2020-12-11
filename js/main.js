/* 
Riprodurre il layout desktop del tema wordpress "The keynote"
*/

const app = new Vue({
    el: '#root',
    data: {
        header: [...navbar],
        selectedMenu: '',
        speakers: [...speakers],
        socials: [...socials],
        footerLinks: [...footerLinks],
        photos: [...photoGrid],
        copyrightLinks: [...copyrightLinks],
        sponsors: [...sponsors],
    },
    methods: {
        //Salva la selezione del menu navbar
        selectMenu(link) {
            this.selectedMenu = link;
        },
        //Scroll verso destra di 285px (lunghezza card singolo speaker)
        scrollRight() {
            let element = document.getElementById("scrollable");
            element.scrollLeft += 285;
        },
        //Scroll verso sinistra di 285px (lunghezza card singolo speaker)
        scrollLeft() {
            let element = document.getElementById("scrollable");
            element.scrollLeft -= 285;
        }

    }

    

})