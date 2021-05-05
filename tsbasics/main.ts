function doSomething(){
    for(let x = 0 ; x < 5 ; ++x) {
        console.log(x);
    }
    console.log("finally : ", i);
}

let count: string; 
count = 'a'; 

// arrow fucntions


let dolog = () => console.log("Something goes here.");



let num : number; 
num =  20;



interface Point{
    x : number, 
    y : number
}
let interfaceTest = (point : Point) => {
    console.log(point.x , point.y);
}
