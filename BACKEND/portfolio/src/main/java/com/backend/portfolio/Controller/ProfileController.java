package com.backend.portfolio.Controller;

import com.backend.portfolio.Entity.Profile;
import com.backend.portfolio.Service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {

    private final ProfileService profileService;

    @Autowired
    public ProfileController(ProfileService profileService){
        this.profileService=profileService;
    }

    @GetMapping
    public ResponseEntity<List<Profile>> getProfile() {
        List<Profile> profileList = profileService.getAllProfile();
        return ResponseEntity.ok(profileList);
    }
}