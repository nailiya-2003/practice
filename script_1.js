let arr = [
    {
        name: "Nell",
        description: "frontend developer",
        age: 21
    },
    {
        name: "Angel",
        description: "pretty",
        age: 18
    },
    {
        name: "Aydin",
        description: "musican",
        age: 50
    },
    {
        name: "US",
        description: "country",
        age: 1500
    },
    {
        name: "shafa",
        description: "bibi",
        age: 57
    },
    {
        name: "suli",
        description: "police",
        age: 58
    }
];
const root = document.querySelector(".root")
let count = 0;
const card = arr.map(item => `
    <div class='cards'>
     <div class="crad">
       <h1>${item.name}</h1>
       <p>${item.name}</p>
       <p>${item.description}</p>
     </div>
    </div>
 ` ).join('')

root.innerHTML = card
console.log(root);
console.log('test', card );


