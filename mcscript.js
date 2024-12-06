let frontwidth = prompt("How wide should the house be from the front?")
let sidewidth = prompt("How wide should the house be from the side?")
let height = prompt("How tall should the house be?")
// let logs = prompt("Will it have logs on the side?")

let floor = floorCalc(frontwidth, sidewidth)
let roof = floorCalc(frontwidth, sidewidth)
let walls = frontwallCalc(frontwidth, height) + sidewallCalc(sidewidth, height)

console.log("You will need", floor, "Wood Planks for the floor")
console.log("You will need", roof, "Wood Planks for the roof")
console.log("You will need", walls, "Cobblestone for the walls")
console.log("You will need", logs, "Wood Logs for the sides of the wall")
// alert("You will need", floor, "Wooden Planks for the floor");
// alert("You will need", roof, "Wooden Planks for the roof");
// alert("You will need", walls, "Cobblestone for the walls")

// if(logs=)

function frontwallCalc(wallfrontwidth, wallheight){
    return (wallfrontwidth * wallheight) * 2
}

function sidewallCalc(wallsidewidth, wallheight){
    return ((wallsidewidth - 2) * wallheight) * 2
}

function floorCalc(floorfrontwidth, floorsidewidth){
    return floorfrontwidth * floorsidewidth
}