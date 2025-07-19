import { Reading } from "../../model/configuration";

export const reading_monkey: Reading = {
  title: "Tico no quería ayuda",
  text: `Tico era un mono muy inquieto, siempre lleno de ideas locas. Un día, decidió construir una casa en el árbol más alto de la selva. —¡Será la mejor casa del mundo! —decía emocionado, dando saltos de rama en rama. Los demás animales se ofrecieron a ayudar, pero Tico quería hacerlo solo. —Gracias, pero no necesito ayuda. Yo puedo con todo —insistió. Ató ramas, colgó lianas y apiló hojas… Pero al primer salto de prueba, ¡la casa se vino abajo!
 —¡Ay! Esto es más difícil de lo que pensé… —dijo con un suspiro.
Entonces, Azul, el guacamayo, voló hacia él. —¿Quieres ayuda? Yo sé cómo unir bien las ramas. Luego llegó Sergio, el leopardo:
 —¡Yo puedo traer hojas grandes para el techo!
Poco a poco, cada animal aportó algo especial: La serpiente trajo cuerdas resistentes, la rana encontró flores para decorar, y hasta el oso cargó los troncos más pesados. Juntos, construyeron una casa increíble: con hamaca, tobogán y hasta un mirador para ver las estrellas. —¡Gracias, amigos! —dijo Tico, con una gran sonrisa—.
Mi idea era buena, pero con ustedes fue maravillosa.`,
  phrase: "Juntos podemos más, y la creatividad se comparte mejor.",
  image_url_menu: "./avif/menu/monkey.avif",
  image_url_text: "./avif/reading/reading_monkey.avif",
  questions: [
    {
      id: "0",
      text: "¿Qué quería construir Tico en el árbol más alto de la selva?",
      image_url: "./avif/question/question_monkey_1.avif",
      answer: 2,
      options: [
        "Un columpio gigante",
        "Una torre para vigilar",
        "Una casa",
        "Una cueva secreta"
      ],
    },
    {
      id: "1",
      text: "¿Qué dijo Tico cuando los animales se ofrecieron a ayudarlo?",
      image_url: "./avif/question/question_monkey_2.avif",
      answer: 1,
      options: [
        "¡Qué buena idea!",
        "Yo puedo con todo",
        "Mejor mañana",
        "No quiero construir nada"
      ],
    },
    {
      id: "2",
      text: "¿Qué animal voló hacia Tico para ofrecerle ayuda después del accidente?",
      image_url: "./avif/question/question_monkey_3.avif",
      answer: 2,
      options: [
        "El oso",
        "La serpiente",
        "El guacamayo",
        "El jaguar"
      ],
    },
    {
      id: "3",
      text: "¿Por qué la casa de Tico se cayó la primera vez?",
      image_url: "./avif/question/question_monkey_4.avif",
      answer: 1,
      options: [
        "Porque era de cartón",
        "Porque no pidió ayuda y no la construyó bien",
        "Porque llovió fuerte"
      ],
    },
    {
      id: "4",
      text: "¿Qué enseña esta historia sobre el trabajo en equipo?",
      image_url: "./avif/question/question_monkey_5.avif",
      answer: 2,
      options: [
        "Que es más rápido trabajar solo",
        "Que pedir ayuda no sirve de mucho",
        "Que trabajar juntos mejora los resultados"
      ],
    },
    {
      id: "5",
      text: "¿Cómo se siente Tico al final de la historia?",
      image_url: "./avif/question/question_monkey_6.avif",
      answer: 0,
      options: [
        "Agradecido y feliz por la ayuda de sus amigos",
        "Enojado por no haberlo hecho solo",
        "Triste porque su idea fracasó"
      ],
    }
  ],
}
