function receivesAFunction(thing){
    return thing();
}

function returnsAnAnonymousFunction(){
 return function () {
    return `dog`
 }
}

function returnsANamedFunction(){
    return function dog () {return `Dog` + `barks`}
}