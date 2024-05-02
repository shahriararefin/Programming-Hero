const name = ['name 1', 'name 3', 'name 4', 'name 5', 'name 6', 'name 3', 'name 5'];


function removeDuplicate(name){

    const unique = [];
    for(let i = 0; i <name.length; i++) {

        const reName= name[i];

        if(unique.includes(reName) === false){
            unique.push(reName);
        }
    }

    return unique;
}

const uniqueName = removeDuplicate(reName);

console.log(uniqueName);