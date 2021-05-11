function Fun(a,b,c,d){
    arr[0]=a||0;
    arr[1]=b||0;
    arr[2]=c||0;
    arr[3]=d||0;
    if(arr.length<0){
        return false;
    }
    var max=0;
    var m=0;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            m=(Number(arr[i])+Number(arr[j]))*(j-i)*0.5
            if(m>max){
                max=m;
            }
        }
    }
    return max
}
console.log( Fun(1,4,0,7) );