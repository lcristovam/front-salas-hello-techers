


document.addEventListener("DOMContentLoaded", function(event) {
    let createRoomDiv = document.querySelector('#create-room')
   
    let buttonCreateRoom = document.querySelector('.create-room');

    let enterRoomDiv = document.querySelectorAll('.enter-room-div')

    buttonCreateRoom.addEventListener('click', (event)=>{


        enterRoomDiv.forEach( (div) =>{
            console.log(div )
            div.classList.remove('active')
            div.classList.add('hidden')
        })
    

        createRoomDiv.classList.add('active')
        createRoomDiv.classList.remove('hidden')
    
        
    })

}
)










