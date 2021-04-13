# Project Overview

**PROJECT NAME:** My Portfolio

**PROJECT AUTHOR:** Monica McLaughlan

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Monday Day 1| Project Description | Incomplete
|Monday Day 1| Wireframes / Priority Matrix / Timeline | Incomplete
|Tuesday Day 2| Structure HTML and CSS using Grid Layout | Incomplete
|Tuesday Day 2| Structure HTML and CSS for social/blog section using Grid Layout | Incomplete
|Tuesday Day 2| Style Project Cards and using Flexbox for Card Layout | Incomplete
|Tuesday Day 2| Create NavBars - Header and Footer | Incomplete
|Tuesday Day 2| Create Contact Form | Incomplete
|Tuesday Day 2| Make site responsive, mobile, tablet and desktop | Incomplete 
|Wednesday Day 3| Use jQuery to render projects to card style templates | Incomplete
|Wednesday Day 3| MVP & Bug Fixes | Incomplete
|Thursday Day 4| Hamburger menu with bubble effect | Incomplete
|Thursday Day 4| Hover effect on cards | Incomplete
|Thursday Day 4| Utilize bootstrap | Incomplete
|Thursday Day 4| Incorporate Headless CMS/ Web Components - slider/carousel | Incomplete
|Thursday Day 4| Final Touches | Incomplete
|Friday Day 5| Present | Incomplete


## Project Description

This project will be an application to present my projects in a easy to read and easy to access fashion.  With modern styling and responsive to mobile, tablet and desktop.  This project will pull project descripton, image and links to both live URL and GitHub from a Google Sheets API.

## Google Sheet

https://docs.google.com/spreadsheets/d/1olQvC7HDV-6CSBmFOhtJMjsygUTQ9PL5YGRz087Ki9Q/edit#gid=0

## Portfolio I want to Emulate

Link To Site  | One Thing I'd Like To Incorporate | 
| ------------- | ------------- |
|[dcfonts.com](https://www.dcfonts.com/) | bubble effect on hamburger menu |
|[eloise-ress-barrow.surge.sh/index.html](http://eloise-ress-barrow.surge.sh/index.html) | structured layout of site |
| [mattfarley.ca](http://mattfarley.ca/) |  mouseover effect on projects |

---

## Wireframes  

- [Mobile](https://www.figma.com/file/egqemVGgU58GlmgujXWWeJ/Portfolio-Project?node-id=12%3A3)
- [Tablet](https://www.figma.com/file/xSMWZfIBWF3FHOx2DythwW/Portfolio-Project-Tablet?node-id=0%3A1)
- [Desktop](https://www.figma.com/file/IaQ7BCYjeerDO24Ot5R6nG/Portfolio-Desktop?node-id=3%3A45)

Wireframing Resources:

- [Mockflow](https://mockflow.com/app/#Wireframe)
- [Figma](https://www.figma.com/)


## Time/Priority Matrix 

[Link](https://docs.google.com/drawings/d/1xnxYQn9QNLYUpl4YMhicXlFGNzLEtyF0HVlRjiKANrM/edit)

 | Letter | Description |
 | --- | --- |
 | A | Create Initial Grid Layout for Page | 
 | B | Grid Layout for Social Icons and Blog Section | 
 | C | Create NavBars - Header and Footer | 
 | D | Use Flexbox for Project card layout | 
 | E | Style Project Cards | 
 | F | Create Contact Form | 
 | G | Create Social Media Icons | 
 | H | Make Reponsive Hamburger menu for mobile(tablet) | 
 | I | Media queries and making reponsive | 
 | J | Use jQUery to get project information and push to site | 
 | K | Create Hamburger menu with bubble effect | 
 | L | Create hover effect on cards | 


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.   

#### MVP 

- Use semantic markup for HTML and CSS, adhering to best practices.
- Use CSS GRID to create a multi-column layout
- Use Flexbox for content
- Must be mobile first, then tablet and desktop responsive
- Must pull in projects via API call from google sheet
- Render data on page
- Be deployed and accessible online either via Github Pages or Netlify

#### PostMVP 

- Add animation, bubble effect to hamburger menu
- Add hover effect to cards for projects

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Create Grid Layout for entire page | H | 1hr | 0.5 hr |
| Hamburger | H | 1hr | 1.5hr |
| Project Previews | H | 3hr | hr |
| Regular Nav | H | 1hr | 1.5hr | 
| Footer Nav  | H | 1hr | 0.5hr | 
| Adding Form | H | 1hr|  0.5hr | 
| Bootstrap | H | 4hr | 1hr |
| Other sections and flex| M | 3hr | 0.5hr|
| Working with API | H | 3hrs|  hr | 
| Responsive | H | 3hr | 1hr |
| Social Media Icons | L | 1hr |  0.25hr |
| Total | H | 22hrs | hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Project Hover | L | 3hr | hr | 
| Hamburger menu bubble effect | L | 3hr | hr |
| Banner letters wiggle | L | 1hr | hr |
| Interactive Banner | M | 4hr | hr |
| Headless CMS for Blog | H | 4hr | hr |
| Make carousel for skills | M | 4hr | hr | 
| Make own icon | L | 4hr | hr |
| Total | H | 23hrs| hrs |

## Additional Libraries

Bootstrap - Card Styling  - https://getbootstrap.com/docs/5.0/components/card/

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
    projects.forEach((project, index) => {
        console.log(project)
        const $projectCard = $(`
        <div class="card" style="width: 18rem;">
        <img src="${project.image}" class="card-img-top" alt="project.image">
        <div class="card-body">
          <h5 class="card-title">${project.project}</h5>
          <p class="card-text">${project.description}</p>
          <a href="${project.liveURL}" class="btn btn-primary btn-sm">App</a>
          <a href="${project.gitURL}" class="btn btn-primary btn-sm">GitHub</a>
        </div>
      </div> `)
      $projects.append($projectCard)
    })

```

Dynamically renders data from Google Sheets to the DOM to display project information.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

Hamburger menu toggle when in mobile view: 
 https://www.w3schools.com/howto/howto_js_mobile_navbar.asp



#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
