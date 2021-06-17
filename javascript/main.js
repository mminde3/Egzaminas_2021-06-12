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
kaunoFilialoKainaDidesneNeguKitur();
kiekProcentuVeganPatiekalu();
vilniujeProcentaisDaugiauVeganPatiekaluNeiKitur();

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


function kaunoFilialoKainaDidesneNeguKitur(){
    let kaunoKaina = 0;
    let kaunoPatiekalu = 0;
    let kituKaina = 0;
    let kituPatiekalu = 0;

    data.forEach(element => {
        let adresas = element.adresas.toLowerCase();
        if(adresas.includes("kaunas") == true){
            element.menu.forEach(price => {
                let keys = (Object.keys(price));
                kaunoKaina += price[keys[0]];
                kaunoPatiekalu++;
            });
        }else{
            element.menu.forEach(price => {
                let keys = (Object.keys(price));
                kituKaina += price[keys[0]];
                kituPatiekalu++;
            });
        }
    });

    if((kaunoKaina / kaunoPatiekalu) > (kituKaina / kituPatiekalu)){
        console.log("Vidudinė patiekalų kaina Kauno filialuose aukštesnė TAIP");
    }else{
        console.log("Vidudinė patiekalų kaina Kauno filialuose aukštesnė NE");
    };
};

function kiekProcentuVeganPatiekalu(){
    let vegan = 0;
    let neVegan = 0;
    data.forEach(element => {
        element.menu.forEach(vegetan => {
            let keys = (Object.keys(vegetan));

            if(vegetan[keys[1]].includes("taip") == true){
                vegan++;
            };
            
            if(vegetan[keys[1]].includes("ne") == true){
                neVegan++;
            };
        });
    });
    console.log("Vegan patiekalu:", ((100 / (vegan + neVegan)) * vegan).toFixed(2), "%");
};

function vilniujeProcentaisDaugiauVeganPatiekaluNeiKitur(){
    let vilVegan = 0;
    let vilNeVegan = 0;
    let vegan = 0;
    let neVegan = 0;
    data.forEach(element => {
        let adresas = element.adresas.toLowerCase();
        if(adresas.includes("vilnius") == true){
            element.menu.forEach(vegetan => {
                let keys = (Object.keys(vegetan));
    
                if(vegetan[keys[1]].includes("taip") == true){
                    vilVegan++;
                };
                
                if(vegetan[keys[1]].includes("ne") == true){
                    vilNeVegan++;
                };
            });
        }else{
            element.menu.forEach(vegetan => {
                let keys = (Object.keys(vegetan));
    
                if(vegetan[keys[1]].includes("taip") == true){
                    vegan++;
                };
                
                if(vegetan[keys[1]].includes("ne") == true){
                    neVegan++;
                };
            });
        }
    });

    let vilniaus =  (100 / (vilVegan + vilNeVegan))* vilVegan;
    let kituMiestu =  (100 / (vegan + neVegan))* vegan;
console.log("Ar Vilniuje negu kitur procentaliai daugiau vegetariškų patiekalų:", vilniaus > kituMiestu);


};