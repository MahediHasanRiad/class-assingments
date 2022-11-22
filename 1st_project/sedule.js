import {students, teachers} from "./information.js"

let groupA = [];
let groupB = [];
let groupC = [];

teachers.map((item) => {        // loop teachers Array. peramiter "Item == loop one object"
 
    if(item.rank <= 100){       // teacher ranking 100 & below 100, thay will teach Group C
        groupC.push(` Teacher Name: ${item.name}, Subject: ${item.subject}`)
    }
    else if(item.rank <= 200){          // teacher ranking 200 & below 200, thay will teach Group B
        groupB.push(`Teacher Name: ${item.name}, Subject: ${item.subject}`)
    }
    else{           // other teacher, thay will teach Group A
        groupA.push(`Teacher Name: ${item.name}, Subject: ${item.subject}`)
    }

})

students.map((item)=>{            //  loop student Array. peramiter "Item == loop one object"
    
    if(item.cgpa >= 4.50){          // 4.50 & upper 4.50 students are group A
        groupA.push(`{Student Name: ${item.name}, Roll: ${item.roll}, CGPA: ${item.cgpa}}`)
    }
    else if(item.cgpa >= 4.00){         // 4.00 & upper 4.00 students are group B
        groupB.push(`{Student Name: ${item.name}, Roll: ${item.roll}, CGPA: ${item.cgpa}}`);
    }
    else{        // all ather students are group C
        groupC.push(`Student Name: ${item.name}, Roll: ${item.roll}, CGPA: ${item.cgpa}`)
    }
    
})

console.log(groupA, groupB, groupC);

// using VS code live Server