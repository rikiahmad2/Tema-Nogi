
// Carousel
$('.carousel').carousel({
    interval: 2000
})

$(document).ready(function() {
    $('.select2js').select2();
});

$('#tamu').modal('show');

$(function () {
    $('#table').DataTable({
      'paging'      : true,
      'lengthChange': false,
      'searching'   : true,
      'ordering'    : true,
      'info'        : true,
      'autoWidth'   : false
    })
    $('#table2').DataTable({
      'paging'      : true,
      'lengthChange': false,
      'searching'   : true,
      'ordering'    : true,
      'info'        : true,
      'autoWidth'   : false
    })
  });

  $(function (){
    $('#tanggal_reservasi').datepicker({
        autoclose: true,
        format: 'yyyy-mm-dd'
    })
    $('#tanggal').datepicker({
        autoclose: true,
        format: 'yyyy-mm-dd'
    })
    $('#tanggal2').datepicker({
        autoclose: true,
        format: 'yyyy-mm-dd'
    })
});

$(function (){
    const flashdata = $('#flash-data').data('flashdata');
    if(flashdata){
        Swal.fire({
            title: 'Berhasil',
            text: 'Data Berhasil ' + flashdata,
            type: 'success',
            showConfirmButton: false,
            timer: 1500
        });
    }
});
$(function (){
    const flashdata = $('#flash-data-false').data('flashdata');
    if(flashdata){
        Swal.fire({
            title: 'Gagal',
            text: 'Data Gagal ' + flashdata,
            type: 'error',
            showConfirmButton: false,
            timer: 1500
        });
    }
});


$('.btn-del').on('click', function(e){
    e.preventDefault();
    const href = $(this).attr('href');

    Swal.fire({
        title: 'Hapus ?',
        text: 'Apakah anda yakin akan menghapus data ini ?',
        type: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Hapus!'
        }).then((result) => {
        if (result.value) {
            document.location.href = href;
        }
    })
});

/**
 * Smoot Scroll
 */
$('.page-scroll').on('click', function(){

    // Ambil isi href
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);
    
    $('body').animate({
        scrollTop: elemenTujuan.offset().top - 150
    }, 1250);

});


$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    // Web Utama
    if(wScroll > $('.invinitee').offset().top - 400){
        $('.invinitee .invinitee-text').each(function(i){
            setTimeout(function(){
                $('.invinitee .invinitee-text').eq(i).addClass('animate__animated animate__fadeInDown tampil');
            }, 300 * i);
        });
    }

    if(wScroll > $('.invinitee').offset().top - 300){
        $('.invinitee .unggul').each(function(i){
            setTimeout(function(){
                $('.invinitee .unggul').eq(i).addClass('animate__animated animate__fadeInDown tampil');
            }, 300 * i);
        });
    }

    if(wScroll > $('.call').offset().top - 400){
        $('.call .call-text-big').each(function(i){
            setTimeout(function(){
                $('.call .call-text-big').eq(i).addClass('animate__animated animate__fadeInDown tampil');
            }, 300 * i);
        });
    }
    if(wScroll > $('.call').offset().top - 400){
        $('.call .btn-gold').each(function(i){
            setTimeout(function(){
                $('.call .btn-gold').eq(i).addClass('animate__animated animate__fadeInUp tampil');
            }, 300 * i);
        });
    }

    if(wScroll > $('.feature').offset().top - 400){
        $('.feature .fitur-text').each(function(i){
            setTimeout(function(){
                $('.feature .fitur-text').eq(i).addClass('animate__animated animate__fadeInDown tampil');
            }, 300 * i);
        });
    }
    if(wScroll > $('.feature').offset().top - 300){
        $('.feature .fitur').each(function(i){
            setTimeout(function(){
                $('.feature .fitur').eq(i).addClass('animate__animated animate__fadeInDown tampil');
            }, 400 * i);
        });
    }

    if(wScroll > $('.call2').offset().top - 400){
        $('.call2 .call-text').each(function(i){
            setTimeout(function(){
                $('.call2 .call-text').eq(i).addClass('animate__animated animate__fadeInDown tampil');
            }, 400 * i);
        });
    }
    if(wScroll > $('.call2').offset().top - 400){
        $('.call2 .btn').each(function(i){
            setTimeout(function(){
                $('.call2 .btn').eq(i).addClass('animate__animated animate__fadeInDown tampil');
            }, 400 * i);
        });
    }

    if(wScroll > $('.tema').offset().top - 400){
        $('.tema .tema-text').each(function(i){
            setTimeout(function(){
                $('.tema .tema-text').eq(i).addClass('animate__animated animate__fadeInDown tampil');
            }, 400 * i);
        });
    }
    if(wScroll > $('.tema').offset().top - 300){
        $('.tema .temau').each(function(i){
            setTimeout(function(){
                $('.tema .temau').eq(i).addClass('animate__animated animate__fadeInDown tampil');
            }, 400 * i);
        });
    }

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