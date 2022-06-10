  <script>
  function reverseString(str){
  // wirte your code here
     var newStr = '', i = str.length;
			for(; i >= 0; i--) {
			newStr += str.charAt(i);
			}
			return newStr;
}
console.log(reverseString('hello')); // should return 'olleh'
 </script>