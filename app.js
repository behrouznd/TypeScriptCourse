var list = [];
//---------------------
function fibo1(n, memory) {
    if (n < 2)
        return n;
    if (memory.find(function (element) { return element == n; }) == undefined)
        memory[n] = fibo1(n - 1, memory) + fibo1(n - 2, memory);
    return memory[n];
}
//------------------------
function fiboWithReduce(n) {
    var list2 = new Array(n);
    list2.fill(1);
    var arrayOfFibo = list2.reduce(function (arr, _, i) {
        //console.log( arr);  
        //console.log( i);
        arr.push((i <= 1) ? i : arr[i - 2] + arr[i - 1]);
        return arr;
    }, []);
    //console.log(arrayOfFibo);   
    return arrayOfFibo[n - 2] + arrayOfFibo[n - 1];
}
//------------------------
list[0] = 0;
list[1] = 1;
var res = fibo1(10, list);
console.log("Result: " + res);
var res3 = fiboWithReduce(10);
console.log("Result 3: " + res3);
