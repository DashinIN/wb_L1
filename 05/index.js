// 5.	Разработайте функцию преобразования JSON в связный список. На входе функция должна получать JSON, 
// содержащий список объектов, на выходе объект, представляющий из себя односвязный список.


// Определение класса для узла односвязного списка
class Node {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

// Функция для преобразования JSON в односвязный список
const jsonToLinkedList = json => {
  //Проверяем, что входной параметр json действительно является объектом. 
  if (!json || typeof json !== 'object') {
      throw new Error('Invalid JSON input');
  }

  const keys = Object.keys(json);
  if (keys.length === 0) {
    //Если JSON-объект пустой, то функция вернет null, так как у нас нет узлов для списка.
      return null;
  }
  //Cоздаем начальный узел и помещаем в него значение первого ключа из JSON.
  const head = new Node(json[keys[0]]);
  let currentNode = head;

  for (let i = 1; i < keys.length; i++) {
    //Для каждого ключа создаем новый узел, устанавливаем его значение на значение ключа
    // и указатель next на новый узел.
      currentNode.next = new Node(json[keys[i]]);
      currentNode = currentNode.next;
  }

  return head;
}

// Пример JSON-объекта
const jsonData = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3'
};

// Преобразование JSON в односвязный список
const linkedList = jsonToLinkedList(jsonData);

// Вывод значений односвязного списка
console.log(linkedList);
console.log(linkedList.next);
console.log(linkedList.next.next);


