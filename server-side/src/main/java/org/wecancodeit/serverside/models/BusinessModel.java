package org.wecancodeit.serverside.models;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class BusinessModel {

    @Id
    @GeneratedValue

    private Long businessId;
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

    public BusinessModel(String name, String businessDescription,
                         String businessStreetNumber, String businessStreetName,
                         String businessCity, String businessState, String businessZip, String businessUrl, String
                         businessAccessibilityFeatures, String businessContentPhoneNumber) {
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
    }

    public BusinessModel(){

    }

    public Long getBusinessId() {
        return businessId;
    }

    public String getName() {
        return name;
    }

    public String getBusinessDescription() {
        return businessDescription;
    }

    public String getBusinessStreetNumber() {
        return businessStreetNumber;
    }

    public String getBusinessStreetName() {
        return businessStreetName;
    }

    public String getBusinessCity() {
        return businessCity;
    }

    public String getBusinessState() {
        return businessState;
    }

    public String getBusinessZip() {
        return businessZip;
    }

    public String getBusinessUrl() {
        return businessUrl;
    }

    public String getBusinessAccessibilityFeatures() {
        return businessAccessibilityFeatures;
    }

    public String getBusinessContentPhoneNumber() {
        return businessContentPhoneNumber;
    }
}
