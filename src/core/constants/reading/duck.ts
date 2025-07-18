import { Reading } from "../../model/configuration";

export const reading_duck: Reading = {
  title: "Pato al rescate",
  text: `Bruno era un pato miedoso, temía a las alturas, las arañas, pero sobre todo, tenía pavor de sumergirse en el lago, por lo oscuro que era. Siempre nadaba en los charcos pequeños, solo acompañado de Anita, la ardilla. —¿No vienes, Brunito? —le preguntaban los demás patos desde lo profundo del lago. —Eh… ¡tengo que cuidar mis plumas! —respondía nervioso.
Un día, Anita resbaló de una rama y cayó al lago —¡Ayuda! ¡No sé nadar! —gritaba. Mientras se hundía. Todos se asustaron. Brunito temblaba, pero vio a su amiga en peligro.
Sin pensarlo, corrió y se lanzó al agua.
 —¡Ya voy, Anita! —cuacó con fuerza. Nadó con todas sus fuerzas, se sumergió y logró llevar a su amiga hasta la orilla. Todos lo abrazaron y aplaudieron.
 —¡Fuiste muy valiente! —dijeron los demás patos. Bruno sonrió, sorprendido.
 —¡Y yo que pensaba que no podía!
Desde ese día, Brunito ya no teme al agua. Porque entendió que la valentía no es no tener miedo… es actuar con el corazón.`,
  phrase: "Ser valiente es actuar aunque tengas miedo.",
  image_url_menu: "./avif/menu/duck.avif",
  image_url_text: "./avif/reading/reading_duck.avif",
  questions: [
    {
      id: "0",
      text: "¿Quién era la amiga de Bruno?",
      image_url: "./avif/question/question_duck_1.avif",
      answer: 1,
      options: [
        "Clara, la cigüeña",
        "Anita, la ardilla",
        "Lila, la rana",
        "Rosa, la paloma"
      ],
    },
    {
      id: "1",
      text: "¿Por qué Bruno no se metía al lago?",
      image_url: "./avif/question/question_duck_2.avif",
      answer: 2,
      options: [
        "Porque no sabía nadar",
        "Porque tenía que cuidar su pico",
        "Porque temía a lo profundo del lago",
        "Porque los otros patos no lo dejaban"
      ],
    },
    {
      id: "2",
      text: "¿Qué le pasó a Anita un día?",
      image_url: "./avif/question/question_duck_3.avif",
      answer: 2,
      options: [
        "Se quedó dormida en una rama",
        "Se fue volando con los patos",
        "Se cayó al lago y no sabía nadar",
        "Se escondió de Bruno"
      ],
    },
    {
      id: "3",
      text: "¿Qué demuestra la acción de Bruno al lanzarse al agua?",
      image_url: "./avif/question/question_duck_4.avif",
      answer: 1,
      options: [
        "Que fue impulsivo",
        "Que actuó con valentía",
        "Que quería ser famoso"
      ],
    },
    {
      id: "4",
      text: "¿Qué podemos entender por la frase “valentía no es no tener miedo… es actuar con el corazón”?",
      image_url: "./avif/question/question_duck_5.avif",
      answer: 2,
      options: [
        "Que solo los valientes sienten miedo",
        "Que Bruno se volvió temerario",
        "Que actuar a pesar del miedo es ser valiente"
      ],
    },
    {
      id: "5",
      text: "¿Por qué los demás patos se sorprendieron con Bruno?",
      image_url: "./avif/question/question_duck_6.avif",
      answer: 2,
      options: [
        "Porque no sabían que podía cantar",
        "Porque siempre fue el más valiente",
        "Porque no esperaban que se lanzara al agua"
      ],
    }
  ],
}
