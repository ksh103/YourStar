package com.ssafy.yourstar.domain.admin.request;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NewAccountRes {
    private String email;
    private String password;

    @JsonCreator
    public NewAccountRes(@JsonProperty(value = "email") String email,
                         @JsonProperty(value = "password") String password) {
        this.email = email;
        this.password = password;
    }
}
