import merge from "./merge";


let numTestcase : number =10

for(let i:number=0;i<numTestcase;i++){
    let size1:number = Math.floor(Math.random()*10);
    let size2:number = Math.floor(Math.random()*10);

    let c1 : number[]=[];
    let c2 : number[]=[];

    for(let j:number=0;j<size1;j++){
        let num : number = Math.floor(Math.random()*10)
        if(c1.length==0){
            c1.push(num);
        }
        else{
            c1.push(c1[c1.length-1]+num);
        }
    }

    for(let j:number=0;j<size2;j++){
        let num : number = Math.floor(Math.random()*10)
        if(c2.length==0){
            c2.push(num);
        }
        else{
            c2.push(c2[c2.length-1]+num);
        }
    }
    console.log("c1 : ",c1);
    console.log("c2 : ",c2);
    console.log("merge c1 ,c2 :",merge(c1,c2));
    console.log("--------------------------");
}


