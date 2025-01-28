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
    private EducationRepo educationRepository;

    // Create or Update Education
    public Education saveEducation(Education education) {
        return educationRepository.save(education);
    }

    // Get all Educations
    public List<Education> getAllEducations() {
        return educationRepository.findAll();
    }

    // Get Education by ID
    public Optional<Education> getEducationById(UUID id) {
        return educationRepository.findById(id);
    }

    // Delete Education by ID
    public void deleteEducation(UUID id) {
        educationRepository.deleteById(id);
    }
}
