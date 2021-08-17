@if "%DEBUG%" == "" @echo off
@rem ##########################################################################
@rem
@rem  mydsl-socket startup script for Windows
@rem
@rem ##########################################################################

@rem Set local scope for the variables with windows NT shell
if "%OS%"=="Windows_NT" setlocal

set DIRNAME=%~dp0
if "%DIRNAME%" == "" set DIRNAME=.
set APP_BASE_NAME=%~n0
set APP_HOME=%DIRNAME%..

@rem Add default JVM options here. You can also use JAVA_OPTS and MYDSL_SOCKET_OPTS to pass JVM options to this script.
set DEFAULT_JVM_OPTS=

@rem Find java.exe
if defined JAVA_HOME goto findJavaFromJavaHome

set JAVA_EXE=java.exe
%JAVA_EXE% -version >NUL 2>&1
if "%ERRORLEVEL%" == "0" goto init

echo.
echo ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.
echo.
echo Please set the JAVA_HOME variable in your environment to match the
echo location of your Java installation.

goto fail

:findJavaFromJavaHome
set JAVA_HOME=%JAVA_HOME:"=%
set JAVA_EXE=%JAVA_HOME%/bin/java.exe

if exist "%JAVA_EXE%" goto init

echo.
echo ERROR: JAVA_HOME is set to an invalid directory: %JAVA_HOME%
echo.
echo Please set the JAVA_HOME variable in your environment to match the
echo location of your Java installation.

goto fail

:init
@rem Get command-line arguments, handling Windows variants

if not "%OS%" == "Windows_NT" goto win9xME_args

:win9xME_args
@rem Slurp the command line arguments.
set CMD_LINE_ARGS=
set _SKIP=2

:win9xME_args_slurp
if "x%~1" == "x" goto execute

set CMD_LINE_ARGS=%*

:execute
@rem Setup the command line

set CLASSPATH=%APP_HOME%\lib\grammar_MDR_simplified-1.0.0-SNAPSHOT.jar;%APP_HOME%\lib\org.xtext.example.mydsl-1.0.0-SNAPSHOT.jar;%APP_HOME%\lib\org.xtext.example.mydsl.websockets-1.0.0-SNAPSHOT.jar;%APP_HOME%\lib\org.eclipse.xtext.xbase.ide-2.16.0.jar;%APP_HOME%\lib\org.eclipse.sprotty.xtext-0.7.0.jar;%APP_HOME%\lib\org.eclipse.xtext.ide-2.18.0.jar;%APP_HOME%\lib\slf4j-simple-1.6.1.jar;%APP_HOME%\lib\slf4j-api-1.7.22.jar;%APP_HOME%\lib\org.eclipse.sprotty.server-0.7.0.jar;%APP_HOME%\lib\org.eclipse.sprotty.layout-0.7.0.jar;%APP_HOME%\lib\org.eclipse.elk.alg.layered-0.6.1.jar;%APP_HOME%\lib\commons-beanutils-1.9.4.jar;%APP_HOME%\lib\org.eclipse.xtext.xbase-2.16.0.jar;%APP_HOME%\lib\org.eclipse.xtext.common.types-2.16.0.jar;%APP_HOME%\lib\org.eclipse.xtext-2.18.0.jar;%APP_HOME%\lib\Java-WebSocket-1.3.8.jar;%APP_HOME%\lib\org.eclipse.emf.ecore.change-2.11.0.jar;%APP_HOME%\lib\org.eclipse.lsp4j-0.8.0.jar;%APP_HOME%\lib\org.eclipse.sprotty-0.7.0.jar;%APP_HOME%\lib\org.eclipse.lsp4j.generator-0.8.0.jar;%APP_HOME%\lib\org.eclipse.lsp4j.jsonrpc-0.8.0.jar;%APP_HOME%\lib\gson-2.8.2.jar;%APP_HOME%\lib\javax.websocket-api-1.0.jar;%APP_HOME%\lib\org.eclipse.elk.alg.common-0.6.1.jar;%APP_HOME%\lib\org.eclipse.elk.core-0.6.1.jar;%APP_HOME%\lib\commons-logging-1.2.jar;%APP_HOME%\lib\commons-collections-3.2.2.jar;%APP_HOME%\lib\org.eclipse.xtext.util-2.18.0.jar;%APP_HOME%\lib\org.eclipse.xtend.lib-2.18.0.jar;%APP_HOME%\lib\log4j-1.2.17.jar;%APP_HOME%\lib\org.eclipse.equinox.common-3.10.200.jar;%APP_HOME%\lib\org.eclipse.osgi-3.13.200.jar;%APP_HOME%\lib\org.eclipse.elk.graph-0.6.1.jar;%APP_HOME%\lib\org.eclipse.emf.common-2.12.0.jar;%APP_HOME%\lib\org.eclipse.emf.ecore.xmi-2.12.0.jar;%APP_HOME%\lib\guice-3.0.jar;%APP_HOME%\lib\antlr-runtime-3.2.jar;%APP_HOME%\lib\javax.inject-1.jar;%APP_HOME%\lib\asm-commons-7.0.jar;%APP_HOME%\lib\org.eclipse.xtend.lib.macro-2.18.0.jar;%APP_HOME%\lib\org.eclipse.xtext.xbase.lib-2.18.0.jar;%APP_HOME%\lib\guava-21.0.jar;%APP_HOME%\lib\org.eclipse.emf.ecore-2.12.0.jar;%APP_HOME%\lib\asm-analysis-7.0.jar;%APP_HOME%\lib\asm-tree-7.0.jar;%APP_HOME%\lib\asm-7.0.jar;%APP_HOME%\lib\aopalliance-1.0.jar

@rem Execute mydsl-socket
"%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %MYDSL_SOCKET_OPTS%  -classpath "%CLASSPATH%" org.xtext.example.mydsl.ide.diagram.launch.GraphicalServerLauncher %CMD_LINE_ARGS%

:end
@rem End local scope for the variables with windows NT shell
if "%ERRORLEVEL%"=="0" goto mainEnd

:fail
rem Set variable MYDSL_SOCKET_EXIT_CONSOLE if you need the _script_ return code instead of
rem the _cmd.exe /c_ return code!
if  not "" == "%MYDSL_SOCKET_EXIT_CONSOLE%" exit 1
exit /b 1

:mainEnd
if "%OS%"=="Windows_NT" endlocal

:omega
