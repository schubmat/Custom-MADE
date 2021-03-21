package de.btu.swt.backend;

import de.btu.swt.backend.file.File;
import de.btu.swt.backend.file.FileRepository;
import de.btu.swt.backend.file.FileStatus;
import de.btu.swt.backend.lsp.LanguageServer;
import de.btu.swt.backend.lsp.LspRepository;
import de.btu.swt.backend.project.Project;
import de.btu.swt.backend.project.ProjectLevel;
import de.btu.swt.backend.project.ProjectRepository;
import de.btu.swt.backend.project.VisibilityLevel;
import de.btu.swt.backend.git.GitAccount;
import de.btu.swt.backend.git.GitAccountRepository;
import de.btu.swt.backend.user.Role;
import de.btu.swt.backend.user.User;
import de.btu.swt.backend.user.UserRepository;
import de.btu.swt.backend.version.Permissions;
import de.btu.swt.backend.version.Version;
import de.btu.swt.backend.version.VersionRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.annotation.PostConstruct;

@Configuration
@Slf4j
public class DataInitializer {
    private final PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ProjectRepository projectRepository;
    @Autowired
    private FileRepository fileRepository;
    @Autowired
    private LspRepository lspRepository;
    @Autowired
    private VersionRepository versionRepository;
    @Autowired
    private GitAccountRepository gitRepository;

    @Autowired
    public DataInitializer(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @PostConstruct
    void initData() {
        GitAccount btuGit = GitAccount.builder()
                .plattformUrl("git@git.informatik.tu-cottbus.de")
                .name("Custom-MADE_")
                .isPublic(true)
                .build();
        GitAccount testGit = GitAccount.builder()
                .plattformUrl("git@mattes.schubbe.test.de")
                .name("schubmat")
                .isPublic(true)
                .build();
        btuGit = gitRepository.save(btuGit);
        testGit = gitRepository.save(testGit);

        User user = User.builder()
                .username("user")
                .password(this.passwordEncoder.encode("password"))
                .role(Role.USER)
                .email("schubmat@b-tu.de")
                .build();
        User admin = User.builder()
                .username("admin")
                .password(this.passwordEncoder.encode("password"))
                .role(Role.ADMIN)
                .email("schubmat@b-tu.de")
                .build();
        user = userRepository.save(user);
        admin = userRepository.save(admin);
        GitAccount privateGit = GitAccount.builder()
                .plattformUrl("git@sth.bla.whatever")
                .name("User")
                .isPublic(false)
                .creator(user)
                .build();
        privateGit = gitRepository.save(privateGit);

            Project mdrSimpleGrammar = Project.builder()
                    .name("MDR Simple")
                    .owner(user)
                    .level(ProjectLevel.M1)
                    .build();
            Project mdrGrammar = Project.builder()
                    .name("MDR")
                    .owner(user)
                    .level(ProjectLevel.M1)
                    .build();
            Project metaGrammar = Project.builder()
                    .name("The Meta Grammar")
                    .owner(user)
                    .level(ProjectLevel.M2)
                    .build();

            log.info("Initialized: " + projectRepository.save(mdrSimpleGrammar));
            log.info("Initialized: " + projectRepository.save(mdrGrammar));
            log.info("Initialized: " + projectRepository.save(metaGrammar));

            LanguageServer metaServer = LanguageServer.builder()
                    .languageName("grammar_MDR_simplified")
                    .build();
            LanguageServer mdrServer = LanguageServer.builder()
                    .languageName("grammar_MDR")
                    .build();
            LanguageServer mdrSimpleServer = LanguageServer.builder()
                    .languageName("grammar_MDR_simplified")
                    .build();
            Version metaGrammarVersion = Version.builder()
                    .description("Not implemented!")
                    .version("1.0.0-SNAPSHOT")
                    .dslExtension("xtext")
                    .visibility(VisibilityLevel.PUBLIC)
                    .project(metaGrammar)
                    .languageServer(metaServer)
                    .owner(admin)
                    .build();
            log.info("Initialized: " + versionRepository.save(metaGrammarVersion));

            Version mdrGrammarVersion = Version.builder()
                    .owner(admin)
                    .description("from the xtext example")
                    .version("1.0.0-SNAPSHOT")
                    .dslExtension("mydsl")
                    .project(mdrGrammar)
                    .languageServer(mdrServer)
                    .visibility(VisibilityLevel.PUBLIC)
                    .grammar(metaGrammarVersion)
                    .build();
            Version mdrSimpleGrammarVersion = Version.builder()
                    .owner(user)
                    .description("")
                    .version("1.0.0-SNAPSHOT")
                    .dslExtension("mydsl")
                    .project(mdrSimpleGrammar)
                    .languageServer(mdrSimpleServer)
                    .visibility(VisibilityLevel.PRIVATE)
                    .grammar(metaGrammarVersion)
                    .hasGenerator(true)
                    .build();
            mdrGrammarVersion.addUser(admin, Permissions.OWNER);
            mdrSimpleGrammarVersion.addUser(admin, Permissions.OWNER);

            log.info("Initialized: " + versionRepository.save(mdrGrammarVersion));
            log.info("Initialized: " + versionRepository.save(mdrSimpleGrammarVersion));
            log.info("Initialized: " + lspRepository.save(mdrServer));
            log.info("Initialized: " + lspRepository.save(mdrSimpleServer));



            Project mdrDsl = Project.builder()
                    .name("Project A")
                    .description("Description of Project A.")
                    .level(ProjectLevel.M0)
                    .owner(user)
                    .build();
            Project mdrSimpleDsl = Project.builder()
                    .name("Project B")
                    .description("Description of Project B.")
                    .level(ProjectLevel.M0)
                    .owner(admin)
                    .build();
            log.info("Initialized: " + projectRepository.save(mdrDsl));
            log.info("Initialized: " + projectRepository.save(mdrSimpleDsl));

            Version mdrDslVersion = Version.builder()
                    .owner(admin)
                    .description("Project 1")
                    .version("1.0.0-SNAPSHOT")
                    .project(mdrDsl)
                    .grammar(mdrGrammarVersion)
                    .visibility(VisibilityLevel.PUBLIC)
                    .build();
            Version mdrSimpleDslVersion = Version.builder()
                    .owner(user)
                    .description("Project 2")
                    .version("1.0.0-SNAPSHOT")
                    .project(mdrSimpleDsl)
                    .grammar(mdrSimpleGrammarVersion)
                    .visibility(VisibilityLevel.PRIVATE)
                    .build();

            mdrDslVersion.addUser(admin, Permissions.OWNER);
            mdrSimpleDslVersion.addUser(user, Permissions.OWNER);
            log.info("Initialized: " + versionRepository.save(mdrDslVersion));
            log.info("Initialized: " + versionRepository.save(mdrSimpleDslVersion));

//            Set<User> editors = new HashSet<>();
//            editors.add(user1);
//            editors.add(user2);

            File mdrSimpleGrammarFile = File.builder()
                    .name(mdrSimpleGrammar.getName())
                    .version(mdrSimpleGrammarVersion)
                    .status(FileStatus.VALID)
                    .build();
            File mdrGrammarFile = File.builder()
                    .name(mdrGrammar.getName())
                    .version(mdrGrammarVersion)
                    .build();
            File mdrSimpleDslFile = File.builder()
                    .name("FirstTest")
//                    .editors(editors)
                    .version(mdrSimpleDslVersion)
                    .build();
            File mdrDslFile = File.builder()
                    .name("Super")
//                    .editors(editors)
                    .version(mdrDslVersion)
                    .build();

            log.info("Initialized: " + fileRepository.save(mdrSimpleGrammarFile));
            log.info("Initialized: " + fileRepository.save(mdrGrammarFile));
            log.info("Initialized: " + fileRepository.save(mdrSimpleDslFile));
            log.info("Initialized: " + fileRepository.save(mdrDslFile));
    }
}
