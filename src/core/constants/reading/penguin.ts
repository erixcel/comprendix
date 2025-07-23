import { Reading } from "../../model/configuration";

export const reading_penguin: Reading = {
  title: "Las alas de Pipo",
  text: `Pipo era un pingüino muy curioso. Cada día se quedaba mirando el cielo y suspiraba.
 —“¿Por qué no puedo volar como los pájaros?” —decía, moviendo sus pequeñas alas con ilusión.
Intentaba una y otra vez. Se lanzaba desde rocas, se trepaba a montones de nieve, agitaba con fuerza sus alitas… pero nunca lograba despegar.
 —“Mis alas no sirven…” —murmuraba, con tristeza. Los días pasaban, pero su deseo de volar no desaparecía. Hasta que un día, mientras caminaba cerca del agua, resbaló sin querer y…
¡SPLASH! Cayó al mar. Pipo se asustó, pero rápidamente empezó a mover sus alas. Y entonces… ¡comenzó a nadar como nunca antes!
Giraba, se deslizaba, se hundía, saltaba con fuerza... ¡Estaba volando bajo el agua! Las burbujas lo rodeaban y los peces nadaban a su lado, como si lo aplaudieran.
Desde entonces, ya no quiso volar por el cielo. Descubrió que sus alas sí servían… ¡eran perfectas para nadar!
Y así, Pipo aprendió que a veces lo que creemos una debilidad…
puede ser nuestro mayor talento en el lugar correcto.`,
  phrase: "A veces lo que creemos que es una debilidad, es nuestra mayor fortaleza.",
  image_url_menu: "./avif/menu/penguin.avif",
  image_url_text: "./avif/reading/reading_penguin.avif",
  pdf_url: "./pdf/reading_penguin.pdf",
  questions: [
    {
      id: "0",
      text: "¿Qué animal era Pipo?",
      image_url: "./avif/question/question_penguin_1.avif",
      answer: 1,
      options: [
        "Un oso polar",
        "Un pingüino",
        "Un pato",
        "Un delfín"
      ],
    },
    {
      id: "1",
      text: "¿Qué intentaba hacer Pipo todos los días?",
      image_url: "./avif/question/question_penguin_2.avif",
      answer: 2,
      options: [
        "Aprender a cantar",
        "Hacer muñecos de nieve",
        "Volar como los pájaros",
        "Atrapar peces"
      ],
    },
    {
      id: "2",
      text: "¿Qué descubrió Pipo cuando cayó al agua?",
      image_url: "./avif/question/question_penguin_3.avif",
      answer: 1,
      options: [
        "Que podía cantar",
        "Que podía nadar muy bien",
        "Que no le gustaba el agua",
        "Que era un pájaro"
      ],
    },
    {
      id: "3",
      text: "¿Por qué crees que Pipo quería volar como los pájaros?",
      image_url: "./avif/question/question_penguin_4.avif",
      answer: 1,
      options: [
        "Porque quería escapar del frío",
        "Porque los veía en el cielo y soñaba con volar",
        "Porque estaba cansado de nadar"
      ],
    },
    {
      id: "4",
      text: "¿Qué le hizo cambiar de idea sobre sus alas?",
      image_url: "./avif/question/question_penguin_5.avif",
      answer: 2,
      options: [
        "Su papá le enseñó",
        "Un pájaro lo convenció",
        "Descubrió que podía nadar rápido con ellas"
      ],
    },
    {
      id: "5",
      text: "¿Cómo se sintió Pipo al descubrir que podía “volar” bajo el agua?",
      image_url: "./avif/question/question_penguin_6.avif",
      answer: 2,
      options: [
        "Triste y asustado",
        "Enojado porque no volaba en el cielo",
        "Feliz y contento"
      ],
    }
  ],
}
