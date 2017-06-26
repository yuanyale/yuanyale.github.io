/**
 * Created by yuany on 2017/6/9.
 */
//点击搜索，input框变大
$('.search').focus(function () {
    $(this).css('width',260)
}).blur(function () {
    $(this).css('width',160)
});
//轮播图
/*
 0b71eb8ea9c6a734cd5d55e361cde096efc7fba8.jpg
 2e0385a65ba51bcf3ea096ab5f2dc9bbdfa6a362.jpg
 3bdfd6f0765ba49fec8fd0f68530ad4b361a2d2a.jpg
 10f44980800b3c2f1fbcd0db1a24d06bd5761bb6.jpg
 248b6bd234b17177edb89ea46679dfde376daaa7.jpg
 865e1a07a14aeaa29c20a0661716cfbcbf468340.jpg
 f7321dfa0459c483061f5a619f278cf2f1609299.jpg
 */
$(function () {
    let n=0;
    let timer=null;
    $('ul.smallImg li').clone().appendTo($('ul.smallImg'));
    function chang(n) {
        $('ul.bigImg').stop().animate({top:-272*n},1000,'linear');
        $('ul.smallImg').stop().animate({top:-272*n/2},1000,'linear');
    }
    function autoplay() {
        timer=setInterval(function () {
            n++;
            if(n===$('ul.bigImg li').length){
                n=0;
            }
            chang(n);
        },2000)
    }
    autoplay();

    //鼠标移入显示上一张和下一张按钮
    $('.banner').mouseover(function () {
        $('.banner button').css('display','block');
        clearInterval(timer);
    }).mouseout(function () {
        $('.banner button').css('display','none');
        autoplay();
    });

    //点击button切换上一张
    $('.banner .prve').click(function () {
        n++;
        if(n===$('ul.bigImg li').length){
            n=0;
        }
        chang(n);
    });
    //点击切换下一张
    $('.banner .next').click(function () {
        n--;
        if(n<0){
            n=$('ul.bigImg li').length-1;
        }
        chang(n);
    });

    //点击显示更多
        $('.more button').click(function () {
            $('#btn-last').css('display','block');
        });
    //返回顶部
    $(window).scroll(function () {
        if($(window).scrollTop()>100){
            $('.turnToTop').css('display','block');
        }else{
            $('.turnToTop').css('display','none');
        }
    })
});