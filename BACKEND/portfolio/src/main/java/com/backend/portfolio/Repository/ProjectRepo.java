package com.backend.portfolio.Repository;

import com.backend.portfolio.Entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ProjectRepo extends JpaRepository<Project, UUID> {
}