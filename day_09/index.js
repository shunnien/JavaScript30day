const dogs = [{ name: "Snickers", age: 2 }, { name: "hugo", age: 8 }];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular 基本操作
console.log("Test console!!");

// Interpolated 替換字串
console.log("Hello I am a %s string!", "💩");

// Styled 替換樣式
console.log(
  "%c I am some great text",
  "font-size:50px; background:red; text-shadow: 10px 10px 0 blue"
);

console.log("I am a string: %s ", "log"); //log
console.log("I am a float number: %f ", 1.23); //1.23
console.log("I am a object: %o ", { name: "allen" }); // {name:"allen"}
console.log("I am a int number: %d ", 1); //1
console.log("%c other style", "color: #00fdff; font-size: 2em;");

// 各式不同的訊息類型
// warning!
console.warn("OH NOOO");
// Error :|
console.error("OH NOOO");
// Info
console.info("OH NOOO");

// Testing
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "That is wrong!");

// clearing 清除 console
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);
console.clear();

// Grouping together
dogs.forEach(dog => {
  // 此是分組標題文字
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd();
  //console.groupEnd(`${dog.name}`); // 文字參數沒有意義，不會顯示
});

// counting

// timing
