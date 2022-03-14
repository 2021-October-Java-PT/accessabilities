package org.wecancodeit.serverside.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class ResourceModel {

    @Id
    @GeneratedValue

    private Long id;
    private String name;
    @Lob
    private String businessDescription;
    private String businessUrl;
    private String businessPhoneNumber;

    public ResourceModel(String name, String businessDescription, String businessUrl, String businessPhoneNumber) {
        this.name = name;
        this.businessDescription = businessDescription;
        this.businessUrl = businessUrl;
        this.businessPhoneNumber = businessPhoneNumber;
    }

    public ResourceModel() {

    }

    public Long getId() {
        return id;
    }

    public String getBusinessDescription() {
        return businessDescription;
    }

    public String getBusinessUrl() {
        return businessUrl;
    }

    public String getBusinessPhoneNumber(){
        return businessPhoneNumber;
    }
}
