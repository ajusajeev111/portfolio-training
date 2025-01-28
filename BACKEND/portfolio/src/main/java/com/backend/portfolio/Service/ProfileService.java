package com.backend.portfolio.Service;

import com.backend.portfolio.Entity.Profile;
import com.backend.portfolio.Entity.Project;
import com.backend.portfolio.Repository.ProfileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfileService {

    private final ProfileRepo profileRepo;

    @Autowired
    public ProfileService(ProfileRepo profileRepo){
        this.profileRepo = profileRepo;
    }

    public List<Profile> getAllProfile(){
        List<Profile> profileList = profileRepo.findAll();
        System.out.println("Fetched from Repository: " + profileList);
        return profileRepo.findAll();
    }
}
