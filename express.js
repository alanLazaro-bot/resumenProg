/*Express*/

/*Un framework es un entorno de trabajo que trae resueltas una serie de tareas, automatizando así el desarrollo de cualquier aplicación. Los frameworks de Node.js se utilizan principalmente por su productividad, escalabilidad y velocidad.*/
/*Cada vez que queramos trabajar con express es necesario instalarlo  dentro del proyecto que estamemos desarrollando*/
npm install express --save/*Con el conmando --save estamos guardando, en la propiedad dependencies del archivo package.json, una referencia a la libreria que estamos instalando
*/

const express = require('express'); /*Se requiere el modulo  en nuestro entry point app.js*/
                                        

 const app = express()                                       /*Esto devuelve una funcion que encapsula todas las funcionalidades de Express por lo que se asigna a una variable
                                                                que tiene almacenadas todos los metodos de la libreria disponibles*/
/*Funcionalidades*/

app.get()
app.post()
app.put()
app.patch()
app.delete()

/*Estos metodos van a incluir dos variables, una req y otra res funcionando como requerimiento del usuario y respuesta del servidor*/

/*Creando un servidor HTTP con Express*/

const express = require('express');
const app = express()
app.listen(3000, ()=>console.log('Servidor corriendo'));/*Este métopdo recibe dos parametros: El primero es el puerto en el que queremos que se ejecute la aplicacion. 
                                                        EL segundo (Opcional) es un callback que retorne un console.log que de aviso si el servidor está funcionando*/

app.get('/', (req,res)=>{               /*Al objeto app le pedimos el método get*/

        res.send('Hola mundo!');    /* El métopdo recibe dos parámetros. El primero es un string que define la url de la ruta. El segundo un callback con dos
                                    parámetros: objetos request y response que nos pone a disposicion Express cada vez que trabajamos con algún metodo de petición HTTP*/  
                                    /* 
                                    al objeto response (res) se le pide el método send y como parámetro ingresamos lo que queremos mostrar en el browser*/      
                                    
});

/*Ejemplo*/

const express = require ('express');
const app = express ();
const path = require ('path');  /*Es un módulo de node. modulo nativo. Es para trabajar con nombres o con rutas de archivos. Ayuda a no tener que escribir toda la ruta completa
                                    para que encuentre el archivo al que quiero llegar.*/


app.get('/', function (req, res){                   /*Esta es la ruta raiz. Por cada pagina que tenga nuestra web debemos hacer esta gestión.*/

let file= path.resolve ('home.html')    /*Es un metodo de path(resolve) y lo que hace es resolver la ruta completa del archivo que se ingresa. En este caso el home.html. 
                                            En este caso  Se guarda en una variable y es lo que se envia luego como respuesta.*/

res.sendFile(file);                             /**Le estoy indicando que debe enviar como respuesta */


})

app.get('*', function (req, res){           /*Se utiliza un * como opcion de indicar "cualquier cosa que no esté definida.*/

    
    
    res.sendFile('Not found');              /*Se utiliza un * como opcion de indicar "cualquier cosa que no esté definida. Siempre va al final.*/
    
    
    })

app.listen(3030)  


/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*Se puede utilizar el metodo anterior para llamar archivos en una pagina web.*/

const express = require ('express');
const app = express ();
const path = require ('path');  

app.get('/', function (req, res){                   

let file= path.resolve ('vistas/home.html')    

res.sendFile(file);                             


})

app.get('/index.css', function (req, res){                  /*En este caso cuando se llama a un archivo css desde el head el sistema lo devuelve utilizando el metodo de Express*/ 

    let file= path.resolve ('public/index.css')
    
    res.sendFile('file');              
    
    
    })

    app.get('*', function (req, res){          

    
    
    res.sendFile('Not found');              
    
    
    })

app.listen(3030)  

/*Método para no tener que llamar a cada archivo css que necesitemos u otros archivos estaticos (que no cambian)*/

/*Se crea en la carpeta public una carpeta que se llama styles, donde van todos los css, y otra llamada images*/



const express = require ('express');
const app = express ();
const path = require ('path');  


app.get('/', function (req, res){                   

let file= path.resolve ('vistas/home.html')    

res.sendFile(file);                             


})

app.get('/index.css', function (req, res){    



    let file= path.resolve ('public/index.css')
    
    res.sendFile('file');              
    
    
    })

    app.get('*', function (req, res){   
        console.log(req.url)       

    if(req.url.endsWith('.css')){     /*En caso de que la url que se pide termine con .css usando el endsWith que es un metodo de strings */

        let file= path.resolve ('public/styles/'+ req.url) /*Busca el archivo css dentro de la carpeta y lo devuelve. De esta forma no tenemos que pedir cada archivo por separado */
    
        return res.sendFile('file'); 

    }
    /*en el caso de las imágenes se puede hacer una variante de esto */

    let images = ['.jpg', '.jpeg', '.gif','.png','svg','bmp']    /*Se crea un array con las terminaciones de los tipos de imagenes */
    let ext = req.url.split('.')[1]                     /*Con el split dividimos separamos por el caracter punto. Esto divide en dos. en la posicion 0 lo que está 
                                                        antes del punto y en la posicion 1 lo que está despues (que sería la extension) Entonces en ext guardamos lo que está en la posicion 1 */

    if(images.includes(ext)){                       /* Si la extension está incluida, porque es una imagen y no otro tipo de archivo, entonces envio desde imagenes 
                                                        la ruta que necesito. el includes es un metodo de los arrays. */

        let file= path.resolve ('public/images/'+ req.url) 
    
        return res.sendFile('file'); 

    }

/*Versión mejorada de lo anterior*/
/*Las rutas tienen letras, números y guiones. Los archivos pueden tener eso mismo pero tienen algo que los distingue que son los puntos. En las rutas nunca vamos a poner un punto.
En base a eso ya podemos saber si me estan pidiendo una ruta o un archivo estático.*/

app.get('*', function (req, res){   
     

if(req.url.includes('.')){     

    let file= path.resolve ('public'+ req.url) /*En este caso si tiene un punto se trata de un archivo entonces directamente ingresamos la carpeta public para que revise en general*/

    return res.sendFile('file');; 

    }
    
    res.sendFile('Not found');              
    
    
    })

app.listen(3030)  

