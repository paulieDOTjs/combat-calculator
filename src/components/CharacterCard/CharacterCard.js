import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonRow,
  IonCol,
  IonCardContent
} from "@ionic/react";
import CharacterSkill from "../CharacterSkill/CharacterSkill";
import CharacterWeapon from "../CharacterWeapon/CharacterWeapon";

function CharacterCard(props) {
  function calculateSkill(ability) {
    const calculation = Math.floor((ability - 10) / 2);
    return calculation;
  }

  return (
    <>
      <IonCol sizeXs="12" sizeLg="6">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>{props.characterInfo.Name}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonCardSubtitle>Misc.</IonCardSubtitle>
            <IonRow>
              <IonCol sizeXs="6" sizeSm="3">
                <IonRow>
                  <IonCol size="12">Armor Class:</IonCol>
                  <IonCol size="12">{props.characterInfo.ArmorClass}</IonCol>
                </IonRow>
              </IonCol>
              <IonCol sizeXs="6" sizeSm="3">
                <IonRow>
                  <IonCol size="12">Initiative:</IonCol>
                  <IonCol size="12">
                    {calculateSkill(props.characterInfo.Dexterity)}
                  </IonCol>
                </IonRow>
              </IonCol>
              <IonCol sizeXs="6" sizeSm="3">
                <IonRow>
                  <IonCol size="12">Move Speed:</IonCol>
                  <IonCol size="12">{props.characterInfo.MoveSpeed}</IonCol>
                </IonRow>
              </IonCol>
              <IonCol sizeXs="6" sizeSm="3">
                <IonRow>
                  <IonCol size="12">Proficiency:</IonCol>
                  <IonCol size="12">{props.characterInfo.Proficiency}</IonCol>
                </IonRow>
              </IonCol>
            </IonRow>
            <IonCardSubtitle>Ability Scores:</IonCardSubtitle>
            <IonRow>
              <IonCol sizeXs="5" sizeSm="3" sizeLg="5" sizeXl="3">
                Strength
              </IonCol>
              <IonCol sizeXs="3" sizeSm="1" sizeLg="3" sizeXl="1">
                {props.characterInfo.Strength}
              </IonCol>
              <IonCol sizeXs="3" sizeSm="1" sizeLg="3" sizeXl="1">
                Roll
              </IonCol>
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <IonCol sizeXs="5" sizeSm="3" sizeLg="5" sizeXl="3">
                Intelligence
              </IonCol>
              <IonCol sizeXs="3" sizeSm="1" sizeLg="3" sizeXl="1">
                {props.characterInfo.Intelligence}
              </IonCol>
              <IonCol sizeXs="3" sizeSm="1" sizeLg="3" sizeXl="1">
                Roll
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol sizeXs="5" sizeSm="3" sizeLg="5" sizeXl="3">
                Dexterity
              </IonCol>
              <IonCol sizeXs="3" sizeSm="1" sizeLg="3" sizeXl="1">
                {props.characterInfo.Dexterity}
              </IonCol>
              <IonCol sizeXs="3" sizeSm="1" sizeLg="3" sizeXl="1">
                Roll
              </IonCol>
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <IonCol sizeXs="5" sizeSm="3" sizeLg="5" sizeXl="3">
                Wisdom
              </IonCol>
              <IonCol sizeXs="3" sizeSm="1" sizeLg="3" sizeXl="1">
                {props.characterInfo.Wisdom}
              </IonCol>
              <IonCol sizeXs="3" sizeSm="1" sizeLg="3" sizeXl="1">
                Roll
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol sizeXs="5" sizeSm="3" sizeLg="5" sizeXl="3">
                Constitution
              </IonCol>
              <IonCol sizeXs="3" sizeSm="1" sizeLg="3" sizeXl="1">
                {props.characterInfo.Constitution}
              </IonCol>
              <IonCol sizeXs="3" sizeSm="1" sizeLg="3" sizeXl="1">
                Roll
              </IonCol>
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <IonCol sizeXs="5" sizeSm="3" sizeLg="5" sizeXl="3">
                Charisma
              </IonCol>
              <IonCol sizeXs="3" sizeSm="1" sizeLg="3" sizeXl="1">
                {props.characterInfo.Charisma}
              </IonCol>
              <IonCol sizeXs="3" sizeSm="1" sizeLg="3" sizeXl="1">
                Roll
              </IonCol>
            </IonRow>
            <IonCardSubtitle>Saving Throws:</IonCardSubtitle>
            <IonRow>
              <IonCol sizeXs="5" sizeSm="3" sizeLg="5" sizeXl="3">
                Strength
              </IonCol>
              <IonCol sizeXs="3" sizeSm="1" sizeLg="3" sizeXl="1">
                {props.characterInfo.Proficient.find(
                  element => element === "Strength"
                ) !== undefined
                  ? props.characterInfo.Strength +
                    props.characterInfo.Proficiency
                  : props.characterInfo.Strength}
              </IonCol>
              <IonCol sizeXs="3" sizeSm="1" sizeLg="3" sizeXl="1">
                Roll
              </IonCol>
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <IonCol sizeXs="5" sizeSm="3" sizeLg="5" sizeXl="3">
                Intelligence
              </IonCol>
              <IonCol sizeXs="3" sizeSm="1" sizeLg="3" sizeXl="1">
                {props.characterInfo.Proficient.find(
                  element => element === "Intelligence"
                ) !== undefined
                  ? props.characterInfo.Intelligence +
                    props.characterInfo.Proficiency
                  : props.characterInfo.Intelligence}
              </IonCol>
              <IonCol sizeXs="3" sizeSm="1" sizeLg="3" sizeXl="1">
                Roll
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol sizeXs="5" sizeSm="3" sizeLg="5" sizeXl="3">
                Dexterity
              </IonCol>
              <IonCol sizeXs="3" sizeSm="1" sizeLg="3" sizeXl="1">
                {props.characterInfo.Proficient.find(
                  element => element === "Dexterity"
                ) !== undefined
                  ? props.characterInfo.Dexterity +
                    props.characterInfo.Proficiency
                  : props.characterInfo.Dexterity}
              </IonCol>
              <IonCol sizeXs="3" sizeSm="1" sizeLg="3" sizeXl="1">
                Roll
              </IonCol>
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <IonCol sizeXs="5" sizeSm="3" sizeLg="5" sizeXl="3">
                Wisdom
              </IonCol>
              <IonCol sizeXs="3" sizeSm="1" sizeLg="3" sizeXl="1">
                {props.characterInfo.Proficient.find(
                  element => element === "Wisdom"
                ) !== undefined
                  ? props.characterInfo.Wisdom + props.characterInfo.Proficiency
                  : props.characterInfo.Wisdom}
              </IonCol>
              <IonCol sizeXs="3" sizeSm="1" sizeLg="3" sizeXl="1">
                Roll
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol sizeXs="5" sizeSm="3" sizeLg="5" sizeXl="3">
                Constitution
              </IonCol>
              <IonCol sizeXs="3" sizeSm="1" sizeLg="3" sizeXl="1">
                {props.characterInfo.Proficient.find(
                  element => element === "Constitution"
                ) !== undefined
                  ? props.characterInfo.Constitution +
                    props.characterInfo.Proficiency
                  : props.characterInfo.Constitution}
              </IonCol>
              <IonCol sizeXs="3" sizeSm="1" sizeLg="3" sizeXl="1">
                Roll
              </IonCol>
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <IonCol sizeXs="5" sizeSm="3" sizeLg="5" sizeXl="3">
                Charisma
              </IonCol>
              <IonCol sizeXs="3" sizeSm="1" sizeLg="3" sizeXl="1">
                {props.characterInfo.Proficient.find(
                  element => element === "Charisma"
                ) !== undefined
                  ? props.characterInfo.Charisma +
                    props.characterInfo.Proficiency
                  : props.characterInfo.Charisma}
              </IonCol>
              <IonCol sizeXs="3" sizeSm="1" sizeLg="3" sizeXl="1">
                Roll
              </IonCol>
            </IonRow>
            <IonCardSubtitle>Skills:</IonCardSubtitle>
            <IonRow>
              <CharacterSkill
                Skill="Acrobatics"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Dexterity}
                Proficiency={props.characterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <CharacterSkill
                Skill="Animal Handling"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Wisdom}
                Proficiency={props.characterInfo.Proficiency}
              />
            </IonRow>
            <IonRow>
              <CharacterSkill
                Skill="Arcana"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Intelligence}
                Proficiency={props.characterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <CharacterSkill
                Skill="Athletics"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Strength}
                Proficiency={props.characterInfo.Proficiency}
              />
            </IonRow>
            <IonRow>
              <CharacterSkill
                Skill="Deception"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Charisma}
                Proficiency={props.characterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <CharacterSkill
                Skill="History"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Intelligence}
                Proficiency={props.characterInfo.Proficiency}
              />
            </IonRow>
            <IonRow>
              <CharacterSkill
                Skill="Insight"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Wisdom}
                Proficiency={props.characterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <CharacterSkill
                Skill="Intimidation"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Charisma}
                Proficiency={props.characterInfo.Proficiency}
              />
            </IonRow>
            <IonRow>
              <CharacterSkill
                Skill="Investigation"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Intelligence}
                Proficiency={props.characterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <CharacterSkill
                Skill="Medicine"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Wisdom}
                Proficiency={props.characterInfo.Proficiency}
              />
            </IonRow>
            <IonRow>
              <CharacterSkill
                Skill="Nature"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Intelligence}
                Proficiency={props.characterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <CharacterSkill
                Skill="Perception"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Wisdom}
                Proficiency={props.characterInfo.Proficiency}
              />
            </IonRow>
            <IonRow>
              <CharacterSkill
                Skill="Performance"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Charisma}
                Proficiency={props.characterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <CharacterSkill
                Skill="Persuasion"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Charisma}
                Proficiency={props.characterInfo.Proficiency}
              />
            </IonRow>
            <IonRow>
              <CharacterSkill
                Skill="Religion"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Intelligence}
                Proficiency={props.characterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <CharacterSkill
                Skill="Sleight Of Hand"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Dexterity}
                Proficiency={props.characterInfo.Proficiency}
              />
            </IonRow>
            <IonRow>
              <CharacterSkill
                Skill="Stealth"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Dexterity}
                Proficiency={props.characterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <CharacterSkill
                Skill="Survival"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Wisdom}
                Proficiency={props.characterInfo.Proficiency}
              />
            </IonRow>
            <IonCardSubtitle>Weapons</IonCardSubtitle>
            <IonRow>
              <IonCol>Name: </IonCol>
              <IonCol>To hit: </IonCol>
              <IonCol>Damage: </IonCol>
              <IonCol>Range: </IonCol>
              <IonCol></IonCol>
            </IonRow>
            <CharacterWeapon
              Name="Axe"
              ToHit={
                calculateSkill(props.characterInfo.Strength) +
                props.characterInfo.Proficiency
              }
              Damage={
                calculateSkill(props.characterInfo.Strength) >= 0
                  ? "1D6 + " + calculateSkill(props.characterInfo.Strength)
                  : "1D6 " + calculateSkill(props.characterInfo.Strength)
              }
              Range="Melee"
            />
          </IonCardContent>
        </IonCard>
      </IonCol>
    </>
  );
}

export default CharacterCard;
