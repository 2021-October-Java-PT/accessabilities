package org.wecancodeit.serverside.rest.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.serverside.models.ReviewModel;
import org.wecancodeit.serverside.repositories.ReviewRepository;

import javax.annotation.Resource;
import javax.annotation.Resources;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class ReviewRestController {

    @Resource
    private ReviewRepository reviewRepo;

    @GetMapping("/api/reviews")
    public Collection<ReviewModel> getReviews(){
        return (Collection<ReviewModel>) reviewRepo.findAll();
    }

    @GetMapping("/api/reviews/{reviewId}")
    public Optional<ReviewModel> getReview(@PathVariable Long id){
        return reviewRepo.findById(id);
    }
}
