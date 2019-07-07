let table;

function preload() {
  table = loadTable('letters_freq_en_fr_colours.csv', 'csv', 'header');
}

function setup() {
  // createCanvas(900, 900);
  createCanvas(windowWidth - 800, windowHeight - 200);
  noStroke();
}

function drawTitle(subtitle, x_pos, y_pos){
  fill("#adc5e7");
  text(subtitle, x_pos, y_pos - 40);
  fill("#006d6f");
  text(subtitle, x_pos, y_pos - 38);
  fill("#fcd3c1");
  text(subtitle, x_pos, y_pos - 36);
}

let legendEn = "";
let legendFr = "";

function draw() {
  let x_coord_en = 0;
  let x_coord_fr = 450;
  let y_coord = 70;
  background("#808080");
  // titles
  textSize(30);
  drawTitle('English', 30, y_coord);
  drawTitle('French', x_coord_fr + 30, y_coord);

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

    // add to the legend
    if (!legendEn.includes(letter)){
	legendEn += letter + ": ";
	legendEn += parseFloat(freq_en).toFixed(1) + "% ";
    }
    if (!legendFr.includes(letter)){
	legendFr += letter + ": ";
	legendFr += parseFloat(freq_fr).toFixed(1) + "% ";
    }

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
    textSize(13);
    text(legendEn, 30, 620, 400, 70);
    text(legendFr, x_coord_fr, 620, 400, 70);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
