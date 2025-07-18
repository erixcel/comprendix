import { Reading } from "../../model/configuration";

export const reading_snake: Reading = {
  title: "Palabras que hieren",
  text: `Débora, la serpiente, decía lo que pensaba, sin filtro ni cuidado. —¿Ese es tu dibujo? Parece un garabato. ¿Otra vez con esa flor, tortuga? Qué aburrida. ¡Qué lento eres, oso! ¡Parece que vives en cámara lenta!— Los animales empezaban a alejarse. —Débora hiere con su lengua —decían. Ella no entendía por qué. —¡Solo digo la verdad! —repetía una y otra vez. Un día, en la fiesta del bosque, la rana Lina presentó su canción. Cantó con emoción, aunque no tenía la mejor voz. Antes de que terminara, Débora soltó su comentario: ¡Qué desafinada! ¡Parecía que chillaba! Lina se calló de golpe.
Sus ojos se llenaron de lágrimas. Todos miraron a Débora… esta vez, ya no con molestia, sino con decepción. El loro bajó del árbol y dijo en voz suave: Ser sabia no es decir lo primero que piensas. Es saber cuándo y cómo decirlo. Ella se quedó en silencio. Por primera vez… pensó antes de hablar. Después de un rato, se deslizó junto a Lina:
 —Perdón… tu canción era muy alegre. Me gustó tu valor para compartirla. Y esta vez, lo dijo con el corazón. Desde ese día, Débora usó su lengua para animar, no herir. Y así descubrió que las palabras, bien pensadas, pueden curar más que cualquier medicina.`,
  phrase: "La sabiduría viene de pensar antes de actuar.",
  image_url_menu: "./avif/menu/snake.avif",
  image_url_text: "./avif/reading/reading_snake.avif",
  questions: [
    {
      id: "0",
      text: "¿Qué hacía Débora que molestaba a los demás animales?",
      image_url: "./avif/question/question_snake_1.avif",
      answer: 1,
      options: [
        "Se escondía en los árboles",
        "Decía lo que pensaba sin cuidado",
        "Robaba dibujos",
        "Cantaba muy fuerte"
      ],
    },
    {
      id: "1",
      text: "¿Qué hizo Lina en la fiesta del bosque?",
      image_url: "./avif/question/question_snake_2.avif",
      answer: 2,
      options: [
        "Pintó un mural",
        "Leyó un poema",
        "Cantó una canción",
        "Tocó la flauta"
      ],
    },
    {
      id: "2",
      text: "¿Qué reacción tuvo Lina ante el comentario de Débora?",
      image_url: "./avif/question/question_snake_3.avif",
      answer: 2,
      options: [
        "Se rió",
        "Se enojó y gritó",
        "Lloró y dejó de cantar",
        "Salió corriendo"
      ],
    },
    {
      id: "3",
      text: "¿Qué enseñanza le dio el loro a Débora?",
      image_url: "./avif/question/question_snake_4.avif",
      answer: 1,
      options: [
        "Que cantar mal no es tan grave",
        "Que la sabiduría está en saber cómo y cuándo hablar",
        "Que debe hablar más alto"
      ],
    },
    {
      id: "4",
      text: "¿Por qué los animales se decepcionaron de Débora esta vez?",
      image_url: "./avif/question/question_snake_5.avif",
      answer: 2,
      options: [
        "Porque siempre decía lo mismo",
        "Porque interrumpió la fiesta con sus bromas",
        "Porque hirió a Lina cuando ella solo quería compartir algo con alegría"
      ],
    },
    {
      id: "5",
      text: "¿Qué cambio hizo Débora después de lo que pasó en la fiesta?",
      image_url: "./avif/question/question_snake_6.avif",
      answer: 2,
      options: [
        "Se fue del bosque",
        "Decidió no volver a hablar nunca",
        "Empezó a pensar antes de hablar y usó sus palabras para animar"
      ],
    }
  ],
}
