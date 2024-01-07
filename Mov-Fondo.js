window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const currentSectionIndex = Math.floor(window.scrollY / window.innerHeight);
    sections.forEach((section, index) => {
      if (index === currentSectionIndex) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  });
  


  particlesJS(
    {
"particles": {
"number": {
"value": 144,
"density": {
"enable": false,
"value_area": 4569.72437346674
}
},
"color": {
"value": "#ffffff"
},
"shape": {
"type": "polygon",
"stroke": {
"width": 0,
"color": "#000000"
},
"polygon": {
"nb_sides": 5
},
"image": {
"src": "img/github.svg",
"width": 100,
"height": 100
}
},
"opacity": {
"value": 0.31,
"random": false,
"anim": {
"enable": false,
"speed": 1,
"opacity_min": 0.1,
"sync": false
}
},
"size": {
"value": 1.9,
"random": true,
"anim": {
"enable": false,
"speed": 40,
"size_min": 0.1,
"sync": false
}
},
"line_linked": {
"enable": true,
"distance": 150,
"color": "#ffffff",
"opacity": 0.4,
"width": 1
},
"move": {
"enable": true,
"speed": 4.734885849793636,
"direction": "none",
"random": false,
"straight": false,
"out_mode": "out",
"bounce": false,
"attract": {
"enable": false,
"rotateX": 0,
"rotateY": 1200
}
}
},
"interactivity": {
"detect_on": "canvas",
"events": {
"onhover": {
"enable": false,
"mode": "repulse"
},
"onclick": {
"enable": true,
"mode": "push"
},
"resize": true
},
"modes": {
"grab": {
"distance": 299.7002997002997,
"line_linked": {
  "opacity": 1
}
},
"bubble": {
"distance": 191.80819180819182,
"size": 40,
"duration": 2.237762237762238,
"opacity": 8,
"speed": 3
},
"repulse": {
"distance": 200,
"duration": 0.4
},
"push": {
"particles_nb": 4
},
"remove": {
"particles_nb": 2
}
}
},
"retina_detect": false
}
)

window.addEventListener("scroll", function() {
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 0);
});

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");

var mouseX = 0, mouseY = 0, posX = 0, posY = 0;

function animate() {
  posX += (mouseX - posX) / 9;
  posY += (mouseY - posY) / 9;
  
  cursor.style.cssText = cursor2.style.cssText = "left: " + posX + "px; top: " + posY + "px;";
  
  requestAnimationFrame(animate);
}

document.addEventListener("mousemove", function(e) {
mouseX = e.clientX;
mouseY = e.clientY;
});

animate();

const textElement = document.getElementById('text');
let text = textElement.textContent;
textElement.textContent = '';

let i = 0;
let forward = true;

const interval = setInterval(() => {
  if (forward) {
    if (i < text.length) {
      textElement.textContent += text[i];
      i++;
    }
    if (i === text.length) {
      textElement.style.color = 'red';
      setTimeout(() => {
        forward = false;
        textElement.style.color = 'black';
      }, 2000); // Wait for 2 seconds before starting to delete
    }
  } else if (!forward) {
    if (i > 0) {
      textElement.textContent = textElement.textContent.slice(0, -1);
      i--;
    }
    if (i === 0) {
      forward = true;
    }
  }
}, 100); // Increase the interval to make the animation slower