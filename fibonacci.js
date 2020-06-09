var fibonacci= [
  [0,1,2,3,5,8,],
  [2584, 4181, 6765, 10946,17711,13],
  [1597,317811, 514229,832040,28657,21],
  [987,196418,121393,75025,46368,34],
  [610,377,233,144,89,55],
];
for(var i=0; i<1; i++) {
    for(var j=0; j<6; j++) {
        console.log(fibonacci[i][j]);
    }
}
console.log(fibonacci[1][5]);
console.log(fibonacci[2][5]);
console.log(fibonacci[3][5]);
console.log(fibonacci[4][5]);
fibonacci[4].reverse();
for(var i=4; i<=4; i++) {
    for(var j=1; j<6; j++) {
        console.log(fibonacci[i][j]);
    }
}
console.log(fibonacci[3][0]);
console.log(fibonacci[2][0]);
console.log(fibonacci[1][0]);
for(var i=1; i<=1; i++) {
    for(var j=1; j<5; j++) {
        console.log(fibonacci[i][j]);
    }
}
console.log(fibonacci[2][4]);
console.log(fibonacci[3][4]);
fibonacci[3].reverse();
for(var i=3; i<=3; i++) {
    for(var j=2; j<5; j++) {
        console.log(fibonacci[i][j]);
    }
}
console.log(fibonacci[2][1]);
console.log(fibonacci[2][2]);
console.log(fibonacci[2][3]);
