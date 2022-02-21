package org.wecancodeit.serverside.rest.controllers;

import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.LocationModel;
import org.wecancodeit.serverside.repositories.LocationRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController

public class LocationRestController {

    @Resource
    private LocationRepository locationRepo;

    @GetMapping("/api/locations")
    public Collection<LocationModel> getLocations(){
        return (Collection<LocationModel>) locationRepo.findAll();
    }


    @GetMapping("/api/locations/{locationId}")
    public Optional<LocationModel> getLocation(@PathVariable Long locationId) {
        return locationRepo.findById(locationId);
    }

//    @PostMapping("/api/locations/add-location")
//    public String addLocation(@RequestBody)

}

