const {Box} = require("../model/box");

class SimplePackager {

    pact(articles) {
        const boxes = [];
        let currentBox;
        articles.forEach(article => {
            if (!currentBox || currentBox.getAvailableSpace() < article) {
                currentBox = new Box();
                boxes.push(currentBox);
            }
            currentBox.addArticle(article);
        });
        return boxes;
    }

}

module.exports = {SimplePackager};