import Building from './5-building';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
  const x = new TestBuilding(200);
  x.sqft = 200;
} catch (err) {
  console.log(err);
}
