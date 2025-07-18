import { Reading } from "../../model/configuration";

export const reading_tortoise: Reading = {
  title: "Luna, la tortuga veloz",
  text: `Luna era una pequeña tortuga que soñaba con correr tan rápido como los ciervos del bosque.
 —“¡Un día los alcanzaré!” —decía, mientras sus patitas avanzaban lentas pero firmes.
Los otros animales se reían.
 —“¡Eres una tortuga! ¡Nunca correrás como nosotros!” —decían las liebres saltando.
Pero Luna no se rendía. Cada día caminaba un poco más lejos, sin importar cuánto tardara.
Una tarde, se desató una gran tormenta. El río creció y muchos animalitos quedaron atrapados. El agua corría demasiado rápido para que los ciervos y liebres ayudaran…
Pero Luna, con su caparazón resistente y su paso firme, cruzó el barro sin caerse. Uno por uno, fue llevando a los más pequeños a un lugar seguro.
Cuando todo terminó, todos la miraban con admiración.
 —“¡Gracias, Luna! ¡Eres increíble!”
Luna sonrió.
 —“Tal vez no corro como ustedes… pero llego donde me necesitan.”
Desde entonces, nadie volvió a reírse de su paso lento. Porque descubrieron que, a su modo, Luna era más veloz que cualquiera.`,
  phrase: "Avanzar lento pero firme te lleva más lejos que rendirse rápido.",
  image_url_menu: "./avif/menu/tortoise.avif",
  image_url_text: "./avif/reading/reading_tortoise.avif",
  questions: [
    {
      id: "0",
      text: "¿Qué animal era Luna?",
      image_url: "./avif/question/question_tortoise_1.avif",
      answer: 2,
      options: [
        "Una mariposa",
        "Una araña",
        "Una tortuga",
        "Un gato"
      ],
    },
    {
      id: "1",
      text: "¿Qué quería hacer Luna?",
      image_url: "./avif/question/question_tortoise_2.avif",
      answer: 3,
      options: [
        "Volar como los pájaros",
        "Dormir todo el día",
        "Comer muchas frutas",
        "Correr tan rápido como los ciervos"
      ],
    },
    {
      id: "2",
      text: "¿Qué pasó una tarde en el bosque?",
      image_url: "./avif/question/question_tortoise_3.avif",
      answer: 1,
      options: [
        "Salió el arcoíris",
        "Llegó una gran tormenta",
        "Todos fueron de paseo",
        "Luna se perdió"
      ],
    },
    {
      id: "3",
      text: "¿Cómo ayudó Luna a los animalitos?",
      image_url: "./avif/question/question_tortoise_4.avif",
      answer: 1,
      options: [
        "Volando con sus alas",
        "Llevándolos a un lugar seguro",
        "Corriendo más rápido que el agua"
      ],
    },
    {
      id: "4",
      text: "¿Qué enseñó Luna a los demás animales?",
      image_url: "./avif/question/question_tortoise_5.avif",
      answer: 2,
      options: [
        "Que lo importante es nunca salir de casa",
        "Que los animales grandes son mejores",
        "Que todos somos valiosos a nuestra manera"
      ],
    },
    {
      id: "5",
      text: "¿Por qué Luna fue una heroína en el cuento?",
      image_url: "./avif/question/question_tortoise_6.avif",
      answer: 1,
      options: [
        "Porque era la más rápida del bosque",
        "Porque salvó a los animales durante la tormenta",
        "Porque tenía una capa mágica"
      ],
    }
  ],
}
