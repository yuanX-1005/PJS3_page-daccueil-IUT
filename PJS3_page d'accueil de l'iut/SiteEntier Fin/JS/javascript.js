

//Animation pour la div rentrée
$('.rentrée2020').removeClass('invisible'); // affiche la div
$('.rentrée2020').addClass('anim-opaci'); // donne l'animation pour les widgets en CSS3
$('.img-iut').removeClass('invisible'); // affiche la div
$('.img-iut').addClass('anim-opaci'); // donne l'animation pour les widgets en CSS3

//Animation pour la div diplome
var posdivdiplome = $(".section_diplome").position().top; //recup la position de la div actu
console.log(posdivdiplome) //verif sur la console a titre perso pas pour l'utilisateur

//animation du zoom
$(window).scroll(function() {
    if ($(this).scrollTop() > (posdivactu - 1000)) { // -1000 pour avoir le temps de voir la div
        $('.dip_container').removeClass('invisible'); // affiche la div
				$('.dip_container').addClass('anim-zoomin');
    }
});
//animation de l'opacité
$(window).scroll(function() {
    if ($(this).scrollTop() > (posdivactu - 1000)) { // -1000 pour avoir le temps de voir la div
        $('.section_section_diplome').removeClass('invisible'); // affiche la div
				$('.section_section_diplome').addClass('anim-opaci');
    }
});

//Animation pour la div Actualités
var posdivactu = $(".section_actualites").position().top; //recup la position de la div actu
console.log(posdivactu) //verif sur la console a titre perso pas pour l'utilisateur


$(window).scroll(function() {
    if ($(this).scrollTop() > (posdivactu - 700)) { // -700 pour avoir le temps de voir la div
        $('.actu').removeClass('invisible'); // affiche la div
        $('.actu').addClass('anim-opaci'); // donne l'animation pour les widgets en CSS3

    }
});

//Animation pour la div Chiffres
var posdivchiffres = $(".chiffres").position().top; //recup la position de la div actu
console.log(posdivchiffres) //verif sur la console a titre perso pas pour l'utilisateur
var flag = true;

//animation du zoom
$(window).scroll(function() {
    if ($(this).scrollTop() > (posdivchiffres - 700)) { // -700 pour avoir le temps de voir la div
			if(flag){
        $('.chiffres_position').removeClass('invisible'); // affiche la div
				$('.chiffres_position').addClass('anim-zoomin');
				//fonction de féliement des chiffres
				$('.counter-count').each(function() {
					$(this).prop('Counter', 0).animate({
						Counter: $(this).text()
					}, {
						duration : 1500,
						step: function(now) {
							$(this).text(Math.ceil(now));
						}
					});
				});
				flag=false;
			}
    }
});
//animation de l'opacité
$(window).scroll(function() {
    if ($(this).scrollTop() > (posdivchiffres - 700)) { // -700 pour avoir le temps de voir la div
        $('.titre_position').removeClass('invisible'); // affiche la div
				$('.titre_position').addClass('anim-opaci');
    }
});
