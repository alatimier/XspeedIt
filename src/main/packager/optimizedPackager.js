import Box from "../model/box";

class OptimizedPackager {

    pact(articles) {
        const boxes = [];
        articles.forEach(article => {
            let availableBox = this.findFirstAvailableBox(boxes, article);
            if (!availableBox) {
                availableBox = new Box();
                boxes.push(availableBox);
            }
            availableBox.addArticle(article);
        });
        return boxes;
    }

    findFirstAvailableBox(boxes, article) {
        return boxes.find(b => b.getAvailableSpace() >= article)
    }

}

export default OptimizedPackager;