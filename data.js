//jsonbin id "66a13d7cacd3cb34a86ac775"
const jsonbin_root = "https://api.jsonbin.io/v3";
const jsonbin_base_id = "66a13d7cacd3cb34a86ac775";
const url = jsonbin_root + jsonbin_base_id;
let database =[];
// let new_employer={};



async function getData(){

    let response = await axios.get(`${jsonbin_root}/b/${jsonbin_base_id}/latest`)
    
    return response.data.record;

}

async function saveData(userdata){

    // console.log(userdata);

    let response = await axios.put(`${jsonbin_root}/b/${jsonbin_base_id}` , userdata);

    //  console.log(response.data);
}

function addData(name,phone,email,requirement){

    
     console.log(name,phone,email,requirement);
    let id = Math.floor(Math.random() * 10000) + 1;
    // console.log(id);
    new_employer = {
        
        "employer_id"   :   id,
        "employer_name" :   name,
        "phone"         :   phone,
        "email"         :   email,
        "requirement"   :   requirement
        
    }
    
    console.log(new_employer);
    database.employer_data.push(new_employer);
    // console.log(database);
    

}

function deleteData(data, id){

    // console.log(data);

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
    // console.log(data);

}


function editData(data, id, name, phone, email, requirement){

    let length = data.length;
    // console.log(id);

    for(d=0; d<length; d++){
        // console.log(d);
        
        if(data[d].employer_id === id){  //i use = can work, == cannot work...
            // console.log(id)
            console.log(data[d].employer_name);
            data[d].employer_name = name;
            data[d].phone = phone;
            data[d].email = email;
            data[d].requirement = requirement;
            
        }                    
      
    }

}


