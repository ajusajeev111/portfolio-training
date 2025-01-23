package com.backend.portfolio.Controller;

import com.backend.portfolio.Entity.Profile;
import com.backend.portfolio.Service.ProfileService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.Optional;

@RestController
@RequestMapping("/profile")
public class ProfileController {

    private final ProfileService profileService;

    public ProfileController(ProfileService profileService){
        this.profileService=profileService;
    }

    @GetMapping("/{id}")
    public Optional<Profile> getProfile(@PathVariable Integer id) {
        return profileService.getProfile(id);
    }
}