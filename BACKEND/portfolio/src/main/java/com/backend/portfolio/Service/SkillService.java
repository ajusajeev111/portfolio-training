package com.backend.portfolio.Service;

import com.backend.portfolio.Entity.Skill;
import com.backend.portfolio.Repository.SkillRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class SkillService {

    @Autowired
    private SkillRepo skillRepo;

    // Get all skills
    public List<Skill> getAllSkills() {
        return skillRepo.findAll();
    }

    // Get skill by ID
    public Optional<Skill> getSkillById(UUID id) {
        return skillRepo.findById(id);
    }

    // Add a new skill
    public Skill addSkill(Skill skill) {
        return skillRepo.save(skill);
    }

    // Update an existing skill
    public Skill updateSkill(UUID id, Skill skillDetails) {
        return skillRepo.findById(id)
                .map(skill -> {
                    skill.setName(skillDetails.getName());
                    skill.setDomain(skillDetails.getDomain());
                    skill.setProficiency(skillDetails.getProficiency());
                    skill.setImage(skillDetails.getImage());
                    return skillRepo.save(skill);
                })
                .orElseThrow(() -> new RuntimeException("Skill not found with id: " + id));
    }

    // Delete skill by ID
    public void deleteSkill(UUID id) {
        skillRepo.deleteById(id);
    }
}
