package org.wecancodeit.serverside.rest.controllers;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.BusinessResource;
import org.wecancodeit.serverside.repositories.BusinessResourceRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class BusinessRestController {

    @Resource
    private BusinessResourceRepository businessRepo;

    @GetMapping("/api/business-resources")
    public Collection<BusinessResource> getBusinessResource() {
        return (Collection<BusinessResource>) businessRepo.findAll();
    }

    @GetMapping("/api/business-resources/city/{businessCity}")
    public Collection<BusinessResource> getBusinessResourcesByCity(@PathVariable(value = "businessCity") String businessCity) {
        return businessRepo.findByBusinessCityIgnoreCase(businessCity);
    }
    @GetMapping("/api/business-resources/AccessibilityFeatures/{businessAccessibilityFeatures}")
    public Collection<BusinessResource> getBusinessResourcesByAccessibilityFeatures(@PathVariable(value = "businessAccessibilityFeatures") String businessAccessibilityFeatures) {
        return businessRepo.findByBusinessAccessibilityFeaturesContains(businessAccessibilityFeatures);
    }
    @GetMapping("/api/business-resources/Search/{nameOrBusinessZipOrBusinessCityOrBusinessAccessibilityFeatures}")
    public Collection<BusinessResource> getBusinessResourcesBySearchParams(@PathVariable(value = "nameOrBusinessZipOrBusinessCityOrBusinessAccessibilityFeatures") String name,@PathVariable(value = "nameOrBusinessZipOrBusinessCityOrBusinessAccessibilityFeatures") String businessZip,@PathVariable(value = "nameOrBusinessZipOrBusinessCityOrBusinessAccessibilityFeatures") String businessCity, @PathVariable(value = "nameOrBusinessZipOrBusinessCityOrBusinessAccessibilityFeatures") String businessAccessibilityFeatures ) {
        return businessRepo.findByNameContainsIgnoreCaseOrBusinessZipOrBusinessCityIgnoreCaseOrBusinessAccessibilityFeaturesIgnoreCaseContains(name, businessZip, businessCity, businessAccessibilityFeatures);

    }



    @GetMapping("/api/business-resources/{id}")
    public Optional<BusinessResource> getBusinessResource(@PathVariable Long id) {
        return businessRepo.findById(id);
    }


    @PostMapping("/api/business-resources/add-resource")
    public String addBusinessResource(@RequestBody String body) throws JSONException {
        JSONObject newResource = new JSONObject(body);
        String name = newResource.getString("name");
        String businessDescription = newResource.getString("businessDescription");
        String businessStreetNumber = newResource.getString("businessStreetNumber");
        String businessStreetName = newResource.getString("businessStreetName");
        String businessCity = newResource.getString("businessCity");
        String businessState = newResource.getString("businessState");
        String businessZip = newResource.getString("businessZip");
        String businessUrl = newResource.getString("businessUrl");
        String businessAccessibilityFeatures = newResource.getString("businessAccessibilityFeatures");
        String businessContentPhoneNumber = newResource.getString("businessContentPhoneNumber");

        Optional<BusinessResource> resourceToAddOpt = businessRepo.findByName(name);

        if (resourceToAddOpt.isEmpty()) {
            BusinessResource resourceToAdd = new BusinessResource(name, businessDescription,
                    businessStreetNumber, businessStreetName,
                    businessCity, businessState, businessZip, businessUrl,
                    businessAccessibilityFeatures, businessContentPhoneNumber);
            businessRepo.save(resourceToAdd);
            return "redirect:/api/business-resources";
        }

        return "redirect:/api/business-resources";
    }


}