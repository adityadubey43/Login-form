var {Client}=require('pg');
var client=new Client({
    host:"localhost",
    user: "postgres",
    port: 5432,
    password: "1234",
    database: "college"

})
client.connect()
client.query(`select * from animals`,(err, res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
    client.end;
})

function Collaps(){
    console.log("menu clicked");
    let x = document.getElementById("menu");
        if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
        
      }
}
function Register(){
  console.log("in Register");
  let name=document.getElementById("name").value;
  let email=document.getElementById("email").value;
  let password=document.getElementById("password").value;
  let cpassword=document.getElementById("cpassword").value;
  if(password==cpassword){
      document.write(name+" "+email+" "+password+" "+cpassword);
  }else
  alert("password and confirm password not matched");
}
function Login(){
  let email=document.getElementById("email").value;
  let password=document.getElementById("password").value;
  document.write(email+" "+password);
}