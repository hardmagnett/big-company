/**
 *
 * В DOM событие MouseEvent и его наследники определяют target как экземпляр EventTarget, не экземпляр Node.
 * Но, например при обработке кликов в target всегда будет экземпляр Node.
 *
 * Нужна, например, чтобы сделать предположение что event.target является экземпляром Node.
 * Чтобы TS не ругался
 * @param probablyNode
 */
function assertIsNode(probablyNode: EventTarget | Node | null): asserts probablyNode is Node {
  const isNode = (probablyNode !== null && probablyNode instanceof Node)
  if (!isNode) {
    throw new Error(`переменная не является экземпляром Node`);
  }
}

export {assertIsNode}
