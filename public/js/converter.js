// ここからコードを書いてください
const form = document.querySelector(".converter-form");
const conInput = document.querySelector(".converter-input");
const from = document.querySelector(".converter-from");
const to = document.querySelector(".converter-to");
const result = document.querySelector(".converter-result");

const lengthUnit = [
  { name: "meter", base: 1 },
  { name: "kilometer", base: 1000 },
  { name: "centimeter", base: 0.01 },
  { name: "millimeter", base: 0.001 },
  { name: "inch", base: 0.0254 },
  { name: "foot", base: 0.3048 },
  { name: "yard", base: 0.9144 },
  { name: "mile", base: 1609.344 },
];

function setupConverter() {
  lengthUnit.forEach((unit) => {
    const newOptionFrom = document.createElement(`option`);
    newOptionFrom.value = unit.base;
    newOptionFrom.textContent = unit.name;
    from.appendChild(newOptionFrom);

    const newOptionTo = document.createElement(`option`);
    newOptionTo.value = unit.base;
    newOptionTo.textContent = unit.name;
    to.appendChild(newOptionTo);
  });
  from.selectedIndex = 0;
  to.selectedIndex = 1;
}

function converter() {
  const inputValue = conInput.value;
  const num = parseFloat(inputValue);

  if (isNaN(num)) {
    result.textContent = "Please enter a valid number";
    return null;
  }

  const fromBase = parseFloat(from.value);
  const toBase = parseFloat(to.value);
  const resultNumber = ((num * fromBase) / toBase).toFixed(3);

  const toName = to.options[to.selectedIndex].text;
  const fromName = from.options[from.selectedIndex].text;
  result.textContent = `${conInput.value} ${fromName} = ${resultNumber} ${toName}`;
  return result.textContent;
}

export { setupConverter, converter, conInput, from, to, form };
