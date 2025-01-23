package com.backend.portfolio.Service;

import com.backend.portfolio.Entity.Education;
import com.backend.portfolio.Repository.EducationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EducationService {

    private final EducationRepo educationRepo;

    @Autowired
    public EducationService(EducationRepo educationRepo) {
        this.educationRepo = educationRepo;
    }

    public List<Education> getAllEducation() {
        return educationRepo.findAll();
    }

}