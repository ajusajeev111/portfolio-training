package com.backend.portfolio.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Education {

    @Id
    @GeneratedValue
    private Integer id;
    private String institution;
    private String qualification;
    private String passedYear;
    private String passPercentage;

}