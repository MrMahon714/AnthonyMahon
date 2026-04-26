test('Integration Test: Login API should return JSON with an id', async () =>
    {
        //Ping the live server
        const response = await fetch('http://anthonymahon.xyz/LAMPAPI/Login.php',
            {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ login: "fakeuser", password: "fakepassword" })
            });

        const data = await response.json();

        //Even with a fake login, the API should respond with JSON containing an 'error' or 'id'
        expect(data).toHaveProperty('id');
        expect(data).toHaveProperty('error');
    });
