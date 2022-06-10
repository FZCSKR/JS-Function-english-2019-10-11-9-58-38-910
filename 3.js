    <script>
function alphabetSort(message){
  var a= message.split("");
  a.sort();
  var c = a.join("");
  return c;
}
console.log(alphabetSort('hello')) // should return 'ehllo'

    </script>