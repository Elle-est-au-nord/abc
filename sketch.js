let table;

function preload() {
  table = loadTable('letters_freq_en_fr_colours.csv', 'csv', 'header');
}

function setup() {
  createCanvas(900, 900);
  noStroke();
}

function draw() {
  let x_coord_en = 0;
  let x_coord_fr = 450;
  let y_coord = 70;
  background("#808080");
  // title English
  textSize(30);
  fill("#adc5e7");
  text('English', 30, y_coord - 40);
  fill("#006d6f");
  text('English', 30, y_coord - 38);
  fill("#fcd3c1");
  text('English', 30, y_coord - 36);
  // title French
  fill("#adc5e7");
  text('French', x_coord_fr + 30, y_coord - 40);
  fill("#006d6f");
  text('French', x_coord_fr + 30, y_coord - 38);
  fill("#fcd3c1");
  text('French', x_coord_fr + 30, y_coord - 36);

  // Iterate through CSV data
  for (i=0; i<table.getRowCount(); i++){
    // Get the maximun value to assess the line width
    line_values = table.getColumn('English').slice(i-6, i);
    line_width = Math.max(...line_values) * 10 + 30;

    textSize(20);
    letter = table.get(i, 'letter');
    freq_en = table.get(i, 'English');
    freq_fr = table.get(i, 'French');
    side_en = freq_en * 10;
    side_fr = freq_fr * 10;
    fill(table.get(i, 'colour'));

    if (i != 0 && i % 6 == 0){
      x_coord_en = 0;
      x_coord_fr = 450;
      y_coord = y_coord + line_width;
      // English viz
      text(letter, 30 + x_coord_en, y_coord - 10);
      square(30 + x_coord_en, y_coord, side_en, 2);
      // French viz
      text(letter, 30 + x_coord_fr, y_coord - 10);
      square(30 + x_coord_fr, y_coord, side_fr, 2);
    }
    else {
      // English viz
      text(letter, 30 + x_coord_en, y_coord - 10);
      square(30 + x_coord_en, y_coord, side_en, 2);
      // French viz
      text(letter, 30 + x_coord_fr, y_coord - 10);
      square(30 + x_coord_fr, y_coord, side_fr, 2);
    }
    x_coord_en = x_coord_en + side_en + 10;
    x_coord_fr = x_coord_fr + side_fr + 10;
  }
}
