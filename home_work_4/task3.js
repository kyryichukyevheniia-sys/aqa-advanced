
function checkOrder( avaliable, ordered){
    if (avaliable < ordered){
    return "Your order is too large, we don’t have enough goods.";
    } else if (ordered === 0){
        return "Your order is empty";
    } else if (avaliable >= ordered){
        return "Your order is accepted";
    }
}
console.log(checkOrder(0,1));