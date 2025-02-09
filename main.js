const form = document.querySelector("#form");
const btn = document.querySelector("#btn");
const searchInput = document.querySelector("#input");
const ota = document.querySelector("#pokemon__wrapper");
const pokeSelect = document.querySelector(".select");

function renderForm (poki){
ota.innerHTML = "";
if(poki.length === 0){
    ota.innerHTML = `
    <span style="color:red;">Pokemon Topilmadi!</span>
    
    `
}

poki.forEach(objektlar => {
    const li = document.createElement("li");
    li.innerHTML = `
     <span style="color:red;font-size:19px;font-weight:600;">${objektlar.num}</span>
       <h2>${objektlar.name}</h2>
    <img src="${objektlar.img}">
    <span>${objektlar.id}</span>
    <span>${objektlar.weight}</span>
    <span>${objektlar.height}</span>
    <span>${objektlar.spawn_time}</span>
    <span style="color:#80007C; font-size:14px;font-weight:600;">${objektlar.type}</span>
    `
    li.className = "poki1"
    
    ota.append(li)  
})
}
renderForm(pokemons)



form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputQiymati = searchInput.value;
  
    const filtirLangan = pokemons.filter((malumotlar) => {
      return malumotlar.name.toLowerCase().includes(inputQiymati.toLowerCase());
    });
    renderForm(filtirLangan);
  });

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const inputQiymati = searchInput.value.toLowerCase();

    const filterLanganlar = pokemons.filter(item => {
        return item.name.toLowerCase().includes(inputQiymati)
    })

    renderForm(filterLanganlar)
});

function sortirovka(obj, qiymat) {
    let newArr = [...obj]; 
    if (qiymat === "A-Z") {
        return newArr.sort((a, b) => a.name.localeCompare(b.name));
    } else if (qiymat === "Z-A") {
        return newArr.sort((a, b) => b.name.localeCompare(a.name));
    }
    return newArr;

    
}

pokeSelect.addEventListener("change",() => {
    const val = pokeSelect.value;
    let sortedPokemons;

    if(val === "A-Z" || val === "Z-A"){
        sortedPokemons = sortirovka(pokemons,val)
    }else{
        sortedPokemons = pokemons
    }

    renderForm(sortedPokemons)
})

btn.addEventListener("click",(e) => {
    e.preventDefault();
    const inputQiymati = searchInput.value.toLowerCase();

    const filterLanganlar = pokemons.filter(item => {
        return item.name.toLowerCase().includes(inputQiymati);
    })

    renderForm(filterLanganlar)
});