let hrs = document.querySelector('#hrs');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');

setInterval(() =>{
    let curr = new Date();
    hrs.innerHTML = (curr.getHours()<10?"0":"")+curr.getHours();
    min.innerHTML = (curr.getMinutes()<10?"0":"")+curr.getMinutes();
    sec.innerHTML = (curr.getSeconds()<10?"0":"")+curr.getSeconds();
},500);