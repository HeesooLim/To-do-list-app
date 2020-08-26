// IIFE
(function () {
    var body = document.querySelector('body');
    var plusButton = document.querySelector('#plusButton');
    var newActivity = document.getElementById('txtActivity');
    var toDoList = document.querySelector('#toDoList ul');
    var doneList = document.querySelector('#doneList');
    var hr = document.querySelectorAll('hr');
    var listParagraph = document.querySelectorAll('.listP');
    var noActivityParagraph = document.querySelector('#noActivity');
    plusButton.addEventListener('click', function () {
        var activityValue = newActivity.value;
        newActivity.value = null; // reset text input
        if (activityValue) {
            createActivity(activityValue);
        }
    });
    // function creates a new activity using the user input
    function createActivity(activityValue) {
        var li = document.createElement('li');
        li.innerHTML = activityValue + "<button class=\"trash\"><i class=\"far fa-trash-alt\"></i></button><button class=\"check\"><i class=\"far fa-check-square\"></i></button>";
        toDoList.appendChild(li);
        var trash = li.querySelector('.trash');
        trash.addEventListener('click', removeActivity);
        var check = li.querySelector('.check');
        check.addEventListener('click', markActivity);
        checkVisibility();
    }
    // function removes the clicked list item 
    function removeActivity(e) {
        var clickedItem = e.srcElement;
        var targetLi = clickedItem.parentElement.parentElement;
        targetLi.remove();
        checkVisibility();
    }
    // function marks as checked the clicked list item 
    function markActivity(e) {
        var doneList = document.querySelector('#doneList ul');
        // icon <i>
        var clickedElement = e.srcElement;
        // button <button>
        var checkButton = clickedElement.parentElement;
        // list <li>
        var targetLi = checkButton.parentElement;
        checkButton.disabled = true; // check button is disabled once it is clicked
        clickedElement.className = 'fas fa-check-square';
        doneList.appendChild(targetLi);
        checkVisibility();
    }
    function checkVisibility() {
        var toDoListItems = toDoList.querySelectorAll('li');
        var doneListItems = doneList.querySelectorAll('li');
        var para1 = listParagraph[0];
        // if there is any item in to-do or done list, make the lists visible
        if (toDoListItems.length > 0 || doneListItems.length > 0) {
            changeVisibility(true);
            if (noActivityParagraph) {
                noActivityParagraph.remove();
            }
        }
        // there is no item in the lists, it creates the message saying no activity, and makes the lists invisible
        else {
            noActivityParagraph = document.createElement('p');
            noActivityParagraph.id = 'noActivity';
            noActivityParagraph.innerHTML = "No activity";
            body.insertBefore(noActivityParagraph, para1);
            changeVisibility(false);
        }
    }
    function changeVisibility(isVisible) {
        var todoP = listParagraph[0];
        var doneP = listParagraph[1];
        console.log(todoP);
        var todoHr = hr[0];
        var doneHr = hr[1];
        // change the visibility of to-do, and done list's paragraph, hr, and list element
        if (isVisible) {
            todoP.style.marginTop = '100px';
            todoP.style.visibility = 'visible';
            doneP.style.visibility = 'visible';
            todoHr.style.visibility = 'visible';
            doneHr.style.visibility = 'visible';
            toDoList.style.visibility = 'visible';
            doneList.style.visibility = 'visible';
        }
        else {
            todoP.style.visibility = 'hidden';
            doneP.style.visibility = 'hidden';
            todoHr.style.visibility = 'hidden';
            doneHr.style.visibility = 'hidden';
            toDoList.style.visibility = 'hidden';
            doneList.style.visibility = 'hidden';
        }
    }
})();
//# sourceMappingURL=app.js.map