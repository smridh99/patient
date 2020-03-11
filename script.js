// Try edit message
data = {
  "resourceType": "Patient",
  "id": "xcda",
  "text": 
    { 
    	"status": "generated",
    	"div": "\n      \n      <p>Henry Levin the 7th</>\n    \n    </div>"
    },
  "identifier": [
    {
      	"use": "usual",
      	"type": 
	  {
             "coding": [
          	  {
            		"system": "htt://hl7.org/fhir/v2/0203",
            		"code": "MR"
          	  }
        	]
          },
        "system": "urn:oid:2.16.840.1.113883.19.5",
        "value": "12345",
  	"active": true,
  	"name": [
    		  {
		      "family": ["Levin"],
		      "given": ["Henry"]
		   }
  		],
  	"gender": "male",
  	"birthDate": "2002-09-24",
  	"managingOrganization": {
    		"reference": "Organization/2.16.840.1.113883.19.5",
    		"display": "University Health Network"
  				},
  	"conditions": [
    		"Diabetes",
    		"High blood pressure",
    		"Asthma"
  		]
     }
   ] 
};


document.getElementById("test").innerHTML = 
"<h3>Name of patient: " + data.identifier[0].name[0].given[0] + " " + data.identifier[0].name[0].family[0] + "</h3>" + 
"<h3>Organization Name: " + data.identifier[0].managingOrganization.display  + "</h3>" + 
"<h3>Gender: " + data.identifier[0].gender  + "</h3>" +
"<h3>Number of conditions they have: 3 </h3>" +
"<h3>List of All Conditions: </h3>" + 
"<h3> - " + data.identifier[0].conditions[0] + "</h3>" + 
"<h3> - " + data.identifier[0].conditions[1] + "</h3>" + 
"<h3> - " + data.identifier[0].conditions[2] + "</h3>"


