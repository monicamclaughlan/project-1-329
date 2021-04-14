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
    console.log(projects)
//////////// jQuery ///////////////
    const $projects = $('#projects')
    

    projects.forEach((project, index) => {
        console.log(project)
        const $projectCard = $(`
        <div class="card" style="width: 18rem; height: 420px;">
        <img src="${project.image}" class="card-img-top" alt="${project.project}" style="height:210px;">
        <div class="card-body">
          <h5 class="card-title">${project.project}</h5>
          <p class="card-text" style="height:96px">${project.description}</p>
          <a href="${project.liveURL}" target="_blank"><p class="hidden-text">See Project Live ></p></a>
          <a href="${project.liveURL}" target="_blank" class="btn btn-primary btn-sm">App</a>
          <a href="${project.gitURL}" target="_blank" class="btn btn-primary btn-sm">GitHub</a>
        </div>
      </div> `)
      $projects.append($projectCard)
    })
    
})

// .catch in case of an error
.catch((error) => { 
    console.error(error)
})


  