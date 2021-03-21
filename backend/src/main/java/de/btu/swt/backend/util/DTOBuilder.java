package de.btu.swt.backend.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import org.hibernate.Hibernate;

import java.util.Collection;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class DTOBuilder<T> {

    protected final T obj;
    private final Map dto;

    public DTOBuilder(T obj) {
        this.obj = (T) Hibernate.unproxy(obj);
        ObjectMapper oMapper = new ObjectMapper();
        oMapper.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);
        dto = oMapper.convertValue(this.obj, Map.class);
    }

    public Map build() {
        return dto;
    }

    protected void putSingle(String attrName, Object obj) {
        if(obj instanceof Collection)
            throw new IllegalArgumentException("Use putCollection for collections");
        dto.put(attrName, new DTOBuilder(obj).build());
    }

    protected void putCollection(String attrName, Collection collection) {
        Set<Object> set = new HashSet<>();
        for (Object elem : collection) {
            set.add(new DTOBuilder(elem).build());
        }
        dto.put(attrName, set);
    }

    protected void deleteField(String[] keyPath) {
        Map field = dto;
        for (int i = 0; i < keyPath.length-1; ++i) {
            String key = keyPath[i];
            Object obj = field.get(key);
            if (obj == null)
                return;
            if (obj instanceof Map)
                field = (Map) obj;
            else
                throw new IllegalArgumentException("path contains non objects");
        }
        field.remove(keyPath[keyPath.length-1]);
    }
}
