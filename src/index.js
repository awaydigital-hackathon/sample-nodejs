const list = [];
console.log(list);
const a = 1;
let b = "1";
if(a==b) {
    console.log('')
}

function HelloWorld(hour) {
    if (hour) {
      this.hour = hour;
    } else {
      var date = new Date();
      this.hour = date.getHours();
    }
    this.displayGreeting = function() {
      if (this.hour >= 22 || this.hour <= 5)
        document.write("Good night, World!");
      else
        document.write("Hello, World!");
    } 
}
console.log(HelloWorld());
