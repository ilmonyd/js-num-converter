var e = "[[][[]]+[]][+[]][++[++[++[[]][+[]]][+[]]][+[]]]";
var dot = "[+[++[[]][+[]]+[++[[]][+[]]]+"+e+"+[++[[]][+[]]]+[++[[]][+[]]]+[++[[]][+[]]]]+[]][+[]][++[[]][+[]]]";
var minus = "[+["+dot+"+[+[]]+[+[]]+[+[]]+[+[]]+[+[]]+[+[]]+[++[[]][+[]]]]+[]][+[]][[++[++[[]][+[]]][+[]]]]";

function digitConversion(n) {
  var dig = "++[[]][+[]]", i = 0;
  if (n == 0) {return "[+[]]"}
  else if (n == ".") {return "["+dot+"]"}
  else if (n == "-") {return "["+minus+"]"}
  else {
    for (i; i < n-1; i++) {
      dig = "++[" + dig + "][+[]]";
    }
  }
  return "["+dig+"]";
}

function convert(num) {
  var temp = [];
  for (const digit of num.toString()) {
    temp.push(digitConversion(digit));
  }
  return("+[" + temp.join("+") + "][+[]]");
}
