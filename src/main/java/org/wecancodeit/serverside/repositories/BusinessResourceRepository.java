package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.BusinessResource;

import java.util.Collection;
import java.util.Optional;

public interface BusinessResourceRepository extends CrudRepository<BusinessResource, Long> {
   Optional<BusinessResource> findByName(String name);
   Collection<BusinessResource> findByBusinessCityIgnoreCase(String businessCity);

   Collection<BusinessResource> findByBusinessAccessibilityFeaturesContains(String businessAccessibilityFeatures);
   Collection<BusinessResource> findByNameContainsIgnoreCaseOrBusinessZipOrBusinessCityIgnoreCaseOrBusinessAccessibilityFeaturesIgnoreCaseContains(String name, String businessZip, String businessCity, String businessAccessibilityFeatures);

}