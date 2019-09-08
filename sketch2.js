let table;

function preload() {
  table = loadTable('data/letters_freq_4_languages_colours.csv', 'csv', 'header');
}

function setup() {
  createCanvas(1400, 900);
  // createCanvas(windowWidth - 400, windowHeight - 200);
  noStroke();
}

function draw() {
  let x_coord = 0;
  let y_coord_en = 50;
  let y_coord_fr = 250;
  let y_coord_de = 500;
  let y_coord_it = 750;
  background("#808080");
  
  // titles
  textSize(14);
  text('En', 7, y_coord_en);
  text('Fr', 7, y_coord_fr);
  text('De', 7, y_coord_de);
  text('It', 7, y_coord_it);
  
  for (i=0; i<table.getRowCount(); i++){
    
    letter = table.get(i, 'letter');
    freq_en = table.get(i, 'english');
    freq_fr = table.get(i, 'français');
    freq_de = table.get(i, 'deutsch');
    freq_it = table.get(i, 'italiano');

    side_en = freq_en * 10;
    side_fr = freq_fr * 10;
    side_de = freq_de * 10;
    side_it = freq_it * 10;
    fill(table.get(i, 'colour'));

    textSize(13);
    text(letter, 30 + x_coord, 20);
    square(30 + x_coord, y_coord_en, side_en, 2);
    square(30 + x_coord, y_coord_fr, side_fr, 2);
    square(30 + x_coord, y_coord_de, side_de, 2);
    square(30 + x_coord, y_coord_it, side_it, 2);

    x_coord = x_coord + Math.max(side_en, side_fr, side_de, side_it) + 5;
  }
}

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }
