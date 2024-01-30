export function Capitalize(word){
    let capitalized = "";
    if(word.length>1){
        const firstLetter = word.charAt(0).toUpperCase();
        capitalized = firstLetter+word.slice(1,word.length);

    }else{
        capitalized = word.toUpperCase();
    }
    return capitalized;
}