
const fs = require("fs")

const datos = fs.readFileSync("./tareas.json", "utf-8");

const tareas = JSON.parse(datos);

//console.log(tareas)

const accion = process.argv[2];

   switch(accion){
      case "listar":
         console.log("---------------------------");
         console.log("listado de tareas");
         console.log("---------------------------");

         let i=1 ;
         for(let tarea of tareas){
            console.log((i++) + ". " + tarea.titulo + " - " + tarea.estado)
         }
         break;
      
      case undefined:
         console.log("--------------------------------------");
         console.log("Atención - tienes que pasar una accion");
         console.log("Las acciones disponibles son: Listar");
         console.log("--------------------------------------")
         
         break;
        
      default:
         console.log("--------------------------------------")
         console.log("No entiendo que quieres hacer")
         console.log("Las acciones disponibles son: Listar")
         console.log("--------------------------------------")   
         break;
   }

   module.exports={
      accion
   }