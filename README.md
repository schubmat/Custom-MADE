# Custom-MADE
Custom-MAnangement of DEcision -- A DSL based approach to capture and manage your decisions during a software development project

## Vision

Documenting decisions helps to preserve knowledge over a long time to diminish software erosion and to ease maintenance and refactoring. However, the capture and structured use of decisions in practice is still limited. There is an oversupply of models to capture decisions and a clear lack of tools to help deal with this oversupply. In addition, existing tools have rarely gone beyond the prototype stage.	Therefore, with   _Custom-MADE_ we want to develop a subtle tool chain to support the process of recording decision as an integral part of agile software development. In order to do so, it will be the task of this software development project to select, combine and integrate existing techniques into a tool chain. This tool chain is supposed to support two main use cases:

* Support modelling a decision capture DSL on the basis of which decision will be recorded by the end-user (software developers most likely).
* Provide the end-user with a full fledged web-based editor that complies to the defined decision DSL (providing a full language infrastructure) Instead of ordinary _Markdown Templates_ this editor should be used to capture decisions. Additionally, the editor should be augmented with a software supporting the export of recorded decisions to standard formats as well as self-defined formats (e.g., PDF, MD, etc.)

## Get Started

* Clone the project
* Enter the project
* Run `bash run.sh` and it will start the application in three screens. 
  * You can view more information about the currently running screens with `screen -x`. Enter one of them with `screen -x NNNN` where `NNNN` is the listed pid of the desired screen. 
  * Over time more screens should pop up which run an instance of a language server each. 
* Stop the project and close everything with `bash stop.sh`.


## Compilation and Usage

### System requirements
 
* A not too ancient Linux or MacOS. Windows is currently not supported.
* A somewhat capable CPU. For any language available (default in 04/2021 are two languages) Custom-MADE is going to compile an entire Xtext project including LSP-Binding. 

### Dependencies

For successful compilation and execution, the following software is required:

* `screen` -- **GNU Screen**
  * the start-up scripts use `screen` to start the separate processes
  * Screen version 4.08 has been tested and is working
* `maven` -- **Apache Maven**
  * for compiling the _Xtext_ grammars
  * validating and transforming _DSLs_
* `java` -- **Java Programming Language**
  * JDK 11 and JDK 13 have been tested
* `npm` -- **Node Package Manager**
  * Used to compile the ReactJS front-end
* `node.js` -- **Node Package Manager**
  * Used to compile the ReactJS front-end

## Issues and Bug Reports

Feel free to submit issues and enhancement requests.

Please use the [Issues](https://github.com/schubmat/Custom-MADE/issues) tab to report specific bugs and errors.

## Contributing

Please refer to each project's style and contribution guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.

 1. **Fork** the repo on GitHub
 2. **Clone** the project to your own machine
 3. **Commit** changes to your own branch
 4. **Push** your work back up to your fork
 5. Submit a **Pull request** so that we can review your changes

NOTE: 
  * Be sure to merge the latest from "upstream" before making a pull request!
  * Besides, feel free to submit issues as described above.

## Known Issues

* `org.gradle.api.UncheckedIOException: Could not add entry org.gradle.api.UncheckedIOException: Could not add entry ...`
   * The DSL languages fail to build in the server-backend. Try deleting your local `.gradle` folder in your home directory. The first build will take forever. However, it will most likely solve the issue.


## License

 * MIT

## Contact

* GitHub issue tracker: [issue tracker](https://github.com/schubmat/Custom-MADE/issues)
* Project owner: [schubmat](https://github.com/schubmat)