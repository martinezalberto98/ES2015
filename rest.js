// function filterOutOdds(...nums){
//     return nums.filter(num => num % 2 === 0);
// }

const filterOutOdds = (...nums) => nums.filter(value => value % 2 === 0);

// function findMinn(...values){
//     return values.reduce((accumulator, CurrentValue) =>{
//         if(accumulator < CurrentValue){
//             return CurrentValue;
//         }
//         return accumulator;
//     });
// }

const findMin = (...args) => Math.min(...args);

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

const doubleAndReturnArgs = (array, ...args) => [...array, ...args.map(val => val*2)];


//slice and dice

// function removeRandom(items){
//     const randomIndex = Math.floor(math.random * items.length);
//     return items.splice(randomIndex, 1);
// }

const removeRandom = (items) => {
    const randomIndex = Math.floor(math.random * items.length);
    return items.splice(randomIndex, 1);
}

// function extend(arr1, arr2){
//     return [...arr1, ...arr2];
// }

const extend = (arr1, arr2) => {
    return [...arr1, ...arr2];
}



// function addKeyObj(obj, key, val){
//     return {...obj, [key]: val};
// }

const addKeyObj = (obj, key, value) => {
    return {}
}

// function removeKey(object, key){
//     return object.find(value =>{
//         if(value === key){
//             delete object.value;
//         }
//     });
// }

const removeKey = (object, key) => {
    let finalObject = {...object};
    delete finalObject[key];
    return finalObject;
}

// function combine(obj1, obj2){
//     return {...obj1, ...obj2};
// }

const combine = (obj1, obj2) => {
    return {...obj1, obj2};
}

// function update(obj, key, value){
//     return {...obj, keu[value]};
// }

const update = (obj, key, val) => {
    let finalObj = {...obj};
    finalObj[key] = val;
    return finalObj;

}


