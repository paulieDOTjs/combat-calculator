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
import Skill from "../Skill/Skill";
import Throw from "../SavingThrow/SavingThrow";
import Weapon from "../Weapon/Weapon";

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
              <Throw
                Modifier={props.characterInfo.Strength}
                Ability="Strength"
                Proficient={props.characterInfo.Proficient}
                Proficiency={props.characterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <Throw
                Modifier={props.characterInfo.Intelligence}
                Ability="Intelligence"
                Proficient={props.characterInfo.Proficient}
                Proficiency={props.characterInfo.Proficiency}
              />
            </IonRow>
            <IonRow>
              <Throw
                Modifier={props.characterInfo.Dexterity}
                Ability="Dexterity"
                Proficient={props.characterInfo.Proficient}
                Proficiency={props.characterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <Throw
                Modifier={props.characterInfo.Wisdom}
                Ability="Wisdom"
                Proficient={props.characterInfo.Proficient}
                Proficiency={props.characterInfo.Proficiency}
              />
            </IonRow>
            <IonRow>
              <Throw
                Modifier={props.characterInfo.Constitution}
                Ability="Constitution"
                Proficient={props.characterInfo.Proficient}
                Proficiency={props.characterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <Throw
                Modifier={props.characterInfo.Charisma}
                Ability="Charisma"
                Proficient={props.characterInfo.Proficient}
                Proficiency={props.characterInfo.Proficiency}
              />
            </IonRow>
            <IonCardSubtitle>Skills:</IonCardSubtitle>
            <IonRow>
              <Skill
                Skill="Acrobatics"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Dexterity}
                Proficiency={props.characterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <Skill
                Skill="Animal Handling"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Wisdom}
                Proficiency={props.characterInfo.Proficiency}
              />
            </IonRow>
            <IonRow>
              <Skill
                Skill="Arcana"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Intelligence}
                Proficiency={props.characterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <Skill
                Skill="Athletics"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Strength}
                Proficiency={props.characterInfo.Proficiency}
              />
            </IonRow>
            <IonRow>
              <Skill
                Skill="Deception"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Charisma}
                Proficiency={props.characterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <Skill
                Skill="History"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Intelligence}
                Proficiency={props.characterInfo.Proficiency}
              />
            </IonRow>
            <IonRow>
              <Skill
                Skill="Insight"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Wisdom}
                Proficiency={props.characterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <Skill
                Skill="Intimidation"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Charisma}
                Proficiency={props.characterInfo.Proficiency}
              />
            </IonRow>
            <IonRow>
              <Skill
                Skill="Investigation"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Intelligence}
                Proficiency={props.characterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <Skill
                Skill="Medicine"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Wisdom}
                Proficiency={props.characterInfo.Proficiency}
              />
            </IonRow>
            <IonRow>
              <Skill
                Skill="Nature"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Intelligence}
                Proficiency={props.characterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <Skill
                Skill="Perception"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Wisdom}
                Proficiency={props.characterInfo.Proficiency}
              />
            </IonRow>
            <IonRow>
              <Skill
                Skill="Performance"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Charisma}
                Proficiency={props.characterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <Skill
                Skill="Persuasion"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Charisma}
                Proficiency={props.characterInfo.Proficiency}
              />
            </IonRow>
            <IonRow>
              <Skill
                Skill="Religion"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Intelligence}
                Proficiency={props.characterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <Skill
                Skill="Sleight Of Hand"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Dexterity}
                Proficiency={props.characterInfo.Proficiency}
              />
            </IonRow>
            <IonRow>
              <Skill
                Skill="Stealth"
                Proficient={props.characterInfo.Proficient}
                Modifier={props.characterInfo.Dexterity}
                Proficiency={props.characterInfo.Proficiency}
              />
              <IonCol sizeXs="12" sizeSm="2" sizeLg="12" sizeXl="2"></IonCol>
              <Skill
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
            <Weapon
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
