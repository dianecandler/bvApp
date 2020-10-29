Bartlett Venue (bvApp) is a business website that uniquely allows guests to view availabllity and directly book different rental packages online. Today users are unfamiliar with Bartlett and this is a new business.  Owner believes the location and driving distance are most critical barriers. This website is intended to help visually overcome those objections by providing a map, links to attractions and area business that could help with the event, and includes links to the Chamber of Commerce Calendar. 

# Project 3 Venue Application using MERN #

# Code name:  bvApp

# links

* Heroku https://bvapp-test.herokuapp.com/

* GitHub  https://github.com/dianecandler/bvApp

# Project 3 Requirements
- [x] Must use React.JS in some way

- [x] Must use Node and Express Web Server

- [X] Must be backed by MySQL or MongoDB Dabase with Sequelize or Mongoose ORM
    -[x] MongoDB
    -[x] Mongoose

- [x] Must have GET and POST routes for retrieving and adding new data

- [x] Must be deployed using Heroku  (with Data):  https://bvapp-test.herokuapp.com/

- [x] Must utilize two "new to me" libraries, packages, or technologies 
    - [x] React SCSS Bootstrap 
    - [x] Voice.Google.com and Vonage
    - [x] formspree used for email
    - [x] Atlas MongoDB 
    - [x] Researched Google Calendar and https://www.npmjs.com/package/react-big-calendar
    - [x] Adobe XD for Wireframes
    - [x] GoFullPage for page documentation

- [] Must allow for or involve the authentication of users in some way.

- [x] Must have a polished frontend/UI

- [x] Must have folder structure that meets MVC Paradigm
    * Components are in individual files with CSS

- [x] Must meet good quality coding standards

- [x] Must not expose sensitive API key information on the server

## Wireframes
Follow the Pesky Rabbit in this Adobe XD mark-up model used to develop the application.

![Adobe XD Wireframes for full site](https://xd.adobe.com/view/8ee2a4d6-8270-43d1-a5a3-aae92f6b7929-dbb1/?fullscreen)

PDF pages are available
![First draft Wireframes folder](./fileReadme/Wireframe/getStarted1.pdf)

## Market and Client Requirements Document

![Summary of Client Requirements](./fileReadme/MktRqr.pdf)


## Milestones (https://github.com/dianecandler/bvApp/milestones)
* Home Page Components - Due 9/24/2020 - completed
    * Nav. HeroImage, CTABanner, Product, Testimonial, Gallery, Map, Contact, Footer
    * modifications and enhancements allowed through to 10/5/2020 - completed

* Calendar Copmponent - Due 9/30/2020 - completed 10/3/2020 - completed
    * Determine package, plan to popular calendar with data not push data from calendar

* Research & Build Framework for Backend - Due by 9/30-2020 - completed 

* Gallery Page, CTA, Copy for Photoshoot Updates - Due by 9/27/2020 - completed
    * Size and select images (store in Public)
    * Work with forms, buttons, columns, rows and Containers to ensure padding, margin, spacing
    * Review and edit copy to work in space allowed

* Test at minimum Front End - Moved to Nice to Have
    * Set up files and ran first Test 9/26/2020

* Finalize Photoshoot plans, design, forms needed - Completed 10/3/2020
    * Like to book like the venue halls but not realistic 
        * booking halls is higher priority
        * booking 2-hour windows around venue bookings is best
    * use of owner's personal space requires some planning for these bookings
    * determined just capturing the interest and booking personally is best

* Copy and images
    * Meets requirements by 10/5/2020 to deploy on Heroku - completed
    * Final due by 10/6/2020 by 10am CST

* Project Documentation - Due 10/5/2020
    [x] Customer/Market requirements document
    [x] Wireframes to start program
    [x] Modify wireframes once framework is defined
    [x] Initial flow chart
    [x] Images for Gallery
    [x] Images for photoshoot
    [x] Images for other areas
    [x] Compile list of technologies, packages, tools used for this project

##  Technologies and Tools Used
* MERN
    * MongoDB
    * Express Servers
    * React
    * NodeJS
* Mongoose
* HTML and SCSS Bootstrap
* Git Hub, Heroku, Cloud

## Version 2.0

* Add SMS and enhance email confirmation
* Add Registration content to include checkbox/pull down options
    * Number of guests, Alcohol Served, Hours of event, Hours w/clean-up and Set-up
    * Event type - cocktail, theater seating for class or ceremony, buffet seating - need #
    * Questions about chair rental, catering, photoshoot
* Add FAQs and commonly asked questions to the venue page
* Provide on-screen viewing of privacy policy and other documents currently via PDF or new tab viewing
* Better map solution
* Downloadable brochure
* Video brochure
* Separate page for each Hall
* Include the I am no a Robot (Recaptcha)
* Collect deposit to hold booking?
* Add administrtation page with login

## Presentations

![Initial presentation](/fileReadme/P3pres1)


## Challenges and Lessons Learned
* Taking on this final project with all the requirements solo is the biggest challenge of the project.
    * Reason for going solo?  
        1. To ensure I have the confidence to face any challenges and opportunities provided as I leverage my new skills.
        2. My career has been spent working with and leading teams through projects. My successful product launches are proof of my ability to scope, schedule, work through, delegate and deliver on hardware projects ranging from technology cards to servers and datacenter solutions to programs to software management and compatibility software solutions, just to hit the highlights.
    * Wireframes!  In order to develop my Adobe XD wireframes, I had to have a solid understanding of the following:
        1.  Customer experience - this is first a sales tools for the business and secondly an administrative tool to help save time/cost of doing business
        2. How to handle booking a date and linking pages.  It is easy to have users jump to a section using HTML but moving them to another page is how React is designed.
        3.  Feature creep and uncertainty about how much work/time will be required to achieve the desired solution.  Talked to experienced coders and developers before defining the wireframes which are enough to start the framework for the backend. 
    * Resources to help through this project are critical.
        1. Having kept up with the class, completed all homework assignments provided me to practice needed to build memory muscle.
        2. Watching videos to dive deeper or broaden my understanding has proven very helpful.
            -  favorites included Scrimba, Audacity, The Net Ninja
        3.  Could use another week of tutorials and practice to become more comfortable with testing.  Hoping to include more testing  but concerned with delivering critical MVP by myself.  2-3 weeks is not a lot of time to create a full business website.
        4.  Limited University of Texas resources.  50 minutes of 1x1 tutoring, 3 hours/week of office hours, 5 classes to talk through problems with my instructor and TA isn't a whole lot.  Planning questions and having enough understanding to use this time most effectively has been challenging.
        5.  Recognizing how much time is required to deliver results.  Luckily time flies when you are having fun! :smile:
    * Logic flow changes
        * Currently not all products are available every day
        * From homepage option to "Get Started" takes you to Calendar/Booking Page
        * From homepage product card "Book Event" takes you to Calendar/Booking Page
        * From Venue Rental page product card "check availability" takes you to Calendar/Booking Page
        * Calendar page starts with calendar, shows product cards available for that day
            * considers PR may be booked daily, MM & AI may only be booked weekends
            * considers when one of the venue options is booked and will drop Book Now link
    * Logic for Tables and Pricing
        * Saturday/Sunday, Weekday prices are different
        * Added charge for photoshoot and extra hours with single hall rental

# Calendar Process



##  About the Developer

Diane Candler, Student at The University of Texas at Austin
Full-Stack Web Development
Graduation October 2020
LinkedIn:  https://www.linkedin.com/in/diane-candler-centraltexas/
Email:  dianedcandler@gmail.com
Portfolio:  https://dianecandler.herokuapp.com/


# Thank you
Your time is valuable.  Thank you for taking time to review this program.  Feedback is valued.  Feel free to use the Contact tab and send me an email with your thoughts.
