// есть набор маршрутов
// верни маршруты в порядке следования

// Input 1: [ { from: "C", to: "D" }, { from: "B", to: "C" }, { from: "A", to: "B" }, { from: "D", to: "E" } ]
// Output 1: [ { from: "A", to: "B" }, { from: "B", to: "C" }, { from: "C", to: "D" }, { from: "D", to: "E" } ]
// Input 2: [ { from: "London", to: "Moscow" }, { from: "NY", to: "London" }, { from: "Moscow", to: "SPb" } ]
// Output 2: [ { from: "NY", to: "London" }, { from: "London", to: "Moscow" }, { from: "Moscow", to: "SPb" } ]
// const routes = [ { from: "London", to: "Moscow" }, { from: "Tokio", to: "NY" }, { from: "NY", to: "London" }, { from: "SPb", to: "Berlin" }, { from: "Moscow", to: "SPb" } ]
// Output 3: [ { from: "Tokio", to: "NY" }, { from: "NY", to: "London" }, { from: "London", to: "Moscow" }, { from: "Moscow", to: "SPb" }, { from: "SPb", to: "Berlin" } ]

function getRoutes(routes){
  const map = new Map()
  const set = new Set() // тут хранится все конечные точки прибытия

  for(const {from, to} of routes){ // деструктуризация обьекта, что я делал через array.entries() но ошибся в том что думал что будет как тут но дает iterator, array
    map.set(from, to)
    set.add(to)
  }
  console.log(map)

  let start;

  for(const {from} of routes){ // тут я не догадался, происходит сравнение с set есть ли там значение from если нет то start точка будет from 
    if(!set.has(from)){
      start = from
      break; // чтобы не делать лишних проверок
    }
  }

  const result = []
  while(map.has(start)){ // тоже гениально что можно не убирать переменную а сделать внешнюю перемычку и просто работать с ней так как есть map
    const to = map.get(start) // получаем value start и присваиваем его to 
    result.push({from: start, to})
    start = to
  }

  return result

}

// console.log(getRoutes(routes))














const routes = [ { from: "London", to: "Moscow" }, { from: "Tokio", to: "NY" }, { from: "NY", to: "London" }, { from: "SPb", to: "Berlin" }, { from: "Moscow", to: "SPb" } ]


function getRoutesSolo(routes){
  const allRoutes = new Map()
  const allTo = new Set()

  for(const {from, to} of routes){
    allRoutes.set(from, to)
    allTo.add(to)
  }
  let start 

  // делаем проверку нету ли to в routes

  for(const {from} of routes){
    if(!allTo.has(from)){
      start = from
      break;
    }
  }

  const result = []

  while(allRoutes.has(start)){
    const to = allRoutes.get(start)
    result.push({from: start, to})
    start = to
  }
  return result
} 


console.log(getRoutesSolo(routes))