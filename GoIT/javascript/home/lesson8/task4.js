function Article() {
    this.created = new Date();
    Article.totalCreated = new Date();
    Article.totalCounter++;
    this.id = Article.totalCounter;
}

Article.totalCounter = 0;
Article.showStats = function(){
    console.log('Date of the last creation: ' + Article.totalCreated.toLocaleString());
    console.log('Total created: ' + Article.totalCounter);
};

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)