function parseArticles(articles) {
  if (isNaN(articles)) {
    throw new Error("Invalid articles");
  }
  return articles.split().map(Number);
}

function pactArticles(articlesStr) {
  const articles = parseArticles(articlesStr);
}

module.exports = { pactArticles };
