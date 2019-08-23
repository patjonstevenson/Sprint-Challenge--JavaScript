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
console.log("Cuboid 2 dimensions");
console.log("-----------------");
console.log(`Length: ${cuboid2.len}`);
console.log(`Width: ${cuboid2.width}`);
console.log(`Height: ${cuboid2.height}`);
console.log("\n");
console.log(`Cuboid 2 volume: ${cuboid2.volume()}`); // 100
console.log(`Cuboid 2 surface area: ${cuboid2.surfaceArea()}`); // 130

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
console.log("Cube dimensions");
console.log("---------------");
console.log(`Length: ${cube.len}`);
console.log(`Width: ${cube.width}`);
console.log(`Height: ${cube.height}`);
console.log("\n");

console.log(`Cube volume: ${cube.volume()}`); // 27
console.log(`Cube surface area: ${cube.surfaceArea()}`); // 54
