var canvas = document.getElementById("header"),
ctx = canvas.getContext("2d"),
W = canvas.width,
H = canvas.height,
maxParticles = 35,
maxParticleSize = 3,
minParticleSize = 1,
maxMove = 1,
angle = 0,
particles = [];
	for (var i = 0; i < maxParticles; i++) {
		particles.push({
			x: Math.random() * W, 
			y: Math.random() * H, 
			wh: Math.random() * maxParticleSize + minParticleSize
		})
	}
	
function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.beginPath();
		for (var i = 0; i < maxParticles; i++) {
			var p = particles[i];
			ctx.moveTo(p.x, p.y);
      ctx.rect(p.x, p.y, p.wh, p.wh);
      var radgrad = ctx.createRadialGradient(p.x + p.wh/2,p.y + p.wh/2,0,p.x + p.wh/2,p.y + p.wh/2,p.wh/2);
  radgrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
  radgrad.addColorStop(0.5, 'rgba(255, 255, 255, .8)');
  radgrad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = radgrad;
      ctx.fill();
		}
		update();
	}
	
	function update() {
		angle += 0.01;
		for (var i = 0; i < maxParticles; i++) {
			var p = particles[i];
			p.y += Math.cos(angle) + p.wh/4;
			p.x += Math.sin(angle) * 2;
			if (p.x > W+maxMove || p.x < -maxMove || p.y > H) {
				if (i%3 > 0) {
					particles[i] = {x: Math.random() * W, y: -(maxMove), wh: p.wh };
				} else {
					if (Math.sin(angle) > 0) {
						particles[i] = {x: -maxMove, y: Math.random()*H, wh: p.wh };
					} else {
						particles[i] = {x: W+maxMove, y: Math.random()*H, wh: p.wh };
					}
				}
			}
		}
  requestAnimationFrame(draw);
	}
draw();	