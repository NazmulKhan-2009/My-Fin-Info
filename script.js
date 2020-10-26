document.getElementById('valueSubmit').addEventListener('submit',amountUpdate)


let balance=0;
function amountUpdate(e){
  e.preventDefault()

 const formUpdate=action=>document.getElementById(action).value
 
 const amount=formUpdate('amount');
 const changeType=formUpdate('changeType')
 const sourcse=formUpdate('sources')
 const particulars=formUpdate('particulars')
 const date=formUpdate('date_view') 
 
 
  
 const credit=changeType==='Add'? `${amount}`: '0'
 console.log(typeof credit);
 const crPlus=Number(credit)
 console.log(typeof crPlus)
 const debit=changeType==='Deduction'?`${-amount}` : '0'
 const drCount=Number(debit)
 console.log( drCount)
 console.log(typeof drCount)

 
  

 console.log( balance)
 
  

 balance=balance+crPlus
 balance=balance+drCount
 
 
  const numbers=/^[0-9]+$/
  if(amount.match(numbers) && changeType!=="" && sourcse!=="" && date !=='' && particulars!=='' ){

    
    const transaction={changeType,sourcse,date,particulars,crPlus,drCount,balance }

    let dataReflection=[]
    if(localStorage.getItem('dataReflection')){
      dataReflection=JSON.parse(localStorage.getItem('dataReflection'))
      
    }
    dataReflection.push(transaction)

    localStorage.setItem('dataReflection' , JSON.stringify(dataReflection))

    document.getElementById('valueSubmit').reset()
    fetchData()


    
    e.preventDefault()

  
  //  console.log(transaction);
   
  }else{
   alert( 'Not okay')
  }
  
}



const fetchData=()=>{

const data=JSON.parse(localStorage.getItem('dataReflection'))
const tableData=document.getElementById('table_data')
tableData.innerHTML = '';
// console.log( data)
// const {date,sourcse,drCount,crPlus,balance,particulars}=data[0]

// data.map(fillData=>
//   tableData.innerHTML+=`
//     <tr>
//     <td>${fillData.date}</td>
//     <td>${fillData.sourcse}</td>
//     <td>${fillData.drCount}</td>
//     <td>${fillData.crPlus}</td>
//     <td>${fillData.balance}</td>
//     <td>${fillData.particulars}</td>
//   </tr>
    
//     `
//   )

let toFig=0
for(let i=0; i<data.length;i++){
  
console.log(data[i].balance )

toFig=toFig+data[i].balance
console.log( toFig)
   
const {date,sourcse,drCount,crPlus,balance,particulars}=data[i]

tableData.innerHTML+=`
    <tr>
     <td>${date}</td>
     <td>${sourcse}</td>
     <td>${drCount}</td>
     <td>${crPlus}</td>
     <td>${toFig}</td>
     <td>${particulars}</td>
   </tr>
   `
}

  
}
let brac_1103=true;
const handleBbl_1501=()=>{
  
  
  
  // brac_1103 ?  document.getElementById('brac_data_1501').style.display="block" :
  // document.getElementById('brac_data_1501').style.display="none"
  // brac_1103=false
  
  if(brac_1103){
    document.getElementById('brac_data_1501').style.display="block"
    brac_1103=false
  }else{
    document.getElementById('brac_data_1501').style.display="none"
    brac_1103=true
  }
  
  const data=JSON.parse(localStorage.getItem('dataReflection'))
  const bbl_1103= data.filter(bracData=>bracData.sourcse==='Brac Bank(1103)')
  console.log( bbl_1103)
  brac_data.innerHTML=""


  let bracBalance=0

  bbl_1103.map(bracB=>{
    bracBalance=bracBalance+bracB.crPlus+bracB.drCount;
    // balance=balance+bracB.drCount;

    brac_data.innerHTML+=`
    <tr>
     <td>${bracB.date}</td>
     <td>${bracB.sourcse}</td>
     <td>${bracB.drCount}</td>
     <td>${bracB.crPlus}</td>
     <td>${bracBalance}</td>
     <td>${bracB.particulars}</td>
   </tr>
   `
  }
    )

  
}





 