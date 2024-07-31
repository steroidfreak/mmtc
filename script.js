var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));


document.addEventListener("DOMContentLoaded", async function(){

    database = await getData();
    render_list();
    
    
})

    document.querySelector("#save_new_data").addEventListener("click",function(){

        let employer_name = document.querySelector("#new_employer_name");
        let phone = document.querySelector("#new_phone");
        let email = document.querySelector("#new_email");
        let requirement = document.querySelector("#new_employer_requirement");

        employer_name = employer_name.value;
        phone = phone.value;
        email = email.value;
        requirement = requirement.value;
        
        console.log(employer_name+phone+email+requirement);
        addData(employer_name,phone,email,requirement);
 
        render_list();
        myModal.hide();
        

    })

    




document.querySelector("#upload_button").addEventListener("click", function(){

    saveData(database);
    document.querySelector("#upload_status").innerHTML = "Upload completed!"
    // Clear the message after 5 seconds
    setTimeout(() => {
        document.querySelector("#upload_status").innerHTML = "";
    }, 3000);

})


function render_list(){

    let userdata = database.employer_data;
    let length = userdata.length;
    let employer_list = document.querySelector("#output")
    employer_list.innerHTML = "";

    let parent = document.querySelector("#output");

    for(let i=0; i<length; i++){
        // console.log(data.users[i].firstName);
        let employerData = document.createElement('li');
        employerData.className = 'list-group-item';
    
        employerData.innerHTML = `
        
        <div class=${userdata[i].employer_name} ${userdata[i].phone} (${userdata[i].email})
        <br>${userdata[i].requirement} 
        
        <button type="button" class="edit btn btn-info" data-employerid="${userdata[i].employer_id}">Edit</button>
        <button type="button" class="delete btn btn-danger" data-employerid="${userdata[i].employer_id}">Delete</button>
        `;
        
        
        parent.appendChild(employerData);    

 
    }


    //EDIT BUTTONS
    let allEditButtons =document.querySelectorAll(".edit");
    for(let button of allEditButtons){
        button.addEventListener("click", function(event){
        
        let clickedButton = event.target;
        let id = Number(clickedButton.dataset.employerid);
        console.log(id);

        let name = prompt("Enter new name: ");
        let phone = prompt("Enter new phone number: ");
        let email = prompt("Enter new email: ");
        let requirement = prompt("Enter your new requirement ");
        editData(userdata,id,name,phone,email,requirement);
    
        render_list();

    })

    }
    

    // DELETE BUTTONS
    let allDeleteButtons = document.querySelectorAll(".delete");
    for (let button of allDeleteButtons) {
        button.addEventListener("click", function(event){
        // get the id
        let id = Number(event.target.dataset.employerid);
        console.log(id);
        deleteData(userdata, id);
        render_list();
    })


        
    } 
}


