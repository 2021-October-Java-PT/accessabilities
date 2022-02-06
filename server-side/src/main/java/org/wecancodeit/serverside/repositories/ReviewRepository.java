package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.ReviewModel;


import java.util.Optional;

public interface ReviewRepository extends CrudRepository <ReviewModel, Long> {
    Optional<ReviewModel> findByName(String reviewTitle);
}
