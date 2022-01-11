var modalVisible = false;
var currentmodaldis;

var table1 =  [];
var table2 =  [];
var table3 =  [];





function searchtable(){
    var tabsearch =document.getElementById("tablesearch").value;
    console.log(tabsearch);
    tabsearch = tabsearch.toLowerCase();
    var items = document.getElementsByClassName("table-name");

    if(tabsearch!=" "){
        for(var i=0;i<items.length;i++){
            if(items[i].id.indexOf(tabsearch)>-1){
                items[i].style.display = 'block';
            }else{
                items[i].style.display = 'none';
            }
        }

    }
    




}

function itemsearch(){
    var itemsearch = document.getElementById("itemSearch").value;
    console.log(itemsearch);
    itemsearch = itemsearch.toLowerCase();
    let foods = document.getElementsByClassName("item");

    console.log(foods);

     for(let k=0;k<foods.length;k++){
         if(foods[k].className.toLowerCase().indexOf(itemsearch)>-1){
             foods[k].style.display = 'block';
         }else{
             foods[k].style.display = 'none';
         }
     }
}

function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
    
}
function allowDrop(ev) {
    ev.preventDefault();
  }




  function drop(ev,target) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    let arr = data.split("-");
    let item_name = arr[0];
    let item_cost = arr[1];   

    let tableid = target.id;
    console.log(item_name,item_cost,tableid);

    

    updateobjects(tableid,item_name,item_cost);
    updatetable(tableid,item_cost);

   
    //updatemodal(tableid);
  



  }

 




  function updateobjects(t_id,name,cost){
      if(t_id=='table1'){

        let exists = false;
        for(let i=0;i<table1.length;i++){
            if(table1[i].name == name){
                exists=true;
            }
        }

        if(exists == true){

            for(let i=0;i<table1.length;i++){
                if(table1[i].name == name){
                    table1[i].count++;
                    break;
                }
            }

        }else{
            var myobj = {
                name : name,
                cost : cost,
                count : 1,
        
            }
            table1.push(myobj);

        }

     


      }else if(t_id=='table2'){
        let exists = false;
        for(let i=0;i<table2.length;i++){
            if(table2[i].name == name){
                exists=true;
            }
        }

        if(exists == true){

            for(let i=0;i<table2.length;i++){
                if(table2[i].name == name){
                    table2[i].count++;
                    break;
                }
            }

        }else{
            var myobj = {
                name : name,
                cost : cost,
                count : 1,
        
            }
            table2.push(myobj);

        }

      }
      else{
        let exists = false;
        for(let i=0;i<table3.length;i++){
            if(table3[i].name == name){
                exists=true;
            }
        }

        if(exists == true){

            for(let i=0;i<table3.length;i++){
                if(table3[i].name == name){
                    table3[i].count++;
                    break;
                }
            }

        }else{
            var myobj = {
                name : name,
                cost : cost,
                count : 1,
        
            }
            table3.push(myobj);

        }

      }

  }



// to make commented code work updatetable(t_id,item_cost) : function signature

   function updatetable(t_id){
     if(t_id=='table1'){
        //  let current_amount=parseInt(document.getElementById('table1rs').innerHTML);
        //  let new_amount = current_amount+parseInt(item_cost);
        //  document.getElementById('table1rs').innerHTML=new_amount;

        //  let current_count=parseInt(document.getElementById("table1nos").innerHTML);
        //  let new_count=current_count+1;
        //  document.getElementById('table1nos').innerHTML=new_count;


         let amt =0;
         let cnt =0;
         for(let i=0;i<table1.length;i++){
            amt += (table1[i].cost*table1[i].count);
            cnt+=(table1[i].count);
         }
         document.getElementById('table1rs').innerHTML=amt;
         document.getElementById('table1nos').innerHTML=cnt;
      

     }
     else if(t_id=='table2'){
        // let current_amount=parseInt(document.getElementById('table2rs').innerHTML);
        // let new_amount = current_amount+parseInt(item_cost);
        // document.getElementById('table2rs').innerHTML=new_amount;

        // let current_count=parseInt(document.getElementById("table2nos").innerHTML);
        // let new_count=current_count+1;
        // document.getElementById('table2nos').innerHTML=new_count;

        let amt =0;
        let cnt =0;
        for(let i=0;i<table2.length;i++){
           amt += (table2[i].cost*table2[i].count);
           cnt+=(table2[i].count);
        }
        document.getElementById('table2rs').innerHTML=amt;
        document.getElementById('table2nos').innerHTML=cnt;

     }
     else if(t_id=='table3'){
        // let current_amount=parseInt(document.getElementById('table3rs').innerHTML);
        // let new_amount = current_amount+parseInt(item_cost);
        // document.getElementById('table3rs').innerHTML=new_amount;

        // let current_count=parseInt(document.getElementById("table3nos").innerHTML);
        // let new_count=current_count+1;
        // document.getElementById('table3nos').innerHTML=new_count;

        let amt =0;
        let cnt =0;
        for(let i=0;i<table3.length;i++){
           amt += (table3[i].cost*table3[i].count);
           cnt+=(table3[i].count);
        }
        document.getElementById('table3rs').innerHTML=amt;
        document.getElementById('table3nos').innerHTML=cnt;

     }

   }





 console.log(table1)

 function modaldis(ele){

    //console.log(ele);


     if(modalVisible == true)
     {
        document.getElementById('modal').style.display="none";
        modalVisible = false;
     }else{
        document.getElementById('modal').style.display="block";
        document.getElementById("modalHeading").innerHTML = ele.id + " Bill";
        currentmodaldis = ele.id;

        updatemodal(currentmodaldis);




        modalVisible= true;
        
     }

     


 }



 function updatemodal(t_id){
    if(t_id == 'table1'){
        document.getElementById('tab1bill').innerHTML=`      <tr >
        <th>S no</th>
        <th>item</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>delete</th>
    </tr>`
        let mycount=0;
        for(let i=0;i<table1.length;i++){
            
          if(table1[i].count!=0){
          document.getElementById('tab1bill').innerHTML+=`
          <tr>
            <td> ${++mycount} </td>
            <td>${table1[i].name}</td>
            <td>${table1[i].cost}</td>
            <td>  <input type='number' min='1' max='5' value = '${table1[i].count}'  onchange='updatevals("table1",${i},this)'>  </td>
            <td><button onclick="deleteentry('table1',${i})"> X </button></td>
          </tr>
          
          `
          }
          
        }
        let total =0;
        for(let i=0;i<table1.length;i++){
            total += (table1[i].count * table1[i].cost);
        }
        document.getElementById('displaytotal').innerHTML = total;
        updatetable('table1')
    }

    else if(t_id == 'table2'){
        document.getElementById('tab1bill').innerHTML=`      <tr >
        <th>S no</th>
        <th>item</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>delete</th>
    </tr>`
        let mycount =0;
        for(let i=0;i<table2.length;i++){
            if(table2[i].count!=0){
            document.getElementById('tab1bill').innerHTML+=`
            <tr>
              <td> ${++mycount} </td>
              <td>${table2[i].name}</td>
              <td>${table2[i].cost}</td>
              <td><input type='number' min='1' max='5' value = '${table2[i].count}'  onchange='updatevals("table2",${i},this)'></td>
              <td><button onclick="deleteentry('table2',${i})"> X </button></td>
            </tr>
            
            `
            }
          }
          let total =0;
          for(let i=0;i<table2.length;i++){
              total += (table2[i].count * table2[i].cost);
          }
          document.getElementById('displaytotal').innerHTML = total;
          updatetable('table2');

    }
    else if(t_id ='table3'){ // to paste the above code

        document.getElementById('tab1bill').innerHTML=`      <tr >
        <th>S no</th>
        <th>item</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>delete</th>
    </tr>`
        let mycount =0;
        for(let i=0;i<table3.length;i++){

            if(table3[i].count!=0){
          document.getElementById('tab1bill').innerHTML+=`
          <tr>
            <td> ${++mycount} </td>
            <td>${table3[i].name}</td>
            <td>${table3[i].cost}</td>
            <td><input type='number' min='1' max='5' value = '${table3[i].count}'  onchange='updatevals("table3",${i},this)'></td>
            <td><button onclick="deleteentry('table3',${i})"> X </button></td>
          </tr>
          
          `
            }

        }
        let total =0;
        for(let i=0;i<table3.length;i++){
            total += (table3[i].count * table3[i].cost);
        }
        document.getElementById('displaytotal').innerHTML = total;

        updatetable('table3');
    }

    
}


function deleteentry(t_id,index ){
 console.log(index);

 if(t_id=='table1'){
    table1[index] = {name : "name",
        cost : 0,
        count : 0,};
     updatemodal('table1');


 }

 else if(t_id=='table2'){
    table2[index] = {name : "name",
        cost : 0,
        count : 0,};
     updatemodal('table2');


 }
 else if(t_id=='table3'){
    table3[index] = {name : "name",
        cost : 0,
        count : 0,};
     updatemodal('table3');


 }
    



}

function updatevals(t_id,index,ev){
    if(t_id=='table1'){
        console.log(t_id,index,ev.value);
        table1[index].count = Math.abs(parseInt(ev.value));
        updatemodal('table1');

    }
    //code for table 2 and 3

   else if(t_id == 'table2'){
        table2[index].count = Math.abs(parseInt(ev.value));
        updatemodal('table2');

    }

    else if(t_id == 'table3'){
        table3[index].count = Math.abs(parseInt(ev.value));
        updatemodal('table3');

    }
}


 function cleartable(){
    console.log(currentmodaldis);
    if(currentmodaldis == 'table1'){
        table1=[];
        document.getElementById('table1rs').innerHTML=0;
        document.getElementById('table1nos').innerHTML=0;
        updatemodal(currentmodaldis);
       
    }
    else if(currentmodaldis == 'table2'){
        table2=[];
        document.getElementById('table2rs').innerHTML=0;
        document.getElementById('table2nos').innerHTML=0;
        updatemodal(currentmodaldis);
    }
    else if(currentmodaldis == 'table3'){
        table3=[];
        document.getElementById('table3rs').innerHTML=0;
        document.getElementById('table3nos').innerHTML=0;
        updatemodal(currentmodaldis);
    }

    document.getElementById('tab1bill').innerHTML=`      <tr >
    <th>S no</th>
    <th>item</th>
    <th>Price</th>
    <th>Quantity</th>
    <th>delete</th>
</tr>`
 }

 function generateBill(){
    alert("bill generated and cleared cache");
    cleartable();
}