//1. Target the form element in the DOM.
const form = document.querySelector('form');
  
//2. Attach an event listener to the form element to listen for any change events.
form.addEventListener('change', event => {
    const currentCheckbox = event.target;
    const combatStyle = currentCheckbox.dataset.combatStyle;
    const conflictingCombatStyles = document.querySelectorAll(`[data-combat-style=${combatStyle}]`);

    for (let i = 0; i < conflictingCombatStyles.length; i++) {
        const conflictingCheckbox = conflictingCombatStyles[i];
        conflictingCheckbox.disabled = currentCheckbox.checked && conflictingCheckbox !== currentCheckbox;
    }
})

//3. Inside the event listener:
//  - Target the checkbox that triggered the change event.
//  - Get the combat style of the triggering checkbox from its data-combat-style attribute.
//  - Select all checkboxes from the DOM that share the same combat style as the triggering checkbox.
  
//3a. Next, loop over each checkbox with the matching combat style:
//  - If: the checkbox being looped over is NOT the one that triggered the event,
//    and the triggering checkbox is checked, then:
//    - Disable the checkbox currently being looped over.
//  - Else:
//    - Do not change its state.
