// Your code here

class Polygon {
  constructor(sides){
    this.sides = sides
  }

  get countSides(){
    return this.sides.length
  }

  get perimeter(){
    return this.sides.reduce((acc, side) => acc + side, 0)
  }
}

class Triangle extends Polygon {
  get isValid(){
    const [side1, side2, side3] = this.sides

    const pair1 = side1 + side2 > side3
    const pair2 = side2 + side3 > side1
    const pair3 = side3 + side1 > side2

    if (pair1 && pair2 && pair3){
      return true
    }
    else{
      return false
    }
  }
}
