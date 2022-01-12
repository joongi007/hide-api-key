# Netlify Serverless Functions

### step by step
-----------------
##### step 1
kor: 아래 저장소를  자신의 저장소에  복사하고 git clone으로 로컬과 연결하세요.
eng: Copy the repository below to your repository and connect it locally with a git clone.

repo: https://github.com/netlify/explorers-up-and-running-with-serverless-functions


##### step 2

    $ ntl --version

kor: 위의 명령어로 netlify-cli가 설치가 되어있는지 확인하세요. 없으면 아래 명령어를 통해 설치합니다.
eng: Make sure that netify-cli is installed with the command above. If not, install it through the command below.

    $ npm install netlify-cli -g

    $ ntl --version

##### step 3
kor: ntl login 명령어를 사용하여 브라우저에서 로그인 인증 후 ntl init로 초기 설정을 합니다.
eng: Use the "ntl login" command to authenticate login in the browser and initialize to "ntl init".

    $ ntl login

    $ ntl init

    >Choose "Create & configure a new site"
    >Team(Use arrow keys): BenCodeZen's Team
    >Site name : {your site name}
    >Your build command : # no build command
    >Directory to delpoy : public
    >Netlify functions folder: netlify/functions
    >No netlify.toml detected ~~~: Y

##### step 4
kor: 프로젝트 폴더내 netlify 폴더를 생성하고 그 안에 fuctions 폴더를 생성합니다. 현재 프로젝트 트리는 아래와 같습니다.
eng: Create a "netify" folder in the project folder and create a "functions" folder in it. The current project tree is as follows.
```
.
+-- .netlify
+-- netlify\functions
+-- public
|   +-- index.html
+-- .gitiginore
+-- netlify.toml
+-- README.md
```
##### step 5
kor: 아래 명령어를 따라하세요. 그리고 .gitignore 파일에 "node_modules"를 추가하세요.
eng: Follow the instructions below. And add "node_modules" to the .gitignore file.
```
$ npm init

$ npm install --save-dev axios
```
.gitignore
```
.DS_Store

# Local Netlify folder
.netlify

node_modules
```


##### step 6
kor: netlfy\functions 밑에 js 형식의 파일을 생성합니다. 그 js파일에 아래 양식을 이용하여 원하는 api를 리턴하는 코드를 작성하세요.
eng: Create a file in the format "js" under "netlfy\functions". Fill out the code in the "js" file to return the desired "api" using the form below.

```javascript
// javascript
const axios = require('axios')

exports.handler = async function(event, context){
    const ENV = process.env.{Your Env} // Environmental variables.
    const url = `{Your Api Url}`;
    const response = await axios.get(url)
    const data = await response.data

    return {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "content-type": "application/json; charset=utf-8",
        },
        statusCode: 200,
        body: JSON.stringify(data),
    }
}
```
##### step 7
kor: public\index.html 에 \<script> 영역을 아래 형식의 코드로 대체합니다. 
eng: Replace the \<script> area in public\index.html with the code format below.
```html
    <script type="module">
      document.addEventListener('DOMContentLoaded', () => {
        const fetchBtn = document.getElementById('fetch-btn')
        const responseText = document.getElementById('response-output')

        fetchBtn.addEventListener('click', async () => {
          const response = await fetch('/.netlify/functions/{Your Function Name}').then(
            response => response.json()
          )
          responseText.innerText = JSON.stringify(response);
        })
      })
    </script>
```
kor: 이제 로컬 영역에서 test할 수 있게 되었습니다. 아래 명령어를 이용해서 test 해보세요.
eng: It can now be tested in the local area. Test according to the instructions below.
```
$ ntl dev
```
   
##### step 8
kor: 아래 명령어를 통해 깃허브에 올리면 netlify 사이트에 자동으로 deploy 됩니다. "https://{Your Site Name}.netlify.app/.netlify/functions/{Your Functions}" 형태로 api를 호출할 수 있게 됩니다.
eng: If you upload it to the GitHub through the command below, it will automatically "deploy" the "netlify" site. You will be able to call api in the form of "https://{Your Site Name}.netify.app/.netify/functions/{Your Functions}".
```
$ git add *
$ git commit -m "{What you want to write.}"
$ git push origin master
```

kor: netlify 사이트에 deploy된 프로젝트에 가서 원하는 환경변수를 설정하시면 됩니다.
eng: You can go to a project that has been "deployed" on the netlify site and set up the environmental variables you want.