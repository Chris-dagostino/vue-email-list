const app = new Vue (
    {
        el:'#app',
        data:{
            arrayEmail:[],
        },

        mounted(){

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    this.arrayEmail = response.data.response;
                }
            );
        }
    }
);