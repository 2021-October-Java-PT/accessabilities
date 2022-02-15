package org.wecancodeit.serverside.rest.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.serverside.models.LocationModel;
import org.wecancodeit.serverside.repositories.LocationRepository;

import javax.annotation.Resource;
import java.util.Optional;

@RestController

public class LocationRestController {

    @Resource
    private LocationRepository locationRepo;

    @GetMapping("/api/locations/{locationI}")
    public Optional<LocationModel> getLocation(@PathVariable Long id) {
        return locationRepo.findById(id);
    }
}
