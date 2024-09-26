export function structNestedOptions(data: any, key: any) {
    if (!Array.isArray(key)) throw new Error(`${key} Must be an array object`);
    try {
        key = key.map(el => String(el).trim());

        let listOptions = [];

        for (let el of data) {

            if (key.length < 2) {
                listOptions.push({ value: String(el?.[key[0]]), label: String(el?.[key[0]]) });
            } else {
                // Acessando dados aninhados
                let auxData = el;
                // Navega na estrutura do objeto com base nas chaves do array key
                for (let i = 0; i < key.length; i++) {
                let keyAux = key[i];

                if (auxData) {
                    if(!auxData?.[keyAux]) throw new Error('Nao foi possivel acessar esta hierarquia. ')
                    auxData = auxData[keyAux];  // Acessando a propriedade correta
                }

                }
                // Verificacao adicional
                if(!String(auxData).includes('null') && String(auxData).length > 0 && auxData) {
                    listOptions.push({ value: String(auxData), label: String(auxData) });
                }
            }
        }
        //Verifica o array todo e depois retorna o parse dele
        return Array.from(new Set(listOptions.map(item => JSON.stringify(item))))
        .map(item => JSON.parse(item));

    } catch (error) {
        console.log('Error: ', error);
    }

}