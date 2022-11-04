import fs from 'fs'

async function leerAsincronicoConAsyncAwait(){
    try{
        let ruta = '../package.json'
        let contenObj = JSON.parse(await fs.promises.readFile(ruta,'utf-8'))
        let contenStr = JSON.stringify(contenObj)
        let size = (await fs.promises.stat(ruta)).size


        let objeto = {
            contenidoString: contenStr,
            contenidoObjeto: contenObj,
            size: size
        }

        console.log(objeto);

        await fs.promises.writeFile('../leerAsincronicoConAsyncAwait.txt',JSON.stringify(objeto))

        
     }
    catch(error){
        console.log(error);
    }
}

console.log("otras operaciones... (demostrando asinconismo)");
leerAsincronicoConAsyncAwait()