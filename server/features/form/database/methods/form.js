/*
 * ./server/features/form/database/methods/form.js
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

// Libraries
const Form = require("@features/form/database/model/form")();

/*
* The function is used to create a new form
* @param {Object} form
* @returns {Object} response
*/

  const createForm = async (form) => {
    try {
      // Check if the form exists
      const form = await Form.findOne({ formName: formName });
        if (form) throw new ErrorX(400, "Form already exists");

        // Create a new form
        const newForm = await Form.create(form);

        if (!newForm) throw new ErrorX(400, "Form not created");

        // Check if the form was actually created
        const existingForm = await Form.findOne({ formName:
        formName });
        if (!existingForm) throw new ErrorX(400, "Form not created");

        // Return the response
        const response = {
            success: "true",
            message: "Form created successfully"
        }

        return response;
    }
    catch (error) {
        if (error instanceof ErrorX) throw new ErrorX(error.code, error.message)
        // If there is an error, then throw an error
        else return { error: error.message };
    }

}


// Export the functions
module.exports = {
    createForm,
};
