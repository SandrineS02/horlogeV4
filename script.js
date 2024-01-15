const modeBtn = document.querySelector('.sombreClair');

//Je lie la div .heuresChiffres
const chiffreHorloge = document.querySelector('.heuresChiffres');

// Je crée un tableau qui va contenir les chiffres des heures
const chiffreElement = [];

// Je crée les heures
for (let h = 1; h <= 12; h++){
    chiffreElement.push(
        //les contenu des span (style) correspond à l'index, donc au nombre qui vont correspondre à l'heure
        `<span style="--index:${h};"><p>${h}</p></span>`);
    }
    //je les insere dans mon html
    chiffreHorloge.insertAdjacentHTML("afterbegin", chiffreElement.join(""));
    
    // Je lie la div.minutesTirets
    const tiretMinutes = document.querySelector('.minutesTiret')
    
    //Je crée un tableau qui va contenir les tirets représentant les minutes et les secondes
    const tiretElement = [];

    // Je crée mes 60 tirets 
    for (let t = 1; t <= 60; t++){
        tiretElement.push( `<span style="--index:${t};"><p></p></span>`);
    }
    
    // Je les insère
    tiretMinutes.insertAdjacentHTML("afterbegin", tiretElement.join(""));
    
    



//##############################################################################//
//                             horloge analogique                               //
//##############################################################################//

class Horloge{
    constructor(){
        this.date = new Date();
 
        } 

    convertTZ(timeZone) { ;
    let newDate=  this.date.toLocaleString("fr-FR", {timeZone});
    
    let splitDate = newDate.split(" ");
    
    let time = splitDate[1].split(":")
    console.log(time)
    return time;
}


   
  
  
  

    getDisplay = () =>{ 
         
        let time=  this.convertTZ(document.getElementById('pays').value);


        document.querySelector('.heures').style.transform =  "rotate(" + time[0] *30 + "deg)";
        document.querySelector('.minutes').style.transform = "rotate("  + time[1] *6 + "deg)";
        document.querySelector('.secondes').style.transform = `rotate(${time[2] *6}deg)`;

        
         document.getElementById('am_pm').innerHTML= time[0]<=12?'AM':'PM';
        


        switch (document.getElementById('pays').value) {
        case "Asia/Tokyo":
           
            break;
        case "Europe/Paris":
            
            break;
        case "America/New_York":
            
            break;
            
    } 
    }
    
}
    

       
                   
setInterval(()=>{
    let horloge = new Horloge();
    
    horloge.getDisplay();
    
},1000)



//##############################################################################//
//                             horloge numerique                              //
//##############################################################################//

// class HorlogeNum {
//     constructor(){
//         this.date = new Date();
//         this.numHours = date.getHours();
//         this.numMinutes = date.getMinutes();
//         this.numSeconds = date.getSeconds();

        
//         if (numHours < 10) {
//             numHours = "0" + numHours;
//             }
//         if (numMinutes < 10) {
//             numMinutes = "0" + numMinutes;
//             }
//         if (numSeconds < 10) {
//                         numSeconds = "0" + numSeconds;
//             }
// } 

// J'ajoute la fonction pour l'affichage  
// clockNum() {
                      
//     setInterval(()=>{
//      let heureActuelle = numHours + ":" + numMinutes + ":" + numSeconds;
        
//     document.getElementById('horlogeNumerique').textContent = heureActuelle;
//     },1000) 
    
//     }
// };        

