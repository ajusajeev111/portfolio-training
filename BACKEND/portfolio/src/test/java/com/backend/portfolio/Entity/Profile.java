package com.backend.portfolio.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Profile {

    @Id
    @GeneratedValue
    private Integer id;
    private String name;
    private String email;
    private String phoneNumber;
    private String homeTown;
    private String aboutMe;
}