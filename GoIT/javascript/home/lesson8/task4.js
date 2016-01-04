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

Article.showStats(); // �����: 2, ���������: (����)

new Article();

Article.showStats(); // �����: 3, ���������: (����)