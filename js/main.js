const app = new Vue({
    el: '#root',
    data: {
        header: [...navbar],
        selectedMenu: '',
        speakers: [...speakers],
    },
    methods: {
        selectMenu(link) {
            this.selectedMenu = link;
        },

    }

    

})