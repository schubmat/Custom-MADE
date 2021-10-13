package de.btu.swt.backend.util;

import com.fasterxml.jackson.annotation.JsonIgnore;

public final class Constants {
	
	public static final String THEIA_SETTINGS_FILE_CONTENTS = 
			"{\n"
			+ "    \"editor.lineNumbers\": \"on\",\n"
			+ "    \"editor.tabSize\": 4,\n"
			+ "    \"files.exclude\": {\n"
			+ "        \"**/.theia\": true,\n"
			+ "        \"**/backup\": true,\n"
			+ "        \"**/remote\": true,\n"
			+ "        \"**/src-gen\": true,\n"
			+ "        \"**/src/**/**.md\": true,\n"
			+ "    }\n"
			+ "}";

	public static final String THEIA_SETTINGS_FILE = "settings.json";
	public static final String THEIA_CONFIGURATION_DIRECTORY = ".theia";
	public static final String GENERAL_FILES_DIRECTORY = "files";
	public static final String RAW_FILES_DIRECTORY = "src";
	public static final String EXPORT_FILES_DIRECTORY = "gen";
	public static final String REMOTE_FILES_DIRECTORY = "remotes";
}
