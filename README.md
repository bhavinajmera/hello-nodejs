# hello-nodejs

oc new-build nodejs~https://github.com/bhavinajmera/hello-nodejs --name=nodejs-build


oc get is
#NAME                DOCKER REPO

nodejs-build        docker-registry.default.svc:5000/hello01/nodejs-build
 
 oc new-app nodejs-build --name=nodejs-ms
 
 oc expose svc nodejs-ms
