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


        // init user accounts for application

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

        // init data for git connection

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
        
        GitAccount privateGit = GitAccount.builder()
                .plattformUrl("git@sth.bla.whatever")
                .name("User")
                .isPublic(false)
                .creator(user)
                .build();
        privateGit = gitRepository.save(privateGit);

        // init projects for supported languages

        Project mdrSimpleGrammar = Project.builder()
                .name("Simple decision recording language")
                .owner(user)
                .level(ProjectLevel.M1)
                .build();
        Project metaGrammar = Project.builder()
                .name("The Meta Grammar")
                .owner(user)
                .level(ProjectLevel.M2)
                .build();
        Project dummyGrammar = Project.builder()
                .name("The Dummy Grammar")
                .owner(admin)
                .level(ProjectLevel.M2)
                .build();



        log.info("Initialized: " + projectRepository.save(mdrSimpleGrammar));
        log.info("Initialized: " + projectRepository.save(metaGrammar));
        log.info("Initialized: " + projectRepository.save(dummyGrammar));

        // create language server objects for which language server instances will be built and started later

        LanguageServer metaServer = LanguageServer.builder()
                .languageName("meta_model_language")
                .build();
        LanguageServer mdrSimpleServer = LanguageServer.builder()
                .languageName("simple_decision_record_language")
                .build();
        LanguageServer dummyLSP_Server = LanguageServer.builder()
                .languageName("meta_model_language")
                .build();



        // create version objects which host an existing language and its corresponding language server object

        Version metaGrammarVersion = Version.builder()
                .description("Not implemented!")
                .version("1.0.0-SNAPSHOT")
                .dslExtension("mydsl")
                .visibility(VisibilityLevel.PUBLIC)
                .project(metaGrammar)
                .languageServer(metaServer)
                .owner(user)
                .build();
        
        log.info("Initialized: " + versionRepository.save(metaGrammarVersion));
        log.info("Initialized: " + lspRepository.save(metaServer));

        Version mdrSimpleGrammarVersion = Version.builder()
                .owner(user)
                .description("BETA State")
                .version("1.0.0-SNAPSHOT")
                .dslExtension("mydsl")
                .project(mdrSimpleGrammar)
                .languageServer(mdrSimpleServer)
                .visibility(VisibilityLevel.PUBLIC)
                .grammar(metaGrammarVersion)
                .hasGenerator(true)
                .build();

        mdrSimpleGrammarVersion.addUser(admin, Permissions.OWNER);

        log.info("Initialized: " + versionRepository.save(mdrSimpleGrammarVersion));
        log.info("Initialized: " + lspRepository.save(mdrSimpleServer));


        Version dummyGrammarVersion = Version.builder()
                .owner(admin)
                .description("BETA State")
                .version("1.0.0-SNAPSHOT")
                .dslExtension("mydsl")
                .visibility(VisibilityLevel.PUBLIC)
                .project(dummyGrammar)
                .languageServer(dummyLSP_Server)
                .grammar(metaGrammarVersion)
                .hasGenerator(true)
                .build();

        dummyGrammarVersion.addUser(admin, Permissions.OWNER);

        log.info("Initialized: " + versionRepository.save(dummyGrammarVersion));
        log.info("Initialized: " + lspRepository.save(dummyLSP_Server));

        // finally, create user space projects and connect them to their langauge / LSP objects

        Project project_mdrDsl = Project.builder()
                .name("Project A")
                .description("Description of Project A.")
                .level(ProjectLevel.M0)
                .owner(user)
                .build();
        Project project_mdrSimpleDsl = Project.builder()
                .name("Project B")
                .description("Description of Project B.")
                .level(ProjectLevel.M0)
                .owner(admin)
                .build();
        Project project_dummyProject = Project.builder()
                .name("Project Dummy")
                .description("Description of Project Dummy.")
                .level(ProjectLevel.M0)
                .owner(admin)
                .build();
        log.info("Initialized: " + projectRepository.save(project_mdrDsl));
        log.info("Initialized: " + projectRepository.save(project_mdrSimpleDsl));
        log.info("Initialized: " + projectRepository.save(project_dummyProject));


        // map the projects to a project version

        Version project_mdrDsl_Version = Version.builder()
                .owner(admin)
                .description("Project A")
                .version("1.0.0-SNAPSHOT")
                .project(project_mdrDsl)
                .grammar(metaGrammarVersion)
                .visibility(VisibilityLevel.PUBLIC)
                .build();
        Version project_mdrSimpleDsl_Version = Version.builder()
                .owner(user)
                .description("Project B")
                .version("1.0.0-SNAPSHOT")
                .project(project_mdrSimpleDsl)
                .grammar(mdrSimpleGrammarVersion)
                .visibility(VisibilityLevel.PRIVATE)
                .build();
        Version project_dummyProject_Version = Version.builder()
                .owner(admin)
                .description("Project Dummy")
                .version("1.0.0-SNAPSHOT")
                .project(project_dummyProject)
                .grammar(dummyGrammarVersion)
                .visibility(VisibilityLevel.PUBLIC)
                .build();

        project_dummyProject_Version.addUser(admin, Permissions.OWNER);
        project_mdrDsl_Version.addUser(user, Permissions.OWNER);
        project_mdrSimpleDsl_Version.addUser(user, Permissions.OWNER);
        log.info("Initialized: " + versionRepository.save(project_dummyProject_Version));
        log.info("Initialized: " + versionRepository.save(project_mdrDsl_Version));
        log.info("Initialized: " + versionRepository.save(project_mdrSimpleDsl_Version));

//            Set<User> editors = new HashSet<>();
//            editors.add(user1);
//            editors.add(user2);

        // create files for virtual workspace (required for communication with LSP instance)

        File mdrSimpleGrammarFile = File.builder()
                .name(mdrSimpleGrammar.getName())
                .version(mdrSimpleGrammarVersion)
                .status(FileStatus.VALID)
                .build();
        // File mdrGrammarFile = File.builder()
        //         .name(mdrGrammar.getName())
        //         .version(mdrSimpleGrammarVersion)
        //         .build();
        File mdrSimpleDslFile = File.builder()
                .name("FirstTest")
//                    .editors(editors)
                .version(project_mdrSimpleDsl_Version)
                .build();
        File mdrDslFile = File.builder()
                .name("Super")
//                    .editors(editors)
                .version(project_mdrDsl_Version)
                .build();

        log.info("Initialized: " + fileRepository.save(mdrSimpleGrammarFile));
        // log.info("Initialized: " + fileRepository.save(mdrGrammarFile));
        log.info("Initialized: " + fileRepository.save(mdrSimpleDslFile));
        log.info("Initialized: " + fileRepository.save(mdrDslFile));
    }
}
