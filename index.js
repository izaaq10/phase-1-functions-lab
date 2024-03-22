// Code your solution in this file!
const pack = 42
function distanceFromHqInBlocks(block){

     if (block > pack){
       return block - pack
}   
    else;
    if (block<pack)
    return pack - block
}
distanceFromHqInBlocks(43)
console.log(distanceFromHqInBlocks(43 - pack))



function distanceFromHqInFeet(block){
    if (block > pack){
        return (block - pack) * 264
 }   
     else;
     if (block < pack){
     return (pack- block) * 264

}
}

function distanceTravelledInFeet(begin , end){
if (begin < end){
    return ( end - begin) * 264
}
    else;
    if (begin > end){
        return (begin - end) * 264
    }
}


function calculatesFarePrice(start, destination){
    const feet = 264;
    const distance = Math.abs(destination - start);
    const fare = distance * feet;
    if (fare <= 400){
        return 0;
    }
    else if (fare > 400 && fare <= 2000){
        return (fare - 400) * 0.02;
    }
    else if (fare > 2000 && fare <= 2500){
        return 25 ;
    }
    else;
    return 'cannot travel that far';
}

