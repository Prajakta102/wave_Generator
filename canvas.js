const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

const gui = new dat.GUI();
const Wave_Dimentions = {
  height: canvas.height / 2,
  length: 0.01,
  amplitude: 225,
  frequency: 0.01,
};
const Wave_Color = {
  h: 0,
  s:100,
  l:70,
};

const Background_Color = {
  r: 0,
  g: 0,
  b: 0,
  a: 0.01,
};

const wave_floder = gui.addFolder("Wave_Dimentions");
wave_floder.add(Wave_Dimentions, "height", -0, canvas.height);
wave_floder.add(Wave_Dimentions, "length", -0.01, 0.01);
wave_floder.add(Wave_Dimentions, "amplitude", -300, 300);
wave_floder.add(Wave_Dimentions, "frequency", -0.01, 1);

const stroke_floder = gui.addFolder("Wave_Color");
stroke_floder.add(Wave_Color, "h", 0, 255);
stroke_floder.add(Wave_Color, "s", 0, 100);
stroke_floder.add(Wave_Color, "l", 0, 100);

const background_color_floder = gui.addFolder("Background_Color");
background_color_floder.add(Background_Color, "r", 0, 255);
background_color_floder.add(Background_Color, "g", 0, 255);
background_color_floder.add(Background_Color, "b", 0, 255);
background_color_floder.add(Background_Color, "a", 0, 1);

let increment_freq = Wave_Dimentions.frequency;
let x = 0;

const Change_Wave_Shape = {
  a:0.5,
};

const ChangeWaveFlow_folder = gui.addFolder("Change_Wave_Shape");
ChangeWaveFlow_folder.add(Change_Wave_Shape, "a",0, 13);

function animation() {
  requestAnimationFrame(animation);
  c.fillStyle = `rgba(${Background_Color.r},${Background_Color.g},${Background_Color.b},${Background_Color.a})`;
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.beginPath();
  x = `${Change_Wave_Shape.a}`;
  console.log('helllo');
  console.log(x);
  c.moveTo(0, canvas.height / 2); /* y axis with min height*/
  for (let i = 0; i < canvas.width; i++) {
    // if(x==9)
    // {
    //   c.clearRect(0,0,canvas.width,canvas.height);
    // }
    if (x>0 && x<1) {
      c.lineTo(
        i,
        Wave_Dimentions.height +
          Math.sin(i* Wave_Dimentions.length-increment_freq) *
            Wave_Dimentions.amplitude *
            Math.sin(increment_freq)
      );
      
    } 
    else if (x>=1 && x<2) {
      c.lineTo(
        i,
        Wave_Dimentions.height +
          Math.sin(i * Wave_Dimentions.length - increment_freq) *
            Wave_Dimentions.amplitude +
            Math.sin(increment_freq)
      );
    }
    else if (x>=2 && x<=3) {
      c.lineTo(
        i,
        Wave_Dimentions.height +
          Math.sin(i * Wave_Dimentions.length - increment_freq/2) *
            Wave_Dimentions.amplitude*
            Math.sin(i)
      );
    } else if (x>3 && x<=4) {
      c.lineTo(
        i,
        Wave_Dimentions.height +
          Math.sin(i * Wave_Dimentions.length - increment_freq/30) *
            Wave_Dimentions.amplitude *
            Math.sin(increment_freq * increment_freq)
      );
    } else if (x>4 && x<=5) {
      c.lineTo(
        i,
        Wave_Dimentions.height +
          Math.sin(i * Wave_Dimentions.length - increment_freq) *
            Wave_Dimentions.amplitude *
            Math.sin((increment_freq * i) / 100)
      );
    } else if (x>5 && x<=6) {
      c.lineTo(
        i,
        Wave_Dimentions.height +
          Math.sin(i * Wave_Dimentions.length) *
            Wave_Dimentions.amplitude *Math.sin((increment_freq))
      );
    }
    else if (x>6 && x<=7) {
        c.lineTo(
          i,
          Wave_Dimentions.height +
            Math.sin(i*Wave_Dimentions.length-Math.sin(increment_freq*2)) *
              Wave_Dimentions.amplitude* Math.sin(canvas.height)
        );
      }
    else if (x>7 && x<=8) {
      c.lineTo(
        i,
        Wave_Dimentions.height +
          Math.sin(i * Wave_Dimentions.length - increment_freq) *
            Wave_Dimentions.amplitude *
            Math.cos(increment_freq)
      );
    }
    else if (x>8 && x<=9) {
      c.lineTo(
        i,
        Wave_Dimentions.height +
          Math.sin(i*Wave_Dimentions.length*Math.sin(increment_freq)) *
            Wave_Dimentions.amplitude* Math.sin(i/increment_freq)
      );
    }
    else if (x>9 && x<=10) {
      c.lineTo(
        i,
        Wave_Dimentions.height +
          Math.sin(i*Wave_Dimentions.length+increment_freq) *
            Wave_Dimentions.amplitude*Math.sin(i/100)
      );
    }
    else if (x>10 && x<=11) {
      c.lineTo(
        i,
        Wave_Dimentions.height +
          Math.sin(i*Wave_Dimentions.length-Math.tan(increment_freq)) *
            Wave_Dimentions.amplitude* Math.sin(canvas.height)
      );
    }
    else if (x>11 && x<=12) {
      c.lineTo(
        i,
        Wave_Dimentions.height +
          Math.sin(i*Wave_Dimentions.length-Math.sin(increment_freq*2)) *
            Wave_Dimentions.amplitude* Math.sin(canvas.height)
      );
    }
     
  }
  c.strokeStyle = `hsl(${Wave_Color.h},${Wave_Color.s}%,${Wave_Color.l}%)`;
  c.stroke();

  increment_freq += Wave_Dimentions.frequency;
}
animation();
