/*fetch('http://localhost:5000/arnabdoctordata').then((data)=>{
  return data.json();
}).then((doctordata)=>{
  //console.log(doctordata[5].Doctor);
  let data1="";
  doctordata.map((values)=>{ ;
    data1+=` <div>
    <img id="doctor_img" src=${values.avatar_imgurl} alt="url error" >
  </div>
  <div><h3  id="doctor_name">${values.Doctor}</h3></div>
  <div id="ability">${values.specialist}</div>
 <div id="about">about: ${values.about}</div>`
  });
  document.getElementById("doctor_card").innerHTML=data1;
})
*/
document.getElementById("containerr").style.display='none';



function on_off(){
  if (document.getElementById("containerr").style.display=='none') {
    document.getElementById("containerr").style.display='flex'
  } else {
    document.getElementById("containerr").style.display='none'
  }
}

function scroll_up() {
  //Scrolling the document to position "250"
  //horizontally and "110" vertically
  window.scrollTo(0, 0);
}

function redirect_to_home(){
  window.location.href = "http://127.0.0.1:5500/frontend/index.html";
}

 function scroll_for_aboutus(){
  window.scrollTo(0, 870);
}
function scroll_for_contuctus(){
  window.scrollTo(0, 1500);
}


function redirect(){
  setTimeout(window.location.href = "http://127.0.0.1:5500/frontend/index.html",1000)
  alert("from submited sucessfully");
}

function contuctus_alart(){
  if(document.getElementById('FName').value==''||document.getElementById('LName').value==''||document.getElementById('email').value==''||document.getElementById('ph_No').value==''){
    alert('all fildes are requerd');
    return 0;
  }
  alert("request send successfully !! Our team will contact you within 6 hours");
}



//fetch doctor apii to show
 fetch('http://localhost:5000/arnabdoctordata').then((data)=>{
   return data.json();
 }).then((doctordata)=>{
   //console.log(doctordata);
  let data1="";
  doctordata.map((values)=>{
    data1+=` <div class="container">
     <img src=${values.url} height="200px" width="150px">
    <div class="info">
        <div class="name">${values.name}</div>
         <div class="qualification">
            ${values.Specialization1}
        </div>
        <div class="specialization">
            <div class="heading">Specialization</div>
            <div class="brief"> ${values.Specialization2}</div>
        </div>
        <div class="availability">
           <div class="header">Availability</div>
           <div class="day"> ${values.day}</div>
          <div class="timing">Timings :  ${values.tome}</div>
          <div class="extension_number">Extension No. :  ${values.Extension_No}</div>
          <div class="ph_No">Mobile : ${values.mobile}</div>
         <button onclick="on_off();scroll_up();"> Book an Appointment</button>
       </div>
     </div>
</div>`
  });
   document.getElementById("doctor_card").innerHTML=data1;
 })


 //fetch department apii to show
 fetch('http://localhost:5000/department').then((department_data)=>{
  return department_data.json();
}).then((json_department_data)=>{
  //console.log(doctordata);
 let final_data2="";
 json_department_data.map((values)=>{
  final_data2+=` <div class="container">
    <img src=${values.url} height="200px" width="150px">
   <div class="info">
       <div class="name">${values.name}</div>
        <div class="qualification">
           ${values.Specialization1}
       </div>
       <div class="specialization">
           <div class="heading">Specialization</div>
           <div class="brief"> ${values.Specialization2}</div>
       </div>
       <div class="availability">
          <div class="header">Availability</div>
          <div class="day"> ${values.day}</div>
         <div class="timing">Timings :  ${values.tome}</div>
         <div class="extension_number">Extension No. :  ${values.Extension_No}</div>
         <div class="ph_No">Mobile : ${values.mobile}</div>
        <button onclick="on_off();scroll_up();"> Book an Appointment</button>
      </div>
    </div>
</div>`
 });
 // document.getElementById("doctor_card").innerHTML=data1;
})