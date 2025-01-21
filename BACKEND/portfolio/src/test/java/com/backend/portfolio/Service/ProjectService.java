package com.backend.portfolio.Service;

import com.backend.portfolio.Entity.Project;
import com.backend.portfolio.Repository.ProjectRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    private final ProjectRepo projectRepo;

    @Autowired
    public ProjectService(ProjectRepo projectRepo){
        this.projectRepo = projectRepo;
    }

    public List<Project> getAllProject(){
        return projectRepo.findAll();
    }

}