//debugger;

const firstName = ['Ram','Shyam','Hari','Laxman','Rakesh'];
const lastName = {
    Ram: 'KC',
    Shyam: 'Thapa',
    Hari: 'Adhikari',
    Laxman: 'Dahal',
    Rakesh: 'Maharjan'
}
const finalResult = firstName.map((item,index)=>{
    //console.log(item,index);
    const conCatAndLoop = Object.keys(lastName).map((val,idx)=>{
        if(item === val){
            //console.log(val,idx);
            const fullName = item +' '+ Object.values(lastName)[idx]
            //console.log(fullName);
            return fullName;
        }
    })
    //console.log(conCatAndLoop[index]);
    return conCatAndLoop[index];
})
console.log(finalResult);