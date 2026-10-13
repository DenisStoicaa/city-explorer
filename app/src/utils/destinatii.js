// ===== Exercițiul 1: citire și prelucrare =====

// transformare: fiecare destinație devine numele orașului
export const getOrase = (list) => list.map((d) => d.oras)

// selectare: doar destinațiile nevizitate
export const getNevizitate = (list) => list.filter((d) => !d.vizitat)

// agregare: suma zilelor, pornind de la 0
export const totalZile = (list) => list.reduce((total, d) => total + d.zile, 0)

// un rând de text pentru o singură destinație
export const formatDestinatie = ({ oras, tara, zile, vizitat }) =>
    `${vizitat ? '[x]' : '[ ]'} ${oras}, ${tara} (${zile} zile)`

// grupare: câte destinații are fiecare țară
export const numarPeTara = (list) =>
    list.reduce((acc, { tara }) => ({ ...acc, [tara]: (acc[tara] ?? 0) + 1 }), {})

// sort modifică lista pe care e aplicat, deci se sortează o copie
export const sortDupaZile = (list) => [...list].sort((a, b) => b.zile - a.zile)

// ===== Exercițiul 2: modificare fără stricarea listei inițiale =====

export const marcheazaVizitat = (list, id) =>
    list.map((d) =>
        d.id === id
            ? { ...d, vizitat: !d.vizitat } // element nou
            : d,                            // element refolosit
    )

export const adaugaDestinatie = (list, d) => [...list, d]

export const stergeDestinatie = (list, id) => list.filter((d) => d.id !== id)
