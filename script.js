function lockUnvailableGifts() {
  var today = new Date().getDate(); // numéro du mois
  // var today = 10;
  for (var date=0; date<25; date++) {
    if (date > today) {
      document.getElementById(date.toString()).className += ' removeAnimation';
    }
  }

}
