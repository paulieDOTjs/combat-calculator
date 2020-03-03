import React, { useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonRow,
  IonCol,
  IonCardContent
} from "@ionic/react";
import AbilityScore from "../AbilityScore/AbilityScore";
import SavingThrow from "../SavingThrow/SavingThrow";
import Skill from "../Skill/Skill";
import Weapon from "../Weapon/Weapon";
import RollButton from "../RollButton/RollButton";

function CharacterCard(props) {
  const [recentRoll, setRecentRoll] = useState();

  function calculateSkill(ability) {
    const calculation = Math.floor((ability - 10) / 2);
    return calculation;
  }

  return (
    <>
      <IonCol sizeXs="12" sizeLg="6">
        <IonCard>
          <IonCardHeader>
            <IonRow>
              <IonCol>
                <IonCardTitle>{props.CharacterInfo.Name}</IonCardTitle>
              </IonCol>
              <IonCol>
                <IonCardTitle>Roll Result: {recentRoll}</IonCardTitle>
              </IonCol>
            </IonRow>
          </IonCardHeader>

          <IonCardContent>
            <IonCardSubtitle>Misc.</IonCardSubtitle>
            <IonRow>
              <IonCol sizeXs="6" sizeSm="3">
                <IonRow>
                  <IonCol size="12">Armor Class:</IonCol>
                  <IonCol size="12">{props.CharacterInfo.ArmorClass}</IonCol>
                </IonRow>
              </IonCol>
              <IonCol sizeXs="6" sizeSm="3">
                <IonRow>
                  <IonCol size="12">Initiative:</IonCol>
                  <IonCol size="12">
                    {calculateSkill(props.CharacterInfo.Dexterity)}
                  </IonCol>
                </IonRow>
              </IonCol>
              <IonCol sizeXs="6" sizeSm="3">
                <IonRow>
                  <IonCol size="12">Move Speed:</IonCol>
                  <IonCol size="12">{props.CharacterInfo.MoveSpeed}</IonCol>
                </IonRow>
              </IonCol>
              <IonCol sizeXs="6" sizeSm="3">
                <IonRow>
                  <IonCol size="12">Proficiency:</IonCol>
                  <IonCol size="12">{props.CharacterInfo.Proficiency}</IonCol>
                </IonRow>
              </IonCol>
            </IonRow>

            <IonCardSubtitle>Ability Scores:</IonCardSubtitle>
            <IonRow>
              <AbilityScore
                Modifier={props.CharacterInfo.Strength}
                Ability="Strength"
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <AbilityScore
                Modifier={props.CharacterInfo.Intelligence}
                Ability="Intelligence"
              />
            </IonRow>
            <IonRow>
              <AbilityScore
                Modifier={props.CharacterInfo.Dexterity}
                Ability="Dexterity"
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <AbilityScore
                Modifier={props.CharacterInfo.Wisdom}
                Ability="Wisdom"
              />
            </IonRow>
            <IonRow>
              <AbilityScore
                Modifier={props.CharacterInfo.Constitution}
                Ability="Constitution"
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <AbilityScore
                Modifier={props.CharacterInfo.Charisma}
                Ability="Charisma"
              />
            </IonRow>

            <IonCardSubtitle>Saving Throws:</IonCardSubtitle>
            <IonRow>
              <SavingThrow
                Ability="Strength"
                setRecentRoll={setRecentRoll}
                Modifier={props.CharacterInfo.Strength}
                Proficient={props.CharacterInfo.Proficient}
                Proficiency={props.CharacterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <SavingThrow
                Ability="Intelligence"
                setRecentRoll={setRecentRoll}
                Modifier={props.CharacterInfo.Intelligence}
                Proficient={props.CharacterInfo.Proficient}
                Proficiency={props.CharacterInfo.Proficiency}
              />
            </IonRow>
            <IonRow>
              <SavingThrow
                Ability="Dexterity"
                setRecentRoll={setRecentRoll}
                Modifier={props.CharacterInfo.Dexterity}
                Proficient={props.CharacterInfo.Proficient}
                Proficiency={props.CharacterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <SavingThrow
                Ability="Wisdom"
                setRecentRoll={setRecentRoll}
                Modifier={props.CharacterInfo.Wisdom}
                Proficient={props.CharacterInfo.Proficient}
                Proficiency={props.CharacterInfo.Proficiency}
              />
            </IonRow>
            <IonRow>
              <SavingThrow
                Ability="Constitution"
                setRecentRoll={setRecentRoll}
                Modifier={props.CharacterInfo.Constitution}
                Proficient={props.CharacterInfo.Proficient}
                Proficiency={props.CharacterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <SavingThrow
                Ability="Charisma"
                setRecentRoll={setRecentRoll}
                Modifier={props.CharacterInfo.Charisma}
                Proficient={props.CharacterInfo.Proficient}
                Proficiency={props.CharacterInfo.Proficiency}
              />
            </IonRow>
            <IonCardSubtitle>Skills:</IonCardSubtitle>
            <IonRow>
              <Skill
                Skill="Acrobatics"
                setRecentRoll={setRecentRoll}
                Proficient={props.CharacterInfo.Proficient}
                Modifier={props.CharacterInfo.Dexterity}
                Proficiency={props.CharacterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <Skill
                Skill="Animal Handling"
                setRecentRoll={setRecentRoll}
                Proficient={props.CharacterInfo.Proficient}
                Modifier={props.CharacterInfo.Wisdom}
                Proficiency={props.CharacterInfo.Proficiency}
              />
            </IonRow>
            <IonRow>
              <Skill
                Skill="Arcana"
                setRecentRoll={setRecentRoll}
                Proficient={props.CharacterInfo.Proficient}
                Modifier={props.CharacterInfo.Intelligence}
                Proficiency={props.CharacterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <Skill
                Skill="Athletics"
                setRecentRoll={setRecentRoll}
                Proficient={props.CharacterInfo.Proficient}
                Modifier={props.CharacterInfo.Strength}
                Proficiency={props.CharacterInfo.Proficiency}
              />
            </IonRow>
            <IonRow>
              <Skill
                Skill="Deception"
                setRecentRoll={setRecentRoll}
                Proficient={props.CharacterInfo.Proficient}
                Modifier={props.CharacterInfo.Charisma}
                Proficiency={props.CharacterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <Skill
                Skill="History"
                setRecentRoll={setRecentRoll}
                Proficient={props.CharacterInfo.Proficient}
                Modifier={props.CharacterInfo.Intelligence}
                Proficiency={props.CharacterInfo.Proficiency}
              />
            </IonRow>
            <IonRow>
              <Skill
                Skill="Insight"
                setRecentRoll={setRecentRoll}
                Proficient={props.CharacterInfo.Proficient}
                Modifier={props.CharacterInfo.Wisdom}
                Proficiency={props.CharacterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <Skill
                Skill="Intimidation"
                setRecentRoll={setRecentRoll}
                Proficient={props.CharacterInfo.Proficient}
                Modifier={props.CharacterInfo.Charisma}
                Proficiency={props.CharacterInfo.Proficiency}
              />
            </IonRow>
            <IonRow>
              <Skill
                Skill="Investigation"
                setRecentRoll={setRecentRoll}
                Proficient={props.CharacterInfo.Proficient}
                Modifier={props.CharacterInfo.Intelligence}
                Proficiency={props.CharacterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <Skill
                Skill="Medicine"
                setRecentRoll={setRecentRoll}
                Proficient={props.CharacterInfo.Proficient}
                Modifier={props.CharacterInfo.Wisdom}
                Proficiency={props.CharacterInfo.Proficiency}
              />
            </IonRow>
            <IonRow>
              <Skill
                Skill="Nature"
                setRecentRoll={setRecentRoll}
                Proficient={props.CharacterInfo.Proficient}
                Modifier={props.CharacterInfo.Intelligence}
                Proficiency={props.CharacterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <Skill
                Skill="Perception"
                setRecentRoll={setRecentRoll}
                Proficient={props.CharacterInfo.Proficient}
                Modifier={props.CharacterInfo.Wisdom}
                Proficiency={props.CharacterInfo.Proficiency}
              />
            </IonRow>
            <IonRow>
              <Skill
                Skill="Performance"
                setRecentRoll={setRecentRoll}
                Proficient={props.CharacterInfo.Proficient}
                Modifier={props.CharacterInfo.Charisma}
                Proficiency={props.CharacterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <Skill
                Skill="Persuasion"
                setRecentRoll={setRecentRoll}
                Proficient={props.CharacterInfo.Proficient}
                Modifier={props.CharacterInfo.Charisma}
                Proficiency={props.CharacterInfo.Proficiency}
              />
            </IonRow>
            <IonRow>
              <Skill
                Skill="Religion"
                setRecentRoll={setRecentRoll}
                Proficient={props.CharacterInfo.Proficient}
                Modifier={props.CharacterInfo.Intelligence}
                Proficiency={props.CharacterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <Skill
                Skill="Sleight Of Hand"
                setRecentRoll={setRecentRoll}
                Proficient={props.CharacterInfo.Proficient}
                Modifier={props.CharacterInfo.Dexterity}
                Proficiency={props.CharacterInfo.Proficiency}
              />
            </IonRow>
            <IonRow>
              <Skill
                Skill="Stealth"
                setRecentRoll={setRecentRoll}
                Proficient={props.CharacterInfo.Proficient}
                Modifier={props.CharacterInfo.Dexterity}
                Proficiency={props.CharacterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <Skill
                Skill="Survival"
                setRecentRoll={setRecentRoll}
                Proficient={props.CharacterInfo.Proficient}
                Modifier={props.CharacterInfo.Wisdom}
                Proficiency={props.CharacterInfo.Proficiency}
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
            <Weapon
              CharacterInfo={props.CharacterInfo}
              Name="Axe"
              Damage="1D6"
              Range="Melee"
            />
          </IonCardContent>
        </IonCard>
      </IonCol>
    </>
  );
}

export default CharacterCard;
