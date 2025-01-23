package com.backend.portfolio.Entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Project {

    @Id
    @GeneratedValue
    private Integer id;
    private String heading;
    private String subHeading;
    private String about;

}