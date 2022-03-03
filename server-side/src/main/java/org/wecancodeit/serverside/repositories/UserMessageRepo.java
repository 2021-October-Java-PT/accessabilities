package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.BusinessResource;
import org.wecancodeit.serverside.models.UserMessage;

import java.util.Collection;
import java.util.Optional;

public interface UserMessageRepo extends CrudRepository<UserMessage,Long> {

    Optional<UserMessage> findByusername(String username);
}
