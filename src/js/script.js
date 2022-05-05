
function listenDeleteTask(){
    const buttonsDelete = document.querySelectorAll('.delete');
    function callback(item,index){
        item.addEventListener('click', ()=>{
            item.parentElement.remove();
        });
    };  
    buttonsDelete.forEach(callback);   
};

const buttonSorted = document.querySelector('.sort1')
buttonSorted.addEventListener('click', ()=>{
    let tasksSorted = [];
    let tasksUnsorted = document.querySelectorAll('.task');
    tasksUnsorted.forEach((element)=>{
        tasksSorted.push(element.firstChild.value);
        element.remove()
    });  
    if (buttonSorted.className=='sort1'){
        tasksSorted.sort()
        buttonSorted.className = 'sort2';
    }else{
        tasksSorted.sort()
        tasksSorted.reverse()
        buttonSorted.className = 'sort1';
    };
    tasksSorted.forEach((elementofArray)=>{
        let newTask = document.createElement('div');
        newTask.className = 'task';
        let buttonDelete = document.createElement('div'); 
        buttonDelete.className='delete';
        let inputZone = document.createElement('input');
        inputZone.value = elementofArray
        newTask.append(inputZone);
        newTask.append(buttonDelete);
        tasksBoard.append(newTask); 
    });
    listenDeleteTask(); 
});
const tasksBoard = document.querySelector('.tasks-board');
const buttonAppendTask = document.querySelector('.button');
buttonAppendTask.addEventListener('click',()=>{
    let element = document.createElement('div');
    element.className = 'task';
    let buttonDelete = document.createElement('div'); 
    buttonDelete.className='delete';
    let inputZone = document.createElement('input');
    element.append(inputZone);
    element.append(buttonDelete);
    tasksBoard.append(element);
    listenDeleteTask();
});










