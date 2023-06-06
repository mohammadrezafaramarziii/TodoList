

// ********** change page between tasks list and do tasks list start **********

// get elements
const titleTop = document.getElementById("title-top");
const titleNav = document.getElementById("title-nav");
const btnCreateTask = document.getElementById("btn-create-task");
const btnDoPage = document.getElementById("btn-do-page");
const btnTaskPage = document.getElementById("btn-task-page");
let statePage = "tasks";


// change page function
function changePage() {
    const tasksList = document.getElementById('tasks-list-box');
    const doTasksList = document.getElementById('do-tasks-box');

    if(statePage == "tasks")
    {
        statePage = "do-tasks";
        tasksList.style.display = "none";
        doTasksList.style.display = "grid";
        titleTop.innerText = "وظایف انجام شده";
        titleNav.innerText = "وظایف انجام شده";

        btnCreateTask.style.display = "none";
        btnDoPage.style.display = "none";
        btnTaskPage.style.display = "inline-block";
    }
    else
    {
        statePage = "tasks";
        doTasksList.style.display = "none";
        tasksList.style.display = "grid";
        titleTop.innerText = "وظایف من";
        titleNav.innerText = "وظایف من";

        btnCreateTask.style.display = "inline-block";
        btnDoPage.style.display = "inline-block";
        btnTaskPage.style.display = "none";
    }
}
// ********** change page between tasks list and do tasks list end **********





// ********** change mode page between dark and light start **********
const html = document.getElementById('html');
const btnChangeMode = document.getElementById('btn-change-mode');
let stateMode = "light";


function changeMode () {
    if(stateMode == "light")
    {
        stateMode = "dark";
        html.classList.toggle('light');
        html.classList.toggle('dark');
        btnChangeMode.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 md:w-6" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M11.017 2.802a9.25 9.25 0 1 0 10.181 10.181A7.25 7.25 0 1 1 11.017 2.802ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25c.717 0 1.075.571 1.137 1.026c.059.438-.103.995-.606 1.299a5.75 5.75 0 1 0 7.894 7.894c.304-.503.861-.665 1.299-.606c.455.062 1.026.42 1.026 1.137c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12Z" clip-rule="evenodd"/></svg>';
    }
    else
    {
        stateMode = "light";
        html.classList.toggle('light');
        html.classList.toggle('dark');

        btnChangeMode.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 md:w-6" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 2.75a6.75 6.75 0 0 0-4.5 11.78l.003.004c.557.499.98.877 1.282 1.155c.285.26.51.474.629.62l.012.015c.222.273.414.511.542.796c.127.284.175.587.231.934l.003.02c.029.178.04.396.045.676h3.506c.005-.28.016-.498.045-.676l.003-.02c.056-.347.104-.65.231-.934c.128-.285.32-.523.542-.796l.012-.015c.119-.146.344-.36.629-.62c.302-.278.725-.656 1.282-1.155l.004-.004A6.75 6.75 0 0 0 12 2.75Zm1.744 17.5h-3.488c.004.104.009.195.016.277c.02.225.055.307.079.348a.75.75 0 0 0 .274.274c.04.024.123.058.348.079c.235.021.546.022 1.027.022c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.079a.75.75 0 0 0 .274-.274c.024-.04.059-.123.079-.348c.007-.082.012-.173.016-.277ZM3.75 9.5a8.25 8.25 0 1 1 13.752 6.148a169.1 169.1 0 0 0-1.274 1.146a16.373 16.373 0 0 0-.44.42a1.259 1.259 0 0 0-.036.039c-.26.321-.317.404-.35.479c-.034.075-.058.172-.123.58c-.026.161-.029.437-.029 1.188v.032c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.251 2.251 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028h-.065c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13V19.5c0-.75-.003-1.027-.029-1.188c-.065-.408-.09-.505-.123-.58c-.033-.075-.09-.158-.35-.48l-.01-.01a16.46 16.46 0 0 0-.467-.448c-.294-.27-.71-.643-1.273-1.146A8.231 8.231 0 0 1 3.75 9.5Zm6.142 3.85a.75.75 0 0 1 1.025.274a1.25 1.25 0 0 0 2.166 0a.75.75 0 1 1 1.299.752a2.757 2.757 0 0 1-1.632 1.27V17a.75.75 0 0 1-1.5 0v-1.354a2.757 2.757 0 0 1-1.632-1.27a.75.75 0 0 1 .274-1.025Z" clip-rule="evenodd"/></svg>';
    }
}
// ********** change mode page between dark and light end **********





// ********** create task box start **********

// get elements
const btnAddTask = document.getElementById('btn-add-task');
const txtTitleTask = document.getElementById('txt-title-task');
const txtDescTask = document.getElementById('txt-desc-task');
const addTeskBox = document.getElementById('add-task-box');
const taskListBox = document.getElementById('tasks-list-box');

// open box
function OpenTaskBox(){
    txtTitleTask.value = "";
    txtDescTask.value = "";
    addTeskBox.style.display = "flex";
}

// close box
function CloseTaskBox(){
    addTeskBox.style.display = "none";
}

// check for fill title task
function checkFillInput() {
    if(txtTitleTask.value == "")
    {
        btnAddTask.disabled = true;
    }
    else
    {
        btnAddTask.disabled = false;
    }
}

// ********** create task box end **********





// ********** remove task start **********

function deleteTask(e){
    e.remove();
}

// ********** remove task end **********





// ********** show task start **********

// get elements
const showDataTask = document.getElementById('show-task-box');
const TitleTask = document.getElementById('title-task');
const DescriptionTask = document.getElementById('desc-task');

// open
function showTask(titleTask, descTask) {
    TitleTask.innerText = titleTask.innerText;
    DescriptionTask.innerText = descTask.innerText;
    showDataTask.style.display = "flex";
}

// close
function showTaskClose(){
    showDataTask.style.display = "none";
}

// ********** show task end **********





// ********** add task to do tasks start **********

function doTask(taskDoIt,title, desc) {

    // ----- get and create elements -----
    const doTaskBox = document.getElementById('do-tasks-box');
    const newBoxTask = document.createElement('div');
    const dataTaskBox = document.createElement('div');
    const titleTask = document.createElement('del');
    const descTask = document.createElement('p');
    const buttonDeleteBox = document.createElement('div');
    const buttonDelete = document.createElement('button');
    


    // ----- classes lists -----
    let newBoxTaskClass = [
        'w-full',
        'flex',
        'justify-between',
        'p-5',
        'bg-transparent',
        'border',
        'border-slate-200',
        'dark:border-slate-200/10',
        'rounded-xl',
        'duration-100',
        'cursor-pointer'
    ];

    let dataTaskBoxClass = [
        'w-full',
        'flex',
        'flex-col',
        'gap-2',
        'truncate',
        'text-slate-400',
    ];

    let descTaskClass = [
        'text-xs',
    ];

    let buttonDeleteBoxClass = [
        'flex',
        'items-center',
        'justify-center'
    ];

    let buttonDeleteClass = [
        'text-slate-600',
        'dark:text-slate-400',
        'p-2',
        'hover:bg-slate-200',
        'dark:hover:bg-slate-800',
        'rounded-xl',
        'duration-100'
    ];



    // ----- add classes in elements -----
    for(var classes in newBoxTaskClass)
    {
        newBoxTask.classList.add(newBoxTaskClass[classes]);
    }

    for(var classes in dataTaskBoxClass)
    {
        dataTaskBox.classList.add(dataTaskBoxClass[classes]);
    }

    for(var classes in descTaskClass)
    {
        descTask.classList.add(descTaskClass[classes]);
    }

    for(var classes in buttonDeleteBoxClass)
    {
        buttonDeleteBox.classList.add(buttonDeleteBoxClass[classes]);
    }

    for(var classes in buttonDeleteClass)
    {
        buttonDelete.classList.add(buttonDeleteClass[classes]);
    }



    // ----- add data in elements -----
    buttonDelete.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><g fill="currentColor"><path d="M12 2.75a2.25 2.25 0 0 0-2.122 1.5a.75.75 0 0 1-1.414-.5a3.751 3.751 0 0 1 7.072 0a.75.75 0 0 1-1.414.5A2.251 2.251 0 0 0 12 2.75ZM2.75 6a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5h-17A.75.75 0 0 1 2.75 6Zm3.165 2.45a.75.75 0 1 0-1.497.1l.464 6.952c.085 1.282.154 2.318.316 3.132c.169.845.455 1.551 1.047 2.104c.591.554 1.315.793 2.17.904c.822.108 1.86.108 3.146.108h.879c1.285 0 2.324 0 3.146-.108c.854-.111 1.578-.35 2.17-.904c.591-.553.877-1.26 1.046-2.104c.162-.814.23-1.85.316-3.132l.464-6.952a.75.75 0 0 0-1.497-.1l-.46 6.9c-.09 1.347-.154 2.285-.294 2.99c-.137.685-.327 1.047-.6 1.303c-.274.256-.648.422-1.34.512c-.713.093-1.653.095-3.004.095h-.774c-1.35 0-2.29-.002-3.004-.095c-.692-.09-1.066-.256-1.34-.512c-.273-.256-.463-.618-.6-1.303c-.14-.705-.204-1.643-.294-2.99l-.46-6.9Z"/><path d="M9.425 10.254a.75.75 0 0 1 .821.671l.5 5a.75.75 0 0 1-1.492.15l-.5-5a.75.75 0 0 1 .671-.821Zm5.821.821a.75.75 0 0 0-1.492-.15l-.5 5a.75.75 0 0 0 1.492.15l.5-5Z"/></g></svg>`;
    titleTask.innerText = title.innerText;
    descTask.innerText = desc.innerText;



    // ----- add elements in parent element
    dataTaskBox.appendChild(titleTask);
    dataTaskBox.appendChild(descTask);
    buttonDeleteBox.appendChild(buttonDelete);
    buttonDelete.addEventListener('click', ()=>deleteTask(newBoxTask));
    newBoxTask.appendChild(dataTaskBox);
    newBoxTask.appendChild(buttonDeleteBox);
    doTaskBox.appendChild(newBoxTask);



    // ----- delete task from tasks list after move to do tasks -----
    deleteTask(taskDoIt);
}
// ********** add task to do tasks end **********





// ********** add new task start **********

function addTask () {

    // ----- get and create elements -----
    const newBoxTask = document.createElement('div');
    const dataTaskBox = document.createElement('div');
    const titleTask = document.createElement('h2');
    const descTask = document.createElement('p');
    const buttonDeleteBox = document.createElement('div');
    const buttonDoBox = document.createElement('div');
    const buttonDelete = document.createElement('button');
    const buttonDo = document.createElement('button');



    // ----- classes lists -----
    let newBoxTaskClass = [
        'w-full',
        'flex',
        'justify-between',
        'p-5',
        'bg-white',
        'dark:bg-slate-800',
        'border',
        'border-slate-200',
        'dark:border-slate-200/10',
        'rounded-xl',
        'hover:border-red-500',
        'hover:dark:border-red-500',
        'duration-100',
        'cursor-pointer'
    ];

    let dataTaskBoxClass = [
        'w-full',
        'flex',
        'flex-col',
        'gap-2',
        'truncate'
    ];

    let titleTaskClass = [
        'text-slate-900',
        'dark:text-white',
    ];


    let descTaskClass = [
        'text-xs',
        'text-slate-600',
        'dark:text-slate-400',
    ];

    let buttonDeleteBoxClass = [
        'flex',
        'items-center',
        'justify-center'
    ];

    let buttonDeleteClass = [
        'text-slate-600',
        'dark:text-slate-400',
        'p-2',
        'hover:bg-slate-100',
        'dark:hover:bg-slate-900',
        'rounded-xl',
        'duration-100'
    ];

    let buttonDoBoxClass = [
        'flex',
        'items-center',
        'justify-center'
    ];

    let buttonDoClass = [
        'text-slate-600',
        'dark:text-slate-400',
        'p-2',
        'hover:bg-slate-100',
        'dark:hover:bg-slate-900',
        'rounded-xl',
        'duration-100'
    ];



    // ----- add classes in elements ------
    for(var classes in newBoxTaskClass)
    {
        newBoxTask.classList.add(newBoxTaskClass[classes]);
    }



    for(var classes in dataTaskBoxClass)
    {
        dataTaskBox.classList.add(dataTaskBoxClass[classes]);
    }



    for(var classes in titleTaskClass)
    {
        titleTask.classList.add(titleTaskClass[classes]);
    }



    for(var classes in descTaskClass)
    {
        descTask.classList.add(descTaskClass[classes]);
    }



    for(var classes in buttonDeleteBoxClass)
    {
        buttonDeleteBox.classList.add(buttonDeleteBoxClass[classes]);
    }



    for(var classes in buttonDeleteClass)
    {
        buttonDelete.classList.add(buttonDeleteClass[classes]);
    }


    for(var classes in buttonDoBoxClass)
    {
        buttonDoBox.classList.add(buttonDoBoxClass[classes]);
    }



    for(var classes in buttonDoClass)
    {
        buttonDo.classList.add(buttonDoClass[classes]);
    }



    // ----- add data in element ------
    buttonDelete.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><g fill="currentColor"><path d="M12 2.75a2.25 2.25 0 0 0-2.122 1.5a.75.75 0 0 1-1.414-.5a3.751 3.751 0 0 1 7.072 0a.75.75 0 0 1-1.414.5A2.251 2.251 0 0 0 12 2.75ZM2.75 6a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5h-17A.75.75 0 0 1 2.75 6Zm3.165 2.45a.75.75 0 1 0-1.497.1l.464 6.952c.085 1.282.154 2.318.316 3.132c.169.845.455 1.551 1.047 2.104c.591.554 1.315.793 2.17.904c.822.108 1.86.108 3.146.108h.879c1.285 0 2.324 0 3.146-.108c.854-.111 1.578-.35 2.17-.904c.591-.553.877-1.26 1.046-2.104c.162-.814.23-1.85.316-3.132l.464-6.952a.75.75 0 0 0-1.497-.1l-.46 6.9c-.09 1.347-.154 2.285-.294 2.99c-.137.685-.327 1.047-.6 1.303c-.274.256-.648.422-1.34.512c-.713.093-1.653.095-3.004.095h-.774c-1.35 0-2.29-.002-3.004-.095c-.692-.09-1.066-.256-1.34-.512c-.273-.256-.463-.618-.6-1.303c-.14-.705-.204-1.643-.294-2.99l-.46-6.9Z"/><path d="M9.425 10.254a.75.75 0 0 1 .821.671l.5 5a.75.75 0 0 1-1.492.15l-.5-5a.75.75 0 0 1 .671-.821Zm5.821.821a.75.75 0 0 0-1.492-.15l-.5 5a.75.75 0 0 0 1.492.15l.5-5Z"/></g></svg>`;
    buttonDo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" stroke-linejoin="round" d="m8.5 12.5l2 2l5-5"/></g></svg>`;
    titleTask.innerText = txtTitleTask.value;

    if(txtDescTask.value == "")
    {
        descTask.innerText = "بدون توضیحات"
    }
    else
    {
        descTask.innerText = txtDescTask.value;
    }



    // ----- add elements in parent element ------
    dataTaskBox.appendChild(titleTask);
    dataTaskBox.appendChild(descTask);
    buttonDeleteBox.appendChild(buttonDelete);
    buttonDoBox.appendChild(buttonDo);
    buttonDelete.addEventListener('click', ()=>deleteTask(newBoxTask));
    dataTaskBox.addEventListener('click', ()=>showTask(titleTask, descTask));
    buttonDo.addEventListener('click', ()=>doTask(newBoxTask, titleTask, descTask));

    newBoxTask.appendChild(dataTaskBox);
    newBoxTask.appendChild(buttonDeleteBox);
    newBoxTask.appendChild(buttonDoBox);

    taskListBox.appendChild(newBoxTask);


    // ----- close task box -----
    CloseTaskBox();
}

// ********** add new task end **********





// ********** scroll navbar and header start **********

window.addEventListener('scroll', function(){
    const navLocation = this.document.getElementById('nav').getBoundingClientRect().top;
    const titleTop = document.getElementById("title-top");
    const titleNav = document.getElementById("title-nav");

    if(navLocation > 20)
    {
        titleTop.classList.remove("opacity-0");
        titleNav.classList.remove("opacity-100");
    } 
    else
    {
        titleTop.classList.add("opacity-0");
        titleNav.classList.add("opacity-100");
    }
})

// ********** scroll navbar and header end **********
