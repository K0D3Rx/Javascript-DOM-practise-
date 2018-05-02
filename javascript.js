const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const addItemInput = document.querySelector('input.addItemInput');
const listUL = document.getElementsByTagName('ul')[0];

//Button variables

const toggleListButton = document.getElementById('toggleList');
const descriptionButton = document.querySelector('button.description');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton'); 

 
//This code toggles everything under the listDiv on and off once the button is clicked. 
toggleListButton.addEventListener('click', () => {   
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list'; //you're changing 'show list to hide list' 
    listDiv.style.display = 'block';
  } else {
    toggleListButton.textContent = 'Show list';                        
    listDiv.style.display = 'none'; 
  }                          
}); 

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
}); 

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = ''; 
});
  
removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li); 
});

//this code will remove the list item when the associated <button> is clicked. without adding another reference (const listUL = getElemenstByTagName('ul')[0]) all buttons clicked will remove the content under the listDiv..in order to rectify this, we must add the listener closer to the list items. we select the <ul> tag as the listener.   

listUL.addEventListener('click', (event) =>{
	if (event.target.tagName == 'BUTTON'){
		if(event.target.className == 'remove'){
			let li = event.target.parentNode;
			let ul = li.parentNode;
			ul.removeChild(li);
	}  
	
		if (event.target.className == 'up'){
			let li = event.target.parentNode;
			let prevLi = li.previousElementSibling; 
			let ul = li.parentNode;
			if(prevLi){
				ul.insertBefore(li,prevLi);  
			}
		
		if (event.target.className == 'down'){
			let li = event.target.parentNode;
			let nextLi = li.nextElementSibling; 
			let ul = li.parentNode;
			if(prevLi){
				ul.insertBefore(nextLi,li);  
			} 
		  }   
	   }
	}  
		 
});    
