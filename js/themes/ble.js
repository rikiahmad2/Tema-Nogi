$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    // Photo Mempelai
     if(wScroll > $('.mempelai').offset().top - 350){
        $('.mempelai .text-mempelai').each(function(i){
            setTimeout(function(){
                $('.mempelai .text-mempelai').eq(i).addClass('animate__animated animate__fadeInUp');
            }, 400 * i);
        });
    }
    if(wScroll > $('.mempelai').offset().top - 250){
        $('.mempelai img').each(function(i){
            setTimeout(function(){
                $('.mempelai img').eq(i).addClass('animate__animated animate__fadeInUp');
            }, 400 * i);
        });
    }
    if(wScroll > $('.mempelai').offset().top - 200){
        $('.mempelai .text-mempelai-2').each(function(i){
            setTimeout(function(){
                $('.mempelai .text-mempelai-2').eq(i).addClass('animate__animated animate__fadeInDown');
            }, 400 * i);
        });
    }
    if(wScroll > $('.mempelai').offset().top - 200){
        $('.mempelai .dan').each(function(i){
            setTimeout(function(){
                $('.mempelai .dan').eq(i).addClass('animate__animated animate__fadeInDown muncul');
            }, 400 * i);
        });
    }


    // Save The Date
    if(wScroll > $('.jadwal').offset().top - 400){
        $('.jadwal .save-date').each(function(i){
            setTimeout(function(){
                $('.jadwal .save-date').eq(i).addClass('animate__animated animate__fadeInDown');
            }, 400 * i);
        });
    }
    if(wScroll > $('.jadwal').offset().top - 250){
        $('.jadwal .col-md-4').each(function(i){
            setTimeout(function(){
                $('.jadwal .col-md-4').eq(i).addClass('animate__animated animate__fadeInDown');
            }, 400 * i);
        });
    }
    if(wScroll > $('.text-jadwal').offset().top - 300){
        $('.text-jadwal').each(function(i){
            setTimeout(function(){
                $('.text-jadwal').eq(i).addClass('animate__animated animate__fadeInDown');
            }, 300 * i);
        });
    }
    if(wScroll > $('.text-jadwal-2').offset().top - 400){
        $('.text-jadwal-2').each(function(i){
            setTimeout(function(){
                $('.text-jadwal-2').eq(i).addClass('animate__animated animate__fadeInUp');
            }, 300 * i);
        });
    }


    // Gallery
    if(wScroll > $('.gallery').offset().top - 300){
        $('.gallery .col-md-4').each(function(i){
            setTimeout(function(){
                $('.gallery .col-md-4').eq(i).addClass('animate__animated animate__zoomIn muncul');
            }, 500 * i);
        });
    }
    if(wScroll > $('.gallery').offset().top - 300){
        $('.gallery .gallery-text').each(function(i){
            setTimeout(function(){
                $('.gallery .gallery-text').eq(i).addClass('animate__animated animate__zoomIn muncul');
            }, 500 * i);
        });
    }


    // Lokasi
    if(wScroll > $('.lokasi').offset().top - 300){
        $('.lokasi .lokasi-text').each(function(i){
            setTimeout(function(){
                $('.lokasi .lokasi-text').eq(i).addClass('animate__animated animate__fadeInDown');
            }, 400 * i);
        });
    }
    if(wScroll > $('.lokasi').offset().top - 300){
        $('.lokasi .maps').each(function(i){
            setTimeout(function(){
                $('.lokasi .maps').eq(i).addClass('animate__animated animate__zoomIn muncul');
            }, 400 * i);
        });
    }


    // Ucapan & Do'a
    if(wScroll > $('.ucapan').offset().top - 300){
        $('.ucapan .ucapan-text').each(function(i){
            setTimeout(function(){
                $('.ucapan .ucapan-text').eq(i).addClass('animate__animated animate__fadeInDown');
            }, 400 * i);
        });
    }
    if(wScroll > $('.ucapan').offset().top - 300){
        $('.ucapan .col-md-8').each(function(i){
            setTimeout(function(){
                $('.ucapan .col-md-8').eq(i).addClass('animate__animated animate__zoomIn muncul');
            }, 400 * i);
        });
    }
    if(wScroll > $('.ucapan-doa').offset().top - 600){
        $('.ucapan-doa').each(function(i){
            setTimeout(function(){
                $('.ucapan-doa ').eq(i).addClass('animate__animated animate__fadeInUp');
            }, 400 * i);
        });
    }

})