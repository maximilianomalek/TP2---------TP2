import fs from 'fs'

function leerSincronico(){
    try{
        let ruta = '../package.json'
        let contenObj = JSON.parse(fs.readFileSync(ruta,"utf-8"))
        let contenStr = JSON.stringify(contenObj,null/ "\t")
        let size = fs.statSync(ruta).size


        let objeto = {
            contenidoString: contenStr,
            contenidoObjeto: contenObj,
            size: size
        }

        console.log(objeto);

        fs.writeFileSync("../leerSincronico.txt",JSON.stringify(objeto))
        
     }
    catch(error){
        console.log(error);
    }
}

leerSincronico()