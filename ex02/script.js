let idades = [];
let lista = "As ";
for(i = 0; i < 7; i++)
{
    idades[i] = Number(prompt(`Digite a idade da ${i+1}º pessoa da lista:`));
    if(idades[i] > 25)
    {
        lista = lista + `\n${i+1}º `;
    }
}

alert(`${lista} Pessoas tem mais de 25 anos.`);