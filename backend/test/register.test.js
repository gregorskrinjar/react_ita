process.env.NODE_ENV = 'test';
const axios = require('axios');
require('mysql2/node_modules/iconv-lite').encodingExists('foo');

describe("Test POST /api/v1/register", () => {
   
        it("Post status register", async () => {
            // Send a POST request
            const result = await axios
                .post('http://localhost:8090/api/v1/register', {
                    fullName: "Gregor",
                    email: "gre@gmail.com",
                    password: "geslo123"
                }).catch((err) => {
                    console.log("Error axios: ", err);
                });
                extractStatus(JSON.parse(JSON.stringify(result.status)), result.data.message);
            })     
            
})

const extractStatus = (status, message) => {
    const info = status;
    parseInt(info, 10);
    if (info === 200) {
        expect(info).toEqual(200);
        expect(info).toBe(200);
        expect(message).toBe('Hvala, da ste se registrirali!');
      } 
    else {
        expect(info).toEqual(202);
        expect(info).toBe(202);
        expect(message).toBe('Uporabnik s tem emailom že obstaja!');
    }
    };