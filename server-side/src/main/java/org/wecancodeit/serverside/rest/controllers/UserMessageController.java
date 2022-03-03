package org.wecancodeit.serverside.rest.controllers;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.BusinessResource;
import org.wecancodeit.serverside.models.UserMessage;
import org.wecancodeit.serverside.repositories.UserMessageRepo;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class UserMessageController {
    @Resource
    private UserMessageRepo messageRepo;

    @GetMapping("/api/user-messages")
    public Collection<UserMessage> getUserMessage() {
        return (Collection<UserMessage>) messageRepo.findAll();
    }
    @PostMapping("/api/user-messages/add-message")
    public String addUserMessage(@RequestBody String body) throws JSONException {
        JSONObject newMessage = new JSONObject(body);
        String username = newMessage.getString("username");
        String email = newMessage.getString("email");
        String phone = newMessage.getString("phoneNumber");
        String message = newMessage.getString("message");


        Optional<UserMessage> messageToAddOpt = messageRepo.findByusername(username);

        if (messageToAddOpt.isEmpty()) {
            UserMessage messageToAdd = new UserMessage(username, email,
                    phone, message);
            messageRepo.save(messageToAdd);
            return "redirect:/api/user-messages";
        }

        return "redirect:/api/user-messages";
    }
}
