package de.btu.swt.backend.lsp;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LspRepository extends JpaRepository<LanguageServer, Long> {
}
