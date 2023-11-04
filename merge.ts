export default function merge(collection_1: number[] , collection_2:number[]):number[]{
    let index_1 : number =0 ;
    let index_2 : number =0 ;
    let ans : number[] =[];

    while(1){
        if(index_1==collection_1.length && index_2==collection_2.length){
            break;
        }
        else if(index_1<collection_1.length && index_2==collection_2.length){
            ans.push(collection_1[index_1]);
            index_1++;
        }
        else if(index_1==collection_1.length && index_2<collection_2.length){
            ans.push(collection_2[index_2]);
            index_2++;
        }
        else if(index_1<collection_1.length && index_2<collection_2.length){
            if(collection_1[index_1]<=collection_2[index_2]){
                ans.push(collection_1[index_1]);
                index_1++;
            }
            else{
                ans.push(collection_2[index_2]);
                index_2++;
            }
        }
    }
    return ans;
}
