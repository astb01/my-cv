pipeline {
  environment {
    registry = "astb01/my-cv"
    registryCredential = "docker-credentials"
    dockerImage = ""
  }

  agent any
  
  tools { nodejs "node-js" }

  stages {
    stage("Clone Git"){
      steps {
        echo "Cloning project my-cv ..."
        git "git@github.com:astb01/my-cv.git"
      }
    }

    stage("Install dependencies") {
      steps {
        echo "Installing dependencies ..."
        sh "npm install && npm cache verify"
      }
    }

    stage("Test Application") {
      steps {
        echo "Running tests ..."
        sh "npm test"
      }
    }
    stage("Build Image") {
      steps {
        echo "Building Docker image for my-cv ..."
        sh "docker build --tag astb01/my-cv:${env.BUILD_ID} ."
        sh "docker tag astb01/my-cv:${env.BUILD_ID} astb01/my-cv:latest"
      }
    }
    // stage("Publish") {
    //   steps {
    //     withDockerRegistry([credentialsId: "docker-credentials", url: ""]) {
    //       sh "docker push astb01/my-cv:${env.BUILD_ID}"
    //       sh "docker push astb01/my-cv:latest"
    //     }
    //   }
    // }
  }

  post {
    success {
      withDockerRegistry([credentialsId: "docker-credentials", url: ""]) {
        sh "docker push astb01/my-cv:${env.BUILD_ID}"
        sh "docker push astb01/my-cv:latest"
      }
    }
  }

  //post {
  //  success {
      //withCredentials([usernamePassword(credentialsId: "docker-credentials", usernameVariable: "USERNAME", passwordVariable: "PASSWORD")]) {
      //  sh "docker login -u ${USERNAME} -p ${PASSWORD}"
      //  sh "docker push astb01/my-cv:${env.BUILD_ID}"
      //  sh "docker push astb01/my-cv:latest"

  //    }
  //  }
  //}
}