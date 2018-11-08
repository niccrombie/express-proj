# express-proj

1. https://www.youtube.com/watch?v=4yqu8YF29cU

2. The main learning objective of this exercise was to create a student/school database API, this would require creating API and routes to handle the basic CRUD functions to add to the database, update the database, remove entities from the database, and of course view the information on the database. Mostly backend function API so not a lot of front end work.

3. Early challenges included getting mongoose, turbo360, node to communicate. after switching gears to using express over turbo360, we had to change small details of what was going on in the video and use methods learned in the express tutorial. 
    - for the most part all the API CRUD functions are the same, routes are the same, the views were a little different from before, but handlebars was much easier the pug.
    - initially couldn't get the api to go to the database and display all of the students i added to the "student" collection in my database, after spending hours working on it, i continued with the project, and when creating a student profile, realized it would than display on the api/student. somehow:?: it stored the newly created profile in a "students" collection, I witnessed the same issue with schools, the school i created through the browser went into a "schools" not "school" collection, even though the create route states the data is "school/student". not sure what is going on there.
    
4. This tutorial explained routes better than the express tutorial did, being able to watch him and how he explained it, however i prefer the controllers/catalog model of organization over the api.js route handling all the function as he does in his video.