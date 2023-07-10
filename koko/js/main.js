let elBox1 = document.querySelector('.box1')
let elBox2 = document.querySelector('.box2')
let elBox3 = document.querySelector('.box3')
let elBox4 = document.querySelector('.box4')
let elBox5 = document.querySelector('.box5')


let counter = 0
setInterval(()=>{
    counter = counter + 1
},1000)

setInterval(()=>{
    
    if (counter >= 1 && counter <=10) {
        elBox1.classList.add('qizil')
    } else {
        elBox1.classList.remove('qizil')
    }

       
    if (counter >= 11 && counter <=13 || counter>=25 && counter<=28) {
        elBox2.classList.add('sariq')
    } else {
        elBox2.classList.remove('sariq')
    }

       
    if (counter >= 14 && counter <=24) {
        elBox3.classList.add('yashil')
    } else {
        elBox3.classList.remove('yashil')
    }
    if (counter == 28) {
    counter = 1

}


console.log(counter);
},1000)


let count = 0
setInterval(()=>{
    count = count + 1
},1000)
 
setInterval(()=>{
    if (count >= 1 && count <=10) {
        elBox4.classList.add('yashil')
    } else {
        elBox4.classList.remove('yashil')
    }
    if (count >= 14 && count <=24) {
        elBox5.classList.add('qizil')
    } else {
        elBox5.classList.remove('qizil')
    }
    if (count == 28) {
        count = 1
    
    }
    console.log(count);

},1000)









