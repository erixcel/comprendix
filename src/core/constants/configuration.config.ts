import { Configuration } from "../model/configuration";

export const LOCAL_ID = "000000001";
export const CONFIG_PARAM = "configuration";

export const configuration: Configuration = {
  id: LOCAL_ID,
  pdf: {
    name: "Sample PDF",
    url: "https://example.com/sample.pdf"
  },
  games: [
    {
      type: "memory",
      image_url: "https://example.com/memory-game.jpg",
      points: 10,
      cards: [
        { id: "card1", image_url: "https://example.com/card1.jpg", flipped: false },
        { id: "card2", image_url: "https://example.com/card2.jpg", flipped: false }
      ]
    },
    {
      type: "puzzle",
      image_url: "https://example.com/puzzle-game.jpg",
      points: 15,
      level: "easy"
    },
    {
      type: "puzzle",
      image_url: "https://example.com/puzzle-game.jpg",
      points: 15,
      level: "medium"
    },
    {
      type: "guess",
      image_url: "https://example.com/guess-game.jpg",
      points: 20,
      cards: [
        { id: "guess1", image_url: "https://example.com/guess1.jpg", name: "Guess 1" },
        { id: "guess2", image_url: "https://example.com/guess2.jpg", name: "Guess 2" }
      ]
    }
  ],
  readings: [
    {
      title: "Las alas de Pipo",
      text: "Pipo era un pingüino curioso. Cada día miraba al cielo y suspiraba. —\"¿Por qué no puedo volar como los pájaros?\" —decía, moviendo sus alitas cortas. Saltó desde rocas, se subió a montones de nieve… ¡Pero nunca despegaba! —\"Mis alas no sirven…\" —decía triste. Un día, sin querer, resbaló y cayó al agua. ¡SPLASH! Pipo empezó a mover sus alas… ¡y nadó como un rayo! Giraba, saltaba, se hundía… ¡Estaba volando bajo el agua! Desde entonces, ya no quiso volar por el cielo. Porque descubrió que sus alas sí servían… ¡y eran perfectas para nadar!",
      image_url: "./avif/menu/penguin.avif",
      questions: [
        {
          id: "Q001",
          text: "What is the main idea of the reading?",
          options: ["Option A", "Option B", "Option C"],
          answer: 0
        },
        {
          id: "Q002",
          text: "What is the author's purpose?",
          options: ["To inform", "To entertain", "To persuade"],
          answer: 1
        },
        {
          id: "Q003",
          text: "What is the main idea of the reading?",
          options: ["Option A", "Option B", "Option C"],
          answer: 0
        },
        {
          id: "Q004",
          text: "What is the author's purpose?",
          options: ["To inform", "To entertain", "To persuade"],
          answer: 1
        },
        {
          id: "Q005",
          text: "What is the main idea of the reading?",
          options: ["Option A", "Option B", "Option C"],
          answer: 0
        },
        {
          id: "Q006",
          text: "What is the author's purpose?",
          options: ["To inform", "To entertain", "To persuade"],
          answer: 1
        }
      ]
    },
    {
      title: "Las alas de Pipo",
      text: "Pipo era un pingüino curioso. Cada día miraba al cielo y suspiraba. —\"¿Por qué no puedo volar como los pájaros?\" —decía, moviendo sus alitas cortas. Saltó desde rocas, se subió a montones de nieve… ¡Pero nunca despegaba! —\"Mis alas no sirven…\" —decía triste. Un día, sin querer, resbaló y cayó al agua. ¡SPLASH! Pipo empezó a mover sus alas… ¡y nadó como un rayo! Giraba, saltaba, se hundía… ¡Estaba volando bajo el agua! Desde entonces, ya no quiso volar por el cielo. Porque descubrió que sus alas sí servían… ¡y eran perfectas para nadar!",
      image_url: "./avif/menu/tortoise.avif",
      questions: [
        {
          id: "Q001",
          text: "What is the main idea of the reading?",
          options: ["Option A", "Option B", "Option C"],
          answer: 0
        },
        {
          id: "Q002",
          text: "What is the author's purpose?",
          options: ["To inform", "To entertain", "To persuade"],
          answer: 1
        },
        {
          id: "Q003",
          text: "What is the main idea of the reading?",
          options: ["Option A", "Option B", "Option C"],
          answer: 0
        },
        {
          id: "Q004",
          text: "What is the author's purpose?",
          options: ["To inform", "To entertain", "To persuade"],
          answer: 1
        },
        {
          id: "Q005",
          text: "What is the main idea of the reading?",
          options: ["Option A", "Option B", "Option C"],
          answer: 0
        },
        {
          id: "Q006",
          text: "What is the author's purpose?",
          options: ["To inform", "To entertain", "To persuade"],
          answer: 1
        }
      ]
    },
    {
      title: "Las alas de Pipo",
      text: "Pipo era un pingüino curioso. Cada día miraba al cielo y suspiraba. —\"¿Por qué no puedo volar como los pájaros?\" —decía, moviendo sus alitas cortas. Saltó desde rocas, se subió a montones de nieve… ¡Pero nunca despegaba! —\"Mis alas no sirven…\" —decía triste. Un día, sin querer, resbaló y cayó al agua. ¡SPLASH! Pipo empezó a mover sus alas… ¡y nadó como un rayo! Giraba, saltaba, se hundía… ¡Estaba volando bajo el agua! Desde entonces, ya no quiso volar por el cielo. Porque descubrió que sus alas sí servían… ¡y eran perfectas para nadar!",
      image_url: "./avif/menu/duck.avif",
      questions: [
        {
          id: "Q001",
          text: "What is the main idea of the reading?",
          options: ["Option A", "Option B", "Option C"],
          answer: 0
        },
        {
          id: "Q002",
          text: "What is the author's purpose?",
          options: ["To inform", "To entertain", "To persuade"],
          answer: 1
        },
        {
          id: "Q003",
          text: "What is the main idea of the reading?",
          options: ["Option A", "Option B", "Option C"],
          answer: 0
        },
        {
          id: "Q004",
          text: "What is the author's purpose?",
          options: ["To inform", "To entertain", "To persuade"],
          answer: 1
        },
        {
          id: "Q005",
          text: "What is the main idea of the reading?",
          options: ["Option A", "Option B", "Option C"],
          answer: 0
        },
        {
          id: "Q006",
          text: "What is the author's purpose?",
          options: ["To inform", "To entertain", "To persuade"],
          answer: 1
        }
      ]
    },
    {
      title: "Las alas de Pipo",
      text: "Pipo era un pingüino curioso. Cada día miraba al cielo y suspiraba. —\"¿Por qué no puedo volar como los pájaros?\" —decía, moviendo sus alitas cortas. Saltó desde rocas, se subió a montones de nieve… ¡Pero nunca despegaba! —\"Mis alas no sirven…\" —decía triste. Un día, sin querer, resbaló y cayó al agua. ¡SPLASH! Pipo empezó a mover sus alas… ¡y nadó como un rayo! Giraba, saltaba, se hundía… ¡Estaba volando bajo el agua! Desde entonces, ya no quiso volar por el cielo. Porque descubrió que sus alas sí servían… ¡y eran perfectas para nadar!",
      image_url: "./avif/menu/monkey.avif",
      questions: [
        {
          id: "Q001",
          text: "What is the main idea of the reading?",
          options: ["Option A", "Option B", "Option C"],
          answer: 0
        },
        {
          id: "Q002",
          text: "What is the author's purpose?",
          options: ["To inform", "To entertain", "To persuade"],
          answer: 1
        },
        {
          id: "Q003",
          text: "What is the main idea of the reading?",
          options: ["Option A", "Option B", "Option C"],
          answer: 0
        },
        {
          id: "Q004",
          text: "What is the author's purpose?",
          options: ["To inform", "To entertain", "To persuade"],
          answer: 1
        },
        {
          id: "Q005",
          text: "What is the main idea of the reading?",
          options: ["Option A", "Option B", "Option C"],
          answer: 0
        },
        {
          id: "Q006",
          text: "What is the author's purpose?",
          options: ["To inform", "To entertain", "To persuade"],
          answer: 1
        }
      ]
    },
    {
      title: "Las alas de Pipo",
      text: "Pipo era un pingüino curioso. Cada día miraba al cielo y suspiraba. —\"¿Por qué no puedo volar como los pájaros?\" —decía, moviendo sus alitas cortas. Saltó desde rocas, se subió a montones de nieve… ¡Pero nunca despegaba! —\"Mis alas no sirven…\" —decía triste. Un día, sin querer, resbaló y cayó al agua. ¡SPLASH! Pipo empezó a mover sus alas… ¡y nadó como un rayo! Giraba, saltaba, se hundía… ¡Estaba volando bajo el agua! Desde entonces, ya no quiso volar por el cielo. Porque descubrió que sus alas sí servían… ¡y eran perfectas para nadar!",
      image_url: "./avif/menu/frog.avif",
      questions: [
        {
          id: "Q001",
          text: "What is the main idea of the reading?",
          options: ["Option A", "Option B", "Option C"],
          answer: 0
        },
        {
          id: "Q002",
          text: "What is the author's purpose?",
          options: ["To inform", "To entertain", "To persuade"],
          answer: 1
        },
        {
          id: "Q003",
          text: "What is the main idea of the reading?",
          options: ["Option A", "Option B", "Option C"],
          answer: 0
        },
        {
          id: "Q004",
          text: "What is the author's purpose?",
          options: ["To inform", "To entertain", "To persuade"],
          answer: 1
        },
        {
          id: "Q005",
          text: "What is the main idea of the reading?",
          options: ["Option A", "Option B", "Option C"],
          answer: 0
        },
        {
          id: "Q006",
          text: "What is the author's purpose?",
          options: ["To inform", "To entertain", "To persuade"],
          answer: 1
        }
      ]
    },
    {
      title: "Las alas de Pipo",
      text: "Pipo era un pingüino curioso. Cada día miraba al cielo y suspiraba. —\"¿Por qué no puedo volar como los pájaros?\" —decía, moviendo sus alitas cortas. Saltó desde rocas, se subió a montones de nieve… ¡Pero nunca despegaba! —\"Mis alas no sirven…\" —decía triste. Un día, sin querer, resbaló y cayó al agua. ¡SPLASH! Pipo empezó a mover sus alas… ¡y nadó como un rayo! Giraba, saltaba, se hundía… ¡Estaba volando bajo el agua! Desde entonces, ya no quiso volar por el cielo. Porque descubrió que sus alas sí servían… ¡y eran perfectas para nadar!",
      image_url: "./avif/menu/parrot.avif",
      questions: [
        {
          id: "Q001",
          text: "What is the main idea of the reading?",
          options: ["Option A", "Option B", "Option C"],
          answer: 0
        },
        {
          id: "Q002",
          text: "What is the author's purpose?",
          options: ["To inform", "To entertain", "To persuade"],
          answer: 1
        },
        {
          id: "Q003",
          text: "What is the main idea of the reading?",
          options: ["Option A", "Option B", "Option C"],
          answer: 0
        },
        {
          id: "Q004",
          text: "What is the author's purpose?",
          options: ["To inform", "To entertain", "To persuade"],
          answer: 1
        },
        {
          id: "Q005",
          text: "What is the main idea of the reading?",
          options: ["Option A", "Option B", "Option C"],
          answer: 0
        },
        {
          id: "Q006",
          text: "What is the author's purpose?",
          options: ["To inform", "To entertain", "To persuade"],
          answer: 1
        }
      ]
    },
    {
      title: "Las alas de Pipo",
      text: "Pipo era un pingüino curioso. Cada día miraba al cielo y suspiraba. —\"¿Por qué no puedo volar como los pájaros?\" —decía, moviendo sus alitas cortas. Saltó desde rocas, se subió a montones de nieve… ¡Pero nunca despegaba! —\"Mis alas no sirven…\" —decía triste. Un día, sin querer, resbaló y cayó al agua. ¡SPLASH! Pipo empezó a mover sus alas… ¡y nadó como un rayo! Giraba, saltaba, se hundía… ¡Estaba volando bajo el agua! Desde entonces, ya no quiso volar por el cielo. Porque descubrió que sus alas sí servían… ¡y eran perfectas para nadar!",
      image_url: "./avif/menu/bear.avif",
      questions: [
        {
          id: "Q001",
          text: "What is the main idea of the reading?",
          options: ["Option A", "Option B", "Option C"],
          answer: 0
        },
        {
          id: "Q002",
          text: "What is the author's purpose?",
          options: ["To inform", "To entertain", "To persuade"],
          answer: 1
        },
        {
          id: "Q003",
          text: "What is the main idea of the reading?",
          options: ["Option A", "Option B", "Option C"],
          answer: 0
        },
        {
          id: "Q004",
          text: "What is the author's purpose?",
          options: ["To inform", "To entertain", "To persuade"],
          answer: 1
        },
        {
          id: "Q005",
          text: "What is the main idea of the reading?",
          options: ["Option A", "Option B", "Option C"],
          answer: 0
        },
        {
          id: "Q006",
          text: "What is the author's purpose?",
          options: ["To inform", "To entertain", "To persuade"],
          answer: 1
        }
      ]
    },
    {
      title: "Las alas de Pipo",
      text: "Pipo era un pingüino curioso. Cada día miraba al cielo y suspiraba. —\"¿Por qué no puedo volar como los pájaros?\" —decía, moviendo sus alitas cortas. Saltó desde rocas, se subió a montones de nieve… ¡Pero nunca despegaba! —\"Mis alas no sirven…\" —decía triste. Un día, sin querer, resbaló y cayó al agua. ¡SPLASH! Pipo empezó a mover sus alas… ¡y nadó como un rayo! Giraba, saltaba, se hundía… ¡Estaba volando bajo el agua! Desde entonces, ya no quiso volar por el cielo. Porque descubrió que sus alas sí servían… ¡y eran perfectas para nadar!",
      image_url: "./avif/menu/snake.avif",
      questions: [
        {
          id: "Q001",
          text: "What is the main idea of the reading?",
          options: ["Option A", "Option B", "Option C"],
          answer: 0
        },
        {
          id: "Q002",
          text: "What is the author's purpose?",
          options: ["To inform", "To entertain", "To persuade"],
          answer: 1
        },
        {
          id: "Q003",
          text: "What is the main idea of the reading?",
          options: ["Option A", "Option B", "Option C"],
          answer: 0
        },
        {
          id: "Q004",
          text: "What is the author's purpose?",
          options: ["To inform", "To entertain", "To persuade"],
          answer: 1
        },
        {
          id: "Q005",
          text: "What is the main idea of the reading?",
          options: ["Option A", "Option B", "Option C"],
          answer: 0
        },
        {
          id: "Q006",
          text: "What is the author's purpose?",
          options: ["To inform", "To entertain", "To persuade"],
          answer: 1
        }
      ]
    }
  ]
};
