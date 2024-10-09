function removeCharacter(str, position) {
    return str.slice(0, position) + str.slice(position + 1);
}

console.log(removeCharacter("Python", 0));  
console.log(removeCharacter("Python", 3));  
console.log(removeCharacter("Python", 5)); 
