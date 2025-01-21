package com.backend.portfolio.Repository;

import com.backend.portfolio.Entity.Education;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EducationRepo extends JpaRepository<Education, Integer>{
}