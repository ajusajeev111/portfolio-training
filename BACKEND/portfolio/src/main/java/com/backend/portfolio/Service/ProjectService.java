package com.backend.portfolio.Service;

import com.backend.portfolio.Entity.Project;
import com.backend.portfolio.Repository.ProjectRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ProjectService {

    private final ProjectRepo projectRepo;

    @Autowired
    public ProjectService(ProjectRepo projectRepo) {
        this.projectRepo = projectRepo;
    }

    public List<Project> getAllProjects() {
        return projectRepo.findAll();
    }

    public Optional<Project> getProjectById(UUID id) {
        return projectRepo.findById(id);
    }

    public Project addProject(Project project) {
        return projectRepo.save(project);
    }

    public Project updateProject(UUID id, Project projectDetails) {
        return projectRepo.findById(id).map(project -> {
            project.setHeading(projectDetails.getHeading());
            project.setSubHeading(projectDetails.getSubHeading());
            project.setAbout(projectDetails.getAbout());
            project.setTools(projectDetails.getTools());
            return projectRepo.save(project);
        }).orElseThrow(() -> new RuntimeException("Project not found with id " + id));
    }

    public void deleteProject(UUID id) {
        projectRepo.deleteById(id);
    }
}
