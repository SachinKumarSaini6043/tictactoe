  let boxes=document.querySelectorAll(".box");
  let resetBtn=document.querySelector("#reset-btn");
  let newGamebtn=document.querySelector("#new-btn");
  let msgContener=document.querySelector(".msg-container");
  let msg=document.querySelector("#msg");
  let turnO=true;

  let winPattens=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
  
  ];

  const resetGame=()=>{

    turnO=true;
    enbalboxs()
  }





boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       
      if(turnO===true){
        box.innerText="0";
        turnO=false ;
      }
      else{
        box.innerText="x";
        turnO=true;
        
      }
        box.disabled=true;
        checkWninner()
    })
    })

    const disbalboxs=()=>{
      for(box of boxes){
        box.disabled= true;
      }
    }

    const enbalboxs=()=>{
      for(box of boxes){
        box.disabled= false;
        msgContener.classList.add("hide");
        box.innerText="";
      }
    }


    const showWinner=(winner)=>{
      
      msg.innerText=`congratulations,winner ${winner}`;
      msgContener.classList.remove("hide");
      disbalboxs();

      
      
    }
    

    let checkWninner=()=>{
      for(let pattern of winPattens){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        
        if(pos1val != "" && pos2val != "" && pos3val != ""){
          if(pos1val === pos2val && pos2val===pos3val){
             
            showWinner(pos1val)
          }
        }

      }
    }
    newGamebtn.addEventListener("click",resetGame);
    resetBtn.addEventListener("click",resetGame);

    
