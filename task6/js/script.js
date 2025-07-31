function multiply(a,b) {
  let result = a*b;
  console.log(result.toString());
}

multiply(452, 524);

const movies = ["Grren Mile", "Pulp fiction", "Fast & Furios", "Cellular", "Payphone"];

movies.forEach(element => {
  console.log(element);
});

const div = document.getElementById("movies");
const ul = document.createElement("ul");
movies.forEach(element => {
  const li = document.createElement("li");
  li.textContent = element;
  ul.appendChild(li);
});

div.appendChild(ul);

function changeColor() {
  document.body.style.backgroundColor = 'blue';
}



