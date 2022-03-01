package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.ResourceModel;

import java.util.Optional;

public interface ResourceRepository extends CrudRepository<ResourceModel, Long> {
    Optional<ResourceModel> findByName(String name);
}
