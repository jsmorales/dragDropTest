$(function(){

    $("#dragDropTest").dragDropTest({
    	genHeight: '65px',
    	definitions: {
			1: "Producto de las primeras reglas fiscales aplicadas a las entidades territoriales mediante las cuales se robustieron las finanzas regionales y locales.",
			2: "Se expidieron las reglas fiscales para entidades territoriales.",
			3: "Se registra la tendencia del agregado de las entidades territoriales a generar superavit.",
			4: "Superavit de los gobiernos territoriales, originado en el presupuesto bianual de regalías y las dificultades de la operabilidad del esquema de aprobación y ejecución de proyectos.",
			5: "Los gobiernos regionales y locales han mantenido consistentemente resultados fiscales positivos como efecto de la aplicación de las reglas fiscales."
		},
		//se definen los drags a los drops
		drags: [
			{
				//content: "<img src='img/fecha_2006_2010.png'>",
				content: "Periodo del 2006 a 2010",
				goesWith: 2 //para drop 1 drag numero 2
			},
			{
				//content: "<img src='img/fecha_1999_2005.png'>",
				content: "Periodo de 1999 a 2005",
				goesWith: 5 //para drop 2 numero del drag numero 5
			},
			{
				//content: "<img src='img/fecha_2012_2015.png'>",
				content: "Periodo del 2012 a 2015",
				goesWith: 1 //para drop 3 numero del drag numero 1
			},
			{
				//content: "<img src='img/fecha_2012_2015.png'>",
				content: "Periodo del 2001 a 2015",
				goesWith: 3 //para drop 4 numero del drag numero 3
			},
			{
				//content: "<img src='img/fecha_2012_2015.png'>",
				content: "Periodo del 1997 a 2003",
				goesWith: 4 //para drop 5 numero del drag numero 4
			}
		],
		/*start: function(){
			alert("Inicia el test!")
		}*/
    });
})