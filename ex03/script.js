let idades = [];
let lista = "Os multiplos de 10 foram digitados nas seguintes posições: ";
for(i = 0; i < 15; i++)
{
    idades[i] = Number(prompt(`Digite a ${i+1}º idade da lista:`));
    if(idades[i]%10 == 0)
    {
        lista = lista + `\n${i+1}º`;
    }
}


alert(`Os números que você escreveu foram: ${idades}`);
alert(`${lista}`);