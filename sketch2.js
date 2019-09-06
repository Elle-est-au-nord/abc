let table;

function preload() {
  table = loadTable('letters_freq_en_fr_colours.csv', 'csv', 'header');
}

function setup() {
  createCanvas(1400, 500);
  noStroke();
}

function draw() {
  let x_coord = 0;
  let y_coord_en = 50;
  let y_coord_fr = 250;
  background("#808080");
  
  // titles
  textSize(14);
  text('En', 10, y_coord_en);
  text('Fr', 10, y_coord_fr);
  
  for (i=0; i<table.getRowCount(); i++){
    
    letter = table.get(i, 'letter');
    freq_en = table.get(i, 'English');
    freq_fr = table.get(i, 'French');
    side_en = freq_en * 10;
    side_fr = freq_fr * 10;
    fill(table.get(i, 'colour'));

    textSize(13);
    text(letter, 30 + x_coord, 20);
    square(30 + x_coord, y_coord_en, side_en, 2);
    square(30 + x_coord, y_coord_fr, side_fr, 2);
    x_coord = x_coord + Math.max(side_en, side_fr) + 5;
  }
}
