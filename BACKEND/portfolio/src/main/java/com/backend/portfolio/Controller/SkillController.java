package com.backend.portfolio.Controller;

import com.backend.portfolio.Entity.Skill;
import com.backend.portfolio.Service.SkillService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/skills")
public class SkillController {

    @Autowired
    private SkillService skillService;

    // Get all skills
    @GetMapping
    public ResponseEntity<List<Skill>> getAllSkills() {
        List<Skill> skills = skillService.getAllSkills();
        if (skills.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); // 204 if no skills found
        }
        return new ResponseEntity<>(skills, HttpStatus.OK); // 200 if skills found
    }

    // Get skill by ID
    @GetMapping("/{id}")
    public ResponseEntity<Skill> getSkillById(@PathVariable UUID id) {
        Optional<Skill> skill = skillService.getSkillById(id);
        return skill.map(
                s -> new ResponseEntity<>(s, HttpStatus.OK) // 200 if skill found
        ).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND)); // 404 if skill not found
    }

    // Add a new skill
    @PostMapping
    public ResponseEntity<Skill> addSkill(
            @RequestParam("name") String name,
            @RequestParam("domain") String domain,
            @RequestParam("proficiency") String proficiency,
            @RequestParam("image") MultipartFile image) throws IOException {

        Skill skill = new Skill();
        skill.setName(name);
        skill.setDomain(domain);
        skill.setProficiency(proficiency);
        skill.setImage(image.getBytes());  // Convert image to byte array

        Skill savedSkill = skillService.addSkill(skill);  // Save the skill with image
        return new ResponseEntity<>(savedSkill, HttpStatus.CREATED); // 201 if skill is added
    }

    // Update an existing skill
    @PutMapping("/{id}")
    public ResponseEntity<Skill> updateSkill(@PathVariable UUID id, @RequestBody Skill skillDetails) {
        try {
            Skill updatedSkill = skillService.updateSkill(id, skillDetails);
            return new ResponseEntity<>(updatedSkill, HttpStatus.OK); // 200 if updated successfully
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // 404 if skill not found
        }
    }

    // Delete a skill by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteSkill(@PathVariable UUID id) {
        try {
            skillService.deleteSkill(id); // Assuming this method throws an exception if the skill is not found
            return ResponseEntity.ok("Skill Deleted Successfuly"); // 204 No Content
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Skill not found.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while deleting the skill.");
        }
    }
}
