package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.LocationModel;

import java.util.Optional;

public interface LocationRepository extends CrudRepository<LocationModel,Long> {
//    Optional<LocationModel> findByName(String locationName);
}
