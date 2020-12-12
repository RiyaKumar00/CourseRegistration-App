function calculate() {
  var selected = [];
  var cred=0;
  for (var option of document.getElementById('uc').options) {
    if (option.selected) {
      selected.push(option.value);
      cred+=(option.value.charCodeAt(0)-48);
    }
  }
  for (var option of document.getElementById('pc').options) {
    if (option.selected) {
      selected.push(option.value);
      cred+=(option.value.charCodeAt(0)-48);
    }
  }
  for (var option of document.getElementById('ue').options) {
    if (option.selected) {
      selected.push(option.value);
      cred+=(option.value.charCodeAt(0)-48);
    }
  }
  for (var option of document.getElementById('pe').options) {
    if (option.selected) {
      selected.push(option.value);
      cred+=(option.value.charCodeAt(0)-48);
    }
  }
  document.getElementById('result').innerHTML = 'TOTAL NUMBER OF CREDITS SELECTED = '+cred;
}
