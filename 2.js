    <script>
 function palindrome(message){
  
    let strReverse = message.split('').reverse().join('')
    return message == strReverse ? true : false
}
console.log(palindrome('hello')); // should return false
console.log(palindrome('abcba'));  // should return true
    </script>