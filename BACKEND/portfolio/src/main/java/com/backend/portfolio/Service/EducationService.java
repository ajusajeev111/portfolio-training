package com.backend.portfolio.Service;

import com.backend.portfolio.Entity.Education;
import com.backend.portfolio.Repository.EducationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class EducationService {

    @Autowired
    private EducationRepo educationRepo;

    public List<Education> getAllEducation() {
        return educationRepo.findAll();
    }

    public Optional<Education> getEducationById(UUID id) {
        return educationRepo.findById(id);
    }

    public Education addEducation(Education education) {
        return educationRepo.save(education);
    }

    public Education updateEducation(UUID id, Education educationDetails) {
        return educationRepo.findById(id).map(education -> {
            education.setTimeline(educationDetails.getTimeline());
            education.setQualification(educationDetails.getQualification());
            education.setInstitution(educationDetails.getInstitution());
            education.setPlace(educationDetails.getPlace());
            education.setImage(educationDetails.getImage());
            return educationRepo.save(education);
        }).orElseThrow(() -> new RuntimeException("Education not found"));
    }

    public void deleteEducation(UUID id) {
        educationRepo.deleteById(id);
    }
}
