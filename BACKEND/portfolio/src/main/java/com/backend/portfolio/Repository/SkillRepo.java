package com.backend.portfolio.Repository;

import com.backend.portfolio.Entity.Skill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SkillRepo extends JpaRepository<Skill, Integer> {
}