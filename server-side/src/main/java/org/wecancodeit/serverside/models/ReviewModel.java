package org.wecancodeit.serverside.models;

import javax.persistence.*;

@Entity
public class ReviewModel {

    @Id
    @GeneratedValue
    private Long reviewId;
    private String reviewTitle;
    @Lob
    private String reviewComment;
    private int reviewRating;
    @ManyToOne
    private UserModel userModel;



    public ReviewModel(String reviewTitle, String reviewComment, int reviewRating){
        this.reviewTitle = reviewTitle;
        this.reviewComment = reviewComment;
        this.reviewRating = reviewRating;
    }

    public ReviewModel(){

    }

    public Long getReviewId(){
        return reviewId;
    }

    public String getReviewTitle() {
        return reviewTitle;
    }

    public String getReviewComment() {
        return reviewComment;
    }

    public int getReviewRating() {
        return reviewRating;
    }
}
