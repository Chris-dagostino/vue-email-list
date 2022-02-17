const app = new Vue (
    {
        el:'#app',
        data:{
            arrayEmail:[],
            
        },


        mounted(){

            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((result) => {
                        this.arrayEmail.push(result.data.response);
                        
                    }
    
                );
          }
        }
    }
);