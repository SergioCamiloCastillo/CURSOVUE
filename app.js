const app=new Vue({
    el:'#app',

    
    data:{
        titulo:'GYM con Vue',
        tareas:[],

        
        nuevaTarea:''


    },
    methods:{
        agregarPalabra(){
           
            this.tareas.push({
                nombre:this.nuevaTarea,
                status:false

            });
            this.nuevaTarea='';
        },
        editarTarea(index){
            
            this.tareas[index].status=true;
        },
        eliminarTarea(index){
            this.tareas.splice(index,1);
        }
        
    }




});