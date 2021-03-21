package de.btu.swt.backend.git;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface GitAccountRepository extends JpaRepository<GitAccount, Long> {

    @Query("SELECT g FROM GitAccount g WHERE g.plattformUrl = :plattformUrl and g.name = :name")
    GitAccount findGitAccount(@Param("plattformUrl") String plattformUrl, @Param("name") String name);
}
