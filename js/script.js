$(document).ready(function() {



    //BOTÃO TOGGLER
    $('.navbar-toggler').click(function() {
        $('.navbar-toggler').toggleClass('change')
    })

    $('.navbar-collapse a').click(function() {
        $(".navbar-collapse").collapse('hide'),
            $('.navbar-toggler').removeClass('change')
    });


    //MAGNIFIC POPUP PARA QUANDO CLICAR NA IMAGEM
    $('.parent-container').magnificPopup({
        delegate: 'a',
        type: 'image',

        gallery: {
            enabled: true
        }
    });

    

    //CARROSEL DE IMAGENS DA LABORATORIO
    $('.fotos-laboratorio').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        speed: 800,
        arrows: false,
        fade: true,
        cssEase: 'linear'
    });



    //FIXAR O MENU DE NAVEGAÇÃO NO TOPO DA PÁGINA
    $(window).scroll(function() {
        let position = $(this).scrollTop();

        if (position >= 1420) {
            $('.navbar').addClass('navbar-background');
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('navbar-background');
            $('.navbar').removeClass('fixed-top');
        }
    });


    //BOTÃO VOLTAR AO TOPO
    $(window).scroll(function() {
        let position = $(this).scrollTop();

        if (position >= 718) {
            $('#voltar-topo').addClass('scrollTop');
        } else {
            $('#voltar-topo').removeClass('scrollTop');
        }
    });




    //SUAVIZA O SCROLL PARA NAVEGAÇÃO
    $('.nav-item a, header-link, .btn-adiante, #voltar-topo, .navbar-brand').click(function(link) {
        link.preventDefault();
        let target = $(this).attr('href');

        $('html, body').stop().animate({
            scrollTop: $(target).offset().top - 10
        }, 1000);
    });




})