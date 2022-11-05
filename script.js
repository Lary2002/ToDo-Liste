
var list1 = document.getElementById('uncompleted');
var list2 = document.getElementById('completed');
const enter = document.querySelector('.enter')
//const btn = document.querySelector('.enter');
let todos = [];


function show(element) {
    element.style.display = 'flex';
}

function hide(element) {
    element.style.display = 'none';
}


    

function add() {
    const todo = document.createElement('p'); 
    const completed = document.createElement('img');
    const check = document.createElement('img');
    const line = document.createElement('div');
    const space = document.createElement('div')
    const trash = document.createElement('img');
    var item = document.querySelector('#item');
    todos.push(item.value);
    const option =document.createElement('img');
    localStorage.setItem('todos', JSON.stringify(todos)) ;
    const storedTodo = localStorage.getItem('todos')?.toString();
    
    
    if (storedTodo) {
        todos = JSON.parse(storedTodo);
        console.log(todos);
    }

    option.className = 'option';
    space.style.width = '100px';
    space.style.marginLeft = '50px'
    trash.className = 'trash'; 
    todo.innerText = item.value;  
    line.className = 'line'
    completed.className = 'complete'
    check.className = 'check';
    line.appendChild(completed)
    line.appendChild(check);
    line.appendChild(todo);
    line.appendChild(space);
    line.appendChild(trash);
    line.appendChild(option);
    list1.appendChild(line);
    
    var listes = document.querySelectorAll('.line');
    
    for (const line of listes) {


        option.addEventListener('click', ()=>{
            hide(option);
            show(trash);
            line.className = 'clickedline';
            trash.addEventListener('click', (e)=>{
                console.log(e);
                var parent = e.path[2];
                parent.removeChild(e.path[1]);
            });

            /* document.addEventListener('click', ()=>{
                line.className = 'unclickedline';
            }); */
            
        })

        check.addEventListener('click', (line)=>{
            
            console.log(line);
            var select = line.path[1];
            select.className = 'select';
            var selected = document.querySelectorAll('.select');
            hide(option);
            hide(trash);
            hide(check);
            show(completed);

            const remove = document.querySelector('.remove');
            remove.addEventListener('click', ()=>{
                for (const item of selected) {
                    hide(item);
                    //list1.removeChild(line)
                }
            });

            completed.addEventListener('click', (e)=>{
                console.log(e);
                var deselect = e.path[1];
                deselect.className = 'deselect';
                show(option);
                hide(trash);
                hide(completed);
                show(check);
            });

            
        }); 
    }
}




document.addEventListener('keydown', (e)=>{
    
        if (e.key =='Enter') {
            add();
            on
        }
        
    
   
})
