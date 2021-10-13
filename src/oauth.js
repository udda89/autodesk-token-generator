//
// Copyright (c) 2019 Autodesk, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//

/*jshint esversion: 9 */

const ForgeSDK = require('./../index');

// TODO - insert your CLIENT_ID and CLIENT_SECRET
const FORGE_CLIENT_ID = 'ySrXMvmJ9qMcwHbWXOvQG7EmFkGAsGpl';
const FORGE_CLIENT_SECRET = '4O4eDVRQweSio5Ka';

// Initialize the 2-legged oauth2 client
const oAuth2TwoLegged = new ForgeSDK.AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET,
	['data:write', 'data:read', 'bucket:read', 'bucket:update', 'bucket:create'], true);

// oAuth2TwoLegged.authenticate()
// 	.then((credentials) => {
// 		console.log("**** Got Credentials", credentials);
// 	})
// 	.catch (err => {
// 		console.error('\x1b[31m Error:', err, '\x1b[0m');
// 	});

exports.generateToken = async function(req, res) {
    try {
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		let credentials = await oAuth2TwoLegged.authenticate();
		console.log("**** Got Credentials", credentials);
        res.jsonp(credentials);
	} catch (ex) {
		console.error('\x1b[31m Error:', ex, '\x1b[0m');
	}
};

(async () => {
	try {
		let credentials = await oAuth2TwoLegged.authenticate();
		console.log("**** Got Credentials", credentials);
	} catch (ex) {
		console.error('\x1b[31m Error:', ex, '\x1b[0m');
	}
})();