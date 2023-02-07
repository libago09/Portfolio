const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 

const test = document.querySelector('h1');

test.addEventListener("mouseover", event => mouseOverHandler(event));



function mouseOverHandler(event){
    console.log("asdasd");
    let arr = event.target.dataset.value.split("");
    let intervalCount = 0;

    const interval = setInterval(()=>{
        let newArr = arr.map((value,index)=>{
            if(intervalCount>index){ 
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 52)]
        });

        event.target.innerText = newArr.join("");
        intervalCount += 1 / 3;

        if(intervalCount>event.target.dataset.value.length){
             clearInterval(interval);
        }
    },70);
};