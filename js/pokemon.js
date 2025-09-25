async function Pokemon(id){
    
    var root = document.getElementById("root");
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();

        console.log(data.forms[0].name)
}
Pokemon(25)
Pokemon(10)
Pokemon(69)
Pokemon(6)
Pokemon(134)