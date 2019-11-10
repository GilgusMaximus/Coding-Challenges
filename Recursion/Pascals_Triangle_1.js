//Generate the firt numRows rows of the pascal triangle

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    switch(numRows){
        case 0: return [];
            break;
        case 1: return [[1]];
            break;
        case 2: return [[1], [1, 1]];
            break;
        default: return calcTriangle(numRows-2, [[1], [1, 1]], 1);
            break;
    }
};

function calcTriangle(numRows, triangle){
    if(numRows == 0){
        return triangle;
    }
    triangle[triangle.length] = [1];
    triangle[triangle.length-1][triangle.length-1] = 1;
    for(let i = 1; i < triangle.length-1; i++){
        triangle[triangle.length-1][i] = triangle[triangle.length-2][i-1] + triangle[triangle.length-2][i];
    }
    return calcTriangle(numRows-1, triangle);
}