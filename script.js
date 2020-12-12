let items = ['eggs', 'milk'];
//let new =
let input = prompt("What do you want to do?");

while (input !== 'quit') {

    if (input === 'new') {
        input = prompt("Enter the item to add");
        items.push(input);
    }

    else if (input === 'list') {
        for (let i = 0; i < items.length; i++) {
            console.log(items[i]);
        }
    }

    else if (input === 'delete') {
        input = prompt("Enter the index of item to delete");
        items.splice(input, 1);

    }

    input = prompt("...What do you want to do?");
}
console.log("You quit!");
