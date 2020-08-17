package com.apiwithswagger.apiwithswagger.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BaseNameAndUrl {

    @JsonProperty("name")
    public String name;

    @JsonProperty("url")
    public String url;
}
