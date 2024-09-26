export function structNestedOptions(data: any, key: any) {
    if (!Array.isArray(key)) throw new Error('Must be an array object');
    key = key.map(el => String(el).trim());

    let listCities = [];

    for (let el of data) {
      if (key.length < 2) {
        listCities.push({ value: String(el?.[key[0]]), label: String(el?.[key[0]]) });
      } else {
        // Acessando dados aninhados
        let auxData = el;
        // Navega na estrutura do objeto com base nas chaves do array key
        for (let i = 0; i < key.length; i++) {
          let keyAux = key[i];

          if (auxData) {
            auxData = auxData[keyAux];  // Acessando a propriedade correta
          }

        }
        // Adicionando o resultado final à lista
        listCities.push({ value: String(auxData), label: String(auxData) });
      }
    }
    //Verifica o array todo e depois retorna o parse dele
    return Array.from(new Set(listCities.map(item => JSON.stringify(item))))
    .map(item => JSON.parse(item));;
}