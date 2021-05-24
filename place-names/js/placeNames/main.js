var names = ["Nashville", "Hong Kong", "The back yard", "Earth",
"London", "The mall", "Ryman Auditorium", "The Great Wall of China"]
console.log("All place names")

names.forEach(name => console.log(name))

let namesWithThe = names.filter(name => name.includes("The"))

namesWithThe.forEach(name => console.log(`The Place Named ${name}`))
