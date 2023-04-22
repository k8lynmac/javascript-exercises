const getTheTitles = function(books) {

    let result = [];
    for (let key in books) {
        let book = books[key];
        result.push(book.title);
    }

    return result;

};

// Do not edit below this line
module.exports = getTheTitles;
