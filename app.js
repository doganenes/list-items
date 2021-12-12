let data = [
  { name: "Mathews", age: 27 },
  { name: "Codego", age: 26 },
  { name: "Alice", age: 25 },
  { name: "Mothwill", age: 36 },
  { name: "Denswill", age: 23 },
  { name: "Azwell", age: 83 },
  { name: "Cleo", age: 17 },
  { name: "Enes", age:20 },
];

const info = document.querySelector("#info");

let details = data.map(function (item) {
  return "<div>" + item.name + " is " + item.age + " years old." +  "</div>";
});

info.innerHTML = details.join("\n");
