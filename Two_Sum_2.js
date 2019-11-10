//given a sorted Integer array, return the indices of numbers adding up to the target

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length-1, sum = target;
    while(left != right){
        sum -= (numbers[left] + numbers[right]);
        if(sum > 0){
            left++;
            sum = target;
            continue;
        }else if(sum < 0){
            right--;
            sum = target;
            continue;
        }
        return [left+1, right+1];
    }
};