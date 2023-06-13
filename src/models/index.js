const adjective = require("./adjective/adjective")
const adverbs = require("./adverbs/adverbs");
const conjunctions = require("./conjunctions/conjunctions");
const determiners = require("./determiners/determiners");
const exclamations = require("./exclamations/exclamations");
const nouns = require("./nouns/nouns");
const partialSentence = require("./partialsentence/partialsentence");
const prepositions = require("./prepositions/prepositions");
const pronouns = require("./pronouns/pronouns");
const sentence = require("./sentences/sentence");
const verbs = require("./verbs/verbs");

const models = {};

models.Adjective = adjective;
models.Adverb = adverbs;
models.Conjunction = conjunctions;
models.Determiner = determiners;
models.Exclamation = exclamations;
models.Noun = nouns;
models.Preposition = prepositions;
models.Pronoun = pronouns;
models.Verb = verbs;

models.Sentence = sentence;
models.PartialSentence = partialSentence;
