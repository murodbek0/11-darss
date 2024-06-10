// 1 misol

// function getLasChar(str) {
//     if(str.length ===0){
//        return '';

//     }

//     return str[str.length - 1];

// }

// console.log(getLasChar('salom'));
// console.log(getLasChar('hayr'));
// console.log(getLasChar(''));

// 2 misol

// function grtMiddleChar(str) {
//   let a = str.length;
//   let middle = Math.floor(a / 2);
//   if (a % 2 == 0) {
//     return [middle - 1] + srt[middle];
//   } else {
//     return str[middle];
//   }
// }

// console.log(grtMiddleChar("salom", "hayr", "olma", "behi"));

// 3 misol

// function getFirstCharCode(str) {
//   if (str.length === 0) {
//     return null;
//   }
//   return str.charCodeAt(0);
// }
// console.log(getFirstCharCode("salom", "hayr", "olma", "behi", ""));

// 4 misol

// function getStringLengthDescription(str) {
//   let length = str.length;
//   if (length > 10) {
//     return "uzoq string";
//   } else {
//     return "qisqa string";
//   }
// }
// console.log(
//   getStringLengthDescription("salom", "hayr", "olma anor shftoli", "behianjir")
// );

// 5 misol

// function getCharCodes(str) {
//     let a = [];
//     for (let i = 0; i < str.length; i++){
//      a.push(str.charCodeAt(i))

//     }
//     return a;
// }
// console.log(getCharCodes("salom", "hayr","alik", "olma",''));

// 6 misol
// function getFirstThreeChars(str) {
//     return str.slice(0,3)

// }
// console.log(getFirstThreeChars("salom", "hayr","alik", "olma",''));

// 7 misol

// function getLastFiveChars(str) {
//     return str.slice(-5)

// }

// console.log( getLastFiveChars("salom",''));
// console.log( getLastFiveChars("hayr",''));
// console.log( getLastFiveChars("murodbek", ''));

// 8 misol

// function getMiddleChars(str) {
//     let length = str.length;
//     let middleChares = '';
//     if(length % 2 === 0){
//         middleChares =str.substring(length / 2-1,length / 2+1);

//     }else{
//     middleChares =str.substring(Math.floor(length / 2),Math.floor(length / 2)+1);

//     }
//     return middleChares;
// }
// console.log(getMiddleChars('salom'));
// console.log(getMiddleChars('hayr'));
// console.log(getMiddleChars('olma'));

// 9 misol

// function getThreeCharsFromFifthIndex(str) {

//     let theeChars =str.substr(5,3);
//     return theeChars;

// }
// console.log(getThreeCharsFromFifthIndex('salom'));
// console.log(getThreeCharsFromFifthIndex('hayrli'));
// console.log(getThreeCharsFromFifthIndex('bexi'));

// 10 misol

// function getFirstTenChars(str) {
//     let a = str.substring(0,10);
//     return a;
// }
// console.log(getFirstTenChars('salom bolalar'));
// console.log(getFirstTenChars('hayr bolalar'));
// console.log(getFirstTenChars('qalamlar bor '));

// 11 misol
// function getLastThreeChars(str) {

//     let theeChars =str.substr(-3);
//     return theeChars;

// }
// console.log(getLastThreeChars('salom'));
// console.log(getLastThreeChars('hayrli'));
// console.log(getLastThreeChars('bexi'));

// 12 misol
// function getSubstringFromSecondIndex(str) {

//     let theeChars =str.substr(2);
//     return theeChars;

// }
// console.log(getSubstringFromSecondIndex('salom'));
// console.log(getSubstringFromSecondIndex('hayrli'));
// console.log(getSubstringFromSecondIndex('bexi'));

// 13 misol

// function convertToUpperCase(str) {
//     let a =str.toUpperCase();
//     return a;

// }
// console.log(convertToUpperCase('javasckrip'));
// console.log(convertToUpperCase('salom qalesiz'));
// console.log(convertToUpperCase('hayrli'));

// 14 misol
// function convertToLowerCase(str) {
//     let a =str.toLowerCase();
//     return a;

// }
// console.log(convertToLowerCase('JAVASCKRIP'));
// console.log(convertToLowerCase('SALOM'));
// console.log(convertToLowerCase('HAYRLI'));

// 15 misol

// function concatStrings(str1,str2) {
//     let a= str1.concat(str2);
//     return a ;

// }
// console.log(concatStrings('salom','qalesiz'));
// console.log(concatStrings('java','sckrip'));
// console.log(concatStrings('salom','hayr'));

// 16 misol

// function trimString(str) {
//     let a = str.trim();
//     return a ;

// }
// console.log(trimString('                   javasckrip                                           '));
// console.log(trimString('                    salom qalesiz                         '));
// console.log(trimString('                                      hayrli                                       '));

// 17 misol

// function padStringStart(str , maxLength,padChar) {
//     let a = str.padStart(padChar,maxLength);
//     return a ;
// }
// console.log(padStringStart('123','.',10));
// console.log(padStringStart('salom','-',44));
// console.log(padStringStart('hayrli','*',55));

// 18 misol
// function padStringEnd(str , maxLength,padChar) {
//     let a = str.padEnd(padChar,maxLength);
//     return a ;
// }
// console.log(padStringEnd('123',5,'o'));
// console.log(padStringEnd('salom',44,'-'));
// console.log(padStringEnd('hayrli',55,'*'));

// 19 misol
// function trimEndString(str) {
//     let a = str.trimEnd();
//     return a ;

// }
// console.log(trimEndString('                   javasckrip                                           '));
// console.log(trimEndString('                    salom qalesiz                         '));
// console.log(trimEndString('                     hayrli                                       '));

// 20 misol
// function trimStartString(str) {
//     let a = str.trim();
//     return a ;

// }
// console.log(trimStartString('                   javasckrip                                           '));
// console.log(trimStartString('                    salom qalesiz                         '));
// console.log(trimStartString('                     hayrli                                       '));

// 21 misol
// function padStringWithZerosStart(str,maxLength) {
//     let a = str.padStart(maxLength,0);
//     return a;
    
// }
// console.log(padStringWithZerosStart('123',5));
// console.log(padStringWithZerosStart('salom',44));
// console.log(padStringWithZerosStart('hayrli',55));

// 22 misol

// function padStringWithSpacesEnd(str,maxLength) {
//     return str.padEnd(maxLength);
    
// }
// console.log(padStringWithSpacesEnd('123',5));
// console.log(padStringWithSpacesEnd('salom',44));

// 23 misol
// function repeatString(str,n) {
//     return str.repeat(n);
    
// }
// console.log(repeatString('salom',10));

// 24 misol

// function replaceAppleWithOrange(str) {
//     return str.replace('apple','orange');
    
// }
// console.log(replaceAppleWithOrange('apple'));

// 25misol

// function replaceFirstSmallAToBigA(str) {
//     return str.replace('a','A');
    
// }
// console.log(replaceFirstSmallAToBigA('abdulaziz'));

// 26 misol

// function replaceAllCatsWithDogs(str) {
//     return str.replaceAll('cat','dog')
    
// }
// console.log(replaceAllCatsWithDogs('cat sgaerhtjscnsffkszbsjetfdfbdffd cat'));

// 27 misol

// function splitBySpaces(str) {
//     return str.split('');
    
// }
// console.log(splitBySpaces('salom'));
// console.log(splitBySpaces('hayr'));

// 28 misol
// function splitByCommas(str) {
//     return str.split();
    
// }
// console.log(splitByCommas('salom'));
// console.log(splitByCommas('hayr'));

// 29 misol

// function splitByEachCharacter(str) {
//     return str.split('');
    
// }
// console.log(splitByEachCharacter('salom'));
// console.log(splitByEachCharacter('hayr'));

// 30 misol

// function splitByDelimiter(str) {
//     return str.split('delimiter',);
    
// }
// console.log(splitByDelimiter('salom'));
// console.log(splitByDelimiter('hayr'));
