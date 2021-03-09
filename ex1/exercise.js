var object = {
    id: 1,
    title: "this is a note",
    content: "This is the amazing content of the note!"
    
  }

  object.name = "zaman";
  object.movie = "Master";
   console.log(object);
   var jso = JSON.stringify(object);
   console.log(jso);

   var object2 = JSON.parse(jso);
   for(let x in object2){
    console.log(object2[x]);
  }
   
