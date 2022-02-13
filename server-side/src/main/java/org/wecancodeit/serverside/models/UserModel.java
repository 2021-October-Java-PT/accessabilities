package org.wecancodeit.serverside.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class UserModel {

    @Id
    @GeneratedValue
    private Long userId;
    private String userName;
    private String userEmail;
    private String userPassword;
    @OneToMany(mappedBy = "userModel")
    @JsonIgnore
    private Collection<ReviewModel> reviews;

    public UserModel() {
    }

    private Collection<ReviewModel> getReviews(){
        return reviews;
    }

    public UserModel(String userName, String userEmail, String userPassword) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
    }

    public Long getUserId() {
        return userId;
    }

    public String getUserName() {
        return userName;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public String getUserPassword() {
        return userPassword;
    }

}
