let column_1 = [5,6,7,2,3,9,4,1,3,7,8,9,2,3,1,4,5,1,2,5,3,4,1,3,7,8,9,2,3,1];
let column_2 = [6,3,1,4,9,6,7,1,3,7,8,9,2,3,1,5,6,8,9,4,3,6,1,3,7,8,9,2,3,1];
let column_3 = [41, 50, 55, 46, 67, 87, 98, 45, 54, 44, 89, 85, 58, 45, 63, 76, 89, 98, 45, 84, 78, 98, 99, 43, 76, 88, 92, 42, 53, 81];
let column_4 = [41, 42, 43, 49, 52, 53, 56, 58, 60, 61, 65, 66, 68, 69, 71, 72, 74, 76, 77, 80, 81, 82, 90, 91, 92, 95, 96, 97, 99, 100];

let sum_1 = sum(column_1)
let sum_2 = sum(column_2)
let sum_3 = sum(column_3)
let sum_4 = sum(column_4)

let sums = [sum_1, sum_2, sum_3, sum_4]
let total_sum = sum_1 + sum_2 + sum_3 + sum_4

function sum ( column ) {
    let sum = 0
    for (let i = 0; i < column.length; i++) { 
        sum += column[i]
    }
    return sum
}

const results = {
    col1: column_1,
    col2: column_2,
    col3: column_3,
    col4: column_4,
    sums1: sums,
    total_score: total_sum,
}