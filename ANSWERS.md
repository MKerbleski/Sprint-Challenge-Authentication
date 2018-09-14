<!-- Answers to the Short Answer Essay Questions go here -->

1. What is the purpose of using _sessions_?
    the purpose of sessions is to gather and store user informations

2. What does bcrypt do to help us store passwords in a secure manner.
    bcrypt helps store password by storing a hash of the password and never the password itself. Using 1 way cryptographic hashs allows us to validate that the correct password was input with only a refrences. 

3. What does bcrypt do to slow down attackers?
    bcrypt uses 'salt' a string that is added to the users password to further secure the password in case a hacker got ahold of the hashed passwords. 

4. What are the three parts of the JSON Web Token?
    The three parts are the header, payload, and signature. The header contains information about the JWT. the Payload contains the actual information. The signature contains a hash of the header and payload as wel as a secret. 
