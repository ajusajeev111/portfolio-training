package com.backend.portfolio.Service;

import com.backend.portfolio.Entity.Profile;
import com.backend.portfolio.Repository.ProfileRepo;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProfileService {

    private final ProfileRepo profileRepo;

    public ProfileService(ProfileRepo profileRepo){
        this.profileRepo = profileRepo;
    }
    public Optional<Profile> getProfile(Integer id) {
        return profileRepo.findById(id);
    }
}
