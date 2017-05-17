// ##########################################################
// START DO NOT CHANGE ZONE
// ##########################################################

var blueberries = {
  name: 'Blueberries',
  latin: 'Vaccinium corymbosum',
  onShrub: true,
  energy: 240,
  carbs: 14.49,
  protein: 0.74
};

var grapes = {
  name: 'Grapes',
  latin: 'Vitis vinifera',
  onShrub: false,
  energy: 288,
  carbs: 18.1,
  protein: 0.72
};

var redCurrant = {
  name: 'Red currant',
  latin: 'Ribes rubrum',
  onShrub: true,
  energy: 234,
  carbs: 13.8,
  protein: 1.4
};

// ##########################################################
// END DO NOT CHANGE ZONE
// ##########################################################


// Write your function here, name it `writeBerries`
var writeBerries = function (berry) {
  document.write('<h1>Berries</h1>');

  berry.forEach(function (item) {
    document.write('<h2>' + item.name + '</h2>');
    document.write('<dl>');
    document.write('<dt>Grows on a shrub?</dt>');

    document.write('<dd>');

    if (berry.item.onShrub(true)) {
      document.write('Yes');
    } else {
      document.write('No');
    }

    document.write('<dt>Energy</dt>');
    document.write('<dd>' + item.energy + '</dd>');
    document.write('<dt>Carbohydrates</dt>');
    document.write('<dd>' + item.carbs + '</dd>');
    document.write('<dt>Protein</dt>');
    document.write('<dd>' + item.protien + '</dd>');

    document.write('</dl>');
  });
};

// ##########################################################
// START DO NOT CHANGE ZONE
// ##########################################################

// This code will execute your function
writeBerries([blueberries, grapes, redCurrant]);

// ##########################################################
// END DO NOT CHANGE ZONE
// ##########################################################
