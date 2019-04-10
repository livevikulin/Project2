$(document).ready(function(){
    $(".hamburger").click(function(){
        $(this).toggleClass('is-active');
        $('.menu').toggleClass('menu-active');
        $('.main').toggleClass('main-block');
        $('.footer').toggleClass('footer-box');
    });
    
    var sectionPrice = $('#section-price').offset();
    var sectionPortfolio = $('#section-portfolio').offset();
    var sectionClients = $('#section-clients').offset();
    var sectionFooter = $('#section-footer').offset();

    $('.section-price').click(function(){
        $('html, body').animate({scrollTop: sectionPrice.top}, 1000);
    });
    $('.section-portfolio').click(function(){
        $('html, body').animate({scrollTop: sectionPortfolio.top}, 1500);
    });
    $('.section-clients').click(function(){
        $('html, body').animate({scrollTop: sectionClients.top}, 2000);
    });
    $('.section-footer').click(function(){
        $('html, body').animate({scrollTop: sectionFooter.top}, 2500);
    });
    $('.section-price-burger').click(function(){
        $('.main').removeClass("main-block");
        $('.footer').removeClass("footer-box");
        $('.hamburger').removeClass("is-active");
        $('.menu').removeClass("menu-active");
        $('html, body').animate({scrollTop: sectionPrice.top}, 1000);
    });
    $('.section-portfolio-burger').click(function(){
        $('.main').removeClass("main-block");
        $('.footer').removeClass("footer-box");
        $('.hamburger').removeClass("is-active");
        $('.menu').removeClass("menu-active");
        $('html, body').animate({scrollTop: sectionPortfolio.top}, 1500);
    });
    $('.section-clients-burger').click(function(){
        $('.main').removeClass("main-block");
        $('.footer').removeClass("footer-box");
        $('.hamburger').removeClass("is-active");
        $('.menu').removeClass("menu-active");
        $('html, body').animate({scrollTop: sectionClients.top}, 2000);
    });
    $('.section-footer-burger').click(function(){
        $('.main').removeClass("main-block");
        $('.footer').removeClass("footer-box");
        $('.hamburger').removeClass("is-active");
        $('.menu').removeClass("menu-active");
        $('html, body').animate({scrollTop: sectionFooter.top}, 2500);
    });
});