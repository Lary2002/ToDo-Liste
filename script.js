
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
    const trash = document.createElement('img');

    var item = document.querySelector('#item');
    trash.className = 'trash'; 
    todo.innerText = item.value;  
    line.className = 'line'
    completed.className = 'complete'
    check.className = 'check';
    line.appendChild(completed)
    line.appendChild(check);
    line.appendChild(todo);
    line.appendChild(trash);
    list1.appendChild(line);
    //todos.push(line)


    var listes = document.querySelectorAll('.line');
    localStorage.setItem('todos', listes) 
    //var locaItem =JSON.parse( localStorage.getItem('todos'));
    
    for (const line of listes) {


        line.addEventListener('click', (e)=>{
            console.log(e);
            hide(check);
            //show(completed)
            show(trash)
            line.style.cssText = `justify-content: space-between;
            background-color: rgb(246, 251, 174);`
        })

        check.addEventListener('click', (line)=>{
            
            console.log(line);
            var select = line.path[1];
            select.className = 'select';
            var selected = document.querySelectorAll('.select');
            hide(check);
            show(completed);

            const remove = document.querySelector('.remove');
            remove.addEventListener('click', ()=>{
                for (const item of selected) {
                    hide(item);
                }
            })

            completed.addEventListener('click', (e)=>{
                console.log(e);
                var deselect = e.path[1];
                deselect.className = 'deselect';
                hide(completed);
                show(check)
            })

            
        })  
    }
}


document.addEventListener('keydown', (e)=>{
    
        if (e.key =='Enter') {
            add();
            on
        }
        
    
   
})
