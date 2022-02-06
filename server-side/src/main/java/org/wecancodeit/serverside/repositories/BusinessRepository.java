package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.BusinessModel;

import java.util.Optional;

public interface BusinessRepository  extends CrudRepository<BusinessModel, Long> {
   // Optional<BusinessModel> findByName(String businessName);
}
