export const prefix = 'Interaction';
/** The interaction field to update. This is valid based on we only allow users update one field at a time. */
export var Field;
(function (Field) {
    Field["Event"] = "Event";
    Field["Identifier"] = "Identifier";
    Field["Profile"] = "Profile";
    Field["BindMfa"] = "BindMfa";
    Field["Mfa"] = "Mfa";
})(Field || (Field = {}));
/** Method to verify the identifier */
export var Method;
(function (Method) {
    Method["Password"] = "Password";
    Method["VerificationCode"] = "VerificationCode";
    Method["Social"] = "Social";
})(Method || (Method = {}));
export var Action;
(function (Action) {
    /** Create a new entity. (E.g. create an interaction, create a verification code) */
    Action["Create"] = "Create";
    /** Update an existing entity. (E.g. change interaction type) */
    Action["Update"] = "Update";
    /** Submit updated info to an entity, or submit to the system. (E.g. submit an interaction, submit a verification code to get verified) */
    Action["Submit"] = "Submit";
    /** Delete a existing entity. (E.g delete profile ) */
    Action["Delete"] = "Delete";
    /** Change an entity to the end state. (E.g. end an interaction) */
    Action["End"] = "End";
})(Action || (Action = {}));
