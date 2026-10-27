import { useState } from 'react'
import { destinatii as destinatiiInitiale } from './data/destinatii.js'
import { getNevizitate, totalZile, marcheazaVizitat } from './utils/destinatii.js'
import Rezumat from './components/Rezumat.jsx'
import ListaDestinatii from './components/ListaDestinatii.jsx'
import './App.css'

export default function App() {
    const [destinatii, setDestinatii] = useState(destinatiiInitiale)

    // valorile din rezumat se calculează din stare la fiecare desenare
    const nevizitate = getNevizitate(destinatii)

    function handleToggle(id) {
        setDestinatii((curent) => marcheazaVizitat(curent, id))
    }

    return (
        <main>
            <h1>City Explorer</h1>
            <Rezumat
                total={destinatii.length}
                nevizitate={nevizitate.length}
                zile={totalZile(nevizitate)}
            />
            <ListaDestinatii destinatii={destinatii} onToggle={handleToggle} />
        </main>
    )
}
