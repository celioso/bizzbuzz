var numero = 100;
var divisible = false;

for (var i = 1; i <= 100; i++)
{
  //divisible = false; //modo1
  //if(i % 3 == 0) //modo2
  if(esDivisible(i,3))
  {
    document.write("Fizz");
    //divisible = true; //modo1
  }

  //if(i % 5 == 0) //modo2
  if(esDivisible(i,5))
  {
    document.write("Buzz");
    //divisible = true; //modo1
  }

  //if(!divisible) //modo1: ! significa es un no es divisible
  //if(i % 3 != 0 && i % 5 != 0) //modo2
  if(!esDivisible(i,3) && !esDivisible(i,5))
  {
    document.write(i);
  }
  document.write("<br /> ");
}

function esDivisible(num, divisor)
{
  if(num % divisor == 0)
  {
    return true;
  }
  else
  {
    return false;
  }

}
