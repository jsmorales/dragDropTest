# dragDropTest
Plugin jquery para crear test´s de apareamiento o relación arrastrando conceptos hacia las definiciones.

# Inicio Rápido

Instancia del plugin.
```JavaScript
$("#pluginExample").dragDropTest({
  definitions: {
    1: "Definición 1",
    2: "Definición 2",
    3: "Definición 3",			
  },
  //se definen los drags a los drops
  drags: [
    {				
      content: "Contenido drag 1",
      goesWith: 2 //para drop 1 drag numero 2
    },
    {				
      content: "Contenido drag 2",
      goesWith: 1 //para drop 2 numero del drag numero 1
    },
    {				
      content: "Contenido drag 3",
      goesWith: 3 //para drop 3 numero del drag numero 3
    }			
  ]
});
```
# Opciones por defecto
Estas son las opciones disponibles para este plugin, las clases col son del [bootstrap grid system](https://getbootstrap.com/docs/3.3/css/#grid).
```JavaScript
header: "Asocie cada elemento con la definición correspondiente.",//Encabezado que explica la actividad a realizar.
genHeight:"30px",//alto general para todos los elementos.
classColDroppableConcept: "col-xs-2",//tamaño de columna hacia donde se arrastra el concepto.
classColDroppableDefinition: "col-xs-6",//tamaño de columna de las definiciones.
classColDraggable: "col-xs-2",//tamaño de columna de los arrastrables.
classOffsetColGen: "col-md-offset-1",//tamaño de columna offset para centrar el contenido.
contButtonValidate: "Validar",//contenido que lleva el botón que hace la validación del test.
attempts:2,//cantidad de intentos a realizar.
```
# Callbacks
Definición de los callbacks por defecto, se usan en cada uno de los eventos indicados: 
```JavaScript
//Al inicio del plugin
start: function(){
  console.log("Inicia el widget!")
},
//Al completar de forma correcta el test
correct: function(){
  alert("Correcto!, ha completado el test.")
},
//Al validar de forma erronea el test
error: function(attempts){
  alert("Hay que revisarlo, hay elementos mal ubicados.")
},
//Al fallar en el test agotando los intentos definidos (por defecto 2)
fail: function(){
  alert("Ha fallado en completar el test.")
}
```
