   /*
    let input = [ 1,2,3,4,5,6,7,8,9,10,11,12];
    let counter = 0;
    let stack = [];
    const stackFunc=()=>{
    for (let  i= 0; i<=input.length;i++){
        stack.push(i);
        counter=counter+1;
    }
    console.log(stack);
    //console.log(counter);
    
    for (let i = 0 ; i <=input.length;i++){
        if(counter>0){
        stack.pop();
        counter=counter-1;
        console.log(stack);
        console.log(counter);
    }
    }
    };
    
    stackFunc();
    
   
    

    //QUEUE--
    let toDolist= [];
    function input(task){
        toDolist.push(task);
    }
    
    // console.log(toDolist);

    input("apple");
    console.log(toDolist);

    function getTask(){
    toDolist.shift();
    };

    getTask();
    console.log(toDolist);
*/
    
    //STACK-

    let stck = [];

     function input(val){
        stck.push(val);
    }

    input("orange");
    input("apple");
    console.log(stck);

   
    function getStck(){
        stck.pop();
        
    }
    getStck();
    console.log(stck);
     
    getStck();
    console.log(stck);
    

    

    