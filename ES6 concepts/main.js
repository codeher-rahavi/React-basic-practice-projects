//AND and OR operator
function getName(name) {
    return name;
}
let a = true;
let b = true;
console.log('And operator=', a && getName('rahavi'));

console.log('or operator =', a || b);

//Template literals (`${}`)

let name1 = 'John';
let name2 = 'Doe';
console.log(name1 + " " + name2);//how to simplify this?? se below
console.log(`${name1} ${name2}`); //using template literals

//ternary operator 
let showRecipieOne = false;

function getRecepieOne(r1) {
    return r1;
}

function getRecepieTwo(r2) {
    return r2;
}
//if(showRecipieOne){
//    console.log(getRecepieOne("pizza"));
//}
//else{
//console.log(getRecepieTwo("coke"));
//}

showRecipieOne ? console.log(getRecepieOne("pizza")) : console.log(getRecepieTwo("coke"));

//destructuring

const id = 1;
const productName = "Product Apple watch";
const rating = 5;

const product = {
    id,
    productName,
    rating
};
console.log(product);

const product2 = {
    description: "Product Two description",
    id,
    productName,
    rating
}
// const description = product2.description;
// console.log(description);
//short hand for the above form

const { description } = product2;
console.log(description);

const array = [1, 2, 3];
let getArrayFirstValue = array[0];
let getArraytwoValue = array[1];
console.log(getArrayFirstValue, getArraytwoValue);
//if we use destructuring then it will become

const [arrayFirstElement, arraySecondElement] = array;
console.log(arrayFirstElement, arraySecondElement);

//default parameters ,spread operators and rest operators

function mulOfTwoNumbers(num1 = 2, num2 = 3) {
    return num1 * num2;
}
console.log(mulOfTwoNumbers());


//spreading operator (...)

let a1 = [1, 2, 3];
let a2 = [7, 8, 9];
console.log([...a1, ...a2]);

function getInfo(...a) {
    console.log(a)
    return 'rahavi'
}
console.log(getInfo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//map, filter, find, some ,every ,include ,indexof ,findIndex
const personArray = [
    {
        name: 'Person 0',
        age: 45,
        country: 'USA'
    },
    {
        name: 'Person 1',
        age: 30,
        country: 'USA'
    },
    {
        name: 'Person 2',
        age: 40,
        country: 'RUSSIA'
    },
    {
        name: 'Person 3',
        age: 50,
        country: 'INDIA',
    },
];
//map
const getAllName = personArray.map((singlePerson, index) => {
    console.log(singlePerson, index);
    return singlePerson.name;

});
console.log(getAllName);

//find
let getFromUSA = personArray.find((s, i) => {
    return s.country === 'USA';
})
console.log(getFromUSA);

//filter
let getFromUS = personArray.filter((s, i) => {
    return s.country === 'USA';
})
console.log(getFromUS);

//some
let checkSomeArrayMethod = personArray.some(singlePerson => {
    return singlePerson.age > 40
});
console.log(checkSomeArrayMethod);

//every
let checkEveryArrayMethod = personArray.every((singlePerson) => {
    return singlePerson.age > 40;
});
console.log(checkEveryArrayMethod);

const fruitsArray = ['apple', 'banana', 'orange']
console.log(fruitsArray.includes('orange'), fruitsArray.indexOf('orange'));

const getindex = personArray.findIndex((a) => {
    return a.country === 'USA';
})
console.log(getindex);


let getListOfProductElement = document.querySelector('.list-of-products');
function renderProducts(getProduct) {
    getListOfProductElement.innerHTML = getProduct.map(singleProductItem => `<p>${singleProductItem.title}</p>`).join(" ");
}
async function fetchListOfProducts() {
    try {
        const apiResponse = await fetch('https://dummyjson.com/products', {
            method: 'GET',
        })

        const result = await apiResponse.json();
        console.log(result);
        //? is used to prevent error when data is not always present
        if (result?.products?.length > 0) {
            renderProducts(result?.products)
        }
    }
    catch (error) {
        console.log(error.message);
    }
}
fetchListOfProducts()