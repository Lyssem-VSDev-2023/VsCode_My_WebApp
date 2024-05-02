Paste this in your launch.json file:

{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Debug App",
            "url": "http://localhost:5173",
            "webRoot": "${workspaceFolder}/src",
            "sourceMapPathOverrides": {
                "webpack:///./src/*": "${webRoot}/*"
            },
            "runtimeArgs": [
                "--remote-debugging-port=9222"
            ],
            "sourceMaps": true
        }
    ]
}
And then in package.json

 "scripts": {
    "dev": "vite --port 5173 --host",