function getNodes(nodes, type, acc=[]) { // аккамулятор для сохранения значения между итерациями 
  if(nodes.type === type){
    acc.push(nodes)
  } // нашли ноду, запушили

   if(nodes.children){
    for(const child of nodes.children){
      getNodes(child, type, acc)
    } // если есть children то  для каждого из обьектов повтори функцию 
  }

  return acc // закончил верни аккамулятор 
}

const nodes = {
  type: "nested",
  children: [
    { type: "nested", children: [{ type: "added", value: 50 }] },
    { type: "added", value: 51 },
  ],
};

console.log(getNodes(nodes, 'added'))
// смотреть есть ли 'added' если нет то искать в children 
// мб сделать проверку на children если да то вызвать ту же функцию
// остановиться если нету чилдренов


