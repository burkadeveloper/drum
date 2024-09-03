  
   

    
   
        const values = [1,2,3,4,5,6];
        let  randomValue = Math.floor(Math.random() * values.length +1)
        const displayNone =   document.getElementsByClassName('top-circle-elem')
        
        
        if(randomValue == 1){
            console.log(displayNone)
           
           displayNone[1].style.backgroundColor = "transparent"
           displayNone[2].style.backgroundColor= "transparent"
           displayNone[3].style.backgroundColor = "transparent"
           displayNone[4].style.backgroundColor = "transparent"
            displayNone[5].style.backgroundColor = "transparent"
           
        }
        else if(randomValue == 2){
            
            displayNone[1].style.backgroundColor = "transparent"
            displayNone[2].style.backgroundColor= "transparent"
            displayNone[3].style.backgroundColor = "transparent"
            displayNone[4].style.backgroundColor = "transparent"  
                 
        }
        else if(randomValue == 3){
           
            displayNone[1].style.backgroundColor = "transparent"
            
            displayNone[3].style.backgroundColor = "transparent"
            displayNone[4].style.backgroundColor = "transparent"  
                     
        }
        else if(randomValue == 4){
           
            displayNone[1].style.backgroundColor = "transparent"
            displayNone[4].style.backgroundColor = "transparent"  
                     
        }
        else if(randomValue == 5){
           
            
            displayNone[4].style.backgroundColor = "transparent"  
                     
        } 
    

    const values2 = [1,2,3,4,5,6];
    
    const displayNonee =   document.getElementsByClassName('dies-value')
    
    let  randomValuee = Math.floor(Math.random() * values.length +1)
    if(randomValuee == 1){
        console.log(displayNone)
       
       displayNonee[1].style.backgroundColor = "transparent"
       displayNonee[2].style.backgroundColor= "transparent"
       displayNonee[3].style.backgroundColor = "transparent"
       displayNonee[4].style.backgroundColor = "transparent"
        displayNonee[5].style.backgroundColor = "transparent"
       
    }
    else if(randomValuee == 2){
        
        displayNonee[1].style.backgroundColor = "transparent"
        displayNonee[2].style.backgroundColor= "transparent"
        displayNonee[3].style.backgroundColor = "transparent"
        displayNonee[4].style.backgroundColor = "transparent"  
             
    }
    else if(randomValuee == 3){
       
        displayNonee[1].style.backgroundColor = "transparent"
        
        displayNonee[3].style.backgroundColor = "transparent"
        displayNonee[4].style.backgroundColor = "transparent"  
                 
    }
    else if(randomValuee == 4){
       
        displayNonee[1].style.backgroundColor = "transparent"
        displayNonee[4].style.backgroundColor = "transparent"  
                 
    }
    else if(randomValuee == 5){
       
        
        displayNonee[4].style.backgroundColor = "transparent"  
                 
    } 
    if(randomValuee < randomValue){
        document.querySelector('.winner').innerHTML = "player one has won"
    }  
    else if(randomValuee >randomValue){
        document.querySelector('.winner').innerHTML = "player two has won"
    }
    else{
        document.querySelector('.winner').innerHTML = "draw"  
    }
    
    
 




    