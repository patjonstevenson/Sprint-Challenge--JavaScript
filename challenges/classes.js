// 1. Copy and paste your prototype in here and refactor into class syntax.
function CuboidMaker(attributes) {
  this.len = attributes.len;
  this.width = attributes.width;
  this.height = attributes.height;
}

CuboidMaker.prototype.volume = function() {
  return this.len * this.width * this.height;
};

CuboidMaker.prototype.surfaceArea = function() {
  return (
    2 *
    (this.len * this.width + this.len * this.height + this.width * this.height)
  );
};

const cuboid = new CuboidMaker({
  len: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
