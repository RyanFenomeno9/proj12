let idades = [];
let soma = 0;
for(i = 0; i < 8; i++)
{
    idades[i] = Number(prompt(`Digite a ${i+1}º idade da lista:`));
    soma = soma + idades[i];
}

soma = soma / 8;
alert(`A média dessas idades é ${soma}`);