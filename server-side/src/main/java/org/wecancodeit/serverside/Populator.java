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

        BusinessResource clevelandMetroParksZoo = new BusinessResource("Cleveland MetroParks Zoo", "Explore 18 reservations spanning more than 24,000 acres with more than 300 miles of trails, eight golf courses, eight lakefront parks and a nationally-acclaimed zoo.", "4101", "FULTON PARKWAY", "CLEVELAND", "OH", "44144", "https://www.clevelandmetroparks.com/", "Family restrooms, Sensory zones, sensory bags, stroller rental, wheelchair rental, tram service, accessible parking","216.635.3200 ");
        BusinessResource columbusZooAndAquarium = new BusinessResource("Columbus Zoo and Aquarium", "With 10,000 animals in six distinct regions the Columbus Zoo and Aquarium is an education and recreational complex that provides a journey for your body and your imagination.", "4850", "POWELL RD", "POWELL", "OH", "43065", "https://www.columbuszoo.org/home", "Social Stories, Sensory Maps, Sensory Bags, Adult Changing Station, Wheelchair and Scooter Rentals, Accessible Routes, Complimentary companion ticket, Family Restrooms", "614-645-3400");
        BusinessResource akronZoo = new BusinessResource("Akron Zoo", "The Akron Zoo is a 50-acre (20 ha) non-profit zoo located just west of downtown in Akron, Ohio, United States. The Akron Zoo is home to over 1,000 animals representing over 100 different species and it has over 400,000 visitors annually.", "505", "EUCLID AVE", "Akron", "OH","44307","https://www.akronzoo.org/", "ADA Accessible Paths, Sensory Bags, Quiet Zones, Headphone zones, Guest Comfort Station, Social Story, Trained Staff, Stroller and wheelchair rentals", "330-375-2500");
        BusinessResource cincinnatiZooAndBotanicalGarden= new BusinessResource("Cincinnati Zoo and Botanical Garden", "Rated one of the best zoos in the nation, the Cincinnati Zoo continues to set the standard for conservation, education and preservation of wild animals and wild spaces. More than 1.5 million people visit the Zoo annually. The Zoo features more than 500 animal and 3,000 plant species, making it one of the largest Zoo collections in the country", "3400", "VINE ST", "Cincinnati", "OH","45220", "https://cincinnatizoo.org/","Adult changing tables, Sensory maps, sensory friendly restrooms, sensory bags, social stories, line skipping pass, visual supports, stroller and wheelchair rentals, family restrooms", "513-281-4700");
        BusinessResource greaterClevelandAquarium = new BusinessResource("Greater Cleveland Aquarium", "The Greater Cleveland Aquarium is filled with intriguing aquatic life from the Great Lakes and colorful sea creatures from around the globe.", "2000", "Sycamore St", "Cleveland", "OH", "44113", "https://www.greaterclevelandaquarium.com", "Wheelchair accessible, strollers permitted", "216-862-8803");
        BusinessResource greatLakesScienceCenter = new BusinessResource("Great Lakes Science Center","is a museum and educational facility in downtown Cleveland, Ohio, United States. Many of the exhibits document the features of the natural environment in the Great Lakes region of the United States. The facility includes signature (permanent) and traveling exhibits, meeting space, a cafe, and an IMAX Dome theater.","601","Erieside Ave","Cleveland","OH","44114","https://greatscience.com/","Wheel Chair Rental, Elevators, Food Allergies, Outdoor Picnic areas","216-694-2000");
        BusinessResource rockAndRoll = new BusinessResource("Rock & Roll Hall of Fame","sometimes simply referred to as the Rock Hall, is a museum and hall of fame located in downtown Cleveland, Ohio, United States, on the shore of Lake Erie. The museum documents the history of rock music and the artists, producers, engineers, and other notable figures who have influenced its development.","1100","E 9th St","Cleveland","OH","44114","https://www.rockhall.com/","Elevators, Wheelchair-accessible seating, Curbside drop-off, On-site wheelchairs, strollers, motorized mobility, scooters, Accessible Parking","216-781-7625");
        BusinessResource clevelandMuseum = new BusinessResource("The Cleveland Museum of Art", "is an art museum in Cleveland, Ohio, located in the Wade Park District, in the University Circle neighborhood on the city's east side. Internationally renowned for its substantial holdings of Asian and Egyptian art, the museum houses a diverse permanent collection of more than 61,000 works of art from around the world. The museum provides general admission free to the public. With a $755 million endowment, it is the fourth-wealthiest art museum in the United States.[4] With about 770,000 visitors annually (2018), it is one of the most visited art museums in the world.", "11150","East Blvd", "Cleveland", "OH", "44106", "https://www.clevelandart.org/", "Motorized Wheelchairs allowed, Special designed tours for vision, Parking, Service animals allowed, Wheelchairs and Strollers are available, Elevators and escalators","216-421-7350");
        BusinessResource childrenMuseum = new BusinessResource("The Cleveland Children's Museum", "The Children’s Museum of Cleveland (CMC) promotes learning through play using innovative exhibits and programs designed for all children from birth to age 8.", "3813", "Euclid Ave", "Cleveland", "OH", "44115", "https://cmcleveland.org/", "Sensory Rooms, Bathrooms, Elevators, Wheelchair rentals, Wheelchair accessible entrance", "216-791-7114");
        BusinessResource internationWomensMuseum = new BusinessResource("Internation Women's Air & Space Museum", "The mission of the International Women's Air & Space Museum is to collect, preserve, and showcase the history and culture of women in all areas of aviation & aerospace; educate people of the world about their contributions; and inspire future generations by bringing the history to life.", "1501", "N Marginal Rd Ste 165", "Cleveland", "OH", "44114", "https://iwasm.org/wp-blog/", "Wheelchair accessible entrance, Restrooms", "216-623-111");
        BusinessResource voinovich = new BusinessResource("Voinovich Bicentennial Park", "Petite, man-made park with artistic landscaping & an outdoor festival stage, plus Lake Erie views.", "800", "E 9th Street Pier", "Cleveland", "OH", "44114", "http://www.northcoastharbor.org/", "Wheelchair accessible entrance, Wheelchair accessible parking lot", "216-664-2570");
        BusinessResource ohioCaverns = new BusinessResource("Ohio Caverns", "35-acre park features striking limestone caverns with over 2 miles of passageways & guided tours.35-acre park features striking limestone caverns with over 2 miles of passageways & guided tours.", "2210", "OH-245 E", "West Liberty", "OH", "43357", "https://ohiocaverns.com/", "Wheelchair accessible entrance, Wheelchair accessible parking lot", "937-465-4017");
        BusinessResource legoLand = new BusinessResource("LegoLand Discovery Center", "LEGOLAND(R) Discovery Center Columbus is the Ultimate Indoor LEGO Playground! Families with kids aged 3-10 will enjoy a world of play, creativity and building fun! The 36,000 square foot attraction includes 2 rides, a 4D Cinema, Ohio created in over 1.5 million LEGO bricks, 10 LEGO play zones, and much more! Explore today!", "157", "Easton Town Center", "Columbus", "OH", "43219", "https://www.legolanddiscoverycenter.com/columbus/", "Wheelchair accessible, Elevators","614-407-7721");
        BusinessResource packardMuseum = new BusinessResource("America's Packard Museum", "Large collection of preserved cars, motorcycles & artifacts in an original Packard dealership.", "420", "S Ludlow St", "Dayton", "OH", "45402", "http://www.americaspackardmuseum.com/home.html", "Wheelchair accessible entrance, Wheelchair accessible parking lot, Wheelchair accessible restroom", "937-226-1710");
        BusinessResource fireMuseum = new BusinessResource("Central Ohio Fire Museum", "1908 engine house, now a museum offering firefighting history exhibits & fire safety education.","260", "N 4th St", "Columbus", "OH", "43215","https://www.centralohiofiremuseum.com/", "Wheelchair accessible entrance, Wheelchair accessible parking lot, Restrooms", "614-464-4099");
        BusinessResource daytonAviation = new BusinessResource("Dayton Aviation Heritage National Historical Park", "A National Register Historic District honoring American aviation pioneers, with exhibits & programs.", "16", "S Williams St", "Dayton", "OH", "45402", "https://www.nps.gov/daav/contacts.htm", "Parking, Elevators, Restrooms", "937-225-7705");
        BusinessResource boonshoft = new BusinessResource("Boonshoft Museum of Discovery", "Archaeological park & all-ages science museum with a planetarium, live animals, fossils & more.", "2600", "Deweese Pkwy", "Dayton", "OH","45414", "http://www.boonshoftmuseum.org/", "Elevators, Restrooms, Wheelchair Rentals, Wheelchair accessible parking lot", "937-275-7431");
        BusinessResource otherWorld = new BusinessResource("Otherworld", "Futuristic entertainment center with interactive puzzles, immersive rooms & digitally augmented art.", "5819", "Chantry Dr", "Columbus", "OH", "43232", "https://otherworldohio.com/", "Wheelchair accessible entrance, Wheelchair accessible parking lot, Restrooms", "614-868-3631");
        BusinessResource scenicRailroad = new BusinessResource("Cuyahoga Valley Scenic Railroad", "Cuyahoga Valley Scenic Railroad is a tourist excursion railway and private sector, nonprofit 501(c)3 organization operating in partnership with Cuyahoga Valley National Park located in Northeast, Ohio. CVSR is dedicated and committed to preserving and renovating historic railcars so that they may be enjoyed by future generations. In addition to providing event excursions year-round, we also offer a membership program and have a volunteer base of more than 1,000.", "27", "Ridge St", "Akron", "OH", "44308", "https://www.cvsr.org/faq/", "Wheelchair lift, Strollers allowed", "800-468-4070");
        BusinessResource miniGolf = new BusinessResource("Alien Vacation Mini Golf Attraction at Castle Noel", "Alien-themed, black-lit 18-hole indoor mini-golf course, with animated features & 3D effects.", "260", "S Court St", "Medina", "OH", "44256", "http://www.alienvacationminigolf.com/", "Wheelchair accessible entrance, Wheelchair accessible parking lot", "330-721-1224");
        BusinessResource fossilsAndScience = new BusinessResource("Akron Fossils & Science Center", "Center devoted to creation science with fossil exhibits, a Bible history hall & outdoor activities.", "2080", "S Cleveland MAssillion Rd", "Copley", "OH", "44321", "https://www.akronfossils.org/", "Wheelchair accessible entrance, Wheelchair accessible parking lot, Wheelchair accessible restrooms", "330-665-3466");
        BusinessResource krohn = new BusinessResource("Krohn Conservatory", "Indoor botanical garden featuring 3,500+ plant species, a rainforest waterfall & butterfly shows.", "1501", "Eden Park Dr", "Cincinnati", "OH", "45202", "https://www.cincinnati-oh.gov/cincyparks/visit-a-park/find-a-parkfacility/krohn-conservatory/", "Wheelchair accessible entrance, Wheelchair accessible parking lot", "513-421-4086");
        BusinessResource undergroundRailroad = new BusinessResource("National Underground Railroad Freedom Center", "Interactive museum with film, animation & multimedia exhibits focused on slavery in America.", "50", "E Freedom Way", "Cincinnati", "OH", "45202", "https://freedomcenter.org/", "Elevator, Restroom, Wheelchair accessible parking lot, Wheelchair accessible entrance", "513-333-7500");
        BusinessResource americanSign = new BusinessResource("American Sign Museum", "Sprawling former factory space exhibiting uniquely American signage, plus a working neon shop.", "1330", "Monmouth Ave", "Cincinnati", "OH", "45225", "https://www.americansignmuseum.org/", "Wheelchair accessible entrance", "513-541-6366");
        BusinessResource newportAquarium = new BusinessResource("Newport Aquarium", "Aquarium featuring a jellyfish room, walk-through tunnels & exhibits housing penguins, rays & more.", "1", "Levee Way", "Newport", "KY", "41071", "https://www.newportaquarium.com/", "Wheelchair accessible entrance", "800-406-3474");
        BusinessResource progressiveField = new BusinessResource("Progressive Field", "Cleveland Indians home field with a mezzanine-level kid's club, concessions & youth workshops.", "2401", "Ontario St", "Cleveland", "OH", "44115", "https://www.mlb.com/cle/ballpark/index.jsp", "Wheelchair accessible entrance, Wheelchair accessible parking lot", "216-420-4487");
        BusinessResource rocketMortgage = new BusinessResource("Rocket Mortgage Field House", "Large indoor venue for pro sports such as hockey, basketball & arena football plus various concerts.", "1", "Center Court", "Cleveland", "OH", "44115", "https://www.rocketmortgagefieldhouse.com/", "Braille Signage, Automatic Doors, Braille Menus, Wheelchair escorts, Elevators, Restrooms, First aid station", "216-420-2000");
        BusinessResource rubberDucks = new BusinessResource("Canal Park", "Stadium with 8,500 seats hosting Akron RubberDucks baseball games & other entertainment.", "300", "S Main St", "Akron", "OH", "44308", "https://www.milb.com/akron", "Wheelchair accessible entrance, Wheelchair accessible parking lot", "330-253-5151");



        businessRepo.save(clevelandMetroParksZoo);
        businessRepo.save(columbusZooAndAquarium);
        businessRepo.save(akronZoo);
        businessRepo.save(cincinnatiZooAndBotanicalGarden);
        businessRepo.save(greaterClevelandAquarium);
        businessRepo.save(greatLakesScienceCenter);
        businessRepo.save(rockAndRoll);
        businessRepo.save(clevelandMuseum);
        businessRepo.save(childrenMuseum);
        businessRepo.save(internationWomensMuseum);
        businessRepo.save(voinovich);
        businessRepo.save(ohioCaverns);
        businessRepo.save(legoLand);
        businessRepo.save(packardMuseum);
        businessRepo.save(fireMuseum);
        businessRepo.save(daytonAviation);
        businessRepo.save(boonshoft);
        businessRepo.save(otherWorld);
        businessRepo.save(scenicRailroad);
        businessRepo.save(miniGolf);
        businessRepo.save(fossilsAndScience);
        businessRepo.save(krohn);
        businessRepo.save(undergroundRailroad);
        businessRepo.save(americanSign);
        businessRepo.save(newportAquarium);
        businessRepo.save(progressiveField);
        businessRepo.save(rocketMortgage);
        businessRepo.save(rubberDucks);



        LocationModel popeyes = new LocationModel("Popeyes", "123-456-7890","4242", "Great Food St", "Cleveland","Ohio","24344",10.0);

        LocationModel chickFilA = new LocationModel("Chick-fil-a","208-420-9834","6969", "Crap Ave","Vatican City", "Ohio","393434",0.0);


        locationRepo.save(popeyes);
        locationRepo.save(chickFilA);
    }
}
