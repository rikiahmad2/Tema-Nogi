
		Webcam.set({
			width: 400,
			height: 320,
			image_format: 'jpeg',
			jpeg_quality: 90
		});
		Webcam.attach( '#my_camera' );


		$('#register').on('submit', function (event) {
			event.preventDefault();
			var image = '';
			var fullname = $('#fullname').val();
			var instansi = $('#instansi').val();
			var tujuan = $('#tujuan').val();
			var keperluan = $('#keperluan').val();
			Webcam.snap( function(data_uri) {
				image = data_uri;
			});
			$.ajax({
				url: '<?php echo site_url("welcome/save");?>',
				type: 'POST',
				dataType: 'json',
				data: {fullname: fullname, instansi: instansi, tujuan: tujuan, keperluan: keperluan, image:image},
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


	<script>
		window.onload = function () { jam(); }

		function jam() {
			var e = document.getElementById('jam'),
				d = new Date(), h, m, s;
			h = d.getHours();
			m = set(d.getMinutes());
			s = set(d.getSeconds());

			e.innerHTML = h + ':' + m + ':' + s;

			setTimeout('jam()', 1000);
		}

		function set(e) {
			e = e < 10 ? '0' + e : e;
			return e;
		}
	</script>