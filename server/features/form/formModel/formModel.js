/*
 * ./server/features/form/formModel/formModel.js
 *
 * Copyright (C) 2024 Aniruddhsinh Jadeja - All Rights  Reserved
 * You may use and modify the code to support the needs of Mplus
 * Application. You  may  add your name  as the author under the
 * original author name.
 *
 * Under  no  circumstances  the  code  should be distributed to
 * anyone who is not  a part  of Mplus  application  development
 * team.
 *
 * @originalAuthor Aniruddhsinh Jadeja
 * Version 1.0.0.0
 * @application MPlus
 */

class FormModel {
  constructor(
    schemaVersion = "1.0.0",
    formId = "123",
    formName = "defaultForm",
    formDescription = "Default Description",
    formType = "default",
    formStatus = "enabled",
    formVersion = "1.0.0",
    formFields = ["default"],
    createdBy = "system",
    updatedBy = "system",
    metadata = {}
  ) {
    this.schemaVersion = schemaVersion;
    this.formId = formId;
    this.formName = formName;
    this.formDescription = formDescription;
    this.formType = formType;
    this.formStatus = formStatus;
    this.formVersion = formVersion;
    this.formFields = formFields;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
    this.metadata = metadata;
  }
}

module.exports = FormModel;
