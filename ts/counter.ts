function setupCounter(element: HTMLElement): void {
  let counter: number = 0;

  const setCounter = (count: number): void => {
      counter = count;
      element.innerHTML = `${counter}`;
  };

  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(counter);
}

// Call the function with the counter element
const counterElement = document.querySelector<HTMLElement>('#counter');
if (counterElement) {
  setupCounter(counterElement);
}
