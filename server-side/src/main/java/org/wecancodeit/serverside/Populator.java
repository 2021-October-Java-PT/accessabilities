package org.wecancodeit.serverside;


import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.models.BusinessResource;
import org.wecancodeit.serverside.models.LocationModel;
import org.wecancodeit.serverside.repositories.BusinessResourceRepository;
import org.wecancodeit.serverside.repositories.LocationRepository;

import javax.annotation.Resource;
import java.util.Locale;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private BusinessResourceRepository businessRepo;

    @Resource
    private LocationRepository locationRepo;

    @Override
    public void run(String... args) throws Exception {

        BusinessResource clevelandMetroParksZoo = new BusinessResource("Cleveland MetroParks Zoo", "Explore 18 reservations spanning more than 24,000 acres with more than 300 miles of trails, eight golf courses, eight lakefront parks and a nationally-acclaimed zoo.", "4101", "FULTON PARKWAY", "CLEVELAND", "OH", "44144", "https://www.clevelandmetroparks.com/", "Family restrooms, Sensory zones, sensory bags, stroller rental, wheelchair rental, tram service, accessible parking", "216.635.3200 ");
        BusinessResource columbusZooAndAquarium = new BusinessResource("Columbus Zoo and Aquarium", "With 10,000 animals in six distinct regions the Columbus Zoo and Aquarium is an education and recreational complex that provides a journey for your body and your imagination.", "4850", "POWELL RD", "POWELL", "OH", "43065", "https://www.columbuszoo.org/home", "Social Stories, Sensory Maps, Sensory Bags, Adult Changing Station, Wheelchair and Scooter Rentals, Accessible Routes, Complimentary companion ticket, Family Restrooms", "614-645-3400");
        BusinessResource akronZoo = new BusinessResource("Akron Zoo", "The Akron Zoo is a 50-acre (20 ha) non-profit zoo located just west of downtown in Akron, Ohio, United States. The Akron Zoo is home to over 1,000 animals representing over 100 different species and it has over 400,000 visitors annually.", "505", "EUCLID AVE", "Akron", "OH","44307","https://www.akronzoo.org/", "ADA Accessible Paths, Sensory Bags, Quiet Zones, Headphone zones, Guest Comfort Station, Social Story, Trained Staff, Stroller and wheelchair rentals", "330-375-2500");
        BusinessResource cincinnatiZooAndBotanicalGarden= new BusinessResource("Cincinnati Zoo and Botanical Garden", "Rated one of the best zoos in the nation, the Cincinnati Zoo continues to set the standard for conservation, education and preservation of wild animals and wild spaces. More than 1.5 million people visit the Zoo annually. The Zoo features more than 500 animal and 3,000 plant species, making it one of the largest Zoo collections in the country", "3400", "VINE ST", "Cincinnati", "OH","45220", "https://cincinnatizoo.org/","Adult changing tables, Sensory maps, sensory friendly restrooms, sensory bags, social stories, line skipping pass, visual supports, stroller and wheelchair rentals, family restrooms", "513-281-4700");
        BusinessResource GreaterClevelandAquarium = new BusinessResource("Greater Cleveland Aquarium", "The Greater Cleveland Aquarium is filled with intriguing aquatic life from the Great Lakes and colorful sea creatures from around the globe.", "2000", "Sycamore St", "Cleveland", "OH", "44113", "https://www.greaterclevelandaquarium.com", "Wheelchair accessible, strollers permitted", "216-862-8803");


        businessRepo.save(clevelandMetroParksZoo);
        businessRepo.save(columbusZooAndAquarium);
        businessRepo.save(akronZoo);
        businessRepo.save(cincinnatiZooAndBotanicalGarden);
        businessRepo.save(GreaterClevelandAquarium);

        LocationModel popeyes = new LocationModel("Popeyes","123-456-7890","3234","Willliams Blvd","Cleveland","Ohio","44134",10.0);
        LocationModel chickFilA = new LocationModel("Chick-Fil-A","123-555-7890","25235","Crapp St","Canton","Ohio","44232",0.0);

        locationRepo.save(popeyes);
        locationRepo.save(chickFilA);
    }
}
