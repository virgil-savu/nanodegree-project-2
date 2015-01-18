var bio = {
	"name" : "Virgil Savu",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "333.12.34.567",
		"email" : "email@email.it",
		"github" : "virgil-savu",
		"twitter" : "@johndoe",
		"location" : "Turin, Italy"
	},
	"welcomeMessage" : "lorem ipsum dolor sin amet etc etc",
	"skills" : ["awesomness", "programming", "teaching", "JS"],
	"bioPic" : "images/fry.jpg"
};


var education = {
	"schools" : [
		{
		"name" : "Voievodul Mircea College",
		"location" : "Targoviste, Romania",
		"degree" : "BA",
		"majors" : ["CompSci", "Maths"],
		"dates" : 2001,
		"url" : "http://lvm-tgv.ro/"
		},
		{
		"name" : "Valahia University",
		"location" : "Targoviste, Romania",
		"degree" : "Master",
		"majors" : ["CompSci", "Maths"],
		"dates" : 2006,
		"url" : "http://www.valahia.ro/"
		}
	],
	"onLineCourses": [
	 {
	 "title": "Front End Web Design",
	 "school": "Udacity",
	 "dates": "2015",
	 "url": "http://www.udacity.com"
	 },
	 {
	 "title": " intro to html and css",
	 "school": "Udacity",
	 "dates": 2014,
	 "url": "http://www.udacity.com"
	 },
	 {
	 "title": "using github",
	 "school": "Udacity",
	 "dates": 2014,
	 "url": "http://www.udacity.com"
	 },
	 {
	 "title": "JavaScript Basics",
	 "school":"Udacity",
	 "dates": 2014,
	 "url": "http://www.udacity.com"
	 }
	 ]

}

var work = {
	"jobs" : [
		{
			"employer" : "East End Pub",
			"title" : "Delivery boy",
			"dates" : "Luglio 2001 - Settembre 2001",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip	ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id"
		    },
		{
			"employer" : "Technical Studio Sas",
			"title" : "Web Developer",
			"dates" : "Gennaio 2007 - Future",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip	ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id"
		    }
	]
};

var projects = {
	"projects" : [
		{
			"title" : "Sample project 1",
			"dates" : "2014",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip	ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id",
			"images" : [
			"http://lorempixel.com/400/200/sports",
			"http://lorempixel.com/400/200/business"
			]
		}
	]
}

function displayBio() {

		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
		var formattedName = HTMLheaderName.replace("%data%",bio.name);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);


		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
		$("#topContacts").append(formattedGithub);
		var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);
		var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
		$("#topContacts").append(formattedLocation);

		//Display footer contacts
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		$("#footerContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
		$("#footerContacts").append(formattedEmail);
		var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
		$("#footerContacts").append(formattedGithub);
		var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
		$("#footerContacts").append(formattedTwitter);
		var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
		$("#footerContacts").append(formattedLocation);


		var formattedImage = HTMLbioPic.replace("%data%",bio.bioPic);
		$("#header").append(formattedImage);

		var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);

		if (bio.skills.length > 0) {
			$("#header:last").append(HTMLskillsStart);
			for (skill in bio.skills) {
				var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
				$("#header:last").append(formattedSkill);

			}
		}


}

displayBio();

function displayWork() {
	for (job in work.jobs) {
		//create new div for work experience
		$("#workExperience").append(HTMLworkStart);

		//concat employer and title
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();



function inName(firstLastName) {
	var nameArray = firstLastName.trim().split(" ");
	var firstname = nameArray[0];
	var lastname = nameArray[1];


	firstname = firstname[0].toUpperCase() + firstname.slice(1).toLowerCase();
	lastname = lastname.toUpperCase();

	return firstname + " " + lastname;
}

projects.display = function() {
	for (project in projects.projects) {
		//create new div for work experience
		$("#projects").append(HTMLprojectStart);

		//concat employer and title
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		//check image number
		if (projects.projects[project].images.length > 0) {
			for (image in  projects.projects[project].images) {
				var formattedImages = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImages);
			}
		};


	}
}


projects.display();

education.display = function() {
 for (school in education.schools) {
  $("#education").append(HTMLschoolStart);
  var SchName = HTMLschoolName.replace("%data%", education.schools[school].name);
  var formattedSchName = SchName.replace("#", education.schools[school].url);
  $(".education-entry:last").append(formattedSchName);
  var formattedSchLoc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
  $(".education-entry:last").append(formattedSchLoc);
  var formattedSchDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
  $(".education-entry:last").append(formattedSchDates);
  var formattedSchDeg = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
  $(".education-entry:last").append(formattedSchDeg);
  var formattedSchMaj = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
  $(".education-entry:last").append(formattedSchMaj);
 }
 $(".education-entry:last").append(HTMLonlineClasses);
 for (OnLine in education.onLineCourses) {
  var OLTitle = HTMLonlineTitle.replace("%data%", education.onLineCourses[OnLine].title);
  var formattedOLTitle = OLTitle.replace("#", education.onLineCourses[OnLine].url);
  $(".education-entry:last").append(formattedOLTitle);
  var formattedOLSchool = HTMLonlineSchool.replace("%data%", education.onLineCourses[OnLine].school);
  $(".education-entry:last").append(formattedOLSchool);
  var formattedOLDates = HTMLonlineDates.replace("%data%", education.onLineCourses[OnLine].dates);
  $(".education-entry:last").append(formattedOLDates);
}
}
education.display();



$("#mapDiv").append(googleMap);



