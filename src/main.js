require('./style.css')

/**
 * Estructure sus datos de la forma que considere
 */
const data = {
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCD2m69JVd-H3Fc32XFk0fllS42gsl30YrSw&usqp=CAU",
    name: "Tibisay Vielma Toro",
    role: "Dentist",
    linkedin: "in/tibisay-vielma-toro",
    github: "Tibisfly",
    mail: "vielmatorotibisay@gmail.com",
    whatsapp: "+(34)625 87 29 62",
    experience: [
        {
            role: "Administrative Assistant", 
            company: "Oliver&Alcazar Madrid",
            period: "Jan 2018 - Jul 2020",
        },
         {  
            role2: "General Dentist" ,
            company2: "Odontología Familiar",
            period2: "Feb 2012 - Jul 2017",
         },
         {
            role3: "Orthodontist Assistant",
            company3: "QR El Recreo Caracas",
            period3: "Mar 2012 - Jul 2014",
         },
         {
            role4: "Dental Medicine",
            company4: "Universidad Central de Venezuela",
            period4: "2009 - 2016",
        }
    ]
}

let cvTibi= document.querySelector("#cv");
//el div de arriba completo (mas grande)
let personalInfo= document.createElement("div")
personalInfo.className = "media"
// la foto
let photo= document.createElement("img")
photo.src= data.photo
photo.className = "mr-3"
personalInfo.appendChild(photo)
// el div de la derecha, con todo el texto
let textContainer= document.createElement("div") 
textContainer.className = "media-body"
personalInfo.appendChild(textContainer)

let textFullName= document.createElement("h5")
textFullName.innerHTML= data.name
textFullName.className= "mt-0"
textContainer.appendChild(textFullName)

let profesion= document.createElement("p")
profesion.innerHTML= data.role
textContainer.appendChild(profesion)

let socialMediaLinkedin= document.createElement("i")
socialMediaLinkedin.innerHTML= data.linkedin
socialMediaLinkedin.className= "fab fa-linkedin"
textContainer.appendChild(socialMediaLinkedin)

let socialMediaGit= document.createElement("i")
socialMediaGit.innerHTML= data.linkedin
socialMediaGit.className="fab fa-github"
textContainer.appendChild(socialMediaGit)

let socialMediaMail= document.createElement("i")
socialMediaMail.innerHTML= data.mail
socialMediaMail.className="fas fa-envelope"
textContainer.appendChild("socialMediaMail")

let whatsapp= document.createElement("i")
whatsapp.innerHTML= data.whatsapp
whatsapp.className="fab fa-whatsapp"
textContainer.appendChild("whatsapp")

cvTibi.appendChild(personalInfo)



// window.onload = function() {
//   /* Modifique el código en este bloque */

//   document.body.innerHTML = "<h1>My Resumee</h1>"

//   /* Fin del bloque*/
// }