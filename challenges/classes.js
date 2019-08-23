// 1. Copy and paste your prototype in here and refactor into class syntax.
console.log("\n\n+ classes.js +\n\n");

class CuboidMaker2 {
  constructor(attributes) {
    this.len = attributes.len;
    this.width = attributes.width;
    this.height = attributes.height;
  }

  volume() {
    return this.len * this.width * this.height;
  }

  surfaceArea() {
    return (
      2 *
      (this.len * this.width +
        this.len * this.height +
        this.width * this.height)
    );
  }
}

const cuboid2 = new CuboidMaker2({
  len: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
console.log("\n+ Stretch +\n\n");
class CubeMaker extends CuboidMaker2 {
  constructor(attributes) {
    super(attributes);
  }

  volume() {
    return this.height ** 3;
  }
  surfaceArea() {
    return 6 * this.height ** 2;
  }
}

const cube = new CubeMaker({
  len: 3,
  width: 3,
  height: 3
});

console.log(cube.volume()); //27
console.log(cube.surfaceArea()); // 54
