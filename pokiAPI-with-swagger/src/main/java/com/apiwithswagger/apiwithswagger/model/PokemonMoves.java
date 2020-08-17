package com.apiwithswagger.apiwithswagger.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
public class PokemonMoves {

    @JsonProperty("move")
    public PokemonMove move = new PokemonMove();
}
