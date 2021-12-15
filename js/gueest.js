
$('#register').on('submit', function (event) {
    event.preventDefault();
    var image = '';
    var suhu  = $('#suhu').val();
    var tamu  = $('#tamu').val();
    Webcam.snap( function(data_uri) {
        image = data_uri;
    });
    $.ajax({
        url: '<?php echo site_url("home/created");?>',
        type: 'POST',
        dataType: 'json',
        data: {suhu: suhu, tamu: tamu, image:image},
    })
    .done(function(data) {
        if (data > 0) {
            alert('insert data sukses');
            $('#register')[0].reset();
        }
    })
    .fail(function() {
        console.log("error");
        window.location.reload();
        //Metode 2
        history.go(0);
        //Metode 3
        window.location.href = window.location.href;
    })
    .always(function() {
        console.log("complete");
    });
});


