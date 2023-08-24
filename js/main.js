let form=document.querySelector(".form")
let buttons=document.querySelector(".buttons")
let tasks=document.createElement("div")
let white=document.querySelector(".white")
let black=document.querySelector(".black")

   let dataInputs=[];
   let dataRight=[];
   let dataWrong=[];
   let saveData=[];
   let saveRight=[];
   function table(){
   for(let i=1;i<=24;i++){
      let task=document.createElement("div")
      let form=document.createElement("div")
      let buttons=document.createElement("div")
      let label=document.createElement("label")
      let input=document.createElement("textArea")
      let right=document.createElement("i")
      let wrong=document.createElement("i")
      let save=document.createElement("span")
      let Delete=document.createElement("span")
      let taskText;
      if(i<=12){
         taskText=document.createTextNode(`${i} ص`);
      }else{
         taskText=document.createTextNode(`${i-12} م`);
      }
      let saveText=document.createTextNode("save");
      let deleteText=document.createTextNode("delete");
      task.className="task";
      tasks.className="tasks";
      form.className="form";
      buttons.className="buttons";
      label.className=`label-${i}`;
      input.className="input";
      right.className="fas fa-check fa-fw";
      wrong.className="fas fa-xmark fa-fw";
      save.className="save";
      Delete.className="delete";
      input.setAttribute("resize","none")
      document.body.appendChild(tasks)
      label.appendChild(taskText);
      save.appendChild(saveText);
      Delete.appendChild(deleteText);
      tasks.appendChild(task)
      task.appendChild(form)
      task.appendChild(buttons)
      form.appendChild(label);
      form.appendChild(input)
      buttons.appendChild(right)
      buttons.appendChild(wrong)
      buttons.appendChild(save)
      buttons.appendChild(Delete)
      dataInputs.push(input);

               //start right && wrong
   right.addEventListener("click",function(){
      localStorage.setItem("Right",JSON.stringify("rgb(2, 188, 2)"))
      let saveRight=localStorage.getItem("Right");
      if(saveRight){
         let parseRight=JSON.parse(saveRight);
         input.style.color=parseRight;
      }
   })
   wrong.addEventListener("click",function(){
      localStorage.setItem("Right",JSON.stringify("red"))
      let saveRight=localStorage.getItem("Right");
      if(saveRight){
         let parseRight=JSON.parse(saveRight);
         input.style.color=parseRight;
      }
   })
   window.addEventListener("load",function(){
      let saveRight=this.localStorage.getItem("Right");
      if(saveRight){
         let parseRight=JSON.parse(saveRight);
         input.style.color=parseRight;
      }
   })
//end right && wrong

      //save input from each input i choose
      save.addEventListener('click', function() {
         let dataValues = [];
         dataInputs.forEach(input => {
            dataValues.push(input.value);
         });
         localStorage.setItem(`dataValues`, JSON.stringify(dataValues));
      });

      //reload page not effect to input from each input save
      window.addEventListener('load', function() {
         const savedData = localStorage.getItem('dataValues');
         if (savedData) {
            const parsedData = JSON.parse(savedData);
            dataInputs.forEach((input, index) => {
               input.value = parsedData[index];
            });
         }
      });

      //Delete input from each input i choose
   Delete.addEventListener('click', function() {
      let dataValues = [];
      dataInputs.forEach(input => {
         dataValues.push(input.value);
      });
      const inputToDelete = dataInputs[i - 1];
      const valueToDelete = inputToDelete.value;
      dataValues[i - 1] = '';
      localStorage.setItem('dataValues', JSON.stringify(dataValues));
      inputToDelete.value = '';
   });
   }
   //start light && night Mode
   black.addEventListener("click",function(){
      black.style.display="none";
      white.style.display="inline";
      localStorage.setItem("Black",JSON.stringify("black"))
      let saveBackground=localStorage.getItem("Black");
      if(saveBackground){
         let parseBackground=JSON.parse(saveBackground);
         document.body.style.background=parseBackground;
      }
   })
   white.addEventListener("click",function(){
      white.style.display="none";
      black.style.display="inline";
      localStorage.setItem("Black",JSON.stringify("white"))
      let saveBackground=localStorage.getItem("Black");
      if(saveBackground){
         let parseBackground=JSON.parse(saveBackground);
         document.body.style.background=parseBackground;
      }
   })
   window.addEventListener("load",function(){
      let saveBackground=this.localStorage.getItem("Black");
      if(saveBackground){
         let parseBackground=JSON.parse(saveBackground);
         document.body.style.background=parseBackground;
      }
   })
   //end light && night Mode

}
   setInterval(table(),1000);

