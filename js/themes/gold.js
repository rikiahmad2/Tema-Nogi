$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    // Mempelai
    if(wScroll > $('.mempelai').offset().top - 400){
        $('.mempelai .text-mempelai').each(function(i){
            setTimeout(function(){
                $('.mempelai .text-mempelai').eq(i).addClass('animate__animated animate__fadeInDown tampil');
            }, 300 * i);
        });
    }
    if(wScroll > $('.mempelai').offset().top - 200){
        $('.mempelai .photo-mempelai').each(function(i){
            setTimeout(function(){
                $('.mempelai .photo-mempelai').eq(i).addClass('animate__animated animate__fadeInDown tampil');
            }, 300 * i);
        });
    }
    if(wScroll > $('.mempelai').offset().top - 100){
        $('.mempelai .text-mempelai-2').each(function(i){
            setTimeout(function(){
                $('.mempelai .text-mempelai-2').eq(i).addClass('animate__animated animate__fadeInUp tampil');
            }, 300 * i);
        });
    }

    if(wScroll > $('.mempelai').offset().top - 100){
        $('.mempelai .flower').each(function(i){
            setTimeout(function(){
                $('.mempelai .flower').eq(i).addClass('animate__animated animate__fadeInUp tampil');
            }, 300 * i);
        });
    }
    if(wScroll > $('.mempelai').offset().top - 100){
        $('.mempelai .flower2').each(function(i){
            setTimeout(function(){
                $('.mempelai .flower2').eq(i).addClass('animate__animated animate__fadeInUp tampil');
            }, 300 * i);
        });
    }


    /**
     * Jadwal
     */
    if(wScroll > $('.jadwal').offset().top - 350){
        $('.jadwal .save-date').each(function(i){
            setTimeout(function(){
                $('.jadwal .save-date').eq(i).addClass('animate__animated animate__fadeInDown tampil');
            }, 300 * i);
        });
    }
    if(wScroll > $('.jadwal').offset().top - 250){
        $('.jadwal .jadwal-undangan').each(function(i){
            setTimeout(function(){
                $('.jadwal .jadwal-undangan').eq(i).addClass('animate__animated animate__fadeInDown tampil');
            }, 300 * i);
        });
    }
    if(wScroll > $('.jadwal').offset().top - 250){
        $('.jadwal .text-jadwal').each(function(i){
            setTimeout(function(){
                $('.jadwal .text-jadwal').eq(i).addClass('animate__animated animate__fadeInDown tampil');
            }, 300 * i);
        });
    }
    if(wScroll > $('.jadwal').offset().top - 250){
        $('.jadwal .text-jadwal-2').each(function(i){
            setTimeout(function(){
                $('.jadwal .text-jadwal-2').eq(i).addClass('animate__animated animate__fadeInUp tampil');
            }, 300 * i);
        });
    }


    /**
     * Gallery
     */
    if(wScroll > $('.gallery').offset().top - 250){
        $('.gallery .gallery-text').each(function(i){
            setTimeout(function(){
                $('.gallery .gallery-text').eq(i).addClass('animate__animated animate__fadeInDown tampil');
            }, 300 * i);
        });
    }
    if(wScroll > $('.gallery').offset().top - 100){
        $('.gallery .gallery-photo').each(function(i){
            setTimeout(function(){
                $('.gallery .gallery-photo').eq(i).addClass('animate__animated animate__zoomIn tampil');
            }, 500 * i);
        });
    }
    if(wScroll > $('.qrcode').offset().top - 400){
        $('.qrcode .textqr').each(function(i){
            setTimeout(function(){
                $('.qrcode .textqr').eq(i).addClass('animate__animated animate__fadeInDown tampil');
            }, 500 * i);
        });
    }
    if(wScroll > $('.qrcode').offset().top - 200){
        $('.qrcode .qrcode-img').each(function(i){
            setTimeout(function(){
                $('.qrcode .qrcode-img').eq(i).addClass('animate__animated animate__fadeInDown tampil');
            }, 500 * i);
        });
    }


    /**
     * Lokasi
     */
    if(wScroll > $('.lokasi').offset().top - 400){
        $('.lokasi .lokasi-text').each(function(i){
            setTimeout(function(){
                $('.lokasi .lokasi-text').eq(i).addClass('animate__animated animate__fadeInDown tampil');
            }, 500 * i);
        });
    }
    if(wScroll > $('.lokasi').offset().top - 400){
        $('.lokasi .maps').each(function(i){
            setTimeout(function(){
                $('.lokasi .maps').eq(i).addClass('animate__animated animate__zoomIn tampil');
            }, 500 * i);
        });
    }


    /**
     * Ucapan
     */
    if(wScroll > $('.ucapan').offset().top - 1000){
        $('.ucapan .ucapan-text').each(function(i){
            setTimeout(function(){
                $('.ucapan .ucapan-text').eq(i).addClass('animate__animated animate__fadeInDown tampil');
            }, 500 * i);
        });
    }
    if(wScroll > $('.ucapan').offset().top - 2000){
        $('.ucapan .card').each(function(i){
            setTimeout(function(){
                $('.ucapan .card').eq(i).addClass('animate__animated animate__zoomIn tampil');
            }, 500 * i);
        });
    }

})