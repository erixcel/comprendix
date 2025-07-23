import { Reading } from "../../model/configuration";

export const reading_bear: Reading = {
  title: "Abrazo de Oso",
  text: `Tito era un oso grande, muy grande… Tan grande que cuando caminaba, las ramas crujían y los pajaritos se callaban. Los animales del bosque le tenían miedo.
 —¡Es enorme! —decía la rana. —¡Seguro es gruñón! —decía el castor.
Pero Tito no entendía por qué todos huían. Cuando un polluelo calló de su nido, Tito intentó sujetarlo, pero el pequeño salió huyendo al ver los enormes dientes del oso.
 —Solo quiero ayudar… —decía triste.
Un día, Analís la coneja, perdió su cometa en lo alto de un árbol.
El castor intentó trepar, la rana saltar, y nadie lograba alcanzarla. Entonces, Tito se acercó. Todos retrocedieron con miedo.
Pero él sonrió, levantó su pata enorme… y con cuidado, bajó la cometa.
 —Aquí tienes— Los animales se quedaron en silencio.
—Gracias, Tito… eres muy… amable —dijo Analís abrazando al oso.
Desde ese día, Tito ya no asustaba.
 Ahora sabían que su fuerza servía para cuidar, no para asustar.
 Y que Tito… era grande, pero su corazón aún más.`,
  phrase: "La verdadera fuerza está en la amabilidad.",
  image_url_menu: "./avif/menu/bear.avif",
  image_url_text: "./avif/reading/reading_bear.avif",
  pdf_url: "./pdf/reading_bear.pdf",
  questions: [
    {
      id: "0",
      text: "¿Qué hacían los animales cuando Tito caminaba por el bosque?",
      image_url: "./avif/question/question_bear_1.avif",
      answer: 2,
      options: [
        "Lo saludaban con alegría",
        "Se escondían y hacían ruido",
        "Las ramas crujían y los pajaritos se callaban",
        "Le pedían ayuda"
      ],
    },
    {
      id: "1",
      text: "¿Qué perdió Analís la coneja?",
      image_url: "./avif/question/question_bear_2.avif",
      answer: 1,
      options: [
        "Una pelota",
        "Su cometa",
        "Un sombrero",
        "Su nido"
      ],
    },
    {
      id: "2",
      text: "¿Qué hizo Tito para ayudar a Analís?",
      image_url: "./avif/question/question_bear_3.avif",
      answer: 3,
      options: [
        "Trepó el árbol y le dio la cometa",
        "Sacudió el árbol",
        "Se subió en una roca",
        "Alzó su pata y bajó la cometa con cuidado"
      ],
    },
    {
      id: "3",
      text: "¿Por qué los animales tenían miedo de Tito al principio?",
      image_url: "./avif/question/question_bear_4.avif",
      answer: 1,
      options: [
        "Porque era nuevo en el bosque",
        "Porque era muy grande y creían que era gruñón",
        "Porque había asustado a otros animales antes"
      ],
    },
    {
      id: "4",
      text: "¿Qué demuestra la forma en que Tito ayudó a Analís?",
      image_url: "./avif/question/question_bear_5.avif",
      answer: 2,
      options: [
        "Que era muy juguetón",
        "Que sabía trepar árboles",
        "Que era fuerte pero también amable"
      ],
    },
    {
      id: "5",
      text: "¿Cuál es la enseñanza principal de esta historia?",
      image_url: "./avif/question/question_bear_6.avif",
      answer: 0,
      options: [
        "No hay que juzgar a alguien solo por su apariencia",
        "Es mejor estar lejos de los animales grandes",
        "Los osos no deben vivir con otros animales"
      ],
    }
  ],
}
