const verbs = [
  {
    type: 1,
    compounding: true,
    common: false,
    german: "haben",
    english: "to have",
    russian: "иметь",
    transcription: "хабн",
    associations: "",
  },
  {
    type: 1,
    compounding: true,
    common: false,
    german: "können",
    english: "can, to be able to",
    russian: "уметь",
    transcription: "кёнен",
    associations: "",
  },
  {
    type: 1,
    compounding: true,
    common: false,
    german: "müssen",
    english: "must, to have to",
    russian: "быть должным сделать ч.л.",
    transcription: "мюсн",
    associations: "",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "sagen",
    english: "to say",
    russian: "сказать",
    transcription: "загн",
    associations: "",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "machen",
    english: "to make, to do",
    russian: "делать, сделать (действие или ч.т. руками)",
    transcription: "махн",
    associations: "",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "geben",
    english: "to give",
    russian: "дать, давать",
    transcription: "гейбн",
    associations: "",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "kommen",
    english: "to come",
    russian: "прийти, приходить",
    transcription: "комен",
    associations: "",
  },
  {
    type: 1,
    compounding: true,
    common: false,
    german: "wollen",
    english: "to want",
    russian: "хотеть, желать",
    transcription: "волен",
    associations: "",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "gehen",
    english: "to go",
    russian: "идти, уйти, пойти, ходить",
    transcription: "гейен ",
    associations: "",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "wissen",
    english: "to know",
    russian: "знать",
    transcription: "виссен",
    associations: "Wise, визирь (знающий советник)",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "sehen",
    english: "to see",
    russian: "видеть",
    transcription: "зейен",
    associations: "",
  },
  {
    type: 1,
    compounding: true,
    common: false,
    german: "lassen",
    english: "to let, allow",
    russian: "Оставить как есть, дать чему то быть (пусть будет)",
    transcription: "лассен",
    associations: "",
  },
  {
    type: 1,
    compounding: false,
    common: true,
    german: "stehen",
    english: "to stand",
    russian: "Стоять (* важный корень во многих словообразованиях)",
    transcription: "штейен",
    associations: "Штей ~ Стой",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "finden",
    english: "to find",
    russian: "Найти",
    transcription: "финден",
    associations: "",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "liegen",
    english: "to lie, be lying",
    russian: "Лежать",
    transcription: "лиген",
    associations: "",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "denken",
    english: "to think",
    russian: "Думать",
    transcription: "денкен",
    associations: "",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "tun",
    english: "to do",
    russian: "Делать (действие но не предмет)",
    transcription: "тун",
    associations: "",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "halten",
    english: "to stop, hold",
    russian: "Остановить(ся), держать",
    transcription: "хальтен",
    associations: "",
  },
  {
    type: 1,
    compounding: false,
    common: true,
    german: "sprechen",
    english: "to speak",
    russian: "Говорить",
    transcription: "шпрехен",
    associations: "",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "bringen",
    english: "to bring, take",
    russian: "Принести",
    transcription: "бринген",
    associations: "",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "leben",
    english: "to live",
    russian: "Жить (о жизни, быть живым)",
    transcription: "лейбн",
    associations: "",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "kennen",
    english: "to know",
    russian: "Знать",
    transcription: "кеннен",
    associations: "",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "arbeiten",
    english: "to work",
    russian: "Работать",
    transcription: "аабайтн",
    associations: "Гаст арбайтер (гость работник)",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "folgen",
    english: "to follow",
    russian: "Следовать",
    transcription: "фольген",
    associations: "",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "lernen",
    english: "to learn",
    russian: "Учить (урок), учиться ч.л.",
    transcription: "леанен",
    associations: "",
  },
  {
    type: 3,
    compounding: false,
    common: false,
    german: "verstehen",
    english: "to understand",
    russian: "Понимать",
    transcription: "ферштейен",
    associations: "",
  },
  {
    type: 1,
    compounding: false,
    common: true,
    german: "setzen",
    english: "to set, put, place",
    russian: "Положить, поставить (ч.т. к.т.)",
    transcription: "зетсен",
    associations: "",
  },
  {
    type: 1,
    compounding: true,
    common: false,
    german: "beginnen",
    english: "to begin",
    russian: "Начинать",
    transcription: "бегиннен",
    associations: "",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "schreiben",
    english: "to write",
    russian: "Писать (письмо)",
    transcription: "шрайбен",
    associations: "schreib > scribe > subscribe",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "sitzen",
    english: "to sit",
    russian: "Сидеть",
    transcription: "зитсен",
    associations: "",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "scheinen",
    english: "to shine, seem",
    russian: "Сиять, казаться, смотреться, выглядеть",
    transcription: "щайнен",
    associations: "",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "fallen",
    english: "to fall",
    russian: "Упасть, падать",
    transcription: "фален",
    associations: "",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "legen",
    english: "to lay, put",
    russian: "Положить, лечь",
    transcription: "лейген",
    associations: "",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "handeln",
    english: "to deal, trade, handle",
    russian: "Обращаться, иметь дело с ч.л. к.л.",
    transcription: "хандельн",
    associations: "",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "reden",
    english: "to talk",
    russian: "Произносить речь",
    transcription: "рейден",
    associations: "Рейд ~ Речь > толкать речь",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "warten",
    english: "to wait",
    russian: "Ждать",
    transcription: "ваатен",
    associations: "",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "helfen",
    english: "to help",
    russian: "Помогать",
    transcription: "хельфен",
    associations: "",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "fühlen",
    english: "to feel",
    russian: "Чувствовать",
    transcription: "фюлен",
    associations: "",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "interessieren",
    english: "to interest",
    russian: "Интересовать (кого-то)",
    transcription: "интерессирен",
    associations: "",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "studieren",
    english: "to study",
    russian: "Учиться, изучать",
    transcription: "штудирен",
    associations: "",
  },
  {
    type: 1,
    compounding: false,
    common: false,
    german: "fehlen",
    english: "to lack, be missing",
    russian: "Быть в недостатке, отсутствовать",
    transcription: "фейлен",
    associations: "",
  },
  {
    type: 2,
    compounding: true,
    common: false,
    german: "werden",
    english: "to become",
    russian: "Становиться",
    transcription: "веаден",
    associations: "",
  },
  {
    type: 2,
    compounding: false,
    common: false,
    german: "nehmen",
    english: "to take",
    russian: "Брать, взять",
    transcription: "неймен",
    associations: "",
  },
  {
    type: 2,
    compounding: false,
    common: false,
    german: "glauben",
    english: "to believe",
    russian: "Верить",
    transcription: "глаубен",
    associations: "",
  },
  {
    type: 2,
    compounding: false,
    common: false,
    german: "fragen",
    english: "to ask",
    russian: "Спросить",
    transcription: "фраген",
    associations: "",
  },
  {
    type: 2,
    compounding: false,
    common: true,
    german: "stellen",
    english: "to place, set",
    russian: "Поставить (* частый корень)",
    transcription: "штеллен",
    associations: "",
  },
  {
    type: 2,
    compounding: false,
    common: false,
    german: "spielen",
    english: "to play",
    russian: "Играть",
    transcription: "шпилен",
    associations: "",
  },
  {
    type: 2,
    compounding: true,
    common: false,
    german: "brauchen",
    english: "to need",
    russian: "Нуждаться",
    transcription: "браухн",
    associations: "",
  },
  {
    type: 2,
    compounding: false,
    common: false,
    german: "laufen,",
    english: "to run",
    russian: "Бегать, работать (о технике и транспорте)",
    transcription: "лауфн,",
    associations: "",
  },
  {
    type: 2,
    compounding: false,
    common: false,
    german: "ziehen",
    english: "to pull, move",
    russian: "Тянуть",
    transcription: "цийен",
    associations: "",
  },
  {
    type: 2,
    compounding: false,
    common: false,
    german: "treffen",
    english: "to meet",
    russian: "Встречать, встретиться",
    transcription: "треффен",
    associations: "",
  },
  {
    type: 2,
    compounding: false,
    common: false,
    german: "suchen",
    english: "to search, look for",
    russian: "Искать",
    transcription: "зухн",
    associations: "",
  },
  {
    type: 2,
    compounding: false,
    common: false,
    german: "tragen",
    english: "to carry, wear",
    russian: "Носить (одежду), нести сумку",
    transcription: "трагн",
    associations: "",
  },
  {
    type: 2,
    compounding: false,
    common: false,
    german: "lesen",
    english: "to read",
    russian: "Читать",
    transcription: "лейзен",
    associations: "",
  },
  {
    type: 2,
    compounding: false,
    common: false,
    german: "wohnen",
    english: "to live",
    russian: "Жить (о месте жительства)",
    transcription: "вонен",
    associations: "",
  },
  {
    type: 2,
    compounding: false,
    common: false,
    german: "gleichen",
    english: "to be similar to",
    russian: "Быть похожим, походить",
    transcription: "гляйхен",
    associations: "",
  },
  {
    type: 3,
    compounding: false,
    common: false,
    german: "bestehen",
    english: "to exist, insist, pass (an exam)",
    russian: "Существовать, настоять на ч.л., пройти (трудности или экзамен)",
    transcription: "бештейен",
    associations: "",
  },
  {
    type: 3,
    compounding: true,
    common: false,
    german: "versuchen",
    english: "to try, attempt",
    russian: "Попробовать",
    transcription: "ферзухн",
    associations: "",
  },
  {
    type: 3,
    compounding: false,
    common: false,
    german: "erklären",
    english: "to explain",
    russian: "Уточнить, обьяснить",
    transcription: "еаклерен",
    associations: "",
  },
  {
    type: 3,
    compounding: false,
    common: false,
    german: "entsprechen",
    english: "to correspond",
    russian: "Соответствовать",
    transcription: "ентшпрехен",
    associations: "",
  },
  {
    type: 3,
    compounding: false,
    common: false,
    german: "entstehen",
    english: "to originate, develop",
    russian: "Появиться, произойти, развиться",
    transcription: "ентштейен",
    associations: "",
  },
  {
    type: 3,
    compounding: false,
    common: false,
    german: "vor·stellen",
    english: "to introduce, imagine",
    russian: "Представить (познакомить), а т.ж. представить (вообразить)",
    transcription: "фор·штеллен",
    associations: "",
  },
  {
    type: 3,
    compounding: false,
    common: false,
    german: "erkennen",
    english: "to recognize, admit",
    russian: "Узнать, осознать, сознаться",
    transcription: "еакеннен",
    associations: "",
  },
  {
    type: 3,
    compounding: false,
    common: false,
    german: "erwarten",
    english: "to expect",
    russian: "Ожидать",
    transcription: "еаваатен",
    associations: "",
  },
  {
    type: 3,
    compounding: false,
    common: false,
    german: "vergehen",
    english: "to elapse; to decay",
    russian: "Пройти (о состоянии, т.е. все пройдёт)",
    transcription: "феагейен",
    associations: "",
  },
  {
    type: 3,
    compounding: false,
    common: false,
    german: "verbinden",
    english: "to connect, link",
    russian: "Соединить",
    transcription: "феабиндн",
    associations: "",
  },
  {
    type: 3,
    compounding: false,
    common: false,
    german: "vergleichen",
    english: "to compare",
    russian: "Сравнивать",
    transcription: "феаглайхен",
    associations: "",
  },
];

export default verbs;