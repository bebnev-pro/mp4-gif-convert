1. Don't forget to install dependencies in all 3 subfolders by the `npm install` command.

2. Firstly, create a container from the file (`swarm/ffmpeg/docker-compose.yaml`) with the docker-compose build command.

3. After that, an image will be created. Take its hash and publish it to the registry with the command:
   `docker tag <hash> <account/name>`
   `docker push <account/name>`

4. Now we need to raise the stack from the published image from the compose file (`swarm/docker-compose.yaml`) where we need to change the name of our image `docker stack deploy --with-registry-auth -c ./docker-compose.yaml stage;`.

5. Now the service of 5 copies is launched, and you can check its work at the url http://localhost:3000 you can already convert .mp4 videos to .gifs using the form or the button.

6. You can run cypress tests from the cypress folder using the `npm start` or `npm test command`, they will be launched in the browser or in the console, respectively.

P.S.
The client's source code is in the `/ffmpeg-cli` folder, it has already been built and copied to the node server, where it is given, in a separate container.
I didn't do it because of the CORS problems of the form. I also didn't do everything else to speed it up and make it easier. Minimal prototype functionality.