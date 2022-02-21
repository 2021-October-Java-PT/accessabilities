package org.wecancodeit.serverside.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;

@Entity
public class LocationModel {

    @Id
    @GeneratedValue
    private Long locationId;
    private String name;
    private String locationContactNumber;
    private String locationStreetNum;
    private String locationAddressLine;
    private String locationCity;
    private String locationState;
    private String locationZipCode;
    private Double accessibilityRating;
    @OneToMany
    @JsonIgnore
    private Collection<ReviewModel> reviews;

    public LocationModel(String locationName, String locationContactNumber, String locationStreetNum, String locationAddressLine, String locationCity, String locationState, String locationZipCode, Double accessibilityRating, ReviewModel...reviews){
        this.name = locationName;
        this.locationContactNumber= locationContactNumber;
        this.locationStreetNum = locationStreetNum;
        this.locationAddressLine = locationAddressLine;
        this.locationCity = locationCity;
        this.locationState = locationState;
        this.locationZipCode = locationZipCode;
        this.accessibilityRating = accessibilityRating;
        this.reviews = new ArrayList<>(Arrays.asList(reviews));
    }

    public LocationModel(){

    }

    public Long getLocationId(){return locationId;}

    public String getName(){
        return name;
    }

    public String getLocationContactNumber(){
        return locationContactNumber;
    }

    public String getLocationStreetNum(){
        return locationStreetNum;
    }

    public String getLocationAddressLine(){
        return  locationAddressLine;
    }

    public String getLocationCity(){
        return locationCity;
    }

    public String getLocationState(){
        return locationState;
    }

    public String getLocationZipCode(){
        return locationZipCode;
    }

    public Double getAccessibilityRating(){return accessibilityRating;}

}

