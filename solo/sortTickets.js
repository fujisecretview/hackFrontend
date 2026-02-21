// есть набор маршрутов
// верни маршруты в порядке следования

// Input 1: [ { from: "C", to: "D" }, { from: "B", to: "C" }, { from: "A", to: "B" }, { from: "D", to: "E" } ]
// Output 1: [ { from: "A", to: "B" }, { from: "B", to: "C" }, { from: "C", to: "D" }, { from: "D", to: "E" } ]
// Input 2: [ { from: "London", to: "Moscow" }, { from: "NY", to: "London" }, { from: "Moscow", to: "SPb" } ]
// Output 2: [ { from: "NY", to: "London" }, { from: "London", to: "Moscow" }, { from: "Moscow", to: "SPb" } ]
// Input 3: [ { from: "London", to: "Moscow" }, { from: "Tokio", to: "NY" }, { from: "NY", to: "London" }, { from: "SPb", to: "Berlin" }, { from: "Moscow", to: "SPb" } ]
// Output 3: [ { from: "Tokio", to: "NY" }, { from: "NY", to: "London" }, { from: "London", to: "Moscow" }, { from: "Moscow", to: "SPb" }, { from: "SPb", to: "Berlin" } ]

// сравнивать последнее с первым,

const routes = [
  { from: "London", to: "Moscow" },
  { from: "Tokio", to: "NY" },
  { from: "NY", to: "London" },
  { from: "SPb", to: "Berlin" },
  { from: "Moscow", to: "SPb" },
];
const routes2 = [
  { from: "London", to: "Moscow" },
  { from: "NY", to: "London" },
  { from: "Moscow", to: "SPb" },
];

function getRoutes(routes) {
  const result = []; // запушить берлин, как конечную точку, но тогда я должен буду сравнить со всеми

  // идея с map() так как не повторяются точки прибытия и назначения

  const map = new Map();

  let finalDestinationTo = "";
  let finalDestinationFrom = "";

  for (const ticket of routes) {
    const current = ticket.to || 0;

    if (!map.has(current)) {
      finalDestinationTo = current;
    }
    map.set(ticket.from, ticket.to);
  }

  const array = Array.from(map);
  const re = [];

  for (const el of array) {
    if (el[1] === finalDestinationTo) {
      result.push(el);
    } else {
      re.push(el);
    }
  }

  while (result.length < array.length) {
    for (const el of re) {
      if (el[1] === result[0][0]) {
        result.unshift(el);
      }
    }
  }


  return result.map(([from, to]) => ({ from, to }));
}

console.log(getRoutes(routes2));