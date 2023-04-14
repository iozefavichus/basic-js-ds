const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k ) {

  let deletedNode = null;

  // // Если head должен быть удален, то делаем следующий узел новым head.
  while (l.head && l.head.value === k) {
    deletedNode = l.head;

  // // Переназначаем следующий за head узел на новый head.
    l.head = l.head.next;
  }

  let currentNode = l.head;

  // // Если следующий узел должен быть удален,
  // // делаем узел через один, следующим для проверки.
  // // Перебираем все узлы и удаляем их, если их значение равно указанному.
  if (currentNode !== null) {
   while (currentNode.next) {
      if (currentNode.next.value === k) {
        deletedNode = currentNode.next;
        // Перезаписываем, чтобы узел через один стал следующим узлом.
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
   }
  }

  // // Проверяем, должен ли tail быть удален.
  // // Так как, если в цикле мы удаляем последний узел,
  // // то с предпоследнего узла убираем только ссылку на него.
  // // Поэтому делаем проверку на его удаление с "tail".
  if (l.tail && l.tail.value === k) {
    // в данном случае currentNode это или предпоследний узел или head.
    l.tail = currentNode;
  }

  return l;
}

module.exports = {
  removeKFromList
}
