import fs from 'fs'

function leerAsincronicoConCallBacks(){
    let ruta = '../package.json'
    fs.readFile(ruta,'utf-8',(error,datos)=>{
        if(error) throw new Error(error)
        let contenObj = JSON.parse(datos)
        let contenStr = JSON.stringify(contenObj,null/ "\t")

        fs.stat(ruta,(error,datos)=>{
            if(error) throw new Error(error)
            let size= datos.size

            let objeto = {
                contenidoString: contenStr,
                contenidoObjeto: contenObj,
                size: size
            }

            console.log(objeto);

            fs.writeFile('../leerAsincronicoConCallBacks.txt',JSON.stringify(objeto),(error)=>{
                if(error)throw new Error(error)
            })
        })
    })
}

console.log("otras operaciones... (demostrando asinconismo)");
leerAsincronicoConCallBacks()