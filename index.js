const quotes = {
    science: [
        "Science is the key to our future, and if you don’t believe in science, then you’re holding everybody back. - Bill Nye",
        "Equipped with his five senses, man explores the universe around him and calls the adventure Science. - Edwin Powell Hubble",
        "The important thing is to never stop questioning. - Albert Einstein",
        "Science is not only a disciple of reason but, also, one of romance and passion. - Stephen Hawking",
        "Research is what I'm doing when I don't know what I'm doing. - Wernher von Braun",
        "Science knows no country, because knowledge belongs to humanity, and is the torch which illuminates the world. - Louis Pasteur",
        "Science is a way of thinking much more than it is a body of knowledge. - Carl Sagan",
        "The good thing about science is that it's true whether or not you believe in it. - Neil deGrasse Tyson",
        "Somewhere, something incredible is waiting to be known. - Carl Sagan",
        "Science is organized knowledge. Wisdom is organized life. - Immanuel Kant",
        "The universe is under no obligation to make sense to you. - Neil deGrasse Tyson",
        "Science is the great antidote to the poison of enthusiasm and superstition. - Adam Smith",
        "Science and everyday life cannot and should not be separated. - Rosalind Franklin"
    ],
    life: [
        "In the end, we only regret the chances we didn’t take. - Lewis Carroll",
        "Life is what happens when you're busy making other plans. - John Lennon",
        "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Buddha",
        "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
        "Life isn't about finding yourself. It's about creating yourself. - George Bernard Shaw",
        "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate. - Ralph Waldo Emerson",
        "Life is either a daring adventure or nothing at all. - Helen Keller",
        "To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde",
        "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
        "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
        "The best way to predict the future is to create it. - Peter Drucker",
        "Life is too important to be taken seriously. - Oscar Wilde",
        "It is not the length of life, but depth of life. - Ralph Waldo Emerson"

    ]
};
let currentCategory = "science";
let currentQuoteIndex = 0;

const quoteText = document.getElementById('quoteText');
const categorySelect = document.getElementById('category');
const previousBtn = document.getElementById('previousBtn');
const nextBtn = document.getElementById('nextBtn');
const randomBtn = document.getElementById('randomBtn');


const loadQuote = () => {
    quoteText.textContent = `"${quotes[currentCategory][currentQuoteIndex]}"`;
};

loadQuote();

