package org.wecancodeit.serverside.models;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class BusinessResource {

    @Id
    @GeneratedValue

    private Long id;
    @Lob
    private String name;
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

    public BusinessResource(String name, String businessStreetNumber, String businessStreetName, String businessCity, String businessState, String businessZip, String businessUrl, String businessAccessibilityFeatures, String businessContentPhoneNumber) {
        this.name = name;
        this.businessStreetNumber = businessStreetNumber;
        this.businessStreetName = businessStreetName;
        this.businessCity = businessCity;
        this.businessState = businessState;
        this.businessZip = businessZip;
        this.businessUrl = businessUrl;
        this.businessAccessibilityFeatures = businessAccessibilityFeatures;
        this.businessContentPhoneNumber = businessContentPhoneNumber;
    }

    public BusinessResource() {}

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
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
}
