document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault(); 

   var campoA = parseFloat(document.getElementById('campoA').value);
   var campoB = parseFloat(document.getElementById('campoB').value);

   if (campoB > campoA) {
       document.getElementById('resultado').innerHTML = 'Campo B é o maior!';
       document.getElementById('resultado').style.color = 'green';
   } else {
       document.getElementById('resultado').innerHTML = 'Campo A é maior!';
       document.getElementById('resultado').style.color = 'red';
   }
});