package com.backend.portfolio.Service;

import com.backend.portfolio.Entity.Skill;
import com.backend.portfolio.Repository.SkillRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SkillService {

    private final SkillRepo skillRepo;

    @Autowired
    public SkillService(SkillRepo skillRepo) {
        this.skillRepo = skillRepo;
    }

    public List<Skill> getAllSkill() {
        return skillRepo.findAll();
    }
}
