// IIFE
(function() {

    let body = document.querySelector('body');
    let plusButton = document.querySelector('#plusButton');
    let newActivity = document.getElementById('txtActivity') as HTMLInputElement;
    let toDoList = document.querySelector('#toDoList ul') as HTMLElement;
    let doneList = document.querySelector('#doneList') as HTMLElement;
    let hr = document.querySelectorAll('hr');
    let listParagraph = document.querySelectorAll('.listP');
    let noActivityParagraph = document.querySelector('#noActivity') as HTMLElement;

    plusButton.addEventListener('click', () =>
    {
        let activityValue: string = newActivity.value;
        newActivity.value = null;  // reset text input

        if(activityValue)
        {
            createActivity(activityValue);
        }
    });

    // function creates a new activity using the user input
    function createActivity(activityValue: string)
    {
        let li = document.createElement('li');
        li.innerHTML = activityValue + `<button class="trash"><i class="far fa-trash-alt fa-lg"></i></button><button class="check"><i class="far fa-check-square fa-lg"></i></button>`;
        toDoList.appendChild(li);

        let trash = li.querySelector('.trash');
        trash.addEventListener('click', removeActivity);

        let check = li.querySelector('.check');
        check.addEventListener('click', markActivity);

        checkVisibility();
    }

    // function removes the clicked list item 
    function removeActivity(e:Event)
    {
        let clickedItem = e.srcElement as HTMLElement;
        let targetLi = clickedItem.parentElement.parentElement;

        targetLi.remove();

        checkVisibility();
    }

    // function marks as checked the clicked list item 
    function markActivity(e: Event)
    {
        let doneList = document.querySelector('#doneList ul');

        // icon <i>
        let clickedElement = e.srcElement as HTMLElement;

        // button <button>
        let checkButton = clickedElement.parentElement as HTMLButtonElement;

        // list <li>
        let targetLi = checkButton.parentElement;

        checkButton.disabled = true; // check button is disabled once it is clicked

        clickedElement.className = 'fas fa-check-square fa-lg';
        
        doneList.appendChild(targetLi);

        checkVisibility();
    }

    function checkVisibility()
    {
        let toDoListItems = toDoList.querySelectorAll('li');
        let doneListItems = doneList.querySelectorAll('li');
        
        let para1 = listParagraph[0] as HTMLElement;

        // if there is any item in to-do or done list, make the lists visible
        if(toDoListItems.length > 0 || doneListItems.length > 0)
        {
            changeVisibility(true);

            if(noActivityParagraph)
            {
                noActivityParagraph.remove();
            }
        }

        // there is no item in the lists, it creates the message saying no activity, and makes the lists invisible
        else
        {
            noActivityParagraph = document.createElement('p');

            noActivityParagraph.id = 'noActivity';

            noActivityParagraph.innerHTML = `No activity`;

            body.insertBefore(noActivityParagraph, para1);
            
            changeVisibility(false);
        }
    }
    
    function changeVisibility(isVisible)
    {
        let todoP = listParagraph[0] as HTMLElement;
        let doneP = listParagraph[1] as HTMLElement;
        let todoHr = hr[0] as HTMLElement;
        let doneHr = hr[1] as HTMLElement;

        // change the visibility of to-do, and done list's paragraph, hr, and list element
        if(isVisible)
        {
            todoP.style.visibility = 'visible';
            doneP.style.visibility = 'visible';
            todoHr.style.visibility = 'visible';
            doneHr.style.visibility = 'visible';
            toDoList.style.visibility = 'visible';
            doneList.style.visibility = 'visible';
        }
        else
        {
            todoP.style.visibility = 'hidden';
            doneP.style.visibility = 'hidden';
            todoHr.style.visibility = 'hidden';
            doneHr.style.visibility = 'hidden';
            toDoList.style.visibility = 'hidden';
            doneList.style.visibility = 'hidden';
        }
    }
    
    

    
    
})();