const input = document.getElementById("number");
const output = document.getElementById("output");
const convertButton = document.getElementById("convert-btn");

const validInput = () => {
  let cleanInput = input.value.replace(/[^0-9]/g, '');
  cleanInput = cleanInput.trim();

  if (input.value === "") {
    output.textContent = "Please enter a valid number"
    alert("Please enter a valid number");
    return
  } else if (input.value < 0) {
    output.textContent = "Please enter a number greater than or equal to 1"
    alert("Please enter a number greater than or equal to 1");
    return
  } else if (parseInt(cleanInput, 10) >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999" 
    alert("Please enter a number less than or equal to 3999");
  } else {
    output.textContent = `Valid input: ${cleanInput}`;
    romanNumeralConverter(cleanInput)
  }
};
const romanNumeralConverter = (cleanInput) => {
  let inputInt = parseInt(cleanInput)
  const romanMap = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" }
  ];
  let convertedNumber = "";
  for (let i = 0; i < romanMap.length; i++) {
    while (inputInt >= romanMap[i].value) {
      
      convertedNumber += romanMap[i].numeral;
      inputInt -= romanMap[i].value;
      
      
    }
    
  }
  output.textContent = convertedNumber;

}
//event listeners
convertButton.addEventListener("click", validInput);
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    validInput();
  }
});

