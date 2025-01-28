package com.backend.portfolio.Controller;

import com.backend.portfolio.Entity.Profile;
import com.backend.portfolio.Service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;

@RestController
@RequestMapping("/api/profiles")
public class ProfileController {

    private final ProfileService profileService;

    @Autowired
    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }

    // Create a new profile with image
    @PostMapping
    public ResponseEntity<Map<String, Object>> createProfileWithImage(
            @RequestParam("name") String name,
            @RequestParam("email") String email,
            @RequestParam("phoneNumber") String phoneNumber,
            @RequestParam("homeTown") String homeTown,
            @RequestParam("aboutMe") String aboutMe,
            @RequestParam("brief") String brief,
            @RequestParam("designation") String designation,
            @RequestParam("company") String company,
            @RequestParam("image") MultipartFile image) throws IOException {

        Profile profile = new Profile();
        profile.setName(name);
        profile.setEmail(email);
        profile.setPhoneNumber(phoneNumber);
        profile.setHomeTown(homeTown);
        profile.setAboutMe(aboutMe);
        profile.setBrief(brief);
        profile.setDesignation(designation);
        profile.setCompany(company);
        profile.setImage(image.getBytes());  // Convert image to byte array

        Profile savedProfile = profileService.createProfile(profile);  // Save the profile with image
        Map<String, Object> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Profile created successfully");
        response.put("data", savedProfile);
        return new ResponseEntity<>(response, HttpStatus.CREATED); // 201 if profile is created
    }

    // Get all profiles
    @GetMapping
    public ResponseEntity<Map<String, Object>> getAllProfiles() {
        List<Profile> profiles = profileService.getAllProfiles();
        Map<String, Object> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Profiles retrieved successfully");
        response.put("data", profiles);
        return ResponseEntity.ok(response);
    }

    // Get a profile by ID
    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> getProfileById(@PathVariable UUID id) {
        Optional<Profile> profile = profileService.getProfileById(id);
        if (profile.isPresent()) {
            Map<String, Object> response = new HashMap<>();
            response.put("status", "success");
            response.put("message", "Profile retrieved successfully");
            response.put("data", profile.get());
            return ResponseEntity.ok(response);
        } else {
            Map<String, Object> response = new HashMap<>();
            response.put("status", "error");
            response.put("message", "Profile not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
    }

    // Update a profile
    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> updateProfile(
            @PathVariable UUID id,
            @RequestBody Profile profileDetails) {
        Profile updatedProfile = profileService.updateProfile(id, profileDetails);
        Map<String, Object> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Profile updated successfully");
        response.put("data", updatedProfile);
        return ResponseEntity.ok(response);
    }

    // Delete a profile
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> deleteProfile(@PathVariable UUID id) {
        profileService.deleteProfile(id);
        Map<String, Object> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Profile deleted successfully");
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(response);
    }
}
