package de.btu.swt.backend.security;

import org.springframework.security.core.AuthenticationException;

class InvalidJwtAuthenticationException extends AuthenticationException {
    InvalidJwtAuthenticationException(String e) {
        super(e);
    }
}
