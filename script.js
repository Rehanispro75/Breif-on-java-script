function time() {
    var time = new Date().getHours();
    var greeting;
    if (time < 10) {
        greeting = "good morning ";

    }
    else if (time < 16) {
        greeting = "good evening ";

    }

    else  {
        greeting = "good night";
    }
   document.write(greeting);
   document.write("<br>");
   document.write("<br>");
   document.write(time);
}