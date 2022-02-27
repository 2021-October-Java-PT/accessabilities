package org.wecancodeit.serverside.rest.controllers;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.ResourceModel;
import org.wecancodeit.serverside.repositories.ResourceRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class ResourceRestController {

    @Resource
    private ResourceRepository resourceRepo;

    @GetMapping("/api/resources")
    public Collection<ResourceModel> getResources() {
        return (Collection<ResourceModel>) resourceRepo.findAll();
    }

    @GetMapping("/api/resources/{Id}")
    public Optional<ResourceModel> getResource(@PathVariable Long id) {
        return resourceRepo.findById(id);
    }

    @GetMapping("/api/resources/add-resource")
    public Collection<ResourceModel> addResource(@RequestBody String body, @PathVariable Long id) throws JSONException {
        JSONObject newResource = new JSONObject(body);
        String name = newResource.getString("name");
        String businessDescription = newResource.getString("businessDescription");
        String businessUrl = newResource.getString("businessUrl");
        String businessPhoneNumber = newResource.getString("businessPhoneNumber");
        Optional<ResourceModel> resourcesToAddopt = resourceRepo.findByName(name);

        if (resourcesToAddopt.isEmpty()) {
            ResourceModel resourcesToAdd = new ResourceModel(name,businessDescription,businessUrl,businessPhoneNumber);
            resourceRepo.save(resourcesToAdd);
        }

        return (Collection<ResourceModel>) resourceRepo.findAll();
    }
}
