package de.btu.swt.backend.util;

import lombok.extern.slf4j.Slf4j;

import java.io.IOException;
import java.net.ServerSocket;

@Slf4j
public final class Port {

    /**
     * @return A free port number if there is a free port or -1 otherwise.
     */
    public static int getPort() {
        try {
            ServerSocket socket = new ServerSocket(0);
            int port = socket.getLocalPort();
            socket.close();
            return port;
        } catch (IOException e) {
            log.error(e.getMessage());
            return -1;
        }
    }
}
