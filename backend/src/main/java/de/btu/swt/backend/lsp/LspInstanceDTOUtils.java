//package de.btu.swt.backend.lsp;
//
//import java.util.HashMap;
//import java.util.Map;
//
//public enum LspInstanceDTOUtils {
//    id, port, lsp, user;
//
//    static Map<String, Object> lspInstanceToDTO(LspInstance lspInstance) {
//        Map<String, Object> lspInstanceModel = new HashMap<>();
//        lspInstanceModel.put(id.name(), lspInstance.getId());
//        lspInstanceModel.put(port.name(), lspInstance.getPort());
//        lspInstanceModel.put(lsp.name(), lspInstance.getLanguageServer().getId());
//        return lspInstanceModel;
//    }
//}
