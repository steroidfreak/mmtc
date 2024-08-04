//jsonbin id "66a13d7cacd3cb34a86ac775" this is the id for storing the data
//creating constant for jsobin api login information as below
const jsonbin_root = "https://api.jsonbin.io/v3";
const jsonbin_base_id = "66a13d7cacd3cb34a86ac775";
const url = jsonbin_root + jsonbin_base_id;
let database =[];

//using axios.get to get response from jsonbin and pass to renderList for display of data
//on screen for viewing
async function getData(){

    let response = await axios.get(`${jsonbin_root}/b/${jsonbin_base_id}/latest`)
    
    return response.data.record;

}

//function to put(store) data into jsbon using axios.put command
async function saveData(userdata){

    let response = await axios.put(`${jsonbin_root}/b/${jsonbin_base_id}` , userdata);
    console.log(response.data);

}

//function to add a new employer database into the employer data object.
function addData(name,phone,email,requirement){

    let id = Math.floor(Math.random() * 10000) + 1;

    new_employer = {
        
        "employer_id"   :   id,
        "employer_name" :   name,
        "phone"         :   phone,
        "email"         :   email,
        "requirement"   :   requirement
        
    }
    
    database.employer_data.push(new_employer);

}

//function to delete selected employer data through employer_id
function deleteData(data, id){

    let indexToDelete = null;
    let index = -1; // start from -1 because the first element to 0
    
    for (let b of data) {
      index = index + 1;
      if (b.employer_id == id) {
        indexToDelete = index;
        break;
      }
    }
  
    data.splice(indexToDelete, 1);

}

//function to edit the selected employer data through employer_id and add to database
function editData(data, id, name, phone, email, requirement){

    let length = data.length;

    for(d=0; d<length; d++){
        
        if(data[d].employer_id === id){  

            data[d].employer_name = name;
            data[d].phone = phone;
            data[d].email = email;
            data[d].requirement = requirement;
            
        }                    
      
    }

}


