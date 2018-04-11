
function countChange(id,diff) {
  countdiv = document.getElementById(id)
  countdiv.innerHTML = parseInt(countdiv.innerHTML) + diff
}

function counterHTML(id) {
  html = '<div class="countDiv"><input type="text" placeholder="counter title"><div id="'+id+'">0</div>'
  html += '<input type="button" value="+" onclick=' + '"countChange('+"'"+id+"'"+',+1)">'
  html += '<input type="button" value="-" onclick=' + '"countChange('+"'"+id+"'"+',-1)"><div>'
  return html
}

function drawCounters(num) {
  counters = document.getElementById('counters')
  counters.innerHTML = ""
  for (var id = 0; id < num; id++) {
    counters.innerHTML += counterHTML('count'+id)
  }
}


function redrawCounters() {
  num = document.getElementById("num").value
  console.log(num);
  drawCounters(parseInt(num))
}
