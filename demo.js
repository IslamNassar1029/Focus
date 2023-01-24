// <!-- <canvas id="myCanvas" width="200" height="100" style="border:1px solid black;">
// Y</canvas>

// <script>
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.arc(100, 50, 40, 0, 2 * Math.PI);
// ctx.lineWidth=10
// ctx.strokeStyle = "white"
// ctx.stroke();
// </script>
// <script>
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.strokeStyle = "black"
// ctx.moveTo(100, 0);
// ctx.lineTo(100, 100);
// ctx.stroke();
// ctx.moveTo(100, 50);
// ctx.lineTo(200, 50);
// ctx.stroke();
// </script> -->

let ulListing = document.getElementById("ulListing")
let btnList = document.getElementById("btnList")

 btnList.addEventListener("click",() =>{
   ulListing.classList.toggle("jstyling") 
 })   
    

