import fs from 'fs'

async function leerAsincronicoConPromises(){
    
        let ruta = '../package.json'
        let objeto = {}

        fs.promises.readFile(ruta,'utf-8')

        .then(info=>{
        let contenObj = JSON.parse(info)
        objeto.contenObj = contenObj
        objeto.contenStr =  JSON.stringify(contenObj,null/ "\t")
        return fs.promises.stat(ruta)
        })

        .then(stats=>{
            objeto.size = stats.size
            console.log(objeto);
            return fs.promises.writeFile('../leerAsincronicoConPromises.txt',JSON.stringify(objeto))
        })

        .catch(error=>console.log(error))
     }
    


console.log("otras operaciones... (demostrando asinconismo)");
leerAsincronicoConPromises()