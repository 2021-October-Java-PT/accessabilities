package org.wecancodeit.serverside.models;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.*;

@Entity
public class BusinessResource {

    @Id
    @GeneratedValue

    private Long id;
    @Lob
    private String name;
    @Lob
    private String businessDescription;
    private String businessStreetNumber;
    private String businessStreetName;
    private String businessCity;
    private String businessState;
    private String businessZip;
    @Lob
    private String businessUrl;
    @Lob
    private String businessAccessibilityFeatures;
    private String businessContentPhoneNumber;
    @ManyToMany
    private Set<ReviewModel> reviews;

    public BusinessResource(String name, String businessDescription,String businessStreetNumber, String businessStreetName, String businessCity, String businessState, String businessZip, String businessUrl, String businessAccessibilityFeatures, String businessContentPhoneNumber, ReviewModel... reviews) {
        this.name = name;
        this.businessDescription = businessDescription;
        this.businessStreetNumber = businessStreetNumber;
        this.businessStreetName = businessStreetName;
        this.businessCity = businessCity;
        this.businessState = businessState;
        this.businessZip = businessZip;
        this.businessUrl = businessUrl;
        this.businessAccessibilityFeatures = businessAccessibilityFeatures;
        this.businessContentPhoneNumber = businessContentPhoneNumber;
        this.reviews = new HashSet<>();
    }

    public BusinessResource() {}




    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getBusinessDescription() {
        return businessDescription;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBusinessStreetNumber() {
        return businessStreetNumber;
    }

    public void setBusinessStreetNumber(String businessStreetNumber) {
        this.businessStreetNumber = businessStreetNumber;
    }

    public String getBusinessStreetName() {
        return businessStreetName;
    }

    public void setBusinessStreetName(String businessStreetName) {
        this.businessStreetName = businessStreetName;
    }

    public String getBusinessCity() {
        return businessCity;
    }

    public void setBusinessCity(String businessCity) {
        this.businessCity = businessCity;
    }

    public String getBusinessState() {
        return businessState;
    }

    public void setBusinessState(String businessState) {
        this.businessState = businessState;
    }

    public String getBusinessZip() {
        return businessZip;
    }

    public void setBusinessZip(String businessZip) {
        this.businessZip = businessZip;
    }

    public String getBusinessUrl() {
        return businessUrl;
    }

    public void setBusinessUrl(String businessUrl) {
        this.businessUrl = businessUrl;
    }

    public String getBusinessAccessibilityFeatures() {
        return businessAccessibilityFeatures;
    }

    public void setBusinessAccessibilityFeatures(String businessAccessibilityFeatures) {
        this.businessAccessibilityFeatures = businessAccessibilityFeatures;
    }

    public String getBusinessContentPhoneNumber() {
        return businessContentPhoneNumber;
    }

    public void setBusinessContentPhoneNumber(String businessContentPhoneNumber) {
        this.businessContentPhoneNumber = businessContentPhoneNumber;
    }



    public Collection<ReviewModel> getReviews() {
        return reviews;
    }
}