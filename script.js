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
 
  

 balance=balance+crPlus+drCount
//  balance=balance
 
 
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



// let toFig=0
// for(let i=0; i<data.length;i++){
  
// console.log(data[i].balance )

// toFig=toFig+data[i].balance
// console.log( toFig)
   
// const {date,sourcse,drCount,crPlus,balance,particulars}=data[i]

// tableData.innerHTML+=`
//     <tr>
//      <td>${date}</td>
//      <td>${sourcse}</td>
//      <td>${drCount}</td>
//      <td>${crPlus}</td>
//      <td>${toFig}</td>
//      <td>${particulars}</td>
//    </tr>
//    `
// }

let totalBalance=0

data.map(total=>{
    totalBalance=totalBalance+total.crPlus+total.drCount;
    // balance=balance+bracB.drCount;

    tableData.innerHTML+=`
    <tr>
     <td>${total.date}</td>
     <td>${total.sourcse}</td>
     <td>${total.drCount}</td>
     <td>${total.crPlus}</td>
     <td>${totalBalance}</td>
     <td>${total.particulars}</td>
   </tr>
   `
  }

) 
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

// Credit Card Functionality

document.getElementById('ccDataSubmit').addEventListener('submit', ccUpdate)

function ccUpdate(e){
  // document.getElementById('cc_disp').style.display='block'
  e.preventDefault()

   const callDom=ids=>document.getElementById(ids).value

   const ccAmount=callDom('cc_amount')
   const ccEffect=callDom('cc_changeType')
   const ccBank=callDom('cc_bank')
   const ccDate=callDom('cc_date_view') 
   const ccParticulars=callDom('cc_particulars')
   const ccTranType=callDom('cc_tran_type')

  console.log( 'CC Update started')
  console.log(ccAmount, ccEffect, ccBank, ccDate, ccParticulars, ccTranType )

  // Amount Modification
  const ccExpFig=ccEffect==='Expense'? `${-ccAmount}`: '0'
 console.log(typeof ccExpFig);
 const haveToPay=Number(ccExpFig)
 console.log(typeof haveToPay)

 const ccPayFig=ccEffect==='Bill Pay'?`${ccAmount}` : '0'
 const billPaid=Number(ccPayFig)
 console.log( ccPayFig)
 console.log(typeof billPaid)


 balance=balance+haveToPay+billPaid
//  balance=balance
 
 
  const numbers=/^[0-9]+$/
  if(ccAmount.match(numbers) && ccEffect!=="" && ccBank!=="" && ccDate !=='' && ccParticulars!=='' && ccTranType!=='' ){

    
    const ccTransaction={ccDate,ccEffect,ccBank,haveToPay,billPaid,balance,ccParticulars,ccTranType }

    let ccReflection=[]
    if(localStorage.getItem('ccReflection')){
      ccReflection=JSON.parse(localStorage.getItem('ccReflection'))
      
    }
    ccReflection.push(ccTransaction)

    localStorage.setItem('ccReflection' , JSON.stringify(ccReflection))

    document.getElementById('ccDataSubmit').reset()
    // fetchData()
    ccfetchData()
    document.getElementById('cc_disp').style.display="block"

    
    

  
   console.log(ccTransaction);
   console.log( "cc submited")
   
  }else{
   alert( 'Not okay')
  }
  


}

let ccView=true;
const ccfetchData=()=>{

  if(ccView){
    document.getElementById('cc_disp').style.display="block"
    ccView=false
  }else{
    document.getElementById('cc_disp').style.display="none"
    ccView=true
  }

  const ccDataUpdate =document.getElementById('ccTableData')  
  const ccData=JSON.parse(localStorage.getItem('ccReflection'))
  const ccTableData=document.getElementById('cc_table_data')

  ccDataUpdate.innerHTML = '';
  
  
  
  let totalBalance=0
  
  ccData.map(total=>{
      totalBalance=totalBalance+total.haveToPay+total.billPaid;
      // balance=balance+bracB.drCount;
  
      ccDataUpdate.innerHTML+=`
      <tr>
       <td>${total.ccDate}</td>
       <td>${total.ccBank}</td>
       <td>${total.haveToPay}</td>
       <td>${total.billPaid}</td>
       <td>${totalBalance}</td>
       <td>${total.ccTranType}</td>
       <td>${total.ccParticulars}</td>
     </tr>
     `
    }
  
  ) 
  }





 