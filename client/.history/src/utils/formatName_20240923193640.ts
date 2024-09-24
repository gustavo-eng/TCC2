export function formatName(nome: string): string {
    // Dividindo o nome em partes (separado por espaço)
    const partesNome = nome.trim().split(" ");

    // Pegando a primeira letra do primeiro nome e do último nome
    const primeiraLetra = partesNome[0][0];
    const segundaLetra = partesNome.length > 1 ? partesNome[1][0] : partesNome[0][1];

    // Retornando as letras em maiúsculas
    return `${primeiraLetra?.toUpperCase()}${segundaLetra.toUpperCase()}`;
  }