package org.wecancodeit.serverside.rest.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.serverside.models.BusinessResource;
import org.wecancodeit.serverside.models.UserMessage;
import org.wecancodeit.serverside.repositories.UserMessageRepo;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
@CrossOrigin
public class UserMessageController {
    @Resource
    private UserMessageRepo messageRepo;

    @GetMapping("/api/user-messages")
    public Collection<UserMessage> getUserMessage() {
        return (Collection<UserMessage>) messageRepo.findAll();
    }

}
