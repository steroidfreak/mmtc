const myModal = new bootstrap.Modal(document.getElementById('editDataModal'));


document.addEventListener("DOMContentLoaded", async function(){

    database = await getData();
    render_list();
    
    
})

//listen to event and save data from modal input and pass data to addData() to add into database
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

//listen to event and when click, pass the database to saveData() to store data in JSONBIN
document.querySelector("#upload_button").addEventListener("click", function(){

    saveData(database);
    document.querySelector("#upload_status").innerHTML = "Upload completed!"
    // Clear the message after 5 seconds
    setTimeout(() => {
        document.querySelector("#upload_status").innerHTML = "";
    }, 3000);

})

//renderlist() to display output according to our customised rendered behaviour when function is called.
function render_list(){

    let userdata = database.employer_data;
    let length = userdata.length;
    let employer_list = document.querySelector("#output")
    let employerData = "";
    employer_list.innerHTML = "";
    

    let parent = document.querySelector("#output");
    
    for(let i=0; i<length; i++){
        employerData = document.createElement('tr');
        employerData.className = 'table-group-item';
    
        employerData.innerHTML = `
        <tr>
            <td>${userdata[i].employer_name} </td>
            <td>${userdata[i].phone} </td>
            <td>(${userdata[i].email})</td>
            <td>${userdata[i].requirement} </td>
            <td><button type="button" class="edit btn btn-info" data-employerid="${userdata[i].employer_id}">Edit</button></td>
            <td><button type="button" class="delete btn btn-danger" data-employerid="${userdata[i].employer_id}">Delete</button></td>
        </tr> `;

        parent.appendChild(employerData);    

    }

    //EDIT BUTTONS
    let allEditButtons =document.querySelectorAll(".edit");
    for(let button of allEditButtons){
        button.addEventListener("click", function(event){
        
        let clickedButton = event.target;
        let id = Number(clickedButton.dataset.employerid);

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
        deleteData(userdata, id);
        render_list();
    })


        
    } 
}


