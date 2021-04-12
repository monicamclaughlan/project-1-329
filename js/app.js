//////////////////////////////////
// Get Data from Google Sheets
//////////////////////////////////

$.ajax('https://spreadsheets.google.com/feeds/list/1olQvC7HDV-6CSBmFOhtJMjsygUTQ9PL5YGRz087Ki9Q/1/public/full?alt=json')
// .then for when data arrives
.then((data) => { 
    console.log(data)

    // map over the date to generate a simpler data set
    const projects = data.feed.entry.map((item) => { 
        return {
            description: item.gsx$description.$t, 
            gitURL: item.gsx$giturl.$t,
            liveURL: item.gsx$liveurl.$t,
            image: item.gsx$image.$t, 
            project: item.gsx$project.$t
            
        }  
    })
//////////// jQuery ///////////////

    // projects.forEach((project) => {
    //     $('body').append(`
    //     <div> </div>
    //     <h1>${project.project}</h1>
        
    //     `)
    // });

})

// .catch in case of an error
.catch((error) => { 
    console.error(error)
})

//  const toggle = () => {
//     var x = document.getElementById("menu");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }
  