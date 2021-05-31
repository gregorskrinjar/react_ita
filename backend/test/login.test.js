process.env.NODE_ENV = 'test';
const axios = require('axios');
require('mysql2/node_modules/iconv-lite').encodingExists('foo');

describe("Test POST /api/v1/login", () => {
   
        it("Post should login", async () => {
            // Send a POST request
            const result = await axios
                .post('http://localhost:8090/api/v1/login', {
                    email: "gre@gmail.com",
                    password: "geslo123"
                }).catch((err) => {
                    console.log("Error axios: ", err);
                });
                extractStatus(JSON.parse(JSON.stringify(result.status)), result.data.message, result.data.token);
            })

            it("Post should not login", async () => {
                // Send a POST request
                const result = await axios
                    .post('http://localhost:8090/api/v1/login', {
                        email: "gre@gmail.com",
                        password: "geslo"
                    }).catch((err) => {
                        console.log("Error axios: ", err);
                    });
                    extractStatus(JSON.parse(JSON.stringify(result.status)), result.data.message, result.data.token);
                })

            
})

const extractStatus = (status, message, token) => {
    const info = status;
    parseInt(info, 10);
    if (info === 200 && token !== null) {
        expect(info).toEqual(200);
        expect(info).toBe(200);
        expect(message).toBe('Dobrodošli nazaj');
      } 
    else {
        expect(info).toEqual(202);
        expect(info).toBe(202);
        expect(message).toBe('Email ali geslo se ne ujema!');
    }
};