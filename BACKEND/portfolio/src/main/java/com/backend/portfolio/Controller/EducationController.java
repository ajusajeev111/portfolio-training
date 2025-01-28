package com.backend.portfolio.Controller;

import com.backend.portfolio.Entity.Education;
import com.backend.portfolio.Service.EducationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/educations")
public class EducationController {

    @Autowired
    private EducationService educationService;

    // Create or Update Education
    @PostMapping
    public ResponseEntity<Education> createOrUpdateEducation(@RequestBody Education education) {
        Education savedEducation = educationService.saveEducation(education);
        return ResponseEntity.ok(savedEducation);
    }

    // Get all Educations
    @GetMapping
    public ResponseEntity<List<Education>> getAllEducations() {
        List<Education> educations = educationService.getAllEducations();
        return ResponseEntity.ok(educations);
    }

    // Get Education by ID
    @GetMapping("/{id}")
    public ResponseEntity<Education> getEducationById(@PathVariable UUID id) {
        Optional<Education> education = educationService.getEducationById(id);
        return education.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Delete Education by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEducation(@PathVariable UUID id) {
        educationService.deleteEducation(id);
        return ResponseEntity.noContent().build();
    }
}
