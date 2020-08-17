package com.apiwithswagger.apiwithswagger.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Pokemon extends  BasePokemon {

    public Long baseExperience;

    @JsonProperty("height")
    public Long height;

    @JsonProperty("abilities")
    public List<PokemonAbilities> abilities = new ArrayList<>();


    @JsonProperty("moves")
    public List<PokemonMoves> moves = new ArrayList<>();

    @JsonProperty("location_area_encounters")
    public String locationAreaEncounters;

    @JsonProperty("species")
    public Species species = new Species();


    //TODO
//    public List<HeldItem> heldItem = new ArrayList<>();

    //TODO add stats
//    public List<Stats> stats = new ArrayList<>();

}
