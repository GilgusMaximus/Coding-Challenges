//Given index k, return the k'th row of th pascal triangle

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let array = [1];
    let facN = faculty(rowIndex);
    array[rowIndex-1] = 1;
    let facK = 1;
    for(let i = 1; i <= Math.ceil(rowIndex); i++){
        facK *= i;
        array[i] = facN / (facK * faculty(rowIndex-i));
        array[rowIndex-i] = array[i];
    }
    return array;
};

function faculty(value){
    let fac = 1;
    while(value != 0){
        fac *= value--;
    }
    return fac;
}