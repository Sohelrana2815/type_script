interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

const point = { x: 727, y: 2815 };
logPoint(point);

const point3 = { x: 12, y: 23, z: 89 };

console.log(point3);
