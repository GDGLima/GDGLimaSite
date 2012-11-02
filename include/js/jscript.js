/*
* Author: Carlos Eduardo Piñan Indacochea
* Web: http://www.carlospinan.com
* Date: 27 / 09 / 2012
*/
jQuery(document).ready(function()
{
	// Código para el manejo de la navegabilidad e incorporación de SEO
	
	/**
	* loadPage(filename): Carga la pagina por HashTag
	* filename: Variable que indica el Hashtag a cargar
	* Modificar title, description y keywords en cada uno para poner el SEO.
	**/
	function loadPage(filename)
	{
		var basepath = "include/template/";
		var title = "GDG DevFestLima - El primer DevFest en Peru";
		var description = "GDG DevFestLima - El primer DevFest en Peru";
		var keywords = "GDG DevFest, GDG Lima, ADTG Peru, Google Developers, Google Developer Group";
		var page = basepath + "devfestlima.html";
	
		if(filename == "#call4papers")
		{
			title = "GDG DevFestLima - Call4papers";
			description = "GDG DevFestLima - Call4papers ";
			keywords = "+call4Papers";
			page = basepath + "call4papers.html";
		}
		else if(filename == "#programa")
		{
			title = "GDG DevFestLima - Programa";
			description = "+programa el Google DevFest en Lima";
			keywords = "+programa";			
			page = basepath + "programa.html";
		}
		else if(filename == "#speakers")
		{
			title = "GDG DevFestLima - Speakers";
			description = "GDG DevFestLima - Speakers";
			keywords = "+speakers";			
			page = basepath + "speakers.html";
		}
		else if(filename == "#sponsors")
		{
			title = "GDG DevFestLima - Sponsors";
			description = "GDG DevFestLima - Sponsors";
			keywords = "+sponsors";			
			page = basepath + "sponsors.html";
		}
		else if(filename == "#donde")
		{
			title = "GDG DevFestLima - Donde";
			description = "GDG DevFestLima - Donde";
			keywords = "+donde";			
			page = basepath + "donde.html";
		}
		else if(filename == "#registrate")
		{
			title = "GDG DevFestLima - Programa";
			description = "+registrate el Google DevFest en Lima";
			keywords = "+registrate";
			page = basepath + "registrate.html";
		}
		else if(filename=== "#moderator"){
			title = "GDG DevFestLima - Moderator";
			description = "+Has tus preguntas de las sesiones";
			keywords = "+Moderator";
			page = basepath + "moderator.html";
		}
			else if(filename=== "#materiales"){
			title = "GDG DevFestLima - Materiales";
			description = "+Materiales del DevFestLima";
			keywords = "+Materiales";
			page = basepath + "materiales.html";
		}
			else if(filename=== "#fotos"){
			title = "GDG DevFestLima - Fotos";
			description = "+fotografías";
			keywords = "+Fotos";
			page = basepath + "fotos.html";
		}
		
		jQuery.ajax({
			url: page,
			success: function(data)
			{
				document.title = title;
				$('meta[name=description]').attr('content', description);
				$('meta[name=keywords]').attr('content', keywords);
				$('meta[name=author]').attr('content', 'Carlos Eduardo Pinan Indacochea');
				jQuery('#content').html(data);
			}
		});		
		
	}

	jQuery("#tinynav").change(function()
	{
		var filename = jQuery(this).find("option:selected").val();
		window.location = filename;
		loadPage(filename);
	});
	
	jQuery('nav ul li a').click(function()
	{
		jQuery('nav ul li a').each(function()
		{
			jQuery(this).removeClass('active');
		});
		jQuery(this).addClass('active');
		
		var filename = jQuery(this).attr("href");
		filename = jQuery.trim(filename);
		loadPage(filename);
	});
	
	
	var url = jQuery(location).attr('href');
	var filename = url.match(/.*\/(.*)$/)[1];
	filename = jQuery.trim(filename);

	if(filename == "undefined" || filename == undefined || filename == "")
	{
		jQuery('#tinynav option[value="#devfestlima"]').attr("selected","selected");
		jQuery('nav ul li a[href="#devfestlima"]').addClass("active");
	}
	else
	{
		jQuery('#tinynav option[value="'+filename+'"]').attr("selected","selected");
		jQuery('nav ul li a[href="'+filename+'"]').addClass("active");
	}
	
	loadPage(filename);
	
	// Termina aquí, después de esto puedes agregar el manejo del canvas cuyo ID es #headercanvas
	//initCanvas();
	/*
	var canvas = document.getElementById('headercanvas');
	var canvasW = canvas.width;
	var canvasH = canvas.height;
	var context = canvas.getContext("2d");
	var imgHtml5, imgSun, imgCloud, imgAppEngine;
	
	var html5X = 50, html5Y = 50;
	var sunX = canvasW / 2, sunY = 50, angleSun = 0;
	
	var cloudPosition = 
	[
		{ x:402,y:90,reverse:100,c:0,s:1 },
		{ x:640,y:150,reverse:70,c:0,s:1 },
		{ x:820,y:170,reverse:60,c:0,s:1 }
	];
	
	var appEngine = {startX:-60,startY:-60,x:0,y:0, endX:1100, endY:300, speedX:0, speedY:0};
	appEngine.x = appEngine.startX;
	appEngine.y = appEngine.startY;
	appEngine.speedX = randomFromInterval(5,10);
	appEngine.speedY = randomFromInterval(1,3);
	
	load();
	
	function load()
	{
		imgHtml5 = new Image();
		imgHtml5.src = 'include/images/canvas/chrome.png';
		
		imgSun = new Image();
		imgSun.src = 'include/images/canvas/sun.png';
		
		imgCloud = new Image();
		imgCloud.src = 'include/images/canvas/header_cloud.png';
		
		imgAppEngine = new Image();
		imgAppEngine.src = 'include/images/canvas/appengine.png';
				
		setInterval(function() {
			game();
		}, 1000 / 22);
		
	}
	
	function game()
	{
		onDraw();
		update();
	}
	
	function onDraw()
	{
		var i,x,y;
		context.clearRect(0,0,canvasW,canvasH);
		context.drawImage(imgHtml5, html5X, html5Y, imgHtml5.width, imgHtml5.height);
		
		for(i=0;i<cloudPosition.length;i++)
		{
			x = cloudPosition[i].x;
			y = cloudPosition[i].y;
			context.drawImage(imgCloud, x, y, imgCloud.width, imgCloud.height);
		}
		
		context.save();
		context.translate(imgSun.width * 0.5 + sunX, imgSun.height * 0.5 + sunY);
		context.rotate(-degToRad(angleSun));
		context.translate(-imgSun.width * 0.5 - sunX, -imgSun.height * 0.5 - sunY);
		context.drawImage(imgSun, sunX, sunY);
		context.restore();
		
		context.drawImage(imgAppEngine, appEngine.x, appEngine.y, imgAppEngine.width, imgAppEngine.height);
	
	}
	
	function update()
	{
		var i;
	
		html5X+=5;
		if(html5X > canvasW)
		{
			html5X = -imgHtml5.width;
		}
		
		angleSun++;
		if(angleSun >360)
		{
			angleSun = 0;
		}
		
		for(i=0;i<cloudPosition.length;i++)
		{
			var s = cloudPosition[i].s;
			var reverse = cloudPosition[i].reverse;
			if(s == -1)
			{
				cloudPosition[i].x--;
				//cloudPosition[i].y--;
			}
			else
			{
				cloudPosition[i].x++;
				//cloudPosition[i].y++;
			}
			cloudPosition[i].c++;
			if(cloudPosition[i].c % reverse == 0)
			{
				cloudPosition[i].s*=-1;
				cloudPosition[i].c = 0;
			}
		}
		
		var engineF1 = false, engineF2 = false;
		
		if(appEngine.x + appEngine.speedX < appEngine.endX)
		{
			appEngine.x+= appEngine.speedX;
		}
		else
		{
			engineF1 = true;
		}
		
		if(appEngine.y + appEngine.speedY <= appEngine.endY)
		{
			appEngine.y+= appEngine.speedY;
		}
		else
		{
			engineF2 = true;
		}
		
		if(engineF1 && engineF2)
		{
			appEngine.x = appEngine.startX;
			appEngine.y = appEngine.startY;
			appEngine.speedX = randomFromInterval(5,10);
			appEngine.speedY = randomFromInterval(1,3);
		}
		
	}
	
	function moveGoogleAppEngine()
	{
	}
	*/
	function degToRad(d) {
		return d * 0.0174532925199432957;
	}
	
	function randomFromInterval(from,to)
	{
		return Math.floor(Math.random()*(to-from+1)+from);
	}
	
});