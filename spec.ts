import { main } from './main';

const alg = main;
const throwE = function(){throw new Error();};
///////////////////////////////////////////////////////////////////////////
const collection = Object.freeze({
    uppercase:"A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"             .split(" "),
    lowercase:"a b c d e f g h i j k l m n o p q r s t u v w x y z"             .split(" "),
    numbers:  "0 1 2 3 4 5 6 7 8 9 0"                                           .split(" "),
    symbols:  "` ~ ! @ # $ % ^ & * ( ) _ - + = [ { ] } | : ; \" ' , < . > / ?"  .split(" ")
});
///////////////////////////////////////////////////////////////////////////
typeof alg === "function" || throwE();
let _0 = alg({
    data:       ["a", "Z", "3", "&"],
    collection: collection
});

console.log(_0);

_0.uppercase === 1 || throwE();
_0.lowercase === 1 || throwE();
_0.numbers   === 1 || throwE();
_0.symbols   === 1 || throwE();