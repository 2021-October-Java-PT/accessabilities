package org.wecancodeit.serverside.rest.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.serverside.models.BusinessModel;
import org.wecancodeit.serverside.repositories.BusinessRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class BusinessRestController {

    @Resource
    private BusinessRepository businessRepo;

    @GetMapping("/api/businesses")
    public Collection<BusinessModel> getBusinesses(){
        return (Collection<BusinessModel>) businessRepo.findAll(); }


    @GetMapping("/api/businesses/{businessId}")
    public Optional<BusinessModel> getBusiness(@PathVariable Long id){
        return businessRepo.findById(id);
    }

}
