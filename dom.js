// GiveElementryByClassName//
// var items =document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[0].style.fontWeight='bold';
// items[1].style.fontWeight='bold';
// items[2].style.fontWeight='bold';
// items[3].style.fontWeight='bold';
// items[2].style.backgroundColor='green';

// // GiveElementryByTagName //
// var li =document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[0].style.fontWeight='bold';
// li[1].style.fontWeight='bold';
// li[2].style.fontWeight='bold';
// li[3].style.fontWeight='bold';
// li[2].style.backgroundColor='yellow';
// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor ='#f4f4f4';


// //Querysellector//

// // var header = document.querySelector('#main-header');
// // header.style.borderBottom = 'solid 4px red';
// // var inpur = document.querySelector('input');
// //  inpur.value='Hello World';
// //  var submit =document.querySelector('input[type="submit"]');
// //  submit.value="SEND";
// //  var Thirditem=document.querySelector('.list-group-item:nth-child(3)');
// //  Thirditem.style.color ='white';
// //  var SecondItem = document.querySelector('.list-group-item:nth-child(2)');
// //  SecondItem.style.backgroundColor = 'green';


//  // QuerySelectorALL//

 
// // var SecondItem = document.querySelector('.list-group-item:nth-child(2)');
// // // SecondItem.style.color='green';

// // var odd =document.querySelectorAll('li:nth-child(odd)');
// // for(var i= 0 ; i<odd.length ; i++){

// // odd[i].style.backgroundColor ='green';
// // }


// // TravesingNodes//

 var itemList = document.querySelector('#items');
// // ParentsNode//
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

// ParentElement //

console.log(itemList.parentElement);
 itemList.parentElemente.style.backgroundColor ='#f4f4f4';
 console.log(itemList.parentElement.parentElement.parentElement);
 
//  // childNode//
 console.log(itemList.childNodes);

 console.log(itemList.children);
 console.log(itemList.children[1]);
 itemList.children[1].style.backgroundColor='pink';

// lastelementchild//
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Sharpener';

// LastChild//
console.log(itemList.lastChild);

//nextsibling//
console.log(itemList.nextSibling);

//nextelementsibling//

console.log(itemList.nextElementSibling);
//previoussibling//
console.log(itemList.previousSibling);

//previouselementsibling//
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';

//createelement//

//create a div//
var newDiv = document.createElement('div');

//Add class//

newDiv.className='hello';

//Add Id//

newDiv.id='hello1';

//Add Atribute//

newDiv.setAttribute('title','Hello Div');

// Create textNode//

var newDivText=document.createTextNode('HEllo World');

// Add Text to Div//

newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv);
container.insertBefore(newDiv,h1);


 




