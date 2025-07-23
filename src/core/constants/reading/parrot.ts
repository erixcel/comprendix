import { Reading } from "../../model/configuration";

export const reading_parrot: Reading = {
  title: "¿Qué pasó con el pastel?",
  text: `Era el cumpleaños del oso Tito, y todos los animales preparaban una fiesta sorpresa. El pastel lo haría la tortuga Tomasa. Mientras cocinaba, murmuró: —Debo esconder el pastel antes de que el calor lo arruine... Pero justo en ese momento pasó Loro Loro, volando bajito. Solo escuchó:
 —…esconder el pastel… arruinarlo… — Y voló como un rayo a contarlo.
 —¡La tortuga quiere robarse el pastel! ¡No habrá fiesta! ¡¡Es un sabotaje!! —gritó por toda la selva.
El mono se cayó del árbol del susto. La rana chilló: —¡¿Qué?! ¡Mi glaseado de menta!
El jaguar ya se preparaba para interrogar a Tomasa. Cuando llegaron a su cocina… ¡no había pastel! —¡Lo escondió! ¡Tenía razón Loro Loro! —gritaron todos. La tortuga, al ver el alboroto, salió con cara de susto.
 —¿Qué pasa aquí? Solo escondí el pastel en el refrigerador… ¡para que no se derritiera! Todos quedaron en silencio. Loro Loro se encogió.
 —Ups… creo que entendí mal— El oso Tito que también escuchó el rumor llegó en ese momento y dijo: ¿Esa era la sorpresa? ¡Una persecución por un pastel! Todos rieron. Y La fiesta continuó.
Pero desde entonces, Loro Loro aprendió a no repetir todo lo que oye.
Ahora, antes de hablar, dice: —Un momento… ¿lo escuché bien?`,
  phrase: "Escuchar con atención te enseña más que hablar sin pensar.",
  image_url_menu: "./avif/menu/parrot.avif",
  image_url_text: "./avif/reading/reading_parrot.avif",
  pdf_url: "./pdf/reading_parrot.pdf",
  questions: [
    {
      id: "0",
      text: "¿Quién preparaba el pastel para la fiesta del oso Tito?",
      image_url: "./avif/question/question_parrot_1.avif",
      answer: 2,
      options: [
        "El oso Tito",
        "El jaguar",
        "La tortuga Tomasa",
        "El loro Loro"
      ],
    },
    {
      id: "1",
      text: "¿Qué escuchó el loro mientras volaba?",
      image_url: "./avif/question/question_parrot_2.avif",
      answer: 1,
      options: [
        "“Debo robar el pastel antes de que lleguen”",
        "“Esconder el pastel… arruinarlo…”",
        "“Es el mejor pastel de la selva”",
        "“Voy a regalar el pastel”"
      ],
    },
    {
      id: "2",
      text: "¿Dónde escondió Tomasa el pastel?",
      image_url: "./avif/question/question_parrot_3.avif",
      answer: 2,
      options: [
        "Debajo de la cama",
        "Dentro de una caja",
        "En el refrigerador",
        "Detrás de la casa"
      ],
    },
    {
      id: "3",
      text: "¿Por qué los animales creyeron rápidamente el rumor del loro?",
      image_url: "./avif/question/question_parrot_4.avif",
      answer: 2,
      options: [
        "Porque confiaban mucho en él",
        "Porque no les gustaba la tortuga",
        "Porque escucharon solo una parte de la historia"
      ],
    },
    {
      id: "4",
      text: "¿Qué se puede concluir sobre el comportamiento del jaguar?",
      image_url: "./avif/question/question_parrot_5.avif",
      answer: 1,
      options: [
        "Es muy curioso y tranquilo",
        "Es impulsivo y rápido para actuar",
        "Es bromista y despreocupado"
      ],
    },
    {
      id: "5",
      text: "¿Qué enseñanza deja la historia sobre repetir lo que se oye?",
      image_url: "./avif/question/question_parrot_6.avif",
      answer: 1,
      options: [
        "Que es mejor no contar nada nunca",
        "Que debemos comprobar lo que oímos antes de repetirlo",
        "Que siempre debemos gritar lo que escuchamos"
      ],
    }
  ],
}
