/*
 * Author: Carlos Eduardo Pi\xF1an Indacochea
 * Web: http://www.carlospinan.com
 * Date: 27 / 09 / 2012
 */


(function(global) {
	'use strict';
	var jQuery = global.jQuery;
	jQuery(document).ready(function() {
		// Codigo para el manejo de la navegabilidad e incorporacion de SEO
		/**
		 * loadPage(filename): Carga la pagina por HashTag
		 * filename: Variable que indica el Hashtag a cargar
		 * Modificar title, description y keywords en cada uno para poner el SEO.
		 **/

		function loadPage(filename) {
			var basepath = 'templates/';
			var title = 'GDG DevFestLima - El primer DevFest en Peru';
			var description = 'GDG DevFestLima - El primer DevFest en Peru';
			var keywords = 'GDG DevFest, GDG Lima, ADTG Peru, Google Developers, Google Developer Group';
			var page = basepath + 'devfestlima.html';

			if(filename === '#call4papers') {
				title = 'GDG DevFestLima - Call4papers';
				description = 'GDG DevFestLima - Call4papers ';
				keywords = '+call4Papers';
				page = basepath + 'call4papers.html';
			} else if(filename === '#programa') {
				title = 'GDG DevFestLima - Programa';
				description = '+programa el Google DevFest en Lima';
				keywords = '+programa';
				page = basepath + 'programa.html';
			} else if(filename === '#speakers') {
				title = 'GDG DevFestLima - Speakers';
				description = 'GDG DevFestLima - Speakers';
				keywords = '+speakers';
				page = basepath + 'speakers.html';
			} else if(filename === '#sponsors') {
				title = 'GDG DevFestLima - Sponsors';
				description = 'GDG DevFestLima - Sponsors';
				keywords = '+sponsors';
				page = basepath + 'sponsors.html';
			} else if(filename === '#donde') {
				title = 'GDG DevFestLima - Donde';
				description = 'GDG DevFestLima - Donde';
				keywords = '+donde';
				page = basepath + 'donde.html';
			} else if(filename === '#registrate') {
				title = 'GDG DevFestLima - Programa';
				description = '+registrate el Google DevFest en Lima';
				keywords = '+registrate';
				page = basepath + 'registrate.html';
			} else if(filename === '#moderator') {
				title = 'GDG DevFestLima - Moderator';
				description = '+Has tus preguntas de las sesiones';
				keywords = '+Moderator';
				page = basepath + 'moderator.html';
			} else if(filename === '#materiales') {
				title = 'GDG DevFestLima - Materiales';
				description = '+Materiales del DevFestLima';
				keywords = '+Materiales';
				page = basepath + 'materiales.html';
			} else if(filename === '#fotos') {
				title = 'GDG DevFestLima - Fotos';
				description = '+fotograf\xEDas';
				keywords = '+Fotos';
				page = basepath + 'fotos.html';
			}

			jQuery.ajax({
				url: page,
				success: function(data) {
					document.title = title;
					jQuery('meta[name=description]').attr('content', description);
					jQuery('meta[name=keywords]').attr('content', keywords);
					jQuery('meta[name=author]').attr('content', 'Carlos Eduardo Pinan Indacochea');
					jQuery('#content').html(data);
				}
			});

		}

		jQuery('#tinynav').change(function() {
			var filename = this.value;
			window.location = filename;
			loadPage(filename);
		});
		var $this;
		jQuery('nav ul li a').click(function() {
			jQuery('nav ul li a').removeClass('active');
			$this=jQuery(this);
			$this.addClass('active');
			var filename = $this.attr('href');
			filename = jQuery.trim(filename);
			loadPage(filename);
		});


		var url = jQuery(location).attr('href');
		var filename = url.match(/.*\/(.*)$/)[1];
		filename = jQuery.trim(filename);

		if(!filename) {
			jQuery('#tinynav option[value="#devfestlima"]').attr('selected', 'selected');
			jQuery('nav ul li a[href="#devfestlima"]').addClass('active');
		} else {
			jQuery('#tinynav option[value="' + filename + '"]').attr('selected', 'selected');
			jQuery('nav ul li a[href="' + filename + '"]').addClass('active');
		}

		loadPage(filename);
	});
})(window);