import { Reading } from "../../model/configuration";

export const reading_frog: Reading = {
  title: "La reina del Salto Alto",
  text: `Loto era una rana pequeña, pero la más ágil y lista del pantano. Saltaba alto, más que cualquiera… hasta que un día llegó Ramón, una rana grande y fuerte que quería quedarse con el trono del rey, papá de Loto.
 —Solo quien me supere en un duelo de salto podrá impedirlo —dijo Ramón.
Ninguna rana se atrevía… excepto Loto. —¿Tú? —se burló Ramón—. ¡Eres tan chiquita! Pactemos el día del duelo, y que gane la mejor Rana, es decir, Yo.
Sus amigas pensaban que no lo lograría, pero ella no se rindió. Entrenó cada día con esfuerzo y paciencia.
En el duelo final, ambos saltaron obstáculos difíciles. En el último, Ramón no pudo pasar por su peso… Loto, con un gran respiro y toda su fuerza, dio el salto más alto y lo superó.
Ramón quedó sorprendido —No debí subestimarla.
 —¡Eres increíble, Loto! Croaban las ranitas.
Ella devolvió la corona a su papá, pero él le dijo:
 —Hoy demostraste que estás lista para ser reina.`,
  phrase: "Si saltas con ganas, aunque falles, un día llegarás.",
  image_url_menu: "./avif/menu/frog.avif",
  image_url_text: "./avif/reading/reading_frog.avif",
  questions: [
    {
      id: "0",
      text: "¿Qué quería hacer Ramón al llegar al pantano?",
      image_url: "./avif/question/question_frog_1.avif",
      answer: 2,
      options: [
        "Hacerse amigo del rey rana",
        "Enseñar a saltar a las ranas pequeñas",
        "Quedarse con el trono del rey",
        "Construir un puente nuevo"
      ],
    },
    {
      id: "1",
      text: "¿Por qué las amigas de Loto no creían que ganaría?",
      image_url: "./avif/question/question_frog_2.avif",
      answer: 1,
      options: [
        "Porque era nueva en el pantano",
        "Porque era pequeña",
        "Porque no sabía nadar",
        "Porque no conocía a Ramón"
      ],
    },
    {
      id: "2",
      text: "¿Qué hizo Loto para prepararse para el duelo?",
      image_url: "./avif/question/question_frog_3.avif",
      answer: 3,
      options: [
        "Fue a buscar ayuda mágica",
        "Se escondió de Ramón",
        "Practicó con su papá",
        "Entrenó cada día con esfuerzo y paciencia"
      ],
    },
    {
      id: "3",
      text: "¿Qué demuestra el resultado del duelo entre Loto y Ramón?",
      image_url: "./avif/question/question_frog_4.avif",
      answer: 1,
      options: [
        "Que la fuerza es más importante que la inteligencia",
        "Que el tamaño no define lo que uno puede lograr",
        "Que solo los grandes pueden ganar"
      ],
    },
    {
      id: "4",
      text: "¿Qué aprendió Ramón después del duelo?",
      image_url: "./avif/question/question_frog_5.avif",
      answer: 1,
      options: [
        "Que debe entrenar más",
        "Que no debe subestimar a otros por su tamaño",
        "Que las ranas pequeñas no sirven para reinar"
      ],
    },
    {
      id: "5",
      text: "¿Por qué el papá de Loto le dijo que estaba lista para ser reina?",
      image_url: "./avif/question/question_frog_6.avif",
      answer: 1,
      options: [
        "Porque Loto obedeció sus órdenes",
        "Porque Loto fue valiente y perseverante",
        "Porque el rey se sentía cansado"
      ],
    }
  ],
}
