const idezetek = [
    { "idezet": "Az egyetlen gát a holnap megvalósítása előtt a mai kétségeink.", "szerzo": "Franklin D. Roosevelt" },
    { "idezet": "Minden nehézség közepén ott rejlik a lehetőség.", "szerzo": "Albert Einstein" },
    { "idezet": "A siker nem végleges, a kudarc nem végzetes: a folytatáshoz szükséges bátorság számít.", "szerzo": "Winston Churchill" },
    { "idezet": "Az élet az, ami akkor történik, amikor más terveket készítesz.", "szerzo": "John Lennon" },
    { "idezet": "Azok a választásaink, nem pedig a képességeink mutatják meg, hogy kik is vagyunk valójában.", "szerzo": "J.K. Rowling" },
    { "idezet": "Nem számít, milyen lassan haladsz, amíg nem állsz meg.", "szerzo": "Konfuciusz" },
    { "idezet": "Ha nem vagy hajlandó kockáztatni a megszokottat, be kell érned az átlagossal.", "szerzo": "Jim Rohn" },
    { "idezet": "Az élet célja az, hogy boldogok legyünk.", "szerzo": "Dalai Láma" },
    { "idezet": "Úgy cselekedj, mintha amit teszel, számítana. Mert számít.", "szerzo": "William James" },
    { "idezet": "A siker általában azokhoz jön, akik túl elfoglaltak ahhoz, hogy keresgéljék.", "szerzo": "Henry David Thoreau" },
    { "idezet": "Ne félj feladni a jót a nagyszerűért.", "szerzo": "John D. Rockefeller" },
    { "idezet": "Úgy látom, minél keményebben dolgozom, annál szerencsésebb vagyok.", "szerzo": "Thomas Jefferson" },
    { "idezet": "Azokat a lövéseket, amiket nem adsz le, mind kihagyod.", "szerzo": "Wayne Gretzky" },
    { "idezet": "Ha alaposan megnézed, a legtöbb „egyik napról a másikra” siker hosszú idő alatt jön létre.", "szerzo": "Steve Jobs" },
    { "idezet": "Az egyetlen lehetetlen utazás az, amit sosem kezdesz el.", "szerzo": "Tony Robbins" },
    { "idezet": "A legjobb idő egy fa ültetésére 20 évvel ezelőtt volt. A második legjobb idő most van.", "szerzo": "Kínai közmondás" },
    { "idezet": "A meg nem vizsgált élet nem érdemes élni.", "szerzo": "Szókratész" },
    { "idezet": "Az időd korlátozott, ne pazarold mások életére.", "szerzo": "Steve Jobs" },
    { "idezet": "Akár azt hiszed, hogy képes vagy rá, akár azt, hogy nem, igazad van.", "szerzo": "Henry Ford" },
    { "idezet": "Az egyetlen módja annak, hogy nagyszerű munkát végezz, ha szereted, amit csinálsz.", "szerzo": "Steve Jobs" },
    { "idezet": "Ha boldog életet akarsz élni, kösd egy célhoz, ne emberekhez vagy dolgokhoz.", "szerzo": "Albert Einstein" },
    { "idezet": "Ne hagyd, hogy a kieséstől való félelem megakadályozzon a játékban.", "szerzo": "Babe Ruth" },
    { "idezet": "A pénz és a siker nem változtatják meg az embereket; csak felerősítik azt, ami már bennük van.", "szerzo": "Will Smith" },
    { "idezet": "Az időd korlátozott, ne pazarold mások életének élésére.", "szerzo": "Steve Jobs" },
    { "idezet": "Nem az számít, hogy mennyi ideig élsz, hanem hogy mennyire jól.", "szerzo": "Seneca" },
    { "idezet": "Az élet sikerének titka az, hogy megtaláld, mi az a sors, amit beteljesítened kell, majd meg is tedd.", "szerzo": "Henry Ford" },
    { "idezet": "Változtasd a sebeidet bölcsességgé.", "szerzo": "Oprah Winfrey" },
    { "idezet": "Higgy magadban, és máris félúton vagy a sikerhez.", "szerzo": "Theodore Roosevelt" },
    { "idezet": "Ne hagyd, hogy a megélhetés iránti törekvés megakadályozzon abban, hogy életet élj.", "szerzo": "John Wooden" },
    { "idezet": "Az életed akkor javul, ha te is fejlődsz.", "szerzo": "Brian Tracy" }
];

let idezet_div = document.getElementById("idezet_div");
let fodiv = document.getElementById("fodiv");
let kedvencdiv=document.createElement("div");

let balra = document.createElement("button");
balra.innerText="⬅"
balra.id="balra"
let jobbra = document.createElement("button");
jobbra.innerText="➡"
jobbra.id="jobbra"
let kedvenc = document.createElement("button")
kedvenc.innerText= "Kedvencekhez adás";
kedvenc.id="kedvenc"
let asd = document.createElement("h3");
asd.innerText="Kedvenc idézetek:"

let idezet= document.createElement("span");
idezet.innerText=idezetek[0].idezet;
let szerzo = document.createElement("p");
szerzo.innerText="-" +idezetek[0].szerzo;
idezet_div.appendChild(idezet)
idezet_div.appendChild(szerzo)

fodiv.appendChild(balra)
fodiv.appendChild(kedvenc)
fodiv.appendChild(jobbra)
fodiv.appendChild(asd)

let hely=0;
jobbra.addEventListener("click",function(){
    if(hely==idezetek.length-1){
        hely=0
        idezet.innerText=idezetek[hely].idezet
        szerzo.innerText="-" +idezetek[hely].szerzo
        hely++
    }
    else{
        hely++
        idezet.innerText=idezetek[hely].idezet
        szerzo.innerText="-" +idezetek[hely].szerzo
    }
})

balra.addEventListener("click",function(){
    if(hely==0){
        hely=idezetek.length-1
        idezet.innerText=idezetek[hely].idezet
        szerzo.innerText="-" +idezetek[hely].szerzo
        hely--
    }
    else{
        hely--
        idezet.innerText=idezetek[hely].idezet
        szerzo.innerText="-" +idezetek[hely].szerzo
    }
})

kedvenc.addEventListener("click",function(){
    let kedvencidez= document.createElement("p");
    kedvencidez.innerText='"'+idezetek[hely].idezet+'" -' +idezetek[hely].szerzo;
    fodiv.appendChild(kedvencidez)
    
})