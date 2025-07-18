import { Reading } from "../../model/configuration";

export const reading_penguin: Reading = {
  title: "Las alas de Pipo",
  text: `Pipo era un pingüino muy curioso. Cada día se quedaba mirando el cielo y suspiraba.
 —“¿Por qué no puedo volar como los pájaros?” —decía, moviendo sus pequeñas alas con ilusión.
Intentaba una y otra vez. Se lanzaba desde rocas, se trepaba a montones de nieve, agitaba con fuerza sus alitas… pero nunca lograba despegar.
—“Mis alas no sirven…” —murmuraba, con tristeza. Los días pasaban, pero su deseo de volar no desaparecía. Hasta que un día, mientras caminaba cerca del agua, resbaló sin querer y…`,
  image_url: "./avif/menu/penguin.avif",
  questions: [
    {
      id: "0",
      text: "¿Qué animal era Pipo?",
      answer: 1,
      options: [
        "Nadar en el hielo",
        "Volar como los pájaros",
        "Comer muchos peces",
        "No quería nada"
      ],
    }
  ],
}
