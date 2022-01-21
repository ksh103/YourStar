import { useRef, useEffect, useState } from 'react';
import { UniverseBlock } from './Universe.style';

const Universe = () => {
  const canvasRef = useRef(null);
  const canvasRefMoon = useRef(null);
  const canvasRefLogo = useRef(null);
  const canvasRefArrow = useRef(null);
  console.log(1);
  const size = useWindowSize();
  console.log(size);
  useEffect(() => {
    console.log('3 in useEffect');
    const canvas = canvasRef.current;
    var ctx = canvas.getContext('2d'),
      w = (canvas.width = size.width), // 캔버스 너비
      h = (canvas.height = size.height), // 캔버스 높이
      hue = 217,
      stars = [],
      count = 0,
      maxStars = 1400;

    ctx.clearRect(0, 0, size.width, size.height);
    var canvas2 = document.createElement('canvas'),
      ctx2 = canvas2.getContext('2d');
    canvas2.width = 100;
    canvas2.height = 100;
    var half = canvas2.width / 2,
      gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
    gradient2.addColorStop(0.025, '#fff');
    gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
    gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
    gradient2.addColorStop(1, 'transparent');

    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();

    // End cache

    function random(min, max) {
      if (arguments.length < 2) {
        max = min;
        min = 0;
      }

      if (min > max) {
        var hold = max;
        max = min;
        min = hold;
      }

      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function maxOrbit(x, y) {
      var max = Math.max(x, y),
        diameter = Math.round(Math.sqrt(max * max + max * max));
      return diameter / 2;
    }

    var Star = function () {
      this.orbitRadius = random(maxOrbit(w, h));
      this.radius = random(60, this.orbitRadius) / 12;
      this.orbitX = w / 2;
      this.orbitY = h / 2;
      this.timePassed = random(0, maxStars);
      this.speed = random(this.orbitRadius) / 500000;
      this.alpha = random(2, 10) / 10;

      count++;
      stars[count] = this;
    };

    Star.prototype.draw = function () {
      var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
        y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
        twinkle = random(10);

      if (twinkle === 1 && this.alpha > 0) {
        this.alpha -= 0.05;
      } else if (twinkle === 2 && this.alpha < 1) {
        this.alpha += 0.05;
      }

      ctx.globalAlpha = this.alpha;
      ctx.drawImage(
        canvas2,
        x - this.radius / 2,
        y - this.radius / 2,
        this.radius,
        this.radius
      );

      this.timePassed += this.speed;
    };

    for (var i = 0; i < maxStars; i++) {
      new Star();
    }

    function animation() {
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 0.8;
      ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = 'lighter';
      for (var i = 1, l = stars.length; i < l; i++) {
        stars[i].draw();
      }

      window.requestAnimationFrame(animation);
    }

    animation();
  }, [size.width, size.height]);
  console.log(2);
  //moon canvas
  useEffect(() => {
    console.log('moonEffect');
    const canvas = canvasRefMoon.current;

    var ctx = canvas.getContext('2d');

    var img = new Image();
    img.src = require('./img/moon.png');
    console.log(img.src);
    img.onload = function () {
      ctx.drawImage(img, 100, 100);
    };
    ctx.clearRect(0, 0, size.width, size.height);
  }, [size.width, size.height]);

  //logo canvas
  useEffect(() => {
    const canvas = canvasRefLogo.current;

    var ctx = canvas.getContext('2d');

    var img = new Image();
    img.src = require('./img/yourstar_logo.png');
    console.log(img.src);
    img.onload = function () {
      ctx.drawImage(img, 100, 100);
    };
    ctx.clearRect(0, 0, size.width, size.height);
  }, [size.width, size.height]);

  //underArrow canvas
  useEffect(() => {
    const canvas = canvasRefArrow.current;

    var ctx = canvas.getContext('2d');

    var img = new Image();
    img.src = require('./img/underArrow.png');
    console.log(img.src);
    img.onload = function () {
      ctx.drawImage(img, 100, 100, 50, 50);
    };
    ctx.clearRect(0, 0, size.width, size.height);
  }, [size.width, size.height]);

  return (
    <div>
      <UniverseBlock>
        <div style={{ position: 'relative' }}>
          <canvas id="background" ref={canvasRef} />
          <canvas
            style={{ position: 'absolute', top: 60, left: 610 }}
            width="1000"
            height="1000"
            ref={canvasRefMoon}
          />
          <canvas
            style={{ position: 'absolute', top: 650, left: 560 }}
            width="1000"
            height="1000"
            ref={canvasRefLogo}
          />
          <canvas
            style={{ position: 'absolute', top: 760, left: 850 }}
            width="1000"
            height="1000"
            ref={canvasRefArrow}
          />
        </div>
      </UniverseBlock>
    </div>
  );
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
export default Universe;
