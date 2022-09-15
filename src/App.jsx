import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("0");

  const handleReload = () => {
    window.location.reload();
  };

  const data = [
    {
      id: 1,
      question: "In the book of numbers who challenges Moses authority?",
      answers: [
        {
          text: "Joshua",
          correct: false,
        },
        {
          text: "the people of Israel",
          correct: false,
        },
        {
          text: "the people of Levi",
          correct: false,
        },
        {
          text: "Aaron & Miriam",
          correct: true,
        },
      ],
    },
    {
      id: 2,
      question:
        "List these famous women in the order in which they appear in the bible.   A.Mary Magdalene B. Eve C.Sarah D.Mary, the mother of God",
      answers: [
        {
          text: "A,B,C,D",
          correct: false,
        },
        {
          text: "B,C,D,A",
          correct: true,
        },
        {
          text: "B,C,D,C",
          correct: false,
        },
        {
          text: "B,D,C,A",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question:
        "Put the following books in the order they apear in the bible.   A.REVELATION B.LUKE C.FIRST THESSELONIANS D.MATTHEW?",
      answers: [
        {
          text: "B,C,D,A",
          correct: false,
        },
        {
          text: "D,C,B,A",
          correct: false,
        },
        {
          text: "C,B,D,A",
          correct: false,
        },
        {
          text: "D,B,C,A",
          correct: true,
        },
      ],
    },

    {
      id: 4,
      question: "The official Roman charge against Jesus was that he had?",
      answers: [
        {
          text: "committed blasphemy",
          correct: false,
        },
        {
          text: "claimed to be a King",
          correct: false,
        },
        {
          text: "incited a revolt among the Jews",
          correct: true,
        },
        {
          text: "opposed payment of taxes to the Temple",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "This was the last Gospel to be written?",
      answers: [
        {
          text: "Matthew",
          correct: false,
        },
        {
          text: "Luke",
          correct: false,
        },
        {
          text: "Mark",
          correct: false,
        },
        {
          text: "John",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "The word Sabbath means?",
      answers: [
        {
          text: "peace be unto you",
          correct: false,
        },
        {
          text: "Holy One",
          correct: false,
        },
        {
          text: "a day of rest",
          correct: true,
        },
        {
          text: "what's up",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "This twin was later renamed Israel?",
      answers: [
        {
          text: "Esau",
          correct: false,
        },
        {
          text: "Cain",
          correct: false,
        },
        {
          text: "Abel",
          correct: false,
        },
        {
          text: "Jacob",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "What did Delilah do to Samson to take away his strength?",
      answers: [
        {
          text: "talked him into fighting an army",
          correct: false,
        },
        {
          text: "blinded him",
          correct: false,
        },
        {
          text: "made him fall asleep",
          correct: false,
        },
        {
          text: "cut his hair",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "This was the first Gospel to be written?",
      answers: [
        {
          text: "Mark",
          correct: true,
        },
        {
          text: "Luke",
          correct: false,
        },
        {
          text: "John",
          correct: false,
        },
        {
          text: "Matthew",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "What city was considered to be King David's place of origin?",
      answers: [
        {
          text: "Jerusalem",
          correct: false,
        },
        {
          text: "Hebron",
          correct: false,
        },
        {
          text: "Nazareth",
          correct: false,
        },
        {
          text: "Bethlehem",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "What is the name of Moses' sister?",
      answers: [
        {
          text: "Deborah",
          correct: false,
        },
        {
          text: "Zipporah",
          correct: false,
        },
        {
          text: "Miriam",
          correct: true,
        },
        {
          text: "Leah",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "The Gospels tells the story of what?",
      answers: [
        {
          text: "How a man lived",
          correct: false,
        },
        {
          text: "The Jews",
          correct: false,
        },
        {
          text: "why the chickens crossed the road",
          correct: false,
        },
        {
          text: "the life, death, and Resurrection of Jesus",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question:
        "Jesus used these kinds of stories to helppeople understand what the reign of God was like?",
      answers: [
        {
          text: "bedtime stories",
          correct: false,
        },
        {
          text: "parables",
          correct: true,
        },
        {
          text: "skits",
          correct: false,
        },
        {
          text: "dramas",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which King was responsible for building the Jerusalem Temple?",
      answers: [
        {
          text: "Saul",
          correct: false,
        },
        {
          text: "David",
          correct: false,
        },
        {
          text: "Rehoboam",
          correct: false,
        },
        {
          text: "Solomon",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "The term Passover is rooted in which event?",
      answers: [
        {
          text: "the last supper",
          correct: false,
        },
        {
          text: "the final plague",
          correct: true,
        },
        {
          text: "the Babylonian Exile",
          correct: false,
        },
        {
          text: "the Transfiguration",
          correct: false,
        },
      ],
    },
    {
      id: 16,
      question:
        "Place these commandments in the order in which they appear in the Bible. A. Honour your father and mother B. Remember the Sabbath Day keep it holy C. You shall not steal D. Do not covet your neighbors wife. ",
      answers: [
        {
          text: "B,C,A,D",
          correct: false,
        },
        {
          text: "C,B,D,A",
          correct: false,
        },
        {
          text: "A,B,C,D",
          correct: false,
        },
        {
          text: "B,A,C,D",
          correct: true,
        },
      ],
    },
    {
      id: 17,
      question: "Who led the Israelites into the promised Land of Canaan?",
      answers: [
        {
          text: "Jacob",
          correct: false,
        },
        {
          text: "Aaron",
          correct: false,
        },
        {
          text: "Moses",
          correct: false,
        },
        {
          text: "Joshua",
          correct: true,
        },
      ],
    },
    {
      id: 18,
      question:
        "List these characters in the order in which they encounter Jesus in the Gospels. A. Pilate B. Peter C. John the Baptist D. Joseph, husband of Mary",
      answers: [
        {
          text: "D,B,C,A",
          correct: true,
        },
        {
          text: "B,D,C,A",
          correct: false,
        },
        {
          text: "D,C,B,A",
          correct: false,
        },
        {
          text: " B,D,A,C",
          correct: true,
        },
      ],
    },
    {
      id: 19,
      question:
        "Who led the Israelites from slavery in Egypt across the Red Sea and to the promised Land?",
      answers: [
        {
          text: "King David",
          correct: false,
        },
        {
          text: "Noah, in his Ark",
          correct: false,
        },
        {
          text: "Moses",
          correct: true,
        },
        {
          text: "Galileo Galilay",
          correct: true,
        },
      ],
    },
    {
      id: 20,
      question:
        "Which of these foods did the Israelites depend on as they journeyed in the wilderness with Moses?",
      answers: [
        {
          text: "Big Macs",
          correct: false,
        },
        {
          text: "Manna",
          correct: true,
        },
        {
          text: "meatballs",
          correct: false,
        },
        {
          text: "turkey",
          correct: false,
        },
      ],
    },
    {
      id: 21,
      question:
        "Which of these books is not one of the prophetic books of the Old Testament?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Leviticus",
          correct: true,
        },
        {
          text: "Isaiah",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
      ],
    },
    {
      id: 22,
      question:
        "The sermon on the Mount, in which Jesus teaches the beatitudes can be found in which Gospel?",
      answers: [
        {
          text: "Matthew",
          correct: true,
        },
        {
          text: "Luke",
          correct: false,
        },
        {
          text: "Mark",
          correct: false,
        },
        {
          text: "John",
          correct: true,
        },
      ],
    },
    {
      id: 23,
      question: "Pentecost commemorates what event for the Jews?",
      answers: [
        {
          text: "the Exodus from Egypt",
          correct: false,
        },
        {
          text: "the giving of the law to Moses",
          correct: true,
        },
        {
          text: "the fall of Jericho",
          correct: false,
        },
        {
          text: "the Holy Spirit inspiring the Apostles",
          correct: false,
        },
      ],
    },
    {
      id: 24,
      question:
        "List these famous leaders in the order in which they appear in the Old Testament. A. Jacob B. Abraham C. Moses D. Issac",
      answers: [
        {
          text: " B,C,D,A",
          correct: false,
        },
        {
          text: "B,C,A,D",
          correct: false,
        },
        {
          text: "B,A,C,D",
          correct: false,
        },
        {
          text: "B,D,A,C",
          correct: true,
        },
      ],
    },
    {
      id: 25,
      question: "Who is creditd with writing the Psalms?",
      answers: [
        {
          text: "King David",
          correct: true,
        },
        {
          text: "King Solomon",
          correct: false,
        },
        {
          text: "the grateful Dead",
          correct: false,
        },
        {
          text: "the Rolling Stones",
          correct: false,
        },
      ],
    },
    {
      id: 26,
      question: "Who wrote the Letter to the Romans?",
      answers: [
        {
          text: "Peter",
          correct: false,
        },
        {
          text: "Mary",
          correct: false,
        },
        {
          text: "John",
          correct: false,
        },
        {
          text: "Paul",
          correct: true,
        },
      ],
    },
    {
      id: 27,
      question: "In which Gospel does Jesus wash the feet of the disciples?",
      answers: [
        {
          text: "Matthew",
          correct: false,
        },
        {
          text: "Mark",
          correct: false,
        },
        {
          text: "Luke",
          correct: false,
        },
        {
          text: "John",
          correct: true,
        },
      ],
    },
    {
      id: 28,
      question: "The Acts of the Apostles was written by ?",
      answers: [
        {
          text: "John",
          correct: false,
        },
        {
          text: "Peter",
          correct: false,
        },
        {
          text: "Luke",
          correct: true,
        },
        {
          text: "Matthew",
          correct: false,
        },
      ],
    },
    {
      id: 29,
      question: "Who claimed Jesus' body after the Crucifixion?",
      answers: [
        {
          text: "Mary Magdalene",
          correct: false,
        },
        {
          text: "Nicodemus",
          correct: false,
        },
        {
          text: "John the beloved",
          correct: false,
        },
        {
          text: "Joseph of Arimathea",
          correct: true,
        },
      ],
    },
    {
      id: 30,
      question:
        "To test Abrahams faith, God instructed him to sacrifice his only what?",
      answers: [
        {
          text: "son, Issac",
          correct: true,
        },
        {
          text: "walking stick",
          correct: false,
        },
        {
          text: "chicken",
          correct: false,
        },
        {
          text: "pillow",
          correct: false,
        },
      ],
    },
    {
      id: 31,
      question:
        "List these major sections of the Bible in the order in which they appear. A. the historical books B. the Gospels C. the Pentatuch D. the epistles?",
      answers: [
        {
          text: "A,C,B,A",
          correct: false,
        },
        {
          text: "A,B,C,D",
          correct: false,
        },
        {
          text: "D,C,B,A",
          correct: false,
        },
        {
          text: "C,A,B,D",
          correct: true,
        },
      ],
    },
    {
      id: 32,
      question: "The Ark of the convenant contained what?",
      answers: [
        {
          text: "the Ten Commandments",
          correct: true,
        },
        {
          text: "used oil lamps",
          correct: false,
        },
        {
          text: "the remains of Moses",
          correct: false,
        },
        {
          text: "Noah's ark",
          correct: false,
        },
      ],
    },
    {
      id: 33,
      question:
        "Who is the most important and powerful person in the Jewish community during the time of Jesus?",
      answers: [
        {
          text: "Pharises",
          correct: false,
        },
        {
          text: "tax collector",
          correct: false,
        },
        {
          text: "scribe",
          correct: false,
        },
        {
          text: "high priest",
          correct: true,
        },
      ],
    },
    {
      id: 34,
      question:
        "Who created the golden calf for the Israelites while Moses was on Mount Sinai?",
      answers: [
        {
          text: "Aaron",
          correct: true,
        },
        {
          text: "Ahab",
          correct: false,
        },
        {
          text: "Joshua",
          correct: false,
        },
        {
          text: "Miriam",
          correct: false,
        },
      ],
    },
    {
      id: 35,
      question: "Who was the emoeror of Rome during the time of Jesus' birth?",
      answers: [
        {
          text: "Nero",
          correct: false,
        },
        {
          text: "Herod",
          correct: false,
        },
        {
          text: "Augustus",
          correct: false,
        },
        {
          text: "Pontius Pilate",
          correct: false,
        },
      ],
    },
    {
      id: 36,
      question: "Who was the mother of John the Baptist?",
      answers: [
        {
          text: "Maude",
          correct: false,
        },
        {
          text: "Miriam",
          correct: false,
        },
        {
          text: "Thelma",
          correct: false,
        },
        {
          text: "Elizabeth",
          correct: true,
        },
      ],
    },
    {
      id: 37,
      question:
        "What is the correct ending to the verse 'Blessed are the poor in spirit...'?",
      answers: [
        {
          text: "for they will receive an allowance",
          correct: false,
        },
        {
          text: "for they should get a job",
          correct: false,
        },
        {
          text: "for theirs is the kingdom of heaven",
          correct: true,
        },
        {
          text: "for they shall see God",
          correct: false,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 39,
      question: "The mother of john the baptist was?",
      answers: [
        {
          text: "Maude",
          correct: false,
        },
        {
          text: "Miriam",
          correct: false,
        },
        {
          text: "Zachariah",
          correct: false,
        },
        {
          text: "Elizabeth",
          correct: true,
        },
      ],
    },
    {
      id: 40,
      question: "what did god ask the prophet Hosea to do?",
      answers: [
        {
          text: "marry a prostitute",
          correct: true,
        },
        {
          text: "interpret the dreams of the people of israel",
          correct: false,
        },
        {
          text: "spend the night in a lion's den",
          correct: false,
        },
        {
          text: "circle Ephraim seven times for repentance",
          correct: false,
        },
      ],
    },
    {
      id: 41,
      question: "which nation overthrew the Northern Kkingdom of Israel?",
      answers: [
        {
          text: "Assyria",
          correct: true,
        },
        {
          text: "Caanan",
          correct: false,
        },
        {
          text: "Babylon",
          correct: false,
        },
        {
          text: "Philistia",
          correct: false,
        },
      ],
    },
    {
      id: 42,
      question: "the word genesis means?",
      answers: [
        {
          text: "ending",
          correct: false,
        },
        {
          text: "creation",
          correct: false,
        },
        {
          text: "story of early man",
          correct: false,
        },
        {
          text: "beginning",
          correct: true,
        },
      ],
    },
    {
      id: 43,
      question:
        "list these events in the life of Jesus in the order in which they occurred.  A.Jesus baptism B. Jesus raises Lazarus C. Judas betrays Jesus D.Jesus turns water to wine ",
      answers: [
        {
          text: "ADCB",
          correct: false,
        },
        {
          text: "ABCD",
          correct: false,
        },
        {
          text: "ADBC",
          correct: true,
        },
        {
          text: "CADB",
          correct: false,
        },
      ],
    },
    {
      id: 44,
      question:
        "Who visited Mary with the news that she would bear God's son, Jesus?",
      answers: [
        {
          text: "the angel Gabriel",
          correct: true,
        },
        {
          text: "the Avon Lady",
          correct: false,
        },
        {
          text: "a census taker",
          correct: false,
        },
        {
          text: "the angel Raphael",
          correct: false,
        },
      ],
    },
    {
      id: 45,
      question: "what makes Deborah a unique biblical figure?",
      answers: [
        {
          text: "she was the mother of Gideon",
          correct: false,
        },
        {
          text: "she helped Samson during his reign as judge",
          correct: false,
        },
        {
          text: "she was one of Israels judges",
          correct: true,
        },
        {
          text: "she hid Joshua from is enemies while he spied in Jericho",
          correct: false,
        },
      ],
    },
    {
      id: 46,
      question:
        "whose hands restored Saul's sight after he was blinded on the road to Damascus?",
      answers: [
        {
          text: "Barnabas",
          correct: false,
        },
        {
          text: "Ananias",
          correct: true,
        },
        {
          text: "Bar-Jesus",
          correct: false,
        },
        {
          text: "Peter",
          correct: false,
        },
      ],
    },
    {
      id: 46,
      question:
        "List these events in the life of Moses accordingly? A.Moses announces the 10 plagues B.Moses is found in the Nile C.Moses leads the Hebrews acrosss the red sea D.Moses meets God in the burning bush",
      answers: [
        {
          text: "BDAC",
          correct: true,
        },
        {
          text: "CDAB",
          correct: false,
        },
        {
          text: "BDCA",
          correct: false,
        },
        {
          text: "BCAD",
          correct: false,
        },
      ],
    },
    {
      id: 47,
      question:
        "which of these is NOT an apostle of Jesus?",
      answers: [
        {
          text: "Peter",
          correct: false,
        },
        {
          text: "Simon",
          correct: false,
        },
        {
          text: "Philip",
          correct: false,
        },
        {
          text: "Yusuf",
          correct: true,
        },
      ],
    },
    {
      id: 48,
      question:
        "What did Joseph receive from his father as a sign of special favor from Jacob that made his brothers jealous ?",
      answers: [
        {
          text: "a goat",
          correct: false,
        },
        {
          text: "a coat of many colors",
          correct: true,
        },
        {
          text: "a new wife",
          correct: false,
        },
        {
          text: "a puppy",
          correct: false,
        },
      ],
    },
    {
      id: 49,
      question:
        "According to the Gospel of John, what was Jesus' first miracle?",
      answers: [
        {
          text: "healing a paralytic",
          correct: false,
        },
        {
          text: "walking on water",
          correct: false,
        },
        {
          text: "opening the sky and a dove resting on him after his baptism",
          correct: false,
        },
        {
          text: "turning water to wine",
          correct: true,
        },
      ],
    },
    {
      id: 50,
      question:
        "Before his conversion to Christianity, Paul was a?",
      answers: [
        {
          text: "student of the law",
          correct: true,
        },
        {
          text: "tax collector",
          correct: false,
        },
        {
          text: "soldier",
          correct: false,
        },
        {
          text: "son of a rich merchant",
          correct: false,
        },
      ],
    },
    {
      id: 51,
      question:
        "who was Hannah and Elkanah's first born son?",
      answers: [
        {
          text: "John",
          correct: false,
        },
        {
          text: "Samuel",
          correct: true,
        },
        {
          text: "Eli",
          correct: false,
        },
        {
          text: "Joshua",
          correct: false,
        },
      ],
    },
    {
      id: 52,
      question:
        "List these Gospels in the order in which they appear in the Bible, from LAST to FIRST? A. Mark B.John C.Matthew D.Luke",
      answers: [
        {
          text: "BDAC",
          correct: true,
        },
        {
          text: "CABD",
          correct: false,
        },
        {
          text: "BADC",
          correct: false,
        },
        {
          text: "BDCA",
          correct: false,
        },
      ],
    },
    {
      id: 53,
      question:
        "Before the Israelites stormed Jericho, they?",
      answers: [
        {
          text: "danced the macarena",
          correct: false,
        },
        {
          text: "sang 'the walls of jericho fell down flat' 7 times",
          correct: false,
        },
        {
          text: "gave 7 hearty cheers",
          correct: false,
        },
        {
          text: "circled the city 7 times blowing ram's horns",
          correct: true,
        },
      ],
    },
    {
      id: 54,
      question:
        "why did Sarah laugh when 3 men told her that she and Abraham would have a son?",
      answers: [
        {
          text: "she had a similar dream",
          correct: false,
        },
        {
          text: "she thought they were scammers",
          correct: false,
        },
        {
          text: "she was very old",
          correct: true,
        },
        {
          text: "her maids told her a very funny joke",
          correct: false,
        },
      ],
    },
    {
      id: 55,
      question:
        "the official governing body of the Jews during the time of Jesus was the?",
      answers: [
        {
          text: "Sanhedrin",
          correct: true,
        },
        {
          text: "Scribes",
          correct: false,
        },
        {
          text: "high priest",
          correct: false,
        },
        {
          text: "Pharises",
          correct: false,
        },
      ],
    },
    {
      id: 56,
      question:
        "The priests in ancient Israel were members of the tribe of?",
      answers: [
        {
          text: "Benjamin",
          correct: false,
        },
        {
          text: "Levi",
          correct: true,
        },
        {
          text: "Judah",
          correct: false,
        },
        {
          text: "Ephraim",
          correct: false,
        },
      ],
    },
    {
      id: 57,
      question:
        "who was Paul's first convert in the region of Philippi?",
      answers: [
        {
          text: "Priscilla",
          correct: false,
        },
        {
          text: "Silas",
          correct: false,
        },
        {
          text: "Lady",
          correct: false,
        },
        {
          text: "Lydia",
          correct: true,
        },
      ],
    },
    {
      id: 58,
      question:
        "Who is the wife of Moses?",
      answers: [
        {
          text: "Miriam",
          correct: false,
        },
        {
          text: "Salome",
          correct: false,
        },
        {
          text: "Zamora",
          correct: false,
        },
        {
          text: "Zipporah",
          correct: true,
        },
      ],
    },
    {
      id: 59,
      question:
        "I am the Lord your God who brought you out of the land of bondage you shall?",
      answers: [
        {
          text: "remember the sabbath and keep it holy",
          correct: false,
        },
        {
          text: "eat bread every morning",
          correct: false,
        },
        {
          text: "have no other God but me",
          correct: true,
        },
        {
          text: "play FIFA every friday",
          correct: true,
        },
      ],
    },
    {
      id: 60,
      question:
        "Who are the brothers of Thunder?",
      answers: [
        {
          text: "Esau and Jacob",
          correct: false,
        },
        {
          text: "James and John",
          correct: true,
        },
        {
          text: "Simon and Andrew",
          correct: false,
        },
        {
          text: "Aaron and Moses",
          correct: false,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
    {
      id: 38,
      question:
        "After spending forty days in the wilderness, from what prophetic scroll did Jesus read while he was in the synagogue in Nazareth?",
      answers: [
        {
          text: "Jeremiah",
          correct: false,
        },
        {
          text: "Ezekiel",
          correct: false,
        },
        {
          text: "Daniel",
          correct: false,
        },
        {
          text: "Isaiah",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () => [
      { id: 1, amount: "10 Shekels" },
      { id: 2, amount: "20 Shekels" },
      { id: 3, amount: "30 Shekels" },
      { id: 4, amount: "40 Shekels" },
      { id: 5, amount: "50 Shekels" },
      { id: 6, amount: "60 Shekels" },
      { id: 7, amount: "70 Shekels" },
      { id: 8, amount: "80 Shekels" },
      { id: 9, amount: "90 Shekels" },
      { id: 10, amount: "100 Shekels" },
      { id: 11, amount: "200 Shekels" },
      { id: 12, amount: "300 Shekels" },
      { id: 13, amount: "400 Shekels" },
      { id: 14, amount: "500 Shekels" },
      { id: 15, amount: "1.000 Shekels" },
      { id: 16, amount: "2.000 Shekels" },
      { id: 17, amount: "3.000 Shekels" },
      { id: 18, amount: "4.000 Shekels" },
      { id: 19, amount: "5.000 Shekels" },
      { id: 20, amount: "6.000 Shekels" },
      { id: 21, amount: "7.000 Shekels" },
      { id: 22, amount: "8.000 Shekels" },
      { id: 23, amount: "9.000 Shekels" },
      { id: 24, amount: "10.000 Shekels" },
      { id: 25, amount: "20.000 Shekels" },
      { id: 26, amount: "30.000 Shekels" },
      { id: 27, amount: "40.000 Shekels" },
      { id: 28, amount: "50.000 Shekels" },
      { id: 29, amount: "60.000 Shekels" },
      { id: 30, amount: "70.000 Shekels" },
      { id: 31, amount: "80.000 Shekels" },
      { id: 32, amount: "90.000 Shekels" },
      { id: 33, amount: "100.000 Shekels" },
      { id: 34, amount: "200.000 Shekels" },
      { id: 35, amount: "300.000 Shekels" },
      { id: 36, amount: "400.000 Shekels" },
      { id: 37, amount: "500.000 Shekels" },
      { id: 38, amount: "600.000 Shekels" },
      { id: 39, amount: "700.000 Shekels" },
      { id: 40, amount: "800.000 Shekels" },
      { id: 41, amount: "900.000 Shekels" },
      { id: 42, amount: "1.000.000 Shekels" },
      { id: 43, amount: "2.000.000 Shekels" },
      { id: 44, amount: "3.000.000 Shekels" },
      { id: 45, amount: "4.000.000 Shekels" },
      { id: 46, amount: "5.000.000 Shekels" },
      { id: 47, amount: "6.000.000 Shekels" },
      { id: 48, amount: "7.000.000 Shekels" },
      { id: 49, amount: "8.000.000 Shekels" },
      { id: 50, amount: "9.000.000 Shekels" },
      { id: 51, amount: "10.000.000 Shekels" },
      { id: 52, amount: "20.000.000 Shekels" },
      { id: 53, amount: "30.000.000 Shekels" },
      { id: 54, amount: "40.000.000 Shekels" },
      { id: 55, amount: "50.000.000 Shekels" },
      { id: 56, amount: "60.000.000 Shekels" },
      { id: 57, amount: "70.000.000 Shekels" },
      { id: 58, amount: "80.000.000 Shekels" },
      { id: 59, amount: "90.000.000 Shekels" },
      { id: 60, amount: "100.000.000 Shekels" },
      { id: 61, amount: "200.000.000 Shekels" },
      { id: 62, amount: "300.000.000 Shekels" },
      { id: 63, amount: "400.000.000 Shekels" },
      { id: 64, amount: "500.000.000 Shekels" },
      { id: 65, amount: "600.000.000 Shekels" },
      { id: 66, amount: "700.000.000 Shekels" },
      { id: 67, amount: "800.000.000 Shekels" },
      { id: 68, amount: "900.000.000 Shekels" },
      { id: 69, amount: "1.000.000.000 Shekels" },
      { id: 70, amount: "2.000.000.000 Shekels" },
      { id: 71, amount: "3.000.000.000 Shekels" },
      { id: 72, amount: "4.000.000.000 Shekels" },
      { id: 73, amount: "5.000.000.000 Shekels" },
      { id: 74, amount: "6.000.000.000 Shekels" },
      { id: 75, amount: "7.000.000.000 Shekels" },
    ],
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <>
      <div className="app">
        {!username ? (
          <Start setUsername={setUsername} />
        ) : (
          <>
            <div className="main">
              {timeOut ? (
                <>
                  <h1 className="activeText">
                    Congratulations {username}, You earned: {earned} Shekels.
                  </h1>
                  <button className="restartButton" onClick={handleReload}>
                    RESTART
                  </button>
                </>
              ) : (
                <>
                  <div className="top">
                    <div className="timer">
                      <Timer
                        setTimeOut={setTimeOut}
                        questionNumber={questionNumber}
                      />
                    </div>
                    <div>
                      <h1 className="endText"> Contestant {username} </h1>
                    </div>
                  </div>
                  <div className="bottom">
                    <Trivia
                      data={data}
                      questionNumber={questionNumber}
                      setQuestionNumber={setQuestionNumber}
                      setTimeOut={setTimeOut}
                    />
                  </div>
                </>
              )}
            </div>
            <div className="pyramid">
              <ul className="moneyList">
                {moneyPyramid.map((m) => (
                  <li
                    className={
                      questionNumber === m.id
                        ? "moneyListItem active"
                        : "moneyListItem"
                    }
                  >
                    <span className="moneyListItemNumber">{m.id}.</span>
                    <span className="moneyListItemAmount">{m.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
