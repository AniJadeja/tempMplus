/*
* server/features/auth/signup/model/index.js
*
* Copyright (C) 2024 Anirudhdhsinh Jadeja - All Rights  Reserved
* You may use and modify the code to support the needs of Mplus
* Application. You  may  add your name  as the author under the
* original author name.
*
* Under  no  circumstances  the  code  should be distributed to
* anyone who is not  a part  of Mplus  application  development
* team.
*
* @originalAuthor Anirudhdhsinh Jadeja
* Version 1.0.0.0
* @application mplus-admin-server
*/

const { getUID } = require("@services");
/* 
* User class to create a new user 
* @param schemaVersion
* @param uid
* @param email
* @param password
* @param role
* @param createdAt
* @param updatedAt
* @param dataCollection
* @param reportCollection
* @param status
* @param updatedBy
* @param metadata
* @return User object
*
* supports user model of database
*/
class UserModel {

    constructor(
        
            schemaVersion = 1, 
            uid = getUID().toString(), 
            email, 
            password, 
            role = 'user', 
            createdAt = new Date(), 
            updatedAt = new Date(), 
            dataCollection = "none", 
            reportCollection = "none", 
            status = true, 
            updatedBy = 'system', 
            metadata = {}
        
        ){
        this.schemaVersion = schemaVersion;
        this.uid = uid;
        this.email = email;
        this.password = password;
        this.role = role;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.dataCollection = dataCollection;
        this.reportCollection = reportCollection;
        this.status = status;
        this.updatedBy = updatedBy;
        this.metadata = metadata;
    }

}

// Export the class
module.exports = {
    UserModel
};
