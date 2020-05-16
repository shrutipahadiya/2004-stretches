class BookReview {

    constructor(title,author){
            this.title = title;
            this.author = author;
            this.rating = 1;
            this.pageNo =1;
            this.notes =[];
    }
    

   addNotes(pageNo,notes){
       if( this.notes[pageNo]  == undefined ){
        this.notes[pageNo] = notes;
       }else{
        this.notes[pageNo] = this.notes[pageNo] +" "+ notes;
       }
      
   }     


    addRating(rating){
        if(rating >5 ){
            throw "rating cannot be greater than 5"
        }else{
                this.rating = rating;
        }
    }

}
module.exports = { BookReview };
