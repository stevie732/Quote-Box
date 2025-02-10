const quotes = [
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
  { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" }
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayQuote() {
  const textElement = document.getElementById('text');
  const authorElement = document.getElementById('author');

  // Remove existing animations
  textElement.style.animation = 'none';
  authorElement.style.animation = 'none';

  // Trigger reflow
  void textElement.offsetWidth;
  void authorElement.offsetWidth;

  // Add animations back
  textElement.style.animation = 'fadeIn 0.8s ease-out';
  authorElement.style.animation = 'fadeIn 0.8s ease-out 0.3s';

  const quote = getRandomQuote();
  textElement.textContent = quote.text;
  authorElement.textContent = "- " + quote.author;

  // Update tweet link
  document.getElementById('tweet-quote').href =
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote.text + ' - ' + quote.author)}`;
}

// Update HTML with button text
document.getElementById('new-quote').textContent = "New Quote";
document.getElementById('tweet-quote').innerHTML = '<i class="fab fa-twitter"></i>';

// Initial quote
displayQuote();

// Event listener
document.getElementById('new-quote').addEventListener('click', displayQuote);