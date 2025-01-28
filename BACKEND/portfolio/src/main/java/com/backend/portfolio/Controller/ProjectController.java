package com.backend.portfolio.Controller;

import com.backend.portfolio.Entity.Project;
import com.backend.portfolio.Service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "https://localhost:3000")
@RequestMapping("/api/projects")
public class ProjectController {

    private final ProjectService projectService;

    @Autowired
    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping
    public ResponseEntity<Map<String, Object>> getAllProjects() {
        List<Project> projects = projectService.getAllProjects();
        Map<String, Object> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Projects retrieved successfully");
        response.put("data", projects);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> getProjectById(@PathVariable UUID id) {
        Optional<Project> project = projectService.getProjectById(id);
        Map<String, Object> response = new HashMap<>();
        if (project.isPresent()) {
            response.put("status", "success");
            response.put("message", "Project retrieved successfully");
            response.put("data", project.get());
            return ResponseEntity.ok(response);
        } else {
            response.put("status", "error");
            response.put("message", "Project not found");
            response.put("data", null);
            return ResponseEntity.status(404).body(response);
        }
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> addProject(@RequestBody Project project) {
        Project createdProject = projectService.addProject(project);
        Map<String, Object> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Project created successfully");
        response.put("data", createdProject);
        return ResponseEntity.status(201).body(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> updateProject(@PathVariable UUID id, @RequestBody Project projectDetails) {
        Project updatedProject = projectService.updateProject(id, projectDetails);
        Map<String, Object> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Project updated successfully");
        response.put("data", updatedProject);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> deleteProject(@PathVariable UUID id) {
        projectService.deleteProject(id);
        Map<String, Object> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Project deleted successfully");
        response.put("data", null);
        return ResponseEntity.status(204).body(response);
    }
}
