package com.backend.portfolio.Repository;

import com.backend.portfolio.Entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepo extends JpaRepository<Project, Integer> {
}