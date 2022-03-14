package org.wecancodeit.serverside.rest.controllers;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
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

    @PostMapping("/api/reviews/reviewId/add-review")
    public String addReview(@RequestBody String body) throws JSONException {
        JSONObject newReview = new JSONObject(body);
        String reviewTitle = newReview.getString("reviewTitle");
        String reviewComment = newReview.getString("reviewComment");
//        ReviewModel reviewModel = new ReviewModel(reviewTitle, reviewComment);
//        reviewRepo.save(reviewModel);
        return "redirect:/api/business-resources";    }
}
