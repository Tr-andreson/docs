(() => {
  const appContainer = document.getElementById("app");

  appContainer.innerHTML = `
        <div class="bg-red-400">
          <h4 id="content">hello world</h4>
          <button id="butt">Change</button>
        </div>
      `;

  const button = document.getElementById("butt");

  button.onclick = () => {
    console.log("clicked");
  };

  const testObj = {};
  const obj1 = { a: 1, b: 2, c: 3 };


  const clone = structuredClone(obj1)
  clone.a = 5


  console.log(clone, "clone debug");

  console.log(obj1, "obj1 debug");

  const keyName = "age";

  const person = {
    name: "Tushar",
    [keyName]: 25 // 👈 computed property
  };

  console.log(person.test); // 25
})()
