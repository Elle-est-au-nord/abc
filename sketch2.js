let table;

function preload() {
  table = loadTable('data/letters_freq_4_languages_colours.csv', 'csv', 'header');
}

function setup() {
  createCanvas(1600, 900);
  // createCanvas(windowWidth - 400, windowHeight - 200);
  noStroke();
}

function drawTitle(title, x_pos, y_pos){
  textSize(16);
  textStyle(BOLD);
  textFont('Courier M');
  fill("#adc5e7");
  text(title, x_pos, y_pos);
  fill("#006d6f");
  text(title, x_pos + 1.65, y_pos - 1.3);
}

let legend_en = [];
let legend_fr = [];
let legend_de = [];
let legend_it = [];

function draw() {
  let x_coord = 50;
  let y_coord_en = 50;
  let y_coord_fr = 250;
  let y_coord_de = 450;
  let y_coord_it = 650;
  background('rgb(255,255,255)');
  // background("#808080");
  
  
  // titles
  drawTitle('english', 0, y_coord_en + 12);
  drawTitle('français', 0, y_coord_fr + 12);
  drawTitle('deutsch', 0, y_coord_de + 12);
  drawTitle('italiano', 0, y_coord_it +12);
  
  for (i=0; i<table.getRowCount(); i++){
    
    letter = table.get(i, 'letter');
    freq_en = table.get(i, 'english');
    legend_en.push(freq_en);
    freq_fr = table.get(i, 'français');
    legend_en.push(freq_fr);
    freq_de = table.get(i, 'deutsch');
    legend_en.push(freq_de);
    freq_it = table.get(i, 'italiano');
    legend_en.push(freq_it);

    side_en = freq_en * 10;
    side_fr = freq_fr * 10;
    side_de = freq_de * 10;
    side_it = freq_it * 10;
    
    textSize(18);
    textStyle(BOLD);
    textFont('Courier M');
    fill("#dbdbdb");
    text(letter, 30 + x_coord + 1.6, 20 - 1.3);
    fill(table.get(i, 'colour'));
    text(letter, 30 + x_coord, 20);

    square(30 + x_coord, y_coord_en, side_en, 2);
    square(30 + x_coord, y_coord_fr, side_fr, 2);
    square(30 + x_coord, y_coord_de, side_de, 2);
    square(30 + x_coord, y_coord_it, side_it, 2);

    x_coord = x_coord + Math.max(side_en, side_fr, side_de, side_it) + 5;
  }
}

function keyPressed() {
  ellipse(mouseX, mouseY, 5, 5);
  // prevent default
  return false;

  //text("FOO", 0, 200);
}

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }
