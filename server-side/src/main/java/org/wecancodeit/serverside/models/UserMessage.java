package org.wecancodeit.serverside.models;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class UserMessage {
    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private String email;
    private String phone;
    @Lob
    private String message;

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }

    public String getMessage() {
        return message;
    }

    public UserMessage() {
    }

    public UserMessage(String username, String email, String phone, String message){
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.message = message;
    }
}
