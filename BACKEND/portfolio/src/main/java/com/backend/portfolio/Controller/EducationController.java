package com.backend.portfolio.Controller;

import com.backend.portfolio.Entity.Education;
import com.backend.portfolio.Service.EducationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/educations")
public class EducationController {

    @Autowired
    private EducationService educationService;

    @GetMapping
    public ResponseEntity<List<Education>> getAllEducation() {
        List<Education> educationList = educationService.getAllEducation();
        if (educationList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(educationList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Education> getEducationById(@PathVariable UUID id) {
        Optional<Education> education = educationService.getEducationById(id);
        return education.map(
                e -> new ResponseEntity<>(e, HttpStatus.OK)
        ).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/{id}/image")
    public ResponseEntity<byte[]> getEducationImageById(@PathVariable UUID id) {
        Optional<Education> education = educationService.getEducationById(id);

        return education.map(e -> {
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_PNG);
            return new ResponseEntity<>(e.getImage(), headers, HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }


    @PostMapping
    public ResponseEntity<Education> addEducation(
            @RequestParam("timeline") String timeline,
            @RequestParam("qualification") String qualification,
            @RequestParam("institution") String institution,
            @RequestParam("place") String place,
            @RequestParam("image") MultipartFile image) throws IOException {

        Education education = new Education();
        education.setTimeline(timeline);
        education.setQualification(qualification);
        education.setInstitution(institution);
        education.setPlace(place);
        education.setImage(image.getBytes());

        Education savedEducation = educationService.addEducation(education);
        return new ResponseEntity<>(savedEducation, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Education> updateEducation(@PathVariable UUID id, @RequestBody Education educationDetails) {
        try {
            Education updatedEducation = educationService.updateEducation(id, educationDetails);
            return new ResponseEntity<>(updatedEducation, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEducation(@PathVariable UUID id) {
        try {
            educationService.deleteEducation(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}