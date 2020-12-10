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
        copyrightLinks: [...copyrightLinks]
    },
    methods: {
        selectMenu(link) {
            this.selectedMenu = link;
        },

    }

    

})