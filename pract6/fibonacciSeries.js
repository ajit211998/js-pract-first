<html>  
<head>  
<title>  
Fibonacci Series in JavaScript </title>  
</head>  
<body>  
<script type = "text/javascript">  
// declaration of the variables  
var number = 8;   
var num1 = 0, num2 = 1;  
var next_term = 0;  
document.write( " Fibonacci series of the number 8: " + "<br>")  
for (i = 1; i < number; i++) // use for loop to iterate the series till given number   
{  
if ( i <= 1)   
next_term = i; // assign the variable i to next_term  
else  
{  
next_term = num1 + num2; // sum the num1 and num2  
num1 = num2;  
num2 = next_term;  
}  
// print the sum of the series  
document.write( " Adding " + num1 + " and " + next_term + " = " + (num1 + num2) + "<br>" );  
  
}  
</script>  
</body>  
<html>  