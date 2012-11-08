/*
* author: Eduardo José Medina Alfaro
* email: emedinaa@qd.pe
* GDG Lima Octubre 2012 
*/

		var BGURl= "include/images/canvasedu/fondo.png"
		var CLOUD01URL= "include/images/canvasedu/cloud-md.png"
		var CLOUD02URL= "include/images/canvasedu/cloud-md.png"
		var CHROMEURL= "include/images/canvasedu/chrome.png"
		var APPENGINEURL= "include/images/canvasedu/appengine.png"
		var ANDROIDURL= "include/images/canvasedu/android2.png"
		var SUNURL = "include/images/canvasedu/sun3.png"
		var HTML5URL = "include/images/canvasedu/html5_p1.png"

		var canvas, stage;
		var canvas, stage;
		var mouseTarget;	
		var dragStarted;
		var update = true;
		var container;

		var imageCloud;
		var imageChrome;
		var imagePointer;
		var imageAppEngine;
		var imageSun;

		var bmImage;
		var bmImageCloud;
		var bmImageCloud2;
		var bmImageCloud3;
		var bmImageCloud4;

		var bmImage2;
		var bmImageChrome;
		var bmImageChrome;
		var bmImageAppEngine;
		var bmImageSun;
		var bmImageHtml5;
				
		var caminar=1;
		var saltar=2;
		var estado=1;//caminar
		var caminar2=3;//caminar
		var salida=4;//salida

		//android
		var POSYANDROID=265;
		var LIMITW=1024;
		var LIMITH=300;
		
		//Sun
		var sunangle = 0;

		function initcanvas()
		{
			//init canvas -------------
			canvas = document.getElementById("headercanvas");
			stage = new createjs.Stage(canvas);

			//img ------------------
			imageCloud = new Image();
			imageCloud.src = CLOUD01URL;
			imageCloud.onload=handleImageCloud;

			imageCloud2 = new Image();
			imageCloud2.src = CLOUD01URL;
			imageCloud2.onload=handleImageCloud2;	

			imageCloud3 = new Image();
			imageCloud3.src = CLOUD01URL;
			imageCloud3.onload=handleImageCloud3;		
			
			imageCloud4 = new Image();
			imageCloud4.src = CLOUD01URL;
			imageCloud4.onload=handleImageCloud4;

			imageChrome=new Image();
			imageChrome.src=CHROMEURL;
			imageChrome.onload=handleImageChrome;

			imageAppEngine=new Image();
			imageAppEngine.src=APPENGINEURL;
			imageAppEngine.onload=handleImageAppEngine;
			
			imageSun = new Image();
			imageSun.src = SUNURL;
			imageSun.onload = handleImageSun;
			
			imageHtml5 = new Image();
			imageHtml5.src = HTML5URL;
			imageHtml5.onload = handleImageHtml5;

			createAndroid();

			//ticker -----------------
			createjs.Ticker.setFPS(60);
			createjs.Ticker.addListener(window);
		}
		
		function handleImageSun(event)
		{
			var image = event.target;
			bmImageSun = new createjs.Bitmap(image);
			stage.addChild(bmImageSun);
			bmImageSun.regX = image.width / 2;
			bmImageSun.regY = image.height / 2;
			bmImageSun.x = 530 + bmImageSun.regX;
			bmImageSun.y = 60 + bmImageSun.regY;
			bmImageSun.name = "bm_Sun";
		}

		function handleImageCloud(event)
		{
			var image=event.target;
			bmImageCloud=new createjs.Bitmap(image);
			stage.addChild(bmImageCloud);
			bmImageCloud.alpha=0.8;
			bmImageCloud.x=1300;
			bmImageCloud.y=100;

			bmImageCloud.name="bm_ImageCloud";
			
		}
		function handleImageCloud2(event)
		{
			var image=event.target;
			bmImageCloud2=new createjs.Bitmap(image);
			stage.addChild(bmImageCloud2);
			bmImageCloud2.alpha=0.8;
			bmImageCloud2.x=0;
			bmImageCloud2.y=40;

			bmImageCloud2.name="bm_ImageCloud2";
		}		

		function handleImageCloud3(event)
		{
			var image=event.target;
			bmImageCloud3=new createjs.Bitmap(image);
			stage.addChild(bmImageCloud3);
			bmImageCloud3.alpha=0.8;
			bmImageCloud3.x=1300;
			bmImageCloud3.y=100;
		}		

		function handleImageCloud4(event)
		{
			var image=event.target;
			bmImageCloud4=new createjs.Bitmap(image);
			stage.addChild(bmImageCloud4);
			bmImageCloud4.alpha=0.8;
			bmImageCloud4.x=0;
			bmImageCloud4.y=100;
		}		

		function handleImageHtml5(event)
		{
			var image=event.target;
			bmImageHtml5=new createjs.Bitmap(image);
			stage.addChild(bmImageHtml5);
			//bmImageHtml5.alpha=0.8;
			bmImageHtml5.x=750;
			bmImageHtml5.y=180;
		}

		var posxChrome=100;
		var posyChrome=100;
		function handleImageChrome(event)
		{
			var image=event.target;
			bmImageChrome=new createjs.Bitmap(image);
			stage.addChild(bmImageChrome);
			bmImageChrome.x=posxChrome;
			bmImageChrome.y=posyChrome;
			bmImageChrome.scaleX=0.7;
			bmImageChrome.scaleY=0.7;

			bmImageChrome.name="bm_ImageChrome";
		}	

		var posxAppEngine=1024;
		var posyAppEngine=100;
		function handleImageAppEngine(event)
		{
			var image=event.target;
			bmImageAppEngine=new createjs.Bitmap(image);
			stage.addChild(bmImageAppEngine);
			bmImageAppEngine.x=posxAppEngine;
			bmImageAppEngine.y=posyAppEngine;

			bmImageAppEngine.scaleX=0.7;
			bmImageAppEngine.scaleY=0.7;

			bmImageAppEngine.name="bm_ImageAppEngine";
		}

		var grant;
		var mover=0;
		function createAndroid()
		{
			//console.log("android");
			var ss = new createjs.SpriteSheet({
				"animations":
				{
					//frame de inicio,frame de fin,"nombre de animación", sleep
					//run = run2  
					"run": [1,8,"run",3],"run2":[9,17,"run",3]},
					"images": [ANDROIDURL],
					"frames":
						{
							"height":40,
							"width":36,
							"regX":0,
							"regY":0,
							"count":12///18
							//"count":9
						}
				});
			grant = new createjs.BitmapAnimation(ss);
			grant.x = 0;
			grant.y = POSYANDROID;
			grant.gotoAndPlay("run");
			
			stage.addChild(grant);
			stage.onMouseDown = handleJumpStart;
		}

		//move -----------------------------
		function moveCloud()
		{
			bmImageCloud.x-=Math.random()/2;

			if (bmImageCloud.x<-20) 
			{
				bmImageCloud.x=1300;	
			};

			if (bmImageCloud.y>50) 
			{
				bmImageCloud.y-=Math.random()/10;
			};
			
		}
		var estadoCluod="subir";
		function moveCloud2()
		{
			if (bmImageCloud2.x>1320) {
				bmImageCloud2.x=-20;
			};
			switch(estadoCluod){
				case "subir":
				bmImageCloud2.y-=0.03;
				bmImageCloud2.x+=Math.random()/2;
				if(bmImageCloud2.y<=50){
					estadoCluod="bajar";
				};
				return;
				case "bajar":
				bmImageCloud2.y+=0.03;
				bmImageCloud2.x+=Math.random()/2;
				if (bmImageCloud2.y>=100) {
					estadoCluod="subir";
				};
				return;
			}
		}

		function moveCloud3()
		{
			bmImageCloud3.x-=Math.random()/2;

			if (bmImageCloud3.x<-20) 
			{
				bmImageCloud3.x=1300;	
			};

			/*if (bmImageCloud.y>50) 
			{
				bmImageCloud.y-=Math.random()/10;
			};*/
			
		}
		function moveCloud4()
		{
			bmImageCloud4.x-=Math.random()/2;

			if (bmImageCloud4.x>1320) 
			{
				bmImageCloud4.x=-20;	
			};
		}
		
		var auxPosxChrome=0;
		var auxPosyChrome=0;
		var angle=0;

		function moveChrome()
		{

			bmImageChrome.x=512+Math.sin(angle)*1320;
			bmImageChrome.y=1000+Math.cos(angle)*1000;

			if (angle>=3.6) 
			{
				angle=2.5;
			};
			if (angle<=2.4) 
			{
				angle=2.5
			};

			angle+=0.0008;
		}
		var angle1=0;
		function moveAppEngine()
		{

			bmImageAppEngine.x=512-Math.sin(angle1)*1320;
			bmImageAppEngine.y=1000+Math.cos(angle1)*1000;

			if (angle1>=3.6) 
			{
				angle1=2.5;
			};
			if (angle1<=2.4) 
			{
				angle1=2.5
			};

			angle1+=0.0008;
		}

		//android ---------------------
		var vxAndroid=1.8;
		var vyAndroid=-3.8;
		var ayAndroid=0.2;
		var outside=1320;
		var vyPointer=0;
		var ayPointer=0.2;
		var estadoPointer="move_Pointer"

		function handleJumpStart()
		{
			grant.gotoAndPlay("jump");
		}
		
		function evalueMove()
		{
			switch(estado)
			{
				case caminar:
					wallAndroid();
				return;
				case caminar2:
					wallAndroid();
				return;
				case salida:
					moveHtml5();
					return;
				case saltar:
					parabolic();
				return
			}
		}
		function moveAndroid()
		{
			if(grant.x<240)
			{
				estado=caminar;
			}else if(grant.x>=240 && grant.x<800)
			{
				if(estado==caminar)
				{
					vyAndroid=-3.8;
					estado=saltar;
				}
			}else if(grant.x>=800 && grant.x<1200)
			{
				estado=salida;
			}else if(grant.x>=1200)
			{
				grant.x=0;
				grant.y=POSYANDROID;
				bmImageHtml5.x=750
				bmImageHtml5.y=180
				estado=caminar;
			}
		}
		function wallAndroid()
		{
			grant.x+=vxAndroid;
		}
		
		function moveSun()
		{
			bmImageSun.rotation = -sunangle;
			sunangle++;
			if(sunangle > 360)
				sunangle = 0;
		}

		function moveHtml5()
		{
			bmImageHtml5.x+=1.2;
			bmImageHtml5.y-=0.7;

			grant.x=bmImageHtml5.x+40;
			grant.y=bmImageHtml5.y+88;
		}

	//move ----------------------
		function tick() 
		{
			if(bmImageCloud){moveCloud()};
			if(bmImageCloud2){moveCloud2()};
			if(bmImageCloud3){moveCloud3()};
			if(bmImageCloud4){moveCloud4()};

			if(bmImageChrome){moveChrome()};
			if(bmImageAppEngine){moveAppEngine()};
			if(bmImageSun){moveSun();}
			moveAndroid();
			evalueMove();
			//movePointer();
			stage.update();
		}

	//Utils -------------------------

	function parabolic()
	{
		grant.x+=2.5
		grant.y+=vyAndroid
		vyAndroid+=ayAndroid;//dismunir velocidad en y

		if(grant.y>=POSYANDROID)
		{
			estado=caminar2;
		}else
		{
			estado=saltar;
		}
	}
