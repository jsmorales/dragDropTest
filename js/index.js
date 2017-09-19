$(function(){

    $("#dragDropTest").dragDropTest({
    	header: "Here goes the test definition. ",
    	classColDragDropHeader: "col-xs-11",
    	genHeight: '65px',
    	definitions: {
			1: "goesWith: drag 2 -- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at diam fringilla, commodo lorem a, tincidunt turpis. Vivamus nec lorem id quam efficitur faucibus.",
			2: "goesWith: drag 5 -- Curabitur iaculis scelerisque dignissim. Sed vitae lorem est. Nulla maximus et dolor ullamcorper luctus. Curabitur sagittis lorem nunc, id efficitur lectus hendrerit vel.",
			3: "goesWith: drag 1 -- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at diam fringilla, commodo lorem a, tincidunt turpis. Vivamus nec lorem id quam efficitur faucibus.",
			4: "goesWith: drag 3 -- Curabitur iaculis scelerisque dignissim. Sed vitae lorem est. Nulla maximus et dolor ullamcorper luctus. Curabitur sagittis lorem nunc, id efficitur lectus hendrerit vel.",
			5: "goesWith: drag 4 -- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at diam fringilla, commodo lorem a, tincidunt turpis. Vivamus nec lorem id quam efficitur faucibus."
		},
		//definition of drags and drops
		drags: [
			{
				//content: "<img src='img/fecha_2006_2010.png'>",
				content: "Drag#1",
				goesWith: 2 //para drop 1 drag numero 2
			},
			{
				//content: "<img src='img/fecha_1999_2005.png'>",
				content: "Drag#2",
				goesWith: 5 //para drop 2 numero del drag numero 5
			},
			{
				//content: "<img src='img/fecha_2012_2015.png'>",
				content: "Drag#3",
				goesWith: 1 //para drop 3 numero del drag numero 1
			},
			{
				//content: "<img src='img/fecha_2012_2015.png'>",
				content: "Drag#4",
				goesWith: 3 //para drop 4 numero del drag numero 3
			},
			{
				//content: "<img src='img/fecha_2012_2015.png'>",
				content: "Drag#5",
				goesWith: 4 //para drop 5 numero del drag numero 4
			}
		],
		contButtonValidate: "Validate"		
    });
})