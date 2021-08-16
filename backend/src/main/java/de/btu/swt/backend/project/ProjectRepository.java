package de.btu.swt.backend.project;


import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Long> {

    List<Project> findByName(String name);
    List<Project> findByLevel(ProjectLevel level);

}
