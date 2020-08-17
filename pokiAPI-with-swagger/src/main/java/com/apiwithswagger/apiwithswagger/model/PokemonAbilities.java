package com.apiwithswagger.apiwithswagger.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PokemonAbilities {

    @JsonProperty("ability")
    public PokemonAbility ability = new PokemonAbility();

    @JsonProperty("is_hidden")
    public Boolean isHidden;

    @JsonProperty("slot")
    public Long slot;
}
