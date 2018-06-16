﻿/* Demo Scripts for Bootstrap Carousel and Animate.css article
* on SitePoint by Maria Antonietta Perna
*/
$(function ($) {

    //Function to animate slider captions 
    function doAnimations(elems) {
        //Cache the animationend event in a variable
        var animEndEv = 'webkitAnimationEnd animationend';

        elems.each(function () {
            var $this = $(this),
				$animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }

    //Variables on page load 
    var $myCarousel = $('#myCarousel'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

    //Initialize carousel 
    $myCarousel.carousel();

    //Animate captions in first slide on page load 
    doAnimations($firstAnimatingElems);

    //Pause carousel  
    $myCarousel.carousel('pause');


    //Other slides to be animated on carousel slide event 
    $myCarousel.on('slide.bs.carousel', function (e) {
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });

    $(window).bind('scroll', function () {
        var windowsWidth = $(window).width();
        var navHeight = 300; // custom nav height
        if (windowsWidth > 960) {
            ($(window).scrollTop() > navHeight) ? $('nav').addClass('goToTop') : $('nav').removeClass('goToTop');
            ($(window).scrollTop() > navHeight) ? $('nav li a').addClass('goToTop-white') : $('nav li a').removeClass('goToTop-white');
            ($(window).scrollTop() > navHeight) ? $('nav li p').addClass('goToTop-white') : $('nav li p').removeClass('goToTop-white');
            ($(window).scrollTop() > navHeight) ? $('#logo').addClass('logo2') : $('#logo').removeClass('logo2');
            ($(window).scrollTop() > navHeight) ? $('#divNavbar').addClass('goToTop-left') : $('#divNavbar').removeClass('goToTop-left');
            ($(window).scrollTop() > navHeight) ? $('#flag1').addClass('hide') : $('#flag1').removeClass('hide');
            ($(window).scrollTop() > navHeight) ? $('#flag2').addClass('hide') : $('#flag2').removeClass('hide');
            ($(window).scrollTop() > navHeight) ? $('#logo-img').addClass('left-170') : $('#logo-img').removeClass('left-170');

            //if ($(window).scrollTop() > navHeight) {
            //    $("#div-home").removeClass('line2');
            //    $("#div-compania").removeClass('line2');
            //    $("#div-unidades").removeClass('line2');
            //    $("#div-productos").removeClass('line2');
            //    $("#div-proyectos").removeClass('line2');
            //    $("#div-noticias").removeClass('line2');
            //    $("#div-contacto").removeClass('line2');
            //}

        } else {
            $('nav').removeClass('goToTop');
            $('nav li a').removeClass('goToTop-white');
            $('nav li p').removeClass('goToTop-white');
            $('#logo').removeClass('logo2');
            $('#divNavbar').removeClass('goToTop-left');
            $('#flag1').removeClass('hide');
            $('#flag2').removeClass('hide');
            $('#logo-img').removeClass('left-170');
            //$("#div-home").removeClass('line2');
            //$("#div-compania").removeClass('line2');
            //$("#div-unidades").removeClass('line2');
            //$("#div-productos").removeClass('line2');
            //$("#div-proyectos").removeClass('line2');
            //$("#div-noticias").removeClass('line2');
            //$("#div-contacto").removeClass('line2');
        }
    });


    $("#nav-home").hover(
        function () {
            if ($(window).scrollTop() < 300) {
                $("#div-home").addClass('line2');
            }
        },
        function () {
            $("#div-home").removeClass('line2');
        }
    );

    $("#nav-compania").hover(
        function () {
            if ($(window).scrollTop() < 300) {
                $("#div-compania").addClass('line2');
            }
        },
        function () {
            $("#div-compania").removeClass('line2');
        }
    );

    $("#nav-unidades").hover(
        function () {
            if ($(window).scrollTop() < 300) {
                $("#div-unidades").addClass('line2');
            }
        },
        function () {
            $("#div-unidades").removeClass('line2');
        }
    );

    $("#nav-productos").hover(
        function () {
            if ($(window).scrollTop() < 300) {
                $("#div-productos").addClass('line2');
            }
        },
        function () {
            $("#div-productos").removeClass('line2');
        }
    );

    $("#nav-proyectos").hover(
        function () {
            if ($(window).scrollTop() < 300) {
                $("#div-proyectos").addClass('line2');
            }
        },
        function () {
            $("#div-proyectos").removeClass('line2');
        }
    );

    $("#nav-noticias").hover(
        function () {
            if ($(window).scrollTop() < 300) {
                $("#div-noticias").addClass('line2');
            }
        },
        function () {
            $("#div-noticias").removeClass('line2');
        }
    );

    $("#nav-contacto").hover(
        function () {
            if ($(window).scrollTop() < 300) {
                $("#div-contacto").addClass('line2');
            }
        },
        function () {
            $("#div-contacto").removeClass('line2');
        }
    );

    /*pagination*/

    $("#pag1_1").addClass("active");
    $("#pag2_1").addClass("active");

    $("#content2").hide();
    $("#bannerproy").show();

    $("#pag1_1,#pag2_1,.pagination li.pag_prev").click(function () {
        $("#pag1_2,#pag2_2").removeClass("active");
        $("#pag1_1,#pag2_1").addClass("active");
        $("#content2").hide();
        $("#content1").show();
        $("#bannerproy").show();
    });

    $("#pag1_2,#pag2_2,.pagination li.pag_next").click(function () {
        $("#pag1_1,#pag2_1").removeClass("active");
        $("#pag1_2,#pag2_2").addClass("active");
        $("#content1").hide();
        $("#content2").show();
        $("#bannerproy").hide();
    });

    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption

    var img1 = document.getElementById('img1');
    var img2 = document.getElementById('img2');
    var img3 = document.getElementById('img3');
    var img4 = document.getElementById('img4');

    var img5 = document.getElementById('img5');
    var img6 = document.getElementById('img6');
    var img7 = document.getElementById('img7');
    var img8 = document.getElementById('img8');

    var img9 = document.getElementById('img9');
    var img10 = document.getElementById('img10');
    var img11 = document.getElementById('img11');
    var img12 = document.getElementById('img12');

    var img13 = document.getElementById('img13');
    var img14 = document.getElementById('img14');
    var img15 = document.getElementById('img15');
    var img16 = document.getElementById('img16');

    var img17 = document.getElementById('img17');
    var img18 = document.getElementById('img18');
    var img19 = document.getElementById('img19');
    var img20 = document.getElementById('img20');

    var img21 = document.getElementById('img21');
    var img22 = document.getElementById('img22');
    var img23 = document.getElementById('img23');
    var img24 = document.getElementById('img24');

    var img25 = document.getElementById('img25');
    var img26 = document.getElementById('img26');
    var img27 = document.getElementById('img27');
    var img28 = document.getElementById('img28');

    var img29 = document.getElementById('img29');
    var img30 = document.getElementById('img30');
    var img31 = document.getElementById('img31');
    var img32 = document.getElementById('img32');

    var img33 = document.getElementById('img33');
    var img34 = document.getElementById('img34');
    var img35 = document.getElementById('img35');
    var img36 = document.getElementById('img36');

    var img37 = document.getElementById('img37');
    var img38 = document.getElementById('img38');
    var img39 = document.getElementById('img39');
    var img40 = document.getElementById('img40');

    var img41 = document.getElementById('img41');
    var img42 = document.getElementById('img42');
    var img43 = document.getElementById('img43');
    var img44 = document.getElementById('img44');

    var img45 = document.getElementById('img45');
    var img46 = document.getElementById('img46');
    var img47 = document.getElementById('img47');
    var img48 = document.getElementById('img48');

    var img49 = document.getElementById('img49');
    var img50 = document.getElementById('img50');
    var img51 = document.getElementById('img51');
    var img52 = document.getElementById('img52');

    var img53 = document.getElementById('img53');
    var img54 = document.getElementById('img54');
    var img55 = document.getElementById('img55');
    var img56 = document.getElementById('img56');


    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img1.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img2.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img3.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img4.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img5.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img6.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img7.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img8.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img9.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img10.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img11.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img12.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img13.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img14.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img15.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img16.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img17.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img18.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img19.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img20.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img21.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img22.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img23.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img24.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img25.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img26.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img27.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img28.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img29.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img30.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img31.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img32.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img33.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img34.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img35.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img36.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img37.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img38.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img39.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img40.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img41.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img42.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img43.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img44.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img45.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img46.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img47.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img48.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img49.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img50.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img51.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img52.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img53.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img54.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img55.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img56.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }



    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

})(jQuery);