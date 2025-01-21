package com.backend.portfolio.Repository;

import com.backend.portfolio.Entity.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepo extends JpaRepository<Profile, Integer> {
}