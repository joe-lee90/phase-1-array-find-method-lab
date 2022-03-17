function superbowlWin(array){
    const result = array.find(cbHelper);

    if(result){
        return result.year;
    }

    return;
}

function cbHelper(array){
    return (array.result === 'W');
}