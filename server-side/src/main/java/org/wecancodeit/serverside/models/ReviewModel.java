package org.wecancodeit.serverside.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
public class ReviewModel {

    @Id
    @GeneratedValue
    private Long reviewId;
    private String reviewTitle;
    @Lob
    private String reviewComment;
    @ManyToMany(mappedBy = "reviews")
    @JsonIgnore
    private Collection<BusinessResource> businessResources;


    public ReviewModel(String reviewTitle, String reviewComment) {
        this.reviewTitle = reviewTitle;
        this.reviewComment = reviewComment;
        businessResources = new ArrayList<>();
    }

    protected ReviewModel(){

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

    @Override
    public boolean equals(Object o) {
        if(this == o) return true;
        if(o == null || getClass() != o.getClass()) return false;

        ReviewModel reviewModel = (ReviewModel) o;

        if (reviewId != null ? !reviewModel.equals(reviewModel.reviewId) : reviewModel.reviewId != null) return false;
        return reviewTitle != null ? reviewTitle.equals(reviewModel.reviewTitle) : reviewModel.reviewTitle == null;
    }

    @Override
    public int hashCode() {
        int result = reviewId != null ? reviewId.hashCode() :0;
        result = 31 * result + (reviewTitle != null ? reviewTitle.hashCode() : 0);
        return result;
    }

}