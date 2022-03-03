class Param{
    constructor(x, y){
        this.x = x;
        this.y = y;
        console.log(x, y)
    }
}


var tampung = []
function carixy(a,b,c) {
  let minX = -5;
  let maxX = 5;
  let minY = -5;
  let maxY = 5;
  for(let x=minX; x<=maxX; x++){
    for(let y=minY; y<=maxY; y++){
      if((a*x + b*y)==c){
        tampung.push({'x': x, 'y':y})
      }
    }
  }
  console.log(tampung)
}

carixy(5,2,7);

