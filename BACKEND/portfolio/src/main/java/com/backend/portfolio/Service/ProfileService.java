package com.backend.portfolio.Service;

import com.backend.portfolio.Entity.Profile;
import com.backend.portfolio.Repository.ProfileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.List;
import java.util.UUID;

@Service
public class ProfileService {

    private final ProfileRepo profileRepo;

    @Autowired
    public ProfileService(ProfileRepo profileRepo) {
        this.profileRepo = profileRepo;
    }

    // Create a new profile
    public Profile createProfile(Profile profile) {
        return profileRepo.save(profile);  // Save the profile to the database
    }

    // Get all profiles
    public List<Profile> getAllProfiles() {
        return profileRepo.findAll();  // Get all profiles
    }

    // Get a profile by ID
    public Optional<Profile> getProfileById(UUID id) {
        return profileRepo.findById(id);  // Get profile by ID
    }

    // Update a profile
    public Profile updateProfile(UUID id, Profile profileDetails) {
        Profile profile = profileRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Profile not found with id: " + id));

        profile.setName(profileDetails.getName());
        profile.setEmail(profileDetails.getEmail());
        profile.setPhoneNumber(profileDetails.getPhoneNumber());
        profile.setHomeTown(profileDetails.getHomeTown());
        profile.setAboutMe(profileDetails.getAboutMe());
        profile.setBrief(profileDetails.getBrief());
        profile.setDesignation(profileDetails.getDesignation());
        profile.setCompany(profileDetails.getCompany());
        profile.setImage(profileDetails.getImage());  // Update the image

        return profileRepo.save(profile);  // Save the updated profile
    }

    // Delete a profile
    public void deleteProfile(UUID id) {
        Profile profile = profileRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Profile not found with id: " + id));
        profileRepo.delete(profile);  // Delete the profile
    }
}
