/* 
Kiekviena užduotis turi būti aprašyta kaip atskira funkcija
kuriai yra paduodami duomenys. Aprašykite visas funkcijas žemiau. 
Visas funkcijas iškvieskite vieną po kitos, žemiau šio komentaro.

Taip pat parašykite funkciją kuri: isikviesdama save pačią atspausdina skaičius nuo 1 iki 10

*/

kaviniuSkaicius();
kiekYraKaviniuKaune();
kavinesPatiekalai(0);
skirtinguPatiekaluKaunoFil();
patiekaluVidutinekaina();
kaunoFilDidNeiKitur();

function kaviniuSkaicius(){
    console.log("Kaviniu skaicius:", data.length);
}

function kiekYraKaviniuKaune(){
    let kiekis = 0;
    data.forEach(element => {
        let adresas = element.adresas.toLowerCase();
        if(adresas.includes("kaunas") == true){
            kiekis++
        }
    });
    console.log("Kaune esancios kavines:", kiekis);
}

function kavinesPatiekalai(kavine){
    console.log(`Patiekalu skaicius ${kavine + 1} kavinej:`, data[kavine].menu.length);
}

function skirtinguPatiekaluKaunoFil(){
    
    patiekalai = ([]);
    data.forEach(element => {
        let adresas = element.adresas.toLowerCase();
        if(adresas.includes("kaunas") == true){
            element.menu.forEach(patiekalas => {
                keys = (Object.keys(patiekalas));
                patiekalai.push(keys[0]);
            });
        }
    });
    console.log("Kauno filialuose skirtingu patiekalu:", [...new Set(patiekalai)].length);

}

function patiekaluVidutinekaina(){

    let kainu = 0;
    let kaina = 0;
    data.forEach(element => {
        element.menu.forEach(price => {
            let keys = (Object.keys(price));
            kaina += price[keys[0]];
            kainu++;
        });

    });
    console.log("Vidutine patiekalu kaina:", (kaina / kainu).toFixed(2));

}


function kaunoFilDidNeiKitur(){



}